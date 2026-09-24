/**
 * Circuit-Aware AI Quantum Tutor Frontend Bridge
 * Reads live circuit and simulation state from Quirk without altering simulation engine.
 */

class AITutorBridge {
    constructor(displayedInspector, mostRecentStats) {
        this.displayedInspector = displayedInspector;
        this.mostRecentStats = mostRecentStats;
        this.conversationHistory = [];
        this.apiBase = "http://localhost:8000";
        this.isBusy = false;

        this.initDOMElements();
        this.initListeners();
        this.startCircuitObserver();
    }

    initDOMElements() {
        this.panel = document.getElementById("qlp-tutor-panel");
        this.toggleBtn = document.getElementById("ai-tutor-button");
        this.closeBtn = document.getElementById("qlp-tutor-close");
        this.messagesContainer = document.getElementById("qlp-tutor-messages");
        this.inputArea = document.getElementById("qlp-tutor-input");
        this.sendBtn = document.getElementById("qlp-tutor-send");
        this.clearBtn = document.getElementById("qlp-tutor-clear");
        this.circuitBadge = document.getElementById("qlp-tutor-circuit-text");
        this.difficultySelect = document.getElementById("qlp-tutor-difficulty");
        this.includeCircuitCheckbox = document.getElementById("qlp-tutor-send-circuit");
        this.chipButtons = document.querySelectorAll(".qlp-tutor-chip");
    }

    initListeners() {
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener("click", () => this.togglePanel());
        }
        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", () => this.closePanel());
        }
        if (this.sendBtn) {
            this.sendBtn.addEventListener("click", () => this.handleUserSend());
        }
        if (this.clearBtn) {
            this.clearBtn.addEventListener("click", () => this.clearHistory());
        }

        if (this.inputArea) {
            this.inputArea.addEventListener("keydown", (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    this.handleUserSend();
                }
            });
            // Auto-resize
            this.inputArea.addEventListener("input", () => {
                this.inputArea.style.height = "auto";
                this.inputArea.style.height = Math.min(this.inputArea.scrollHeight, 120) + "px";
            });
        }

        if (this.chipButtons) {
            this.chipButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    const prompt = btn.getAttribute("data-prompt");
                    if (prompt) {
                        this.openPanel();
                        this.sendUserPrompt(prompt);
                    }
                });
            });
        }
    }

    togglePanel() {
        if (!this.panel) return;
        const isShown = this.panel.style.display === "flex";
        if (isShown) {
            this.closePanel();
        } else {
            this.openPanel();
        }
    }

    openPanel() {
        if (!this.panel) return;
        this.panel.style.display = "flex";
        if (this.toggleBtn) {
            this.toggleBtn.classList.add("active");
        }
        if (this.inputArea) {
            setTimeout(() => this.inputArea.focus(), 150);
        }
        this.updateCircuitContextBadge();
    }

    closePanel() {
        if (!this.panel) return;
        this.panel.style.display = "none";
        if (this.toggleBtn) {
            this.toggleBtn.classList.remove("active");
        }
    }

    startCircuitObserver() {
        // Poll or hook into stats changes
        setInterval(() => {
            this.updateCircuitContextBadge();
        }, 1200);
    }

    extractCurrentCircuit() {
        try {
            let circuitDef = null;
            let stats = null;

            if (this.displayedInspector && typeof this.displayedInspector.get === "function") {
                try {
                    const ins = this.displayedInspector.get();
                    if (ins && ins.displayedCircuit) {
                        circuitDef = ins.displayedCircuit.circuitDefinition;
                    }
                } catch (e) {}
            }
            if (!circuitDef && typeof window !== "undefined" && window.displayed && typeof window.displayed.get === "function") {
                try {
                    const ins = window.displayed.get();
                    if (ins && ins.displayedCircuit) {
                        circuitDef = ins.displayedCircuit.circuitDefinition;
                    }
                } catch (e) {}
            }

            if (this.mostRecentStats && typeof this.mostRecentStats.get === "function") {
                try { stats = this.mostRecentStats.get(); } catch (e) {}
            }
            if (!stats && typeof window !== "undefined" && window.mostRecentStats && typeof window.mostRecentStats.get === "function") {
                try { stats = window.mostRecentStats.get(); } catch (e) {}
            }

            if (circuitDef) {
                const numWires = circuitDef.numWires;
                const columns = circuitDef.columns;

                const operations = [];
                for (let colIdx = 0; colIdx < columns.length; colIdx++) {
                    const col = columns[colIdx];
                    const controls = [];
                    const targets = [];
                    let gateName = "";

                    for (let wireIdx = 0; wireIdx < col.gates.length; wireIdx++) {
                        const gate = col.gates[wireIdx];
                        if (!gate) continue;

                        if (gate.symbol === "•" || gate.symbol === "◦") {
                            controls.push(wireIdx);
                        } else {
                            targets.push(wireIdx);
                            gateName = gate.name || gate.symbol || "Gate";
                        }
                    }

                    if (targets.length > 0) {
                        operations.push({
                            gate: gateName,
                            targets: targets,
                            controls: controls,
                            column: colIdx
                        });
                    } else if (controls.length > 0) {
                        operations.push({
                            gate: "ControlNode",
                            targets: controls,
                            controls: [],
                            column: colIdx
                        });
                    }
                }

                // Extract simulation statevector & probabilities
                let statevectorSummary = null;
                let probabilities = null;

                if (stats && stats.finalState) {
                    try {
                        const readable = stats.toReadableJson(true);
                        if (readable && readable.output_amplitudes) {
                            const nonZero = [];
                            probabilities = {};
                            const n = readable.output_amplitudes.length;
                            const numBits = Math.max(1, Math.round(Math.log2(n)));

                            for (let i = 0; i < n; i++) {
                                const amp = readable.output_amplitudes[i];
                                const prob = amp.m * amp.m;
                                const basis = i.toString(2).padStart(numBits, '0');
                                if (prob > 0.005) {
                                    nonZero.push(`${amp.m.toFixed(3)}|${basis}⟩ (p=${(prob*100).toFixed(1)}%)`);
                                    probabilities[basis] = Math.round(prob * 1000) / 1000;
                                }
                            }
                            statevectorSummary = nonZero.length > 0 ? nonZero.join(" + ") : "Ground state |0...0⟩ (100%)";
                        }
                    } catch (ex) {
                        console.warn("Could not format output amplitudes:", ex);
                    }
                }

                return {
                    qubits: numWires,
                    depth: columns.length,
                    operations: operations,
                    statevector_summary: statevectorSummary,
                    probabilities: probabilities,
                    selected_gate: null
                };
            }

            // Fallback 1: Parse from export JSON pre element
            const jsonPre = document.getElementById("export-circuit-json-pre");
            if (jsonPre && jsonPre.innerText && jsonPre.innerText.trim().startsWith("{")) {
                try {
                    const parsed = JSON.parse(jsonPre.innerText);
                    if (parsed.cols) return this.extractFromColsJson(parsed);
                } catch (e) {}
            }

            // Fallback 2: Parse from window.location.hash
            if (typeof window !== "undefined" && window.location.hash && window.location.hash.includes("circuit=")) {
                try {
                    const match = window.location.hash.match(/circuit=([^&]+)/);
                    if (match) {
                        const parsed = JSON.parse(decodeURIComponent(match[1]));
                        if (parsed.cols) return this.extractFromColsJson(parsed);
                    }
                } catch (e) {}
            }

            return { qubits: 0, depth: 0, operations: [] };
        } catch (e) {
            console.warn("Error extracting circuit state:", e);
            return { qubits: 0, depth: 0, operations: [] };
        }
    }

    extractFromColsJson(parsed) {
        const cols = parsed.cols || [];
        let maxWire = 0;
        const operations = [];

        cols.forEach((col, colIdx) => {
            const controls = [];
            const targets = [];
            let gateName = "";

            if (Array.isArray(col)) {
                col.forEach((item, wireIdx) => {
                    if (item === 1 || item === null || item === undefined) return;
                    maxWire = Math.max(maxWire, wireIdx + 1);

                    if (item === "•" || item === "◦") {
                        controls.push(wireIdx);
                    } else {
                        targets.push(wireIdx);
                        gateName = typeof item === "string" ? item : "Gate";
                    }
                });
            }

            if (targets.length > 0) {
                operations.push({
                    gate: gateName,
                    targets: targets,
                    controls: controls,
                    column: colIdx
                });
            } else if (controls.length > 0) {
                operations.push({
                    gate: "ControlNode",
                    targets: controls,
                    controls: [],
                    column: colIdx
                });
            }
        });

        return {
            qubits: Math.max(maxWire, 1),
            depth: cols.length,
            operations: operations,
            statevector_summary: null,
            probabilities: null,
            selected_gate: null
        };
    }

    updateCircuitContextBadge() {
        if (!this.circuitBadge) return;
        const circuit = this.extractCurrentCircuit();
        if (circuit.qubits === 0 || circuit.operations.length === 0) {
            this.circuitBadge.textContent = `${circuit.qubits} Qubits · 0 Gates (Empty)`;
        } else {
            this.circuitBadge.textContent = `${circuit.qubits} Qubits · ${circuit.operations.length} Gates`;
        }
    }

    handleUserSend() {
        if (this.isBusy || !this.inputArea) return;
        const text = this.inputArea.value.trim();
        if (!text) return;
        this.inputArea.value = "";
        this.inputArea.style.height = "auto";
        this.sendUserPrompt(text);
    }

    sendUserPrompt(userMessage) {
        if (this.isBusy) return;
        this.isBusy = true;

        // 1. Render user message bubble
        this.appendMessage("user", userMessage);

        // 2. Render thinking indicator
        const thinkingId = this.appendThinkingIndicator();

        // 3. Extract live circuit context
        const includeCircuit = this.includeCircuitCheckbox ? this.includeCircuitCheckbox.checked : true;
        const circuitCtx = includeCircuit ? this.extractCurrentCircuit() : null;
        const difficulty = this.difficultySelect ? this.difficultySelect.value : "beginner";

        const payload = {
            message: userMessage,
            circuit_context: circuitCtx,
            conversation_history: this.conversationHistory,
            difficulty: difficulty
        };

        // 4. Dispatch request to FastAPI backend
        fetch(`${this.apiBase}/api/tutor/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if (!res.ok) {
                return res.text().then(errText => {
                    throw new Error(`Server returned status ${res.status}: ${errText}`);
                });
            }
            return res.json();
        })
        .then(data => {
            this.removeThinkingIndicator(thinkingId);
            this.appendMessage("assistant", data.reply, data.sources);
            // Save to memory
            this.conversationHistory.push({ role: "user", content: userMessage });
            this.conversationHistory.push({ role: "assistant", content: data.reply });
            if (this.conversationHistory.length > 12) {
                this.conversationHistory = this.conversationHistory.slice(-12);
            }
        })
        .catch(err => {
            this.removeThinkingIndicator(thinkingId);
            this.appendErrorMessage(
                `Could not connect to AI Tutor backend (${err.message}). ` +
                `Ensure the FastAPI backend server is running via 'run_backend.bat' or 'python -m uvicorn backend.main:app --port 8000'.`
            );
        })
        .finally(() => {
            this.isBusy = false;
        });
    }

    appendMessage(role, text, sources = []) {
        if (!this.messagesContainer) return;

        const msgDiv = document.createElement("div");
        msgDiv.className = `qlp-msg qlp-msg-${role === "user" ? "user" : "tutor"}`;

        const bubbleDiv = document.createElement("div");
        bubbleDiv.className = "qlp-msg-bubble";

        if (role === "assistant") {
            bubbleDiv.innerHTML = this.renderMarkdown(text);
            if (sources && sources.length > 0) {
                const sourcesDiv = document.createElement("div");
                sourcesDiv.className = "qlp-msg-sources";
                sourcesDiv.innerHTML = `<span class="qlp-sources-title"><i class="fa-solid fa-book-bookmark"></i> Grounded in:</span> ` +
                    sources.map(s => `<span class="qlp-source-pill">${this.escapeHtml(s.title || s.section)}</span>`).join(" ");
                bubbleDiv.appendChild(sourcesDiv);
            }
        } else {
            const p = document.createElement("p");
            p.textContent = text;
            bubbleDiv.appendChild(p);
        }

        msgDiv.appendChild(bubbleDiv);
        this.messagesContainer.appendChild(msgDiv);
        this.scrollToBottom();
    }

    appendThinkingIndicator() {
        if (!this.messagesContainer) return null;
        const id = "thinking-" + Date.now();
        const msgDiv = document.createElement("div");
        msgDiv.id = id;
        msgDiv.className = "qlp-msg qlp-msg-tutor qlp-msg-thinking";
        msgDiv.innerHTML = `
            <div class="qlp-msg-bubble">
                <div class="qlp-quantum-dots">
                    <span></span><span></span><span></span>
                </div>
                <span class="qlp-thinking-label">Consulting quantum curriculum & circuit state...</span>
            </div>
        `;
        this.messagesContainer.appendChild(msgDiv);
        this.scrollToBottom();
        return id;
    }

    removeThinkingIndicator(id) {
        if (!id) return;
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    appendErrorMessage(errMsg) {
        if (!this.messagesContainer) return;
        const msgDiv = document.createElement("div");
        msgDiv.className = "qlp-msg qlp-msg-tutor";
        const bubble = document.createElement("div");
        bubble.className = "qlp-msg-bubble qlp-msg-bubble-error";
        bubble.innerHTML = `
            <div class="qlp-error-callout">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <div>
                    <strong>Connection Issue:</strong>
                    <p style="margin: 4px 0 0 0;">${this.escapeHtml(errMsg)}</p>
                </div>
            </div>
        `;
        msgDiv.appendChild(bubble);
        this.messagesContainer.appendChild(msgDiv);
        this.scrollToBottom();
    }

    clearHistory() {
        this.conversationHistory = [];
        if (this.messagesContainer) {
            this.messagesContainer.innerHTML = `
                <div class="qlp-msg qlp-msg-tutor">
                    <div class="qlp-msg-bubble">
                        <p>Conversation history cleared. How can I help you explore your quantum circuit?</p>
                    </div>
                </div>
            `;
        }
    }

    scrollToBottom() {
        if (this.messagesContainer) {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }
    }

    renderMarkdown(text) {
        if (!text) return "";
        let html = this.escapeHtml(text);

        // Code blocks: ```...```
        html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
            return `<pre class="qlp-code-snippet"><code>${code.trim()}</code></pre>`;
        });

        // Inline code: `...`
        html = html.replace(/`([^`]+)`/g, '<code class="qlp-inline-code">$1</code>');

        // Bold: **...**
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // Italic: *...*
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Quantum states formatting: |0>, |1>, |+>, |->, |00>, |11>, etc.
        html = html.replace(/\|([01\+\-a-zA-Z\s,]+)\rangle/g, '<span class="qlp-ket">|$1⟩</span>');
        html = html.replace(/\|([01\+\-a-zA-Z\s,]+)&gt;/g, '<span class="qlp-ket">|$1⟩</span>');

        // Headers
        html = html.replace(/^### (.*$)/gim, '<h4 class="qlp-tutor-h4">$1</h4>');
        html = html.replace(/^## (.*$)/gim, '<h3 class="qlp-tutor-h3">$1</h3>');

        // Line breaks & paragraphs
        const paragraphs = html.split(/\n\n+/);
        return paragraphs.map(p => {
            p = p.trim();
            if (p.startsWith('<pre') || p.startsWith('<h3') || p.startsWith('<h4')) {
                return p;
            }
            return `<p>${p.replace(/\n/g, '<br>')}</p>`;
        }).join('');
    }

    escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

export default AITutorBridge;
