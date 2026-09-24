// Level 8: Quantum Algorithms & Advantage
// Comprehensive lessons covering Oracles, Deutsch, Deutsch-Jozsa, Bernstein-Vazirani, Simon, Phase Kickback, BQP complexity, Grover's search, QFT, Shor's factoring, VQE, QAOA, and QML.

export const LEVEL_8_LESSONS = [
  {
    id: '8.1',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Quantum Oracles: Bit Oracles vs Phase Oracles',
    readingTime: '16 min',
    difficulty: 'Intermediate',
    summary: 'Understand how classical boolean functions f(x) are converted into reversible unitary quantum oracles.',
    sections: [
      {
        title: 'Reversible Bit Oracle Formulation',
        content: 'A classical function \\(f: \\{0, 1\\}^n \\to \\{0, 1\\}^m\\) is generally non-invertible. To evaluate it unitarily without violating reversibility, we introduce an ancilla register \\(|y\\rangle\\) and define the bit-oracle \\(U_f\\):',
        math: 'U_f |x\\rangle |y\\rangle = |x\\rangle |y \\oplus f(x)\\rangle',
        mathDisplay: true
      },
      {
        title: 'Phase Oracle Formulation',
        content: 'When the ancilla is prepared in the state \\(|-\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}\\), phase kickback encodes the function value directly into the amplitude sign:',
        math: 'U_f |x\\rangle |-\\rangle = (-1)^{f(x)} |x\\rangle |-\\rangle',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-1-1',
        question: 'Why must classical non-injective functions f(x) use an ancilla register |y ⊕ f(x)⟩ in quantum circuits?',
        type: 'multiple-choice',
        options: [
          'To preserve unitary reversibility and inner products',
          'To speed up clock cycles',
          'Because quantum gates only accept even numbers of qubits',
          'To cool the qubits'
        ],
        correctAnswer: 'To preserve unitary reversibility and inner products',
        explanation: 'Quantum evolution must be unitary and therefore reversible. The mapping |x⟩|y⟩ -> |x⟩|y ⊕ f(x)⟩ is a permutation on basis states, hence unitary.'
      }
    ]
  },
  {
    id: '8.2',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Deutsch’s Algorithm: First Demonstration of Quantum Advantage',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Evaluate whether a single-bit boolean function f: {0,1} -> {0,1} is constant or balanced using only 1 query instead of 2.',
    sections: [
      {
        title: 'The Deutsch Problem',
        content: 'Given a black-box oracle evaluating a function \\(f: \\{0, 1\\} \\to \\{0, 1\\}\\), determine if \\(f\\) is constant (\\(f(0) = f(1)\\)) or balanced (\\(f(0) \\ne f(1)\\)). Classically, one must query both \\(f(0)\\) and \\(f(1)\\) (2 queries). Deutsch showed that quantumly, 1 query suffices.',
      },
      {
        title: 'Mathematical Derivation',
        content: 'Initialize qubits to \\(|01\\rangle\\). Apply \\(H \\otimes H\\) to create \\(|+\\rangle|-\\rangle\\). Apply oracle \\(U_f\\):',
        math: 'U_f |+\\rangle|-\\rangle = \\frac{(-1)^{f(0)}|0\\rangle + (-1)^{f(1)}|1\\rangle}{\\sqrt{2}} |-\\rangle = (-1)^{f(0)} \\left(\\frac{|0\\rangle + (-1)^{f(0) \\oplus f(1)}|1\\rangle}{\\sqrt{2}}\\right) |-\\rangle',
        mathDisplay: true
      },
      {
        title: 'Final Hadamard & Interference',
        content: 'Applying \\(H\\) to the top qubit yields:',
        math: '|\\psi_{out}\\rangle = (-1)^{f(0)} |f(0) \\oplus f(1)\\rangle |-\\rangle',
        mathDisplay: true,
        workedExample: {
          title: 'Deutsch Decision Rule',
          problem: 'What measurement outcome corresponds to constant vs balanced?',
          solutionSteps: [
            'If f is constant: f(0) ⊕ f(1) = 0 -> top qubit is measured as |0⟩ with 100% probability.',
            'If f is balanced: f(0) ⊕ f(1) = 1 -> top qubit is measured as |1⟩ with 100% probability.'
          ],
          result: 'A single measurement deterministically reveals global property f(0) ⊕ f(1).'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-2-1',
        question: 'In Deutsch’s algorithm, what does measuring |0⟩ on the query qubit signify?',
        type: 'multiple-choice',
        options: [
          'The function f is constant',
          'The function f is balanced',
          'The quantum oracle failed',
          'f(0) = 0 and f(1) = 1'
        ],
        correctAnswer: 'The function f is constant',
        explanation: 'Measurement outcome 0 corresponds to f(0) ⊕ f(1) = 0, meaning f(0) = f(1) (constant).'
      }
    ]
  },
  {
    id: '8.3',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Deutsch-Jozsa Algorithm: Exponential Separation',
    readingTime: '20 min',
    difficulty: 'Intermediate',
    summary: 'Extend Deutsch to n-bit inputs: decide whether f: {0,1}^n -> {0,1} is constant or balanced in 1 query vs 2^{n-1}+1 classical queries.',
    sections: [
      {
        title: 'Problem Formulation',
        content: 'We are guaranteed that \\(f: \\{0, 1\\}^n \\to \\{0, 1\\}\\) is either constant (all 0s or all 1s) or balanced (exactly half 0s and half 1s). Classically, in the worst case, one must make \\(2^{n-1} + 1\\) queries to be certain. The Deutsch-Jozsa quantum algorithm decides this with a single query.',
        math: 'U_f |x\\rangle |-\\rangle = (-1)^{f(x)} |x\\rangle |-\\rangle',
        mathDisplay: true
      },
      {
        title: 'Constructive vs Destructive Interference',
        content: 'Applying \\(H^{\\otimes n}\\) to the state \\(\\frac{1}{\\sqrt{2^n}}\\sum_x (-1)^{f(x)}|x\\rangle\\) yields:',
        math: '|\\psi_{final}\\rangle = \\sum_{y} \\left( \\frac{1}{2^n} \\sum_x (-1)^{f(x) + x \\cdot y} \\right) |y\\rangle',
        mathDisplay: true,
        workedExample: {
          title: 'Amplitude of |0...0⟩',
          problem: 'Calculate the probability of measuring all zeros |0^n⟩.',
          solutionSteps: [
            'For y = 0^n, x · y = 0 for all x.',
            'Amplitude of |0^n⟩ is (1/2^n) ∑_x (-1)^{f(x)}.',
            'If f is constant: all terms have the same sign -> amplitude = ±1 -> probability = 1.',
            'If f is balanced: half are +1, half are -1 -> sum cancels to exactly 0 -> probability = 0.'
          ],
          result: 'Measuring |0...0⟩ proves constant; measuring ANY non-zero bitstring proves balanced.'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-3-1',
        question: 'What is the classical worst-case query complexity vs quantum query complexity for the Deutsch-Jozsa problem with n input bits?',
        type: 'multiple-choice',
        options: ['Classical: 2^{n-1}+1, Quantum: 1', 'Classical: n, Quantum: 1', 'Classical: 2^n, Quantum: n', 'Classical: n^2, Quantum: log(n)'],
        correctAnswer: 'Classical: 2^{n-1}+1, Quantum: 1',
        explanation: 'Classically, you could inspect 2^{n-1} inputs that all output 0, and the very next input could be 1. Quantumly, 1 query suffices.'
      }
    ]
  },
  {
    id: '8.4',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Bernstein-Vazirani Algorithm: Finding Hidden Bitstrings',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Recover an unknown secret n-bit string s where f(x) = s · x mod 2 using only 1 query instead of n classical queries.',
    sections: [
      {
        title: 'The Hidden String Problem',
        content: 'Given an oracle implementing \\(f(x) = s \\cdot x = s_1 x_1 \\oplus \\dots \\oplus s_n x_n \\pmod 2\\), find \\(s \\in \\{0, 1\\}^n\\). Classically, one must query \\(n\\) basis vectors \\(100...0, 010...0\\) to learn each bit \\(s_i\\). The Bernstein-Vazirani algorithm finds all \\(n\\) bits of \\(s\\) simultaneously in 1 single quantum query.',
        math: 'H^{\\otimes n} \\left( \\frac{1}{\\sqrt{2^n}}\\sum_x (-1)^{s \\cdot x} |x\\rangle \\right) = |s\\rangle',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-4-1',
        question: 'What state is obtained at the output of the Bernstein-Vazirani algorithm before measurement?',
        type: 'multiple-choice',
        options: ['The exact secret bitstring state |s⟩ with 100% probability', 'A uniform superposition of all strings', 'The state |0...0⟩', 'A Bell state'],
        correctAnswer: 'The exact secret bitstring state |s⟩ with 100% probability',
        explanation: 'Because H^⊗n ∑_x (-1)^{s·x}|x⟩ / √2^n is the exact Fourier transform of the secret string s, it yields |s⟩ deterministically.'
      }
    ]
  },
  {
    id: '8.5',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Simon’s Algorithm & The Genesis of Shor’s Period Finding',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Discover Simon’s problem: finding a secret period s such that f(x) = f(y) <=> x ⊕ y ∈ {0, s}, proving a provable exponential quantum speedup in O(n) queries.',
    sections: [
      {
        title: 'Simon’s Problem Statement',
        content: 'A function \\(f: \\{0, 1\\}^n \\to \\{0, 1\\}^n\\) has hidden XOR period \\(s\\) such that \\(f(x) = f(y) \\iff y = x \\oplus s\\). Classically, by the birthday paradox, finding \\(s\\) requires \\(\\Omega(2^{n/2})\\) queries. Simon’s algorithm finds \\(s\\) in \\(\\mathcal{O}(n)\\) queries.',
        math: '\\frac{1}{\\sqrt{2^{n-1}}} \\sum_{y \\cdot s = 0} |y\\rangle',
        mathDisplay: true
      },
      {
        title: 'Significance for Cryptography',
        content: 'Simon’s algorithm directly inspired Peter Shor to develop his polynomial-time quantum factoring algorithm by converting the algebraic problem of order finding into quantum period finding.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-5-1',
        question: 'What historical significance does Simon’s algorithm hold in quantum computing history?',
        type: 'multiple-choice',
        options: [
          'It provided the first provable exponential quantum speedup for a black-box problem and inspired Shor’s factoring algorithm',
          'It proved P = NP on a quantum computer',
          'It invented the surface code',
          'It built the first physical qubit'
        ],
        correctAnswer: 'It provided the first provable exponential quantum speedup for a black-box problem and inspired Shor’s factoring algorithm',
        explanation: 'Daniel Simon proved an exponential separation in query complexity (O(n) vs Ω(2^{n/2})), which inspired Shor to apply Fourier transforms to modular exponentiation.'
      }
    ]
  },
  {
    id: '8.6',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Quantum Phase Kickback Deep Dive',
    readingTime: '16 min',
    difficulty: 'Intermediate',
    summary: 'Master the phase kickback mechanism that underpins every oracle algorithm and phase estimation.',
    sections: [
      {
        title: 'Phase Kickback Lemma',
        content: 'Let \\(U\\) be a unitary operator and \\(|v\\rangle\\) an eigenstate of \\(U\\) with eigenvalue \\(e^{i\\theta}\\): \\(U|v\\rangle = e^{i\\theta}|v\\rangle\\). When a controlled-U gate is applied with control qubit \\(|+\\rangle\\) and target \\(|v\\rangle\\):',
        math: 'C_U (|+\\rangle |v\\rangle) = \\frac{|0\\rangle|v\\rangle + |1\\rangle U|v\\rangle}{\\sqrt{2}} = \\left( \\frac{|0\\rangle + e^{i\\theta}|1\\rangle}{\\sqrt{2}} \\right) |v\\rangle',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-6-1',
        question: 'In phase kickback, where does the eigenvalue phase e^{iθ} get transferred?',
        type: 'multiple-choice',
        options: ['Onto the state of the control qubit', 'Onto the target qubit exclusively', 'It dissipates as heat', 'It cancels to zero'],
        correctAnswer: 'Onto the state of the control qubit',
        explanation: 'Even though the controlled gate ostensibly targets the target register, the phase factor kicks back onto the superposition of the control qubit.'
      }
    ]
  },
  {
    id: '8.7',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Quantum Query Complexity & Polynomial Method',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Explore query lower bounds using the polynomial method of Beals et al. and Ambainis’ adversary method.',
    sections: [
      {
        title: 'The Polynomial Method',
        content: 'After \\(T\\) queries to a black-box oracle \\(x\\), the amplitudes of any quantum state can be expressed as complex polynomials in the input variables \\(x_i\\) of degree at most \\(2T\\). Therefore, lower bounds on polynomial degree translate to fundamental limits on quantum query speedups.',
        math: 'Q(f) \\ge \\frac{1}{2} \\widetilde{\\deg}(f)',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-7-1',
        question: 'What does the polynomial method prove about quantum query speedups for total boolean functions?',
        type: 'multiple-choice',
        options: [
          'Quantum query complexity is at most polynomially smaller than classical deterministic query complexity (D(f) = O(Q(f)^6))',
          'Quantum computers can solve NP-complete problems in O(1) queries',
          'All quantum algorithms run in linear time',
          'Classical computers can simulate quantum circuits in polynomial time'
        ],
        correctAnswer: 'Quantum query complexity is at most polynomially smaller than classical deterministic query complexity (D(f) = O(Q(f)^6))',
        explanation: 'For any total boolean function, the polynomial degree relationship guarantees that quantum query complexity cannot be super-polynomially faster than classical complexity.'
      }
    ]
  },
  {
    id: '8.8',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Complexity Classes: P, BPP, BQP, NP, & QMA',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Map the computational complexity landscape: locate BQP relative to P, BPP, NP, and study quantum Merlin-Arthur (QMA).',
    sections: [
      {
        title: 'Definition of BQP',
        content: 'Bounded-error Quantum Polynomial time (BQP) is the class of decision problems solvable by a polynomial-size quantum circuit with error probability \\(\\le 1/3\\).',
        math: 'P \\subseteq BPP \\subseteq BQP \\subseteq PSPACE',
        mathDisplay: true
      },
      {
        title: 'BQP and NP-Completeness',
        content: 'It is widely believed by complexity theorists that \\(NP \\not\\subseteq BQP\\); quantum computers are not expected to solve generic NP-complete problems (e.g. 3-SAT, Traveling Salesperson) in polynomial time.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-8-1',
        question: 'Do theoretical computer scientists believe that quantum computers can solve all NP-complete problems in polynomial time?',
        type: 'multiple-choice',
        options: [
          'No, it is widely believed that NP is not contained in BQP',
          'Yes, Shor’s algorithm proved NP ⊆ BQP',
          'Yes, Grover’s algorithm achieves exponential speedup for NP problems',
          'Yes, because quantum computers evaluate all inputs at once'
        ],
        correctAnswer: 'No, it is widely believed that NP is not contained in BQP',
        explanation: 'Grover only provides a quadratic speedup (O(2^{n/2})), not polynomial time, and there is no evidence that generic NP-complete problems lie inside BQP.'
      }
    ]
  },
  {
    id: '8.9',
    levelId: 8,
    moduleId: 'mod-8-1',
    title: 'Grover’s Search Algorithm: Geometric Rotation in 2D Subspace',
    readingTime: '22 min',
    difficulty: 'Intermediate',
    summary: 'Search an unsorted database of N items in O(√N) queries by rotating state vectors in a 2D plane spanned by target and non-target states.',
    sections: [
      {
        title: 'The 2D Geometry of Grover’s Algorithm',
        content: 'Let \\(|w\\rangle\\) be the marked target state, and \\(|w^\\perp\\rangle = \\frac{1}{\\sqrt{N-1}}\\sum_{x \\ne w}|x\\rangle\\) be the uniform superposition of all non-target states. The initial equal superposition state \\(|s\\rangle = \\frac{1}{\\sqrt{N}}\\sum_x |x\\rangle\\) can be written as:',
        math: '|s\\rangle = \\cos(\\theta/2) |w^\\perp\\rangle + \\sin(\\theta/2) |w\\rangle, \\quad \\text{where } \\sin(\\theta/2) = \\frac{1}{\\sqrt{N}}',
        mathDisplay: true,
        diagramType: 'grover_rotation',
        diagramProps: { step: 1 }
      },
      {
        title: 'The Grover Iteration Operator',
        content: 'Each Grover step \\(G\\) consists of two reflections: the phase oracle \\(R_w = I - 2|w\\rangle\\langle w|\\) followed by the diffusion operator \\(R_s = 2|s\\rangle\\langle s| - I\\):',
        math: 'G = R_s R_w = (2|s\\rangle\\langle s| - I)(I - 2|w\\rangle\\langle w|)',
        mathDisplay: true
      },
      {
        title: 'Net Rotation Angle',
        content: 'The product of two reflections by angle \\(\\theta/2\\) produces a pure rotation by angle \\(\\theta\\) towards \\(|w\\rangle\\):',
        math: 'G^k |s\\rangle = \\cos\\left(\\frac{2k+1}{2}\\theta\\right) |w^\\perp\\rangle + \\sin\\left(\\frac{2k+1}{2}\\theta\\right) |w\\rangle',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-9-1',
        question: 'What is the geometric action of a single Grover iteration on the 2D plane?',
        type: 'multiple-choice',
        options: ['A rotation by angle θ = 2 arcsin(1/√N) towards the target state', 'A 90-degree reflection into the Y-axis', 'A contraction towards the origin', 'A random walk'],
        correctAnswer: 'A rotation by angle θ = 2 arcsin(1/√N) towards the target state',
        explanation: 'Two successive reflections in a plane always equal a rotation by twice the angle between the reflection axes, advancing the vector towards |w⟩ by θ.'
      }
    ]
  },
  {
    id: '8.10',
    levelId: 8,
    moduleId: 'mod-8-2',
    title: 'Optimal Grover Iteration Count & Overcooking',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Calculate the optimal number of iterations R ≈ (π/4)√N and examine what happens when you run too many iterations.',
    sections: [
      {
        title: 'Optimal Number of Iterations',
        content: 'To reach \\(\\sin((2R+1)\\theta/2) \\approx 1\\), we require \\((2R+1)\\theta/2 \\approx \\pi/2\\). For large \\(N\\), \\(\\theta \\approx 2/\\sqrt{N}\\):',
        math: 'R_{opt} = \\left\\lfloor \\frac{\\pi}{4}\\sqrt{N} \\right\\rfloor',
        mathDisplay: true,
        workedExample: {
          title: 'Database of N = 1,000,000 Items',
          problem: 'How many quantum queries does Grover require to find 1 marked item in 1,000,000 entries?',
          solutionSteps: [
            '√N = √(1,000,000) = 1,000',
            'R = (π / 4) * 1,000 ≈ 0.7854 * 1,000 ≈ 785 iterations'
          ],
          result: 'Grover requires only 785 queries vs 500,000 classical queries.'
        }
      },
      {
        title: 'The Overcooking Phenomenon',
        content: 'Because Grover iteration is a periodic rotation in a 2D plane, applying more than \\(R_{opt}\\) iterations causes the state to rotate past \\(|w\\rangle\\), DECREASING the probability of success back towards 0!',
        commonMisconceptions: [
          'Assuming that running more iterations of Grover always increases success probability (it oscillates sinusoidally).'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-10-1',
        question: 'What happens if you run 2 * R_opt iterations of Grover’s algorithm?',
        type: 'multiple-choice',
        options: [
          'The state rotates past the target and the success probability drops back near zero',
          'The probability increases to 100%',
          'The state becomes entangled with the ancilla',
          'The qubits decohere immediately'
        ],
        correctAnswer: 'The state rotates past the target and the success probability drops back near zero',
        explanation: 'The state vector continues rotating around the circle; at 2*R_opt it rotates by ~π, ending back near the non-target subspace |w^⊥⟩.'
      }
    ]
  },
  {
    id: '8.11',
    levelId: 8,
    moduleId: 'mod-8-3',
    title: 'The Quantum Fourier Transform (QFT) Derivation',
    readingTime: '24 min',
    difficulty: 'Advanced',
    summary: 'Derive the exact circuit decomposition of the QFT mapping computational basis states to phase states in O(n^2) gates.',
    sections: [
      {
        title: 'Definition of the Discrete Fourier Transform on Qubits',
        content: 'The QFT performs the discrete Fourier transform on quantum amplitudes of a \\(2^n\\)-dimensional vector:',
        math: '\\text{QFT} |j\\rangle = \\frac{1}{\\sqrt{2^n}} \\sum_{k=0}^{2^n-1} e^{2\\pi i j k / 2^n} |k\\rangle',
        mathDisplay: true
      },
      {
        title: 'Product Representation Factorization',
        content: 'Remarkably, the QFT of a basis state \\(|j_1 j_2 \\dots j_n\\rangle\\) factors into an unentangled product of single-qubit states:',
        math: '\\text{QFT}|j\\rangle = \\frac{1}{\\sqrt{2^n}} (|0\\rangle + e^{2\\pi i 0.j_n}|1\\rangle)(|0\\rangle + e^{2\\pi i 0.j_{n-1}j_n}|1\\rangle) \\dots (|0\\rangle + e^{2\\pi i 0.j_1\\dots j_n}|1\\rangle)',
        mathDisplay: true
      },
      {
        title: 'Circuit Complexity: O(n^2) vs O(N log N)',
        content: 'The classical Fast Fourier Transform (FFT) requires \\(\\mathcal{O}(N \\log N) = \\mathcal{O}(n 2^n)\\) operations. The QFT requires only \\(n(n+1)/2 = \\mathcal{O}(n^2)\\) gates—an exponential speedup in operations!'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-11-1',
        question: 'How many two-qubit controlled phase gates does an n-qubit QFT circuit require?',
        type: 'multiple-choice',
        options: ['O(n^2)', 'O(2^n)', 'O(n)', 'O(n^3)'],
        correctAnswer: 'O(n^2)',
        explanation: 'Each qubit k requires controlled phase rotations with each subsequent qubit, giving n(n-1)/2 controlled phase gates = O(n^2).'
      }
    ]
  },
  {
    id: '8.12',
    levelId: 8,
    moduleId: 'mod-8-3',
    title: 'Quantum Phase Estimation (QPE)',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Estimate the eigenphase θ of an unknown unitary operator U|u⟩ = e^{2πiθ}|u⟩ with exponential precision.',
    sections: [
      {
        title: 'The QPE Architecture',
        content: 'QPE uses an evaluation register of \\(t\\) qubits prepared in \\(|+\\rangle^{\\otimes t}\\) and a target register holding eigenstate \\(|u\\rangle\\). Controlled-\\(U^{2^k}\\) gates encode phase \\(\\theta\\) into binary fractions, followed by an inverse QFT (\\(\\text{QFT}^\\dagger\\)) to extract \\(\\theta\\):',
        math: '|0\\rangle^{\\otimes t} |u\\rangle \\xrightarrow{H^{\\otimes t}} \\frac{1}{\\sqrt{2^t}}\\sum_{k=0}^{2^t-1} |k\\rangle |u\\rangle \\xrightarrow{C-U^{2^j}} \\frac{1}{\\sqrt{2^t}}\\sum_{k=0}^{2^t-1} e^{2\\pi i \\theta k} |k\\rangle |u\\rangle \\xrightarrow{\\text{QFT}^\\dagger} |\\widetilde{2^t \\theta}\\rangle |u\\rangle',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-12-1',
        question: 'What gate transform is applied at the end of Quantum Phase Estimation to read out the eigenphase?',
        type: 'multiple-choice',
        options: ['Inverse Quantum Fourier Transform (QFT†)', 'Forward QFT', 'Hadamard cascade H^⊗n', 'Grover diffusion operator'],
        correctAnswer: 'Inverse Quantum Fourier Transform (QFT†)',
        explanation: 'Controlled powers of U encode the phase as Fourier coefficients in the evaluation register; applying QFT† converts these phase frequencies into computational basis states.'
      }
    ]
  },
  {
    id: '8.13',
    levelId: 8,
    moduleId: 'mod-8-3',
    title: 'Shor’s Algorithm: Factoring & RSA Cryptanalysis',
    readingTime: '26 min',
    difficulty: 'Advanced',
    summary: 'Break RSA encryption in polynomial time O(log^3 N) by reducing integer factorization to modular order-finding via QPE.',
    sections: [
      {
        title: 'Reduction of Factoring to Order Finding',
        content: 'To factor composite number \\(N\\), pick random \\(a < N\\) with \\(\\gcd(a, N) = 1\\). The order \\(r\\) is the smallest integer such that \\(a^r \\equiv 1 \\pmod N\\). If \\(r\\) is even and \\(a^{r/2} \\not\\equiv -1 \\pmod N\\), then:',
        math: '(a^{r/2}-1)(a^{r/2}+1) = k N \\implies \\gcd(a^{r/2} \\pm 1, N) \\text{ yields non-trivial factors of } N',
        mathDisplay: true
      },
      {
        title: 'Quantum Modular Order Finding',
        content: 'Classical algorithms require sub-exponential time \\(\\exp(\\mathcal{O}(\\sqrt[3]{\\log N \\log\\log^2 N}))\\) via the General Number Field Sieve. Shor’s algorithm uses QPE on the unitary \\(U_a |y\\rangle = |ay \\pmod N\\rangle\\) to find \\(r\\) in \\(\\mathcal{O}(\\log^3 N)\\) polynomial time.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-13-1',
        question: 'Why does Shor’s algorithm threaten classical RSA public-key encryption?',
        type: 'multiple-choice',
        options: [
          'It factors large integers in polynomial time O(log^3 N), while classical security relies on factoring being exponentially difficult',
          'It guesses the private key by brute force',
          'It transmits encryption keys through wormholes',
          'It allows cloning the ciphertext'
        ],
        correctAnswer: 'It factors large integers in polynomial time O(log^3 N), while classical security relies on factoring being exponentially difficult',
        explanation: 'RSA security rests on the computational intractability of factoring large products of two primes. Shor’s algorithm solves order finding in O(log^3 N) time, efficiently breaking RSA.'
      }
    ]
  },
  {
    id: '8.14',
    levelId: 8,
    moduleId: 'mod-8-4',
    title: 'Variational Quantum Eigensolver (VQE) for Molecular Chemistry',
    readingTime: '24 min',
    difficulty: 'Advanced',
    summary: 'Find ground-state molecular energies on noisy NISQ hardware using parameterized ansatz circuits and classical optimization loops.',
    sections: [
      {
        title: 'The Rayleigh-Ritz Variational Principle',
        content: 'For any trial wavefunction \\(|\\psi(\\vec{\\theta})\\rangle\\) parameterized by angles \\(\\vec{\\theta}\\), the expectation value of Hamiltonian \\(H\\) is an upper bound on ground state energy \\(E_0\\):',
        math: '\\langle H \\rangle_{\\vec{\\theta}} = \\frac{\\langle \\psi(\\vec{\\theta}) | H | \\psi(\\vec{\\theta}) \\rangle}{\\langle \\psi(\\vec{\\theta}) | \\psi(\\vec{\\theta}) \\rangle} \\ge E_0',
        mathDisplay: true
      },
      {
        title: 'Hybrid Quantum-Classical Architecture',
        content: 'The quantum processor prepares \\(|\\psi(\\vec{\\theta})\\rangle\\) and measures Pauli string expectation values \\(\\langle P_i \\rangle\\). A classical computer aggregates \\(\\langle H \\rangle = \\sum c_i \\langle P_i \\rangle\\) and executes gradient descent (COBYLA, SPSA) to update \\(\\vec{\\theta}\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-14-1',
        question: 'In the VQE algorithm, what role does the classical computer play?',
        type: 'multiple-choice',
        options: [
          'It runs an optimization algorithm to update circuit parameters θ based on measured energy expectation values',
          'It simulates the entire quantum state matrix',
          'It cools the dilution refrigerator',
          'It computes the quantum Fourier transform'
        ],
        correctAnswer: 'It runs an optimization algorithm to update circuit parameters θ based on measured energy expectation values',
        explanation: 'VQE is a hybrid algorithm: the quantum QPUs compute expectation values of Hamiltonian terms, while classical optimizers search for parameter updates that minimize energy.'
      }
    ]
  },
  {
    id: '8.15',
    levelId: 8,
    moduleId: 'mod-8-4',
    title: 'Quantum Approximate Optimization Algorithm (QAOA)',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Solve NP-hard combinatorial optimization problems (MaxCut, graph coloring) using alternating problem and mixer Hamiltonians.',
    sections: [
      {
        title: 'QAOA State Preparation',
        content: 'QAOA alternates applications of a problem phase Hamiltonian \\(H_C\\) (cost) and a transverse field mixer Hamiltonian \\(H_B = \\sum_i X_i\\) for \\(p\\) layers:',
        math: '|\\gamma, \\beta\\rangle = e^{-i\\beta_p H_B} e^{-i\\gamma_p H_C} \\dots e^{-i\\beta_1 H_B} e^{-i\\gamma_1 H_C} |+\\rangle^{\\otimes n}',
        mathDisplay: true
      },
      {
        title: 'Adiabatic Limit Connection',
        content: 'In the limit of layer depth \\(p \\to \\infty\\), QAOA discretizes the continuous adiabatic quantum computation theorem, guaranteeing convergence to the exact global optimum.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-15-1',
        question: 'What happens to the performance of QAOA as the number of alternating layers p approaches infinity?',
        type: 'multiple-choice',
        options: [
          'It approximates the adiabatic theorem and converges toward the exact optimal solution',
          'The state depolarizes to 0',
          'The circuit size becomes sub-linear',
          'The optimization becomes classical simulated annealing'
        ],
        correctAnswer: 'It approximates the adiabatic theorem and converges toward the exact optimal solution',
        explanation: 'As p -> ∞, Trotterized QAOA can simulate continuous adiabatic state transfer arbitrarily closely, converging to the true ground state of the cost Hamiltonian.'
      }
    ]
  },
  {
    id: '8.16',
    levelId: 8,
    moduleId: 'mod-8-4',
    title: 'Quantum Machine Learning (QML) & Parameterized Quantum Circuits (PQC)',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Train quantum neural networks with parameter-shift rules, address barren plateaus, and evaluate quantum kernel methods.',
    sections: [
      {
        title: 'Quantum Neural Networks & The Parameter-Shift Rule',
        content: 'Unlike classical neural nets that use backpropagation, gradients of quantum circuit parameters can be evaluated directly on quantum hardware using two function evaluations with shift \\(\\pm \\pi/2\\):',
        math: '\\frac{\\partial \\langle O \\rangle}{\\partial \\theta_j} = \\frac{\\langle O \\rangle_{\\theta_j + \\pi/2} - \\langle O \\rangle_{\\theta_j - \\pi/2}}{2}',
        mathDisplay: true
      },
      {
        title: 'The Barren Plateau Phenomenon',
        content: 'For deep randomly initialized circuits, the variance of gradients decays exponentially in the number of qubits \\(n\\): \\(\\text{Var}\\left(\\frac{\\partial \\langle O \\rangle}{\\partial \\theta}\\right) \\in \\mathcal{O}(2^{-n})\\), causing optimization to stall without structured ansatz designs.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-8-16-1',
        question: 'Why is the Parameter-Shift Rule revolutionary for training quantum neural networks?',
        type: 'multiple-choice',
        options: [
          'It computes the EXACT analytical gradient of a quantum circuit by measuring expectation values at two shifted parameter points',
          'It eliminates the need for quantum gates',
          'It allows backpropagating through measurement collapse',
          'It guarantees zero barren plateaus'
        ],
        correctAnswer: 'It computes the EXACT analytical gradient of a quantum circuit by measuring expectation values at two shifted parameter points',
        explanation: 'The parameter-shift rule allows exact evaluation of hardware gradients without finite-difference approximation errors or invasive intermediate state probes.'
      }
    ]
  }
];
