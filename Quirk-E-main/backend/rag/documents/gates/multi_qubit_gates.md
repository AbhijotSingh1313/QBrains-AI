# Multi-Qubit Quantum Gates

## Controlled-NOT (CNOT / CX) Gate
The CNOT gate acts on two qubits: a **control qubit** and a **target qubit**. If the control qubit is in state $|1\rangle$, it applies a Pauli-X (bit flip) to the target qubit; if the control is $|0\rangle$, the target remains unchanged.
Matrix representation (control on qubit 0, target on qubit 1):
$$\text{CNOT} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix}$$
Transitions on computational basis:
- $|00\rangle \to |00\rangle$
- $|01\rangle \to |01\rangle$
- $|10\rangle \to |11\rangle$
- $|11\rangle \to |10\rangle$
In Quirk: represented by a solid black dot ($\bullet$) on the control wire connected by a vertical line to an $\oplus$ (or X) on the target wire.

## Controlled-Z (CZ) Gate
Applies a phase flip ($-1$) if and only if both control and target qubits are in state $|1\rangle$:
$$\text{CZ} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix}$$
Notice that CZ is symmetric between both qubits: either qubit can be considered the control or target.

## SWAP Gate
Interchanges the states of two qubits:
$$\text{SWAP}|x\rangle|y\rangle = |y\rangle|x\rangle$$
A SWAP gate can be decomposed into three alternating CNOT gates:
$\text{SWAP}_{0,1} = \text{CNOT}_{0,1} \cdot \text{CNOT}_{1,0} \cdot \text{CNOT}_{0,1}$.

## Toffoli (CCNOT) Gate
A 3-qubit gate with two control qubits and one target qubit. The target qubit is flipped if and only if both control qubits are $|1\rangle$. The Toffoli gate is a universal gate for reversible classical computation.
