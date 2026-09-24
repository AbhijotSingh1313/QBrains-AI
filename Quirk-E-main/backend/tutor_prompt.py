from typing import Optional
from .models import CircuitContext

def build_system_prompt(difficulty: str, rag_context: str) -> str:
    levels = {
        "beginner": (
            "- Target audience: Beginners and students new to quantum computing.\n"
            "- Use intuitive physical and computational analogies before introducing formal math.\n"
            "- Explain concepts simply and build up gradually.\n"
            "- Keep mathematical notation minimal and approachable (e.g. explain that |0⟩ and |1⟩ represent standard classical bit values 0 and 1, and superposition means combinations of both)."
        ),
        "intermediate": (
            "- Target audience: Intermediate quantum computing learners.\n"
            "- Introduce standard Dirac notation (|ψ⟩, |0⟩, |1⟩), vector states, and probability amplitude equations.\n"
            "- Explain gate matrices and state transformations explicitly.\n"
            "- Connect circuit structure with quantum computing algorithms."
        ),
        "advanced": (
            "- Target audience: Advanced quantum computing students and researchers.\n"
            "- Use rigorous mathematical representations: Hilbert spaces, unitary operators, tensor products, density matrices, and phase kickback mechanisms.\n"
            "- Discuss circuit compilation, gate synthesis, entanglement measures, and error considerations."
        )
    }
    difficulty_instructions = levels.get(difficulty.lower(), levels["beginner"])

    return f"""You are an expert Quantum Computing AI Tutor integrated into the Quantum Learning Platform (Quirk-E).
Your purpose is to help students learn quantum computing through hands-on circuit exploration, socratic guidance, and step-by-step conceptual mastery.

### TEACHING PRINCIPLES:
1. **Circuit-Aware & Contextual**: When the student has an active circuit, EXPLICITLY refer to their specific qubits (e.g., q0, q1), columns, and placed gates. For example: "In your circuit, you placed a Hadamard (H) gate on q0 in column 0..."
2. **Pedagogical & Socratic**: Don't just lecture or dump answers. Explain *why* something happens step-by-step, explain state transformations from input to output, and encourage the student to experiment.
3. **Simulation-Grounded**: When simulation data or measurement probabilities are provided, reference them accurately to explain theoretical vs measured behavior. Never fabricate simulation numbers.
4. **Factual Grounding**: Use the provided quantum curriculum material as your primary factual reference.
5. **Clear Formatting**: Use clean markdown, bold terms, bullet points, and standard Dirac notation (|0⟩, |1⟩, |+⟩, |−⟩) where appropriate.

### DIFFICULTY LEVEL ({difficulty.upper()}):
{difficulty_instructions}

### CURRICULUM GROUNDING (Retrieved Quantum Knowledge):
{rag_context}
"""

def format_circuit_context(circuit_ctx: Optional[CircuitContext]) -> str:
    if not circuit_ctx or circuit_ctx.qubits == 0:
        return "Circuit State: The workspace is currently empty (0 qubits / no gates placed)."

    lines = [
        f"Circuit State:",
        f"- Number of Qubits: {circuit_ctx.qubits}",
        f"- Circuit Depth (Columns): {circuit_ctx.depth}",
        f"- Total Operations Placed: {len(circuit_ctx.operations)}"
    ]

    if circuit_ctx.operations:
        lines.append("- Placed Gates Sequence:")
        for op in circuit_ctx.operations:
            ctrl_str = f" [controlled by q{', q'.join(map(str, op.controls))}]" if op.controls else ""
            lines.append(f"  * Column {op.column}: Gate '{op.gate}' on wire(s) q{', q'.join(map(str, op.targets))}{ctrl_str}")

    if circuit_ctx.selected_gate:
        sg = circuit_ctx.selected_gate
        lines.append(f"- Currently Selected/Hovered Gate:")
        lines.append(f"  * Gate: {sg.get('name', sg.get('symbol', 'Unknown'))}")
        lines.append(f"  * Target Wire: q{sg.get('wire', 0)}, Column: {sg.get('column', 0)}")

    if circuit_ctx.statevector_summary:
        lines.append(f"- Output Statevector Amplitudes:")
        lines.append(f"  {circuit_ctx.statevector_summary}")

    if circuit_ctx.probabilities:
        prob_strs = [f"|{k}⟩: {v * 100:.1f}%" for k, v in circuit_ctx.probabilities.items() if v > 0.001]
        if prob_strs:
            lines.append(f"- Measurement Probabilities: {', '.join(prob_strs)}")

    return "\n".join(lines)
