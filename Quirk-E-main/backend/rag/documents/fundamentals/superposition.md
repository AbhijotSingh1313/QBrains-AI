# Quantum Superposition

## What is Superposition?
Superposition is the principle of quantum mechanics whereby a quantum system can exist in multiple distinct states simultaneously. When a qubit is prepared in superposition, it is not merely in an unknown classical state 0 or 1; it possesses genuine quantum indeterminacy until measurement occurs.

## Creating Superposition with the Hadamard Gate
The most common way to prepare an equal superposition state from the standard ground state $|0\rangle$ is applying a Hadamard gate ($H$):
$$H|0\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}} = |+\rangle$$
$$H|1\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}} = |-\rangle$$
In both $|+\rangle$ and $|-\rangle$, the measurement probabilities are equal ($50\%$ chance of finding $0$ and $50\%$ chance of finding $1$), but they differ fundamentally in their relative phase ($+1$ vs $-1$).

## Relative Phase and Global Phase
- **Global phase**: An overall phase factor $e^{i\theta}|\psi\rangle$ does not affect measurement probabilities or observable physics.
- **Relative phase**: The relative angle between amplitudes in $|0\rangle + e^{i\phi}|1\rangle$ produces observable quantum interference when further unitary transformations are applied.
