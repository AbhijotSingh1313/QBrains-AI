# Quantum Entanglement and Bell States

## What is Entanglement?
Quantum entanglement is a phenomenon in which two or more qubits become correlated such that the quantum state of each individual qubit cannot be described independently of the state of the others, even when the particles are separated by large distances.
A state $|\psi\rangle_{AB}$ is entangled if it **cannot** be factored into a product state $|\psi\rangle_A \otimes |\phi\rangle_B$.

## Creating a Bell State (EPR Pair)
The canonical way to generate maximal entanglement between two qubits in a circuit:
1. Start with initial state $|00\rangle$.
2. Apply a Hadamard gate to qubit 0:
   $$|00\rangle \xrightarrow{H_0} \frac{|0\rangle + |1\rangle}{\sqrt{2}} \otimes |0\rangle = \frac{|00\rangle + |10\rangle}{\sqrt{2}}$$
3. Apply a CNOT gate with control on qubit 0 and target on qubit 1:
   $$\frac{|00\rangle + |10\rangle}{\sqrt{2}} \xrightarrow{\text{CNOT}_{0,1}} \frac{|00\rangle + |11\rangle}{\sqrt{2}} \equiv |\Phi^+\rangle$$

## The Four Bell States (Bell Basis)
The four maximally entangled orthonormal basis states for two qubits:
1. $|\Phi^+\rangle = \frac{|00\rangle + |11\rangle}{\sqrt{2}}$
2. $|\Phi^-\rangle = \frac{|00\rangle - |11\rangle}{\sqrt{2}}$ (apply Z to qubit 0 before CNOT)
3. $|\Psi^+\rangle = \frac{|01\rangle + |10\rangle}{\sqrt{2}}$ (apply X to qubit 1)
4. $|\Psi^-\rangle = \frac{|01\rangle - |10\rangle}{\sqrt{2}}$ (apply X to qubit 1 and Z to qubit 0)

## Measurement Correlations
In $|\Phi^+\rangle$:
- Measuring either qubit produces $|0\rangle$ ($50\%$) or $|1\rangle$ ($50\%$).
- Measuring the other qubit will **always** yield the exact same outcome: $|00\rangle$ with $50\%$ probability and $|11\rangle$ with $50\%$ probability. Outcomes $|01\rangle$ and $|10\rangle$ have zero probability.
