# The Bloch Sphere

## Geometric Representation of Pure Qubit States
Any single-qubit pure state can be uniquely visualized as a point on the surface of a unit sphere in three dimensions, called the **Bloch sphere**.
Parameterizing the state as:
$$|\psi\rangle = \cos(\theta/2)|0\rangle + e^{i\phi}\sin(\theta/2)|1\rangle$$
where:
- $\theta \in [0, \pi]$ is the polar angle (latitude from North Pole $|0\rangle$ to South Pole $|1\rangle$).
- $\phi \in [0, 2\pi)$ is the azimuthal angle (longitude on the equator).

## Cardinal Points on the Bloch Sphere
- **North Pole ($+Z$)**: $|0\rangle$, where $\theta = 0$.
- **South Pole ($-Z$)**: $|1\rangle$, where $\theta = \pi$.
- **Positive X axis ($+X$)**: $|+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}$, where $\theta = \pi/2, \phi = 0$.
- **Negative X axis ($-X$)**: $|-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}}$, where $\theta = \pi/2, \phi = \pi$.
- **Positive Y axis ($+Y$)**: $|+i\rangle = \frac{|0\rangle + i|1\rangle}{\sqrt{2}}$, where $\theta = \pi/2, \phi = \pi/2$.
- **Negative Y axis ($-Y$)**: $|-i\rangle = \frac{|0\rangle - i|1\rangle}{\sqrt{2}}$, where $\theta = \pi/2, \phi = 3\pi/2$.

## Gates as Rotations
Every single-qubit unitary operation corresponds to a 3D rotation of the Bloch vector about a specific axis:
- Pauli-X: $180^\circ$ ($\pi$ radians) rotation about the X-axis.
- Pauli-Y: $180^\circ$ rotation about the Y-axis.
- Pauli-Z: $180^\circ$ rotation about the Z-axis.
- Hadamard ($H$): $180^\circ$ rotation about the diagonal axis $(X + Z)/\sqrt{2}$, swapping the Z and X axes.
- Phase ($S$): $90^\circ$ ($\pi/2$ radians) rotation about the Z-axis.
- $T$ gate: $45^\circ$ ($\pi/4$ radians) rotation about the Z-axis.
