# Quantum Interference and Phase Kickback

## Quantum Interference
Unlike classical probabilities which always add ($P = P_1 + P_2$), quantum probability amplitudes are complex numbers that add like waves:
$$c = c_1 + c_2 \implies |c|^2 = |c_1 + c_2|^2 = |c_1|^2 + |c_2|^2 + 2\text{Re}(c_1^* c_2)$$
- **Constructive Interference**: When amplitudes have the same phase, they reinforce each other, boosting the probability of measuring that outcome.
- **Destructive Interference**: When amplitudes have opposite phases ($+a$ and $-a$), they cancel out completely ($a - a = 0$), yielding $0\%$ probability of observing that state.

## Phase Kickback
Phase kickback occurs in controlled operations when an eigenvalue phase factor of a target gate is "kicked back" into the phase of the control qubit.
If the target qubit is in an eigenstate $|\psi\rangle$ of operator $U$ with eigenvalue $e^{i\theta}$ ($U|\psi\rangle = e^{i\theta}|\psi\rangle$), applying a controlled-$U$ with control in $|+\rangle$:
$$\frac{|0\rangle + |1\rangle}{\sqrt{2}} |\psi\rangle \xrightarrow{C-U} \frac{|0\rangle|\psi\rangle + |1\rangle U|\psi\rangle}{\sqrt{2}} = \left(\frac{|0\rangle + e^{i\theta}|1\rangle}{\sqrt{2}}\right)|\psi\rangle$$
The phase $e^{i\theta}$ modifies the control qubit state while the target qubit state remains unchanged. This mechanism is central to the Deutsch-Jozsa algorithm, Grover's search, and the Quantum Phase Estimation algorithm.
