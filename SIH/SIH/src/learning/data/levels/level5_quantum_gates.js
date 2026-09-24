/**
 * Level 5: Quantum Gates & Circuit Algebra (Lessons 5.1 - 5.23)
 * Full breakdown of every quantum gate: Intuition, Matrix, Effect on |0>, |1>, Superposition, Bloch Sphere, Examples, Mistakes, and Quizzes.
 */

export const LEVEL_5_LESSONS = [
  {
    id: '5.1',
    title: 'What is a Quantum Gate?',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.12'],
    objectives: [
      'Define quantum gates as unitary matrices U acting on statevectors |psi>',
      'Understand gate reversibility (U^dagger U = I)',
      'Explain quantum gate synthesis through calibrated physical pulses'
    ],
    intuition: 'In classical computing, logic gates like AND, OR, and NOT are physical microscopic switches made of silicon transistors. In quantum computing, a quantum gate is NOT a static hardware component on a circuit board. A quantum gate is an electromagnetic laser or microwave pulse applied to a qubit for a precise duration that rotates its statevector on the Bloch sphere! Every quantum gate must be strictly reversible and unitary.',
    sections: [
      {
        heading: 'The Unitary Nature of Gates',
        content: 'Every quantum gate on n qubits is a 2^n x 2^n complex matrix U that satisfies U^dagger U = I. It acts on an input statevector |psi_in> to produce |psi_out> = U|psi_in>.'
      }
    ],
    equations: [
      {
        label: 'Quantum Gate Action',
        latex: '|\\psi_{\\text{out}}\\rangle = U |\\psi_{\\text{in}}\\rangle, \\quad U^\\dagger U = I',
        explanation: 'Unitary matrix transformation preserving vector length and probability sum.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Why can a classical AND gate not be directly implemented as a quantum gate?',
      solution: 'An AND gate takes 2 inputs and outputs 1 bit. If the output is 0, you cannot determine if the input was 00, 01, or 10. Information is irreversibly erased, which violates unitarity U^dagger U = I. Quantum gates must have equal numbers of inputs and outputs and must be strictly reversible.',
      derivationSteps: [
        'AND gate: 4 inputs -> 2 outputs (dimension shrinks).',
        'Cannot invert: AND^{-1}(0) is ambiguous.',
        'Unitary requires bijective, isometric transformation.'
      ]
    },
    commonMisconceptions: [
      'Gates are not physical boxes that qubits travel through on a conveyor belt; the qubit stays in place while external control fields manipulate its state over time.'
    ],
    quickCheck: {
      question: 'Which mathematical condition is required for all quantum gate operators?',
      options: ['They must be singular.', 'They must be unitary (U^dagger U = I).', 'They must have only integer entries.', 'They must reduce vector length.'],
      correctIndex: 1,
      explanation: 'Unitarity ensures that statevector norms are preserved and operations are reversible.'
    },
    summary: 'Quantum gates are reversible unitary transformations that rotate qubit statevectors.',
    keyEquations: ['U^\\dagger U = I'],
    videoIds: ['vid-quantum-gates-intro'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '5.2',
    title: 'Gate Representation Using Matrices',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.14', '5.1'],
    objectives: [
      'Construct a gate matrix from its action on basis states',
      'Read matrix columns as transformed basis states: Col 1 = U|0>, Col 2 = U|1>',
      'Understand operator composition as matrix multiplication'
    ],
    intuition: 'How do you build the matrix for any gate? It is remarkably simple! Column 1 of the matrix is simply the statevector that results when you feed in |0>. Column 2 is the statevector that results when you feed in |1>. Once you know what a gate does to |0> and |1>, its entire matrix is completely determined!',
    sections: [
      {
        heading: 'The Column Recipe',
        content: 'For any single-qubit gate U: U = [ U|0> | U|1> ]. If U|0> = [a; c] and U|1> = [b; d], then U = [a b; c d]. By linearity, this matrix correctly transforms any arbitrary superposition alpha|0> + beta|1> into alpha(U|0>) + beta(U|1>).'
      }
    ],
    equations: [
      {
        label: 'Matrix Column Rule',
        latex: 'U = \\begin{pmatrix} \\langle 0|U|0\\rangle & \\langle 0|U|1\\rangle \\\\ \\langle 1|U|0\\rangle & \\langle 1|U|1\\rangle \\end{pmatrix} = \\begin{pmatrix} U|0\\rangle & U|1\\rangle \\end{pmatrix}',
        explanation: 'The matrix elements are the transition amplitudes between input and output basis states.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'A gate G swaps |0> into |-> = (|0>-|1>)/sqrt(2) and leaves |1> unchanged. Construct its 2x2 matrix.',
      solution: 'Column 1 is G|0> = [1/sqrt(2); -1/sqrt(2)]. Column 2 is G|1> = [0; 1]. Combining columns: G = [1/sqrt(2) 0; -1/sqrt(2) 1].',
      derivationSteps: [
        'Col 1: [1/sqrt(2); -1/sqrt(2)].',
        'Col 2: [0; 1].',
        'G = [[1/sqrt(2), 0], [-1/sqrt(2), 1]].'
      ]
    },
    commonMisconceptions: [
      'Remember that matrix columns, not rows, correspond to transformed basis states.'
    ],
    quickCheck: {
      question: 'In the 2x2 matrix of a quantum gate U, what does the first column represent?',
      options: ['The output vector when the input is |1>', 'The output vector when the input is |0>', 'The determinant of U', 'The energy of the qubit'],
      correctIndex: 1,
      explanation: 'The first column is U|0> = U * [1; 0].'
    },
    summary: 'The columns of a gate matrix are the output statevectors when basis states |0> and |1> are applied.',
    keyEquations: ['U = \\begin{pmatrix} U|0\\rangle & U|1\\rangle \\end{pmatrix}'],
    videoIds: ['vid-gate-matrix-rep'],
    references: ['Nielsen & Chuang, Section 1.2.']
  },
  {
    id: '5.3',
    title: 'Identity Gate',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['1.15', '5.2'],
    objectives: [
      'Define Identity gate I: Matrix [1 0; 0 1]',
      'Effect on basis states: I|0> = |0>, I|1> = |1>',
      'Effect on superposition: I(alpha|0> + beta|1>) = alpha|0> + beta|1>',
      'Bloch sphere interpretation: Zero rotation (stationary)',
      'Practical role: Qubit buffer, idle clock cycle, dynamical decoupling calibration'
    ],
    intuition: 'The Identity gate is the "do nothing" gate. It leaves every quantum state exactly as it found it. On the Bloch sphere, it represents a rotation of 0 degrees around any axis. In real quantum computers, an Identity gate represents an idle clock cycle where a qubit waits while other qubits execute multi-qubit gates.',
    sections: [
      {
        heading: 'Matrix and Action',
        content: 'I = [1 0; 0 1]. It acts as: I|0> = |0>, I|1> = |1>, I|psi> = |psi>.'
      },
      {
        heading: 'Hardware Role: Dynamical Decoupling',
        content: 'While an idle qubit waits, it is vulnerable to decoherence. Quantum engineers fill Identity intervals with calibrated pulse sequences (like CPMG or XY4) that cancel low-frequency magnetic noise.'
      }
    ],
    equations: [
      {
        label: 'Identity Gate Matrix',
        latex: 'I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, \\quad I|\\psi\\rangle = |\\psi\\rangle',
        explanation: 'Leaves statevectors and Bloch coordinates completely invariant.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Show that I can be written in outer product form using the computational basis.',
      solution: '|0><0| = [1 0; 0 0] and |1><1| = [0 0; 0 1]. |0><0| + |1><1| = [1 0; 0 1] = I.',
      derivationSteps: ['|0><0| = [[1, 0], [0, 0]].', '|1><1| = [[0, 0], [0, 1]].', 'Sum = [[1, 0], [0, 1]] = I.']
    },
    commonMisconceptions: [
      'An idle qubit in hardware is not frozen in time; it experiences decoherence unless active dynamical decoupling is applied.'
    ],
    quickCheck: {
      question: 'What is the action of the Identity gate on the state |+> = (|0>+|1>)/sqrt(2)?',
      options: ['|->', '|+>', '|0>', '|1>'],
      correctIndex: 1,
      explanation: 'The Identity gate leaves any state unchanged: I|+> = |+>.'
    },
    summary: 'The Identity gate I = [1 0; 0 1] leaves all states invariant and models idle qubit cycles.',
    keyEquations: ['I = |0\\rangle\\langle 0| + |1\\rangle\\langle 1|'],
    videoIds: ['vid-identity-gate'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '5.4',
    title: 'Pauli-X',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['5.2'],
    objectives: [
      'Define Pauli-X (NOT) gate: Matrix [0 1; 1 0]',
      'Effect on basis states: X|0> = |1>, X|1> = |0>',
      'Effect on superposition: X(alpha|0> + beta|1>) = beta|0> + alpha|1>',
      'Bloch sphere interpretation: 180-degree (pi) rotation around the X-axis',
      'Knowledge check and common mistakes'
    ],
    intuition: 'The Pauli-X gate is the quantum equivalent of the classical NOT gate (bit-flip). If the qubit is |0>, X flips it to |1>. If it is |1>, X flips it to |0>. On the Bloch sphere, it rotates the statevector by 180 degrees (pi radians) around the X-axis, swapping the North Pole and South Pole!',
    sections: [
      {
        heading: 'Matrix and Action on Superpositions',
        content: 'X = [0 1; 1 0]. Notice: X|0> = |1> and X|1> = |0>.\nWhen acting on a general superposition: X(alpha|0> + beta|1>) = alpha(X|0>) + beta(X|1>) = alpha|1> + beta|0> = beta|0> + alpha|1>. It swaps the amplitudes alpha and beta!'
      },
      {
        heading: 'Action on the X-Basis: Eigenstates',
        content: 'What happens if you apply X to |+> = (|0>+|1>)/sqrt(2)?\nX|+> = (X|0> + X|1>)/sqrt(2) = (|1> + |0>)/sqrt(2) = |+>! The state is UNCHANGED. |+> is an eigenstate of X with eigenvalue +1. For |->: X|-> = -|-> (eigenvalue -1).'
      }
    ],
    equations: [
      {
        label: 'Pauli-X Matrix and Transformations',
        latex: 'X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad X|0\\rangle = |1\\rangle, \\quad X|1\\rangle = |0\\rangle, \\quad X|+\\rangle = |+\\rangle, \\quad X|-\\rangle = -|-\\rangle',
        explanation: 'Flips computational basis states and leaves X-basis eigenstates invariant up to eigenvalue signs.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Apply Pauli-X to the state |psi> = (sqrt(3)/2)|0> + (1/2)|1>. What are the new measurement probabilities?',
      solution: 'X|psi> = (sqrt(3)/2) X|0> + (1/2) X|1> = (sqrt(3)/2)|1> + (1/2)|0> = (1/2)|0> + (sqrt(3)/2)|1>. New probabilities: P(0) = |1/2|^2 = 1/4 = 25%. P(1) = |sqrt(3)/2|^2 = 3/4 = 75%. The probabilities swapped!',
      derivationSteps: [
        'Initial: P(0)=75%, P(1)=25%.',
        'Apply X: swaps amplitudes.',
        'Final: alpha\' = 1/2, beta\' = sqrt(3)/2.',
        'P(0)=25%, P(1)=75%.'
      ]
    },
    commonMisconceptions: [
      'X is not just a classical bit-flip; because it is a 180-degree rotation around the X-axis, it leaves the state |+> pointing along the X-axis completely untouched!'
    ],
    quickCheck: {
      question: 'What is the action of the Pauli-X gate on the state |+> = (|0> + |1>)/sqrt(2)?',
      options: ['|->', '|+>', '|0>', '|1>'],
      correctIndex: 1,
      explanation: 'X|+> = (+1)|+>. Because |+> lies directly on the X-axis, rotating 180 degrees around X leaves it invariant.'
    },
    summary: 'The Pauli-X gate is a bit-flip operator represented by [0 1; 1 0], corresponding to a 180-degree rotation around the X-axis.',
    keyEquations: ['X = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}', 'X^2 = I', 'X|0\\rangle = |1\\rangle'],
    videoIds: ['vid-pauli-x'],
    references: ['Nielsen & Chuang, Section 1.2.']
  },
  {
    id: '5.5',
    title: 'Pauli-Y',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.4', '1.2'],
    objectives: [
      'Define Pauli-Y gate: Matrix [0 -i; i 0]',
      'Effect on basis states: Y|0> = i|1>, Y|1> = -i|0>',
      'Effect on superposition: Y(alpha|0> + beta|1>) = -i*beta|0> + i*alpha|1>',
      'Bloch sphere interpretation: 180-degree (pi) rotation around the Y-axis',
      'Understand Y as a combined bit-flip and phase-flip: Y = i*X*Z'
    ],
    intuition: 'The Pauli-Y gate is the most exotic of the three Pauli operators because it introduces the imaginary unit i. It simultaneously flips the bit AND applies a phase shift. On the Bloch sphere, it rotates the statevector by 180 degrees around the Y-axis.',
    sections: [
      {
        heading: 'Matrix and Action',
        content: 'Y = [0 -i; i 0]. Y|0> = i|1> and Y|1> = -i|0>.\nNotice that Y^2 = [0 -i; i 0][0 -i; i 0] = [(-i)(i) 0; 0 (i)(-i)] = [1 0; 0 1] = I. Like all Pauli matrices, Y is Hermitian (Y = Y^dagger) and Unitary (Y^dagger Y = I).'
      }
    ],
    equations: [
      {
        label: 'Pauli-Y Matrix and Action',
        latex: 'Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}, \\quad Y|0\\rangle = i|1\\rangle, \\quad Y|1\\rangle = -i|0\\rangle, \\quad Y = i X Z',
        explanation: 'Combines bit-flip (X) and phase-flip (Z) with an imaginary phase factor i.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Apply the Pauli-Y gate to the state |+i> = (|0> + i|1>)/sqrt(2). What is the resulting state?',
      solution: 'Y|+i> = (1/sqrt(2)) [ Y|0> + i Y|1> ] = (1/sqrt(2)) [ i|1> + i(-i|0>) ] = (1/sqrt(2)) [ i|1> + (-i^2)|0> ] = (1/sqrt(2)) [ |0> + i|1> ] = |+i>! |+i> is an eigenstate of Y with eigenvalue +1 (pointing along the +Y axis).',
      derivationSteps: [
        'Y|0> = i|1>.',
        'Y|1> = -i|0> -> i * Y|1> = i * (-i|0>) = +|0>.',
        'Sum: (|0> + i|1>) / sqrt(2) = |+i>.',
        'Verification: Y is rotation around Y, so vector on +Y axis is unchanged.'
      ]
    },
    commonMisconceptions: [
      'Do not forget the minus sign on the top-right entry: Y = [0 -i; i 0], NOT [0 i; -i 0].'
    ],
    quickCheck: {
      question: 'What is the matrix product Y^2 equal to?',
      options: ['-I', 'I (Identity)', '0', 'X'],
      correctIndex: 1,
      explanation: 'Like all Pauli matrices, Y^2 = I (applying Y twice returns the original state).'
    },
    summary: 'Pauli-Y = [0 -i; i 0] performs a combined bit and phase flip, corresponding to a 180-degree rotation around the Y-axis.',
    keyEquations: ['Y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}', 'Y = iXZ', 'Y^2 = I'],
    videoIds: ['vid-pauli-y'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '5.6',
    title: 'Pauli-Z',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['5.4', '1.6'],
    objectives: [
      'Define Pauli-Z (phase-flip) gate: Matrix [1 0; 0 -1]',
      'Effect on basis states: Z|0> = |0>, Z|1> = -|1>',
      'Effect on superposition: Z(alpha|0> + beta|1>) = alpha|0> - beta|1>',
      'Bloch sphere interpretation: 180-degree (pi) rotation around the Z-axis',
      'Explain conversion between |+> and |->'
    ],
    intuition: 'The Pauli-Z gate is the quantum phase-flip gate. It leaves |0> completely untouched, but flips the phase of |1> by multiplying it by -1 = e^(i*pi). If you measure in the Z basis, you will never notice a difference (both have the same probabilities). But if you measure in the X basis, Z flips |+> into |-> and |-> into |+>!',
    sections: [
      {
        heading: 'Matrix and Transformations',
        content: 'Z = [1 0; 0 -1]. Z|0> = |0>, Z|1> = -|1>.\nActing on |+>: Z|+> = Z((|0>+|1>)/sqrt(2)) = (|0> - |1>)/sqrt(2) = |->!\nActing on |->: Z|-> = Z((|0>-|1>)/sqrt(2)) = (|0> - (-|1>))/sqrt(2) = (|0>+|1>)/sqrt(2) = |+>.'
      },
      {
        heading: 'Bloch Sphere Rotation',
        content: 'On the Bloch sphere, Z is a 180-degree rotation around the vertical Z-axis. The North Pole |0> and South Pole |1> lie on the rotation axis and do not move. But points on the equator are spun to the opposite side: +X (|+>) flips to -X (|->).'
      }
    ],
    equations: [
      {
        label: 'Pauli-Z Matrix and Transformations',
        latex: 'Z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad Z|0\\rangle = |0\\rangle, \\quad Z|1\\rangle = -|1\\rangle, \\quad Z|+\\rangle = |-\\rangle, \\quad Z|-\\rangle = |+\\rangle',
        explanation: 'Leaves computational basis probabilities invariant while flipping relative phase by pi.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Does the Pauli-Z gate change the measurement probabilities of the state |psi> = (1/2)|0> + (sqrt(3)/2)|1> in the computational basis?',
      solution: 'Z|psi> = (1/2)|0> - (sqrt(3)/2)|1>. The probabilities are P(0) = |1/2|^2 = 1/4 = 25% and P(1) = |-sqrt(3)/2|^2 = 3/4 = 75%. The probabilities are IDENTICAL! A phase flip cannot be detected by a computational Z-measurement; it can only be detected after an interference gate (like Hadamard).',
      derivationSteps: [
        'Initial state: P(0)=0.25, P(1)=0.75.',
        'Z applied: alpha = 1/2, beta = -sqrt(3)/2.',
        'P(0) = |1/2|^2 = 0.25.',
        'P(1) = |-sqrt(3)/2|^2 = 0.75.',
        'Conclusion: Z-measurement cannot detect a phase flip.'
      ]
    },
    commonMisconceptions: [
      'A phase flip is not harmless. In quantum algorithms (like Grover and Shor), phase flips on specific states are what cause destructive interference to cancel wrong answers.'
    ],
    quickCheck: {
      question: 'What state is produced when a Pauli-Z gate is applied to the state |+> = (|0> + |1>)/sqrt(2)?',
      options: ['|+>', '|-> = (|0> - |1>)/sqrt(2)', '|0>', '|1>'],
      correctIndex: 1,
      explanation: 'Z|+> = (|0> - |1>)/sqrt(2) = |->.'
    },
    summary: 'The Pauli-Z gate flips the phase of |1> by -1, rotating the statevector by 180 degrees around the Z-axis.',
    keyEquations: ['Z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}', 'Z|+\\rangle = |-\\rangle', 'Z^2 = I'],
    videoIds: ['vid-pauli-z'],
    references: ['Nielsen & Chuang, Section 1.2.']
  },
  {
    id: '5.7',
    title: 'Hadamard Gate',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '30 mins',
    difficulty: 'beginner',
    prerequisites: ['5.4', '5.6'],
    objectives: [
      'Define Hadamard gate H: Matrix (1/sqrt(2)) [1 1; 1 -1]',
      'Effect on basis states: H|0> = |+>, H|1> = |->',
      'Effect on superposition: H|+> = |0>, H|-> = |1>',
      'Bloch sphere interpretation: 180-degree rotation around the diagonal (X+Z)/sqrt(2) axis',
      'Explain its role as the fundamental "superposition creator" and basis converter'
    ],
    intuition: 'If quantum computing had a mascot, it would be the Hadamard gate (H). It is the most important single-qubit gate in existence! The Hadamard gate takes a definite classical bit (0 or 1) and explodes it into a perfect 50/50 quantum superposition. Applying it a second time brings the superposition back to the original definite bit (H^2 = I). It converts between the computational Z basis and the superposition X basis.',
    sections: [
      {
        heading: 'The Hadamard Matrix',
        content: 'H = (1/\\sqrt{2}) \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}.\nTransformations:\n• H|0> = (1/\\sqrt{2}) [1; 1] = (|0> + |1>)/\\sqrt{2} = |+>\n• H|1> = (1/\\sqrt{2}) [1; -1] = (|0> - |1>)/\\sqrt{2} = |->\n• H|+> = |0>\n• H|-> = |1>'
      },
      {
        heading: 'Bloch Sphere Geometry: Diagonal Flip',
        content: 'On the Bloch sphere, H is a 180-degree rotation around the diagonal axis (X + Z)/\\sqrt{2}. This diagonal rotation swaps the North pole (+Z) with the front (+X), and swaps the South pole (-Z) with the back (-X).'
      }
    ],
    equations: [
      {
        label: 'The Hadamard Transformations',
        latex: 'H = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}, \\quad H|0\\rangle = |+\\rangle, \\quad H|1\\rangle = |-\\rangle, \\quad H^2 = I',
        explanation: 'Transforms between computational Z basis and transverse X basis, satisfying H = H^dagger = H^(-1).'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Apply a Hadamard gate to the state |psi> = (3/5)|0> + (4/5)|1>. What is the final state in the computational basis?',
      solution: 'H|psi> = (3/5) H|0> + (4/5) H|1> = (3/5) [(|0>+|1>)/sqrt(2)] + (4/5) [(|0>-|1>)/sqrt(2)] = [ (3/5 + 4/5)/sqrt(2) ] |0> + [ (3/5 - 4/5)/sqrt(2) ] |1> = (7 / (5*sqrt(2))) |0> - (1 / (5*sqrt(2))) |1>. Probabilities: P(0) = 49/50 = 98%, P(1) = 1/50 = 2%.',
      derivationSteps: [
        'alpha = 3/5, beta = 4/5.',
        'alpha\' = (3/5 + 4/5) / sqrt(2) = 7 / (5*sqrt(2)).',
        'beta\' = (3/5 - 4/5) / sqrt(2) = -1 / (5*sqrt(2)).',
        'P(0) = 49 / 50 = 98%.',
        'P(1) = 1 / 50 = 2%.'
      ]
    },
    commonMisconceptions: [
      'A common mistake is thinking H creates random noise. H is 100% deterministic and reversible: applying H twice always returns the exact initial state (H * H = I).'
    ],
    quickCheck: {
      question: 'What is the effect of applying two consecutive Hadamard gates to a qubit (H * H |psi>)?',
      options: ['The qubit is destroyed.', 'The state is unchanged (|psi>) because H is self-inverse (H^2 = I).', 'It flips |0> to |1>.', 'It multiplies the phase by i.'],
      correctIndex: 1,
      explanation: 'H^2 = I, so applying two Hadamard gates in succession is an identity operation.'
    },
    summary: 'The Hadamard gate H creates equal superpositions from basis states (H|0> = |+>, H|1> = |->) and is self-inverse.',
    keyEquations: ['H = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}', 'H|0\\rangle = |+\\rangle', 'H^2 = I'],
    videoIds: ['vid-hadamard-gate'],
    references: ['Nielsen & Chuang, Section 1.2.']
  },
  {
    id: '5.8',
    title: 'Phase Gate',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.6', '1.5'],
    objectives: [
      'Define the arbitrary Phase gate P(lambda) / R_phi: Matrix [1 0; 0 e^(i*lambda)]',
      'Understand how phase shifts leave P(0) and P(1) unchanged while rotating around Z',
      'Connect S, T, and Z as special discrete cases of the Phase gate'
    ],
    intuition: 'The Phase gate P(lambda) is a tunable dial that rotates the qubit around the vertical Z-axis of the Bloch sphere by an arbitrary angle lambda. The |0> component is left alone, while the |1> component acquires a phase factor e^(i*lambda).',
    sections: [
      {
        heading: 'The Phase Matrix Family',
        content: 'P(lambda) = [1 0; 0 e^(i*lambda)].\n• When lambda = pi: P(pi) = [1 0; 0 -1] = Z gate!\n• When lambda = pi/2: P(pi/2) = [1 0; 0 i] = S gate!\n• When lambda = pi/4: P(pi/4) = [1 0; 0 e^(i*pi/4)] = T gate!\nAll phase gates commute with each other: P(theta) P(phi) = P(theta + phi).'
      }
    ],
    equations: [
      {
        label: 'General Phase Gate Matrix',
        latex: 'P(\\lambda) = \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\lambda} \\end{pmatrix}, \\quad P(\\lambda_1) P(\\lambda_2) = P(\\lambda_1 + \\lambda_2)',
        explanation: 'Applies a continuous relative phase shift lambda to the |1> basis component.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'What gate results from applying two S gates in succession (S * S)?',
      solution: 'S = P(pi/2). S * S = P(pi/2 + pi/2) = P(pi) = Z. Two S gates make a Pauli-Z gate! That is why S is called the "Square Root of Z" gate (sqrt(Z)).',
      derivationSteps: [
        'S = [[1, 0], [0, i]].',
        'S * S = [[1*1, 0], [0, i*i]] = [[1, 0], [0, -1]] = Z.',
        'Conclusion: S = sqrt(Z).'
      ]
    },
    commonMisconceptions: [
      'Phase gates change the longitude phi on the Bloch sphere, but NEVER change the latitude theta (measurement probabilities in Z stay identical).'
    ],
    quickCheck: {
      question: 'Which gate is produced by applying two S gates in series?',
      options: ['Pauli-X', 'Pauli-Z', 'Hadamard', 'Identity'],
      correctIndex: 1,
      explanation: 'S = P(pi/2), so S * S = P(pi) = Z.'
    },
    summary: 'The Phase gate P(lambda) = [1 0; 0 e^(i*lambda)] rotates states around the Z-axis, unifying the S, T, and Z gates.',
    keyEquations: ['P(\\lambda) = \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\lambda} \\end{pmatrix}', 'S = \\sqrt{Z}', 'T = \\sqrt{S}'],
    videoIds: ['vid-phase-gate'],
    references: ['Nielsen & Chuang, Section 1.2.']
  },
  {
    id: '5.9',
    title: 'S Gate',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['5.8', '1.2'],
    objectives: [
      'Define S gate (Phase gate / sqrt(Z)): Matrix [1 0; 0 i]',
      'Effect on basis states: S|0> = |0>, S|1> = i|1>',
      'Effect on superposition: S|+> = |+i> = (|0>+i|1>)/sqrt(2)',
      'Bloch sphere interpretation: 90-degree quarter-turn around the Z-axis',
      'Understand the S^dagger gate (P(-pi/2))'
    ],
    intuition: 'The S gate is a 90-degree (quarter-turn) rotation around the Z-axis of the Bloch sphere. If you start at |+> pointing along the +X axis and apply an S gate, you rotate 90 degrees around Z to land directly on |+i>, pointing along the +Y axis! That is why S is used to convert between the X basis and the Y basis.',
    sections: [
      {
        heading: 'Matrix and Transformations',
        content: 'S = [1 0; 0 i]. Notice that S^4 = Z^2 = I. The inverse gate is S^dagger = [1 0; 0 -i], which rotates by -90 degrees.'
      }
    ],
    equations: [
      {
        label: 'S Gate Matrix',
        latex: 'S = \\begin{pmatrix} 1 & 0 \\\\ 0 & i \\end{pmatrix} = \\sqrt{Z}, \\quad S|+\\rangle = |+i\\rangle = \\frac{|0\\rangle + i|1\\rangle}{\\sqrt{2}}',
        explanation: 'Quarter-turn (pi/2) phase rotation around the Z-axis, mapping +X to +Y.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'How do you measure a qubit in the Y-basis using standard Z-measurement hardware?',
      solution: 'We need to rotate +Y (|+i>) to +Z (|0>). First apply S^dagger to rotate +Y to +X (|+>). Then apply H to rotate +X to +Z (|0>). Therefore, the circuit sequence is: apply S^dagger, then H, then measure Z!',
      derivationSteps: [
        '|+i> = (|0> + i|1>)/sqrt(2).',
        'Apply S^dagger = [[1, 0], [0, -i]]: S^dagger|+i> = (|0> + (-i*i)|1>)/sqrt(2) = (|0>+|1>)/sqrt(2) = |+>.',
        'Apply H: H|+> = |0>.',
        'Measure Z: yields 0 for |+i> and 1 for |-i>.'
      ]
    },
    commonMisconceptions: [
      'The S gate is NOT self-inverse (S^2 = Z != I). To undo an S gate, you must apply S^dagger (or three S gates: S^3 = S^dagger).'
    ],
    quickCheck: {
      question: 'What state is produced when an S gate acts on |+> = (|0>+|1>)/sqrt(2)?',
      options: ['|->', '|+i> = (|0> + i|1>)/sqrt(2)', '|0>', '|1>'],
      correctIndex: 1,
      explanation: 'S|+> = (|0> + i|1>)/sqrt(2) = |+i>, pointing along +Y.'
    },
    summary: 'The S gate S = [1 0; 0 i] rotates 90 degrees around the Z axis, mapping +X to +Y.',
    keyEquations: ['S = \\begin{pmatrix} 1 & 0 \\\\ 0 & i \\end{pmatrix}', 'S^2 = Z', 'S^\\dagger = \\begin{pmatrix} 1 & 0 \\\\ 0 & -i \\end{pmatrix}'],
    videoIds: ['vid-s-gate'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '5.10',
    title: 'T Gate',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Single-Qubit Unitary Operators',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.9'],
    objectives: [
      'Define T gate (pi/8 gate / sqrt(S)): Matrix [1 0; 0 e^(i*pi/4)]',
      'Effect on basis states: T|0> = |0>, T|1> = e^(i*pi/4)|1>',
      'Bloch sphere interpretation: 45-degree rotation around the Z-axis',
      'Explain the Gottesman-Knill theorem and why T is the universal non-Clifford gate'
    ],
    intuition: 'The T gate is arguably the most precious gate in fault-tolerant quantum computing! The Clifford gates (H, S, CNOT) can be simulated efficiently on a classical computer in polynomial time (the Gottesman-Knill theorem). To achieve true quantum advantage and full universality, you MUST have a non-Clifford gate—and the T gate is the universal golden key! Generating high-fidelity T gates through "magic state distillation" is a major focus of modern quantum error correction.',
    sections: [
      {
        heading: 'Why is it called the pi/8 gate?',
        content: 'Historical quirk: T = [1 0; 0 e^(i*pi/4)] can be factored as e^(i*pi/8) * [e^(-i*pi/8) 0; 0 e^(i*pi/8)], where pi/8 appears on the diagonal.'
      },
      {
        heading: 'Clifford vs Non-Clifford',
        content: 'Clifford group: {H, S, CNOT}. Clifford circuits are NOT universal and can be simulated classically. Adding the T gate gives the Clifford+T library, which is provably UNIVERSAL for all quantum computation (Solovay-Kitaev theorem).'
      }
    ],
    equations: [
      {
        label: 'T Gate Matrix',
        latex: 'T = \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\pi/4} \\end{pmatrix} = \\sqrt{S} = \\sqrt[4]{Z}, \\quad T^2 = S, \\quad T^4 = Z, \\quad T^8 = I',
        explanation: 'Rotates by 45 degrees (pi/4) around Z; the foundational non-Clifford universal resource.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Write the complex number e^(i*pi/4) in Cartesian form (a + bi) and verify T^2 = S.',
      solution: 'e^(i*pi/4) = cos(pi/4) + i*sin(pi/4) = 1/sqrt(2) + i/sqrt(2) = (1 + i)/sqrt(2). Squaring it: [(1 + i)/sqrt(2)]^2 = (1 + 2i + i^2)/2 = (1 + 2i - 1)/2 = (2i)/2 = i. The bottom-right entry of T^2 is i, which matches S = [1 0; 0 i] exactly!',
      derivationSteps: [
        'e^{i*pi/4} = (1 + i) / sqrt(2).',
        'Square: (1 + 2i - 1) / 2 = 2i / 2 = i.',
        'T^2 = [[1, 0], [0, i]] = S.'
      ]
    },
    commonMisconceptions: [
      'The T gate is not simply another gate; in fault-tolerant quantum computers using surface codes, Clifford gates are easy and cheap, but T gates consume over 90% of all physical hardware resources via magic state distillation!'
    ],
    quickCheck: {
      question: 'Why is the T gate so critical in quantum computation theory?',
      options: [
        'It is the only gate that consumes zero power.',
        'It provides the non-Clifford resource necessary to achieve universal fault-tolerant quantum computing.',
        'It measures all qubits at once.',
        'It replaces the CPU clock.'
      ],
      correctIndex: 1,
      explanation: 'By the Gottesman-Knill theorem, Clifford circuits alone are classically simulable; the T gate unlocks universal quantum advantage.'
    },
    summary: 'The T gate T = [1 0; 0 e^(i*pi/4)] is the foundational non-Clifford gate required for universal quantum computation.',
    keyEquations: ['T = \\begin{pmatrix} 1 & 0 \\\\ 0 & e^{i\\pi/4} \\end{pmatrix}', 'T^2 = S', 'T^4 = Z'],
    videoIds: ['vid-t-gate-universal'],
    references: ['Gottesman, D. (1998). The Heisenberg Representation of Quantum Computers.']
  },
  {
    id: '5.11',
    title: 'Rotation Gates',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.4', '5.5', '5.6', '4.5'],
    objectives: [
      'Define arbitrary rotation operators: R_n(theta) = exp(-i * theta * (n . sigma) / 2)',
      'Euler angle decomposition: Any single-qubit unitary can be decomposed as U = e^(i*alpha) Rz(beta) Ry(gamma) Rz(delta)',
      'Connect rotations to physical microwave pulses'
    ],
    intuition: 'Discrete gates like X, Y, Z, H, S, and T are all special fixed rotation angles. But in physics and variational algorithms (VQE, QAOA), we need to rotate a qubit by ANY arbitrary continuous angle theta! The rotation gates RX(theta), RY(theta), and RZ(theta) allow us to steer the Bloch vector smoothly to any coordinate on the entire sphere.',
    sections: [
      {
        heading: 'The Generator of Rotations',
        content: 'From Lie group theory, the Pauli matrices sigma_x, sigma_y, sigma_z are the generators of the SU(2) group. Rotating by angle theta around unit vector n = (nx, ny, nz) is given by R_n(theta) = cos(theta/2) I - i*sin(theta/2) (nx X + ny Y + nz Z).'
      }
    ],
    equations: [
      {
        label: 'Bloch Rotation Generator',
        latex: 'R_{\\vec{n}}(\\theta) = \\exp\\left(-i \\frac{\\theta}{2} \\vec{n}\\cdot\\vec{\\sigma}\\right) = \\cos\\left(\\frac{\\theta}{2}\\right)I - i\\sin\\left(\\frac{\\theta}{2}\\right)(n_x X + n_y Y + n_z Z)',
        explanation: 'Rotates the statevector by angle theta around axis vector n on the Bloch sphere.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Prove that Rz(2pi) = -I. Why does rotating by 360 degrees flip the sign of a quantum state?',
      solution: 'Rz(2pi) = cos(2pi/2) I - i*sin(2pi/2) Z = cos(pi) I - i*sin(pi) Z = -1 * I - 0 = -I. Qubits are spin-1/2 particles (fermions)! Rotating a spin-1/2 particle by a full 360-degree turn in physical space flips its quantum phase by -1. You must rotate it by 720 degrees (4pi) to return to +I!',
      derivationSteps: [
        'theta = 2pi.',
        'theta / 2 = pi.',
        'cos(pi) = -1, sin(pi) = 0.',
        'Rz(2pi) = -I (spin-1/2 spinor characteristic).'
      ]
    },
    commonMisconceptions: [
      'Do not forget the factor of 1/2 in the angle! An angle of theta on the 3D Bloch sphere corresponds to theta/2 inside the matrix arguments.'
    ],
    quickCheck: {
      question: 'How many degrees must a spin-1/2 qubit be rotated in space to return to its exact original mathematical state (+I)?',
      options: ['90 degrees', '180 degrees', '360 degrees', '720 degrees (4pi radians)'],
      correctIndex: 3,
      explanation: 'Spinors acquire a -1 phase factor after a 360-degree rotation, requiring 720 degrees to return to +1.'
    },
    summary: 'Rotation gates R_n(theta) continuously steer qubits on the Bloch sphere via Lie group generators.',
    keyEquations: ['R_{\\vec{n}}(\\theta) = \\cos(\\theta/2)I - i\\sin(\\theta/2)(\\vec{n}\\cdot\\vec{\\sigma})', 'R_z(2\\pi) = -I'],
    videoIds: ['vid-rotation-gates'],
    references: ['Nielsen & Chuang, Section 4.2: Single qubit operations.']
  },
  {
    id: '5.12',
    title: 'RX',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.11'],
    objectives: [
      'Define RX(theta) matrix: [cos(theta/2) -i*sin(theta/2); -i*sin(theta/2) cos(theta/2)]',
      'Verify RX(pi) = -i*X',
      'Analyze continuous amplitude transfer between |0> and |1>'
    ],
    intuition: 'RX(theta) rotates the qubit around the horizontal X-axis. As theta increases from 0 to pi, the state smoothly tips downward from the North pole |0> to the South pole |1>.',
    sections: [
      {
        heading: 'Matrix Structure',
        content: 'RX(theta) = [ cos(theta/2)  -i*sin(theta/2) ; -i*sin(theta/2)  cos(theta/2) ].\nAt theta = pi: RX(pi) = [0 -i; -i 0] = -i*X.'
      }
    ],
    equations: [
      {
        label: 'RX Rotation Matrix',
        latex: 'R_X(\\theta) = \\begin{pmatrix} \\cos(\\theta/2) & -i\\sin(\\theta/2) \\\\ -i\\sin(\\theta/2) & \\cos(\\theta/2) \\end{pmatrix}',
        explanation: 'Continuous rotation around the X-axis.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Apply RX(pi/2) to |0>. What is the resulting state?',
      solution: 'RX(pi/2)|0> = [cos(pi/4) -i*sin(pi/4); -i*sin(pi/4) cos(pi/4)] [1; 0] = [cos(pi/4); -i*sin(pi/4)] = [1/sqrt(2); -i/sqrt(2)] = (|0> - i|1>)/sqrt(2) = |-i>. It rotated 90 degrees around X down to the -Y axis!',
      derivationSteps: [
        'theta/2 = pi/4 -> cos(pi/4) = 1/sqrt(2), sin(pi/4) = 1/sqrt(2).',
        'Top row * [1; 0] = 1/sqrt(2).',
        'Bottom row * [1; 0] = -i/sqrt(2).',
        'State: |-i> along -Y axis.'
      ]
    },
    commonMisconceptions: [
      'RX(pi) is equal to -i*X, not X. The global phase -i does not affect individual measurement probabilities, but must be tracked when composing controlled gates.'
    ],
    quickCheck: {
      question: 'What is RX(pi) equal to up to a global phase?',
      options: ['Identity', 'Pauli-X', 'Pauli-Z', 'Hadamard'],
      correctIndex: 1,
      explanation: 'RX(pi) = -i * X, which is equivalent to the Pauli-X gate.'
    },
    summary: 'RX(theta) rotates statevectors around the X-axis, enabling continuous amplitude tuning.',
    keyEquations: ['R_X(\\pi) = -iX'],
    videoIds: ['vid-rx-gate'],
    references: ['Nielsen & Chuang, Section 4.2.']
  },
  {
    id: '5.13',
    title: 'RY',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.11'],
    objectives: [
      'Define RY(theta) matrix: [cos(theta/2) -sin(theta/2); sin(theta/2) cos(theta/2)]',
      'Verify RY has PURELY REAL matrix entries',
      'Understand its role in preparing arbitrary real superpositions cos(theta/2)|0> + sin(theta/2)|1>'
    ],
    intuition: 'The RY(theta) gate is unique among rotation gates because all of its matrix entries are PURELY REAL numbers (no imaginary i)! It rotates the statevector in the X-Z plane. If you start at |0> and want to prepare an arbitrary real superposition alpha|0> + beta|1>, you simply apply RY(theta) where theta = 2*atan(beta/alpha).',
    sections: [
      {
        heading: 'Matrix Structure',
        content: 'RY(theta) = [ cos(theta/2)  -sin(theta/2) ; sin(theta/2)  cos(theta/2) ].\nActing on |0>: RY(theta)|0> = cos(theta/2)|0> + sin(theta/2)|1>.\nActing on |1>: RY(theta)|1> = -sin(theta/2)|0> + cos(theta/2)|1>.'
      }
    ],
    equations: [
      {
        label: 'RY Rotation Matrix',
        latex: 'R_Y(\\theta) = \\begin{pmatrix} \\cos(\\theta/2) & -\\sin(\\theta/2) \\\\ \\sin(\\theta/2) & \\cos(\\theta/2) \\end{pmatrix}, \\quad R_Y(\\theta)|0\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right)|0\\rangle + \\sin\\left(\\frac{\\theta}{2}\\right)|1\\rangle',
        explanation: 'Purely real rotation matrix steering vectors in the X-Z plane.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Find the angle theta such that RY(theta)|0> creates an equal superposition |+> = (|0>+|1>)/sqrt(2).',
      solution: 'We want cos(theta/2) = 1/sqrt(2) and sin(theta/2) = 1/sqrt(2). This occurs at theta/2 = pi/4 -> theta = pi/2. Therefore, RY(pi/2)|0> = |+>! A 90-degree rotation around Y maps the North pole directly onto the +X axis.',
      derivationSteps: [
        'cos(theta/2) = 1/sqrt(2) -> theta/2 = 45 deg.',
        'theta = 90 deg = pi/2 rad.',
        'RY(pi/2) = [[1/sqrt(2), -1/sqrt(2)], [1/sqrt(2), 1/sqrt(2)]].',
        'RY(pi/2)|0> = [1/sqrt(2); 1/sqrt(2)] = |+>.'
      ]
    },
    commonMisconceptions: [
      'Notice that RY(pi/2)|0> = |+>, but RY is NOT the Hadamard gate! H flips the diagonal, whereas RY is a pure rotation (det(RY)=1, whereas det(H)=-1).'
    ],
    quickCheck: {
      question: 'Why is the RY gate widely used in Variational Quantum Eigensolvers (VQE)?',
      options: [
        'It requires no cryostat cooling.',
        'Its entries are purely real, keeping variational ansatz states within the real subspace.',
        'It is faster than the speed of light.',
        'It works only on 0 qubits.'
      ],
      correctIndex: 1,
      explanation: 'RY has purely real entries, making it ideal for simulating molecular wavefunctions with real orbitals.'
    },
    summary: 'RY(theta) = [cos(theta/2) -sin(theta/2); sin(theta/2) cos(theta/2)] rotates states in the X-Z plane with purely real matrix entries.',
    keyEquations: ['R_Y(\\theta)|0\\rangle = \\cos(\\theta/2)|0\\rangle + \\sin(\\theta/2)|1\\rangle'],
    videoIds: ['vid-ry-gate'],
    references: ['Nielsen & Chuang, Section 4.2.']
  },
  {
    id: '5.14',
    title: 'RZ',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.11'],
    objectives: [
      'Define RZ(theta) matrix: [e^(-i*theta/2) 0; 0 e^(i*theta/2)]',
      'Differentiate RZ(theta) from Phase gate P(theta)',
      'Explain "virtual Z gates" in superconducting hardware'
    ],
    intuition: 'RZ(theta) rotates states around the vertical Z-axis by angle theta. It applies a phase of -theta/2 to |0> and +theta/2 to |1>. In modern superconducting quantum computers, RZ gates are executed with ZERO error and ZERO physical pulse duration! The hardware simply shifts the phase coordinate of the local microwave oscillator in software (a "virtual Z gate").',
    sections: [
      {
        heading: 'Matrix Structure',
        content: 'RZ(theta) = [ e^(-i*theta/2) 0 ; 0 e^(i*theta/2) ] = e^(-i*theta/2) * [ 1 0 ; 0 e^(i*theta) ] = e^(-i*theta/2) * P(theta).\nRZ differs from the Phase gate P(theta) only by an unobservable global phase e^(-i*theta/2).'
      }
    ],
    equations: [
      {
        label: 'RZ Rotation Matrix',
        latex: 'R_Z(\\theta) = \\begin{pmatrix} e^{-i\\theta/2} & 0 \\\\ 0 & e^{i\\theta/2} \\end{pmatrix} = e^{-i\\theta/2} P(\\theta)',
        explanation: 'Symmetric phase rotation around the Z-axis.'
      }
    ],
    diagramType: 'bloch-sphere',
    workedExample: {
      problem: 'Evaluate RZ(pi) and compare with Pauli-Z.',
      solution: 'RZ(pi) = [e^(-i*pi/2) 0; 0 e^(i*pi/2)] = [-i 0; 0 i] = -i * [1 0; 0 -1] = -i * Z. RZ(pi) is identical to Pauli-Z up to a global phase of -i.',
      derivationSteps: [
        'e^{-i*pi/2} = -i.',
        'e^{i*pi/2} = i.',
        'RZ(pi) = [[-i, 0], [0, i]] = -i * [[1, 0], [0, -1]] = -i * Z.'
      ]
    },
    commonMisconceptions: [
      'RZ gates take zero nanoseconds on transmon hardware (virtual Z), meaning you can use as many RZ gates as you want without adding physical decoherence noise!'
    ],
    quickCheck: {
      question: 'How are RZ gates implemented on modern superconducting quantum processors (like IBM Quantum)?',
      options: [
        'By heating the dilution refrigerator',
        'In software by updating the phase reference of the microwave drive with zero duration and zero error',
        'By moving physical wires',
        'By measurement'
      ],
      correctIndex: 1,
      explanation: 'Virtual Z gates are implemented in software by phase-shifting subsequent microwave control pulses.'
    },
    summary: 'RZ(theta) rotates states around the Z-axis and is implemented with zero physical duration in software on modern hardware.',
    keyEquations: ['R_Z(\\theta) = \\begin{pmatrix} e^{-i\\theta/2} & 0 \\\\ 0 & e^{i\\theta/2} \\end{pmatrix}', 'R_Z(\\theta) = e^{-i\\theta/2}P(\\theta)'],
    videoIds: ['vid-rz-gate'],
    references: ['McKay et al. (2017). Efficient Z gates for quantum computing. Phys. Rev. A.']
  },
  {
    id: '5.15',
    title: 'Controlled Gates',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.2', '1.26'],
    objectives: [
      'Understand the controlled-U principle: If control=0 do nothing, if control=1 apply U',
      'Construct controlled-U 4x4 matrix: CU = |0><0| (x) I + |1><1| (x) U',
      'Recognize controlled gates as the source of multi-qubit entanglement'
    ],
    intuition: 'A single qubit can only talk to itself. To build a powerful computer, qubits must communicate and influence each other. A Controlled Gate uses one qubit (the "control") to dictate what happens to another qubit (the "target"). If the control qubit is 0, the target qubit is left completely untouched. If the control qubit is 1, a unitary gate U is applied to the target.',
    sections: [
      {
        heading: 'Mathematical Construction of Controlled-U',
        content: 'CU = |0><0| \\otimes I + |1><1| \\otimes U = \\begin{pmatrix} I & 0 \\\\ 0 & U \\end{pmatrix}.\nIn block matrix form, the top-left 2x2 block is the Identity, and the bottom-right 2x2 block is the gate U!'
      }
    ],
    equations: [
      {
        label: 'General Controlled-U Matrix',
        latex: 'CU = |0\\rangle\\langle 0| \\otimes I + |1\\rangle\\langle 1| \\otimes U = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & u_{00} & u_{01} \\\\ 0 & 0 & u_{10} & u_{11} \\end{pmatrix}',
        explanation: 'Applies gate U to target qubit conditionally on control qubit being in state |1>.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Construct the 4x4 matrix for the Controlled-Z (CZ) gate where Z = [1 0; 0 -1].',
      solution: 'Top-left block is I = [1 0; 0 1]. Bottom-right block is Z = [1 0; 0 -1]. Combining blocks: CZ = [1 0 0 0; 0 1 0 0; 0 0 1 0; 0 0 0 -1]. It flips the phase ONLY when both qubits are 1 (|11> -> -|11>)!',
      derivationSteps: [
        'CZ|00> = |00>.',
        'CZ|01> = |01>.',
        'CZ|10> = |10>.',
        'CZ|11> = -|11>.',
        'Matrix diagonal: diag(1, 1, 1, -1).'
      ]
    },
    commonMisconceptions: [
      'If the control qubit is in a superposition (|0>+|1>)/sqrt(2), it does NOT "choose" one branch. Both branches happen simultaneously, entangling the control and target qubits!'
    ],
    quickCheck: {
      question: 'What is the action of a Controlled-U gate when the control qubit is in state |0>?',
      options: ['Applies U to target', 'Leaves target completely unchanged (Identity)', 'Flips both qubits', 'Destroys the target'],
      correctIndex: 1,
      explanation: 'When control is |0>, CU applies the Identity operator to the target.'
    },
    summary: 'Controlled-U gates apply U to the target qubit conditionally on the control qubit, forming 4x4 block diagonal matrices.',
    keyEquations: ['CU = |0\\rangle\\langle 0|\\otimes I + |1\\rangle\\langle 1|\\otimes U'],
    videoIds: ['vid-controlled-gates'],
    references: ['Nielsen & Chuang, Section 4.3: Controlled operations.']
  },
  {
    id: '5.16',
    title: 'CNOT',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.15', '5.4'],
    objectives: [
      'Define CNOT (Controlled-NOT / CX) gate',
      'Matrix representation: 4x4 permutation matrix',
      'Action on computational basis: |00>->|00>, |01>->|01>, |10>->|11>, |11>->|10>',
      'Action as XOR logic: |c>|t> -> |c>|c XOR t>',
      'Explain phase kickback on target |->: CNOT|c>|-> = (-1)^c |c>|->'
    ],
    intuition: 'The CNOT gate is the workhorse of quantum computation! It is the quantum equivalent of the classical XOR gate. If the control qubit is 0, the target is untouched. If the control qubit is 1, the target qubit flips (NOT). CNOT is the primary gate used to create entanglement between qubits across all quantum processors.',
    sections: [
      {
        heading: 'CNOT Matrix Representation',
        content: 'CNOT = [ 1 0 0 0 ; 0 1 0 0 ; 0 0 0 1 ; 0 0 1 0 ].\nNotice that CNOT^2 = I (applying CNOT twice returns the original state).'
      },
      {
        heading: 'Phase Kickback in CNOT',
        content: 'What happens if the target is in the superposition state |-> = (|0>-|1>)/sqrt(2)?\nIf control = 0: target stays |->.\nIf control = 1: target flips to -|->.\nResult: CNOT|c>|-> = (-1)^c |c>|->. The state of the target qubit NEVER changed, but the control qubit acquired a phase flip! The target "kicked" its phase back to the control!'
      }
    ],
    equations: [
      {
        label: 'CNOT Matrix and XOR Action',
        latex: '\\text{CNOT} = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 0 & 0 & 1 & 0 \\end{pmatrix}, \\quad \\text{CNOT}|c\\rangle|t\\rangle = |c\\rangle|c \\oplus t\\rangle',
        explanation: 'c is control bit, t is target bit, oplus is addition modulo 2 (XOR).'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Apply CNOT to the state |psi> = (1/sqrt(2))(|0>+|1>) \\otimes |0> = (|00> + |10>)/sqrt(2). What is the output state?',
      solution: 'CNOT|00> = |00>. CNOT|10> = |11>. Total state: (|00> + |11>)/sqrt(2) = |Phi+>. The CNOT turned a product state into the maximally entangled Bell state!',
      derivationSteps: [
        'Input: (|00> + |10>) / sqrt(2).',
        'Term 1: CNOT|00> = |00>.',
        'Term 2: CNOT|10> = |11>.',
        'Output: (|00> + |11>) / sqrt(2) = |Phi+>.'
      ]
    },
    commonMisconceptions: [
      'Students often think CNOT only affects the target qubit. Phase kickback proves that CNOT can fundamentally alter the state of the control qubit as well!'
    ],
    quickCheck: {
      question: 'What is the action of a CNOT gate on the basis state |10>?',
      options: ['|10>', '|01>', '|11>', '|00>'],
      correctIndex: 2,
      explanation: 'Control is 1, so target 0 flips to 1, producing |11>.'
    },
    summary: 'The CNOT gate computes |c, t> -> |c, c XOR t> and is the universal 2-qubit entangling gate.',
    keyEquations: ['\\text{CNOT}|c, t\\rangle = |c, c \\oplus t\\rangle', '\\text{CNOT}^2 = I'],
    videoIds: ['vid-cnot-gate'],
    references: ['Barenco et al. (1995). Elementary gates for quantum computation. Phys. Rev. A.']
  },
  {
    id: '5.17',
    title: 'Controlled-Z',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.15', '5.16'],
    objectives: [
      'Define Controlled-Z (CZ) gate: Matrix diag(1, 1, 1, -1)',
      'Analyze complete symmetry between control and target: CZ_12 = CZ_21',
      'Convert between CNOT and CZ using Hadamards: CNOT = (I (x) H) * CZ * (I (x) H)'
    ],
    intuition: 'In a CNOT gate, the control and target have distinct roles: one controls, and one flips. But in a Controlled-Z (CZ) gate, the operation is COMPLETELY SYMMETRIC! It applies a -1 phase factor if and only if BOTH qubits are in state 1 (|11> -> -|11>). It doesn\'t matter which qubit you call the control and which you call the target!',
    sections: [
      {
        heading: 'The Symmetric Matrix',
        content: 'CZ = diag(1, 1, 1, -1). CZ|00> = |00>, CZ|01> = |01>, CZ|10> = |10>, CZ|11> = -|11>.\nBecause the matrix is completely symmetric across its diagonal, qubit 1 controls qubit 2 in the exact same way qubit 2 controls qubit 1.'
      },
      {
        heading: 'CNOT from CZ',
        content: 'Because H * Z * H = X, we can convert a CZ gate into a CNOT gate simply by sandwiching the target qubit between two Hadamard gates: CNOT = (I \\otimes H) * CZ * (I \\otimes H).'
      }
    ],
    equations: [
      {
        label: 'Controlled-Z Matrix and Equivalence',
        latex: '\\text{CZ} = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & -1 \\end{pmatrix}, \\quad \\text{CNOT}_{12} = (I \\otimes H) \\text{CZ}_{12} (I \\otimes H)',
        explanation: 'CZ is symmetric between both qubits and converts directly to CNOT via Hadamard conjugation.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Prove that CZ_12 = CZ_21 by writing the truth table for both.',
      solution: 'CZ_12: |00>->|00>, |01>->|01>, |10>->|10>, |11>->-|11>.\nCZ_21 (qubit 2 control, qubit 1 target): |00>->|00>, |01>->|01>, |10>->|10>, |11>->-|11>.\nThe output states are identical for all 4 computational basis inputs. Thus CZ is fully symmetric!',
      derivationSteps: [
        'CZ action: |x, y> -> (-1)^{xy} |x, y>.',
        'Product xy is commutative: xy = yx.',
        '(-1)^{xy} = (-1)^{yx}.',
        'Therefore CZ_12 = CZ_21.'
      ]
    },
    commonMisconceptions: [
      'In superconducting quantum architectures (like Google Sycamore), CZ is the native hardware entangling gate; CNOT is synthesized by adding Hadamards.'
    ],
    quickCheck: {
      question: 'Which basis state acquires a -1 phase under the Controlled-Z (CZ) gate?',
      options: ['|00>', '|01>', '|10>', '|11>'],
      correctIndex: 3,
      explanation: 'CZ only modifies the state when both qubits are 1: CZ|11> = -|11>.'
    },
    summary: 'The Controlled-Z gate diag(1, 1, 1, -1) is fully symmetric and converts to CNOT via Hadamard conjugation.',
    keyEquations: ['\\text{CZ} = \\text{diag}(1, 1, 1, -1)', '\\text{CNOT} = (I \\otimes H)\\text{CZ}(I \\otimes H)'],
    videoIds: ['vid-cz-gate'],
    references: ['Nielsen & Chuang, Section 4.3.']
  },
  {
    id: '5.18',
    title: 'SWAP',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['5.16'],
    objectives: [
      'Define SWAP gate: Swaps states of two qubits (|a, b> -> |b, a>)',
      'Matrix representation of SWAP',
      'Synthesize SWAP using 3 CNOT gates: SWAP = CNOT_12 * CNOT_21 * CNOT_12',
      'Understand routing constraints on quantum processor topologies'
    ],
    intuition: 'On a real quantum chip, qubits are laid out on a physical grid, and gates can only execute between adjacent neighboring qubits. If qubit 0 needs to interact with qubit 5, how do they talk? You must use SWAP gates to physically walk the state of qubit 0 across the chip to sit next to qubit 5! SWAP exchanges the quantum states of two qubits perfectly.',
    sections: [
      {
        heading: 'Matrix Structure',
        content: 'SWAP = [ 1 0 0 0 ; 0 0 1 0 ; 0 1 0 0 ; 0 0 0 1 ].\nAction: SWAP|00> = |00>, SWAP|01> = |10>, SWAP|10> = |01>, SWAP|11> = |11>.'
      },
      {
        heading: 'The 3-CNOT Identity',
        content: 'You can build a SWAP gate out of 3 alternating CNOT gates:\n1. CNOT_12 (control 1, target 2)\n2. CNOT_21 (control 2, target 1)\n3. CNOT_12 (control 1, target 2)'
      }
    ],
    equations: [
      {
        label: 'SWAP Matrix and 3-CNOT Decomposition',
        latex: '\\text{SWAP} = \\begin{pmatrix} 1 & 0 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 1 \\end{pmatrix} = \\text{CNOT}_{12} \\text{CNOT}_{21} \\text{CNOT}_{12}',
        explanation: 'Exchanges the states of two qubits using 3 alternating CNOT gates.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Trace the 3-CNOT sequence on input state |10> to verify it produces |01>.',
      solution: 'Start: |10>.\nGate 1: CNOT_12 (ctrl 1, tgt 2). Since q1=1, q2 flips from 0 to 1 -> state is |11>.\nGate 2: CNOT_21 (ctrl 2, tgt 1). Since q2=1, q1 flips from 1 to 0 -> state is |01>.\nGate 3: CNOT_12 (ctrl 1, tgt 2). Since q1=0, q2 does not flip -> state is |01>.\nResult: |10> became |01>! The states swapped.',
      derivationSteps: [
        '|10> -(CNOT_12)-> |11>.',
        '|11> -(CNOT_21)-> |01>.',
        '|01> -(CNOT_12)-> |01>.',
        'Final state: |01>. Verification complete.'
      ]
    },
    commonMisconceptions: [
      'SWAP does not move the physical atoms; it swaps the quantum statevectors between the two physical locations.'
    ],
    quickCheck: {
      question: 'How many CNOT gates are required to implement a SWAP gate?',
      options: ['1', '2', '3 alternating CNOT gates', '4'],
      correctIndex: 2,
      explanation: 'SWAP = CNOT_12 * CNOT_21 * CNOT_12 (3 alternating CNOTs).'
    },
    summary: 'The SWAP gate exchanges the states of two qubits and decomposes into 3 alternating CNOT gates.',
    keyEquations: ['\\text{SWAP}|a, b\\rangle = |b, a\\rangle', '\\text{SWAP} = \\text{CNOT}_{12}\\text{CNOT}_{21}\\text{CNOT}_{12}'],
    videoIds: ['vid-swap-gate'],
    references: ['Nielsen & Chuang, Section 1.3.']
  },
  {
    id: '5.19',
    title: 'Toffoli',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Continuous Rotations & Controlled Gates',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.16', '4.13'],
    objectives: [
      'Define Toffoli (CCNOT / CCX) gate: 3-qubit gate flipping target if BOTH controls are 1',
      'Matrix representation: 8x8 permutation matrix',
      'Explain universal classical computation: Computing AND, NAND, OR reversibly',
      'Analyze decomposition into 2-qubit CNOT and single-qubit T gates'
    ],
    intuition: 'The Toffoli gate is the heavyweight champion of classical reversible logic. It has two controls and one target. If both controls are 1, the target flips; otherwise, nothing happens. In 1980, Tommaso Toffoli proved that this single gate is universal for all classical computation! In quantum algorithms, Toffoli gates are used to build quantum arithmetic adders, multipliers, and oracle circuits.',
    sections: [
      {
        heading: 'Action on 3 Qubits',
        content: 'Toffoli |c1, c2, t> = |c1, c2, t XOR (c1 AND c2)>.\nOnly one basis state is flipped: |110> <-> |111>. All other 6 basis states remain completely unchanged!'
      },
      {
        heading: 'Decomposition into 2-Qubit Gates',
        content: 'Physical hardware cannot execute 3-qubit gates directly. A Toffoli gate must be compiled into a sequence of 6 CNOT gates and several single-qubit T and T^dagger gates.'
      }
    ],
    equations: [
      {
        label: 'Toffoli Transformation Rule',
        latex: '\\text{CCNOT}|c_1, c_2, t\\rangle = |c_1, c_2, t \\oplus (c_1 \\cdot c_2)\\rangle',
        explanation: 'The target bit t flips if and only if both control bits c1 and c2 are 1.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'How do you configure a Toffoli gate to compute the classical NAND gate (which is universal classically)?',
      solution: 'Set the target qubit initially to |1>. The output target will be 1 XOR (c1 AND c2) = NOT (c1 AND c2) = c1 NAND c2! Thus, Toffoli with target initialized to 1 computes the NAND function reversibly.',
      derivationSteps: [
        'Input: |c1, c2, 1>.',
        'Target output: 1 XOR (c1 * c2).',
        'When c1=1, c2=1: 1 XOR 1 = 0.',
        'Otherwise: 1 XOR 0 = 1.',
        'Truth table matches NAND: (1,1)->0, all others->1.'
      ]
    },
    commonMisconceptions: [
      'Toffoli is universal for classical reversible logic, but is NOT universal for quantum computing on its own because it cannot create superpositions (it only permutes basis states).'
    ],
    quickCheck: {
      question: 'Which computational basis states are swapped by the Toffoli gate?',
      options: ['|000> and |111>', '|110> and |111>', '|100> and |001>', '|010> and |101>'],
      correctIndex: 1,
      explanation: 'Toffoli flips the target only when both controls are 1, swapping |110> and |111>.'
    },
    summary: 'The Toffoli (CCNOT) gate is universal for classical computation and serves as the backbone of quantum arithmetic.',
    keyEquations: ['\\text{CCX}|1, 1, t\\rangle = |1, 1, \\neg t\\rangle'],
    videoIds: ['vid-toffoli-gate'],
    references: ['Toffoli, T. (1980). Reversible computing. Technical Memo MIT.']
  },
  {
    id: '5.20',
    title: 'Multi-Qubit Operations',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Universality, Reversibility & Circuit Notation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.26', '5.16'],
    objectives: [
      'Compute tensor products of gates: U_total = U1 (x) U2',
      'Construct arbitrary multi-qubit matrices in composite Hilbert spaces',
      'Understand parallel gate execution across separate wires'
    ],
    intuition: 'When you have a 3-qubit circuit and apply a Hadamard to qubit 0 while applying an X gate to qubit 1 and leaving qubit 2 idle, what is the total 8x8 matrix? It is the tensor product of the three individual operations: H \\otimes X \\otimes I! Understanding how gates tensor together is key to reading full quantum circuit diagrams.',
    sections: [
      {
        heading: 'Parallel Operations as Tensor Products',
        content: 'If gate A acts on qubit 1 and gate B acts on qubit 2, the combined operation is A \\otimes B. For n qubits, any column of independent gates is evaluated as U1 \\otimes U2 \\otimes ... \\otimes Un.'
      }
    ],
    equations: [
      {
        label: 'Parallel Gate Composition',
        latex: 'U_{\\text{total}} = U_1 \\otimes U_2 \\otimes \\cdots \\otimes U_n, \\quad \\dim(U_{\\text{total}}) = 2^n \\times 2^n',
        explanation: 'Combines independent single-qubit gates operating simultaneously on parallel circuit wires.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compute the 4x4 matrix for H \\otimes X.',
      solution: 'H = (1/sqrt(2)) [1 1; 1 -1], X = [0 1; 1 0]. H \\otimes X = (1/sqrt(2)) [1*X 1*X; 1*X -1*X] = (1/sqrt(2)) [0 1 0 1; 1 0 1 0; 0 1 0 -1; 1 0 -1 0].',
      derivationSteps: [
        'Top-left: 1 * X = [[0, 1], [1, 0]].',
        'Top-right: 1 * X = [[0, 1], [1, 0]].',
        'Bottom-left: 1 * X = [[0, 1], [1, 0]].',
        'Bottom-right: -1 * X = [[0, -1], [-1, 0]].',
        'Scale by 1/sqrt(2).'
      ]
    },
    commonMisconceptions: [
      'Gates executing at the same horizontal time step on different wires execute concurrently in parallel, not sequentially.'
    ],
    quickCheck: {
      question: 'What is the matrix dimension of a parallel gate layer acting on 6 qubits?',
      options: ['6 x 6', '12 x 12', '36 x 36', '64 x 64 (2^6 x 2^6)'],
      correctIndex: 3,
      explanation: 'An operation on 6 qubits is represented by a 2^6 x 2^6 = 64 x 64 unitary matrix.'
    },
    summary: 'Parallel gate execution across multiple qubits is mathematically computed via the tensor product U1 \\otimes U2.',
    keyEquations: ['U = \\bigotimes_{i=1}^n U_i'],
    videoIds: ['vid-multi-qubit-ops'],
    references: ['Nielsen & Chuang, Section 4.1.']
  },
  {
    id: '5.21',
    title: 'Gate Universality',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Universality, Reversibility & Circuit Notation',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['5.7', '5.10', '5.16'],
    objectives: [
      'Define quantum computational universality',
      'State the Barenco et al. theorem: Single-qubit gates + CNOT are universal',
      'Explain the Solovay-Kitaev theorem: The discrete set {H, S, T, CNOT} approximates ANY unitary with polylogarithmic overhead'
    ],
    intuition: 'In classical computing, NAND is universal: you can build an entire supercomputer using only NAND gates. What is the equivalent universal building block in quantum computing? Barenco et al. proved that ANY n-qubit unitary gate can be decomposed using only single-qubit rotations and the 2-qubit CNOT gate! Furthermore, the discrete set {H, S, T, CNOT} can approximate ANY arbitrary quantum algorithm to arbitrary precision.',
    sections: [
      {
        heading: 'Universal Gate Sets',
        content: '1. Exact Continuous Universality: All single-qubit unitaries U(2) + CNOT.\n2. Fault-Tolerant Discrete Universality (Clifford + T): {H, S, T, CNOT}.\nThe Solovay-Kitaev Theorem guarantees that approximating an arbitrary gate to precision epsilon requires only O(log^c(1/epsilon)) gates from the Clifford+T library!'
      }
    ],
    equations: [
      {
        label: 'Solovay-Kitaev Complexity Bound',
        latex: 'N_{\\text{gates}} = \\mathcal{O}\\left(\\log^c\\left(\\frac{1}{\\varepsilon}\\right)\\right) \\quad (c \\approx 3.97)',
        explanation: 'Any single-qubit gate can be approximated to precision epsilon with efficient logarithmic gate overhead.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why can classical computers not simply assemble arbitrary analog rotations without error, while quantum computers can using fault-tolerant discrete sets?',
      solution: 'Analog computing suffers from continuous error accumulation: errors compound exponentially. The Solovay-Kitaev theorem allows quantum computers to map arbitrary continuous rotations to discrete sequences of fault-tolerant Clifford+T gates that can be actively protected by quantum error correction codes.',
      derivationSteps: [
        'Analog rotation: angle theta has continuous error delta_theta.',
        'Discrete set {H, S, T}: gates are fault-tolerantly protected.',
        'Sequence of length O(log^c(1/eps)) approximates theta to within eps.',
        'Enables error-corrected, fault-tolerant universal computation.'
      ]
    },
    commonMisconceptions: [
      'CNOT alone is not universal, and single-qubit gates alone are not universal. You MUST have at least one 2-qubit entangling gate (like CNOT or CZ) combined with single-qubit gates.'
    ],
    quickCheck: {
      question: 'Which gate library forms the standard discrete universal gate set for fault-tolerant quantum computing?',
      options: ['{AND, OR, NOT}', '{H, S, T, CNOT} (Clifford + T)', '{X, Y, Z}', '{Identity only}'],
      correctIndex: 1,
      explanation: 'The Clifford+T library {H, S, T, CNOT} is universal for quantum computation.'
    },
    summary: 'Single-qubit gates plus CNOT are universal; the Clifford+T set efficiently approximates any quantum operation.',
    keyEquations: ['\\{H, S, T, \\text{CNOT}\\} \\implies \\text{Universal Quantum Computing}'],
    videoIds: ['vid-gate-universality'],
    references: ['Barenco et al. (1995), Phys. Rev. A.', 'Dawson & Nielsen (2006). The Solovay-Kitaev algorithm.']
  },
  {
    id: '5.22',
    title: 'Reversible Quantum Circuits',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Universality, Reversibility & Circuit Notation',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['4.13', '5.21'],
    objectives: [
      'Design reversible arithmetic circuits: Half-adder and Full-adder',
      'Understand ancilla qubits and garbage registers',
      'Explain "Uncomputation": Resetting ancilla qubits by running the inverse circuit'
    ],
    intuition: 'When computing a classical function f(x) inside a quantum computer, intermediate scratchpad registers (called ancilla qubits) accumulate garbage bits. If you leave these garbage bits entangled with the system, they destroy quantum interference! To solve this, quantum algorithms use a brilliant trick called Uncomputation: compute the result, copy the answer out with CNOT, and then run the scratchpad computation completely backward to clean the ancilla qubits back to |0>!',
    sections: [
      {
        heading: 'The Uncomputation Trick',
        content: '1. Compute: |x>|0>|0> -> |x>|g(x)>|0> (where g(x) is intermediate garbage).\n2. Copy output: CNOT targets the answer register: |x>|g(x)>|f(x)>.\n3. Uncompute: Run U_g^dagger to undo the garbage: |x>|0>|f(x)>.\nThe ancilla qubits are now cleanly disentangled and restored to |0>, ready for reuse!'
      }
    ],
    equations: [
      {
        label: 'Uncomputation Sequence',
        latex: '|x\\rangle|0\\rangle|0\\rangle \\xrightarrow{U} |x\\rangle|g(x)\\rangle|0\\rangle \\xrightarrow{\\text{CNOT}} |x\\rangle|g(x)\\rangle|f(x)\\rangle \\xrightarrow{U^\\dagger} |x\\rangle|0\\rangle|f(x)\\rangle',
        explanation: 'Restores scratchpad ancilla qubits to |0> to prevent unwanted entanglement from destroying interference.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Construct a reversible half-adder on 3 qubits that takes inputs (a, b, 0) and outputs (a, Sum, Carry).',
      solution: 'Sum = a XOR b. Carry = a AND b. Step 1: Apply CNOT(a -> b). Qubit b now holds a XOR b (the Sum!). Step 2: Apply Toffoli(a, b -> Carry). Qubit c now holds a AND b (the Carry!). Total gates: 1 CNOT and 1 Toffoli.',
      derivationSteps: [
        'Inputs: a, b, c=0.',
        'Toffoli(a, b -> c): c becomes a AND b (Carry).',
        'CNOT(a -> b): b becomes a XOR b (Sum).',
        'Outputs: a, Sum, Carry (fully reversible).'
      ]
    },
    commonMisconceptions: [
      'You cannot simply "measure and reset" ancilla qubits in the middle of a coherent algorithm without causing wavefunction collapse; uncomputation must be unitary.'
    ],
    quickCheck: {
      question: 'Why is "uncomputation" used in quantum algorithms like Grover and Shor?',
      options: [
        'To reduce processor heat',
        'To disentangle scratchpad ancilla qubits and reset them to |0> without destroying quantum interference',
        'To double the clock speed',
        'To make the code shorter'
      ],
      correctIndex: 1,
      explanation: 'Uncomputation disentangles intermediate garbage registers, protecting quantum phase coherence.'
    },
    summary: 'Uncomputation unitarily clears ancilla qubits, preventing entangled garbage from suppressing interference.',
    keyEquations: ['U^\\dagger \\cdot \\text{CNOT} \\cdot U = \\text{Clean Output}'],
    videoIds: ['vid-uncomputation'],
    references: ['Bennett, C. H. (1989). Time/space trade-offs for reversible computation. SIAM J. Comput.']
  },
  {
    id: '5.23',
    title: 'Circuit Notation',
    level: 5,
    levelName: 'Level 5 — Quantum Gates',
    module: 'Universality, Reversibility & Circuit Notation',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['5.1', '5.16', '5.19'],
    objectives: [
      'Read quantum circuit diagrams: Horizontal wires, time axis, gate symbols, control dots, target crosses',
      'Distinguish quantum wires (single line) from classical wires (double line)',
      'Map circuit diagrams directly to OpenQASM code and matrix operations'
    ],
    intuition: 'Quantum circuit diagrams are the sheet music of quantum computation! Each horizontal line represents a qubit wire evolving forward in time from left to right. Boxes represent single-qubit gates (H, X, Z), filled dots represent controls, crossed circles represent CNOT targets, and meters represent measurement.',
    sections: [
      {
        heading: 'Standard Circuit Symbols',
        content: '• Single Wire: Quantum state |psi> (qubit).\n• Double Wire: Classical measurement bit (0 or 1).\n• Box [H]: Single-qubit gate.\n• Solid dot connected to circle with cross: CNOT gate.\n• Solid dot connected to solid dot: Controlled-Z (CZ) gate.\n• Meter icon: Measurement collapsing qubit onto classical wire.'
      },
      {
        heading: 'OpenQASM Equivalence',
        content: 'Every visual circuit compiles directly to OpenQASM code:\n`h q[0];`\n`cx q[0], q[1];`\n`measure q -> c;`'
      }
    ],
    equations: [
      {
        label: 'Circuit Time Ordering',
        latex: '\\text{Circuit: } \\quad -[A]-[B]- \\quad \\Longleftrightarrow \\quad \\text{Operator: } B \\cdot A',
        explanation: 'Circuits execute left-to-right, corresponding to matrix operators multiplying right-to-left.'
      }
    ],
    diagramType: 'quantum-gate',
    workedExample: {
      problem: 'Write the OpenQASM 2.0 code that prepares the Bell state |Phi+> and measures both qubits.',
      solution: '```qasm\nOPENQASM 2.0;\ninclude "qelib1.inc";\nqreg q[2];\ncreg c[2];\nh q[0];\ncx q[0], q[1];\nmeasure q -> c;\n```',
      derivationSteps: [
        'Declare 2 quantum registers q[2] and 2 classical bits c[2].',
        'Apply Hadamard to qubit 0: h q[0].',
        'Apply CNOT from q[0] to q[1]: cx q[0], q[1].',
        'Measure: measure q -> c.'
      ]
    },
    commonMisconceptions: [
      'Remember that circuits flow left-to-right, but matrix equations act right-to-left: the gate on the left hits the state first!'
    ],
    quickCheck: {
      question: 'In OpenQASM, what instruction corresponds to a CNOT gate with control qubit 0 and target qubit 1?',
      options: ['cnot(0, 1);', 'cx q[0], q[1];', 'gate CNOT 0 1;', 'xor q[0], q[1];'],
      correctIndex: 1,
      explanation: 'In OpenQASM 2.0/3.0, the CNOT gate is written as `cx control, target;`.'
    },
    summary: 'You have completed Level 5 Quantum Gates! You have mastered single-qubit unitaries, Pauli matrices, rotations, controlled gates, universality, and circuit notation. You are now prepared for Level 6: Multi-Qubit Quantum Computing.',
    keyEquations: ['U_{\\text{circuit}} = G_k \\cdots G_2 G_1', '\\text{cx q[0], q[1];}'],
    videoIds: ['vid-circuit-notation'],
    references: ['Cross et al. (2017). Open Quantum Assembly Language (OpenQASM). arXiv:1707.03429.']
  }
];

