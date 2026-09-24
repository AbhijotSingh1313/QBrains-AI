import { Observable, ObservableValue } from "../base/Obs.js";
import { Revision } from "../base/Revision.js";
import { CircuitDefinition } from "../circuit/CircuitDefinition.js";
import { fromJsonText_CircuitDefinition } from "../circuit/Serializer.js";
import { DisplayedInspector } from "./DisplayedInspector.js";
import { simulate } from "./sim.js";
import { Util } from "../base/Util.js";

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * StepByStepInspector walks through every circuit operation step-by-step,
 * extracting quantum state evolution from the existing simulator and providing
 * rich educational explanations while keeping the circuit fully visible.
 */
class StepByStepInspector {
    /**
     * @param {ObservableValue<DisplayedInspector>} displayedInspector
     * @param {Revision} revision
     */
    constructor(displayedInspector, revision) {
        this.displayedInspector = displayedInspector;
        this.revision = revision;
        this.currentStep = 0;
        this.steps = [];
        this.playing = new ObservableValue(false);
        this.container = document.getElementById("circuit-inspector");
        this.contentEl = document.getElementById("inspector-step-content");
        this.counterEl = document.getElementById("inspector-step-counter");
        this.menuEl = document.getElementById("circuit-inspector-menu");
        this.dragHandle = document.getElementById("inspector-drag-handle");

        this.initListeners();
        this.initDraggable();
    }

    /**
     * @returns {CircuitDefinition}
     */
    getActiveCircuitDefinition() {
        return fromJsonText_CircuitDefinition(this.revision.peekActiveCommit());
    }

    initListeners() {
        const enableBtn = document.getElementById("enable-inspector-button");
        if (enableBtn) {
            enableBtn.addEventListener("click", () => this.enable());
        }

        const overlay = document.getElementById("circuit-inspector-overlay");
        if (overlay) {
            overlay.addEventListener("click", () => this.disable());
        }

        const closeBtn = document.getElementById("inspector-close-btn");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => this.disable());
        }

        const startBtn = document.getElementById("inspector-start");
        if (startBtn) {
            startBtn.addEventListener("click", () => this.goToStep(0));
        }

        const prevBtn = document.getElementById("inspector-step-left");
        if (prevBtn) {
            prevBtn.addEventListener("click", () => this.previousStep());
        }

        const playBtn = document.getElementById("inspector-play");
        if (playBtn) {
            playBtn.addEventListener("click", () => this.play());
        }

        const pauseBtn = document.getElementById("inspector-pause");
        if (pauseBtn) {
            pauseBtn.addEventListener("click", () => this.pause());
        }

        const nextBtn = document.getElementById("inspector-step-right");
        if (nextBtn) {
            nextBtn.addEventListener("click", () => this.nextStep());
        }

        const endBtn = document.getElementById("inspector-end");
        if (endBtn) {
            endBtn.addEventListener("click", () => this.goToStep(this.steps.length - 1));
        }

        this.playing.observable().subscribe(playing => {
            if (playing) this.frame();
            const pBtn = document.getElementById("inspector-play");
            const psBtn = document.getElementById("inspector-pause");
            if (pBtn) pBtn.style.display = !playing ? "inline-flex" : "none";
            if (psBtn) psBtn.style.display = playing ? "inline-flex" : "none";
        });

        // If circuit changes while inspector is open, refresh steps
        this.revision.latestActiveCommit().subscribe(() => {
            if (this.container && this.container.style.display !== "none") {
                this.refreshSteps(false);
            }
        });
    }

    initDraggable() {
        if (!this.dragHandle || !this.menuEl) return;

        let isDragging = false;
        let startX = 0;
        let startY = 0;
        let initialLeft = 0;
        let initialTop = 0;

        const onMouseDown = (e) => {
            isDragging = true;
            const rect = this.menuEl.getBoundingClientRect();
            startX = e.clientX;
            startY = e.clientY;
            initialLeft = rect.left;
            initialTop = rect.top;

            this.menuEl.style.transform = "none";
            this.menuEl.style.left = `${initialLeft}px`;
            this.menuEl.style.top = `${initialTop}px`;
            this.menuEl.style.bottom = "auto";

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
            e.preventDefault();
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            let newLeft = Math.max(10, Math.min(window.innerWidth - this.menuEl.offsetWidth - 10, initialLeft + dx));
            let newTop = Math.max(10, Math.min(window.innerHeight - this.menuEl.offsetHeight - 10, initialTop + dy));

            this.menuEl.style.left = `${newLeft}px`;
            this.menuEl.style.top = `${newTop}px`;
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        this.dragHandle.addEventListener("mousedown", onMouseDown);
    }

    enable() {
        if (!this.container) return;
        this.container.style.display = "block";
        this.refreshSteps(true);
    }

    disable() {
        this.pause();
        // Clear highlighted slot in circuit
        if (this.displayedInspector && this.displayedInspector.get()) {
            this.displayedInspector.set(this.displayedInspector.get().withHighlightedSlot(undefined));
        }
        if (this.container) {
            this.container.style.display = "none";
        }
    }

    play() {
        this.playing.set(true);
    }

    pause() {
        this.playing.set(false);
    }

    frame() {
        if (!this.playing.get() || this.currentStep >= this.steps.length - 1) {
            this.playing.set(false);
            return;
        }

        this.nextStep();
        setTimeout(() => this.frame(), 1800);
    }

    previousStep() {
        if (this.currentStep > 0) {
            this.goToStep(this.currentStep - 1);
        }
    }

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            this.goToStep(this.currentStep + 1);
        }
    }

    goToStep(index) {
        if (index < 0 || index >= this.steps.length) return;
        this.currentStep = index;
        this.renderCurrentStep();
    }

    refreshSteps(resetToZero = false) {
        const circuit = this.getActiveCircuitDefinition();
        this.steps = this.extractCircuitSteps(circuit);
        if (resetToZero || this.currentStep >= this.steps.length) {
            this.currentStep = 0;
        }
        this.renderCurrentStep();
    }

    /**
     * Extracts all sequential operations from the circuit.
     * @param {CircuitDefinition} circuit
     * @returns {Array<Object>}
     */
    extractCircuitSteps(circuit) {
        const steps = [];

        // Step 0: Initial State
        steps.push({
            type: "initial",
            title: "Initial Circuit State",
            symbol: "|0...0⟩",
            colIndex: -1,
            slots: [],
            targets: Array.from({ length: circuit.numWires }, (_, i) => i),
            controls: [],
            explanation: "All qubits are initialized in their ground computational basis state |0⟩. The total quantum state vector is |00...0⟩ with 100% probability."
        });

        // Scan columns for quantum operations
        for (let c = 0; c < circuit.columns.length; c++) {
            const col = circuit.columns[c];
            if (!col || col.isEmpty()) continue;

            const gates = col.gates;
            const cWires = [];
            const swapWires = [];
            const targetGates = [];

            for (let w = 0; w < circuit.numWires; w++) {
                const gate = gates[w];
                if (!gate) continue;

                // Check for spacers / display gates
                if (gate.symbol === "…" || gate.serializedId === "…") continue;

                if (gate.isControl()) {
                    cWires.push(w);
                } else if (gate.symbol === "Swap" || gate.name === "Swap" || gate.serializedId === "Swap") {
                    swapWires.push(w);
                } else {
                    targetGates.push({ wire: w, gate });
                }
            }

            // Handle SWAP gates (pair of swap half gates)
            if (swapWires.length >= 2) {
                const qA = swapWires[0];
                const qB = swapWires[1];
                const isControlled = cWires.length > 0;
                steps.push({
                    type: isControlled ? "cswap" : "swap",
                    title: isControlled ? "Controlled-SWAP (Fredkin)" : "SWAP Gate",
                    symbol: isControlled ? "CSWAP" : "SWAP",
                    colIndex: c,
                    slots: swapWires.map(r => ({ col: c, row: r })).concat(cWires.map(r => ({ col: c, row: r }))),
                    targets: [qA, qB],
                    controls: cWires,
                    gate: gates[qA],
                    explanation: isControlled
                        ? `The Fredkin gate exchanges the quantum states of qubits q${qA} and q${qB} conditionally based on control qubit(s) q${cWires.join(", q")}.`
                        : `Exchanges the quantum states between qubit q${qA} and qubit q${qB} without altering other wire states.`
                });
            }

            // Handle controlled target gates
            if (cWires.length > 0 && targetGates.length > 0) {
                for (const tg of targetGates) {
                    const gateName = tg.gate.name || tg.gate.symbol || "Gate";
                    let opTitle = `Controlled ${gateName}`;
                    let opSymbol = `C-${tg.gate.symbol || "G"}`;
                    let explanation = "";

                    if (tg.gate.symbol === "X" || tg.gate.serializedId === "X") {
                        if (cWires.length === 1) {
                            opTitle = "Controlled-NOT (CNOT / CX)";
                            opSymbol = "CX";
                            explanation = `Flips target qubit q${tg.wire} if and only if control qubit q${cWires[0]} is |1⟩. When the control qubit is in superposition, this operation entangles the two qubits into a Bell state.`;
                        } else if (cWires.length === 2) {
                            opTitle = "Toffoli Gate (CCX)";
                            opSymbol = "CCX";
                            explanation = `Flips target qubit q${tg.wire} if and only if both control qubits (q${cWires[0]}, q${cWires[1]}) are |1⟩. Acts as a universal reversible AND gate.`;
                        } else {
                            opTitle = "Multi-Controlled NOT";
                            opSymbol = "MCX";
                            explanation = `Flips target qubit q${tg.wire} only when all control qubits (${cWires.map(w => 'q' + w).join(', ')}) are in the |1⟩ state.`;
                        }
                    } else if (tg.gate.symbol === "Z" || tg.gate.serializedId === "Z") {
                        opTitle = "Controlled-Z (CZ)";
                        opSymbol = "CZ";
                        explanation = `Applies a π (180°) phase flip to the state where both control and target are |1⟩. Creates symmetric quantum entanglement between qubits.`;
                    } else if (tg.gate.symbol === "Y" || tg.gate.serializedId === "Y") {
                        opTitle = "Controlled-Y (CY)";
                        opSymbol = "CY";
                        explanation = `Conditionally rotates target qubit q${tg.wire} by 180° around the Y-axis when control qubit q${cWires[0]} is |1⟩.`;
                    } else if (tg.gate.symbol === "H" || tg.gate.serializedId === "H") {
                        opTitle = "Controlled-Hadamard (CH)";
                        opSymbol = "CH";
                        explanation = `Conditionally applies the Hadamard transformation to target qubit q${tg.wire} if control qubit q${cWires[0]} is |1⟩.`;
                    } else {
                        explanation = `Applies ${gateName} to target qubit q${tg.wire} conditionally based on control qubit(s) q${cWires.join(", q")}.`;
                    }

                    steps.push({
                        type: "controlled_gate",
                        title: opTitle,
                        symbol: opSymbol,
                        colIndex: c,
                        slots: cWires.map(r => ({ col: c, row: r })).concat([{ col: c, row: tg.wire }]),
                        targets: [tg.wire],
                        controls: cWires,
                        gate: tg.gate,
                        explanation
                    });
                }
            } else if (cWires.length === 0 && targetGates.length > 0) {
                // Single or independent non-controlled gates
                for (const tg of targetGates) {
                    const gate = tg.gate;
                    const gName = gate.name || gate.symbol || "Quantum Gate";
                    const gSym = gate.symbol || gate.serializedId || "G";
                    let explanation = this.getStandardGateExplanation(gSym, gName, tg.wire);

                    steps.push({
                        type: "single_gate",
                        title: gName,
                        symbol: gSym,
                        colIndex: c,
                        slots: [{ col: c, row: tg.wire }],
                        targets: [tg.wire],
                        controls: [],
                        gate,
                        explanation
                    });
                }
            }
        }

        // Final Step: Final State
        steps.push({
            type: "final",
            title: "Final Circuit State",
            symbol: "|ψ_out⟩",
            colIndex: circuit.columns.length,
            slots: [],
            targets: Array.from({ length: circuit.numWires }, (_, i) => i),
            controls: [],
            explanation: "The final quantum state after evaluating all circuit operations. Below are the resulting amplitudes and measurement probabilities across computational basis states."
        });

        return steps;
    }

    /**
     * Provides concise, deterministic educational explanations for quantum gates.
     */
    getStandardGateExplanation(symbol, name, wire) {
        switch (symbol) {
            case "H":
                return `The Hadamard gate transforms basis state |0⟩ into equal superposition |+⟩ = (|0⟩ + |1⟩)/√2 and |1⟩ into |-⟩. Equalizes measurement probabilities to 50% for 0 and 1 on q${wire}.`;
            case "X":
                return `The Pauli-X gate acts as a quantum bit-flip (NOT), swapping |0⟩ ↔ |1⟩ on qubit q${wire} by rotating 180° around the X-axis of the Bloch sphere.`;
            case "Y":
                return `The Pauli-Y gate performs a combined bit-flip and phase-flip (|0⟩ → i|1⟩, |1⟩ → -i|0⟩) on qubit q${wire} by rotating 180° around the Y-axis.`;
            case "Z":
                return `The Pauli-Z gate leaves |0⟩ unchanged and flips the phase of |1⟩ by 180° (|1⟩ → -|1⟩) on qubit q${wire}, rotating around the Z-axis.`;
            case "S":
                return `The S (Phase) gate applies a +90° (π/2) phase shift to state |1⟩ (|1⟩ → i|1⟩) on qubit q${wire}, acting as a quarter-turn around the Z-axis.`;
            case "S^-1":
            case "S†":
                return `The conjugate phase gate applies a -90° (-π/2) phase shift to state |1⟩ (|1⟩ → -i|1⟩) on qubit q${wire}.`;
            case "T":
                return `The T (π/8) gate applies a +45° (π/4) phase rotation to |1⟩ on qubit q${wire}, essential for universal fault-tolerant quantum computation.`;
            case "T^-1":
            case "T†":
                return `The inverse T gate applies a -45° (-π/4) phase rotation to |1⟩ on qubit q${wire}.`;
            case "M":
            case "Measure":
                return `Measurement projects qubit q${wire}'s superposition onto a definite classical basis state (|0⟩ or |1⟩) with probability given by the Born rule. Quantum coherence is collapsed.`;
            case "Bloch":
                return `Non-destructive inspection probe displaying the local Bloch sphere coordinates for qubit q${wire}.`;
            default:
                if (symbol && symbol.startsWith("R")) {
                    return `Applies a continuous single-qubit rotation (${name}) on qubit q${wire} around the specified Bloch sphere axis.`;
                }
                return `Applies the ${name} operation to qubit q${wire}, evolving its quantum state and probability amplitudes.`;
        }
    }

    /**
     * Renders the current step into the Inspector UI and highlights circuit gates.
     */
    renderCurrentStep() {
        if (!this.steps || this.steps.length === 0) return;
        const step = this.steps[this.currentStep];
        const circuit = this.getActiveCircuitDefinition();

        // 1. Highlight the gate(s) in the circuit
        if (this.displayedInspector && this.displayedInspector.get()) {
            this.displayedInspector.set(
                this.displayedInspector.get().withHighlightedSlot(step.slots && step.slots.length > 0 ? step.slots : undefined)
            );
        }

        // 2. Update step counter badge
        if (this.counterEl) {
            this.counterEl.textContent = `Step ${this.currentStep} of ${this.steps.length - 1}`;
        }

        // 3. Update button enabled/disabled states
        const startBtn = document.getElementById("inspector-start");
        const prevBtn = document.getElementById("inspector-step-left");
        const nextBtn = document.getElementById("inspector-step-right");
        const endBtn = document.getElementById("inspector-end");

        if (startBtn) startBtn.disabled = this.currentStep === 0;
        if (prevBtn) prevBtn.disabled = this.currentStep === 0;
        if (nextBtn) nextBtn.disabled = this.currentStep === this.steps.length - 1;
        if (endBtn) endBtn.disabled = this.currentStep === this.steps.length - 1;

        // 4. Compute state before and after this operation using existing simulator
        let stateBeforeStr = "|0⟩";
        let stateAfterStr = "|0⟩";
        let subBeforeStr = "q0: 100% |0⟩";
        let subAfterStr = "q0: 100% |0⟩";
        let opNotation = step.symbol;

        try {
            if (step.type === "initial") {
                const subInit = circuit.withColumns([]);
                const statsInit = simulate(subInit);
                stateBeforeStr = "—";
                subBeforeStr = "System initialization";
                stateAfterStr = this.formatSystemState(statsInit, circuit.numWires);
                subAfterStr = this.formatSingleWireSummary(statsInit, circuit.numWires);
                opNotation = "Initialize |0...0⟩";
            } else if (step.type === "final") {
                const statsFull = simulate(circuit);
                stateBeforeStr = "All gates executed";
                subBeforeStr = "Pre-measurement state";
                stateAfterStr = this.formatSystemState(statsFull, circuit.numWires);
                subAfterStr = this.formatSingleWireSummary(statsFull, circuit.numWires);
                opNotation = "Final State";
            } else {
                // Sub-circuit before column
                const subBefore = circuit.withColumns(circuit.columns.slice(0, step.colIndex));
                const statsBefore = simulate(subBefore);

                // Sub-circuit after column
                const subAfter = circuit.withColumns(circuit.columns.slice(0, step.colIndex + 1));
                const statsAfter = simulate(subAfter);

                if (step.targets.length === 1 && step.controls.length === 0) {
                    const tw = step.targets[0];
                    stateBeforeStr = this.formatQubitState(statsBefore, tw);
                    subBeforeStr = this.formatQubitProbabilities(statsBefore, tw);

                    stateAfterStr = this.formatQubitState(statsAfter, tw);
                    subAfterStr = this.formatQubitProbabilities(statsAfter, tw);

                    opNotation = `${step.symbol} |q${tw}⟩`;
                } else {
                    stateBeforeStr = this.formatSystemState(statsBefore, circuit.numWires);
                    subBeforeStr = step.controls.length > 0
                        ? `Control: q${step.controls.join(", q")}`
                        : "Target qubits: q" + step.targets.join(", q");

                    stateAfterStr = this.formatSystemState(statsAfter, circuit.numWires);
                    subAfterStr = `Target: q${step.targets.join(", q")}`;

                    opNotation = step.controls.length > 0
                        ? `${step.symbol}(q${step.controls.join(", q")}; q${step.targets.join(", q")})`
                        : `${step.symbol}(q${step.targets.join(", q")})`;
                }
            }
        } catch (e) {
            console.error("Error computing inspector step stats:", e);
        }

        // 5. Populate Inspector Body
        let targetTagsHtml = "";
        if (step.controls.length > 0) {
            targetTagsHtml += `<span class="qlp-insp-tag control">Control: q${step.controls.join(", q")}</span>`;
        }
        if (step.targets.length > 0) {
            targetTagsHtml += `<span class="qlp-insp-tag target">Target: q${step.targets.join(", q")}</span>`;
        }
        if (step.colIndex >= 0 && step.type !== "final") {
            targetTagsHtml += `<span class="qlp-insp-tag">Col ${step.colIndex}</span>`;
        }

        if (this.contentEl) {
            this.contentEl.innerHTML = `
                <div class="qlp-insp-step-top">
                    <div class="qlp-insp-gate-info">
                        <span class="qlp-insp-gate-badge">${escapeHtml(step.symbol)}</span>
                        <span class="qlp-insp-gate-name">${escapeHtml(step.title)}</span>
                    </div>
                    <div class="qlp-insp-tags">
                        ${targetTagsHtml}
                    </div>
                </div>

                <div class="qlp-insp-evolution">
                    <div class="qlp-insp-state-box">
                        <span class="qlp-insp-state-label">Before</span>
                        <span class="qlp-insp-state-val">${escapeHtml(stateBeforeStr)}</span>
                        <span class="qlp-insp-state-sub">${escapeHtml(subBeforeStr)}</span>
                    </div>
                    <div class="qlp-insp-arrow">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div class="qlp-insp-state-box">
                        <span class="qlp-insp-state-label">After (${escapeHtml(opNotation)})</span>
                        <span class="qlp-insp-state-val">${escapeHtml(stateAfterStr)}</span>
                        <span class="qlp-insp-state-sub">${escapeHtml(subAfterStr)}</span>
                    </div>
                </div>

                <div class="qlp-insp-effect">
                    ${escapeHtml(step.explanation)}
                </div>
            `;
        }
    }

    /**
     * Formats single qubit state using density matrix / probabilities.
     */
    formatQubitState(stats, wire) {
        if (!stats) return "|0⟩";
        const p1 = stats.controlledWireProbabilityJustAfter(wire, Infinity);
        const p0 = 1 - p1;

        if (p0 > 0.999) return "|0⟩";
        if (p1 > 0.999) return "|1⟩";
        if (Math.abs(p0 - 0.5) < 0.02) {
            try {
                const dens = stats.qubitDensityMatrix(Infinity, wire);
                if (dens) {
                    const buf = dens.rawBuffer();
                    const realPart = buf[2]; // off-diagonal real part
                    if (realPart > 0.3) return "|+⟩";
                    if (realPart < -0.3) return "|-⟩";
                }
            } catch (ex) {}
            return "(|0⟩ + |1⟩)/√2";
        }

        return `${Math.sqrt(p0).toFixed(2)}|0⟩ + ${Math.sqrt(p1).toFixed(2)}|1⟩`;
    }

    formatQubitProbabilities(stats, wire) {
        if (!stats) return "P(0): 100%, P(1): 0%";
        const p1 = stats.controlledWireProbabilityJustAfter(wire, Infinity);
        const p0 = 1 - p1;
        return `P(0): ${(p0 * 100).toFixed(1)}%, P(1): ${(p1 * 100).toFixed(1)}%`;
    }

    /**
     * Formats overall system state vector into human readable Dirac ket notation.
     */
    formatSystemState(stats, numWires) {
        if (!stats || !stats.finalState) return "|0...0⟩";
        const matrix = stats.finalState;
        const buf = matrix.rawBuffer();
        const totalStates = 1 << Math.min(numWires, 8);
        const terms = [];

        for (let i = 0; i < totalStates; i++) {
            const real = buf[2 * i];
            const imag = buf[2 * i + 1];
            const magSq = real * real + imag * imag;

            if (magSq > 0.005) {
                const binStr = i.toString(2).padStart(numWires, "0");
                const mag = Math.sqrt(magSq);
                const sign = real < -0.01 ? "-" : (terms.length > 0 ? "+" : "");
                let coeff = mag.toFixed(3);
                if (Math.abs(mag - 1.0) < 0.01) {
                    coeff = "";
                } else if (Math.abs(mag - 0.707) < 0.02) {
                    coeff = "1/√2";
                }
                terms.push(`${sign} ${coeff}|${binStr}⟩`.trim());
            }
        }

        if (terms.length === 0) return "|0...0⟩";
        if (terms.length > 4) {
            return terms.slice(0, 4).join(" ") + ` ... (${terms.length} terms)`;
        }
        return terms.join(" ");
    }

    formatSingleWireSummary(stats, numWires) {
        if (!stats) return "";
        const parts = [];
        for (let w = 0; w < Math.min(numWires, 4); w++) {
            const p1 = stats.controlledWireProbabilityJustAfter(w, Infinity);
            parts.push(`q${w}: ${(p1 * 100).toFixed(0)}% |1⟩`);
        }
        return parts.join(" • ");
    }
}

export default StepByStepInspector;