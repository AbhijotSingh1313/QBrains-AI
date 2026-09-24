/**
 * Quantum Learning Platform - Master Curriculum Index
 * Covers Levels 0 through 10 with structured modules, prerequisites, and certification tracks.
 */

export const CURRICULUM_LEVELS = [
  {
    id: 0,
    slug: 'level-0',
    title: 'Level 0 — Orientation & Foundations',
    subtitle: 'Absolute beginner welcome, roadmap, terminology & prerequisites check',
    icon: 'Compass',
    color: '#06b6d4',
    bgGlow: 'rgba(6, 182, 212, 0.15)',
    estimatedHours: 2,
    modules: [
      {
        id: 'mod-0-1',
        title: 'Welcome to Quantum Computing',
        lessons: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8'],
      },
    ],
  },
  {
    id: 1,
    slug: 'level-1',
    title: 'Level 1 — Mathematical Foundations',
    subtitle: 'Complex numbers, linear algebra, vector spaces, matrices & tensor products',
    icon: 'Binary',
    color: '#3b82f6',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
    estimatedHours: 8,
    modules: [
      {
        id: 'mod-1-1',
        title: 'Complex Numbers & Geometry',
        lessons: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7'],
      },
      {
        id: 'mod-1-2',
        title: 'Vectors, Inner Products & Norms',
        lessons: ['1.8', '1.9', '1.10', '1.11'],
      },
      {
        id: 'mod-1-3',
        title: 'Matrices & Linear Transformations',
        lessons: ['1.12', '1.13', '1.14', '1.15', '1.16', '1.17', '1.18', '1.19'],
      },
      {
        id: 'mod-1-4',
        title: 'Eigenvalues, Eigenvectors & Tensor Products',
        lessons: ['1.20', '1.21', '1.22', '1.23', '1.24', '1.25', '1.26', '1.27'],
      },
    ],
  },
  {
    id: 2,
    slug: 'level-2',
    title: 'Level 2 — Classical Physics Foundations',
    subtitle: 'Classical mechanics, wave physics, electromagnetic spectrum & classical limits',
    icon: 'Waves',
    color: '#8b5cf6',
    bgGlow: 'rgba(139, 92, 246, 0.15)',
    estimatedHours: 4,
    modules: [
      {
        id: 'mod-2-1',
        title: 'Mechanics, Waves & Electromagnetism',
        lessons: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '2.10'],
      },
    ],
  },
  {
    id: 3,
    slug: 'level-3',
    title: 'Level 3 — Quantum Mechanics Foundations',
    subtitle: 'Planck, photoelectric effect, wave-particle duality, superposition & uncertainty',
    icon: 'Atom',
    color: '#ec4899',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    estimatedHours: 9,
    modules: [
      {
        id: 'mod-3-1',
        title: 'Historical Origin & The Quantum Hypothesis',
        lessons: ['3.1', '3.2', '3.3', '3.4', '3.5'],
      },
      {
        id: 'mod-3-2',
        title: 'Matter Waves & Double-Slit Experiment',
        lessons: ['3.6', '3.7', '3.8', '3.9', '3.10'],
      },
      {
        id: 'mod-3-3',
        title: 'Superposition, Statevectors & Measurement Collapse',
        lessons: ['3.11', '3.12', '3.13', '3.14', '3.15', '3.16'],
      },
      {
        id: 'mod-3-4',
        title: 'Uncertainty, Tunneling & Schrödinger Dynamics',
        lessons: ['3.17', '3.18', '3.19', '3.20', '3.21', '3.22', '3.23', '3.24'],
      },
    ],
  },
  {
    id: 4,
    slug: 'level-4',
    title: 'Level 4 — Quantum Computing Foundations',
    subtitle: 'The qubit, Bloch sphere geometry, unitary operations, parallelism & no-cloning',
    icon: 'Cpu',
    color: '#10b981',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    estimatedHours: 7,
    modules: [
      {
        id: 'mod-4-1',
        title: 'The Qubit & Statevector Mechanics',
        lessons: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6'],
      },
      {
        id: 'mod-4-2',
        title: 'Measurement Bases & Unitary Evolution',
        lessons: ['4.7', '4.8', '4.9', '4.10', '4.11', '4.12', '4.13'],
      },
      {
        id: 'mod-4-3',
        title: 'Parallelism, Interference, Entanglement & Teleportation',
        lessons: ['4.14', '4.15', '4.16', '4.17', '4.18', '4.19', '4.20'],
      },
    ],
  },
  {
    id: 5,
    slug: 'level-5',
    title: 'Level 5 — Quantum Gates & Circuit Algebra',
    subtitle: 'Single-qubit unitaries, Pauli matrices, rotations, controlled gates & universality',
    icon: 'GitBranch',
    color: '#f59e0b',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
    estimatedHours: 8,
    modules: [
      {
        id: 'mod-5-1',
        title: 'Single-Qubit Unitary Operators',
        lessons: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '5.10'],
      },
      {
        id: 'mod-5-2',
        title: 'Continuous Rotations & Controlled Gates',
        lessons: ['5.11', '5.12', '5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19'],
      },
      {
        id: 'mod-5-3',
        title: 'Universality, Reversibility & Circuit Notation',
        lessons: ['5.20', '5.21', '5.22', '5.23'],
      },
    ],
  },
  {
    id: 6,
    slug: 'level-6',
    title: 'Level 6 — Multi-Qubit Quantum Computing',
    subtitle: 'Tensor product spaces, Bell states, GHZ, mixed states & density matrices',
    icon: 'Layers',
    color: '#6366f1',
    bgGlow: 'rgba(99, 102, 241, 0.15)',
    estimatedHours: 7,
    modules: [
      {
        id: 'mod-6-1',
        title: 'Multi-Qubit Spaces & Bell Basis',
        lessons: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8'],
      },
      {
        id: 'mod-6-2',
        title: 'GHZ, Correlations & Density Matrix Formalism',
        lessons: ['6.9', '6.10', '6.11', '6.12', '6.13', '6.14', '6.15', '6.16'],
      },
    ],
  },
  {
    id: 7,
    slug: 'level-7',
    title: 'Level 7 — Quantum Information & Error Correction',
    subtitle: 'Von Neumann entropy, quantum channels, decoherence & stabilizer surface codes',
    icon: 'ShieldAlert',
    color: '#ef4444',
    bgGlow: 'rgba(239, 68, 68, 0.15)',
    estimatedHours: 6,
    modules: [
      {
        id: 'mod-7-1',
        title: 'Entropy, Channels & Decoherence',
        lessons: ['7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '7.7', '7.8', '7.9', '7.10'],
      },
      {
        id: 'mod-7-2',
        title: 'Quantum Error Correction Codes',
        lessons: ['7.11', '7.12', '7.13', '7.14', '7.15', '7.16', '7.17'],
      },
    ],
  },
  {
    id: 8,
    slug: 'level-8',
    title: 'Level 8 — Quantum Algorithms & Advantage',
    subtitle: 'Deutsch-Jozsa, Bernstein-Vazirani, Simon, Grover, QFT, Shor, QAOA & VQE',
    icon: 'Zap',
    color: '#eab308',
    bgGlow: 'rgba(234, 179, 8, 0.15)',
    estimatedHours: 10,
    modules: [
      {
        id: 'mod-8-1',
        title: 'Oracle Algorithms & Quantum Speedup',
        lessons: ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7', '8.8'],
      },
      {
        id: 'mod-8-2',
        title: 'Grover Search & Amplitude Amplification',
        lessons: ['8.9', '8.10'],
      },
      {
        id: 'mod-8-3',
        title: 'Quantum Fourier Transform & Shor’s Algorithm',
        lessons: ['8.11', '8.12', '8.13'],
      },
      {
        id: 'mod-8-4',
        title: 'Variational Quantum Eigensolver & QML',
        lessons: ['8.14', '8.15', '8.16'],
      },
    ],
  },
  {
    id: 9,
    slug: 'level-9',
    title: 'Level 9 — Advanced Quantum Computing',
    subtitle: 'Hilbert space geometry, spectral theorem, open systems, BQP & quantum cryptography',
    icon: 'Sparkles',
    color: '#a855f7',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
    estimatedHours: 10,
    modules: [
      {
        id: 'mod-9-1',
        title: 'Advanced Dirac Formalism & Hilbert Geometry',
        lessons: ['9.1', '9.2', '9.3', '9.4', '9.5', '9.6', '9.7', '9.8'],
      },
      {
        id: 'mod-9-2',
        title: 'Density Operators, Kraus Maps & Open Systems',
        lessons: ['9.9', '9.10', '9.11', '9.12', '9.13', '9.14', '9.15'],
      },
      {
        id: 'mod-9-3',
        title: 'Fault Tolerance & Quantum Complexity (BQP)',
        lessons: ['9.16', '9.17', '9.18', '9.19', '9.20'],
      },
      {
        id: 'mod-9-4',
        title: 'Quantum Cryptography, QKD & Sensing',
        lessons: ['9.21', '9.22', '9.23', '9.24', '9.25', '9.26', '9.27', '9.28'],
      },
    ],
  },
  {
    id: 10,
    slug: 'level-10',
    title: 'Level 10 — Industry & Research Track',
    subtitle: 'Superconducting, trapped ions, neutral atoms, quantum software stack & paper reading',
    icon: 'Award',
    color: '#14b8a6',
    bgGlow: 'rgba(20, 184, 166, 0.15)',
    estimatedHours: 8,
    modules: [
      {
        id: 'mod-10-1',
        title: 'Physical Quantum Hardware Modalities',
        lessons: ['10.1', '10.2', '10.3', '10.4', '10.5', '10.6', '10.7'],
      },
      {
        id: 'mod-10-2',
        title: 'Benchmarks, Compilation & Error Mitigation',
        lessons: ['10.8', '10.9', '10.10', '10.11'],
      },
      {
        id: 'mod-10-3',
        title: 'Software Frameworks & OpenQASM',
        lessons: ['10.12', '10.13', '10.14', '10.15', '10.16'],
      },
      {
        id: 'mod-10-4',
        title: 'Academic Research Methodology & Industry Impact',
        lessons: ['10.17', '10.18', '10.19', '10.20'],
      },
    ],
  },
];

/**
 * Prerequisites Dependency Graph
 */
export const PREREQUISITE_DEPENDENCIES = {
  'level-0': [],
  'level-1': ['level-0'],
  'level-2': ['level-0'],
  'level-3': ['level-1', 'level-2'],
  'level-4': ['level-1', 'level-3'],
  'level-5': ['level-1', 'level-4'],
  'level-6': ['level-1', 'level-4', 'level-5'],
  'level-7': ['level-4', 'level-6'],
  'level-8': ['level-4', 'level-5', 'level-6'],
  'level-9': ['level-6', 'level-7', 'level-8'],
  'level-10': ['level-8', 'level-9'],
};

/**
 * Certification Requirements & Criteria
 */
export const CERTIFICATION_REQUIREMENTS = {
  title: 'Quantum Computing Scholar Certification',
  code: 'QNOVA-CERT-QC',
  requiredLevels: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  minimumLessonsCompleted: 35,
  minimumMasteryScore: 70, // 70% overall mastery required
  distinctionThreshold: 85, // 85%+ earns "Honors / Passed with Distinction"
  examQuestionsCount: 15,
  passingExamScore: 75,
  competencies: [
    'Linear Algebra & Vector Spaces',
    'Postulates of Quantum Mechanics',
    'Qubit States & Bloch Sphere Geometry',
    'Unitary Quantum Gates & Circuit Construction',
    'Multi-Qubit Entanglement & Bell States',
    'Quantum Algorithms (Grover, QFT, Shor)',
    'Quantum Information & Error Correction Principles'
  ]
};
