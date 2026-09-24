/**
 * Level 1: Mathematical Foundations (Lessons 1.1 - 1.27)
 * Connects every mathematical concept to WHY it is needed in Quantum Computing.
 */

export const LEVEL_1_LESSONS = [
  {
    id: '1.1',
    title: 'Numbers and Mathematical Notation',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['0.8'],
    objectives: [
      'Distinguish sets: Natural (N), Integers (Z), Reals (R), and Complex (C)',
      'Understand the limitations of real numbers for wave interference',
      'Why QC needs this: Quantum state spaces live in complex vector spaces C^2 and C^(2^n)'
    ],
    intuition: 'In classical computing, data lives on discrete integers {0, 1} and real floating-point numbers. But nature at microscopic scales exhibits wave behavior that requires both an amplitude (how strong) and a phase (where it is in its cycle). Real numbers cannot cleanly model continuous two-dimensional phase rotations without clumsy coordinate pairs. Complex numbers C provide an elegant algebraic home for quantum wavefunctions.',
    sections: [
      {
        heading: 'Number Sets in Physics',
        content: 'Natural numbers N count discrete qubits and photons. Real numbers R represent physical measurement outcomes (energies, probabilities, positions). However, the underlying quantum statevector does not live in R; it lives in a Hilbert space over the complex numbers C.'
      },
      {
        heading: 'Why We Need Complex Numbers in Quantum Computing',
        content: 'Why not just use real numbers? Quantum mechanics requires probabilities to interfere destructively (cancel out) and constructively (reinforce). If probability were represented solely by positive real numbers, two positive probabilities could only add up to a larger number—they could never cancel to zero! Complex numbers have phase angles (e^(i*phi)), enabling exact destructive interference.'
      }
    ],
    equations: [
      {
        label: 'Number Sets Hierarchy',
        latex: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} \\subset \\mathbb{C}',
        explanation: 'Complex numbers C encompass all real numbers R as a subfield with zero imaginary part.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Show why adding two classical probabilities cannot cancel, but adding two quantum amplitudes can.',
      solution: 'Classical probabilities P1 = 0.5 and P2 = 0.5 sum to P = 1.0 (reinforcement). Quantum amplitudes c1 = 1/sqrt(2) and c2 = -1/sqrt(2) sum to c = 0, giving total probability |c|^2 = |0|^2 = 0 (complete destructive cancellation).',
      derivationSteps: [
        'Classical: P_total = P1 + P2 = 0.5 + 0.5 = 1.0 > 0.',
        'Quantum: c_total = c1 + c2 = (1/sqrt(2)) + (-1/sqrt(2)) = 0.',
        'Probability: P_total = |c_total|^2 = |0|^2 = 0.',
        'Physical meaning: Destructive wave interference.'
      ]
    },
    commonMisconceptions: [
      'Complex numbers are not "imaginary" or fictitious; they are mathematically concrete 2D algebraic entities essential for quantum wave propagation.'
    ],
    quickCheck: {
      question: 'Why are complex numbers essential for quantum state representation?',
      options: [
        'They run faster on computer chips.',
        'They permit continuous phase angles and destructive wave interference.',
        'They prevent electrical overheating in quantum labs.',
        'They replace matrix multiplication with addition.'
      ],
      correctIndex: 1,
      explanation: 'Complex amplitudes carry both magnitude and phase, enabling destructive and constructive interference.'
    },
    summary: 'Quantum statevectors inhabit complex vector spaces because phase angles are necessary for wave interference.',
    keyEquations: ['\\mathbb{C} = \\{a + bi \\mid a, b \\in \\mathbb{R}, i^2 = -1\\}'],
    videoIds: ['vid-complex-numbers-3b1b'],
    references: ['Ahlfors, L. V. (1979). Complex Analysis, 3rd Edition.']
  },
  {
    id: '1.2',
    title: 'Complex Numbers',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['1.1'],
    objectives: [
      'Define the imaginary unit i where i^2 = -1',
      'Perform addition, subtraction, and multiplication on complex numbers z = a + bi',
      'Connect complex components to quantum probability amplitude coordinates'
    ],
    intuition: 'Whenever you square an ordinary real number, the result is always non-negative: (+3)^2 = 9 and (-3)^2 = 9. For centuries, equations like x^2 + 1 = 0 had no solution. By introducing the imaginary unit i such that i^2 = -1, we open up a complete geometric plane where rotation by 90 degrees corresponds to multiplying by i.',
    sections: [
      {
        heading: 'Algebra of Complex Numbers',
        content: 'A complex number z is written as z = a + bi, where a = Re(z) is the real part and b = Im(z) is the imaginary part. Addition adds like components: (a + bi) + (c + di) = (a + c) + (b + d)i. Multiplication uses the distributive law and the rule i^2 = -1: (a + bi)(c + di) = (ac - bd) + (ad + bc)i.'
      },
      {
        heading: 'Role in Quantum Computing',
        content: 'Every qubit state |psi> = alpha|0> + beta|1> has alpha, beta in C. When a quantum phase gate S is applied, it multiplies the |1> amplitude by i, rotating its phase by 90 degrees around the Z axis of the Bloch sphere.'
      }
    ],
    equations: [
      {
        label: 'Complex Multiplication Formula',
        latex: '(a + bi)(c + di) = (ac - bd) + (ad + bc)i',
        explanation: 'Multiplying two complex numbers combines scaling of their magnitudes and addition of their phase angles.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Multiply z1 = (1 + 2i) by z2 = (3 - i). What are the real and imaginary parts of the product?',
      solution: 'z1 * z2 = (1*3 - 2*(-1)) + (1*(-1) + 2*3)i = (3 + 2) + (-1 + 6)i = 5 + 5i. Re = 5, Im = 5.',
      derivationSteps: [
        'Expand: 1*(3 - i) + 2i*(3 - i).',
        '= 3 - i + 6i - 2(i^2).',
        'Substitute i^2 = -1: 3 + 5i - 2(-1) = 3 + 5i + 2.',
        '= 5 + 5i.'
      ]
    },
    commonMisconceptions: [
      'Remember that i^2 = -1, so 2i * (-i) = -2(i^2) = -2(-1) = +2, NOT -2.'
    ],
    quickCheck: {
      question: 'Calculate (2 + 3i) * (1 - i):',
      options: [
        '-1 + i',
        '5 + i',
        '5 - i',
        '2 - 3i'
      ],
      correctIndex: 1,
      explanation: '(2*1 - 3*(-1)) + (2*(-1) + 3*1)i = (2 + 3) + (-2 + 3)i = 5 + i.'
    },
    summary: 'A complex number z = a + bi combines real and imaginary coordinates governed by i^2 = -1.',
    keyEquations: ['i = \\sqrt{-1}', 'i^2 = -1', 'z = a + bi'],
    videoIds: ['vid-complex-intro'],
    references: ['Needham, T. (1997). Visual Complex Analysis.']
  },
  {
    id: '1.3',
    title: 'Complex Plane',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.2'],
    objectives: [
      'Plot complex numbers on the Argand plane (Real axis vs Imaginary axis)',
      'Interpret complex addition as 2D vector addition',
      'Connect complex coordinates to quantum phase rotations'
    ],
    intuition: 'Just as real numbers can be visualized along a 1-dimensional horizontal number line, complex numbers inhabit a 2-dimensional plane called the Argand plane. The horizontal axis is the Real axis (Re), and the vertical axis is the Imaginary axis (Im). The number z = 3 + 4i is simply the point (3, 4) in this plane.',
    sections: [
      {
        heading: 'Geometry of the Argand Plane',
        content: 'In the Argand plane, every complex number z = x + iy corresponds to a position vector from the origin (0, 0) to (x, y). Adding two complex numbers is geometrically identical to the parallelogram law of 2D vector addition.'
      },
      {
        heading: 'Multiplication by i as a 90° Counterclockwise Rotation',
        content: 'Take z = 1 (on the positive real axis). Multiply by i: 1 * i = i (on the positive imaginary axis, rotated +90°). Multiply by i again: i * i = -1 (on the negative real axis, rotated another 90°). Multiplying by i is an exact quarter-turn rotation in the complex plane!'
      }
    ],
    equations: [
      {
        label: 'Argand Coordinates',
        latex: 'z = x + iy \\longleftrightarrow (x, y) \\in \\mathbb{R}^2',
        explanation: 'The complex plane establishes an isomorphism between complex numbers and 2D Cartesian vectors.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Plot z = -2 + 2i and show what happens when you multiply it by i.',
      solution: 'z is at (-2, 2) in the second quadrant. Multiplying by i: i * (-2 + 2i) = -2i + 2(i^2) = -2 - 2i = (-2, -2). The vector rotated 90 degrees counterclockwise into the third quadrant.',
      derivationSteps: [
        'Initial point: (-2, 2). Angle = 135 degrees (3pi/4 rad).',
        'Multiply by i: -2i - 2 = -2 - 2i.',
        'New point: (-2, -2). Angle = 225 degrees (5pi/4 rad).',
        'Angle change: 225 - 135 = 90 degrees.'
      ]
    },
    commonMisconceptions: [
      'Do not confuse the 2D Argand plane with the 3D Bloch sphere. The Argand plane plots a single complex number (like alpha or beta), while the Bloch sphere visualizes a normalized 2-qubit statevector combining both amplitudes.'
    ],
    quickCheck: {
      question: 'Geometrically, what does multiplying any complex number by i do in the complex plane?',
      options: [
        'Reflects the point across the x-axis.',
        'Rotates the vector by 90 degrees counterclockwise around the origin.',
        'Doubles the length of the vector.',
        'Shrinks the vector to zero.'
      ],
      correctIndex: 1,
      explanation: 'Multiplying by i adds pi/2 (90 degrees) to the argument of the complex number without changing its magnitude.'
    },
    summary: 'The complex plane represents z = x + iy geometrically. Multiplication by i is a 90-degree counterclockwise rotation.',
    keyEquations: ['z = x + iy', 'i \\cdot (x + iy) = -y + ix'],
    videoIds: ['vid-argand-plane'],
    references: ['Visual Complex Analysis, Chapter 1']
  },
  {
    id: '1.4',
    title: 'Magnitude and Phase',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['1.3'],
    objectives: [
      'Calculate modulus / magnitude |z| = sqrt(a^2 + b^2)',
      'Calculate argument / phase theta = atan2(b, a)',
      'Convert between Cartesian form (a + bi) and Polar form (r*cis(theta))',
      'Why QC needs this: Magnitude gives measurement probability (|alpha|^2); phase gives quantum interference'
    ],
    intuition: 'Instead of describing a location by "walk x blocks east and y blocks north", you can describe it by "turn by angle theta and walk a straight-line distance r". The distance r is the magnitude |z|, and the direction angle theta is the phase. In quantum mechanics, magnitude determines the probability of measuring a state, while phase determines how it interferes with other states.',
    sections: [
      {
        heading: 'Modulus (Magnitude) |z|',
        content: 'By Pythagoras theorem, the distance from the origin to (a, b) is |z| = sqrt(a^2 + b^2). For any quantum amplitude alpha, |alpha|^2 = a^2 + b^2 represents the physical probability of measuring that state.'
      },
      {
        heading: 'Argument (Phase) theta',
        content: 'The angle theta formed with the positive real axis is theta = atan2(b, a). While an overall global phase e^(i*phi) cannot be detected by measurement, a relative phase difference between |0> and |1> drastically changes the state (e.g. |+> = (|0>+|1>)/sqrt(2) vs |-> = (|0>-|1>)/sqrt(2)).'
      }
    ],
    equations: [
      {
        label: 'Polar Representation',
        latex: 'z = r(\\cos\\theta + i\\sin\\theta), \\quad r = |z| = \\sqrt{a^2 + b^2}, \\quad \\theta = \\text{atan2}(b, a)',
        explanation: 'r is the modulus (amplitude magnitude) and theta is the phase angle.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the magnitude and phase of the quantum amplitude c = (1/2) + (sqrt(3)/2)i.',
      solution: 'Magnitude: |c| = sqrt((1/2)^2 + (sqrt(3)/2)^2) = sqrt(1/4 + 3/4) = sqrt(1) = 1. Phase: theta = atan((sqrt(3)/2)/(1/2)) = atan(sqrt(3)) = pi/3 radians (60 degrees). Polar: c = 1 * e^(i*pi/3).',
      derivationSteps: [
        'a = 1/2, b = sqrt(3)/2.',
        '|c|^2 = a^2 + b^2 = 1/4 + 3/4 = 1. |c| = 1.',
        'theta = atan(b/a) = atan(sqrt(3)) = pi/3 rad.',
        'Probability contribution: |c|^2 = 1 (pure normalized phase).'
      ]
    },
    commonMisconceptions: [
      'Two quantum states with the same measurement probabilities are NOT necessarily identical. The states |+> and |-> both have 50% probability of 0 and 50% probability of 1, but their relative phase of pi makes them orthogonal!'
    ],
    quickCheck: {
      question: 'What is the magnitude |z| of the complex number z = 3 - 4i?',
      options: [
        '7',
        '5',
        '1',
        '-1'
      ],
      correctIndex: 1,
      explanation: '|z| = sqrt(3^2 + (-4)^2) = sqrt(9 + 16) = sqrt(25) = 5.'
    },
    summary: 'Every complex number can be expressed in polar form with magnitude r = |z| and phase theta. Magnitude determines probability; phase drives interference.',
    keyEquations: ['|z| = \\sqrt{a^2 + b^2}', 'z = r e^{i\\theta}'],
    videoIds: ['vid-magnitude-phase'],
    references: ['Visual Complex Analysis, Chapter 1']
  },
  {
    id: '1.5',
    title: 'Euler\'s Formula',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['1.4'],
    objectives: [
      'State and prove Euler\'s formula: e^(i*theta) = cos(theta) + i*sin(theta)',
      'Understand Taylor series expansion of e^x, cos(x), and sin(x)',
      'Connect complex exponentials to unitary rotation operators in quantum circuits'
    ],
    intuition: 'Euler\'s formula is considered one of the most beautiful formulas in all of mathematics. It bridges trigonometry (sine and cosine) with exponential growth (e). In quantum computing, e^(i*theta) is the universal mathematical engine that rotates qubits continuously on the Bloch sphere.',
    sections: [
      {
        heading: 'The Power Series Derivation',
        content: 'Recall Taylor series: e^x = 1 + x + x^2/2! + x^3/3! + ... Substituting x = i*theta and grouping real and imaginary terms using i^2 = -1, i^3 = -i, i^4 = 1 yields exactly cos(theta) + i*sin(theta).'
      },
      {
        heading: 'Unit Circle in Quantum Mechanics',
        content: 'Because |cos(theta) + i*sin(theta)|^2 = cos^2(theta) + sin^2(theta) = 1, e^(i*theta) always lies on the unit circle in the complex plane. Multiplying a quantum state by e^(i*theta) changes its phase while preserving its probability norm perfectly.'
      }
    ],
    equations: [
      {
        label: 'Euler\'s Formula',
        latex: 'e^{i\\theta} = \\cos(\\theta) + i\\sin(\\theta)',
        explanation: 'Relates complex exponentiation to circular rotation in the complex plane.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Evaluate e^(i*pi/2) and e^(i*pi) using Euler\'s formula.',
      solution: 'For theta = pi/2: e^(i*pi/2) = cos(pi/2) + i*sin(pi/2) = 0 + i(1) = i. For theta = pi: e^(i*pi) = cos(pi) + i*sin(pi) = -1 + i(0) = -1.',
      derivationSteps: [
        'theta = pi/2: cos(pi/2)=0, sin(pi/2)=1 -> e^{i*pi/2} = i.',
        'theta = pi: cos(pi)=-1, sin(pi)=0 -> e^{i*pi} = -1.',
        'theta = 2*pi: cos(2pi)=1, sin(2pi)=0 -> e^{i*2pi} = 1.'
      ]
    },
    commonMisconceptions: [
      'e^(i*theta) does not represent explosive exponential growth; the imaginary exponent turns growth into pure spatial rotation around the origin.'
    ],
    quickCheck: {
      question: 'What is the exact value of e^(i * pi / 2)?',
      options: [
        '1',
        '-1',
        'i',
        '-i'
      ],
      correctIndex: 2,
      explanation: 'cos(pi/2) + i*sin(pi/2) = 0 + i*1 = i.'
    },
    summary: 'Euler\'s formula e^(i*theta) = cos(theta) + i*sin(theta) describes pure phase rotations on the complex unit circle.',
    keyEquations: ['e^{i\\theta} = \\cos\\theta + i\\sin\\theta', '|e^{i\\theta}| = 1'],
    videoIds: ['vid-eulers-formula-3b1b'],
    references: ['Feynman Lectures on Physics, Vol 1, Chapter 22: Algebra.']
  },
  {
    id: '1.6',
    title: 'Euler\'s Identity',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['1.5'],
    objectives: [
      'Derive Euler\'s Identity: e^(i*pi) + 1 = 0',
      'Recognize how the five fundamental constants of mathematics unite',
      'Understand pi phase flips in quantum Pauli-Z and phase gates'
    ],
    intuition: 'Setting theta = pi in Euler\'s formula connects the five most important constants in mathematics: e (base of natural logarithms), i (imaginary unit), pi (geometry of circles), 1 (multiplicative identity), and 0 (additive identity). In quantum computing, an e^(i*pi) factor is a phase flip of -1, which is the exact operation of the Pauli-Z gate: Z|1> = -|1> = e^(i*pi)|1>.',
    sections: [
      {
        heading: 'The Derivation',
        content: 'From e^(i*theta) = cos(theta) + i*sin(theta), set theta = pi. Since cos(pi) = -1 and sin(pi) = 0, we have e^(i*pi) = -1. Adding 1 to both sides yields e^(i*pi) + 1 = 0.'
      },
      {
        heading: 'Quantum Phase Flip Operator',
        content: 'The Pauli-Z gate acts as Z = [1 0; 0 -1]. Notice the bottom right entry is -1 = e^(i*pi). The Z gate rotates the qubit phase by exactly pi radians around the Z-axis of the Bloch sphere.'
      }
    ],
    equations: [
      {
        label: 'Euler\'s Identity',
        latex: 'e^{i\\pi} + 1 = 0 \\iff e^{i\\pi} = -1',
        explanation: 'A half-turn rotation (pi radians = 180 degrees) sends +1 to -1.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Apply a phase shift of pi to the state |psi> = (1/sqrt(2))|0> + (1/sqrt(2))|1> on the |1> component.',
      solution: '|psi\' > = (1/sqrt(2))|0> + (1/sqrt(2)) * e^(i*pi)|1> = (1/sqrt(2))|0> - (1/sqrt(2))|1>. This transforms the |+> state into the |-> state!',
      derivationSteps: [
        'Initial state: |+> = (|0> + |1>)/sqrt(2).',
        'Phase shift on |1>: multiply amplitude by e^{i*pi} = -1.',
        'Final state: (|0> - |1>)/sqrt(2) = |->.',
        'Conclusion: A pi phase shift converts |+> into |->.'
      ]
    },
    commonMisconceptions: [
      'A global phase of -1 on the entire state -|psi> is unobservable, but a relative phase of -1 on only one basis state completely changes the quantum state and measurement outcomes in the X basis.'
    ],
    quickCheck: {
      question: 'What is e^(i * pi) equal to?',
      options: [
        '0',
        '1',
        '-1',
        'i'
      ],
      correctIndex: 2,
      explanation: 'e^(i*pi) = cos(pi) + i*sin(pi) = -1 + 0 = -1.'
    },
    summary: 'Euler\'s identity e^(i*pi) + 1 = 0 shows that a pi phase rotation represents multiplication by -1, the engine behind the quantum phase flip.',
    keyEquations: ['e^{i\\pi} + 1 = 0', 'Z|1\\rangle = e^{i\\pi}|1\\rangle = -|1\\rangle'],
    videoIds: ['vid-eulers-identity'],
    references: ['Dunham, W. (1999). Euler: The Master of Us All.']
  },
  {
    id: '1.7',
    title: 'Complex Conjugates',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Complex Numbers & Geometry',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.2', '1.4'],
    objectives: [
      'Define the complex conjugate z* = a - bi',
      'Show that z * z* = |z|^2 (a non-negative real number)',
      'Why QC needs this: The inner product <psi|phi> and Born rule probability |alpha|^2 = alpha* * alpha require complex conjugation'
    ],
    intuition: 'If you look at the complex plane, the complex conjugate z* is simply the reflection of z across the horizontal real axis: the imaginary part flips sign. Multiplying any complex number by its conjugate produces a guaranteed positive real number equal to the square of its distance from the origin.',
    sections: [
      {
        heading: 'Definition and Properties',
        content: 'For z = a + bi, the conjugate is z* = a - bi (often written as \\bar{z}). Key properties:\n1. (z1 + z2)* = z1* + z2*\n2. (z1 * z2)* = z1* * z2*\n3. z * z* = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 + b^2 = |z|^2.'
      },
      {
        heading: 'Why We Need Conjugates in Quantum Computing',
        content: 'When Dirac defined the bra vector <psi| as the Hermitian adjoint of ket |psi>, every complex amplitude in the column vector is conjugated. This ensures that the inner product of a state with itself, <psi|psi>, is strictly a positive real number equal to 1 (normalization).'
      }
    ],
    equations: [
      {
        label: 'Modulus Squared via Conjugation',
        latex: 'z^* = a - bi, \\quad z \\cdot z^* = |z|^2 = a^2 + b^2 \\ge 0',
        explanation: 'Multiplying a complex number by its conjugate always yields the real, non-negative square of its magnitude.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'For the quantum amplitude alpha = (1/2) - (sqrt(3)/2)i, calculate alpha* and verify that alpha * alpha* = 1.',
      solution: 'alpha* = (1/2) + (sqrt(3)/2)i. alpha * alpha* = (1/2)^2 + (sqrt(3)/2)^2 = 1/4 + 3/4 = 1.',
      derivationSteps: [
        'alpha = 1/2 - i*sqrt(3)/2.',
        'Flip sign of imaginary part: alpha* = 1/2 + i*sqrt(3)/2.',
        'Multiply: (1/2)^2 - (i*sqrt(3)/2)^2 = 1/4 - (-3/4) = 1/4 + 3/4 = 1.',
        'Confirmed: Real probability is 1.0.'
      ]
    },
    commonMisconceptions: [
      'Complex conjugation does NOT flip the sign of the real part. (3 - 4i)* is 3 + 4i, NOT -3 + 4i.'
    ],
    quickCheck: {
      question: 'What is the complex conjugate of z = -4 + 5i?',
      options: [
        '4 - 5i',
        '-4 - 5i',
        '4 + 5i',
        '5 - 4i'
      ],
      correctIndex: 1,
      explanation: 'The real part remains unchanged (-4) and the imaginary part flips sign from +5i to -5i.'
    },
    summary: 'The complex conjugate z* = a - bi reflects z across the real axis, satisfying z * z* = |z|^2.',
    keyEquations: ['z^* = a - bi', 'z z^* = |z|^2', '\\langle\\psi|\\psi\\rangle = \\sum |c_i|^2 = 1'],
    videoIds: ['vid-complex-conjugates'],
    references: ['Visual Complex Analysis, Chapter 1']
  },
  {
    id: '1.8',
    title: 'Vectors',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Vectors, Inner Products & Norms',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.1'],
    objectives: [
      'Define vectors as elements of a linear vector space',
      'Distinguish column vectors (kets |v>) from row vectors (bras <v|)',
      'Why QC needs this: Every quantum state is a unit vector in a Hilbert space'
    ],
    intuition: 'In high school physics, you learned that a vector is an arrow with magnitude and direction (like velocity or force). In quantum computing and linear algebra, a vector is a generalized list of numbers that obey addition and scalar multiplication. A single qubit is represented by a 2-dimensional column vector.',
    sections: [
      {
        heading: 'Column Vectors and Dirac Ket Notation',
        content: 'We write a column vector v as [v1; v2]. Paul Dirac introduced the ket notation |v> to denote column vectors. For a single qubit, the computational basis states are |0> = [1; 0] and |1> = [0; 1].'
      },
      {
        heading: 'Linear Combinations',
        content: 'Given vectors |v1> and |v2>, any vector of the form c1|v1> + c2|v2> (where c1, c2 in C) is called a linear combination. Superposition is literally a linear combination of basis vectors!'
      }
    ],
    equations: [
      {
        label: 'Basis Vector Representation',
        latex: '|0\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\quad |1\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}, \\quad |\\psi\\rangle = \\begin{pmatrix} \\alpha \\\\ \\beta \\end{pmatrix} = \\alpha|0\\rangle + \\beta|1\\rangle',
        explanation: 'The statevector of a qubit is a 2x1 complex column vector.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Write the quantum state |+> = (1/sqrt(2))|0> + (1/sqrt(2))|1> as an explicit column vector.',
      solution: '|+> = (1/sqrt(2)) * [1; 0] + (1/sqrt(2)) * [0; 1] = [1/sqrt(2); 1/sqrt(2)].',
      derivationSteps: [
        'alpha = 1/sqrt(2), beta = 1/sqrt(2).',
        'Column vector: [alpha; beta] = [1/sqrt(2); 1/sqrt(2)].',
        'Factor out scalar: 1/sqrt(2) * [1; 1].'
      ]
    },
    commonMisconceptions: [
      'A vector in quantum computing does not point to a location in 3D physical room space; it points in an abstract state space (Hilbert space).'
    ],
    quickCheck: {
      question: 'In standard Dirac notation, what is the column vector representation of |0>?',
      options: [
        '[0; 1]',
        '[1; 0]',
        '[1; 1]',
        '[0; 0]'
      ],
      correctIndex: 1,
      explanation: '|0> corresponds to [1; 0], the first computational basis vector.'
    },
    summary: 'A quantum state is represented as a complex column vector |psi> in a vector space.',
    keyEquations: ['|0\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}', '|1\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}'],
    videoIds: ['vid-vectors-3b1b'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.9',
    title: 'Vector Addition',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Vectors, Inner Products & Norms',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.8'],
    objectives: [
      'Perform component-wise addition of vectors',
      'Understand scalar multiplication c|v>',
      'Connect vector addition to the principle of quantum superposition'
    ],
    intuition: 'Adding vectors simply means adding their corresponding entries. When two quantum states are added together, their amplitudes combine component by component. This linear addition is the exact mathematical definition of quantum superposition.',
    sections: [
      {
        heading: 'Component-Wise Addition',
        content: 'If |u> = [u1; u2] and |v> = [v1; v2], then |u> + |v> = [u1 + v1; u2 + v2]. Similarly, multiplying by a scalar c in C scales each component: c|v> = [c*v1; c*v2].'
      },
      {
        heading: 'Superposition as Linear Vector Addition',
        content: 'When an electron passes through two slits, its final state is the vector sum of passing through slit 1 and slit 2: |psi> = (1/sqrt(2))|slit1> + (1/sqrt(2))|slit2>.'
      }
    ],
    equations: [
      {
        label: 'Vector Addition and Scaling',
        latex: '\\begin{pmatrix} u_1 \\\\ u_2 \\end{pmatrix} + \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\end{pmatrix}, \\quad c\\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = \\begin{pmatrix} c v_1 \\\\ c v_2 \\end{pmatrix}',
        explanation: 'Linear vector spaces are closed under vector addition and scalar multiplication.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compute the state resulting from adding |+> = [1/sqrt(2); 1/sqrt(2)] and |-> = [1/sqrt(2); -1/sqrt(2)].',
      solution: '|+> + |-> = [1/sqrt(2) + 1/sqrt(2); 1/sqrt(2) - 1/sqrt(2)] = [2/sqrt(2); 0] = [sqrt(2); 0] = sqrt(2)|0>. Notice the |1> component completely canceled to 0!',
      derivationSteps: [
        'Component 0: 1/sqrt(2) + 1/sqrt(2) = 2/sqrt(2) = sqrt(2).',
        'Component 1: 1/sqrt(2) + (-1/sqrt(2)) = 0.',
        'Result: sqrt(2) * [1; 0] = sqrt(2)|0>.',
        'Normalizing by 1/sqrt(2) gives the pure state |0>.'
      ]
    },
    commonMisconceptions: [
      'Adding two normalized quantum statevectors does not automatically yield a normalized state. The resulting sum must be re-normalized by dividing by its new norm.'
    ],
    quickCheck: {
      question: 'What is the sum of [1; 3] and [-2; 1]?',
      options: [
        '[-1; 4]',
        '[3; 2]',
        '[-1; 2]',
        '[1; 4]'
      ],
      correctIndex: 0,
      explanation: '[1 + (-2); 3 + 1] = [-1; 4].'
    },
    summary: 'Vector addition and scalar multiplication combine quantum states component-wise, forming the mathematical basis of superposition.',
    keyEquations: ['|\\psi_1\\rangle + |\\psi_2\\rangle = \\begin{pmatrix} \\alpha_1 + \\alpha_2 \\\\ \\beta_1 + \\beta_2 \\end{pmatrix}'],
    videoIds: ['vid-vector-addition'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.10',
    title: 'Inner Product',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Vectors, Inner Products & Norms',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['1.7', '1.8'],
    objectives: [
      'Define the Hermitian inner product <u|v> = sum u_i* * v_i',
      'Understand orthogonality: <u|v> = 0 means states are mutually exclusive and distinguishable',
      'Why QC needs this: Quantum transition amplitudes and measurement probabilities are inner products |<phi|psi>|^2'
    ],
    intuition: 'In classical geometry, the dot product of two vectors measures how much they point in the same direction. In complex vector spaces, the inner product takes the complex conjugate of the first vector and multiplies it with the second. If <u|v> = 0, the two quantum states are orthogonal—meaning a measurement can distinguish them with 100% certainty.',
    sections: [
      {
        heading: 'The Bra-Ket Inner Product <u|v>',
        content: 'To take the inner product of |u> = [u1; u2] and |v> = [v1; v2], we convert |u> into the row vector bra <u| = [u1*, u2*]. The inner product is then <u|v> = u1* v1 + u2* v2.'
      },
      {
        heading: 'Orthogonality & Quantum Measurements',
        content: 'Two quantum states are orthogonal if <u|v> = 0. For example, <0|1> = [1, 0] * [0; 1] = 0. Orthogonal states represent mutually exclusive physical outcomes (like spin up vs spin down). Non-orthogonal states (<u|v> != 0) can NEVER be distinguished with 100% reliability by any physical experiment.'
      }
    ],
    equations: [
      {
        label: 'Hermitian Inner Product',
        latex: '\\langle u | v \\rangle = \\sum_{i} u_i^* v_i = \\begin{pmatrix} u_1^* & u_2^* & \\cdots \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\end{pmatrix}',
        explanation: 'Computes the projection of state |v> onto state |u> with complex conjugation.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compute the inner product <+|-> where |+> = [1/sqrt(2); 1/sqrt(2)] and |-> = [1/sqrt(2); -1/sqrt(2)]. Are they orthogonal?',
      solution: '<+| = [1/sqrt(2), 1/sqrt(2)]. <+|-> = (1/sqrt(2))*(1/sqrt(2)) + (1/sqrt(2))*(-1/sqrt(2)) = 1/2 - 1/2 = 0. Yes! |+> and |-> are completely orthogonal.',
      derivationSteps: [
        'Bra <+|: [1/sqrt(2), 1/sqrt(2)].',
        'Ket |->: [1/sqrt(2); -1/sqrt(2)].',
        '<+|-> = (1/sqrt(2))(1/sqrt(2)) + (1/sqrt(2))(-1/sqrt(2)).',
        '= 1/2 - 1/2 = 0.',
        'Conclusion: <+|-> = 0, so the states are perfectly distinguishable.'
      ]
    },
    commonMisconceptions: [
      'In physics, <u|v> is NOT equal to <v|u> in general. Instead, <u|v> = <v|u>*. Swapping the order conjugates the result!'
    ],
    quickCheck: {
      question: 'What does it mean physically when two quantum states satisfy <psi1|psi2> = 0?',
      options: [
        'They cannot exist in the same laboratory.',
        'They are orthogonal and can be distinguished with 100% certainty by measurement.',
        'Their quantum circuits cancel each other out.',
        'They have zero energy.'
      ],
      correctIndex: 1,
      explanation: 'Orthogonal quantum states represent mutually exclusive outcomes that can be discriminated without error.'
    },
    summary: 'The inner product <u|v> measures the overlap between quantum states. Orthogonal states have zero overlap and are perfectly distinguishable.',
    keyEquations: ['\\langle u | v \\rangle = \\sum u_i^* v_i', '\\langle u | v \\rangle = \\langle v | u \\rangle^*', '\\langle 0 | 1 \\rangle = 0'],
    videoIds: ['vid-inner-product'],
    references: ['Nielsen & Chuang, Section 2.1: Linear Algebra.']
  },
  {
    id: '1.11',
    title: 'Norm and Normalization',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Vectors, Inner Products & Norms',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.10'],
    objectives: [
      'Calculate the Euclidean / L2 norm ||v|| = sqrt(<v|v>)',
      'Normalize any non-zero statevector: |psi_norm> = |v> / ||v||',
      'Connect normalization to conservation of total probability = 100%'
    ],
    intuition: 'If you roll a die, the probability of rolling a 1, 2, 3, 4, 5, or 6 must sum to exactly 100% (1.0). In quantum computing, every physically valid statevector must have a length (norm) of exactly 1. If a statevector had length 0.8, the probabilities of all outcomes would sum to only 64%, which makes no physical sense.',
    sections: [
      {
        heading: 'Vector Norm Definition',
        content: 'The norm ||v|| of vector |v> is defined as ||v|| = sqrt(<v|v>). For a 2-component state [alpha; beta], ||v|| = sqrt(|alpha|^2 + |beta|^2).'
      },
      {
        heading: 'Normalization Condition',
        content: 'A statevector |psi> is normalized if and only if <psi|psi> = 1. If an unnormalized vector |v> is produced (for instance, after an unnormalized gate or projection), it is normalized by dividing by its norm: |psi> = |v> / ||v||.'
      }
    ],
    equations: [
      {
        label: 'Normalization Constraint',
        latex: '\\|\\psi\\| = \\sqrt{\\langle\\psi|\\psi\\rangle} = 1 \\iff \\sum_{i} |c_i|^2 = 1',
        explanation: 'Ensures that the sum of probabilities over all measurement basis states equals 1.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Normalize the statevector |v> = [3; 4i].',
      solution: '<v|v> = |3|^2 + |4i|^2 = 9 + 16 = 25. The norm is ||v|| = sqrt(25) = 5. The normalized state is |psi> = [3/5; 4i/5].',
      derivationSteps: [
        'v1 = 3, v2 = 4i.',
        '|v1|^2 = 9, |v2|^2 = |-4i|^2 = 16.',
        '<v|v> = 9 + 16 = 25.',
        '||v|| = sqrt(25) = 5.',
        '|psi> = (1/5) * [3; 4i] = [0.6; 0.8i].',
        'Verify: 0.6^2 + 0.8^2 = 0.36 + 0.64 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'Normalizing does not alter the relative superposition between components; it simply scales the vector so that total probability equals 1.'
    ],
    quickCheck: {
      question: 'What is the normalization factor N for the state |v> = |0> + |1>?',
      options: [
        '1',
        '2',
        '1 / sqrt(2)',
        '1 / 2'
      ],
      correctIndex: 2,
      explanation: '||v|| = sqrt(1^2 + 1^2) = sqrt(2). Dividing by ||v|| gives N = 1/sqrt(2).'
    },
    summary: 'A valid quantum state must have norm ||v|| = 1 so that total measurement probability equals 100%.',
    keyEquations: ['\\|v\\| = \\sqrt{\\langle v | v \\rangle}', '|\\psi\\rangle = \\frac{|v\\rangle}{\\|v\\|}'],
    videoIds: ['vid-norm-normalization'],
    references: ['Nielsen & Chuang, Chapter 2.']
  },
  {
    id: '1.12',
    title: 'Matrices',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.8'],
    objectives: [
      'Define m x n matrices as 2D arrays of numbers',
      'Distinguish square matrices (operators) from rectangular matrices',
      'Why QC needs this: Quantum logic gates and observables are square matrices'
    ],
    intuition: 'A vector represents a static state. A matrix represents an action, a transformation, or a physical machine. When a vector enters a matrix, the matrix rotates it, reflects it, or scales it into a new vector. In quantum computing, every single-qubit quantum gate (like Hadamard or Pauli-X) is a 2x2 matrix.',
    sections: [
      {
        heading: 'Matrix Structure',
        content: 'An m x n matrix has m rows and n columns. An entry A_{jk} denotes the element at row j and column k. When m = n, it is a square matrix. Single-qubit operations are 2x2 square matrices, two-qubit operations are 4x4, and n-qubit operations are 2^n x 2^n matrices.'
      },
      {
        heading: 'Why We Need Matrices in Quantum Computing',
        content: 'Quantum gates are linear transformations on statevectors. A quantum gate G acting on state |psi> produces |psi\' > = G|psi>. Linear algebra guarantees that if we know how a matrix transforms the basis states |0> and |1>, we know how it transforms ANY arbitrary superposition!'
      }
    ],
    equations: [
      {
        label: 'Single Qubit Matrix Operator',
        latex: 'U = \\begin{pmatrix} u_{00} & u_{01} \\\\ u_{10} & u_{11} \\end{pmatrix}, \\quad U|\\psi\\rangle = \\begin{pmatrix} u_{00}\\alpha + u_{01}\\beta \\\\ u_{10}\\alpha + u_{11}\\beta \\end{pmatrix}',
        explanation: 'A 2x2 matrix maps a 2D statevector to a new transformed 2D statevector.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Write down the matrix for the Pauli-X gate, which swaps |0> to |1> and |1> to |0>.',
      solution: 'X|0> = |1> means column 1 is [0; 1]. X|1> = |0> means column 2 is [1; 0]. Therefore X = [0 1; 1 0].',
      derivationSteps: [
        'Basis 1: X[1; 0] = [0; 1] -> first column is [0; 1].',
        'Basis 2: X[0; 1] = [1; 0] -> second column is [1; 0].',
        'Combine columns: X = [[0, 1], [1, 0]].'
      ]
    },
    commonMisconceptions: [
      'Matrices do not change the dimension of a qubit state. In quantum computing, gates are always square matrices (2^n x 2^n) because the input and output qubit registers have the same size.'
    ],
    quickCheck: {
      question: 'What is the dimension of a quantum gate acting on a 3-qubit register?',
      options: [
        '3 x 3',
        '6 x 6',
        '8 x 8 (2^3 x 2^3)',
        '9 x 9'
      ],
      correctIndex: 2,
      explanation: 'An n-qubit register has 2^n basis states, so its gate operators are 2^n x 2^n = 8 x 8 matrices.'
    },
    summary: 'Matrices represent quantum gates and physical transformations on statevectors.',
    keyEquations: ['U = \\begin{pmatrix} u_{00} & u_{01} \\\\ u_{10} & u_{11} \\end{pmatrix}'],
    videoIds: ['vid-matrices-intro'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.13',
    title: 'Matrix Addition',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['1.12'],
    objectives: [
      'Add matrices of identical dimensions entry by entry',
      'Perform scalar multiplication on matrices cA',
      'Understand Hamiltonians as linear sums of Pauli matrices: H = sum c_i sigma_i'
    ],
    intuition: 'Just like vector addition, matrix addition simply adds corresponding entries. In quantum mechanics, physical energy operators (Hamiltonians) are expressed as linear combinations of simpler matrices, like H = a*X + b*Z.',
    sections: [
      {
        heading: 'Component-Wise Addition',
        content: '(A + B)_{jk} = A_{jk} + B_{jk}. Matrices must have identical dimensions to be added.'
      },
      {
        heading: 'Hamiltonians as Sums of Matrices',
        content: 'In quantum simulation and VQE, molecular electronic Hamiltonians are decomposed into weighted sums of Pauli matrices: H = c0*I + c1*Z0 + c2*Z1 + c3*X0*X1.'
      }
    ],
    equations: [
      {
        label: 'Matrix Addition and Scaling',
        latex: '\\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix} + \\begin{pmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{pmatrix} = \\begin{pmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21}+b_{21} & a_{22}+b_{22} \\end{pmatrix}',
        explanation: 'Addition occurs independently at each matrix coordinate.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compute the sum of Pauli-Z = [1 0; 0 -1] and Identity I = [1 0; 0 1], and divide by 2.',
      solution: '(I + Z)/2 = ([1 0; 0 1] + [1 0; 0 -1]) / 2 = [2 0; 0 0] / 2 = [1 0; 0 0]. This is the projector |0><0| onto the |0> state!',
      derivationSteps: [
        'Top-left: (1 + 1)/2 = 2/2 = 1.',
        'Top-right: (0 + 0)/2 = 0.',
        'Bottom-left: (0 + 0)/2 = 0.',
        'Bottom-right: (1 + (-1))/2 = 0/2 = 0.',
        'Result: Projector P0 = |0><0|.'
      ]
    },
    commonMisconceptions: [
      'You cannot add a 2x2 matrix to a 2D vector or a scalar. In physics, an expression like H + c implicitly means H + c*I.'
    ],
    quickCheck: {
      question: 'What is the sum of [0 1; 1 0] and [0 -i; i 0]?',
      options: [
        '[0 1-i; 1+i 0]',
        '[0 1+i; 1-i 0]',
        '[1 0; 0 1]',
        '[0 0; 0 0]'
      ],
      correctIndex: 0,
      explanation: 'Sum entry by entry: (0+0)=0, (1+(-i))=1-i, (1+i)=1+i, (0+0)=0.'
    },
    summary: 'Matrix addition adds entries component by component, used to form quantum Hamiltonians and projectors.',
    keyEquations: ['P_0 = \\frac{I + Z}{2} = |0\\rangle\\langle 0|'],
    videoIds: ['vid-matrix-addition'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.14',
    title: 'Matrix Multiplication',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '30 mins',
    difficulty: 'beginner',
    prerequisites: ['1.12', '1.10'],
    objectives: [
      'Perform matrix multiplication using row-by-column inner products',
      'Understand non-commutativity: AB != BA in general',
      'Why QC needs this: Composing quantum gates in sequence is matrix multiplication'
    ],
    intuition: 'Matrix multiplication is NOT multiplying corresponding entries. Instead, the entries of row i in the first matrix take the inner product with the entries of column j in the second matrix. In quantum computing, applying gate A followed by gate B corresponds to multiplying the matrices: B * A.',
    sections: [
      {
        heading: 'Row-by-Column Rule',
        content: 'If A is m x k and B is k x n, the product C = AB is m x n, where C_{ij} = sum_{p=1}^k A_{ip} B_{pj}. Notice that the inner dimensions must match.'
      },
      {
        heading: 'Order Matters: Non-Commutativity (AB != BA)',
        content: 'Matrix multiplication is generally non-commutative: AB != BA. In quantum circuits, applying an X gate then a Z gate produces Z*X = [0 -1; 1 0]. Applying Z then X produces X*Z = [0 1; -1 0] = -(Z*X). The order in which gates appear on the circuit wire directly dictates computational execution!'
      }
    ],
    equations: [
      {
        label: 'Matrix Multiplication Definition',
        latex: '(AB)_{ij} = \\sum_{k} A_{ik} B_{kj}',
        explanation: 'Each output element is the dot product of a row from A with a column from B.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Multiply Pauli-X = [0 1; 1 0] by Pauli-Z = [1 0; 0 -1]. Compare with Z * X.',
      solution: 'X*Z = [0*(1)+1*(0), 0*(0)+1*(-1); 1*(1)+0*(0), 1*(0)+0*(-1)] = [0 -1; 1 0]. Meanwhile, Z*X = [0 1; -1 0]. Notice XZ = -ZX (they anti-commute)!',
      derivationSteps: [
        'Row 1 of X with Col 1 of Z: 0*1 + 1*0 = 0.',
        'Row 1 of X with Col 2 of Z: 0*0 + 1*(-1) = -1.',
        'Row 2 of X with Col 1 of Z: 1*1 + 0*0 = 1.',
        'Row 2 of X with Col 2 of Z: 1*0 + 0*(-1) = 0.',
        'Result XZ = [0 -1; 1 0] = -i*Y.'
      ]
    },
    commonMisconceptions: [
      'Circuit order reads LEFT-TO-RIGHT, but matrix multiplication reads RIGHT-TO-LEFT. If gate G1 is followed by gate G2, the combined operator is G2 * G1 (applied to |psi> as G2 * G1 * |psi>).'
    ],
    quickCheck: {
      question: 'If a circuit applies a Hadamard gate H first, and then a Pauli-Z gate second to state |psi>, how is the combined operation written mathematically?',
      options: [
        'H * Z * |psi>',
        'Z * H * |psi>',
        '(H + Z) * |psi>',
        '|psi> * Z * H'
      ],
      correctIndex: 1,
      explanation: 'Operators act from right to left: Z * (H * |psi>) = (Z * H) * |psi>.'
    },
    summary: 'Matrix multiplication models consecutive quantum gate applications and is generally non-commutative.',
    keyEquations: ['(AB)_{ij} = \\sum_k A_{ik}B_{kj}', 'AB \\ne BA', 'ZX = -XZ = iY'],
    videoIds: ['vid-matrix-multiplication-3b1b'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.15',
    title: 'Identity Matrix',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['1.14'],
    objectives: [
      'Define the identity matrix I with 1s on the main diagonal and 0s elsewhere',
      'Show that IA = AI = A and I|v> = |v>',
      'Why QC needs this: The Identity gate (ID / I) represents an idle qubit wire or quantum buffer'
    ],
    intuition: 'In ordinary numbers, multiplying by 1 changes nothing: 7 * 1 = 7. The identity matrix I is the matrix equivalent of the number 1. Multiplying any vector or matrix by I leaves it completely untouched. In a quantum circuit, an idle wire where no gate acts is mathematically represented by the Identity gate.',
    sections: [
      {
        heading: 'Structure of Identity I',
        content: 'For a single qubit, I = [1 0; 0 1]. For two qubits, I_4 = [1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0 1]. In Dirac notation, I = |0><0| + |1><1| (the completeness relation).'
      },
      {
        heading: 'Completeness Relation (Resolution of Identity)',
        content: 'Any orthonormal basis {|i>} satisfies sum |i><i| = I. Inserting the identity into equations is one of the most powerful proof techniques in quantum mechanics.'
      }
    ],
    equations: [
      {
        label: 'Resolution of Identity',
        latex: 'I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = |0\\rangle\\langle 0| + |1\\rangle\\langle 1|',
        explanation: 'Sums projectors over all orthonormal basis vectors to recreate the identity operator.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Verify that I = |0><0| + |1><1| equals the 2x2 identity matrix.',
      solution: '|0><0| = [1; 0] * [1, 0] = [1 0; 0 0]. |1><1| = [0; 1] * [0, 1] = [0 0; 0 1]. Adding them: [1 0; 0 0] + [0 0; 0 1] = [1 0; 0 1] = I.',
      derivationSteps: [
        'Outer product 1: |0><0| = [[1*1, 1*0], [0*1, 0*0]] = [[1, 0], [0, 0]].',
        'Outer product 2: |1><1| = [[0*0, 0*1], [1*0, 1*1]] = [[0, 0], [0, 1]].',
        'Sum: [[1+0, 0+0], [0+0, 0+1]] = [[1, 0], [0, 1]] = I.'
      ]
    },
    commonMisconceptions: [
      'The Identity gate is not useless; in physical quantum processors, an Identity gate calibrates idle qubit decoherence and dynamical decoupling pulses (XY4, CPMG).'
    ],
    quickCheck: {
      question: 'What is the outer product expansion of the 2D identity operator?',
      options: [
        '|0><1| + |1><0|',
        '|0><0| + |1><1|',
        '|0><0| - |1><1|',
        '|0><1| * |1><0|'
      ],
      correctIndex: 1,
      explanation: 'I = sum |i><i| = |0><0| + |1><1|, known as the resolution of identity.'
    },
    summary: 'The identity matrix I leaves states invariant and corresponds to the completeness relation I = sum |i><i|.',
    keyEquations: ['I = \\sum_{i} |i\\rangle\\langle i|', 'I |\\psi\\rangle = |\\psi\\rangle'],
    videoIds: ['vid-identity-matrix'],
    references: ['Nielsen & Chuang, Section 2.1.']
  },
  {
    id: '1.16',
    title: 'Inverse Matrix',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.14', '1.15'],
    objectives: [
      'Define matrix inverse A^(-1) such that A * A^(-1) = A^(-1) * A = I',
      'Understand invertibility and non-singular matrices (det(A) != 0)',
      'Why QC needs this: All quantum gates must be reversible, so every gate has a unique inverse'
    ],
    intuition: 'If an operation does something, its inverse undoes it. If you walk 3 steps forward, the inverse is walking 3 steps backward. In classical computing, many gates cannot be inverted (e.g. an AND gate outputting 0 cannot tell you what the inputs were). But in quantum computing, every gate is strictly invertible: you can run any quantum algorithm backward in time!',
    sections: [
      {
        heading: 'Definition of Invertibility',
        content: 'A square matrix A is invertible (non-singular) if there exists a matrix A^(-1) such that A A^(-1) = A^(-1) A = I.'
      },
      {
        heading: 'Reversibility of Quantum Computation',
        content: 'Because quantum state evolution is unitary (U^dagger U = I), the inverse of any quantum gate U is simply its conjugate transpose: U^(-1) = U^dagger. Computing the inverse of a quantum circuit is trivial: reverse the order of gates and take the dagger of each!'
      }
    ],
    equations: [
      {
        label: 'Invertibility and Unitary Inverses',
        latex: 'A A^{-1} = I, \\quad U^{-1} = U^\\dagger \\iff U^\\dagger U = I',
        explanation: 'For unitary quantum gates, the inverse is directly equal to the conjugate transpose.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the inverse of the Hadamard gate H = (1/sqrt(2)) [1 1; 1 -1].',
      solution: 'Multiply H by H: H^2 = (1/2) [1*1+1*1, 1*1+1*(-1); 1*1+(-1)*1, 1*1+(-1)*(-1)] = (1/2) [2 0; 0 2] = [1 0; 0 1] = I. Thus H^(-1) = H! The Hadamard gate is its own inverse (self-inverse).',
      derivationSteps: [
        'H = (1/sqrt(2)) * [[1, 1], [1, -1]].',
        'H * H = (1/2) * [[2, 0], [0, 2]] = [[1, 0], [0, 1]] = I.',
        'Conclusion: H = H^{-1} = H^dagger (Hermitian and unitary).'
      ]
    },
    commonMisconceptions: [
      'Not all matrices are invertible. If det(A) = 0, the matrix collapses dimensions and cannot be undone (which is why measurement is not a unitary gate).'
    ],
    quickCheck: {
      question: 'If a quantum circuit applies gates G1 then G2 then G3, what sequence of gates exactly undoes this operation?',
      options: [
        'G1^dagger * G2^dagger * G3^dagger',
        'G3^dagger * G2^dagger * G1^dagger',
        'G1 * G2 * G3',
        '-(G1 + G2 + G3)'
      ],
      correctIndex: 1,
      explanation: '(G3 * G2 * G1)^(-1) = G1^(-1) * G2^(-1) * G3^(-1) = G1^dagger * G2^dagger * G3^dagger, so you apply G3^dagger first, then G2^dagger, then G1^dagger.'
    },
    summary: 'Every quantum gate has an inverse equal to its conjugate transpose (U^(-1) = U^dagger), ensuring physical reversibility.',
    keyEquations: ['U^{-1} = U^\\dagger', '(AB)^{-1} = B^{-1} A^{-1}'],
    videoIds: ['vid-matrix-inverse'],
    references: ['Nielsen & Chuang, Chapter 2.']
  },
  {
    id: '1.17',
    title: 'Transpose',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['1.12'],
    objectives: [
      'Define the matrix transpose A^T by swapping rows and columns (A^T)_{jk} = A_{kj}',
      'Understand symmetric matrices where A^T = A',
      'Show that (AB)^T = B^T A^T'
    ],
    intuition: 'Taking the transpose of a matrix is like flipping it over its main diagonal: rows become columns, and columns become rows. The top-right elements trade places with the bottom-left elements.',
    sections: [
      {
        heading: 'Transpose Definition',
        content: 'If A is an m x n matrix, its transpose A^T is an n x m matrix where (A^T)_{jk} = A_{kj}. For a column vector |v> = [v1; v2], its transpose is the row vector [v1, v2].'
      },
      {
        heading: 'Symmetric Matrices',
        content: 'A matrix is symmetric if A^T = A. Many quantum gates with purely real entries (like Pauli-X, Pauli-Z, and Hadamard) are symmetric: X^T = X, Z^T = Z, H^T = H.'
      }
    ],
    equations: [
      {
        label: 'Matrix Transpose Property',
        latex: '(A^T)_{ij} = A_{ji}, \\quad (AB)^T = B^T A^T',
        explanation: 'Transposing swaps index coordinates and reverses the multiplication order of products.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the transpose of A = [1 2; 3 4] and Pauli-Y = [0 -i; i 0].',
      solution: 'A^T = [1 3; 2 4]. For Pauli-Y: Y^T = [0 i; -i 0] = -Y (Pauli-Y is anti-symmetric under transpose!).',
      derivationSteps: [
        'A: Row 1 [1, 2] becomes Col 1. Row 2 [3, 4] becomes Col 2. A^T = [[1, 3], [2, 4]].',
        'Y: Row 1 [0, -i] becomes Col 1. Row 2 [i, 0] becomes Col 2. Y^T = [[0, i], [-i, 0]] = -Y.'
      ]
    },
    commonMisconceptions: [
      'The transpose alone does NOT take complex conjugates. Transpose only swaps row/column positions.'
    ],
    quickCheck: {
      question: 'What is the transpose of the row vector [1, 2, 3]?',
      options: [
        '[1, 2, 3]',
        '[3, 2, 1]',
        'The column vector [1; 2; 3]',
        '[-1, -2, -3]'
      ],
      correctIndex: 2,
      explanation: 'Transposing a 1x3 row vector produces a 3x1 column vector.'
    },
    summary: 'The transpose A^T swaps rows and columns, satisfying (AB)^T = B^T A^T.',
    keyEquations: ['(A^T)_{ij} = A_{ji}', '(AB)^T = B^T A^T'],
    videoIds: ['vid-matrix-transpose'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.18',
    title: 'Conjugate Transpose / Hermitian Adjoint',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.7', '1.17'],
    objectives: [
      'Define the Hermitian adjoint / conjugate transpose: A^dagger = (A*)^T = (A^T)*',
      'Define Hermitian matrices: A^dagger = A (observables)',
      'Define Unitary matrices: U^dagger U = I (quantum gates)',
      'Why QC needs this: This is arguably the most important operator definition in quantum physics'
    ],
    intuition: 'If complex numbers require conjugation (flipping imaginary signs) and vectors require transposition (flipping rows to columns), combining both gives the "Hermitian adjoint", symbolized by the dagger symbol (^dagger). In quantum mechanics, physical measurements are Hermitian matrices (A = A^dagger) and quantum gates are Unitary matrices (U^dagger U = I).',
    sections: [
      {
        heading: 'Definition of the Dagger (^dagger)',
        content: 'For any matrix A, A^dagger is obtained by taking the transpose AND conjugating every entry: (A^dagger)_{jk} = (A_{kj})*. For a ket |v>, |v>^dagger = <v| (a bra).'
      },
      {
        heading: 'Hermitian Operators (Observables)',
        content: 'A matrix A is Hermitian if A^dagger = A. The spectral theorem proves that every Hermitian matrix has strictly REAL eigenvalues! Because measurement outcomes in laboratory experiments must be real numbers (not complex), all physical observables (energy, momentum, spin) MUST be Hermitian.'
      },
      {
        heading: 'Unitary Operators (Quantum Gates)',
        content: 'A matrix U is Unitary if U^dagger U = U U^dagger = I. Unitary matrices preserve the inner product and the norm of statevectors: ||U|psi>|| = |||psi>|| = 1. Quantum gates must be unitary so that total probability remains 100% at every step.'
      }
    ],
    equations: [
      {
        label: 'Hermitian and Unitary Definitions',
        latex: 'A^\\dagger = (A^*)^T, \\quad A = A^\\dagger \\text{ (Hermitian)}, \\quad U^\\dagger U = I \\text{ (Unitary)}',
        explanation: 'Hermitian matrices have real eigenvalues (measurements); Unitary matrices preserve probability norms (gates).'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the conjugate transpose of Pauli-Y = [0 -i; i 0]. Is it Hermitian? Is it Unitary?',
      solution: 'Step 1: Transpose Y -> [0 i; -i 0]. Step 2: Conjugate entries -> [0 -i; i 0] = Y! Since Y^dagger = Y, it is Hermitian. Multiply Y^dagger * Y = Y * Y = [(-i)(i) 0; 0 (i)(-i)] = [1 0; 0 1] = I. Since Y^dagger Y = I, it is ALSO Unitary! Pauli matrices are both Hermitian and Unitary.',
      derivationSteps: [
        'Y = [[0, -i], [i, 0]].',
        'Transpose: [[0, i], [-i, 0]].',
        'Conjugate: [[0, (-i)*], [i*, 0]] = [[0, -i], [i, 0]] = Y.',
        'Y^dagger = Y -> Hermitian.',
        'Y^2 = I -> Unitary.'
      ]
    },
    commonMisconceptions: [
      'Do not confuse Hermitian with Unitary. A Hermitian matrix satisfies H^dagger = H (real eigenvalues). A Unitary matrix satisfies U^dagger = U^(-1) (preserves lengths). Some matrices (like Pauli gates) happen to be both!'
    ],
    quickCheck: {
      question: 'Why must quantum logic gates be represented by UNITARY matrices?',
      options: [
        'Because unitary matrices are cheap to fabricate in silicon.',
        'Because unitary transformations preserve inner products and ensure total probability remains 1.',
        'Because unitary matrices have zero determinant.',
        'Because unitary matrices only have real numbers.'
      ],
      correctIndex: 1,
      explanation: 'U^dagger U = I guarantees that <U psi|U psi> = <psi|U^dagger U|psi> = <psi|psi> = 1, conserving probability.'
    },
    summary: 'The conjugate transpose A^dagger defines Hermitian matrices (A^dagger = A, real eigenvalues) and Unitary matrices (U^dagger U = I, quantum gates).',
    keyEquations: ['A^\\dagger = (A^*)^T', 'A = A^\\dagger \\implies \\lambda_i \\in \\mathbb{R}', 'U^\\dagger U = I'],
    videoIds: ['vid-hermitian-adjoint'],
    references: ['Nielsen & Chuang, Section 2.1.4: Adjoints and Hermitian Operators.']
  },
  {
    id: '1.19',
    title: 'Determinants',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.14'],
    objectives: [
      'Calculate the determinant of a 2x2 matrix: det(A) = ad - bc',
      'Understand geometric meaning: signed area/volume scaling factor',
      'Show that for any unitary quantum gate U, |det(U)| = 1'
    ],
    intuition: 'The determinant measures how much a matrix stretches or squashes area. If det(A) = 2, the transformation doubles areas. If det(A) = 0, the matrix squashes a 2D plane into a 1D flat line, destroying information forever. Because quantum gates must preserve total probability without squashing or expanding space, all unitary gates have a determinant with absolute value equal to exactly 1 (|det(U)| = 1).',
    sections: [
      {
        heading: 'The 2x2 Formula',
        content: 'For A = [a b; c d], det(A) = ad - bc. A matrix is invertible if and only if det(A) != 0.'
      },
      {
        heading: 'Determinants of Quantum Gates',
        content: 'For any unitary operator U, U^dagger U = I. Taking determinants of both sides: det(U^dagger) det(U) = det(I) = 1. Since det(U^dagger) = det(U)*, we have |det(U)|^2 = 1, which implies |det(U)| = 1. Unitary gates are pure rotations that never change total probability volume.'
      }
    ],
    equations: [
      {
        label: 'Determinant Formula and Unitary Property',
        latex: '\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc, \\quad |\\det(U)| = 1',
        explanation: 'Unitary quantum gates preserve state space volume with unit modulus determinant.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the determinant of the Hadamard gate H = (1/sqrt(2)) [1 1; 1 -1].',
      solution: 'Notice the scalar 1/sqrt(2) factors out as (1/sqrt(2))^2 = 1/2 for a 2x2 matrix. det(H) = (1/2) * (1*(-1) - 1*1) = (1/2) * (-1 - 1) = (1/2) * (-2) = -1. Notice |-1| = 1!',
      derivationSteps: [
        'det(c*A) = c^n * det(A) for n=2 -> (1/sqrt(2))^2 = 1/2.',
        'Core matrix: 1*(-1) - 1*1 = -2.',
        'det(H) = (1/2) * (-2) = -1.',
        'Modulus: |-1| = 1. Unitary determinant property verified.'
      ]
    },
    commonMisconceptions: [
      'Remember that det(c*A) = c^n * det(A), NOT c * det(A). For 2x2, multiplying a matrix by 2 multiplies its determinant by 4!'
    ],
    quickCheck: {
      question: 'What is the determinant of Pauli-X = [0 1; 1 0]?',
      options: [
        '1',
        '-1',
        '0',
        'i'
      ],
      correctIndex: 1,
      explanation: 'det(X) = (0*0) - (1*1) = -1.'
    },
    summary: 'The determinant measures geometric volume scaling. For all quantum gates, |det(U)| = 1.',
    keyEquations: ['\\det(A) = ad - bc', '|\\det(U)| = 1'],
    videoIds: ['vid-determinant-3b1b'],
    references: ['Strang, G., Linear Algebra and Its Applications.']
  },
  {
    id: '1.20',
    title: 'Eigenvalues',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.14', '1.19'],
    objectives: [
      'Define the eigenvalue equation: A|v> = lambda|v>',
      'Solve the characteristic polynomial: det(A - lambda*I) = 0',
      'Why QC needs this: The eigenvalues of a quantum observable are the ONLY possible values you can measure in an experiment!'
    ],
    intuition: 'When a matrix acts on most vectors, it turns them and changes their direction. But for certain special vectors, the matrix ONLY stretches or flips them along their original line without rotating them at all! The scaling factor lambda is called the eigenvalue, and the special vector is the eigenvector. In quantum physics, every physical measurement outcome in a laboratory is an eigenvalue of an observable matrix.',
    sections: [
      {
        heading: 'The Characteristic Equation',
        content: 'From A|v> = lambda|v>, we rewrite (A - lambda*I)|v> = 0. For non-zero |v>, the matrix (A - lambda*I) must be non-invertible, meaning its determinant must vanish: det(A - lambda*I) = 0.'
      },
      {
        heading: 'Why Eigenvalues are Fundamental in Quantum Mechanics',
        content: 'Postulate of Quantum Measurement: When you measure an observable A (like energy, spin, or position), the ONLY numerical outcomes you can ever observe are the eigenvalues lambda_k of matrix A. Even if a system is in an exotic superposition, measuring it will force nature to return one of the discrete eigenvalues lambda_k!'
      }
    ],
    equations: [
      {
        label: 'The Eigenvalue Equation',
        latex: 'A|v\\rangle = \\lambda|v\\rangle \\iff \\det(A - \\lambda I) = 0',
        explanation: 'lambda is the eigenvalue scalar and |v> is the non-zero eigenvector.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the eigenvalues of the Pauli-Z gate Z = [1 0; 0 -1].',
      solution: 'det(Z - lambda*I) = det([1-lambda 0; 0 -1-lambda]) = (1 - lambda)(-1 - lambda) - 0 = -(1 - lambda)(1 + lambda) = lambda^2 - 1 = 0. Thus lambda = +1 or lambda = -1. When you measure qubit spin along the Z axis, the only possible outcomes are +1 (spin up |0>) and -1 (spin down |1>)!',
      derivationSteps: [
        'Set up: det([[1-lambda, 0], [0, -1-lambda]]) = 0.',
        'Expand: (1 - lambda)(-1 - lambda) = 0.',
        'Roots: lambda_1 = +1, lambda_2 = -1.',
        'Physical meaning: The two energy/spin states of a qubit.'
      ]
    },
    commonMisconceptions: [
      'Eigenvalues do not have to be positive. They can be negative (like -1 for Pauli-Z), zero, or complex (for non-Hermitian matrices). But for physical observables, Hermitian symmetry guarantees they are strictly real.'
    ],
    quickCheck: {
      question: 'What do the eigenvalues of a Hermitian observable matrix represent in quantum experiments?',
      options: [
        'The speed of the quantum computer clock.',
        'The only possible numerical measurement outcomes of that physical observable.',
        'The number of qubits in the circuit.',
        'The temperature of the cryostat.'
      ],
      correctIndex: 1,
      explanation: 'According to the postulates of quantum mechanics, measuring observable A always yields one of its eigenvalues.'
    },
    summary: 'Eigenvalues lambda satisfy A|v> = lambda|v> and represent the discrete possible outcomes of quantum physical measurements.',
    keyEquations: ['A|v\\rangle = \\lambda|v\\rangle', '\\det(A - \\lambda I) = 0'],
    videoIds: ['vid-eigenvalues-3b1b'],
    references: ['Nielsen & Chuang, Section 2.1.5: Eigenvectors and Eigenvalues.']
  },
  {
    id: '1.21',
    title: 'Eigenvectors',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.20'],
    objectives: [
      'Calculate the eigenvectors corresponding to each eigenvalue lambda',
      'Understand orthonormal eigenbases (spectral decomposition)',
      'Why QC needs this: When a quantum measurement occurs, the state collapses directly into one of the eigenvectors!'
    ],
    intuition: 'If the eigenvalue is the number you read on your laboratory measurement display, the eigenvector is the physical quantum state the particle collapses into immediately after the measurement! If you measure a qubit and obtain eigenvalue +1, the qubit is now guaranteed to be in the corresponding eigenvector state.',
    sections: [
      {
        heading: 'Finding Eigenvectors',
        content: 'Substitute each eigenvalue lambda_k back into (A - lambda_k*I)|v_k> = 0 and solve for the vector |v_k>. Normalize the vector so that <v_k|v_k> = 1.'
      },
      {
        heading: 'Wavefunction Collapse to Eigenstates',
        content: 'Before measurement, a qubit may be in superposition |psi> = alpha|v1> + beta|v2>. Upon measuring observable A, the state collapses to eigenvector |v1> with probability |alpha|^2 (yielding eigenvalue lambda_1), or to eigenvector |v2> with probability |beta|^2 (yielding eigenvalue lambda_2).'
      }
    ],
    equations: [
      {
        label: 'Spectral Decomposition',
        latex: 'A = \\sum_{k} \\lambda_k |v_k\\rangle\\langle v_k|, \\quad P(\\lambda_k) = |\\langle v_k | \\psi \\rangle|^2',
        explanation: 'Every Hermitian matrix can be decomposed into a sum of outer products of its eigenvectors weighted by its eigenvalues.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Find the normalized eigenvectors of the Pauli-X gate X = [0 1; 1 0].',
      solution: 'Eigenvalues of X are lambda = +1 and lambda = -1. For lambda = +1: (X - I)|v> = [-1 1; 1 -1][x; y] = 0 -> -x + y = 0 -> x = y. Normalized: |+> = [1/sqrt(2); 1/sqrt(2)]. For lambda = -1: (X + I)|v> = [1 1; 1 1][x; y] = 0 -> x + y = 0 -> x = -y. Normalized: |-> = [1/sqrt(2); -1/sqrt(2)].',
      derivationSteps: [
        'lambda = +1: [[-1, 1], [1, -1]][x; y] = [0; 0] -> x = y.',
        'Normalize: x^2 + x^2 = 1 -> 2x^2 = 1 -> x = 1/sqrt(2). Eigenvector |+>.',
        'lambda = -1: [[1, 1], [1, 1]][x; y] = [0; 0] -> x = -y.',
        'Normalize: x^2 + (-x)^2 = 1 -> x = 1/sqrt(2). Eigenvector |->.',
        'Conclusion: The eigenstates of Pauli-X are the Hadamard basis states |+> and |->!'
      ]
    },
    commonMisconceptions: [
      'Eigenvectors are only determined up to a scalar factor. We always choose normalized unit eigenvectors (<v|v> = 1) in quantum computing.'
    ],
    quickCheck: {
      question: 'What are the normalized eigenstates (eigenvectors) of the Pauli-X gate?',
      options: [
        '|0> and |1>',
        '|+> = (|0>+|1>)/sqrt(2) and |-> = (|0>-|1>)/sqrt(2)',
        '|i> and |-i>',
        '[1; 0] and [0; -1]'
      ],
      correctIndex: 1,
      explanation: 'Pauli-X has eigenstates |+> (eigenvalue +1) and |-> (eigenvalue -1).'
    },
    summary: 'Eigenvectors are the states into which a quantum system collapses during measurement, forming an orthonormal basis.',
    keyEquations: ['A|v_k\\rangle = \\lambda_k |v_k\\rangle', 'A = \\sum \\lambda_k |v_k\\rangle\\langle v_k|'],
    videoIds: ['vid-eigenvectors'],
    references: ['Nielsen & Chuang, Section 2.1.5.']
  },
  {
    id: '1.22',
    title: 'Linear Transformations',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Matrices & Linear Transformations',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.9', '1.14'],
    objectives: [
      'Define linear maps: T(c1|u> + c2|v>) = c1*T|u> + c2*T|v>',
      'Understand why linearity is a core axiom of quantum mechanics',
      'Recognize that linearity enables quantum parallelism'
    ],
    intuition: 'A transformation is "linear" if it respects addition and scaling: transforming a sum is the same as adding the transformed parts. Because quantum gates are strictly linear, if you feed a quantum computer an equal superposition of 1,000 inputs, the quantum gate automatically transforms all 1,000 inputs simultaneously in a single computational step! This is the mathematical root of quantum parallelism.',
    sections: [
      {
        heading: 'Definition of Linearity',
        content: 'A function T: V -> W is linear if for all vectors |u>, |v> and scalars a, b in C:\nT(a|u> + b|v>) = a T(|u>) + b T(|v>).'
      },
      {
        heading: 'Why Linearity Enables Quantum Parallelism',
        content: 'Suppose a circuit evaluates a function f(x) via unitary U_f |x>|0> = |x>|f(x)>. If we initialize the input register in an equal superposition of ALL 2^n numbers: |psi> = (1/sqrt(2^n)) sum_{x=0}^{2^n-1} |x>|0>, then by linearity, U_f acts on all 2^n states at once in ONE clock cycle!'
      }
    ],
    equations: [
      {
        label: 'Linearity and Quantum Parallelism',
        latex: 'U \\left( \\sum_{x} c_x |x\\rangle \\right) = \\sum_{x} c_x U|x\\rangle',
        explanation: 'The unitary operator distributes linearly across all superposed basis components simultaneously.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A Hadamard gate acts linearly as H|0> = |+> and H|1> = |->. Evaluate H applied to |psi> = (3/5)|0> + (4/5)|1>.',
      solution: 'By linearity: H|psi> = (3/5) H|0> + (4/5) H|1> = (3/5)|+> + (4/5)|->. Expand in {|0>, |1>}: (3/5)((|0>+|1>)/sqrt(2)) + (4/5)((|0>-|1>)/sqrt(2)) = ((3+4)/(5*sqrt(2)))|0> + ((3-4)/(5*sqrt(2)))|1> = (7/(5*sqrt(2)))|0> - (1/(5*sqrt(2)))|1>.',
      derivationSteps: [
        'H|0> = [1/sqrt(2); 1/sqrt(2)], H|1> = [1/sqrt(2); -1/sqrt(2)].',
        '3/5 * H|0> = [3/(5*sqrt(2)); 3/(5*sqrt(2))].',
        '4/5 * H|1> = [4/(5*sqrt(2)); -4/(5*sqrt(2))].',
        'Sum: [7/(5*sqrt(2)); -1/(5*sqrt(2))].',
        'Verify norm: (49 + 1)/(50) = 50/50 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'Linearity prevents "cloning" unknown quantum states (the No-Cloning Theorem). If quantum mechanics were non-linear, you could clone states and communicate faster than light!'
    ],
    quickCheck: {
      question: 'Which property of quantum operators allows them to evaluate a function on an entire superposition of inputs in a single step?',
      options: [
        'Non-linear saturation',
        'Linearity (distributivity over vector addition)',
        'Thermal dissipation',
        'Classical caching'
      ],
      correctIndex: 1,
      explanation: 'Linearity guarantees that U sum c_x |x> = sum c_x U|x>, enabling simultaneous evaluation across all superposed states.'
    },
    summary: 'Linearity is the foundational property of quantum operations, directly enabling quantum parallelism.',
    keyEquations: ['T(a|u\\rangle + b|v\\rangle) = a T|u\\rangle + b T|v\\rangle'],
    videoIds: ['vid-linear-transformations-3b1b'],
    references: ['Nielsen & Chuang, Chapter 2.']
  },
  {
    id: '1.23',
    title: 'Probability',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.1'],
    objectives: [
      'State the axioms of probability (0 <= P(E) <= 1, sum P = 1)',
      'Understand sample spaces and mutually exclusive events',
      'Why QC needs this: Born rule converts complex probability amplitudes into observable probabilities'
    ],
    intuition: 'Probability quantifies uncertainty. If an event is impossible, P = 0; if it is guaranteed, P = 1. In quantum computing, nature is fundamentally non-deterministic at the individual measurement level: you cannot predict with certainty which eigenvalue will be observed on a single trial, but you can calculate the exact probability distribution over repeated measurements.',
    sections: [
      {
        heading: 'Probability Axioms (Kolmogorov)',
        content: '1. Non-negativity: P(E) >= 0 for all events.\n2. Normalization: P(Omega) = 1 (something in the universe must happen).\n3. Additivity: For mutually exclusive events, P(A or B) = P(A) + P(B).'
      },
      {
        heading: 'Quantum Amplitudes vs Classical Probabilities',
        content: 'In classical probability, probabilities P_i are real numbers that add up directly. In quantum mechanics, nature tracks complex amplitudes c_i, and probabilities are obtained only at measurement via P_i = |c_i|^2. Because amplitudes are complex numbers, they can cancel before being squared!'
      }
    ],
    equations: [
      {
        label: 'Born Rule Probability',
        latex: 'P(i) = |c_i|^2, \\quad 0 \\le P(i) \\le 1, \\quad \\sum_{i} P(i) = 1',
        explanation: 'Measurement probability is the absolute square of the quantum probability amplitude.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A 2-qubit system is in state |psi> = 0.5|00> + 0.5|01> + 0.5|10> + 0.5|11>. What is the probability of measuring state 01?',
      solution: 'The amplitude of |01> is c_01 = 0.5. P(01) = |0.5|^2 = 0.25 (25%). Each of the 4 states has a 25% chance of being observed.',
      derivationSteps: [
        'c_00 = 0.5, c_01 = 0.5, c_10 = 0.5, c_11 = 0.5.',
        'P(01) = (0.5)^2 = 0.25.',
        'Total probability: 0.25 + 0.25 + 0.25 + 0.25 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'Probability does not mean quantum mechanics is incomplete or "sloppy." Quantum state evolution is 100% deterministic (via Schrödinger equation); only measurement collapse is probabilistic.'
    ],
    quickCheck: {
      question: 'If a quantum state has amplitude c = -sqrt(3)/2 for state |0>, what is the probability of measuring |0>?',
      options: [
        '-3/4',
        '3/4 (75%)',
        '-sqrt(3)/2',
        '1/4'
      ],
      correctIndex: 1,
      explanation: 'P(0) = |-sqrt(3)/2|^2 = (-sqrt(3)/2) * (-sqrt(3)/2) = 3/4 = 75%. Probabilities are always positive.'
    },
    summary: 'Probability measures the likelihood of measurement outcomes via the Born Rule P(i) = |c_i|^2.',
    keyEquations: ['P(x) = |\\langle x | \\psi \\rangle|^2', '\\sum P(x) = 1'],
    videoIds: ['vid-probability-intro'],
    references: ['Griffiths, D. J., Introduction to Quantum Mechanics, Chapter 1.']
  },
  {
    id: '1.24',
    title: 'Conditional Probability',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.23'],
    objectives: [
      'Define conditional probability P(A|B) = P(A and B) / P(B)',
      'Understand statistical independence P(A and B) = P(A) * P(B)',
      'Why QC needs this: Measuring one qubit of an entangled pair updates the conditional state of the other qubit'
    ],
    intuition: 'Conditional probability asks: "How does our knowledge of event A change once we learn that event B has already occurred?" In classical probability, if two coins are independent, flipping coin 1 tells you nothing about coin 2. But if two qubits are entangled in a Bell state, measuring qubit 1 to be 0 immediately updates the conditional probability of qubit 2 to be 0 with 100% certainty!',
    sections: [
      {
        heading: 'Formula for Conditional Probability',
        content: 'P(A|B) = P(A intersect B) / P(B), provided P(B) > 0. If A and B are independent, P(A|B) = P(A).'
      },
      {
        heading: 'Partial Measurement on Multi-Qubit Systems',
        content: 'Consider the Bell state |Phi+> = (|00> + |11>)/sqrt(2). The marginal probability of measuring qubit 2 as |0> is 50%. But if we measure qubit 1 first and observe 0, the conditional probability P(qubit 2 = 0 | qubit 1 = 0) jumps from 50% to 100%!'
      }
    ],
    equations: [
      {
        label: 'Conditional Probability and Bayes Theorem',
        latex: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(A|B) = \\frac{P(B|A)P(A)}{P(B)}',
        explanation: 'Quantifies the updated likelihood of outcome A given that event B has occurred.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'For the state |psi> = (1/2)|00> + (1/2)|01> + (1/sqrt(2))|11>, find P(q2=1 | q1=0).',
      solution: 'P(q1=0) = |1/2|^2 + |1/2|^2 = 1/4 + 1/4 = 1/2. P(q1=0 and q2=1) = |1/2|^2 = 1/4. P(q2=1 | q1=0) = (1/4) / (1/2) = 1/2 = 50%.',
      derivationSteps: [
        'Outcomes with q1=0: |00> (P=1/4), |01> (P=1/4). Total P(q1=0) = 1/2.',
        'Outcome with q1=0 and q2=1: |01> has P = 1/4.',
        'Conditional P = (1/4) / (1/2) = 0.5 (50%).'
      ]
    },
    commonMisconceptions: [
      'P(A|B) is NOT equal to P(B|A). The probability of being a quantum physicist given that you have a PhD is very different from the probability of having a PhD given that you are a quantum physicist.'
    ],
    quickCheck: {
      question: 'In the Bell state (|00> + |11>)/sqrt(2), what is the conditional probability P(q2 = 1 | q1 = 1)?',
      options: [
        '50%',
        '100%',
        '0%',
        '25%'
      ],
      correctIndex: 1,
      explanation: 'If qubit 1 is measured as 1, the wavefunction collapses to |11>, so qubit 2 is guaranteed to be 1 (100%).'
    },
    summary: 'Conditional probability models the post-measurement state updates on multi-qubit and entangled registers.',
    keyEquations: ['P(A|B) = \\frac{P(A \\cap B)}{P(B)}'],
    videoIds: ['vid-conditional-prob'],
    references: ['Ross, S., A First Course in Probability.']
  },
  {
    id: '1.25',
    title: 'Probability Distributions',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.23'],
    objectives: [
      'Distinguish discrete vs continuous probability distributions',
      'Understand expectation value <A> and variance / standard deviation',
      'Why QC needs this: Sampling a quantum circuit creates a histogram distribution of bitstrings'
    ],
    intuition: 'When you run a quantum circuit 1,000 times (called 1,000 "shots"), you do not get a single equation—you get a histogram showing how many times each bitstring (like 00, 01, 10, 11) was observed. This histogram is an experimental sample from the theoretical probability distribution predicted by the quantum statevector.',
    sections: [
      {
        heading: 'Discrete Distributions in Quantum Computing',
        content: 'For an n-qubit register, the sample space consists of 2^n discrete bitstrings. The probability mass function is P(x) = |<x|psi>|^2 for x in {0, 1}^n.'
      },
      {
        heading: 'Expectation Value <A>',
        content: 'The expectation value <A> = <psi|A|psi> is the theoretical average of measuring observable A over infinitely many identically prepared experiments: <A> = sum lambda_k P(lambda_k).'
      }
    ],
    equations: [
      {
        label: 'Quantum Expectation Value',
        latex: '\\langle A \\rangle = \\langle\\psi|A|\\psi\\rangle = \\sum_{k} \\lambda_k |\\langle v_k | \\psi \\rangle|^2',
        explanation: 'The mean measurement value over an ensemble of identically prepared quantum states.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the expectation value <Z> for the state |+> = (|0> + |1>)/sqrt(2).',
      solution: 'Z|0> = +1|0> and Z|1> = -1|1>. P(+1) = |1/sqrt(2)|^2 = 0.5. P(-1) = |1/sqrt(2)|^2 = 0.5. <Z> = (+1)(0.5) + (-1)(0.5) = +0.5 - 0.5 = 0.',
      derivationSteps: [
        '<+|Z|+> = [1/sqrt(2), 1/sqrt(2)] * [1 0; 0 -1] * [1/sqrt(2); 1/sqrt(2)].',
        '= [1/sqrt(2), 1/sqrt(2)] * [1/sqrt(2); -1/sqrt(2)].',
        '= (1/2) - (1/2) = 0.',
        'Physical meaning: The state |+> points along the X axis, so its projection on Z is zero.'
      ]
    },
    commonMisconceptions: [
      'The expectation value <A> does NOT have to be an eigenvalue! In the example above, <Z> = 0, but 0 is NOT an eigenvalue of Z (the eigenvalues are +1 and -1). You will NEVER measure 0 on any single shot!'
    ],
    quickCheck: {
      question: 'If you measure observable Z on state |+> 10,000 times, what will you observe?',
      options: [
        'Every shot returns 0.',
        'Approximately 5,000 shots return +1, and 5,000 shots return -1.',
        'All shots return +0.5.',
        'The circuit produces no results.'
      ],
      correctIndex: 1,
      explanation: 'Each shot yields either +1 or -1 with 50% probability; the average of the distribution is 0.'
    },
    summary: 'Quantum measurement yields an empirical distribution of bitstrings whose theoretical mean is the expectation value <A> = <psi|A|psi>.',
    keyEquations: ['\\langle A \\rangle = \\langle\\psi|A|\\psi\\rangle', '\\Delta A = \\sqrt{\\langle A^2 \\rangle - \\langle A \\rangle^2}'],
    videoIds: ['vid-expectation-values'],
    references: ['Griffiths, D. J., Introduction to Quantum Mechanics.']
  },
  {
    id: '1.26',
    title: 'Tensor Products',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.8', '1.14'],
    objectives: [
      'Compute the Kronecker / tensor product of vectors |u> (x) |v>',
      'Compute the tensor product of matrices A (x) B',
      'Understand how composite quantum systems combine: H_total = H1 (x) H2',
      'Why QC needs this: This is the mathematical mechanism that causes quantum state spaces to scale exponentially (2^n)'
    ],
    intuition: 'If you have one qubit, its state lives in a 2-dimensional vector space. What happens when you put two qubits together? In classical physics, adding a second particle adds coordinates (3 + 3 = 6). But in quantum physics, the state spaces MULTIPLY through the tensor product (\\otimes): 2 * 2 = 4 dimensions! For 3 qubits, 2 * 2 * 2 = 8 dimensions. For n qubits, 2^n dimensions.',
    sections: [
      {
        heading: 'Vector Tensor Product (Kronecker Product)',
        content: 'Given |u> = [u1; u2] and |v> = [v1; v2], the tensor product |u> \\otimes |v> (often written as |uv> or |u>|v>) is [u1*v1; u1*v2; u2*v1; u2*v2].'
      },
      {
        heading: 'Matrix Tensor Product',
        content: 'For matrices A and B, A \\otimes B replaces each entry A_{ij} with the entire submatrix A_{ij} * B. For two 2x2 matrices, A \\otimes B is a 4x4 matrix.'
      }
    ],
    equations: [
      {
        label: 'Kronecker Tensor Product Formula',
        latex: 'A \\otimes B = \\begin{pmatrix} a_{11}B & a_{12}B \\\\ a_{21}B & a_{22}B \\end{pmatrix}, \\quad |00\\rangle = |0\\rangle \\otimes |0\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\otimes \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 0 \\end{pmatrix}',
        explanation: 'Combines two quantum subsystems into a unified joint Hilbert state space.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compute the 4-element statevector for |01> = |0> \\otimes |1>.',
      solution: '|0> = [1; 0], |1> = [0; 1]. |0> \\otimes |1> = [1*[0; 1]; 0*[0; 1]] = [0; 1; 0; 0].',
      derivationSteps: [
        'Top block: 1 * [0; 1] = [0; 1].',
        'Bottom block: 0 * [0; 1] = [0; 0].',
        'Stack blocks: [0; 1; 0; 0].',
        'Check: Index 01 in binary is 1 (0-indexed: state 0 is 00, state 1 is 01, state 2 is 10, state 3 is 11).'
      ]
    },
    commonMisconceptions: [
      'The tensor product (\\otimes) is NOT the inner product (<u|v>, which yields a scalar) and NOT the outer product (|u><v|, which yields a matrix of the same dimension). The tensor product expands into a higher-dimensional space!'
    ],
    quickCheck: {
      question: 'What is the dimension of the composite vector space for 4 qubits?',
      options: [
        '4 dimensions',
        '8 dimensions',
        '16 dimensions (2^4)',
        '64 dimensions'
      ],
      correctIndex: 2,
      explanation: 'dim(C^2 \\otimes C^2 \\otimes C^2 \\otimes C^2) = 2 * 2 * 2 * 2 = 16.'
    },
    summary: 'The tensor product \\otimes combines multiple qubit registers, creating exponential state space scaling (2^n).',
    keyEquations: ['|u\\rangle \\otimes |v\\rangle = \\begin{pmatrix} u_0 v_0 \\\\ u_0 v_1 \\\\ u_1 v_0 \\\\ u_1 v_1 \\end{pmatrix}', '\\dim(\\mathcal{H}^{\\otimes n}) = 2^n'],
    videoIds: ['vid-tensor-products'],
    references: ['Nielsen & Chuang, Section 2.1.7: Tensor Products.']
  },
  {
    id: '1.27',
    title: 'Mathematical Notation Used in Quantum Computing',
    level: 1,
    levelName: 'Level 1 — Mathematical Foundations',
    module: 'Eigenvalues, Eigenvectors & Tensor Products',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.8', '1.18', '1.26'],
    objectives: [
      'Synthesize Dirac notation: Ket |v>, Bra <v|, Inner product <u|v>, Outer product |u><v|',
      'Master matrix symbols: Transpose A^T, Conjugate A*, Adjoint A^dagger, Tensor A (x) B',
      'Bridge mathematics to quantum circuit diagrams and code'
    ],
    intuition: 'Paul Dirac created a notation so powerful and intuitive that physicists and computer scientists have used it for nearly a century. Dirac notation allows you to manipulate quantum states, projectors, and operators algebraically without constantly drawing out gigantic arrays of numbers.',
    sections: [
      {
        heading: 'Dirac Notation Master Table',
        content: '• Ket |psi>: State vector (column matrix).\n• Bra <psi|: Dual vector (conjugate transpose row matrix).\n• Inner product <phi|psi>: Overlap amplitude (complex scalar).\n• Outer product |phi><psi|: Linear operator / projector (square matrix).\n• Tensor product |phi> \\otimes |psi> = |phi psi>: Composite state.'
      },
      {
        heading: 'Outer Product as Projection Operator',
        content: 'Notice the difference between <u|v> and |u><v|! <u|v> is a row times a column, giving a single number. But |u><v| is a column times a row, giving a full square matrix! The operator P_0 = |0><0| = [1 0; 0 0] projects any state onto the |0> component.'
      }
    ],
    equations: [
      {
        label: 'Dirac Algebra Equivalences',
        latex: '\\langle\\phi|\\psi\\rangle = (\\text{scalar}), \\quad |\\phi\\rangle\\langle\\psi| = (\\text{matrix operator}), \\quad (|u\\rangle\\langle v|)^\\dagger = |v\\rangle\\langle u|',
        explanation: 'Dirac notation unifies vectors, dual spaces, inner products, and matrix operators in a compact algebra.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Evaluate the action of the projection operator P = |+><+| on the state |0>.',
      solution: 'P|0> = (|+><+|)|0> = |+> * (<+|0>). Since <+|0> = 1/sqrt(2), P|0> = (1/sqrt(2)) |+>.',
      derivationSteps: [
        'Use associativity of Dirac notation: (|a><b|)|c> = |a>(<b|c>).',
        '<+|0> = (1/sqrt(2))<0|0> + (1/sqrt(2))<1|0> = 1/sqrt(2) + 0 = 1/sqrt(2).',
        'Multiply scalar by ket: (1/sqrt(2)) * |+>.',
        'Conclusion: Dirac notation turns matrix multiplication into scalar arithmetic!'
      ]
    },
    commonMisconceptions: [
      'Always remember: Bracket < | > is a number; Out-bracket | >< | is an operator/matrix.'
    ],
    quickCheck: {
      question: 'What kind of mathematical object is |0><1|?',
      options: [
        'A complex scalar number',
        'A 2x2 matrix operator',
        'A 2D column vector',
        'A probability between 0 and 1'
      ],
      correctIndex: 1,
      explanation: 'An outer product |a><b| is a column vector times a row vector, which produces a 2x2 matrix operator.'
    },
    summary: 'You have mastered Level 1 Mathematical Foundations! You now have the complete mathematical toolkit to study Classical Physics (Level 2) and Quantum Mechanics (Level 3).',
    keyEquations: ['\\langle\\phi|\\psi\\rangle \\in \\mathbb{C}', '|\\phi\\rangle\\langle\\psi| \\in \\mathbb{C}^{N \\times N}', 'I = \\sum |i\\rangle\\langle i|'],
    videoIds: ['vid-dirac-notation'],
    references: ['Dirac, P. A. M. (1930). The Principles of Quantum Mechanics.']
  }
];

