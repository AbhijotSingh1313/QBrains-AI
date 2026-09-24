# Foundational Quantum Algorithms

## Grover's Search Algorithm
Grover's algorithm searches an unstructured database of $N = 2^n$ items for a marked item in $O(\sqrt{N})$ queries, achieving quadratic speedup over the classical $O(N)$ limit.
Steps:
1. Initialize $n$ qubits into equal superposition using Hadamards: $|\psi_0\rangle = H^{\otimes n}|0\dots 0\rangle$.
2. Repeatedly apply the Grover iteration $O(\sqrt{N})$ times:
   - **Oracle ($U_w$)**: Inverts the phase of the marked target state $|w\rangle$: $|x\rangle \to (-1)^{f(x)}|x\rangle$.
   - **Diffusion Operator ($U_s = 2|s\rangle\langle s| - I$)**: Inversion about the average amplitude, amplifying the marked state's amplitude while suppressing all non-marked amplitudes.
3. Measure the register in the computational basis to find the target state with high probability.

## Quantum Teleportation Protocol
Transfers an unknown quantum state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ from sender (Alice) to receiver (Bob) using 1 shared EPR Bell pair and 2 classical bits:
1. Alice and Bob share a Bell pair $|\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}}$.
2. Alice interacts her unknown qubit with her half of the Bell pair using CNOT followed by Hadamard.
3. Alice measures her two qubits, obtaining two classical bits $m_1, m_2 \in \{0, 1\}$.
4. Alice sends the classical bits to Bob.
5. Bob applies corrective Pauli operators:
   - If $m_2 = 1$, Bob applies $X$.
   - If $m_1 = 1$, Bob applies $Z$.
Bob's qubit is now identical to Alice's original state $|\psi\rangle$. Note that the original state was destroyed upon measurement, preserving the No-Cloning Theorem.

## Quantum Fourier Transform (QFT)
The quantum analogue of the discrete Fourier transform. QFT maps computational basis states $|j\rangle$ to frequency domain superposition states:
$$|j\rangle \mapsto \frac{1}{\sqrt{N}}\sum_{k=0}^{N-1} e^{2\pi i j k / N} |k\rangle$$
QFT operates exponentially faster ($O(n^2)$ gates) than the classical Fast Fourier Transform ($O(n 2^n)$ operations). It serves as the core subroutine in Shor's factoring algorithm and Quantum Phase Estimation.
