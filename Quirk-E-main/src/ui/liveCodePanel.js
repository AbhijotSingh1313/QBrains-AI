/**
 * Live Quantum Code Panel Controller
 * Renders real-time code for current circuit using CircuitConverter
 * positioned in the bottom-right empty area of the dashboard.
 */

import CircuitConverter, { UnsupportedGateError, UnimplementedCircuitError } from "../circuit/CircuitConverter.js"
import { fromJsonText_CircuitDefinition } from "../circuit/Serializer.js"
import { selectAndCopyToClipboard } from "../browser/Clipboard.js"

const STORAGE_KEY = "preferred_quantum_framework";

/**
 * @param {!ObservableValue.<!DisplayedInspector>} displayed
 * @param {!Revision} revision
 */
function initLiveCodePanel(displayed, revision) {
    const select = /** @type {HTMLSelectElement} */ (document.getElementById("live-code-format-select"));
    const codeEl = /** @type {HTMLElement} */ (document.getElementById("live-code-content"));
    const copyBtn = /** @type {HTMLButtonElement} */ (document.getElementById("live-code-copy-btn"));
    const copyStatus = /** @type {HTMLElement} */ (document.getElementById("live-code-copy-status"));
    const infoEl = /** @type {HTMLElement} */ (document.getElementById("live-code-info"));

    if (!select || !codeEl) {
        return;
    }

    // Restore saved framework preference if available
    const savedFormat = localStorage.getItem(STORAGE_KEY);
    if (savedFormat) {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === savedFormat) {
                select.value = savedFormat;
                break;
            }
        }
    }

    let lastGeneratedJson = null;
    let lastGeneratedFormat = null;

    const updateCode = () => {
        try {
            const currentJson = revision.peekActiveCommit();
            if (!currentJson) {
                return;
            }
            const currentFormat = select.value;

            // Avoid redundant work if circuit and format haven't changed
            if (currentJson === lastGeneratedJson && currentFormat === lastGeneratedFormat) {
                return;
            }
            lastGeneratedJson = currentJson;
            lastGeneratedFormat = currentFormat;

            const circuitDef = fromJsonText_CircuitDefinition(currentJson);
            const converter = new CircuitConverter(circuitDef);
            let code = converter.exportToFormat(currentFormat);

            codeEl.textContent = code || `// Circuit empty (${circuitDef.numWires} qubits)`;

            if (infoEl) {
                const wireText = circuitDef.numWires === 1 ? "1 wire" : `${circuitDef.numWires} wires`;
                const colCount = circuitDef.columns.length;
                const colText = colCount === 1 ? "1 col" : `${colCount} cols`;
                infoEl.textContent = `${currentFormat} • ${wireText}, ${colText}`;
            }
        } catch (err) {
            if (err instanceof UnsupportedGateError || err instanceof UnimplementedCircuitError) {
                codeEl.textContent = `# [${select.value} Notice]\n# ${err.message}\n# Note: Some custom/advanced gates in the circuit are not directly supported by this framework exporter.`;
            } else {
                codeEl.textContent = `# [Export Notice]\n# ${err.message || "Unable to generate code for this circuit configuration"}`;
                console.warn("Live code generation warning:", err);
            }
            if (infoEl) {
                infoEl.textContent = `${select.value} • Conversion notice`;
            }
        }
    };

    // Framework change listener
    select.addEventListener("change", () => {
        localStorage.setItem(STORAGE_KEY, select.value);
        lastGeneratedFormat = null; // force re-generation
        updateCode();
    });

    // Copy to clipboard listener
    if (copyBtn) {
        let timeoutId = null;
        copyBtn.addEventListener("click", () => {
            const textToCopy = codeEl.textContent || "";
            if (!textToCopy) return;

            const showFeedback = () => {
                copyBtn.classList.add("qlp-copied");
                const originalHtml = copyBtn.innerHTML;
                copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> <span>Copied!</span>`;

                if (copyStatus) {
                    copyStatus.textContent = "Copied to clipboard!";
                    copyStatus.classList.add("show");
                }

                if (timeoutId) clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    copyBtn.classList.remove("qlp-copied");
                    copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i> <span>Copy Code</span>`;
                    if (copyStatus) {
                        copyStatus.textContent = "";
                        copyStatus.classList.remove("show");
                    }
                }, 1600);
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(textToCopy)
                    .then(showFeedback)
                    .catch(() => {
                        selectAndCopyToClipboard(codeEl);
                        showFeedback();
                    });
            } else {
                selectAndCopyToClipboard(codeEl);
                showFeedback();
            }
        });
    }

    // Subscribe to revision and displayed changes
    revision.latestActiveCommit().subscribe(() => updateCode());
    displayed.observable().subscribe(() => updateCode());

    // Initial render
    setTimeout(updateCode, 50);
}

export { initLiveCodePanel };
