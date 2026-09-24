// Level 6: Multi-Qubit Systems & Entanglement
// Comprehensive lessons covering composite Hilbert spaces, tensor products, Bell states, GHZ, W states, CHSH inequality, Schmidt decomposition, partial trace, and reduced density matrices.

export const LEVEL_6_LESSONS = [
  {
    id: '6.1',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Composite Quantum Systems & Tensor Product States',
    readingTime: '15 min',
    difficulty: 'Intermediate',
    summary: 'Master the mathematical representation of multi-qubit systems through the Kronecker tensor product of individual state spaces.',
    sections: [
      {
        title: 'Composite State Space Definition',
        content: 'When two or more quantum systems combine, their combined state space is not the direct sum, but the tensor product of their individual Hilbert spaces: \\(\\mathcal{H}_{AB} = \\mathcal{H}_A \\otimes \\mathcal{H}_B\\). For two single-qubit spaces \\(\\mathbb{C}^2\\), the joint space is \\(\\mathbb{C}^2 \\otimes \\mathbb{C}^2 \\cong \\mathbb{C}^4\\). In general, an n-qubit system lives in a \\(2^n\\)-dimensional complex Hilbert space.',
        math: '|\\psi\\rangle = |\\psi_A\\rangle \\otimes |\\psi_B\\rangle = \\sum_{i=0}^1 \\sum_{j=0}^1 c_{ij} |ij\\rangle, \\quad \\sum_{i,j} |c_{ij}|^2 = 1',
        mathDisplay: true,
      },
      {
        title: 'Computational Basis for Two Qubits',
        content: 'The canonical computational basis for two qubits consists of 4 orthonormal vectors ordered lexicographically: \\(|00\\rangle\\), \\(|01\\rangle\\), \\(|10\\rangle\\), and \\(|11\\rangle\\).',
        math: '|00\\rangle = \\begin{pmatrix}1\\\\0\\\\0\\\\0\\end{pmatrix}, \\quad |01\\rangle = \\begin{pmatrix}0\\\\1\\\\0\\\\0\\end{pmatrix}, \\quad |10\\rangle = \\begin{pmatrix}0\\\\0\\\\1\\\\0\\end{pmatrix}, \\quad |11\\rangle = \\begin{pmatrix}0\\\\0\\\\0\\\\1\\end{pmatrix}',
        mathDisplay: true,
        diagramType: 'bell_state',
        diagramProps: { state: '00' }
      },
      {
        title: 'Separable (Product) States vs Entangled States',
        content: 'A composite state \\(|\\psi\\rangle \\in \\mathcal{H}_A \\otimes \\mathcal{H}_B\\) is separable if and only if there exist single-qubit states \\(|a\\rangle\\) and \\(|b\\rangle\\) such that \\(|\\psi\\rangle = |a\\rangle \\otimes |b\\rangle\\). If no such factorization exists, the state is strictly entangled.',
        workedExample: {
          title: 'Testing Separability',
          problem: 'Is the state |\\psi\\rangle = \\frac{1}{2}(|00\\rangle + |01\\rangle + |10\\rangle + |11\\rangle) entangled or separable?',
          solutionSteps: [
            'Notice that |\\psi\\rangle = \\frac{1}{2}(|0\\rangle(|0\\rangle+|1\\rangle) + |1\\rangle(|0\\rangle+|1\\rangle))',
            'Factor out the common term: |\\psi\\rangle = \\left(\\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}}\\right) \\otimes \\left(\\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}}\\right)',
            'Both terms are valid normalized single-qubit states |+\\rangle \\otimes |+\\rangle.'
          ],
          result: 'The state is completely separable (product state |++\\rangle), with 0 entanglement.'
        },
        commonMisconceptions: [
          'Thinking that having multiple terms in superposition automatically means a state is entangled.',
          'Confusing tensor product (dimension 2^n) with Cartesian product or direct sum (dimension 2n).'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-1-1',
        question: 'What is the dimension of the Hilbert space for a quantum processor with 10 qubits?',
        type: 'multiple-choice',
        options: ['20', '100', '1024', '2048'],
        correctAnswer: '1024',
        explanation: 'An n-qubit system has dimension 2^n. For n=10, 2^10 = 1024.'
      },
      {
        id: 'kc-6-1-2',
        question: 'Which condition defines a state |\\psi\\rangle as entangled?',
        type: 'multiple-choice',
        options: [
          'It cannot be written as |a\\rangle \\otimes |b\\rangle for any single-qubit states',
          'Its components have imaginary amplitudes',
          'It has zero probability of measuring |00\\rangle',
          'It contains more than two qubits'
        ],
        correctAnswer: 'It cannot be written as |a\\rangle \\otimes |b\\rangle for any single-qubit states',
        explanation: 'By definition, any state in a composite Hilbert space that cannot be factored into a tensor product of subsystem states is entangled.'
      }
    ]
  },
  {
    id: '6.2',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'The Four Canonical Bell States (EPR Pairs)',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Derive and analyze the four maximally entangled two-qubit Bell states: |Φ+⟩, |Φ-⟩, |Ψ+⟩, and |Ψ-⟩, and construct their generation circuits.',
    sections: [
      {
        title: 'Bell Basis Orthonormal Set',
        content: 'The Bell basis forms a complete orthonormal basis for \\(\\mathbb{C}^4\\) consisting entirely of maximally entangled states. They are named after John Stewart Bell and are crucial building blocks for quantum teleportation, superdense coding, and quantum cryptography.',
        math: '\\begin{aligned} |\\Phi^+\\rangle &= \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\\\ |\\Phi^-\\rangle &= \\frac{|00\\rangle - |11\\rangle}{\\sqrt{2}} \\\\ |\\Psi^+\\rangle &= \\frac{|01\\rangle + |10\\rangle}{\\sqrt{2}} \\\\ |\\Psi^-\\rangle &= \\frac{|01\\rangle - |10\\rangle}{\\sqrt{2}} \\end{aligned}',
        mathDisplay: true,
        diagramType: 'bell_state',
        diagramProps: { state: 'phi_plus' }
      },
      {
        title: 'Circuit Construction of Bell States',
        content: 'Any Bell state can be generated from standard computational basis inputs using a Hadamard gate on qubit 0 followed by a CNOT targeting qubit 1:',
        math: '\\text{CNOT}_{0\\to 1}(H \\otimes I)|00\\rangle = \\text{CNOT}\\left(\\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}}\\otimes |0\\rangle\\right) = \\text{CNOT}\\left(\\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}\\right) = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} = |\\Phi^+\\rangle',
        mathDisplay: true,
        workedExample: {
          title: 'Generating |Ψ-⟩ from |11⟩',
          problem: 'Track the state evolution when input |11⟩ is passed through H on qubit 0 and CNOT from qubit 0 to qubit 1.',
          solutionSteps: [
            'Input: |11\\rangle = |1\\rangle_0 \\otimes |1\\rangle_1',
            'Apply H to qubit 0: H|1\\rangle = \\frac{|0\\rangle - |1\\rangle}{\\sqrt{2}}',
            'Joint state before CNOT: \\frac{|01\\rangle - |11\\rangle}{\\sqrt{2}}',
            'Apply CNOT (qubit 0 is control, qubit 1 is target): |01\\rangle \\to |01\\rangle, and |11\\rangle \\to |10\\rangle',
            'Resulting state: \\frac{|01\\rangle - |10\\rangle}{\\sqrt{2}} = |\\Psi^-\\rangle'
          ],
          result: 'The circuit produces the singlet state |Ψ-⟩.'
        },
        commonMisconceptions: [
          'Assuming that measuring one qubit of a Bell pair immediately transmits information to the other observer faster than light (no-signaling theorem prevents this).'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-2-1',
        question: 'If you measure qubit A of |\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} in the Z-basis and obtain 0, what is the state of qubit B?',
        type: 'multiple-choice',
        options: ['|0\\rangle with 100% certainty', '|1\\rangle with 100% certainty', '|+\\rangle', '50% probability |0\\rangle, 50% probability |1\\rangle'],
        correctAnswer: '|0\\rangle with 100% certainty',
        explanation: 'Upon measuring 0 on qubit A, the composite state instantly collapses to |00\\rangle. Thus qubit B is deterministically |0\\rangle.'
      }
    ]
  },
  {
    id: '6.3',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Non-Local Correlations & Einstein-Podolsky-Rosen (EPR) Paradox',
    readingTime: '16 min',
    difficulty: 'Advanced',
    summary: 'Explore the historical 1935 EPR thought experiment and understand how quantum entanglement challenges local realism.',
    sections: [
      {
        title: 'The EPR Hypothesis of Local Realism',
        content: 'In 1935, Einstein, Podolsky, and Rosen asserted two foundational postulates: (1) Locality: no physical influence can propagate faster than light; (2) Realism: if the value of a physical quantity can be predicted with certainty without disturbing the system, there exists an element of physical reality corresponding to it. EPR argued that because measuring one particle immediately determines the conjugate variable of the distant particle, quantum mechanics is incomplete and must contain hidden variables.',
        math: 'P(A=a, B=b | x, y) = \\int \\rho(\\lambda) P(A=a|x,\\lambda) P(B=b|y,\\lambda) d\\lambda',
        mathDisplay: true,
      },
      {
        title: 'Bohr’s Complementarity Response',
        content: 'Niels Bohr responded that the two particles in an entangled pair do not possess independent physical properties prior to measurement; the experimental setup as an undivided whole dictates the context of physical reality.',
        commonMisconceptions: [
          'Believing Einstein was proving quantum mechanics mathematically wrong; he was questioning its completeness under local realist philosophical assumptions.'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-3-1',
        question: 'What assumption did Einstein, Podolsky, and Rosen make about physical properties before measurement?',
        type: 'multiple-choice',
        options: [
          'Physical elements of reality exist independently of whether they are measured',
          'Superposition is only a subjective illusion of the brain',
          'Wavefunctions collapse faster than light',
          'Quantum computers can never simulate chemistry'
        ],
        correctAnswer: 'Physical elements of reality exist independently of whether they are measured',
        explanation: 'Local realism assumes that physical systems have definite pre-existing properties before observation, and distant actions cannot instantaneously alter them.'
      }
    ]
  },
  {
    id: '6.4',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Bell’s Theorem & CHSH Inequality Violation',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Derive the Clauser-Horne-Shimony-Holt (CHSH) inequality and see how quantum mechanics violates the classical local hidden variable bound of 2 up to Tsirelson’s bound 2√2.',
    sections: [
      {
        title: 'The CHSH Correlator',
        content: 'Consider two observers, Alice and Bob, who randomly choose measurement bases: Alice chooses between observable settings \\(A_0, A_1 \\in \\{\\pm 1\\}\\), and Bob chooses between \\(B_0, B_1 \\in \\{\\pm 1\\}\\). The CHSH correlation parameter S is defined as:',
        math: 'S = \\langle A_0 B_0 \\rangle + \\langle A_0 B_1 \\rangle + \\langle A_1 B_0 \\rangle - \\langle A_1 B_1 \\rangle',
        mathDisplay: true,
      },
      {
        title: 'Classical Bound vs Quantum Violation',
        content: 'For ANY local hidden variable theory, \\(|S_{classical}| \\le 2\\). However, when Alice and Bob share the Bell state \\(|\\Phi^+\\rangle\\) and choose angles \\(A_0 = Z, A_1 = X\\), \\(B_0 = \\frac{Z+X}{\\sqrt{2}}, B_1 = \\frac{Z-X}{\\sqrt{2}}\\), quantum mechanics yields:',
        math: 'S_{quantum} = \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}} - \\left(-\\frac{1}{\\sqrt{2}}\\right) = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2} \\approx 2.828',
        mathDisplay: true,
        workedExample: {
          title: 'Tsirelson’s Bound Calculation',
          problem: 'Calculate the maximum possible violation of the CHSH inequality allowed by the laws of quantum mechanics.',
          solutionSteps: [
            'Consider the operator C = A_0 \\otimes B_0 + A_0 \\otimes B_1 + A_1 \\otimes B_0 - A_1 \\otimes B_1',
            'Compute C^2 = 4I - [A_0, A_1] \\otimes [B_0, B_1]',
            'Since ||[A_0, A_1]|| \\le 2 and ||[B_0, B_1]|| \\le 2, ||C^2|| \\le 4 + 4 = 8',
            'Taking the square root gives ||C|| \\le \\sqrt{8} = 2\\sqrt{2}'
          ],
          result: 'Tsirelson’s bound states that no quantum state can ever exceed S = 2√2 ≈ 2.8284.'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-4-1',
        question: 'What is the maximum value of the CHSH correlator S allowed by local realistic theories, and what is the maximum allowed by quantum mechanics?',
        type: 'multiple-choice',
        options: ['Classical: 1, Quantum: 2', 'Classical: 2, Quantum: 2√2', 'Classical: 2, Quantum: 4', 'Classical: √2, Quantum: 2'],
        correctAnswer: 'Classical: 2, Quantum: 2√2',
        explanation: 'The Bell-CHSH inequality sets a strict threshold of |S| <= 2 for local hidden variable models. Quantum mechanics violates this up to Tsirelson’s bound of 2*sqrt(2) ≈ 2.828.'
      }
    ]
  },
  {
    id: '6.5',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Quantum Teleportation: Complete Circuit & Math',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Dissect the exact mathematical protocol of Bennett et al. (1993) to transfer an unknown quantum state |ψ⟩ using an entangled Bell pair and 2 classical bits.',
    sections: [
      {
        title: 'Protocol Setup',
        content: 'Alice holds an unknown quantum state \\(|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle\\) on qubit 0. Alice and Bob share an entangled Bell pair \\(|\\Phi^+\\rangle_{12}\\) on qubits 1 and 2. The 3-qubit state is \\(|\\psi\\rangle_0 \\otimes |\\Phi^+\\rangle_{12}\\).',
        math: '|\\Psi_{total}\\rangle = (\\alpha|0\\rangle + \\beta|1\\rangle) \\otimes \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle) = \\frac{1}{\\sqrt{2}}\\left(\\alpha|000\\rangle + \\alpha|011\\rangle + \\beta|100\\rangle + \\beta|111\\rangle\\right)',
        mathDisplay: true,
        diagramType: 'teleportation',
        diagramProps: { step: 0 }
      },
      {
        title: 'Alice’s Operations & Bell Measurement',
        content: 'Alice performs a CNOT gate from qubit 0 to qubit 1, then a Hadamard gate on qubit 0. Re-expressing the joint state in terms of Alice’s measurement outcomes:',
        math: '\\begin{aligned} |\\Psi_{final}\\rangle = \\frac{1}{2} \\Big[ &|00\\rangle_{01} (\\alpha|0\\rangle + \\beta|1\\rangle)_2 + |01\\rangle_{01} (\\alpha|1\\rangle + \\beta|0\\rangle)_2 \\\\ &+ |10\\rangle_{01} (\\alpha|0\\rangle - \\beta|1\\rangle)_2 + |11\\rangle_{01} (\\alpha|1\\rangle - \\beta|0\\rangle)_2 \\Big] \\end{aligned}',
        mathDisplay: true,
      },
      {
        title: 'Bob’s Classical Correction Gate',
        content: 'Alice measures her two qubits, obtaining two classical bits \\(b_0, b_1 \\in \\{0, 1\\}\\), and transmits them to Bob via a classical channel. Bob applies the unitary operation \\(Z^{b_0} X^{b_1}\\) to recover the exact state \\(|\\psi\\rangle\\):',
        math: '\\begin{array}{cc|c|c} b_0 & b_1 & \\text{Bob State} & \\text{Bob Correction} \\\\ \\hline 0 & 0 & \\alpha|0\\rangle + \\beta|1\\rangle & I \\\\ 0 & 1 & \\alpha|1\\rangle + \\beta|0\\rangle & X \\\\ 1 & 0 & \\alpha|0\\rangle - \\beta|1\\rangle & Z \\\\ 1 & 1 & \\alpha|1\\rangle - \\beta|0\\rangle & XZ = iY \\end{array}',
        mathDisplay: true,
        commonMisconceptions: [
          'Believing that teleportation violates the no-cloning theorem (the original state on Alice’s side is destroyed by measurement).',
          'Believing that teleportation allows faster-than-light communication (Bob cannot decode the state until he receives Alice’s 2 classical bits).'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-5-1',
        question: 'Why does quantum teleportation NOT allow faster-than-light communication?',
        type: 'multiple-choice',
        options: [
          'Bob cannot read the state without measuring it',
          'Bob must wait to receive 2 classical bits from Alice at speed <= c to know which Pauli correction to apply',
          'The entanglement decays instantaneously',
          'Photons cannot travel across fiber optics'
        ],
        correctAnswer: 'Bob must wait to receive 2 classical bits from Alice at speed <= c to know which Pauli correction to apply',
        explanation: 'Before Bob receives the classical measurement results, Bob’s reduced state is maximally mixed (density matrix I/2), containing zero usable information.'
      }
    ]
  },
  {
    id: '6.6',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Superdense Coding: 2 Classical Bits via 1 Qubit',
    readingTime: '15 min',
    difficulty: 'Intermediate',
    summary: 'Understand the dual of teleportation: sending 2 classical bits of information using just 1 physical qubit and pre-shared entanglement.',
    sections: [
      {
        title: 'Superdense Coding Protocol',
        content: 'Suppose Alice wants to transmit two classical bits \\(m_1 m_2 \\in \\{00, 01, 10, 11\\}\\) to Bob. Prior to transmission, Alice and Bob share the Bell pair \\(|\\Phi^+\\rangle\\). Alice applies a single local unitary operation from \\(\\{I, X, Z, XZ\\}\\) to her qubit only, transforming the shared state into one of the four orthogonal Bell states, then sends her single qubit to Bob.',
        math: '\\begin{aligned} 00 &\\implies I_A \\to |\\Phi^+\\rangle \\\\ 01 &\\implies X_A \\to |\\Psi^+\\rangle \\\\ 10 &\\implies Z_A \\to |\\Phi^-\\rangle \\\\ 11 &\\implies (XZ)_A \\to |\\Psi^-\\rangle \\end{aligned}',
        mathDisplay: true,
      },
      {
        title: 'Bob’s Bell-State Decoding Measurement',
        content: 'Upon receiving Alice’s qubit, Bob now possesses both qubits. He performs an inverse Bell circuit (CNOT followed by H on qubit 0) and measures both in the computational basis, deterministically decoding both classical bits with 100% fidelity.',
        math: '\\text{Decoder} = (H \\otimes I) \\text{CNOT}_{0\\to 1}',
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-6-1',
        question: 'How many qubits does Alice physically transmit to Bob during superdense coding?',
        type: 'multiple-choice',
        options: ['1 qubit', '2 qubits', '4 qubits', '0 qubits (pure classical transmission)'],
        correctAnswer: '1 qubit',
        explanation: 'Alice only transmits 1 qubit across the quantum channel. The presence of the pre-shared entangled pair allows that 1 qubit to encode 2 classical bits.'
      }
    ]
  },
  {
    id: '6.7',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'No-Cloning & No-Deleeting Theorems: Proofs',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Study the mathematical proofs of Wootters, Zurek, and Dieks showing why arbitrary unknown quantum states cannot be copied or deleted linearly.',
    sections: [
      {
        title: 'The Linear Unitary Contradiction',
        content: 'Suppose there exists a unitary operator U that clones any arbitrary state \\(|\\psi\\rangle\\) onto a blank state \\(|0\\rangle\\): \\(U|\\psi\\rangle|0\\rangle = |\\psi\\rangle|\\psi\\rangle\\). Consider two arbitrary states \\(|\\phi\\rangle\\) and \\(|\\psi\\rangle\\):',
        math: '\\begin{aligned} U|\\psi\\rangle|0\\rangle &= |\\psi\\rangle|\\psi\\rangle \\\\ U|\\phi\\rangle|0\\rangle &= |\\phi\\rangle|\\phi\\rangle \\end{aligned}',
        mathDisplay: true,
      },
      {
        title: 'Inner Product Invariance',
        content: 'Because U is unitary, it must preserve the inner product: \\(\\langle \\psi|0| U^\\dagger U |\\phi\\rangle|0\\rangle = \\langle \\psi|\\phi\\rangle \\langle 0|0\\rangle = \\langle \\psi|\\phi\\rangle\\). But from the cloned states:',
        math: '(\\langle \\psi|\\langle \\psi|)(|\\phi\\rangle|\\phi\\rangle) = (\\langle \\psi|\\phi\\rangle)^2 \\implies \\langle \\psi|\\phi\\rangle = (\\langle \\psi|\\phi\\rangle)^2',
        mathDisplay: true,
      },
      {
        title: 'Rigorous Conclusion',
        content: 'The quadratic equation \\(x = x^2\\) has only two solutions: \\(x = 0\\) (orthogonal states) or \\(x = 1\\) (identical states). Therefore, a cloning machine can only clone mutually orthogonal states, and cannot clone an arbitrary unknown quantum state.',
        commonMisconceptions: [
          'Thinking that classical copies are impossible; the restriction is purely on unknown non-orthogonal quantum superposition states.',
          'Thinking quantum error correction is impossible due to no-cloning; quantum error correction distributes entanglement rather than copying state amplitudes.'
        ]
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-7-1',
        question: 'Under what condition CAN two quantum states |ψ⟩ and |φ⟩ be cloned by the same unitary machine?',
        type: 'multiple-choice',
        options: [
          'If and only if they are orthogonal (⟨ψ|φ⟩ = 0) or identical (|⟨ψ|φ⟩| = 1)',
          'Whenever both states have real coefficients',
          'Only when both states are in the ground state |0⟩',
          'Never under any circumstances'
        ],
        correctAnswer: 'If and only if they are orthogonal (⟨ψ|φ⟩ = 0) or identical (|⟨ψ|φ⟩| = 1)',
        explanation: 'The inner product condition requires ⟨ψ|φ⟩ = (⟨ψ|φ⟩)^2, which is satisfied only for inner product 0 (orthogonal) or 1 (identical).'
      }
    ]
  },
  {
    id: '6.8',
    levelId: 6,
    moduleId: 'mod-6-1',
    title: 'Entanglement Monotones & Concurrence',
    readingTime: '16 min',
    difficulty: 'Advanced',
    summary: 'Quantify entanglement mathematically using Wootters concurrence, entanglement of formation, and positive partial transpose (PPT).',
    sections: [
      {
        title: 'Definition of Entanglement Monotone',
        content: 'An entanglement monotone is any functional \\(E(\\rho)\\) that does not increase under Local Operations and Classical Communication (LOCC): \\(E(\\Lambda_{\\text{LOCC}}(\\rho)) \\le E(\\rho)\\). Pure product states have \\(E = 0\\), while Bell states achieve maximum value \\(E = 1\\).',
        math: 'E(\\rho) \\ge 0, \\quad E(|\\psi\\rangle\\langle\\psi|) = 0 \\iff |\\psi\\rangle = |a\\rangle\\otimes|b\\rangle',
        mathDisplay: true
      },
      {
        title: 'Wootters Concurrence for Pure 2-Qubit States',
        content: 'For an arbitrary normalized two-qubit pure state \\(|\\psi\\rangle = c_{00}|00\\rangle + c_{01}|01\\rangle + c_{10}|10\\rangle + c_{11}|11\\rangle\\), the concurrence \\(C(|\\psi\\rangle)\\) is:',
        math: 'C(|\\psi\\rangle) = 2 |c_{00} c_{11} - c_{01} c_{10}|',
        mathDisplay: true,
        workedExample: {
          title: 'Concurrence of Bell State',
          problem: 'Calculate concurrence for |Φ+⟩ = (1/√2)|00⟩ + (1/√2)|11⟩.',
          solutionSteps: [
            'Identify amplitudes: c00 = 1/√2, c01 = 0, c10 = 0, c11 = 1/√2',
            'Compute: C = 2 |(1/√2)(1/√2) - (0)(0)| = 2 * (1/2) = 1.0'
          ],
          result: 'Concurrence is exactly 1.0, proving |Φ+⟩ is maximally entangled.'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-8-1',
        question: 'What is the concurrence of the separable state |+0\\rangle = \\frac{|00\\rangle + |10\\rangle}{\\sqrt{2}}?',
        type: 'multiple-choice',
        options: ['0', '0.5', '1.0', '1/√2'],
        correctAnswer: '0',
        explanation: 'For |+0⟩, c00 = 1/√2, c10 = 1/√2, c01 = 0, c11 = 0. Concurrence = 2|c00*c11 - c01*c10| = 2|0 - 0| = 0.'
      }
    ]
  },
  {
    id: '6.9',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Greenberger-Horne-Zeilinger (GHZ) States',
    readingTime: '16 min',
    difficulty: 'Intermediate',
    summary: 'Study genuinely multipartite entangled 3-qubit GHZ states and understand their extreme sensitivity to single-qubit loss.',
    sections: [
      {
        title: 'The Canonical 3-Qubit GHZ State',
        content: 'The GHZ state represents genuine tripartite entanglement that cannot be factored into any bipartite subsystem:',
        math: '|\\text{GHZ}\\rangle = \\frac{|000\\rangle + |111\\rangle}{\\sqrt{2}}',
        mathDisplay: true,
        diagramType: 'circuit',
        diagramProps: { type: 'ghz' }
      },
      {
        title: 'Circuit Generation of GHZ',
        content: 'GHZ states can be generated using a Hadamard gate on qubit 0 followed by a cascade of CNOT gates:',
        math: '|000\\rangle \\xrightarrow{H_0} \\frac{|0\\rangle+|1\\rangle}{\\sqrt{2}}|00\\rangle \\xrightarrow{\\text{CNOT}_{0\\to 1}} \\frac{|000\\rangle+|110\\rangle}{\\sqrt{2}} \\xrightarrow{\\text{CNOT}_{1\\to 2}} \\frac{|000\\rangle+|111\\rangle}{\\sqrt{2}}',
        mathDisplay: true,
      },
      {
        title: 'Fragility Under Tracing / Loss',
        content: 'If any single qubit of a GHZ state is lost, traced out, or measured in the Z-basis, the remaining two qubits lose all quantum coherence and collapse into an unentangled classical mixture \\(\\frac{1}{2}|00\\rangle\\langle 00| + \\frac{1}{2}|11\\rangle\\langle 11|\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-9-1',
        question: 'What happens to the remaining two qubits if one qubit of a 3-qubit GHZ state is traced out?',
        type: 'multiple-choice',
        options: [
          'They become a classical mixed state with 0 entanglement',
          'They remain maximally entangled Bell pairs',
          'They collapse to |00\\rangle always',
          'They invert to a W-state'
        ],
        correctAnswer: 'They become a classical mixed state with 0 entanglement',
        explanation: 'Tracing out any single qubit in a GHZ state leaves an incoherent statistical mixture of |00⟩ and |11⟩ with zero bipartite entanglement.'
      }
    ]
  },
  {
    id: '6.10',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'W States & Robustness Against Particle Loss',
    readingTime: '15 min',
    difficulty: 'Intermediate',
    summary: 'Compare the W-state family to GHZ states and discover how W states retain bipartite entanglement even when one particle is discarded.',
    sections: [
      {
        title: 'Definition of the W State',
        content: 'The 3-qubit W-state is an equal superposition of all states containing exactly one excitation (one |1⟩):',
        math: '|W\\rangle = \\frac{|001\\rangle + |010\\rangle + |100\\rangle}{\\sqrt{3}}',
        mathDisplay: true,
      },
      {
        title: 'Robustness Comparison: GHZ vs W',
        content: 'Unlike the GHZ state, if one qubit of a W state is traced out, the remaining two qubits retain non-zero bipartite entanglement. Specifically, if qubit 3 is measured and found to be 0 (with probability 2/3), the remaining two qubits are in the entangled state \\(\\frac{|01\\rangle + |10\\rangle}{\\sqrt{2}} = |\\Psi^+\\rangle\\).'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-10-1',
        question: 'Why are W states considered more robust to loss than GHZ states?',
        type: 'multiple-choice',
        options: [
          'The remaining qubits retain entanglement when one qubit is lost',
          'They require fewer gates to build',
          'They are impervious to bit flips',
          'They have higher energy than GHZ states'
        ],
        correctAnswer: 'The remaining qubits retain entanglement when one qubit is lost',
        explanation: 'In a W state, tracing out one qubit leaves residual bipartite entanglement in the remaining subsystem, whereas GHZ states lose all entanglement upon single-qubit loss.'
      }
    ]
  },
  {
    id: '6.11',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Density Operator Formalism: Pure vs Mixed States',
    readingTime: '20 min',
    difficulty: 'Advanced',
    summary: 'Formulate quantum mechanics using density matrices ρ, enabling the unified description of coherent superpositions and classical statistical ensembles.',
    sections: [
      {
        title: 'The Density Matrix Definition',
        content: 'A quantum system whose state is not known with certainty, but described by an ensemble of states \\(\\{p_i, |\\psi_i\\rangle\\}\\) where \\(\\sum p_i = 1\\), is represented by the density operator \\(\\rho\\):',
        math: '\\rho = \\sum_i p_i |\\psi_i\\rangle \\langle\\psi_i|, \\quad \\text{Tr}(\\rho) = 1, \\quad \\rho \\ge 0',
        mathDisplay: true,
      },
      {
        title: 'Purity Criterion',
        content: 'The purity of a state is \\(\\gamma = \\text{Tr}(\\rho^2)\\). A state is pure if and only if \\(\\text{Tr}(\\rho^2) = 1\\) (equivalent to \\(\\rho^2 = \\rho\\)). For a d-dimensional mixed state, \\(\\frac{1}{d} \\le \\text{Tr}(\\rho^2) < 1\\). For a maximally mixed single qubit, \\(\\rho = \\frac{1}{2}I\\) and \\(\\text{Tr}(\\rho^2) = 0.5\\).',
        math: '\\text{Purity}(\\rho) = \\text{Tr}(\\rho^2) \\begin{cases} = 1 & \\text{Pure state} \\\\ < 1 & \\text{Mixed state} \\end{cases}',
        mathDisplay: true,
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-11-1',
        question: 'What is the purity Tr(ρ^2) for the maximally mixed state of a single qubit ρ = I/2?',
        type: 'multiple-choice',
        options: ['1.0', '0.5', '0.25', '0.0'],
        correctAnswer: '0.5',
        explanation: '(I/2)^2 = I/4. The trace of I/4 in 2 dimensions is (1/4) + (1/4) = 1/2 = 0.5.'
      }
    ]
  },
  {
    id: '6.12',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'The Partial Trace & Reduced Density Matrix',
    readingTime: '22 min',
    difficulty: 'Advanced',
    summary: 'Master the partial trace operation Tr_B to extract subsystem states from composite entangled systems.',
    sections: [
      {
        title: 'Definition of the Partial Trace',
        content: 'For a bipartite system \\(\\mathcal{H}_A \\otimes \\mathcal{H}_B\\), the reduced density matrix \\(\\rho_A\\) describing subsystem A alone is defined by tracing over subsystem B:',
        math: '\\rho_A = \\text{Tr}_B(\\rho_{AB}) = \\sum_k (I_A \\otimes \\langle k_B|) \\rho_{AB} (I_A \\otimes |k_B\\rangle)',
        mathDisplay: true,
      },
      {
        title: 'Reduced State of an Entangled Pair',
        content: 'Consider the pure Bell state \\(|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}\\). Its full density matrix is \\(\\rho_{AB} = |\\Phi^+\\rangle\\langle\\Phi^+|\\). Taking the partial trace over qubit B yields:',
        math: '\\rho_A = \\text{Tr}_B(|\\Phi^+\\rangle\\langle\\Phi^+|) = \\frac{1}{2}|0\\rangle\\langle 0| + \\frac{1}{2}|1\\rangle\\langle 1| = \\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/2 \\end{pmatrix} = \\frac{I}{2}',
        mathDisplay: true,
        workedExample: {
          title: 'Computing Reduced State of |Φ+⟩',
          problem: 'Prove that Tr_B(|Φ+⟩⟨Φ+|) equals I/2.',
          solutionSteps: [
            'Write |Φ+⟩⟨Φ+| = (1/2)(|00⟩⟨00| + |00⟩⟨11| + |11⟩⟨00| + |11⟩⟨11|)',
            'Apply basis projectors: ⟨0_B|...|0_B⟩ extracts terms where qubit B is |0⟩: (1/2)|0⟩⟨0|',
            'Apply basis projectors: ⟨1_B|...|1_B⟩ extracts terms where qubit B is |1⟩: (1/2)|1⟩⟨1|',
            'Sum: ρ_A = (1/2)(|0⟩⟨0| + |1⟩⟨1|) = I/2'
          ],
          result: 'Subsystem A is in the maximally mixed state.'
        }
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-12-1',
        question: 'When a composite pure state |ψ_{AB}⟩ is maximally entangled, what is the reduced density matrix of subsystem A?',
        type: 'multiple-choice',
        options: ['A pure ground state |0⟩⟨0|', 'A maximally mixed state proportional to the identity I/d_A', 'A state with zero trace', 'An undefined operator'],
        correctAnswer: 'A maximally mixed state proportional to the identity I/d_A',
        explanation: 'For any maximally entangled bipartite state, tracing out one subsystem yields the maximally mixed state on the remaining subsystem.'
      }
    ]
  },
  {
    id: '6.13',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Schmidt Decomposition & Entanglement Spectrum',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Decompose any pure bipartite state into canonical Schmidt bases with positive Schmidt coefficients.',
    sections: [
      {
        title: 'Schmidt Theorem',
        content: 'Any pure state \\(|\\psi\\rangle \\in \\mathcal{H}_A \\otimes \\mathcal{H}_B\\) can be written in the diagonal form:',
        math: '|\\psi\\rangle = \\sum_{i=1}^k \\lambda_i |u_i\\rangle_A |v_i\\rangle_B, \\quad \\lambda_i > 0, \\quad \\sum_{i=1}^k \\lambda_i^2 = 1',
        mathDisplay: true,
      },
      {
        title: 'Schmidt Rank',
        content: 'The number of non-zero Schmidt coefficients \\(k\\) is called the Schmidt rank. A state is separable if and only if its Schmidt rank is 1. If \\(k > 1\\), the state is entangled.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-13-1',
        question: 'What is the Schmidt rank of any separable pure state?',
        type: 'multiple-choice',
        options: ['0', '1', '2', 'Equal to the dimension of the space'],
        correctAnswer: '1',
        explanation: 'A separable state factors as |a⟩ ⊗ |b⟩, which has exactly one non-zero Schmidt coefficient, so its Schmidt rank is 1.'
      }
    ]
  },
  {
    id: '6.14',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Quantum Discord: Beyond Entanglement',
    readingTime: '16 min',
    difficulty: 'Advanced',
    summary: 'Examine quantum discord as a measure of non-classical correlations in mixed states that have zero entanglement.',
    sections: [
      {
        title: 'Concept of Quantum Discord',
        content: 'Not all quantum correlations are captured by entanglement. Even unentangled separable mixed states can possess quantum correlations known as quantum discord, arising from the non-commutativity of measurement observables.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-14-1',
        question: 'Can a separable (unentangled) mixed state possess non-zero quantum discord?',
        type: 'multiple-choice',
        options: ['Yes', 'No', 'Only at absolute zero', 'Only if it has negative purity'],
        correctAnswer: 'Yes',
        explanation: 'Quantum discord measures total quantum correlations beyond entanglement; certain separable mixed states exhibit non-zero discord due to measurement disturbance.'
      }
    ]
  },
  {
    id: '6.15',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Entanglement Swapping & Quantum Repeaters',
    readingTime: '18 min',
    difficulty: 'Advanced',
    summary: 'Entangle two distant particles that have never interacted by performing a Bell-state measurement on intermediary particles.',
    sections: [
      {
        title: 'The Entanglement Swapping Protocol',
        content: 'Consider two independent Bell pairs: pair 1-2 shared between Alice and Relay R, and pair 3-4 shared between Relay R and Bob. Qubit 1 and 4 have never interacted. If Relay R performs a Bell-state measurement on qubits 2 and 3, qubits 1 and 4 instantly become entangled.',
        math: '|\\Phi^+\\rangle_{12} \\otimes |\\Phi^+\\rangle_{34} = \\frac{1}{2}\\sum_{k=1}^4 |B_k\\rangle_{23} |B_k\\rangle_{14}',
        mathDisplay: true,
      },
      {
        title: 'Quantum Repeater Networks',
        content: 'Entanglement swapping forms the foundation of long-distance quantum repeaters, overcoming exponential optical fiber attenuation without requiring direct transmission of single photons over thousands of kilometers.'
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-15-1',
        question: 'In entanglement swapping, do the two particles that become entangled ever interact directly?',
        type: 'multiple-choice',
        options: ['No, they never interact directly', 'Yes, they must collide in a beam splitter', 'Yes, through magnetic dipoles', 'Only if they share the same physical cable'],
        correctAnswer: 'No, they never interact directly',
        explanation: 'Entanglement is swapped to the two distant endpoints by performing a Bell measurement on two intermediary entangled partners, with zero direct interaction between the endpoints.'
      }
    ]
  },
  {
    id: '6.16',
    levelId: 6,
    moduleId: 'mod-6-2',
    title: 'Multi-Qubit OpenQASM Coding & Circuit Patterns',
    readingTime: '18 min',
    difficulty: 'Intermediate',
    summary: 'Write and simulate real multi-qubit circuits in OpenQASM 2.0 & 3.0 for Bell pairs, GHZ, teleportation, and swaps.',
    sections: [
      {
        title: 'OpenQASM 2.0 Bell & GHZ Generators',
        content: 'Study standard industry OpenQASM representations for multi-qubit entanglement:',
        math: `OPENQASM 2.0;
include "qelib1.inc";
qreg q[3];
creg c[3];

// 3-qubit GHZ state
h q[0];
cx q[0], q[1];
cx q[1], q[2];
measure q -> c;`,
        mathDisplay: true
      }
    ],
    knowledgeCheck: [
      {
        id: 'kc-6-16-1',
        question: 'What OpenQASM instruction applies a CNOT gate with control qubit 0 and target qubit 1?',
        type: 'multiple-choice',
        options: ['cx q[0], q[1];', 'cnot q[1], q[0];', 'c-x q0 -> q1;', 'gate cx(q[0], q[1]);'],
        correctAnswer: 'cx q[0], q[1];',
        explanation: 'In OpenQASM 2.0, the standard controlled-NOT gate is invoked as cx control, target;.'
      }
    ]
  }
];
