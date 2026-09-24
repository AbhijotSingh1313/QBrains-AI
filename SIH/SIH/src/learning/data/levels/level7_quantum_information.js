// Level 7: Quantum Information & Error Correction
// Comprehensive lessons covering Von Neumann entropy, quantum channels, Kraus maps, Lindblad dynamics, T1/T2, 3-qubit codes, Shor's 9-qubit code, Knill-Laflamme conditions, stabilizer formalism, and surface codes.

export const LEVEL_7_LESSONS = [
  {
    id: '7.1',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Shannon Entropy vs Von Neumann Entropy',
    readingTime: '16 min',
    difficulty: 'Intermediate',
    summary: 'Bridge classical information theory and quantum information through the Von Neumann entropy of density operators.',
    sections: [
      {
        title: 'Classical Shannon Entropy',
        content: 'Claude Shannon defined the informational entropy of a discrete probability distribution \\(P = (p_1, \\dots, p_n)\\) as the expected uncertainty or surprise:',
        math: 'H(X) = -\\sum_{i=1}^n p_i \\log_2 p_i',
        mathDisplay: true
      },
      {
        title: 'Quantum Von Neumann Entropy',
        content: 'John von Neumann extended entropy to quantum density operators \\(\\rho\\). If \\(\\rho\\) has spectral decomposition \\(\\rho = \\sum_i \\lambda_i |i\\rangle\\langle i|\\), its entropy \\(S(\\rho)\\) is:',
        math: 'S(\\rho) = -\\text{Tr}(\\rho \\log_2 \\rho) = -\\sum_i \\lambda_i \\log_2 \\lambda_i',
        mathDisplay: true,
        workedExample: {
          title: 'Entropy of Pure vs Maximally Mixed States',
          problem: 'Compute S(ρ) for (a) any pure state |ψ⟩⟨ψ|, and (b) a single-qubit maximally mixed state I/2.',
          solutionSteps: [
            '(a) Pure state has eigenvalues {1, 0}: S = -1 log2(1) = 0 bits.',
            '(b) Maximally mixed state has eigenvalues {1/2, 1/2}: S = -(1/2 log2(1/2) + 1/2 log2(1/2)) = -(-1/2 - 1/2) = 1 bit.'
          ],
          result: 'Pure states contain 0 entropy; a maximally mixed qubit has maximum entropy of 1 bit.'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-1-1',
        question: 'What is the Von Neumann entropy of any pure quantum state?',
        type: 'multiple-choice',
        options: ['0', '1 bit', 'ln(2)', 'Infinity'],
        correctAnswer: '0',
        explanation: 'A pure state represents perfect knowledge of the quantum state with no statistical mixing, so S(ρ) = 0.'
      }
    ]
  },
  {
    id: '7.2',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Properties of Quantum Entropy & Subadditivity',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Study the mathematical axioms and properties of quantum entropy: invariance, subadditivity, and strong subadditivity.',
    sections: [
      {
        title: 'Subadditivity of Quantum Entropy',
        content: 'For any bipartite quantum system \\(\\rho_{AB}\\), the joint entropy is upper-bounded by the sum of subsystem entropies, with equality if and only if the subsystems are completely uncorrelated (product state \\(\\rho_A \\otimes \\rho_B\\)):',
        math: 'S(\\rho_{AB}) \\le S(\\rho_A) + S(\\rho_B)',
        mathDisplay: true
      },
      {
        title: 'Quantum Violation of Classical Subsystem Entropy Bounds',
        content: 'In classical information theory, a joint distribution always has entropy greater than or equal to either marginal: \\(H(XY) \\ge H(X)\\). In quantum mechanics, however, an entangled pure state has \\(S(\\rho_{AB}) = 0\\), while each subsystem has \\(S(\\rho_A) = S(\\rho_B) = 1\\). Thus, \\(S(\\rho_{AB}) < S(\\rho_A)\\)—a strictly quantum phenomenon!',
        commonMisconceptions: [
          'Assuming that composite quantum systems must always have more entropy than their individual parts.'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-2-1',
        question: 'For an entangled Bell pair |Φ+⟩, how does the joint entropy S(AB) compare to the subsystem entropy S(A)?',
        type: 'multiple-choice',
        options: ['S(AB) = 0 and S(A) = 1, so S(AB) < S(A)', 'S(AB) = 2 and S(A) = 1', 'S(AB) = S(A) = 1', 'S(AB) = S(A) = 0'],
        correctAnswer: 'S(AB) = 0 and S(A) = 1, so S(AB) < S(A)',
        explanation: 'The joint state is pure (entropy 0), but the reduced subsystem state is maximally mixed (entropy 1). This is impossible in classical probability.'
      }
    ]
  },
  {
    id: '7.3',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Quantum Relative Entropy & Mutual Information',
    readingTime: '17 min',
    difficulty: 'Advanced',
    summary: 'Quantify state distinguishability and total correlations (classical + quantum) using relative entropy and quantum mutual information.',
    sections: [
      {
        title: 'Quantum Relative Entropy',
        content: 'The quantum relative entropy \\(S(\\rho || \\sigma)\\) generalizes the Kullback-Leibler divergence to quantum states:',
        math: 'S(\\rho || \\sigma) = \\text{Tr}(\\rho \\log_2 \\rho) - \\text{Tr}(\\rho \\log_2 \\sigma)',
        mathDisplay: true
      },
      {
        title: 'Quantum Mutual Information',
        content: 'The total correlation between two subsystems A and B is given by the quantum mutual information \\(I(A:B)\\):',
        math: 'I(A:B) = S(\\rho_A) + S(\\rho_B) - S(\\rho_{AB})',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-3-1',
        question: 'What is the quantum mutual information I(A:B) for a maximally entangled Bell pair?',
        type: 'multiple-choice',
        options: ['2 bits', '1 bit', '0 bits', '4 bits'],
        correctAnswer: '2 bits',
        explanation: 'For a Bell pair, S(A) = 1, S(B) = 1, and S(AB) = 0. Therefore I(A:B) = 1 + 1 - 0 = 2 bits.'
      }
    ]
  },
  {
    id: '7.4',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Quantum Operations & Completely Positive Trace-Preserving (CPTP) Maps',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Formulate open quantum systems and noise processes as linear transformations satisfying complete positivity and trace preservation.',
    sections: [
      {
        title: 'Axioms of Physical Quantum Channels',
        content: 'Any physically realizable quantum operation \\(\\mathcal{E}\\) mapping density matrices to density matrices must satisfy two rigorous conditions: (1) Trace preservation: \\(\\text{Tr}(\\mathcal{E}(\\rho)) = \\text{Tr}(\\rho) = 1\\); (2) Complete positivity: for any ancilla space of arbitrary dimension \\(d\\), the extended map \\(\\mathcal{E} \\otimes I_d\\) must map positive semi-definite operators to positive semi-definite operators.',
        math: '(\\mathcal{E} \\otimes I_d)(\\rho_{AE}) \\ge 0 \\quad \\forall d \\ge 1, \\rho_{AE} \\ge 0',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-4-1',
        question: 'Why is standard positivity alone insufficient for a physical quantum channel?',
        type: 'multiple-choice',
        options: [
          'Because when applied to one half of an entangled pair, a merely positive map (like matrix transposition) can produce unphysical negative probabilities',
          'Because trace is not preserved',
          'Because it violates conservation of energy',
          'Because classical computers cannot simulate it'
        ],
        correctAnswer: 'Because when applied to one half of an entangled pair, a merely positive map (like matrix transposition) can produce unphysical negative probabilities',
        explanation: 'The partial transpose is positive but not completely positive; when applied to a Bell pair, it produces negative eigenvalues, demonstrating that physical channels must be completely positive.'
      }
    ]
  },
  {
    id: '7.5',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Kraus Representation Theorem',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Express any CPTP quantum channel as a sum of operator sandwich operations using Kraus operators {E_k}.',
    sections: [
      {
        title: 'Kraus Operator Sum Form',
        content: 'The Kraus Representation Theorem (Choi-Jamiołkowski isomorphism) states that any CPTP map \\(\\mathcal{E}\\) on a Hilbert space \\(\\mathcal{H}\\) can be written as:',
        math: '\\mathcal{E}(\\rho) = \\sum_k E_k \\rho E_k^\\dagger, \\quad \\text{with completeness relation} \\quad \\sum_k E_k^\\dagger E_k = I',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-5-1',
        question: 'What mathematical condition must the set of Kraus operators {E_k} satisfy for the channel to be trace-preserving?',
        type: 'multiple-choice',
        options: ['\\sum_k E_k^\\dagger E_k = I', '\\sum_k E_k E_k^\\dagger = 0', '\\text{Tr}(E_k) = 1', 'E_k^2 = I'],
        correctAnswer: '\\sum_k E_k^\\dagger E_k = I',
        explanation: 'Trace preservation Tr(E(ρ)) = Tr(∑ Ek ρ Ek†) = Tr(ρ ∑ Ek† Ek) = Tr(ρ) requires ∑ Ek† Ek = I.'
      }
    ]
  },
  {
    id: '7.6',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Bit-Flip, Phase-Flip & Depolarizing Noise Channels',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Model the three fundamental discrete Pauli error channels in quantum hardware.',
    sections: [
      {
        title: 'Bit-Flip Channel',
        content: 'Applies an X gate with error probability \\(p\\):',
        math: 'E_0 = \\sqrt{1-p} I, \\quad E_1 = \\sqrt{p} X \\implies \\mathcal{E}_{BF}(\\rho) = (1-p)\\rho + p X \\rho X',
        mathDisplay: true
      },
      {
        title: 'Phase-Flip Channel',
        content: 'Applies a Z gate with error probability \\(p\\):',
        math: 'E_0 = \\sqrt{1-p} I, \\quad E_1 = \\sqrt{p} Z \\implies \\mathcal{E}_{PF}(\\rho) = (1-p)\\rho + p Z \\rho Z',
        mathDisplay: true
      },
      {
        title: 'Depolarizing Channel',
        content: 'Isotropically contracts the Bloch sphere towards the completely mixed center:',
        math: '\\mathcal{E}_{depol}(\\rho) = (1-p)\\rho + \\frac{p}{3}(X\\rho X + Y\\rho Y + Z\\rho Z) = (1-\\frac{4p}{3})\\rho + \\frac{4p}{3}\\frac{I}{2}',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-6-1',
        question: 'What does the depolarizing channel do geometrically to the Bloch vector?',
        type: 'multiple-choice',
        options: ['Uniformly shrinks the radius of the Bloch sphere towards the origin', 'Rotates the Bloch sphere around the Z-axis', 'Flips the north pole to the south pole', 'Stretches the sphere into an ellipsoid'],
        correctAnswer: 'Uniformly shrinks the radius of the Bloch sphere towards the origin',
        explanation: 'Depolarizing noise is symmetric across X, Y, and Z, uniformly contracting the Bloch sphere radius r -> (1 - 4p/3)r without changing orientation.'
      }
    ]
  },
  {
    id: '7.7',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Amplitude Damping Channel & T1 Relaxation Time',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Model spontaneous emission and thermodynamic energy loss from the excited state |1⟩ to ground state |0⟩ with characteristic time T1.',
    sections: [
      {
        title: 'Physical Mechanism & Kraus Operators',
        content: 'Amplitude damping models an atom or superconducting transmon decaying spontaneously by releasing a photon into a cold bath. With decay probability \\(\\gamma = 1 - e^{-t/T_1}\\):',
        math: 'E_0 = \\begin{pmatrix} 1 & 0 \\\\ 0 & \\sqrt{1-\\gamma} \\end{pmatrix}, \\quad E_1 = \\begin{pmatrix} 0 & \\sqrt{\\gamma} \\\\ 0 & 0 \\end{pmatrix}',
        mathDisplay: true
      },
      {
        title: 'Evolution of Density Matrix',
        content: 'Under amplitude damping, an initial state \\(\\rho = \\begin{pmatrix} \\rho_{00} & \\rho_{01} \\\\ \\rho_{10} & \\rho_{11} \\end{pmatrix}\\) relaxes over time:',
        math: '\\rho(t) = \\begin{pmatrix} \\rho_{00} + \\rho_{11}(1-e^{-t/T_1}) & \\rho_{01} e^{-t/2T_1} \\\\ \\rho_{10} e^{-t/2T_1} & \\rho_{11} e^{-t/T_1} \\end{pmatrix}',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-7-1',
        question: 'What is the asymptotic steady state of a qubit undergoing amplitude damping into a zero-temperature environment as t -> ∞?',
        type: 'multiple-choice',
        options: ['The ground state |0⟩⟨0|', 'The maximally mixed state I/2', 'The excited state |1⟩⟨1|', 'The superposition state |+⟩⟨+|'],
        correctAnswer: 'The ground state |0⟩⟨0|',
        explanation: 'Over long times (t >> T1), all excited population relaxes to the ground state |0⟩ with probability 1.'
      }
    ]
  },
  {
    id: '7.8',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Phase Damping (T2*) & Dephasing Mechanics',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Analyze pure dephasing T_phi and the fundamental relation between energy relaxation T1 and coherence time T2.',
    sections: [
      {
        title: 'Phase Damping Channel',
        content: 'Phase damping causes loss of quantum phase coherence without exchanging energy with the environment. The off-diagonal coherence terms decay exponentially:',
        math: '\\rho(t) = \\begin{pmatrix} \\rho_{00} & \\rho_{01} e^{-t/T_2} \\\\ \\rho_{10} e^{-t/T_2} & \\rho_{11} \\end{pmatrix}',
        mathDisplay: true
      },
      {
        title: 'The T1 vs T2 Relation',
        content: 'Total dephasing rate \\(1/T_2\\) consists of energy relaxation contribution \\(1/(2T_1)\\) and pure dephasing \\(1/T_\\phi\\):',
        math: '\\frac{1}{T_2} = \\frac{1}{2T_1} + \\frac{1}{T_\\phi} \\implies T_2 \\le 2 T_1',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-8-1',
        question: 'What is the theoretical maximum possible value of T2 for a qubit with relaxation time T1 = 100 microseconds?',
        type: 'multiple-choice',
        options: ['200 microseconds', '100 microseconds', '50 microseconds', 'Unlimited'],
        correctAnswer: '200 microseconds',
        explanation: 'Since 1/T2 = 1/(2T1) + 1/T_phi, even in the limit of zero pure dephasing (T_phi -> ∞), T2 can never exceed 2*T1.'
      }
    ]
  },
  {
    id: '7.9',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'The Lindblad Master Equation for Open Quantum Systems',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Derive continuous-time open system dynamics under the Markovian approximation using the Gorini-Kossakowski-Sudarshan-Lindblad (GKSL) equation.',
    sections: [
      {
        title: 'The Lindblad Equation',
        content: 'The most general generator of completely positive, trace-preserving Markovian quantum dynamical semigroups is:',
        math: '\\frac{d\\rho}{dt} = -\\frac{i}{\\hbar}[H, \\rho] + \\sum_k \\gamma_k \\left( L_k \\rho L_k^\\dagger - \\frac{1}{2}\\{L_k^\\dagger L_k, \\rho\\} \\right)',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-9-1',
        question: 'In the Lindblad equation, what term governs the coherent (reversible) unitary evolution?',
        type: 'multiple-choice',
        options: ['-(i/ℏ)[H, ρ]', '∑ L_k ρ L_k†', '-(1/2){L_k† L_k, ρ}', 'Tr(ρ^2)'],
        correctAnswer: '-(i/ℏ)[H, ρ]',
        explanation: 'The commutator with the Hamiltonian H generates the unitary von Neumann dynamics, while the Lindblad dissipators model decoherence.'
      }
    ]
  },
  {
    id: '7.10',
    levelId: 7,
    moduleId: 'mod-7-1',
    title: 'Quantum Process Tomography & Randomized Benchmarking',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Experimentally reconstruct quantum channels using quantum process tomography (Chi matrix) and measure average gate fidelities with randomized benchmarking.',
    sections: [
      {
        title: 'Randomized Benchmarking (RB)',
        content: 'Randomized benchmarking applies random sequences of Clifford gates of varying length m followed by an inversion gate, decoupling physical gate errors from state preparation and measurement (SPAM) errors:',
        math: 'F_{seq}(m) = A p^m + B, \\quad r = \\frac{d-1}{d}(1-p)',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-10-1',
        question: 'Why is Randomized Benchmarking (RB) preferred over Quantum Process Tomography for calibrating modern quantum processors?',
        type: 'multiple-choice',
        options: [
          'RB isolates gate infidelity from State Preparation and Measurement (SPAM) errors and scales efficiently',
          'RB requires zero quantum gates',
          'RB can only test classical circuits',
          'Process tomography cannot handle single qubits'
        ],
        correctAnswer: 'RB isolates gate infidelity from State Preparation and Measurement (SPAM) errors and scales efficiently',
        explanation: 'Process tomography requires exponential measurements and confounds gate errors with SPAM errors; RB isolates average gate error per Clifford with polynomial scaling.'
      }
    ]
  },
  {
    id: '7.11',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'Foundations of Quantum Error Correction (QECC)',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Discover how quantum error correction overcomes the no-cloning theorem, continuous errors, and measurement collapse by entangling data with ancilla syndromes.',
    sections: [
      {
        title: 'The Three Hurdles to Quantum Error Correction',
        content: 'Classical error correction relies on the repetition code (0 -> 000, 1 -> 111). In quantum systems, this is obstructed by: (1) No-Cloning Theorem (cannot copy arbitrary |ψ⟩); (2) Continuous Errors (rotation angles θ can be infinitesimal); (3) Measurement Collapse (measuring qubits destroys quantum superpositions).',
      },
      {
        title: 'The Quantum Solution',
        content: 'Quantum error correction solves all three: (1) Entangling with ancillae rather than cloning; (2) Digitization of errors: correcting discrete Pauli errors X and Z automatically corrects all continuous linear superpositions of errors; (3) Non-destructive syndrome measurements: measuring multi-qubit parity operators without learning data amplitudes.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-11-1',
        question: 'How does quantum error correction protect against continuous angle errors like R_x(θ)?',
        type: 'multiple-choice',
        options: [
          'Any continuous error can be decomposed as a linear combination of Pauli matrices {I, X, Y, Z}, and syndrome measurement projects the error into a discrete Pauli error',
          'By using analog error correction filters',
          'Continuous errors do not occur in superconducting qubits',
          'By measuring the exact state with infinite precision'
        ],
        correctAnswer: 'Any continuous error can be decomposed as a linear combination of Pauli matrices {I, X, Y, Z}, and syndrome measurement projects the error into a discrete Pauli error',
        explanation: 'Syndrome measurement acts as a projection that discretizes continuous errors into Pauli basis operators {I, X, Y, Z}. Correcting the Pauli errors corrects the entire continuous channel.'
      }
    ]
  },
  {
    id: '7.12',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'The 3-Qubit Bit-Flip Code & Parity Syndromes',
    readingTime: '20 min',
    difficulty: 'Intermediate',
    summary: 'Implement the 3-qubit bit-flip code: encode logical states, measure stabilizer parity generators Z1Z2 and Z2Z3, and correct single-qubit X errors.',
    sections: [
      {
        title: 'Code Space Definition',
        content: 'The 3-qubit bit-flip code encodes 1 logical qubit into 3 physical qubits:',
        math: '|0_L\\rangle = |000\\rangle, \\quad |1_L\\rangle = |111\\rangle',
        mathDisplay: true
      },
      {
        title: 'Syndrome Measurement Using Ancillae',
        content: 'We measure the two parity generators \\(S_1 = Z_1 Z_2\\) and \\(S_2 = Z_2 Z_3\\) without measuring individual qubits:',
        math: '\\begin{array}{cc|c|c} S_1 (Z_1 Z_2) & S_2 (Z_2 Z_3) & \\text{Error Detected} & \\text{Correction} \\\\ \\hline +1 & +1 & \\text{No error} & I \\\\ -1 & +1 & X_1 \\text{ on qubit 1} & X_1 \\\\ -1 & -1 & X_2 \\text{ on qubit 2} & X_2 \\\\ +1 & -1 & X_3 \\text{ on qubit 3} & X_3 \\end{array}',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-12-1',
        question: 'If syndrome measurement of the 3-qubit bit-flip code yields Z1Z2 = -1 and Z2Z3 = -1, which qubit suffered a bit flip?',
        type: 'multiple-choice',
        options: ['Qubit 2', 'Qubit 1', 'Qubit 3', 'None'],
        correctAnswer: 'Qubit 2',
        explanation: 'Qubit 2 is involved in both checks; flipping qubit 2 makes both Z1Z2 and Z2Z3 evaluate to -1.'
      }
    ]
  },
  {
    id: '7.13',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'The 3-Qubit Phase-Flip Code',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Protect against phase-flip (Z) errors by applying Hadamard transforms to map the bit-flip code into the X-basis.',
    sections: [
      {
        title: 'Phase-Flip Code Space',
        content: 'The 3-qubit phase-flip code encodes:',
        math: '|0_L\\rangle = |+++\\rangle, \\quad |1_L\\rangle = |---\\rangle',
        mathDisplay: true
      },
      {
        title: 'Stabilizer Generators',
        content: 'Syndrome extraction measures the X-basis parities \\(S_1 = X_1 X_2\\) and \\(S_2 = X_2 X_3\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-13-1',
        question: 'What logical basis is used to define codewords in the 3-qubit phase-flip code?',
        type: 'multiple-choice',
        options: ['The Hadamard X-basis |+⟩ and |-⟩', 'The computational Z-basis |0⟩ and |1⟩', 'The circular Y-basis |+i⟩ and |-i⟩', 'Bell states'],
        correctAnswer: 'The Hadamard X-basis |+⟩ and |-⟩',
        explanation: 'By working in the X-basis |+⟩ and |-⟩, phase flips (Z errors) act as bit flips, allowing standard parity detection.'
      }
    ]
  },
  {
    id: '7.14',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'Shor’s 9-Qubit Code: Concatenating Bit & Phase Protection',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Concatenate the bit-flip and phase-flip codes into Shor’s 9-qubit code to protect against any arbitrary single-qubit error.',
    sections: [
      {
        title: 'Codewords of Shor’s Code',
        content: 'Peter Shor combined the 3-qubit phase code with the 3-qubit bit code into a 9-qubit nested code:',
        math: '\\begin{aligned} |0_L\\rangle &= \\frac{1}{2\\sqrt{2}}(|000\\rangle+|111\\rangle)(|000\\rangle+|111\\rangle)(|000\\rangle+|111\\rangle) \\\\ |1_L\\rangle &= \\frac{1}{2\\sqrt{2}}(|000\\rangle-|111\\rangle)(|000\\rangle-|111\\rangle)(|000\\rangle-|111\\rangle) \\end{aligned}',
        mathDisplay: true
      },
      {
        title: 'Universal Single-Qubit Error Correction',
        content: 'Because Shor’s code corrects both any single X error and any single Z error, it corrects \\(Y = iXZ\\) and by linearity protects against ANY arbitrary single-qubit error matrix \\(E = c_0 I + c_1 X + c_2 Y + c_3 Z\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-14-1',
        question: 'How many physical qubits does Shor’s code use to protect 1 logical qubit against arbitrary single-qubit errors?',
        type: 'multiple-choice',
        options: ['9', '7', '5', '3'],
        correctAnswer: '9',
        explanation: 'Shor’s code uses 9 physical qubits organized as three 3-qubit clusters.'
      }
    ]
  },
  {
    id: '7.15',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'Knill-Laflamme Quantum Error Correction Criteria',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Master the rigorous necessary and sufficient conditions for a quantum subspace to correct a set of errors {E_a}.',
    sections: [
      {
        title: 'The Knill-Laflamme Theorem',
        content: 'Let \\(\\mathcal{C}\\) be a quantum code with projector \\(P\\). The code can correct the error set \\(\\{E_a\\}\\) if and only if for all \\(a, b\\):',
        math: 'P E_a^\\dagger E_b P = \\alpha_{ab} P',
        mathDisplay: true
      },
      {
        title: 'Physical Meaning',
        content: 'The condition means: (1) Different errors must send orthogonal codewords to orthogonal subspaces (no confusion between errors); (2) The error cannot reveal information about which logical codeword was encoded (\\(\\alpha_{ab}\\) is independent of the state in the codespace).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-15-1',
        question: 'Why does the Knill-Laflamme condition require P E_a† E_b P = α_{ab} P where α_{ab} does not depend on the state?',
        type: 'multiple-choice',
        options: [
          'To ensure syndrome extraction reveals no information about the stored logical superposition, preventing wavefunction collapse',
          'To minimize energy dissipation',
          'To guarantee the gates commute with H',
          'Because all matrices must be diagonal'
        ],
        correctAnswer: 'To ensure syndrome extraction reveals no information about the stored logical superposition, preventing wavefunction collapse',
        explanation: 'If the matrix elements depended on the specific logical state, measuring the syndrome would act as a partial measurement of the data, collapsing the logical superposition.'
      }
    ]
  },
  {
    id: '7.16',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'Stabilizer Formalism & The Pauli Group',
    readingTime: '24 min',
    difficulty: 'Advanced',
    summary: 'Harness the Gottesman stabilizer formalism to describe n-qubit quantum codes using abelian subgroups of the Pauli group.',
    sections: [
      {
        title: 'The n-Qubit Pauli Group',
        content: 'The n-qubit Pauli group \\(\\mathcal{G}_n\\) consists of all tensor products of Pauli matrices \\(\\{I, X, Y, Z\\}^{\\otimes n}\\) with global phases \\(\\{\\pm 1, \\pm i\\}\\).',
        math: '\\mathcal{G}_n = \\{\\pm 1, \\pm i\\} \\times \\{I, X, Y, Z\\}^{\\otimes n}',
        mathDisplay: true
      },
      {
        title: 'Stabilizer Subspace Definition',
        content: 'An abelian subgroup \\(\\mathcal{S} \\subset \\mathcal{G}_n\\) with \\(-I \\notin \\mathcal{S}\\) defines a stabilizer code space \\(V_{\\mathcal{S}}\\) as the joint +1 eigenspace of all generators:',
        math: 'V_{\\mathcal{S}} = \\{ |\\psi\\rangle \\in (\\mathbb{C}^2)^{\\otimes n} \\;:\\; S |\\psi\\rangle = |\\psi\\rangle \\quad \\forall S \\in \\mathcal{S} \\}',
        mathDisplay: true
      },
      {
        title: 'Code Parameters [[n, k, d]]',
        content: 'If \\(\\mathcal{S}\\) is generated by \\(n - k\\) independent commuting Pauli operators, the stabilized subspace has dimension \\(2^k\\), encoding \\(k\\) logical qubits into \\(n\\) physical qubits with code distance \\(d\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-16-1',
        question: 'In an [[n, k, d]] stabilizer code, how many independent generators does the stabilizer group S have?',
        type: 'multiple-choice',
        options: ['n - k', 'k', '2^n', 'n + k'],
        correctAnswer: 'n - k',
        explanation: 'Each independent commuting stabilizer cut the Hilbert space dimension in half. Starting from 2^n, n - k generators reduce the dimension to 2^k, which represents k logical qubits.'
      }
    ]
  },
  {
    id: '7.17',
    levelId: 7,
    moduleId: 'mod-7-2',
    title: 'Surface Codes & The Path to Fault-Tolerant Quantum Computing',
    readingTime: '25 min',
    difficulty: 'Advanced',
    summary: 'Explore the 2D surface code: planar lattice topology, star and plaquette syndrome checks, threshold theorem (~1%), and logical Clifford operations.',
    sections: [
      {
        title: 'Surface Code Lattice Geometry',
        content: 'The surface code arranges data qubits on the edges of a 2D square lattice with ancilla qubits at vertices and faces. Star operators \\(A_s = \\prod_{i \\in v} X_i\\) detect Z errors, and plaquette operators \\(B_p = \\prod_{j \\in f} Z_j\\) detect X errors.',
        math: 'A_s = X_1 X_2 X_3 X_4, \\quad B_p = Z_1 Z_2 Z_3 Z_4',
        mathDisplay: true
      },
      {
        title: 'The Fault-Tolerance Threshold',
        content: 'The surface code has a remarkably high physical error threshold of approximately \\(1\\%\\) (0.01) per gate, making it the primary architecture pursued by Google Quantum AI, IBM, and leading research labs worldwide.',
        commonMisconceptions: [
          'Assuming surface code eliminates hardware noise; it tolerates noise below threshold and scales exponentially in code distance d.'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-7-17-1',
        question: 'Why is the 2D surface code the leading architecture for hardware implementations of fault-tolerant quantum computers?',
        type: 'multiple-choice',
        options: [
          'It requires only nearest-neighbor physical 2D connectivity and has a high error threshold (~1%)',
          'It eliminates the need for physical qubits',
          'It allows cloning arbitrary states',
          'It operates without cryogenics'
        ],
        correctAnswer: 'It requires only nearest-neighbor physical 2D connectivity and has a high error threshold (~1%)',
        explanation: 'Unlike long-range codes, surface codes only require local nearest-neighbor couplers in a 2D planar grid and feature an error threshold around 1%.'
      }
    ]
  }
];
