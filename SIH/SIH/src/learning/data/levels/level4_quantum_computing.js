/**
 * Level 4: Quantum Computing Foundations (Lessons 4.1 - 4.20)
 * Qubit geometry, Bloch sphere coordinates (theta, phi), bases, unitaries, no-cloning, and teleportation.
 */

export const LEVEL_4_LESSONS = [
  {
    id: '4.1',
    title: 'From Quantum Mechanics to Quantum Computing',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.21'],
    objectives: [
      'Bridge physical quantum mechanics with information theory and computation',
      'Understand how quantum states encode logical information',
      'Define the computational Hilbert space C^2'
    ],
    intuition: 'In physics, an electron in a magnetic field has two energy states (spin-up and spin-down). For a physicist, these are energy levels. But for a computer scientist, these two physical states can be assigned logical values: 0 and 1! Quantum computing is the discipline that treats physical quantum states as programmable information carriers.',
    sections: [
      {
        heading: 'Information Encoded in Quantum States',
        content: 'We map the lowest physical energy state (ground state) to logical |0>, and the excited state to logical |1>. The qubit state lives in the 2-dimensional complex vector space C^2.'
      }
    ],
    equations: [
      {
        label: 'Computational State Mapping',
        latex: '|\\text{ground}\\rangle \\longleftrightarrow |0\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\quad |\\text{excited}\\rangle \\longleftrightarrow |1\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}',
        explanation: 'Maps physical quantum ground and excited eigenstates to logical basis states.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why is an artificial superconducting transmon called an "artificial atom"?',
      solution: 'Like a natural hydrogen atom, a transmon has discrete quantized energy levels E0, E1, E2... formed by superconducting Cooper pair wavefunctions. By tuning microwave pulses to f_01 = (E1 - E0)/h, we address the |0> and |1> states just like addressing electron orbitals in an atom.',
      derivationSteps: [
        'E0 = ground energy, E1 = first excited energy.',
        'Delta E = E1 - E0 = h * f_01.',
        'Microwave pulse at f_01 drives coherent transitions between |0> and |1>.'
      ]
    },
    commonMisconceptions: [
      'A qubit is not a tiny physical particle itself; it is an abstract 2-level quantum degree of freedom implemented across various physical systems (superconductors, ions, photons).'
    ],
    quickCheck: {
      question: 'What is the dimension of the state space of a single qubit?',
      options: ['1', '2 (complex dimensions)', '4', 'Infinite'],
      correctIndex: 1,
      explanation: 'A single qubit lives in the 2-dimensional complex Hilbert space C^2.'
    },
    summary: 'Quantum computing uses physical 2-level quantum systems to encode and process computational states in C^2.',
    keyEquations: ['|\\psi\\rangle \\in \\mathbb{C}^2'],
    videoIds: ['vid-qm-to-qc'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '4.2',
    title: 'What is a Qubit?',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.1', '1.8'],
    objectives: [
      'Define the mathematical representation: |psi> = alpha|0> + beta|1>',
      'Explain normalization |alpha|^2 + |beta|^2 = 1',
      'Understand the continuous nature of quantum amplitudes'
    ],
    intuition: 'A classical bit can only ever be 0 or 1. A qubit, however, is parameterized by two continuous complex numbers alpha and beta. It can be prepared in an infinite variety of superpositions on the unit sphere, carrying quantum phase relationships that enable wave interference.',
    sections: [
      {
        heading: 'The Statevector Equation',
        content: '|psi> = alpha|0> + beta|1>, where alpha, beta in C and |alpha|^2 + |beta|^2 = 1. The coefficients alpha and beta are called the probability amplitudes.'
      }
    ],
    equations: [
      {
        label: 'Qubit Statevector Normalization',
        latex: '|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle, \\quad |\\alpha|^2 + |\\beta|^2 = 1',
        explanation: 'Ensures the sum of measurement probabilities in the computational basis is exactly 1.'
      }
    ],
    diagramType: 'superposition',
    workedExample: {
      problem: 'Determine if |psi> = (1/2)|0> + (sqrt(3)/2) e^(i*pi/4) |1> is a valid, normalized qubit state.',
      solution: '|alpha|^2 = |1/2|^2 = 1/4. |beta|^2 = |(sqrt(3)/2) e^(i*pi/4)|^2 = (3/4) * |e^(i*pi/4)|^2 = (3/4) * 1 = 3/4. |alpha|^2 + |beta|^2 = 1/4 + 3/4 = 1. Yes, this is a valid normalized quantum state!',
      derivationSteps: [
        'alpha = 1/2 -> |alpha|^2 = 1/4.',
        'beta = (sqrt(3)/2) * e^{i*pi/4} -> |beta|^2 = 3/4.',
        'Sum = 1/4 + 3/4 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'Having continuous amplitudes does NOT mean a qubit can store an infinite amount of classical data (Holevo\'s Theorem). You can only ever extract 1 classical bit of information from a single qubit measurement!'
    ],
    quickCheck: {
      question: 'According to Holevo\'s Theorem, what is the maximum accessible classical information that can be extracted from a single qubit measurement?',
      options: ['1 bit', '2 bits', 'Infinite bits', '0.5 bits'],
      correctIndex: 0,
      explanation: 'Holevo\'s bound proves that measuring a single qubit can yield at most 1 bit of classical information.'
    },
    summary: 'A qubit is described by |psi> = alpha|0> + beta|1> with |alpha|^2 + |beta|^2 = 1.',
    keyEquations: ['|\\alpha|^2 + |\\beta|^2 = 1'],
    videoIds: ['vid-what-is-qubit'],
    references: ['Holevo, A. S. (1973). Bounds for the quantity of information transmitted by a quantum communication channel.']
  },
  {
    id: '4.3',
    title: '|0⟩ and |1⟩',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['4.2'],
    objectives: [
      'Define the computational basis vectors |0> and |1>',
      'Verify orthonormality: <0|0> = 1, <1|1> = 1, <0|1> = 0',
      'Understand the North and South poles of the Bloch sphere'
    ],
    intuition: '|0> and |1> are the North and South poles of the quantum globe. They are the two classical baseline reference points from which all quantum superpositions are constructed.',
    sections: [
      {
        heading: 'Orthonormal Basis Properties',
        content: '|0> = [1; 0] and |1> = [0; 1]. <0|1> = [1, 0] * [0; 1] = 0 (orthogonality). <0|0> = 1 and <1|1> = 1 (unit norm). They form an orthonormal basis for C^2.'
      }
    ],
    equations: [
      {
        label: 'Orthonormality of Basis States',
        latex: '\\langle i | j \\rangle = \\delta_{ij} = \\begin{cases} 1 & \\text{if } i = j \\\\ 0 & \\text{if } i \\ne j \\end{cases}',
        explanation: 'delta_ij is the Kronecker delta function.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Express the projection operators P0 and P1 in outer product and matrix notation.',
      solution: 'P0 = |0><0| = [1; 0][1, 0] = [1 0; 0 0]. P1 = |1><1| = [0; 1][0, 1] = [0 0; 0 1]. Notice P0 + P1 = I and P0 * P1 = 0.',
      derivationSteps: [
        'P0 = [[1, 0], [0, 0]].',
        'P1 = [[0, 0], [0, 1]].',
        'P0 + P1 = I (completeness).',
        'P0 * P1 = 0 (mutually exclusive projectors).'
      ]
    },
    commonMisconceptions: [
      'In vector space C^2, |0> and |1> are at 90 degrees to each other (<0|1> = 0). But on the 3D Bloch sphere, they point in opposite directions (180 degrees apart, North and South poles).'
    ],
    quickCheck: {
      question: 'Where do |0> and |1> sit on the 3D Bloch sphere?',
      options: [
        'Both at the equator',
        '|0> is at the North pole (Z = +1) and |1> is at the South pole (Z = -1)',
        'Inside the sphere at the center',
        'Both at the prime meridian'
      ],
      correctIndex: 1,
      explanation: '|0> corresponds to the North pole (theta = 0) and |1> to the South pole (theta = pi).'
    },
    summary: '|0> and |1> form the orthonormal computational basis of a qubit.',
    keyEquations: ['\\langle 0 | 1 \\rangle = 0', '\\langle 0 | 0 \\rangle = \\langle 1 | 1 \\rangle = 1'],
    videoIds: ['vid-basis-states'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '4.4',
    title: 'Superposition',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.2', '3.11'],
    objectives: [
      'Construct equal superpositions using Hadamard gates: H|0> = |+>, H|1> = |->',
      'Analyze relative phase in superpositions: (|0> + e^(i*phi)|1>)/sqrt(2)',
      'Explain equatorial states on the Bloch sphere'
    ],
    intuition: 'If |0> is the North Pole and |1> is the South Pole, an equal superposition is anywhere on the Equator! The state |+> = (|0>+|1>)/sqrt(2) points directly along the +X axis. As you walk around the equator, the relative phase phi changes from 0 to 2pi, rotating the state through |+i>, |->, and |-i>.',
    sections: [
      {
        heading: 'Equatorial Superposition States',
        content: '• |+> = (|0> + |1>)/sqrt(2) (points along +X)\n• |-> = (|0> - |1>)/sqrt(2) (points along -X)\n• |+i> = (|0> + i|1>)/sqrt(2) (points along +Y)\n• |-i> = (|0> - i|1>)/sqrt(2) (points along -Y)'
      }
    ],
    equations: [
      {
        label: 'Equatorial Superposition Family',
        latex: '|\\psi(\\phi)\\rangle = \\frac{|0\\rangle + e^{i\\phi}|1\\rangle}{\\sqrt{2}}',
        explanation: 'All states with equal 50/50 measurement probabilities lie on the equator of the Bloch sphere with varying relative phase phi.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Show that all equatorial states (|0> + e^(i*phi)|1>)/sqrt(2) have identical 50% measurement probability in the computational basis.',
      solution: 'P(0) = |1/sqrt(2)|^2 = 1/2 = 50%. P(1) = |e^(i*phi) / sqrt(2)|^2 = |e^(i*phi)|^2 / 2 = 1 / 2 = 50%. Every state on the equator has exactly 50% probability of 0 and 50% probability of 1 in the Z-basis, regardless of phase angle phi!',
      derivationSteps: [
        'alpha = 1/sqrt(2) -> |alpha|^2 = 1/2.',
        'beta = e^{i*phi} / sqrt(2) -> |beta|^2 = |e^{i*phi}|^2 / 2 = 1/2.',
        'Sum = 1/2 + 1/2 = 1.0.',
        'Z-basis measurement outcome is completely random (50/50).'
      ]
    },
    commonMisconceptions: [
      'Even though all equatorial states look identical under Z measurement (50/50), they are completely distinguishable by measuring along the X or Y axis!'
    ],
    quickCheck: {
      question: 'Which Bloch sphere axis does the state |+> = (|0> + |1>)/sqrt(2) point along?',
      options: ['+Z axis (North Pole)', '+X axis', '+Y axis', '-Z axis (South Pole)'],
      correctIndex: 1,
      explanation: 'The |+> state lies on the equator pointing directly along the +X axis.'
    },
    summary: 'Superpositions with equal amplitudes lie on the equator of the Bloch sphere and are parameterized by relative phase phi.',
    keyEquations: ['|+\\rangle = \\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}', '|-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}'],
    videoIds: ['vid-bloch-sphere-3b1b'],
    references: ['Bloch, F. (1946). Nuclear induction. Phys. Rev.']
  },
  {
    id: '4.5',
    title: 'Bloch Sphere',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.4', '4.4'],
    objectives: [
      'Derive the spherical coordinate representation: |psi> = cos(theta/2)|0> + e^(i*phi) sin(theta/2)|1>',
      'Map (theta, phi) angles to 3D Cartesian coordinates (x, y, z)',
      'Interactively manipulate the Bloch sphere statevector'
    ],
    intuition: 'How do you visualize a 2D complex vector with 4 real numbers (Re(alpha), Im(alpha), Re(beta), Im(beta))? First, normalization removes 1 degree of freedom (leaving 3). Second, global phase invariance removes another (leaving 2). Any single-qubit state can therefore be mapped perfectly to the surface of a 3-dimensional unit sphere called the Bloch Sphere! The polar angle theta controls the probability balance, and the azimuthal angle phi controls the quantum phase.',
    sections: [
      {
        heading: 'The Bloch Sphere Parameterization',
        content: '|psi> = cos(theta/2)|0> + e^(i*phi) sin(theta/2)|1>, where 0 <= theta <= pi (latitude from North to South pole) and 0 <= phi < 2pi (longitude around equator).'
      },
      {
        heading: 'Cartesian Bloch Vector Coordinates',
        content: '• x = sin(theta) * cos(phi) = <X>\n• y = sin(theta) * sin(phi) = <Y>\n• z = cos(theta) = <Z>\nThe length of the vector r = sqrt(x^2 + y^2 + z^2) = 1 for pure states, and r < 1 for mixed states.'
      }
    ],
    equations: [
      {
        label: 'Bloch State Parametrization',
        latex: '|\\psi\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right)|0\\rangle + e^{i\\phi}\\sin\\left(\\frac{\\theta}{2}\\right)|1\\rangle',
        explanation: 'theta in [0, pi] is polar angle, phi in [0, 2pi) is azimuthal relative phase.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Find the Bloch sphere angles (theta, phi) and Cartesian coordinates (x, y, z) for the state |+i> = (|0> + i|1>)/sqrt(2).',
      solution: 'cos(theta/2) = 1/sqrt(2) -> theta/2 = pi/4 -> theta = pi/2 (equator). e^(i*phi) = i = e^(i*pi/2) -> phi = pi/2. Cartesian: x = sin(pi/2)*cos(pi/2) = 1*0 = 0. y = sin(pi/2)*sin(pi/2) = 1*1 = 1. z = cos(pi/2) = 0. The Bloch vector is [0, 1, 0], pointing directly along the +Y axis!',
      derivationSteps: [
        'theta/2 = pi/4 -> theta = pi/2 = 90 degrees.',
        'phi = pi/2 = 90 degrees.',
        'x = sin(90) * cos(90) = 0.',
        'y = sin(90) * sin(90) = 1.',
        'z = cos(90) = 0.',
        'Bloch vector: [0, 1, 0] along +Y.'
      ]
    },
    commonMisconceptions: [
      'Notice the factor of theta/2 in the formula! Rotating the physical state by 180 degrees (from |0> to |1>) corresponds to a 90-degree change in theta/2, but a full 180-degree turn in the 3D Bloch sphere.'
    ],
    quickCheck: {
      question: 'What state on the Bloch sphere corresponds to theta = pi/2 and phi = 0?',
      options: [
        '|0> (North Pole)',
        '|+> = (|0>+|1>)/sqrt(2) (along +X axis)',
        '|1> (South Pole)',
        '|-> = (|0>-|1>)/sqrt(2) (along -X axis)'
      ],
      correctIndex: 1,
      explanation: 'theta = pi/2 and phi = 0 gives cos(pi/4)|0> + e^0 sin(pi/4)|1> = (1/sqrt(2))(|0>+|1>) = |+>.'
    },
    summary: 'The Bloch sphere visualizes all single-qubit pure states as points on a 3D unit sphere parameterized by (theta, phi).',
    keyEquations: ['|\\psi\\rangle = \\cos(\\theta/2)|0\\rangle + e^{i\\phi}\\sin(\\theta/2)|1\\rangle', 'x^2 + y^2 + z^2 = 1'],
    videoIds: ['vid-bloch-sphere-full'],
    references: ['Nielsen & Chuang, Section 1.2: The Bloch sphere.']
  },
  {
    id: '4.6',
    title: 'Probability Amplitudes',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'The Qubit & Statevector Mechanics',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.5'],
    objectives: [
      'Relate Bloch angles (theta, phi) directly to measurement probabilities: P(0) = cos^2(theta/2), P(1) = sin^2(theta/2)',
      'Calculate state overlap: |<psi1|psi2>|^2 = cos^2(Delta theta / 2)',
      'Connect probability amplitudes to quantum tomography'
    ],
    intuition: 'On the Bloch sphere, the closer the vector points toward the North pole, the higher the probability of measuring 0. As theta goes from 0 (North Pole, P(0)=100%) to pi (South Pole, P(0)=0%), the probabilities vary continuously as cos^2(theta/2) and sin^2(theta/2).',
    sections: [
      {
        heading: 'Probability from Bloch Latitude',
        content: '• P(0) = |cos(theta/2)|^2 = cos^2(theta/2) = (1 + z) / 2\n• P(1) = |sin(theta/2)|^2 = sin^2(theta/2) = (1 - z) / 2\nNotice that the Z-coordinate z directly reveals the probability difference: z = P(0) - P(1)!'
      }
    ],
    equations: [
      {
        label: 'Bloch Coordinate Probability Formula',
        latex: 'P(0) = \\frac{1 + z}{2} = \\cos^2\\left(\\frac{\\theta}{2}\\right), \\quad P(1) = \\frac{1 - z}{2} = \\sin^2\\left(\\frac{\\theta}{2}\\right)',
        explanation: 'Measurement probabilities in the computational basis map linearly to the Z coordinate of the Bloch vector.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'A qubit has Bloch vector coordinate z = +0.6. Find P(0) and P(1).',
      solution: 'P(0) = (1 + z)/2 = (1 + 0.6)/2 = 1.6 / 2 = 0.8 (80%). P(1) = (1 - z)/2 = (1 - 0.6)/2 = 0.4 / 2 = 0.2 (20%).',
      derivationSteps: [
        'z = 0.6.',
        'P(0) = (1 + 0.6)/2 = 0.80.',
        'P(1) = (1 - 0.6)/2 = 0.20.',
        'Verify sum: 0.80 + 0.20 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'The X and Y coordinates do not affect Z-basis measurement probabilities; they determine the relative phase phi and the probabilities under X and Y measurements.'
    ],
    quickCheck: {
      question: 'If a qubit sits on the equator of the Bloch sphere (z = 0), what is P(0)?',
      options: ['100%', '50%', '0%', '75%'],
      correctIndex: 1,
      explanation: 'P(0) = (1 + 0)/2 = 1/2 = 50%.'
    },
    summary: 'Measurement probabilities map directly to Bloch sphere coordinates: P(0) = (1+z)/2 and P(1) = (1-z)/2.',
    keyEquations: ['P(0) = \\frac{1+z}{2}', 'P(1) = \\frac{1-z}{2}'],
    videoIds: ['vid-bloch-probabilities'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '4.7',
    title: 'Measurement',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.6'],
    objectives: [
      'Understand projective measurement in different bases',
      'Explain why measurement is non-unitary and irreversible',
      'Analyze repeated measurements and quantum Zeno effect'
    ],
    intuition: 'Measurement is the moment the quantum magic ends and classical reality begins. In a quantum circuit, you can measure a qubit along the Z axis (distinguishing |0> and |1>), along the X axis (distinguishing |+> and |->), or along the Y axis. Measuring along any axis forces the qubit to snap to either the positive or negative pole of that axis.',
    sections: [
      {
        heading: 'Measurement Across Different Bases',
        content: 'Measuring in the Z-basis projects onto {|0>, |1>}. Measuring in the X-basis projects onto {|+>, |->}. To measure in the X-basis on physical hardware that only supports Z-readout, we simply apply a Hadamard gate H before measuring!'
      }
    ],
    equations: [
      {
        label: 'Basis Change Before Measurement',
        latex: 'M_X = H M_Z H, \\quad M_Y = S^\\dagger H M_Z H S',
        explanation: 'Measuring in other bases is achieved by rotating the target basis into the computational Z basis.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'How do you measure a qubit in the X-basis using a standard Z-basis readout device?',
      solution: 'Apply a Hadamard gate H directly before the measurement. H transforms |+> to |0> and |-> to |1>. Measuring Z will yield 0 if the state was |+>, and 1 if the state was |->.',
      derivationSteps: [
        'State to test: |psi> = c+ |+> + c- |->.',
        'Apply H: H|psi> = c+ H|+> + c- H|-> = c+ |0> + c- |1>.',
        'Measure in Z basis: yields 0 with probability |c+|^2, and 1 with probability |c-|^2.',
        'Conclusion: X-basis measurement accomplished.'
      ]
    },
    commonMisconceptions: [
      'Quantum measurement is not destructive to the qubit hardware; it simply destroys the superposition state and leaves the qubit in a pure ground or excited state.'
    ],
    quickCheck: {
      question: 'Which gate should you apply before a Z-basis measurement to perform an X-basis measurement?',
      options: ['Pauli-X', 'Hadamard (H)', 'Pauli-Z', 'Identity (I)'],
      correctIndex: 1,
      explanation: 'A Hadamard gate rotates the X basis (|+>, |->) into the computational Z basis (|0>, |1>).'
    },
    summary: 'Quantum measurement projects statevectors onto the chosen measurement basis; basis rotations are performed using unitary gates.',
    keyEquations: ['M_X = H M_Z H'],
    videoIds: ['vid-basis-measurement'],
    references: ['Nielsen & Chuang, Section 2.2.5.']
  },
  {
    id: '4.8',
    title: 'Basis States',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.3', '4.7'],
    objectives: [
      'Define basis as a minimal set of linearly independent vectors spanning the Hilbert space',
      'Explain change of basis via unitary transformation U',
      'Recognize mutually unbiased bases (MUB)'
    ],
    intuition: 'A basis is like a coordinate system: you can choose North-South and East-West, or you can rotate your map by 45 degrees. The terrain doesn\'t change, but your coordinates do. A single qubit has infinitely many valid bases, but three orthogonal axes stand out: the Z-basis, the X-basis, and the Y-basis.',
    sections: [
      {
        heading: 'Mutually Unbiased Bases (MUB)',
        content: 'The X, Y, and Z bases are mutually unbiased: if a qubit is prepared in an eigenstate of one basis (say |0> of Z), measuring it in another basis (X or Y) yields completely random 50/50 outcomes! |<z_i | x_j>|^2 = 1/2. This property is the foundation of quantum key distribution (BB84 protocol).'
      }
    ],
    equations: [
      {
        label: 'Mutually Unbiased Overlap',
        latex: '|\\langle u_i | v_j \\rangle|^2 = \\frac{1}{d} = \\frac{1}{2} \\quad (d = 2)',
        explanation: 'Being prepared in an eigenstate of one MUB gives maximally uncertain 1/d outcomes in another.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Verify that the Z basis {|0>, |1>} and X basis {|+>, |->} are mutually unbiased.',
      solution: 'Compute overlaps: |<0|+>|^2 = |1/sqrt(2)|^2 = 1/2. |<0|->|^2 = |1/sqrt(2)|^2 = 1/2. |<1|+>|^2 = 1/2. |<1|->|^2 = 1/2. Every pair has overlap exactly 1/2 (50%). Thus they are mutually unbiased.',
      derivationSteps: [
        '<0|+> = <0| (|0> + |1>)/sqrt(2) = 1/sqrt(2). Modulus squared = 1/2.',
        '<0|-> = <0| (|0> - |1>)/sqrt(2) = 1/sqrt(2). Modulus squared = 1/2.',
        'All 4 cross-probabilities equal 0.5. MUB verified.'
      ]
    },
    commonMisconceptions: [
      'There is nothing "magical" about the computational Z basis; it is simply the convention chosen by quantum computer scientists.'
    ],
    quickCheck: {
      question: 'If a qubit is prepared in state |0> (Z eigenstate) and measured in the X basis, what is the probability of measuring |+>?',
      options: ['100%', '50%', '0%', '25%'],
      correctIndex: 1,
      explanation: 'Because Z and X are mutually unbiased, |<0|+>|^2 = 1/2 = 50%.'
    },
    summary: 'The Z, X, and Y bases are mutually unbiased bases with pairwise overlap 1/d = 1/2.',
    keyEquations: ['|\\langle z_i | x_j \\rangle|^2 = \\frac{1}{2}'],
    videoIds: ['vid-basis-states-mub'],
    references: ['Wootters, W. K. & Fields, B. D. (1989). Optimal state-determination by mutually unbiased measurements.']
  },
  {
    id: '4.9',
    title: 'Computational Basis',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['4.3'],
    objectives: [
      'Define computational basis for n qubits: {|00...0> through |11...1>}',
      'Understand binary encoding of integers 0 to 2^n - 1',
      'Connect basis states to bitstrings'
    ],
    intuition: 'For 1 qubit, the computational basis is {|0>, |1>}. For 2 qubits, it is {|00>, |01>, |10>, |11>}. For n qubits, there are 2^n computational basis states, each labeled by an n-bit binary string. They correspond to the integers 0 through 2^n - 1.',
    sections: [
      {
        heading: 'Binary Integer Representation',
        content: 'State |x> corresponds to integer x = sum_{k=0}^{n-1} b_k 2^{n-1-k}. For 3 qubits, |5> = |101> because 1*4 + 0*2 + 1*1 = 5.'
      }
    ],
    equations: [
      {
        label: 'Computational Basis Set',
        latex: '\\mathcal{B} = \\left\\{ |x\\rangle \\mid x \\in \\{0, 1\\}^n \\right\\}, \\quad \\dim(\\mathcal{B}) = 2^n',
        explanation: 'Forms the standard orthonormal basis of an n-qubit quantum register.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'What is the vector index of computational basis state |110> in a 3-qubit register?',
      solution: 'Binary 110 = 1*2^2 + 1*2^1 + 0*2^0 = 4 + 2 + 0 = 6. In a 0-indexed column vector of size 8, state |110> is at index 6 (the 7th entry, with a 1 at index 6 and 0s elsewhere).',
      derivationSteps: [
        'Bit string: 110.',
        'Decimal value: 1*4 + 1*2 + 0*1 = 6.',
        'Vector: [0; 0; 0; 0; 0; 0; 1; 0].'
      ]
    },
    commonMisconceptions: [
      'Be mindful of endianness! Quirk and Qiskit use little-endian convention (qubit 0 is rightmost least significant bit), while standard textbooks often write big-endian.'
    ],
    quickCheck: {
      question: 'How many computational basis states exist in a 5-qubit quantum register?',
      options: ['5', '10', '25', '32 (2^5)'],
      correctIndex: 3,
      explanation: '2^5 = 32 computational basis states (|00000> to |11111>).'
    },
    summary: 'The computational basis comprises 2^n orthogonal binary bitstrings from |0...0> to |1...1>.',
    keyEquations: ['|x\\rangle \\in \\{|0\\rangle, |1\\rangle\\}^{\\otimes n}', 'N = 2^n'],
    videoIds: ['vid-computational-basis'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '4.10',
    title: 'Other Measurement Bases',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['4.8'],
    objectives: [
      'Explore the Hadamard X-basis: {|+>, |->}',
      'Explore the Circular Y-basis: {|+i>, |-i>}',
      'Understand the Bell basis for 2 qubits'
    ],
    intuition: 'Just as you can view a sculpture from the front, side, or top, you can measure a quantum state along the Z axis, the X axis, or the Y axis. For two qubits, you can even measure in the entangled "Bell basis", projecting the state directly onto entangled Bell states (essential for quantum teleportation).',
    sections: [
      {
        heading: 'The Three Single-Qubit Bases',
        content: '• Z-Basis: {|0>, |1>} (Eigenstates of sigma_z)\n• X-Basis: {|+>, |->} (Eigenstates of sigma_x)\n• Y-Basis: {|+i>, |-i>} (Eigenstates of sigma_y)\nWhere |+i> = (|0> + i|1>)/sqrt(2) and |-i> = (|0> - i|1>)/sqrt(2).'
      }
    ],
    equations: [
      {
        label: 'Pauli Eigenbases',
        latex: '|\\pm x\\rangle = \\frac{|0\\rangle \\pm |1\\rangle}{\\sqrt{2}}, \\quad |\\pm y\\rangle = \\frac{|0\\rangle \\pm i|1\\rangle}{\\sqrt{2}}, \\quad |\\pm z\\rangle = \\{|0\\rangle, |1\\rangle\\}',
        explanation: 'The three orthogonal pairs of eigenstates corresponding to the Pauli matrices X, Y, and Z.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Write the state |0> as a linear combination of the X-basis states |+> and |->.',
      solution: '|+> = (|0> + |1>)/sqrt(2) and |-> = (|0> - |1>)/sqrt(2). Adding them: |+> + |-> = (2|0>)/sqrt(2) = sqrt(2)|0>. Dividing by sqrt(2): |0> = (1/sqrt(2))|+> + (1/sqrt(2))|->. In the X basis, |0> is an equal superposition of |+> and |->!',
      derivationSteps: [
        '|+> = (|0> + |1>)/sqrt(2).',
        '|-> = (|0> - |1>)/sqrt(2).',
        '|+> + |-> = sqrt(2)|0>.',
        '|0> = (|+> + |->) / sqrt(2).'
      ]
    },
    commonMisconceptions: [
      'No basis is "more fundamental" than another. |0> is a superposition in the X basis, just as |+> is a superposition in the Z basis!'
    ],
    quickCheck: {
      question: 'What are the eigenstates of the Pauli-Y matrix?',
      options: [
        '|0> and |1>',
        '|+> and |->',
        '|+i> = (|0>+i|1>)/sqrt(2) and |-i> = (|0>-i|1>)/sqrt(2)',
        '[1; 1] and [1; -1]'
      ],
      correctIndex: 2,
      explanation: 'Pauli-Y has eigenvalues +1 and -1 with eigenstates |+i> and |-i>.'
    },
    summary: 'The Pauli matrices X, Y, and Z define three mutually orthogonal measurement bases.',
    keyEquations: ['|0\\rangle = \\frac{|+\\rangle + |-\\rangle}{\\sqrt{2}}', '|1\\rangle = \\frac{|+\\rangle - |-\\rangle}{\\sqrt{2}}'],
    videoIds: ['vid-pauli-bases'],
    references: ['Nielsen & Chuang, Section 2.1.']
  },
  {
    id: '4.11',
    title: 'Quantum State Vectors',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.9'],
    objectives: [
      'Write multi-qubit statevectors as 2^n complex column arrays',
      'Compute tensor products of statevectors',
      'Track statevector evolution through quantum gates'
    ],
    intuition: 'A quantum statevector is the complete description of a quantum computer. For n qubits, the statevector is a column array of 2^n complex numbers. A quantum simulator (like Quirk or Qiskit StatevectorSimulator) simulates a quantum computer by tracking this exact 2^n vector step by step.',
    sections: [
      {
        heading: 'Structure of the Multi-Qubit Statevector',
        content: 'For n qubits, |psi> = [c_0; c_1; c_2; ...; c_{2^n-1}]. Each entry c_k represents the amplitude of the k-th basis state. Sum_{k} |c_k|^2 = 1.'
      }
    ],
    equations: [
      {
        label: 'Statevector Normalization',
        latex: '|\\psi\\rangle = \\begin{pmatrix} c_0 \\\\ c_1 \\\\ \\vdots \\\\ c_{2^n-1} \\end{pmatrix}, \\quad \\sum_{k=0}^{2^n-1} |c_k|^2 = 1',
        explanation: 'The complete 2^n statevector representation of an n-qubit register.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Write the 4-element statevector for |psi> = |+> \\otimes |0>.',
      solution: '|+> = [1/sqrt(2); 1/sqrt(2)], |0> = [1; 0]. |psi> = (1/sqrt(2)) [1; 0] stacked on top of (1/sqrt(2)) [1; 0] = [1/sqrt(2); 0; 1/sqrt(2); 0]. States 00 and 10 each have 50% probability; states 01 and 11 have 0% probability.',
      derivationSteps: [
        'Top block: (1/sqrt(2)) * [1; 0] = [1/sqrt(2); 0].',
        'Bottom block: (1/sqrt(2)) * [1; 0] = [1/sqrt(2); 0].',
        'Full vector: [1/sqrt(2); 0; 1/sqrt(2); 0].',
        'P(00) = 0.5, P(01) = 0, P(10) = 0.5, P(11) = 0.'
      ]
    },
    commonMisconceptions: [
      'Classical computers simulate quantum computers by storing this entire statevector in RAM. When n exceeds 50, storing the 2^50 amplitudes requires petabytes of memory, which is why classical supercomputers hit a brick wall!'
    ],
    quickCheck: {
      question: 'How many complex numbers comprise the full statevector of a 4-qubit system?',
      options: ['4', '8', '16', '32'],
      correctIndex: 2,
      explanation: '2^4 = 16 complex amplitudes.'
    },
    summary: 'A statevector represents the full quantum register as a 2^n complex column vector.',
    keyEquations: ['|\\psi\\rangle = \\sum_{x=0}^{2^n-1} c_x |x\\rangle'],
    videoIds: ['vid-statevectors'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '4.12',
    title: 'Unitary Operations',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.18', '4.11'],
    objectives: [
      'Define unitary matrices: U^dagger U = U U^dagger = I',
      'Prove that unitary transformations preserve inner products: <U psi | U phi> = <psi | phi>',
      'Explain geometric rotation on the Bloch sphere'
    ],
    intuition: 'A unitary operation is a generalized rotation in complex Hilbert space. Just as spinning a globe does not change its radius or distort continents, a unitary gate rotates the quantum statevector without stretching it, shrinking it, or tearing it. The length of the statevector remains exactly 1, and probabilities always sum to 100%.',
    sections: [
      {
        heading: 'Preservation of Norm and Angles',
        content: '<U psi | U phi> = <psi | U^dagger U | phi> = <psi | I | phi> = <psi | phi>. Because the inner product is invariant, orthogonal states stay orthogonal, and normalized states stay normalized.'
      }
    ],
    equations: [
      {
        label: 'Unitary Invariance of Inner Product',
        latex: '\\langle U\\psi | U\\phi \\rangle = \\langle\\psi| U^\\dagger U |\\phi\\rangle = \\langle\\psi|\\phi\\rangle',
        explanation: 'Unitary operators preserve all inner products, lengths, and quantum angles.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Prove that if |psi> is normalized (<psi|psi> = 1) and U is unitary, then |psi\' > = U|psi> is also normalized.',
      solution: '<psi\'|psi\' > = <U psi | U psi> = <psi | U^dagger U | psi> = <psi | I | psi> = <psi|psi> = 1. Therefore ||U|psi>|| = 1. Probability is strictly conserved!',
      derivationSteps: [
        '|psi\' > = U|psi>.',
        '<psi\'| = <psi|U^dagger.',
        '<psi\'|psi\' > = <psi|U^dagger U|psi>.',
        'U^dagger U = I -> <psi|I|psi> = <psi|psi> = 1.'
      ]
    },
    commonMisconceptions: [
      'Not all reversible matrices are unitary. A matrix must also preserve the Euclidean length (norm) of complex vectors to be unitary.'
    ],
    quickCheck: {
      question: 'What happens to the norm ||psi|| of a quantum state when any unitary gate U is applied?',
      options: ['It doubles.', 'It stays exactly 1 (strictly preserved).', 'It drops to zero.', 'It fluctuates randomly.'],
      correctIndex: 1,
      explanation: 'Unitary transformations preserve the norm: ||U|psi>|| = |||psi>|| = 1.'
    },
    summary: 'Unitary operations U^dagger U = I are norm-preserving rotations that form all non-measurement quantum gates.',
    keyEquations: ['U^\\dagger U = I', '\\|U|\\psi\\rangle\\| = \\|\\psi\\| = 1'],
    videoIds: ['vid-unitary-ops'],
    references: ['Nielsen & Chuang, Section 2.1.']
  },
  {
    id: '4.13',
    title: 'Reversible Computation',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Measurement Bases & Unitary Evolution',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.12'],
    objectives: [
      'Contrast Landauer\'s principle with Bennett\'s reversible computation theorem',
      'Explain why classical gates dissipate heat while ideal quantum gates do not',
      'Construct reversible classical logic using the Fredkin and Toffoli gates'
    ],
    intuition: 'Why do laptops get hot? In 1961, Rolf Landauer showed that heat is not generated by moving bits around; heat is generated when you ERASE information! Because quantum mechanics is strictly unitary, quantum computers never erase information during gate execution. In theory, an ideal quantum computer can execute billions of operations with ZERO thermodynamic energy dissipation!',
    sections: [
      {
        heading: 'Landauer\'s Principle vs Bennett (1973)',
        content: 'Charles Bennett proved that any classical computation can be performed reversibly with zero minimum thermodynamic dissipation using reversible gates (like the 3-bit Toffoli gate).'
      }
    ],
    equations: [
      {
        label: 'Landauer Thermodynamic Bound',
        latex: 'E_{\\text{dissipated}} \\ge k_B T \\ln(2) \\quad \\text{per erased bit}',
        explanation: 'Thermodynamic heat dissipated when one bit of physical information is erased.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'How does the 3-bit Toffoli (CCNOT) gate achieve universal classical computation reversibly?',
      solution: 'Toffoli maps (a, b, c) -> (a, b, c XOR (a AND b)). If c = 0, the output is (a, b, a AND b), computing AND reversibly! If a=1 and b=1, it flips c, computing NOT. Since the mapping is a bijection (reversible permutation), zero information is erased.',
      derivationSteps: [
        'Input: (a, b, 0). Output: (a, b, a AND b).',
        'Input: (1, 1, c). Output: (1, 1, NOT c).',
        'Bijective 8x8 permutation matrix.',
        'Toffoli^2 = I (self-inverse).'
      ]
    },
    commonMisconceptions: [
      'Real quantum processors today do dissipate energy due to microwave cabling and cryostat compressors, but the quantum gate logic itself is fundamentally thermodynamically reversible.'
    ],
    quickCheck: {
      question: 'According to Landauer\'s Principle, what action causes unavoidable thermodynamic heat dissipation in computation?',
      options: ['Multiplying two numbers', 'Erasing or overwriting information', 'Reading memory', 'Sending bits through a cable'],
      correctIndex: 1,
      explanation: 'Erasing information destroys thermodynamic entropy, dissipating at least k_B T ln(2) of heat.'
    },
    summary: 'Quantum computing is fundamentally reversible, avoiding Landauer\'s information erasure limit.',
    keyEquations: ['\\Delta Q \\ge k_B T \\ln 2', 'U^{-1} = U^\\dagger'],
    videoIds: ['vid-reversible-computing'],
    references: ['Landauer, R. (1961). Irreversibility and heat generation in the computing process. IBM J. Res. Dev.']
  },
  {
    id: '4.14',
    title: 'Quantum Parallelism',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.22', '4.9'],
    objectives: [
      'Explain quantum parallelism: Evaluating f(x) for all 2^n inputs in a single step',
      'Construct the superposition state using Hadamard layer H^(x n)',
      'Understand the bottleneck: Measurement only yields 1 result unless interference is applied'
    ],
    intuition: 'If you want to evaluate a function on 1,000 different inputs classically, you must run your program 1,000 times (or buy 1,000 CPU cores). A quantum computer applies a layer of Hadamard gates to create an equal superposition of all 1,000 inputs, and then runs the function ONCE. By linearity, the function evaluates on all 1,000 inputs simultaneously! But there is a catch: if you measure right away, you only see ONE random answer.',
    sections: [
      {
        heading: 'Creating the Massive Superposition',
        content: 'Applying n Hadamard gates to |00...0> produces an equal superposition of all 2^n computational states: H^{\\otimes n} |0\\rangle^{\\otimes n} = (1/\\sqrt{2^n}) \\sum_{x=0}^{2^n-1} |x\\rangle.'
      },
      {
        heading: 'The Function Oracle U_f',
        content: 'Applying the function oracle U_f |x>|0> = |x>|f(x)> yields (1/\\sqrt{2^n}) \\sum_{x} |x>|f(x)>. All 2^n values of f(x) are computed in parallel in a single quantum operation!'
      }
    ],
    equations: [
      {
        label: 'Quantum Parallel Superposition',
        latex: 'U_f \\left( \\frac{1}{\\sqrt{2^n}} \\sum_{x=0}^{2^n-1} |x\\rangle |0\\rangle \\right) = \\frac{1}{\\sqrt{2^n}} \\sum_{x=0}^{2^n-1} |x\\rangle |f(x)\\rangle',
        explanation: 'Evaluates function f across all 2^n inputs simultaneously in one execution.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'For a 10-qubit input register, how many values of f(x) are computed in parallel by a single application of U_f?',
      solution: '2^10 = 1,024 values computed simultaneously. For a 300-qubit register, 2^300 values are evaluated in parallel (more than all atoms in the universe!).',
      derivationSteps: [
        'Inputs: N = 2^{10} = 1024.',
        'Oracle operation: 1 unitary application.',
        'Total evaluations: 1024 values encoded in amplitudes.'
      ]
    },
    commonMisconceptions: [
      'Quantum parallelism alone is NOT enough to solve problems faster. If you measure immediately, the state collapses to a single random x and f(x), performing no better than a random guess. You MUST use quantum interference before measurement!'
    ],
    quickCheck: {
      question: 'Why is quantum parallelism alone not enough to gain an algorithm speedup?',
      options: [
        'It overheats the chip.',
        'Measurement collapses the state, revealing only ONE random outcome unless interference combines the amplitudes.',
        'Hadamard gates are too slow.',
        'It violates energy conservation.'
      ],
      correctIndex: 1,
      explanation: 'You can only measure one bitstring, so quantum interference is required to amplify the correct answer before readout.'
    },
    summary: 'Quantum parallelism evaluates f(x) across 2^n inputs in parallel, but requires quantum interference to extract useful global properties.',
    keyEquations: ['H^{\\otimes n}|0\\rangle^{\\otimes n} = \\frac{1}{\\sqrt{2^n}}\\sum |x\\rangle'],
    videoIds: ['vid-quantum-parallelism'],
    references: ['Nielsen & Chuang, Section 1.4: Quantum parallelism.']
  },
  {
    id: '4.15',
    title: 'Quantum Interference',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['4.14', '1.5'],
    objectives: [
      'Explain how quantum algorithms choreograph constructive and destructive interference',
      'Understand phase kickback: U|x>|-> = (-1)^f(x) |x>|->',
      'Analyze how Grover and Shor use interference to cancel wrong paths'
    ],
    intuition: 'Quantum parallelism is the engine that generates all possible answers, but Quantum Interference is the steering wheel that selects the right one! By manipulating phase angles, quantum algorithms arrange for wrong answers to cancel each other out destructively, while the correct answer reinforces constructively until its measurement probability approaches 100%.',
    sections: [
      {
        heading: 'Phase Kickback Mechanism',
        content: 'When an oracle evaluates U_f |x>|y> = |x>|y XOR f(x)>, if the target qubit is set to |-> = (|0>-|1>)/sqrt(2), a remarkable phenomenon occurs: the function value f(x) kicks back as a phase factor (-1)^f(x) on the input register! U_f |x>|-> = (-1)^{f(x)} |x>|->.'
      }
    ],
    equations: [
      {
        label: 'Phase Kickback Equation',
        latex: 'U_f |x\\rangle |-\\rangle = (-1)^{f(x)} |x\\rangle |-\\rangle',
        explanation: 'Converts function values into relative phase shifts of the input state.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Show why U_f |x>|-> = (-1)^f(x) |x>|-> using f(x) = 1.',
      solution: 'When f(x) = 1, the target qubit undergoes a NOT gate: |0> becomes |1> and |1> becomes |0>. So |-> = (|0>-|1>)/sqrt(2) becomes (|1>-|0>)/sqrt(2) = -(|0>-|1>)/sqrt(2) = -|-> = (-1)^1 |->. The negative sign appears in front of the whole state!',
      derivationSteps: [
        'U_f |x>|0> = |x>|1>.',
        'U_f |x>|1> = |x>|0>.',
        'U_f |x> (|0>-|1>)/sqrt(2) = |x> (|1>-|0>)/sqrt(2).',
        '= -|x> (|0>-|1>)/sqrt(2) = (-1) |x> |->.'
      ]
    },
    commonMisconceptions: [
      'Interference does not require two separate physical particles; each individual quantum statevector interferes with its own computational paths.'
    ],
    quickCheck: {
      question: 'What happens to the target qubit |-> during phase kickback?',
      options: [
        'It is destroyed.',
        'It remains unchanged as |-> while kicking a phase (-1)^f(x) onto the input register.',
        'It collapses to |0>.',
        'It flips to |+>.'
      ],
      correctIndex: 1,
      explanation: 'The target qubit remains invariant in |-> while the eigenvalue (-1)^f(x) multiplies the input amplitude.'
    },
    summary: 'Quantum interference choreographs constructive amplification of correct solutions and destructive cancellation of wrong paths.',
    keyEquations: ['U_f |x\\rangle|-\\rangle = (-1)^{f(x)}|x\\rangle|-\\rangle'],
    videoIds: ['vid-quantum-interference'],
    references: ['Cleve et al. (1998). Quantum algorithms revisited. Proc. R. Soc. Lond. A.']
  },
  {
    id: '4.16',
    title: 'Entanglement',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['3.19', '4.11'],
    objectives: [
      'Generate the Bell state using a Hadamard and a CNOT gate: CNOT * (H (x) I) |00> = |Phi+>',
      'Understand non-local quantum correlations in algorithms',
      'Explain entanglement as a key computational resource'
    ],
    intuition: 'Superposition gives a quantum computer breadth, but entanglement gives it depth and interconnectivity. Without entanglement, an n-qubit quantum computer can be simulated efficiently on your smartphone as n independent single-qubit Bloch spheres! Entanglement is the computational resource that knits the 2^n amplitudes into an inseparable fabric.',
    sections: [
      {
        heading: 'Creating Entanglement: H + CNOT',
        content: '1. Start with |00>.\n2. Apply Hadamard to qubit 1: (H \\otimes I)|00> = (|0>+|1>)/sqrt(2) \\otimes |0> = (|00> + |10>)/sqrt(2).\n3. Apply CNOT (controlled by qubit 1, targeting qubit 2): If qubit 1 is 0, qubit 2 stays 0 (|00>). If qubit 1 is 1, qubit 2 flips to 1 (|11>). Result: (|00> + |11>)/sqrt(2) = |Phi+>!'
      }
    ],
    equations: [
      {
        label: 'Bell State Circuit Synthesis',
        latex: '\\text{CNOT}_{12} (H \\otimes I) |00\\rangle = \\text{CNOT}_{12} \\left(\\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}\\right) = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} = |\\Phi^+\\rangle',
        explanation: 'The fundamental 2-gate sequence that creates maximal quantum entanglement.'
      }
    ],
    diagramType: 'bell-state',
    workedExample: {
      problem: 'What state is produced if the input to the H + CNOT circuit is |01> instead of |00>?',
      solution: 'Step 1: H on q1 gives (|0>+|1>)/sqrt(2) \\otimes |1> = (|01> + |11>)/sqrt(2). Step 2: CNOT flips q2 when q1=1. |01> stays |01>. |11> becomes |10>. Final state: (|01> + |10>)/sqrt(2) = |Psi+> (the second Bell state)!',
      derivationSteps: [
        'Input: |01>.',
        'After H on q1: (|01> + |11>) / sqrt(2).',
        'CNOT: |01> -> |01>, |11> -> |10>.',
        'Result: (|01> + |10>)/sqrt(2) = |Psi+>.'
      ]
    },
    commonMisconceptions: [
      'Entanglement cannot be created across space without an interaction. Qubits must either interact locally (via a CNOT gate) or be connected by entangled photons.'
    ],
    quickCheck: {
      question: 'Which simple 2-gate circuit creates a maximally entangled Bell state from |00>?',
      options: ['X gate followed by Z gate', 'Hadamard gate on qubit 1 followed by CNOT targeting qubit 2', 'Two Hadamard gates', 'Two CNOT gates'],
      correctIndex: 1,
      explanation: 'H on control qubit followed by CNOT produces the canonical Bell state (|00> + |11>)/sqrt(2).'
    },
    summary: 'Entanglement is synthesized by combining superposition (H) with controlled interaction (CNOT).',
    keyEquations: ['\\text{CNOT}(H \\otimes I)|00\\rangle = |\\Phi^+\\rangle'],
    videoIds: ['vid-creating-entanglement'],
    references: ['Nielsen & Chuang, Section 1.3: Quantum entanglement.']
  },
  {
    id: '4.17',
    title: 'No-Cloning Theorem',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.10', '4.12'],
    objectives: [
      'State and prove the No-Cloning Theorem (Wootters, Zurek, Dieks 1982)',
      'Explain why unknown quantum states cannot be copied: U(|psi>|0>) != |psi>|psi>',
      'Understand the implications: No classical "Ctrl+C", but enables unconditionally secure quantum cryptography'
    ],
    intuition: 'In classical computing, copying data is trivial: when you press Ctrl+C, your computer duplicates millions of bits effortlessly. But in quantum computing, it is a mathematical IMPOSSIBILITY to create an identical copy of an unknown quantum state! The linearity of quantum mechanics strictly forbids cloning. While this prevents simple quantum backup copies, it guarantees that quantum encrypted messages can never be intercepted or copied without detection.',
    sections: [
      {
        heading: 'The 4-Line Proof of the No-Cloning Theorem',
        content: 'Suppose a hypothetical unitary cloning machine U exists such that for any state |psi>, U(|psi>|0>) = |psi>|psi>, and for any state |phi>, U(|phi>|0>) = |phi>|phi>.\nTake the inner product of the outputs:\n<psi phi | phi phi> = (<psi|phi>)^2.\nBecause U is unitary, it preserves inner products:\n<psi 0 | phi 0> = <psi|phi> <0|0> = <psi|phi>.\nEquating both sides:\n<psi|phi> = (<psi|phi>)^2.\nThis equation has only TWO solutions: <psi|phi> = 0 (orthogonal states) or <psi|phi> = 1 (identical states)!\nA quantum cloner can ONLY copy states that are already known to be orthogonal; it CANNOT clone an arbitrary unknown quantum state!'
      }
    ],
    equations: [
      {
        label: 'No-Cloning Theorem Contradiction',
        latex: '\\langle\\psi|\\phi\\rangle = (\\langle\\psi|\\phi\\rangle)^2 \\implies \\langle\\psi|\\phi\\rangle \\in \\{0, 1\\}',
        explanation: 'Proves that a universal unitary cloner cannot exist for non-orthogonal quantum states.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why can a classical CNOT gate clone classical basis states |0> and |1>, but fails to clone a superposition state |+>?',
      solution: 'For |0>: CNOT(|0>|0>) = |00> (cloned!). For |1>: CNOT(|1>|0>) = |11> (cloned!). But for |+> = (|0>+|1>)/sqrt(2): CNOT(|+>|0>) = (|00> + |11>)/sqrt(2) = |Phi+>! Instead of producing |+>|+> = (|00> + |01> + |10> + |11>)/2, it produced an entangled Bell state! The CNOT entangled the qubits instead of cloning them.',
      derivationSteps: [
        'Target to clone: |+>|+> = 1/2 [|00> + |01> + |10> + |11>].',
        'Actual output: CNOT(|+>|0>) = 1/sqrt(2) [|00> + |11>].',
        'Comparison: 1/sqrt(2)[|00>+|11>] != 1/2[|00>+|01>+|10>+|11>].',
        'Conclusion: Superposition was entangled, NOT cloned.'
      ]
    },
    commonMisconceptions: [
      'The no-cloning theorem applies to UNKNOWN quantum states. If you already know the state (e.g. "it is |0>"), you can prepare as many copies as you want.'
    ],
    quickCheck: {
      question: 'What fundamental mathematical property of quantum mechanics makes the cloning of unknown quantum states impossible?',
      options: ['Linearity of unitary operators', 'Planck\'s constant', 'Speed of light limit', 'Electric resistance'],
      correctIndex: 0,
      explanation: 'The linearity of unitary operators forbids U|psi>|0> = |psi>|psi> for non-orthogonal states.'
    },
    summary: 'The No-Cloning Theorem proves that unknown quantum states cannot be duplicated, enabling quantum cryptography (BB84).',
    keyEquations: ['U(|\\psi\\rangle|0\\rangle) \\ne |\\psi\\rangle|\\psi\\rangle', '\\langle\\psi|\\phi\\rangle = (\\langle\\psi|\\phi\\rangle)^2'],
    videoIds: ['vid-no-cloning'],
    references: ['Wootters, W. K. & Zurek, W. H. (1982). A single quantum cannot be cloned. Nature 299.']
  },
  {
    id: '4.18',
    title: 'Quantum Teleportation',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['4.16', '4.17'],
    objectives: [
      'Step through the Bennett et al. (1993) Quantum Teleportation protocol',
      'Track state evolution across 3 qubits (Alice\'s unknown state, shared Bell pair)',
      'Explain why teleportation destroys the original (complying with No-Cloning) and requires 2 classical bits (no faster-than-light signaling)'
    ],
    intuition: 'Quantum teleportation is NOT "Beam me up, Scotty" transporting human flesh. It is the disembodiment and exact reconstruction of an unknown quantum statevector from Alice to Bob. Alice does not know what state |psi> she has, and Bob does not know either. By consuming one pre-shared entangled Bell pair and transmitting TWO classical bits over a phone line, Bob reconstructs the exact state |psi>, while Alice\'s original state is destroyed in the measurement.',
    sections: [
      {
        heading: 'The 5-Step Protocol',
        content: '1. Alice holds unknown qubit 1: |psi> = alpha|0> + beta|1>. Alice and Bob share a Bell pair on qubits 2 and 3: |Phi+>_23 = (|00>+|11>)/sqrt(2).\n2. Joint 3-qubit state: |psi>_1 \\otimes |Phi+>_23.\n3. Alice applies CNOT (qubit 1 control, qubit 2 target), then Hadamard on qubit 1.\n4. Alice measures qubits 1 and 2, obtaining 2 classical bits (m1, m2 in {00, 01, 10, 11}). Her measurement destroys the original state!\n5. Alice sends (m1, m2) to Bob via phone/internet. Bob applies a corrective Pauli operation: If 00 -> do nothing; If 01 -> apply X; If 10 -> apply Z; If 11 -> apply ZX. Bob\'s qubit is now IDENTICAL to |psi>!'
      }
    ],
    equations: [
      {
        label: 'Quantum Teleportation Identity',
        latex: '|\\psi\\rangle_1 |\\Phi^+\\rangle_{23} = \\frac{1}{2} \\sum_{m_1, m_2} |m_1 m_2\\rangle_{12} \\otimes \\left( X^{m_2} Z^{m_1} |\\psi\\rangle_3 \\right)',
        explanation: 'Decomposes the 3-qubit state into Alice\'s measurement outcomes and Bob\'s corrective Pauli operators.'
      }
    ],
    diagramType: 'teleportation',
    workedExample: {
      problem: 'If Alice measures m1 = 1 and m2 = 0, what corrective gate must Bob apply to recover state |psi>?',
      solution: 'Looking at the teleportation table: m1 = 1 corresponds to a Z phase error, and m2 = 0 corresponds to no bit flip. Bob applies Z^(m1) X^(m2) = Z^1 X^0 = Z. Applying the Pauli-Z gate restores Bob\'s qubit to |psi>!',
      derivationSteps: [
        'Alice measurement: m1 = 1, m2 = 0.',
        'Bob state before correction: Z|psi>.',
        'Bob applies Z gate: Z * Z|psi> = I|psi> = |psi>.',
        'State successfully teleported.'
      ]
    },
    commonMisconceptions: [
      'Teleportation does NOT transmit information faster than light! Bob\'s qubit is in a completely mixed random state until Alice\'s two classical bits arrive at the speed of light.'
    ],
    quickCheck: {
      question: 'How many classical bits must Alice transmit to Bob to complete the teleportation of 1 qubit?',
      options: ['0 bits', '1 bit', '2 classical bits', 'Infinite bits'],
      correctIndex: 2,
      explanation: 'Alice measures 2 qubits, producing 2 classical bits (00, 01, 10, or 11) that tell Bob which corrective gate to apply.'
    },
    summary: 'Quantum teleportation transmits an unknown quantum state using 1 shared Bell pair and 2 classical bits.',
    keyEquations: ['1 \\text{ Qubit} = 1 \\text{ e-bit (entanglement)} + 2 \\text{ classical bits}'],
    videoIds: ['vid-quantum-teleportation'],
    references: ['Bennett et al. (1993). Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Phys. Rev. Lett.']
  },
  {
    id: '4.19',
    title: 'Superdense Coding',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['4.16', '4.18'],
    objectives: [
      'Understand Superdense Coding: Transmitting TWO classical bits by sending only ONE physical qubit',
      'Trace Alice\'s 4 Pauli encodings: I, X, Z, XZ on her half of a Bell pair',
      'Explain Bob\'s Bell measurement to decode both bits'
    ],
    intuition: 'Superdense coding is the photographic negative of quantum teleportation! In teleportation, you send 2 classical bits to transmit 1 qubit. In superdense coding, you send 1 physical qubit to transmit 2 classical bits! This is achieved because pre-shared entanglement acts as a double-capacity communication pipe.',
    sections: [
      {
        heading: 'The Protocol',
        content: '1. Alice and Bob pre-share Bell state |Phi+> = (|00>+|11>)/sqrt(2).\n2. Alice wants to send 2 classical bits (00, 01, 10, or 11):\n   • To send 00: Alice applies I -> state stays |Phi+>\n   • To send 01: Alice applies X -> state becomes |Psi+> = (|10>+|01>)/sqrt(2)\n   • To send 10: Alice applies Z -> state becomes |Phi-> = (|00>-|11>)/sqrt(2)\n   • To send 11: Alice applies iY (or XZ) -> state becomes |Psi-> = (|01>-|10>)/sqrt(2)\n3. Alice physically mails her single qubit to Bob.\n4. Bob now holds BOTH qubits. He applies a Bell measurement (CNOT then H), reading out all 4 orthogonal Bell states with 100% accuracy to recover Alice\'s 2 bits!'
      }
    ],
    equations: [
      {
        label: 'Superdense Coding Encoding Rules',
        latex: '00 \\to I|\\Phi^+\\rangle, \\quad 01 \\to X_1|\\Phi^+\\rangle = |\\Psi^+\\rangle, \\quad 10 \\to Z_1|\\Phi^+\\rangle = |\\Phi^-\\rangle, \\quad 11 \\to (XZ)_1|\\Phi^+\\rangle = |\\Psi^-\\rangle',
        explanation: 'Alice encodes 4 distinct classical messages into the 4 mutually orthogonal Bell states by operating on only 1 qubit.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Alice wants to transmit the message "10" using superdense coding. What gate does she apply, and how does Bob decode it?',
      solution: 'To send "10", Alice applies the Pauli-Z gate to her qubit: (Z \\otimes I) (|00>+|11>)/sqrt(2) = (|00> - |11>)/sqrt(2) = |Phi->. She sends her qubit to Bob. Bob applies CNOT: |00>->|00>, |11>->|10>, giving (|0>-|1>)/sqrt(2) \\otimes |0> = |->|0>. Bob applies H to qubit 1: H|-> = |1>. The final state is |10>. Bob measures 10 directly!',
      derivationSteps: [
        'Alice applies Z: |Phi+> -> |Phi->.',
        'Bob applies CNOT: (|00> - |10>) / sqrt(2) = (|0> - |1>)/sqrt(2) |0> = |->|0>.',
        'Bob applies H on q1: H|->|0> = |10>.',
        'Bob measures: bit 1 = 1, bit 2 = 0. Decoded message: 10.'
      ]
    },
    commonMisconceptions: [
      'Alice only transmitted 1 physical qubit through the mail, but Bob gained 2 classical bits because 1 bit of information was already stored in the pre-shared entanglement.'
    ],
    quickCheck: {
      question: 'How many classical bits can Alice transmit to Bob by physically sending 1 qubit using superdense coding?',
      options: ['1 bit', '2 bits', '4 bits', '0 bits'],
      correctIndex: 1,
      explanation: 'Superdense coding enables transmitting 2 classical bits by sending 1 qubit using a pre-shared Bell pair.'
    },
    summary: 'Superdense coding transmits 2 classical bits using only 1 transmitted qubit and 1 shared Bell pair.',
    keyEquations: ['1 \\text{ Sent Qubit} + 1 \\text{ Bell Pair} = 2 \\text{ Classical Bits}'],
    videoIds: ['vid-superdense-coding'],
    references: ['Bennett, C. H. & Wiesner, S. J. (1992). Communication via one- and two-particle operators on Einstein-Podolsky-Rosen states. Phys. Rev. Lett.']
  },
  {
    id: '4.20',
    title: 'Classical Bits vs Qubits',
    level: 4,
    levelName: 'Level 4 — Quantum Computing Foundations',
    module: 'Parallelism, Interference, Entanglement & Teleportation',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.1', '4.19'],
    objectives: [
      'Synthesize differences: Determinism vs Superposition, Discrete vs Continuous Amplitudes, Clonant vs Non-clonable',
      'Understand information capacity and measurement constraints',
      'Prepare for Level 5: Quantum Gates'
    ],
    intuition: 'A classical bit is an orange or an apple; a qubit is a sphere of infinite continuous complex flavors that collapses into either an orange or an apple the second you taste it. As we transition to Level 5, we will learn how to manipulate qubits using quantum gates—the unitary logic blocks of quantum circuits.',
    sections: [
      {
        heading: 'Master Comparison Table',
        content: '• State Space: Classical bit lives in {0, 1}; Qubit lives on the continuous unit sphere in C^2.\n• Reversibility: Classical gates can be irreversible (AND, OR); Quantum gates are strictly reversible and unitary.\n• Copying: Classical bits can be copied infinitely (Ctrl+C); Qubits obey the No-Cloning Theorem.\n• Correlations: Classical bits obey Bell inequalities (|S| <= 2); Qubits produce non-local entanglement (|S| = 2.828).'
      }
    ],
    equations: [
      {
        label: 'Fundamental Paradigm Shift',
        latex: '\\text{Bit: } b \\in \\{0, 1\\} \\quad \\longleftrightarrow \\quad \\text{Qubit: } |\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle \\in \\mathbb{C}^2',
        explanation: 'Transitions from discrete classical binary logic to continuous complex Hilbert space vector geometry.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Summarize why an n-qubit quantum register can explore computational states that an n-bit classical register cannot.',
      solution: 'An n-bit classical register stores exactly ONE n-bit binary configuration out of 2^n possibilities. An n-qubit register stores an intertwined linear superposition of ALL 2^n configurations simultaneously, with complex amplitudes that undergo constructive and destructive wave interference.',
      derivationSteps: [
        'Classical: State = x in {0, 1}^n (1 point in 2^n states).',
        'Quantum: State = sum_{x=0}^{2^n-1} c_x |x> (a 2^n-dimensional unit sphere).',
        'Interference: Can cancel wrong paths and amplify correct ones.'
      ]
    },
    commonMisconceptions: [
      'Never describe a qubit as "a bit that is both 0 and 1 at the same time." It is a coherent unit vector in a 2D complex space that exhibits interference.'
    ],
    quickCheck: {
      question: 'Which capability is unique to qubits and impossible for classical bits?',
      options: [
        'Storing a 0',
        'Storing a 1',
        'Quantum interference and non-local entanglement',
        'Being processed by electrical circuits'
      ],
      correctIndex: 2,
      explanation: 'Quantum interference and non-local entanglement have no classical counterpart.'
    },
    summary: 'You have completed Level 4 Quantum Computing Foundations! You are now prepared to learn all single- and multi-qubit Quantum Gates in Level 5.',
    keyEquations: ['|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle', 'U^\\dagger U = I', '|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}'],
    videoIds: ['vid-bits-vs-qubits-summary'],
    references: ['Mermin, N. D., Quantum Computer Science: An Introduction.']
  }
];
