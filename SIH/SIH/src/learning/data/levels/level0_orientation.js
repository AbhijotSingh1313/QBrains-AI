/**
 * Level 0: Orientation & Foundations (Lessons 0.1 - 0.8)
 */

export const LEVEL_0_LESSONS = [
  {
    id: '0.1',
    title: 'What is Quantum Computing?',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['Basic high school arithmetic'],
    objectives: [
      'Define quantum computing in terms of information physics',
      'Distinguish between physical quantum phenomena and computational paradigms',
      'Understand why physics sets the ultimate boundaries of computation'
    ],
    intuition: 'Every classical computer you have ever used operates on binary logic switches: a transistor is either on or off, representing a 0 or a 1. Quantum computing fundamentally reconceptualizes information not as abstract arithmetic, but as a physical property of nature. By harnessing the physical laws that govern atoms, electrons, and photons—namely superposition, interference, and entanglement—we can perform computational transformations that no classical computer could execute within the age of the universe.',
    sections: [
      {
        heading: 'Information is Physical',
        content: 'Rolf Landauer famously stated that "information is physical." When classical computers process data, they manipulate electric currents in silicon semiconductors. Quantum computers, in contrast, store and process information directly within quantum physical systems—such as single trapped ions, superconducting electrical circuits cooled near absolute zero, or polarized photons. Because the fundamental laws of nature at microscopic scales are quantum mechanical rather than classical, a computer built on quantum mechanics can explore multidimensional computational spaces in fundamentally new ways.'
      },
      {
        heading: 'The Three Pillars: Superposition, Interference, Entanglement',
        content: 'A quantum computer derives its power from three core principles of nature: (1) Superposition, where a statevector can exist in linear combinations of basis states; (2) Interference, where probability amplitudes can constructively reinforce correct answers while destructively canceling incorrect ones; and (3) Entanglement, where multiple quantum particles share non-local correlations that cannot be factored into independent subsystems.'
      }
    ],
    equations: [
      {
        label: 'Landauer Principle of Information Erasure',
        latex: '\\Delta E \\ge k_B T \\ln(2)',
        explanation: 'Erasing one bit of classical information dissipates a minimum amount of thermodynamic heat, linking computation fundamentally to physical thermodynamics.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Suppose a classical register has 3 bits, while a quantum register has 3 qubits. How many discrete values can each register represent simultaneously?',
      solution: 'A classical 3-bit register holds exactly ONE 3-bit number at any instant (e.g. 101). A quantum 3-qubit register in superposition simultaneously represents a linear combination of all 2^3 = 8 computational basis states (|000> through |111>).',
      derivationSteps: [
        'Classical: 3 bits can be in 1 of 2^3 = 8 states, but holds only 1 state at a time.',
        'Quantum: 3 qubits exist in state |psi> = sum_{x=0}^{7} c_x |x>.',
        'Conclusion: All 8 amplitudes c_x evolve concurrently under unitary operations.'
      ]
    },
    commonMisconceptions: [
      'Quantum computers do not simply "try every answer in parallel." They evolve probability amplitudes so that destructive interference cancels incorrect paths while constructive interference enhances the true solution.'
    ],
    quickCheck: {
      question: 'Why can quantum computers solve certain problems faster than classical computers?',
      options: [
        'Their processors have a higher clock frequency in gigahertz.',
        'They exploit quantum interference and entanglement to cancel wrong paths and amplify correct solutions.',
        'They use optical fiber cables instead of copper wires.',
        'They store infinitely many floating-point numbers in a single memory chip.'
      ],
      correctIndex: 1,
      explanation: 'Quantum advantage is not driven by clock speed, but by computational complexity: quantum interference systematically cancels incorrect candidate states while amplifying the probability of measuring the correct answer.'
    },
    summary: 'Quantum computing is computation governed by the laws of quantum mechanics. It transforms information processing by utilizing superposition, interference, and entanglement.',
    keyEquations: ['\\Delta E \\ge k_B T \\ln(2)', '|\\psi\\rangle = \\sum_{x} c_x |x\\rangle'],
    videoIds: ['vid-intro-qc'],
    references: ['Nielsen & Chuang, Quantum Computation and Quantum Information, Chapter 1']
  },
  {
    id: '0.2',
    title: 'Why Quantum Computing?',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['0.1'],
    objectives: [
      'Understand exponential scaling in physical simulation',
      'Identify problems where classical algorithms hit polynomial or exponential bottlenecks',
      'Recognize Richard Feynman\'s original 1981 motivation for quantum simulation'
    ],
    intuition: 'Nature is not classical, and if you want to make a simulation of nature, you\'d better make it quantum mechanical. When chemists simulate a caffeine or penicillin molecule on a supercomputer, representing the quantum interactions of just 50 to 100 electrons requires more memory bits than there are atoms in the observable universe. Quantum computing provides a natural, native language for simulating physical reality.',
    sections: [
      {
        heading: 'Feynman\'s Catalyst (1981)',
        content: 'In 1981, Nobel laureate Richard Feynman noted that classical computers struggle exponentially to simulate quantum mechanics. Simulating an n-particle quantum system requires keeping track of 2^n complex numbers. At n = 300, 2^300 exceeds 10^90, which is larger than the number of protons and neutrons in the visible universe. A quantum computer made of 300 qubits natively represents that state space.'
      },
      {
        heading: 'Beyond Simulation: Cryptography & Optimization',
        content: 'While quantum simulation is the most natural application, Peter Shor (1994) proved that quantum algorithms can factor large integers exponentially faster than the best known classical methods, while Lov Grover (1996) proved a quadratic speedup for unstructured database searches.'
      }
    ],
    equations: [
      {
        label: 'Exponential Hilbert Space Dimension',
        latex: '\\dim(\\mathcal{H}^{\\otimes n}) = 2^n',
        explanation: 'The dimension of the quantum state space grows as 2 to the power of the number of qubits n.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the number of complex coefficients needed to describe a quantum state of 50 qubits vs 10 qubits.',
      solution: 'For 10 qubits, 2^10 = 1,024 complex numbers (readily handled by any laptop). For 50 qubits, 2^50 = 1,125,899,906,842,624 complex numbers (~1.125 petabytes of RAM at double precision).',
      derivationSteps: [
        'N = 10: 2^{10} = 1024 complex amplitudes.',
        'N = 50: 2^{50} approx 1.13 * 10^{15} amplitudes.',
        'Each double complex is 16 bytes: 1.13 * 10^{15} * 16 bytes = 18 petabytes.'
      ]
    },
    commonMisconceptions: [
      'Quantum computers will NOT replace classical computers for daily tasks like word processing, web browsing, or video rendering. They are specialized co-processors for exponentially hard mathematical and physical problems.'
    ],
    quickCheck: {
      question: 'What happens to the number of parameters needed to describe a quantum system when you add one more qubit?',
      options: [
        'It increases by 1.',
        'It doubles (multiplies by 2).',
        'It increases quadratically by n^2.',
        'It stays constant because of normalization.'
      ],
      correctIndex: 1,
      explanation: 'Every additional qubit doubles the dimension of the composite Hilbert state space: 2^{n+1} = 2 * 2^n.'
    },
    summary: 'Quantum computing is pursued because simulating nature and solving certain algebraic problems scales exponentially on classical hardware, but natively fits quantum hardware.',
    keyEquations: ['\\dim(\\mathcal{H}^{\\otimes n}) = 2^n'],
    videoIds: ['vid-why-qc'],
    references: ['Feynman, R. P. (1982). Simulating Physics with Computers. Int. J. Theor. Phys.']
  },
  {
    id: '0.3',
    title: 'Classical Computing vs Quantum Computing',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['0.1', '0.2'],
    objectives: [
      'Contrast classical bits with quantum bits (qubits)',
      'Compare Boolean logic gates (AND, OR, NOT) with unitary quantum operators',
      'Understand deterministic/stochastic vs quantum projective measurement'
    ],
    intuition: 'A classical coin placed on a table is either definitively Heads (0) or Tails (1). A spinning coin on the table exists in a dynamic blur where it has properties of both Heads and Tails until you slam your hand down to measure it. The qubit behaves like that spinning coin, but with a mathematically rigorous complex phase that permits wave interference.',
    sections: [
      {
        heading: 'Bits vs Qubits',
        content: 'A classical bit is binary: b in {0, 1}. A qubit is a unit vector in a 2-dimensional complex vector space: |psi> = alpha|0> + beta|1>, where alpha and beta are complex probability amplitudes satisfying |alpha|^2 + |beta|^2 = 1.'
      },
      {
        heading: 'Irreversibility vs Reversible Unitaries',
        content: 'Many classical gates (such as AND or OR) discard information (e.g., if an AND gate outputs 0, you cannot deduce whether the inputs were 00, 01, or 10). In contrast, all quantum gates (excluding measurement) are unitary transformations U, meaning they are strictly reversible: U^dagger U = I.'
      }
    ],
    equations: [
      {
        label: 'Single Qubit Statevector',
        latex: '|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle \\quad \\text{with} \\quad |\\alpha|^2 + |\\beta|^2 = 1',
        explanation: 'alpha and beta are complex amplitudes whose squared magnitudes give the probability of measuring 0 and 1.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Can a classical NAND gate be directly represented as a unitary quantum operation on 2 qubits?',
      solution: 'No. A NAND gate takes 2 bits in and outputs 1 bit. This reduces the dimension from 4 input states to 2 output states, destroying information and violating reversibility. Quantum gates must be reversible and preserve inner products.',
      derivationSteps: [
        'NAND: (0,0)->1, (0,1)->1, (1,0)->1, (1,1)->0.',
        'Information loss: Output 1 could come from 3 different inputs.',
        'Unitary requires bijective mapping: U^dagger U = I.',
        'Reversible alternative: The 3-bit Toffoli gate.'
      ]
    },
    commonMisconceptions: [
      'A qubit is NOT simply an analog probability like a 50% coin flip. Amplitudes can be negative or imaginary, allowing two non-zero possibilities to cancel each other out completely (interference).'
    ],
    quickCheck: {
      question: 'Which fundamental property is REQUIRED for all non-measurement quantum logic operations?',
      options: [
        'They must consume high electrical power.',
        'They must be strictly reversible and unitary.',
        'They must have more outputs than inputs.',
        'They must discard at least one bit per operation.'
      ],
      correctIndex: 1,
      explanation: 'Quantum mechanics requires closed system evolution to be unitary (U^dagger U = I), which guarantees that quantum operations preserve probabilities and are strictly reversible.'
    },
    summary: 'Classical computing uses irreversible binary switches; quantum computing uses reversible unitary transformations on complex statevectors.',
    keyEquations: ['|\\alpha|^2 + |\\beta|^2 = 1', 'U^\\dagger U = I'],
    videoIds: ['vid-bits-vs-qubits'],
    references: ['Mermin, N. D. (2007). Quantum Computer Science: An Introduction.']
  },
  {
    id: '0.4',
    title: 'What is a Qubit?',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['0.3'],
    objectives: [
      'Define the two-level quantum system',
      'Introduce Dirac bra-ket notation (|0> and |1>) intuitively',
      'Understand the geometric meaning of probability amplitudes'
    ],
    intuition: 'A qubit is the fundamental currency of quantum information. Any physical system that can exist in two distinct, distinguishable quantum energy levels can serve as a qubit. Examples include the spin of an electron (Spin Up |0> vs Spin Down |1>), the polarization of a photon (Horizontal |0> vs Vertical |1>), or the energy state of an artificial atom made of superconducting aluminum circuits.',
    sections: [
      {
        heading: 'The Two-Level System',
        content: 'In quantum physics, any system with a two-dimensional Hilbert space is called a two-level system. We label the orthonormal basis states using Paul Dirac\'s ket notation as |0> (ket zero) and |1> (ket one).'
      },
      {
        heading: 'Amplitudes vs Probabilities',
        content: 'When a qubit is in state |psi> = alpha|0> + beta|1>, alpha and beta are called probability amplitudes. According to the Born Rule, the probability P(0) of measuring state |0> is |alpha|^2, and the probability P(1) of measuring |1> is |beta|^2.'
      }
    ],
    equations: [
      {
        label: 'The Born Rule',
        latex: 'P(0) = |\\alpha|^2, \\quad P(1) = |\\beta|^2, \\quad |\\alpha|^2 + |\\beta|^2 = 1',
        explanation: 'Measurement collapses the continuous statevector to one of the discrete basis states with probability equal to the modulus squared of its amplitude.'
      }
    ],
    diagramType: 'superposition',
    workedExample: {
      problem: 'A qubit is prepared in the state |psi> = (sqrt(3)/2)|0> + (1/2)|1>. Find the probability of measuring 0 and measuring 1.',
      solution: 'P(0) = |sqrt(3)/2|^2 = 3/4 = 75%. P(1) = |1/2|^2 = 1/4 = 25%. Total: 75% + 25% = 100%.',
      derivationSteps: [
        'alpha = sqrt(3)/2, beta = 1/2.',
        'P(0) = (sqrt(3)/2)^2 = 3/4 = 0.75.',
        'P(1) = (1/2)^2 = 1/4 = 0.25.',
        'Check normalization: 3/4 + 1/4 = 1. Valid quantum state.'
      ]
    },
    commonMisconceptions: [
      'A common mistake is thinking you can directly measure both alpha and beta simultaneously. A single measurement only yields either 0 or 1, and the state collapses!'
    ],
    quickCheck: {
      question: 'If a qubit is in state |psi> = (1/sqrt(2))|0> - (1/sqrt(2))|1>, what is the probability of measuring |1>?',
      options: [
        '-50%',
        '50% (0.5)',
        '100%',
        '0%'
      ],
      correctIndex: 1,
      explanation: 'P(1) = |-1/sqrt(2)|^2 = (-1/sqrt(2)) * (-1/sqrt(2)) = 1/2 = 50%. Probabilities are always non-negative real numbers.'
    },
    summary: 'A qubit is a physical two-level quantum system represented mathematically by a 2D complex unit vector.',
    keyEquations: ['|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle', 'P(x) = |c_x|^2'],
    videoIds: ['vid-qubit-intro'],
    references: ['Preskill, J., Lecture Notes for Physics 229: Quantum Information and Computation.']
  },
  {
    id: '0.5',
    title: 'Where Quantum Computers Are Used',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['0.1', '0.2'],
    objectives: [
      'Identify real-world industrial and scientific domains for quantum advantage',
      'Understand quantum chemistry, materials science, and cryptography use-cases',
      'Recognize NISQ limitations vs fault-tolerant applications'
    ],
    intuition: 'Quantum computing is not designed to make your web browser load faster. It is engineered to solve mathematical problems that are fundamentally intractable for classical physics: designing room-temperature superconductors, simulating molecular catalysts for fertilizer synthesis (the Haber-Bosch process), and optimizing global logistical grids.',
    sections: [
      {
        heading: '1. Molecular Chemistry & Drug Discovery',
        content: 'Simulating complex enzyme active sites (like nitrogenase, which fixes atmospheric nitrogen at room temperature) requires accurately modeling correlated electron dynamics. Classical approximations fail, while quantum algorithms (VQE, QPE) natively simulate electronic orbitals.'
      },
      {
        heading: '2. Cryptography & Security',
        content: 'Modern public-key cryptography (RSA, Diffie-Hellman, Elliptic Curves) relies on the hardness of integer factorization and discrete logarithms. Shor\'s algorithm solves these in polynomial time, driving global transition to Post-Quantum Cryptography (PQC).'
      }
    ],
    equations: [
      {
        label: 'Shor Algorithm Asymptotic Complexity',
        latex: '\\mathcal{O}\\left((\\log N)^2 \\log(\\log N) \\log(\\log(\\log N))\\right)',
        explanation: 'Shor factors integers in polynomial time O((log N)^3), compared to classical General Number Field Sieve which is sub-exponential.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why is fertilizer synthesis (nitrogenase enzyme) often cited as a killer app for quantum computers?',
      solution: 'The industrial Haber-Bosch process consumes 1-2% of all global energy annually because classical computers cannot accurately model the FeMoco catalytic cluster. Quantum simulation could unlock synthetic room-temperature catalysts.',
      derivationSteps: [
        'FeMoco cluster has 54 strongly correlated electrons.',
        'Active space requires 2^54 approx 1.8 * 10^{16} configurations.',
        'Classical DFT cannot capture dynamic electron correlation without exponential error.'
      ]
    },
    commonMisconceptions: [
      'Quantum computers will NOT crack all encryption overnight today. Shor\'s algorithm requires millions of fault-tolerant physical qubits, which are still years away in engineering development.'
    ],
    quickCheck: {
      question: 'Which of the following problems is a prime candidate for near-term quantum utility?',
      options: [
        'Streaming 4K video over the internet.',
        'Simulating molecular electron orbitals for catalyst design.',
        'Running relational SQL database queries.',
        'Compiling C++ code into machine instructions.'
      ],
      correctIndex: 1,
      explanation: 'Simulating quantum electron systems is physically natural for quantum computers and cannot be scaled classically.'
    },
    summary: 'Quantum computing targets chemistry, materials science, cryptography, and combinatorial optimization.',
    keyEquations: ['\\mathcal{O}((\\log N)^3)'],
    videoIds: ['vid-qc-apps'],
    references: ['Biamonte et al., Quantum Machine Learning, Nature 549, 195–202 (2017).']
  },
  {
    id: '0.6',
    title: 'Quantum Computing Terminology',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['0.4'],
    objectives: [
      'Define essential vocabulary: Qubit, Bra-ket, Superposition, Entanglement, Coherence, Decoherence, Fidelity',
      'Build fluency in quantum communication notation'
    ],
    intuition: 'Every new scientific discipline has its own dialect. In quantum computing, terms like "coherence time", "fidelity", and "decoherence" measure the fragile dance between quantum isolation and environmental noise. Learning this vocabulary allows you to read research literature and platform documentation with clarity.',
    sections: [
      {
        heading: 'The Core Glossary',
        content: '• Qubit: Quantum two-level system.\n• Ket |v>: Column state vector.\n• Bra <v|: Conjugate transpose row vector.\n• Superposition: Linear combination of computational basis states.\n• Entanglement: Multi-particle state where individual subsystems have no independent statevectors.\n• Decoherence: Loss of quantum phase information caused by environmental interaction (thermal noise, stray electromagnetic fields).'
      },
      {
        heading: 'Performance Metrics: T1, T2 and Gate Fidelity',
        content: 'T1 is the energy relaxation time (decay from |1> to |0>). T2 is the dephasing time (loss of superposition phase). Gate fidelity measures how closely a physical pulse implements the ideal mathematical unitary matrix.'
      }
    ],
    equations: [
      {
        label: 'T1 Relaxation and T2 Dephasing Relation',
        latex: '\\frac{1}{T_2} = \\frac{1}{2T_1} + \\frac{1}{T_\\phi}',
        explanation: 'The dephasing rate 1/T2 is bounded by the energy relaxation rate 1/(2T1) plus pure dephasing 1/T_phi.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'If a superconducting qubit has T1 = 100 microseconds and pure dephasing T_phi = 150 microseconds, calculate its T2 dephasing time.',
      solution: '1/T2 = 1/(2*100) + 1/150 = 1/200 + 1/150 = (3 + 4)/600 = 7/600. Thus T2 = 600/7 approx 85.7 microseconds.',
      derivationSteps: [
        '1/(2T1) = 1/200 = 0.005 microsec^{-1}.',
        '1/T_phi = 1/150 approx 0.00667 microsec^{-1}.',
        '1/T2 = 0.01167 microsec^{-1} -> T2 = 85.7 microsec.'
      ]
    },
    commonMisconceptions: [
      'Entanglement does NOT allow faster-than-light communication (the No-Signaling Theorem). Measuring an entangled qubit produces completely random results locally until classical correlation is shared.'
    ],
    quickCheck: {
      question: 'What does "Decoherence" mean in physical quantum hardware?',
      options: [
        'The qubit cooling down below zero Kelvin.',
        'The loss of quantum coherence and phase information due to environmental noise.',
        'The gate matrix multiplying by its own inverse.',
        'Adding more classical memory to the server.'
      ],
      correctIndex: 1,
      explanation: 'Decoherence is the degradation of quantum state information into classical noise caused by uncontrolled coupling with the environment.'
    },
    summary: 'Mastery of quantum vocabulary (qubit, ket, superposition, entanglement, T1/T2, fidelity) is key for reading and writing quantum algorithms.',
    keyEquations: ['\\frac{1}{T_2} = \\frac{1}{2T_1} + \\frac{1}{T_\\phi}'],
    videoIds: ['vid-terminology'],
    references: ['Krantz et al., A Quantum Engineer\'s Guide to Superconducting Qubits, Appl. Phys. Rev. 6 (2019).']
  },
  {
    id: '0.7',
    title: 'Learning Roadmap',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['0.1'],
    objectives: [
      'Navigate the 11-level progressive learning curriculum',
      'Understand how mathematical concepts map to quantum mechanics and quantum algorithms',
      'Set clear milestone goals toward the Quantum Scholar Certification'
    ],
    intuition: 'Learning quantum computing can feel daunting if you jump straight into advanced algorithms without the necessary mathematical and physical foundations. This platform uses a spiral learning pathway: we build linear algebra, connect it to classical wave physics, discover quantum mechanics, construct quantum gates, orchestrate multi-qubit algorithms, and explore cutting-edge research.',
    sections: [
      {
        heading: 'The Spiral Curriculum',
        content: '• Level 1: Linear algebra, complex plane, matrices, and eigenvalues.\n• Level 2: Wave mechanics and electromagnetic limits.\n• Level 3: Dual nature, Planck, photoelectric, superposition, and Schrödinger evolution.\n• Level 4: Qubits, Bloch sphere geometry, and interference.\n• Level 5: Unitary single and two-qubit logic gates.\n• Level 6: Entanglement, Bell states, and density matrices.\n• Level 7: Quantum information, entropy, and error correction.\n• Level 8: Breakthrough algorithms: Deutsch, Grover, QFT, Shor.\n• Level 9: Advanced mathematical physics and complexity classes.\n• Level 10: Industry hardware, Qiskit/Cirq software, and research papers.'
      }
    ],
    equations: [
      {
        label: 'The Progression Equation',
        latex: '\\text{Math (L1)} \\longrightarrow \\text{Physics (L2-3)} \\longrightarrow \\text{Qubits (L4-5)} \\longrightarrow \\text{Algorithms (L8)}',
        explanation: 'Every concept in quantum computing rests squarely on the mathematical foundation built in Level 1.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why must we learn matrix multiplication and eigenvalues before studying quantum measurement?',
      solution: 'In quantum mechanics, physical observables (like position, momentum, or spin) are represented by Hermitian matrices. The only possible values obtained in a measurement are the eigenvalues of that matrix, and the post-measurement state collapses into the corresponding eigenvector.',
      derivationSteps: [
        'Observable A is a Hermitian matrix: A = A^dagger.',
        'Eigenvalue equation: A|v_k> = lambda_k |v_k>.',
        'Measurement of A yields lambda_k with probability |<v_k|psi>|^2.'
      ]
    },
    commonMisconceptions: [
      'You do NOT need a PhD in theoretical physics to learn quantum computing. With standard linear algebra and complex numbers, all core quantum computing concepts can be understood rigorously.'
    ],
    quickCheck: {
      question: 'Which mathematical branch forms the primary language of quantum computation?',
      options: [
        'Euclidean plane geometry',
        'Linear algebra and complex vector spaces',
        'Differential topology of manifolds',
        'Classical symbolic boolean algebra'
      ],
      correctIndex: 1,
      explanation: 'Linear algebra (vectors, matrices, inner products, tensor products) is the direct mathematical language of quantum statevectors and unitary gates.'
    },
    summary: 'The 11-level curriculum progressively takes you from basic arithmetic to research-grade quantum algorithms and certification.',
    keyEquations: ['\\text{Linear Algebra} \\implies \\text{Quantum Mechanics} \\implies \\text{Quantum Algorithms}'],
    videoIds: ['vid-roadmap'],
    references: ['Quantum Computing Report: Educational Pathways and Competency Frameworks.']
  },
  {
    id: '0.8',
    title: 'Prerequisite Assessment',
    level: 0,
    levelName: 'Level 0 — Orientation',
    module: 'Welcome to Quantum Computing',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['0.1', '0.7'],
    objectives: [
      'Assess baseline mathematical and computational knowledge',
      'Diagnose foundational readiness for Level 1 (Mathematical Foundations)',
      'Receive customized recommendations for learning pace'
    ],
    intuition: 'Before embarking on the mathematical foundations in Level 1, this diagnostic checkpoint evaluates your comfort with basic algebra, angles (radians and degrees), Cartesian coordinates, and basic probability concepts. It ensures you never feel lost when complex numbers and vectors are introduced.',
    sections: [
      {
        heading: 'Diagnostic Focus Areas',
        content: '1. Basic algebra: Solving linear equations, quadratic squares.\n2. Trigonometry: Sine, cosine, Pythagoras theorem (a^2 + b^2 = c^2).\n3. Probability: Basic ratios, sum of probabilities equaling 1.\n4. Coordinate geometry: The (x, y) Cartesian coordinate plane.'
      }
    ],
    equations: [
      {
        label: 'Pythagorean Normalization Foundation',
        latex: '\\cos^2(\\theta) + \\sin^2(\\theta) = 1 \\iff |\\alpha|^2 + |\\beta|^2 = 1',
        explanation: 'Trigonometric identity maps directly to the probability normalization of quantum statevectors on the Bloch sphere.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'If an angle theta = pi/3 radians, calculate cos(theta) and sin(theta), and verify that cos^2(theta) + sin^2(theta) = 1.',
      solution: 'cos(pi/3) = 1/2 = 0.5. sin(pi/3) = sqrt(3)/2 approx 0.866. cos^2(pi/3) + sin^2(pi/3) = (1/2)^2 + (sqrt(3)/2)^2 = 1/4 + 3/4 = 1.',
      derivationSteps: [
        'theta = 60 degrees = pi/3 rad.',
        'cos(60) = 1/2, sin(60) = sqrt(3)/2.',
        '(1/2)^2 = 1/4, (sqrt(3)/2)^2 = 3/4.',
        '1/4 + 3/4 = 1.0.'
      ]
    },
    commonMisconceptions: [
      'Do not worry if you have forgotten some high school trigonometry. Level 1 reviews all required math from the ground up, with direct connections to quantum concepts.'
    ],
    quickCheck: {
      question: 'What is the value of i^2 where i is the imaginary unit?',
      options: [
        '+1',
        '-1',
        '0',
        'sqrt(-1)'
      ],
      correctIndex: 1,
      explanation: 'By definition, the imaginary unit i satisfies i^2 = -1. This is foundational for Level 1 Complex Numbers.'
    },
    summary: 'You have completed Level 0 Orientation! You are now prepared to build the Mathematical Foundations in Level 1.',
    keyEquations: ['i^2 = -1', '\\cos^2\\theta + \\sin^2\\theta = 1'],
    videoIds: ['vid-prereq-check'],
    references: ['Strang, G. (2016). Introduction to Linear Algebra, 5th Edition.']
  }
];
