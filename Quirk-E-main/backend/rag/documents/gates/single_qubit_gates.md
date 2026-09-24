# Single-Qubit Quantum Gates

## Pauli Gates (X, Y, Z)
The Pauli operators are the basic building blocks of quantum computation and error correction:
- **Pauli-X (NOT / Bit-Flip Gate)**:
  $$X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
  Action: $X|0\rangle = |1\rangle$ and $X|1\rangle = |0\rangle$.
- **Pauli-Y (Bit & Phase-Flip Gate)**:
  $$Y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$
  Action: $Y|0\rangle = i|1\rangle$ and $Y|1\rangle = -i|0\rangle$.
- **Pauli-Z (Phase-Flip Gate)**:
  $$Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$
  Action: $Z|0\rangle = |0\rangle$ and $Z|1\rangle = -|1\rangle$. Leaves $|0\rangle$ unchanged and flips the sign of $|1\rangle$.

## Hadamard Gate (H)
The Hadamard gate creates and analyzes equal superpositions.
$$H = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$
Action:
- $H|0\rangle = |+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$
- $H|1\rangle = |-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$
Notice that $H = H^\dagger$ and $H^2 = I$. Applying $H$ twice returns the qubit to its original state.

## Phase Gates (S and T)
Phase gates adjust the relative phase between $|0\rangle$ and $|1\rangle$ without changing measurement probabilities in the computational basis:
- **S Gate ($\sqrt{Z}$ / Phase Gate)**:
  $$S = \begin{pmatrix} 1 & 0 \\ 0 & i \end{pmatrix}, \quad S^2 = Z$$
- **T Gate ($\sqrt{S}$ / $\pi/8$ Gate)**:
  $$T = \begin{pmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{pmatrix}, \quad T^4 = Z$$
The set $\{H, S, \text{CNOT}\}$ generates the Clifford group, and adding the $T$ gate achieves universal quantum computation.
