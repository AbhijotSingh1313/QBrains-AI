# Quantum Measurement and Probability

## The Born Rule
When measuring a quantum state $|\psi\rangle = \sum_x c_x |x\rangle$ in the computational basis, the probability $P(x)$ of obtaining outcome $x$ is given by the squared magnitude of its complex amplitude:
$$P(x) = |c_x|^2 = |\langle x|\psi\rangle|^2$$
For a single qubit state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$:
- Probability of measuring $0$: $P(0) = |\alpha|^2$
- Probability of measuring $1$: $P(1) = |\beta|^2$
Because probabilities sum to 1, $|\alpha|^2 + |\beta|^2 = 1$.

## Wavefunction Collapse
Measuring a qubit forces its continuous superposition state to immediately collapse into the discrete basis state corresponding to the measurement outcome. Subsequent measurements immediately after will yield the same outcome with 100% certainty unless further gates are applied.

## Measurements in Quirk
In Quirk:
- Placing a measurement detector on a wire measures that qubit.
- Post-selection displays and chance displays calculate the theoretical probability distribution and survival rates across column steps without destroying the simulation statevector.
