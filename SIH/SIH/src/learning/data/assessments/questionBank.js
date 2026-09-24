// Master Question Bank for Assessments & Comprehensive Final Certification Exam

export const COMPREHENSIVE_EXAM_QUESTIONS = [
  {
    id: 'exam-1',
    competency: 'Linear Algebra & Vector Spaces',
    question: 'Given the vector |v⟩ = 3|0⟩ - 4i|1⟩, what is its normalized quantum state representation?',
    type: 'multiple-choice',
    options: [
      '|ψ⟩ = (3/5)|0⟩ - (4i/5)|1⟩',
      '|ψ⟩ = (3/7)|0⟩ - (4i/7)|1⟩',
      '|ψ⟩ = (9/25)|0⟩ + (16/25)|1⟩',
      '|ψ⟩ = (3/√7)|0⟩ - (4i/√7)|1⟩'
    ],
    correctAnswer: '|ψ⟩ = (3/5)|0⟩ - (4i/5)|1⟩',
    explanation: 'The norm ||v|| = √(3^2 + |-4i|^2) = √(9 + 16) = √25 = 5. Dividing by the norm gives (3/5)|0⟩ - (4i/5)|1⟩.'
  },
  {
    id: 'exam-2',
    competency: 'Linear Algebra & Vector Spaces',
    question: 'Which of the following matrices is Hermitian, Unitary, and involutory (U^2 = I)?',
    type: 'multiple-choice',
    options: [
      'Pauli-X gate',
      'Phase gate S',
      'T-gate',
      'Projection operator |0⟩⟨0|'
    ],
    correctAnswer: 'Pauli-X gate',
    explanation: 'Pauli matrices X, Y, and Z are all Hermitian (H = H†) and Unitary (U†U = I), which directly implies X^2 = I.'
  },
  {
    id: 'exam-3',
    competency: 'Postulates of Quantum Mechanics',
    question: 'According to Born’s Rule, if a system in state |ψ⟩ = (1/2)|0⟩ + (√3/2)|1⟩ is measured in the computational Z-basis, what is the probability of obtaining outcome 1?',
    type: 'multiple-choice',
    options: ['75% (3/4)', '50% (1/2)', '25% (1/4)', '86.6% (√3/2)'],
    correctAnswer: '75% (3/4)',
    explanation: 'The probability is |⟨1|ψ⟩|^2 = |√3/2|^2 = 3/4 = 75%.'
  },
  {
    id: 'exam-4',
    competency: 'Qubit States & Bloch Sphere Geometry',
    question: 'What are the spherical coordinates (θ, φ) on the Bloch sphere for the state |+i⟩ = (|0⟩ + i|1⟩)/√2?',
    type: 'multiple-choice',
    options: [
      'θ = π/2, φ = π/2',
      'θ = π, φ = 0',
      'θ = π/2, φ = 0',
      'θ = π/4, φ = π/2'
    ],
    correctAnswer: 'θ = π/2, φ = π/2',
    explanation: 'In general |ψ⟩ = cos(θ/2)|0⟩ + e^{iφ}sin(θ/2)|1⟩. For |+i⟩, cos(θ/2) = 1/√2 -> θ = π/2, and e^{iφ} = i -> φ = π/2 (pointing along +Y axis).'
  },
  {
    id: 'exam-5',
    competency: 'Unitary Quantum Gates & Circuit Construction',
    question: 'What single quantum gate is equivalent to the sequence H Z H (Hadamard, Pauli-Z, Hadamard)?',
    type: 'multiple-choice',
    options: ['Pauli-X gate', 'Pauli-Y gate', 'Identity gate', 'Phase gate S'],
    correctAnswer: 'Pauli-X gate',
    explanation: 'H Z H transforms the Z eigenbasis to the X eigenbasis, which is identical to the Pauli-X gate: HZH = X.'
  },
  {
    id: 'exam-6',
    competency: 'Unitary Quantum Gates & Circuit Construction',
    question: 'What is the matrix exponential e^{-i (π/4) X} equivalent to on the Bloch sphere?',
    type: 'multiple-choice',
    options: [
      'A rotation around the X-axis by angle π/2 (90 degrees)',
      'A rotation around the Z-axis by π/4',
      'A global phase shift of -iπ/4',
      'An inversion through the origin'
    ],
    correctAnswer: 'A rotation around the X-axis by angle π/2 (90 degrees)',
    explanation: 'The single-qubit rotation operator is R_X(θ) = e^{-i (θ/2) X}. Here θ/2 = π/4, so the rotation angle is θ = π/2 (90 degrees).'
  },
  {
    id: 'exam-7',
    competency: 'Multi-Qubit Entanglement & Bell States',
    question: 'Given the Bell state |Ψ+⟩ = (|01⟩ + |10⟩)/√2, if qubit 1 is measured in the computational basis and returns 1, what is the resulting collapsed state of qubit 2?',
    type: 'multiple-choice',
    options: ['|0⟩ with certainty (100%)', '|1⟩ with certainty (100%)', '|+⟩', 'Maximally mixed state I/2'],
    correctAnswer: '|0⟩ with certainty (100%)',
    explanation: 'Looking at |Ψ+⟩ = (|01⟩ + |10⟩)/√2, the term where qubit 1 is 1 is |10⟩. Thus qubit 2 must collapse to |0⟩.'
  },
  {
    id: 'exam-8',
    competency: 'Multi-Qubit Entanglement & Bell States',
    question: 'What is the maximum value of the Clauser-Horne-Shimony-Holt (CHSH) parameter S achievable by quantum states (Tsirelson’s bound)?',
    type: 'multiple-choice',
    options: ['2√2 ≈ 2.828', '2.0', '4.0', '√2 ≈ 1.414'],
    correctAnswer: '2√2 ≈ 2.828',
    explanation: 'Local hidden variable theories satisfy |S| <= 2. Quantum mechanics achieves the Tsirelson bound of 2√2.'
  },
  {
    id: 'exam-9',
    competency: 'Multi-Qubit Entanglement & Bell States',
    question: 'In quantum teleportation, how many classical bits must Alice transmit to Bob so he can recover the unknown qubit |ψ⟩?',
    type: 'multiple-choice',
    options: ['2 classical bits', '1 classical bit', '0 bits (instantaneous transfer)', 'Infinitely many bits'],
    correctAnswer: '2 classical bits',
    explanation: 'Alice performs a Bell measurement yielding 2 classical bits (00, 01, 10, 11), instructing Bob which Pauli correction {I, X, Z, XZ} to apply.'
  },
  {
    id: 'exam-10',
    competency: 'Quantum Algorithms (Grover, QFT, Shor)',
    question: 'How many queries does Grover’s search algorithm require to locate 1 target item in an unsorted database of N items?',
    type: 'multiple-choice',
    options: [
      'O(√N)',
      'O(N)',
      'O(log N)',
      'O(1)'
    ],
    correctAnswer: 'O(√N)',
    explanation: 'Grover’s algorithm provides a provable quadratic speedup, requiring (π/4)√N queries.'
  },
  {
    id: 'exam-11',
    competency: 'Quantum Algorithms (Grover, QFT, Shor)',
    question: 'How does the Quantum Fourier Transform (QFT) scale in number of quantum gates for an n-qubit system?',
    type: 'multiple-choice',
    options: [
      'O(n^2) gates',
      'O(2^n) gates',
      'O(n 2^n) gates',
      'O(n) gates'
    ],
    correctAnswer: 'O(n^2) gates',
    explanation: 'The n-qubit QFT circuit requires n(n+1)/2 = O(n^2) single-qubit Hadamards and controlled phase rotations.'
  },
  {
    id: 'exam-12',
    competency: 'Quantum Algorithms (Grover, QFT, Shor)',
    question: 'What mathematical problem does Shor’s algorithm solve in polynomial time to factor large integers?',
    type: 'multiple-choice',
    options: [
      'Modular order-finding (period finding) via Quantum Phase Estimation',
      'Traveling Salesperson problem',
      'Simulated annealing',
      'Linear programming'
    ],
    correctAnswer: 'Modular order-finding (period finding) via Quantum Phase Estimation',
    explanation: 'Shor reduced integer factoring to finding the period r of f(x) = a^x mod N, which QPE solves in O(log^3 N) time.'
  },
  {
    id: 'exam-13',
    competency: 'Quantum Information & Error Correction Principles',
    question: 'What is the Von Neumann entropy of the reduced single-qubit density matrix obtained by tracing out one qubit of a Bell state |Φ+⟩?',
    type: 'multiple-choice',
    options: ['1 bit (maximal entropy)', '0 bits', '0.5 bits', 'ln(2)'],
    correctAnswer: '1 bit (maximal entropy)',
    explanation: 'The reduced density matrix of a maximally entangled bipartite state is ρ_A = I/2, whose Von Neumann entropy is S(ρ_A) = -∑ (1/2) log2(1/2) = 1 bit.'
  },
  {
    id: 'exam-14',
    competency: 'Quantum Information & Error Correction Principles',
    question: 'Why does the 3-qubit bit-flip code measure the two stabilizer parity operators Z1Z2 and Z2Z3 instead of measuring the physical qubits directly?',
    type: 'multiple-choice',
    options: [
      'To extract error syndromes without collapsing the stored logical quantum superposition',
      'Because physical qubits cannot be measured',
      'To save electrical power',
      'Because Z gates are faster than X gates'
    ],
    correctAnswer: 'To extract error syndromes without collapsing the stored logical quantum superposition',
    explanation: 'Measuring parity operators Z1Z2 and Z2Z3 identifies which qubit has an error without revealing whether the logical state is |0⟩ or |1⟩.'
  },
  {
    id: 'exam-15',
    competency: 'Quantum Information & Error Correction Principles',
    question: 'What does the Eastin-Knill Theorem state regarding quantum error-correcting codes?',
    type: 'multiple-choice',
    options: [
      'No quantum error-correcting code can implement a universal set of quantum gates transversally',
      'Quantum error correction is impossible due to no-cloning',
      'All stabilizer codes must use at least 15 qubits',
      'Phase flip errors cannot be corrected'
    ],
    correctAnswer: 'No quantum error-correcting code can implement a universal set of quantum gates transversally',
    explanation: 'The Eastin-Knill theorem proves that any code capable of detecting errors has a discrete transversal gate group, necessitating techniques like magic state distillation for universality.'
  }
];

export const DIAGNOSTIC_QUESTIONS = [
  {
    id: 'diag-1',
    question: 'Which equation correctly expresses the inner product of two complex vectors |u⟩ and |v⟩?',
    options: ['⟨u|v⟩ = ∑ u_i* v_i', '⟨u|v⟩ = ∑ u_i v_i', '⟨u|v⟩ = u ⊗ v', '⟨u|v⟩ = det(u v^T)'],
    correctAnswer: '⟨u|v⟩ = ∑ u_i* v_i',
    recommendedLevel: 1
  },
  {
    id: 'diag-2',
    question: 'What does a Hadamard gate H do to the ground state |0⟩?',
    options: ['Transforms it to |+⟩ = (|0⟩ + |1⟩)/√2', 'Inverts it to |1⟩', 'Leaves it unchanged', 'Collapses it'],
    correctAnswer: 'Transforms it to |+⟩ = (|0⟩ + |1⟩)/√2',
    recommendedLevel: 4
  },
  {
    id: 'diag-3',
    question: 'What gate combination generates the maximally entangled state |Φ+⟩ from |00⟩?',
    options: ['Hadamard on qubit 0, followed by CNOT from qubit 0 to qubit 1', 'X gate on both qubits', 'SWAP gate', 'Phase gate S'],
    correctAnswer: 'Hadamard on qubit 0, followed by CNOT from qubit 0 to qubit 1',
    recommendedLevel: 6
  }
];
