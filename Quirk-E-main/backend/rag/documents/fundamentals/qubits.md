# Qubits and Quantum State Representation

## Definition of a Qubit
A quantum bit, or **qubit**, is the fundamental unit of quantum information. Unlike a classical bit which must strictly be in state $0$ or state $1$, a qubit can exist in a linear combination (superposition) of basis states:
$$|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$$
where $\alpha$ and $\beta$ are complex probability amplitudes satisfying the normalization condition:
$$|\alpha|^2 + |\beta|^2 = 1$$

## Statevector Representation
For an isolated quantum system, the quantum state of a single qubit is represented as a 2-dimensional column vector in the computational basis $\{|0\rangle, |1\rangle\}$:
$$|0\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad |1\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$
For an $n$-qubit quantum register, the combined statevector lives in a $2^n$-dimensional Hilbert space formed by the tensor product of individual qubit state spaces:
$$|\psi\rangle = \sum_{x \in \{0,1\}^n} c_x |x\rangle, \quad \sum_x |c_x|^2 = 1$$

## Multi-Qubit Computational Basis
In a 2-qubit circuit with wires $q_0$ and $q_1$:
- $|00\rangle = |0\rangle \otimes |0\rangle = (1, 0, 0, 0)^T$
- $|01\rangle = |0\rangle \otimes |1\rangle = (0, 1, 0, 0)^T$
- $|10\rangle = |1\rangle \otimes |0\rangle = (0, 0, 1, 0)^T$
- $|11\rangle = |1\rangle \otimes |1\rangle = (0, 0, 0, 1)^T$

In Quirk, the top wire corresponds to $q_0$ (least significant bit in typical little-endian notation or top wire index), and initialization begins in the ground state $|00\dots 0\rangle$.
