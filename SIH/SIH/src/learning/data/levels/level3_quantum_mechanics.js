/**
 * Level 3: Quantum Mechanics Foundations (Lessons 3.1 - 3.24)
 * Historical birth, wave-particle duality, superposition, uncertainty, tunneling, and Schrödinger dynamics.
 */

export const LEVEL_3_LESSONS = [
  {
    id: '3.1',
    title: 'Birth of Quantum Mechanics',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Historical Origin & The Quantum Hypothesis',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.10'],
    objectives: [
      'Trace the timeline from Planck (1900) to Schrödinger, Heisenberg, and Born (1925-1926)',
      'Understand the conceptual revolution from continuous to discrete physical quantities',
      'Why QC needs this: The fundamental laws of qubits were discovered during this revolutionary period'
    ],
    intuition: 'At the dawn of the 20th century, physics experienced its greatest revolution since Isaac Newton. The classical picture of a smooth, continuous, predictable clockwork universe was shattered. Instead, nature revealed that at its most fundamental atomic scale, energy comes in indivisible packets ("quanta"), states exist as probabilistic superpositions, and the very act of observation changes physical reality.',
    sections: [
      {
        heading: 'The 25-Year Revolution (1900-1926)',
        content: '• 1900: Max Planck discovers energy quantization (E = nhf) to solve blackbody radiation.\n• 1905: Albert Einstein proposes the photon to explain the photoelectric effect.\n• 1913: Niels Bohr quantizes electron orbits in the hydrogen atom.\n• 1924: Louis de Broglie proposes that all matter (electrons, atoms) behaves as waves.\n• 1925: Werner Heisenberg invents Matrix Mechanics and the Uncertainty Principle.\n• 1926: Erwin Schrödinger formulates wave mechanics, and Max Born provides the probabilistic interpretation.'
      }
    ],
    equations: [
      {
        label: 'The Quantum of Action',
        latex: 'h = 6.62607015 \\times 10^{-34} \\text{ J}\\cdot\\text{s}',
        explanation: 'Planck\'s constant h sets the universal physical scale below which quantum effects dominate.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why did Max Planck refer to his own energy quantization hypothesis in December 1900 as an "act of desperation"?',
      solution: 'Planck was a strict classical thermodynamicist. To fit the experimental blackbody radiation curve, he was forced to mathematically assume that atomic oscillators could only absorb and emit energy in discrete lumps E = hf, which directly contradicted all known laws of 19th-century continuous physics.',
      derivationSteps: [
        'Classical equipartition gave Rayleigh-Jeans UV catastrophe.',
        'Planck assumed discrete states E_n = n * h * f.',
        'Average energy became <E> = hf / (e^{hf / k_B T} - 1).',
        'At high f, <E> -> 0, preventing infinite UV radiation!'
      ]
    },
    commonMisconceptions: [
      'Planck did not originally believe that light itself traveled as particles; he thought only the atomic walls absorbed energy discretely. Einstein was the first to state that light itself is quantized into photons.'
    ],
    quickCheck: {
      question: 'Who introduced the probabilistic interpretation of the wavefunction (the Born Rule P = |psi|^2)?',
      options: [
        'Albert Einstein',
        'Max Born',
        'Isaac Newton',
        'Galileo Galilei'
      ],
      correctIndex: 1,
      explanation: 'Max Born proposed in 1926 that the modulus squared of the wavefunction represents physical probability density, earning the 1954 Nobel Prize.'
    },
    summary: 'Quantum mechanics emerged between 1900 and 1926 through Planck, Einstein, Bohr, de Broglie, Heisenberg, Schrödinger, and Born.',
    keyEquations: ['E = hf', 'P(x) = |\\psi(x)|^2'],
    videoIds: ['vid-birth-qm'],
    references: ['Jammer, M., The Conceptual Development of Quantum Mechanics.']
  },
  {
    id: '3.2',
    title: 'Blackbody Radiation',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Historical Origin & The Quantum Hypothesis',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.1', '2.6'],
    objectives: [
      'Define an ideal blackbody as an object that absorbs and emits all radiation',
      'Understand the Ultraviolet Catastrophe predicted by classical Rayleigh-Jeans law',
      'Analyze Planck\'s blackbody radiation law'
    ],
    intuition: 'Think of a hot glowing iron poker in a forge: as it heats up, it glows dull red, then bright orange, then incandescent white-blue. Classical physics predicted that any warm object should emit an infinite amount of high-frequency ultraviolet and X-ray radiation, instantly killing anyone standing near a campfire! The fact that ovens do not incinerate the universe was the first proof that classical physics was broken.',
    sections: [
      {
        heading: 'The Ultraviolet Catastrophe',
        content: 'Classical thermodynamics (Rayleigh-Jeans Law) applied the equipartition theorem, assigning equal thermal energy k_B*T to every standing wave mode in a cavity. Because higher frequencies have infinitely many modes (density of states g(f) ~ f^2), the total radiated energy density diverged to infinity: u(f) df = (8pi f^2 / c^3) k_B T df -> infinity as f -> infinity!'
      },
      {
        heading: 'Planck\'s Quantization Solution',
        content: 'Planck assumed that an oscillator can only emit energy in discrete multiples of hf. At high frequencies, a single quantum hf is vastly larger than the available thermal energy k_B*T, freezing out high-frequency modes exponentially via the Boltzmann factor e^(-hf/k_B T).'
      }
    ],
    equations: [
      {
        label: 'Planck Blackbody Radiation Law',
        latex: 'u(f, T) = \\frac{8\\pi h f^3}{c^3} \\frac{1}{e^{hf / k_B T} - 1}',
        explanation: 'The spectral energy density of blackbody radiation at temperature T, resolving the ultraviolet catastrophe.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Show that Planck\'s law reproduces the classical Rayleigh-Jeans law in the low-frequency limit (hf << k_B T).',
      solution: 'Taylor expand the exponential: e^x approx 1 + x for x << 1, where x = hf / (k_B T). Then e^(hf / k_B T) - 1 approx hf / (k_B T). Substituting this into Planck\'s formula: u(f, T) approx (8pi h f^3 / c^3) * (k_B T / (hf)) = (8pi f^2 / c^3) k_B T. This matches the classical Rayleigh-Jeans law exactly!',
      derivationSteps: [
        'Set x = hf / (k_B T) << 1.',
        'e^x - 1 approx x = hf / (k_B T).',
        'u(f) = (8pi h f^3 / c^3) * [k_B T / (hf)].',
        'h cancels out, leaving (8pi f^2 / c^3) k_B T.',
        'Conclusion: Classical physics is the low-frequency limit of quantum mechanics!'
      ]
    },
    commonMisconceptions: [
      'A blackbody is not necessarily black in color. The Sun is an almost perfect blackbody emitter at T = 5,778 K.'
    ],
    quickCheck: {
      question: 'What mathematical factor in Planck\'s formula prevents the high-frequency ultraviolet catastrophe?',
      options: [
        'The speed of light c squared',
        'The exponential term 1 / (e^{hf / k_B T} - 1) which drops to zero exponentially as f -> infinity',
        'The square root of temperature',
        'The gravitational constant'
      ],
      correctIndex: 1,
      explanation: 'The exponential Boltzmann denominator suppresses high-frequency emission because creating an energetic photon requires more energy than thermal fluctuations can supply.'
    },
    summary: 'Blackbody radiation was the birthplace of quantum physics, resolved by Planck\'s discovery of energy quantization E = nhf.',
    keyEquations: ['u(f, T) = \\frac{8\\pi h f^3}{c^3} \\frac{1}{e^{hf/k_B T} - 1}'],
    videoIds: ['vid-blackbody-radiation'],
    references: ['Planck, M. (1900). Ueber eine Verbesserung der Wien\'schen Spectralgleichung.']
  },
  {
    id: '3.3',
    title: 'Planck\'s Quantum Hypothesis',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Historical Origin & The Quantum Hypothesis',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.2'],
    objectives: [
      'State Planck\'s hypothesis: Energy exchange occurs in discrete integer multiples E = n*h*f',
      'Understand the physical meaning of Planck\'s constant h as an action quantum (Joule*seconds)',
      'Connect discrete energy levels to atomic transitions in qubits'
    ],
    intuition: 'Imagine a staircase versus a smooth ramp. In classical physics, energy was like a ramp: you could stand at any continuous height you wanted. Planck\'s quantum hypothesis revealed that the microscopic universe is a staircase: you can stand on the 1st step, the 2nd step, or the 3rd step, but you CANNOT stand at height 1.73! Energy is exchanged in discrete packets called quanta.',
    sections: [
      {
        heading: 'The Discrete Energy Spectrum',
        content: 'E_n = n * h * f, where n in {0, 1, 2, ...}. The minimum non-zero energy exchanged is Delta E = h*f. In quantum computing, artificial superconducting circuits use non-linear Josephson junctions to create an anharmonic staircase where the distance between step 0 and step 1 is unique (f_01 approx 5 GHz), isolating our computational qubit states |0> and |1>.'
      }
    ],
    equations: [
      {
        label: 'Discrete Energy Levels',
        latex: 'E_n = n h f = n \\hbar \\omega \\quad (n = 0, 1, 2, \\dots)',
        explanation: 'Energy is quantized in discrete packets of size hf.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A molecular bond vibrates at frequency f = 8.0 * 10^13 Hz. What is the minimum energy quantum required to excite this vibration by one level?',
      solution: 'Delta E = h * f = (6.626 * 10^-34 J*s) * (8.0 * 10^13 s^-1) = 5.30 * 10^-20 Joules = 0.33 eV (infrared spectrum).',
      derivationSteps: [
        'Delta E = h * f.',
        'Delta E = 6.626 * 10^{-34} * 8.0 * 10^{13} = 5.30 * 10^{-20} J.',
        'Convert to eV: 5.30 * 10^{-20} / 1.602 * 10^{-19} = 0.33 eV.'
      ]
    },
    commonMisconceptions: [
      'Energy quantization does not mean that time or space are necessarily pixelated; it means the bound energy states of oscillators and atoms are discrete.'
    ],
    quickCheck: {
      question: 'What are the SI units of Planck\'s constant h?',
      options: [
        'Joules per second (J/s)',
        'Joule-seconds (J * s) or kg * m^2 / s',
        'Newtons (N)',
        'Meters per second (m/s)'
      ],
      correctIndex: 1,
      explanation: 'Planck\'s constant has units of Action (Energy * Time = Joule * seconds).'
    },
    summary: 'Planck\'s quantum hypothesis established that energy is quantized in discrete units E = nhf.',
    keyEquations: ['\\Delta E = h f = \\hbar\\omega'],
    videoIds: ['vid-planck-hypothesis'],
    references: ['Eisberg & Resnick, Chapter 1.']
  },
  {
    id: '3.4',
    title: 'Photoelectric Effect',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Historical Origin & The Quantum Hypothesis',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.8', '3.3'],
    objectives: [
      'Derive Einstein\'s photoelectric equation: K_max = h*f - Phi',
      'Explain stopping potential V_s: e*V_s = K_max',
      'Understand how the photoelectric effect proved the photon hypothesis'
    ],
    intuition: 'When light shines on a metal, it knocks out electrons. Classical wave theory predicted that if you used dim light, there would be a time delay as the wave slowly deposited energy. In reality, electrons are ejected with ZERO delay! Even with dim light, as long as the frequency is above the threshold, an electron absorbs an entire photon in one collision and flies out immediately.',
    sections: [
      {
        heading: 'Stopping Potential V_s',
        content: 'By applying a reverse electric voltage V_s to stop the fastest ejected photoelectrons, we measure their maximum kinetic energy: K_max = e * V_s. Graphing stopping potential V_s against light frequency f produces a straight line with slope h/e, providing a direct measurement of Planck\'s constant h!'
      }
    ],
    equations: [
      {
        label: 'Stopping Potential Relation',
        latex: 'e V_s = K_{\\max} = h f - \\Phi \\implies V_s = \\left(\\frac{h}{e}\\right)f - \\frac{\\Phi}{e}',
        explanation: 'Linear relation between stopping potential V_s and light frequency f with slope h/e.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Light of wavelength 300 nm shines on a potassium surface (work function Phi = 2.3 eV). What is the stopping potential V_s?',
      solution: 'Photon energy: E = h*c / lambda = (1240 eV*nm) / (300 nm) = 4.13 eV. Maximum kinetic energy: K_max = E - Phi = 4.13 eV - 2.3 eV = 1.83 eV. Since e*V_s = 1.83 eV, the stopping potential is V_s = 1.83 Volts.',
      derivationSteps: [
        'E = (6.626 * 10^{-34} * 3 * 10^8) / (300 * 10^{-9}) = 6.626 * 10^{-19} J.',
        'In eV: 6.626 * 10^{-19} / 1.602 * 10^{-19} = 4.13 eV.',
        'K_max = 4.13 - 2.30 = 1.83 eV.',
        'V_s = 1.83 V.'
      ]
    },
    commonMisconceptions: [
      'The work function Phi is a material property of the metal surface, NOT a property of the incoming light.'
    ],
    quickCheck: {
      question: 'What does the slope of the stopping potential vs frequency graph (V_s vs f) represent?',
      options: [
        'The speed of light c',
        'The ratio of Planck\'s constant to electron charge (h / e)',
        'The metal work function Phi',
        'The electric current'
      ],
      correctIndex: 1,
      explanation: 'Slope = h/e, a universal constant independent of the target metal.'
    },
    summary: 'The photoelectric effect showed that light delivers energy in discrete photon quanta (e*V_s = h*f - Phi).',
    keyEquations: ['e V_s = h f - \\Phi', 'E = \\frac{h c}{\\lambda}'],
    videoIds: ['vid-photoelectric-deep'],
    references: ['Einstein, A. (1905), Annalen der Physik.']
  },
  {
    id: '3.5',
    title: 'Photon Concept',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Historical Origin & The Quantum Hypothesis',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.4'],
    objectives: [
      'Define a photon as a quantum particle of light with zero rest mass (m = 0)',
      'Calculate photon relativistic momentum: p = E/c = h/lambda',
      'Explain Compton scattering and radiation pressure'
    ],
    intuition: 'A photon is a packet of pure electromagnetic energy traveling at the speed of light. Although a photon has zero rest mass, it carries real, physical momentum! If you shine a laser at an asteroid in space, the photons bouncing off it push the asteroid forward (radiation pressure). In photonic quantum computing, single photons carry quantum bits through silicon waveguides.',
    sections: [
      {
        heading: 'Photon Momentum & Compton Scattering',
        content: 'From Einstein\'s relativistic energy equation E^2 = (pc)^2 + (m_0 c^2)^2, setting rest mass m_0 = 0 gives E = p*c. Therefore, a photon carries momentum p = E/c = h/lambda. In 1923, Arthur Compton fired X-ray photons at electrons and proved that photons collide and scatter like miniature billiard balls!'
      }
    ],
    equations: [
      {
        label: 'Photon Energy and Momentum',
        latex: 'E = h f, \\quad p = \\frac{h}{\\lambda} = \\hbar k, \\quad m_0 = 0',
        explanation: 'Relates photon momentum p directly to its wavelength lambda.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the momentum of a green laser photon with wavelength lambda = 532 nm.',
      solution: 'p = h / lambda = (6.626 * 10^-34 J*s) / (532 * 10^-9 m) = 1.245 * 10^-27 kg*m/s.',
      derivationSteps: [
        'p = h / lambda.',
        'p = (6.626 * 10^{-34}) / (5.32 * 10^{-7}).',
        'p = 1.25 * 10^{-27} kg * m / s.'
      ]
    },
    commonMisconceptions: [
      'Having zero rest mass does NOT mean a photon has zero momentum. Its momentum is carried entirely by its wave frequency and wavelength.'
    ],
    quickCheck: {
      question: 'What is the momentum p of a photon with wavelength lambda?',
      options: [
        'p = m * c',
        'p = h / lambda',
        'p = h * lambda',
        'p = 0'
      ],
      correctIndex: 1,
      explanation: 'p = h / lambda, the fundamental relation connecting particle momentum to wavelength.'
    },
    summary: 'A photon is a massless quantum of light with energy E = hf and momentum p = h/lambda.',
    keyEquations: ['p = \\frac{h}{\\lambda}', 'E = p c'],
    videoIds: ['vid-photon-concept'],
    references: ['Compton, A. H. (1923). A Quantum Theory of the Scattering of X-rays by Light Elements. Phys. Rev.']
  },
  {
    id: '3.6',
    title: 'Dual Nature of Matter',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Matter Waves & Double-Slit Experiment',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.5'],
    objectives: [
      'Recognize wave-particle duality as a universal property of all matter and radiation',
      'Explain how particles exhibit wave interference and waves exhibit particle collisions',
      'Understand the shift from classical trajectory to probability wavefunctions'
    ],
    intuition: 'If light—which everyone thought was a wave—can act like a stream of particles (photons), could particles of matter—like electrons and atoms—also act like waves? In 1924, a young French prince named Louis de Broglie asked this bold question. Nature loves symmetry: everything in the universe possesses a dual wave-particle nature.',
    sections: [
      {
        heading: 'Universal Wave-Particle Duality',
        content: 'Light behaves as a wave during propagation (producing interference and diffraction), but behaves as discrete localized particles (photons) during emission and absorption. Symmetrically, electrons, neutrons, and atoms travel as wavepackets that undergo diffraction, but strike detectors as discrete, localized particles.'
      }
    ],
    equations: [
      {
        label: 'Universal Duality Relation',
        latex: '\\text{Particles (Energy } E\\text{, Momentum } p\\text{)} \\longleftrightarrow \\text{Waves (Frequency } f\\text{, Wavelength } \\lambda\\text{)}',
        explanation: 'Bridges classical particle properties (E, p) with wave properties (f, lambda).'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Does an electron travel as a wave or a particle in a quantum computer?',
      solution: 'During the algorithm execution, the electron\'s wavefunction evolves coherently across quantum gates as a wave, exploring superpositions and interfering. When readout/measurement occurs, the electron is detected at a single discrete physical location as a particle with probability |psi(x)|^2.',
      derivationSteps: [
        'Propagation: Governed by Schrödinger wave equation i*hbar*d|psi>/dt = H|psi>.',
        'Measurement: Governed by Born rule collapse to localized eigenstate |x_0>.',
        'Conclusion: It propagates as a wave and is detected as a particle.'
      ]
    },
    commonMisconceptions: [
      'Wave-particle duality does not mean an electron is "sometimes a marble, sometimes a water wave." It is a quantum entity whose behavior is fully described by a statevector that exhibits wave interference upon propagation and particle localization upon measurement.'
    ],
    quickCheck: {
      question: 'Under what physical circumstances does a quantum entity exhibit wave-like behavior?',
      options: [
        'Only when heated to 10,000 Kelvin.',
        'During coherent propagation when it is not being measured or observed.',
        'Only in deep outer space.',
        'When it is at absolute zero.'
      ],
      correctIndex: 1,
      explanation: 'Wave interference occurs during coherent propagation; measurement forces particle-like localization.'
    },
    summary: 'All entities in nature possess wave-particle duality: propagating as probability waves and interacting as discrete particles.',
    keyEquations: ['E = h f', 'p = \\frac{h}{\\lambda}'],
    videoIds: ['vid-wave-particle-duality'],
    references: ['de Broglie, L. (1924). Recherches sur la théorie des quanta (Doctoral thesis).']
  },
  {
    id: '3.7',
    title: 'de Broglie Hypothesis',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Matter Waves & Double-Slit Experiment',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['3.6'],
    objectives: [
      'State de Broglie\'s relation: lambda = h / p = h / (m*v)',
      'Calculate de Broglie wavelengths for electrons, atoms, and macroscopic objects',
      'Explain why electron microscopes have thousands of times higher resolution than optical microscopes'
    ],
    intuition: 'Louis de Broglie proposed that every moving mass m with velocity v has an associated wavelength lambda = h / (m*v). An electron moving at 1% the speed of light has a wavelength of ~0.24 nanometers—comparable to the spacing between atoms in a crystal! Because electron wavelengths are 100,000 times smaller than visible light, electron microscopes can resolve individual viruses and atoms.',
    sections: [
      {
        heading: 'The de Broglie Formula',
        content: 'lambda = h / p. For non-relativistic particles (v << c), momentum is p = m*v, so lambda = h / (m*v). In terms of kinetic energy K = p^2 / (2m), lambda = h / sqrt(2mK).'
      }
    ],
    equations: [
      {
        label: 'de Broglie Wavelength',
        latex: '\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2mK}}',
        explanation: 'lambda is the de Broglie matter wavelength of a particle with mass m and momentum p.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the de Broglie wavelength of an electron (m = 9.109 * 10^-31 kg) accelerated through an electric potential of 100 Volts (K = 100 eV).',
      solution: 'K = 100 eV = 100 * 1.602 * 10^-19 J = 1.602 * 10^-17 J. Momentum p = sqrt(2 * m * K) = sqrt(2 * 9.109 * 10^-31 * 1.602 * 10^-17) = 5.40 * 10^-24 kg*m/s. lambda = h / p = (6.626 * 10^-34) / (5.40 * 10^-24) = 1.23 * 10^-10 m = 0.123 nm (0.123 nanometers = 1.23 Angstroms). This is on the scale of atomic lattice spacings!',
      derivationSteps: [
        'K = 1.602 * 10^{-17} J.',
        'p = sqrt(2 * 9.109 * 10^{-31} * 1.602 * 10^{-17}) = 5.40 * 10^{-24} kg m / s.',
        'lambda = 6.626 * 10^{-34} / 5.40 * 10^{-24} = 1.23 * 10^{-10} m = 0.123 nm.'
      ]
    },
    commonMisconceptions: [
      'A baseball also has a de Broglie wavelength, but because its mass is huge (~0.145 kg), its wavelength is ~10^-34 meters, which is impossible to detect.'
    ],
    quickCheck: {
      question: 'What happens to the de Broglie wavelength of an electron if its speed is doubled?',
      options: [
        'It doubles.',
        'It is cut in half (halved).',
        'It quadruples.',
        'It stays unchanged.'
      ],
      correctIndex: 1,
      explanation: 'lambda = h / (m*v) is inversely proportional to velocity: doubling v cuts lambda in half.'
    },
    summary: 'de Broglie showed that all matter has a wavelength lambda = h / p.',
    keyEquations: ['\\lambda = \\frac{h}{p} = \\frac{h}{mv}'],
    videoIds: ['vid-de-broglie'],
    references: ['de Broglie, L. (1929 Nobel Lecture): The Wave Nature of the Electron.']
  },
  {
    id: '3.8',
    title: 'Matter Waves',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Matter Waves & Double-Slit Experiment',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.7'],
    objectives: [
      'Describe the Davisson-Germer Experiment (1927) confirming matter waves',
      'Explain electron diffraction through nickel crystal lattices',
      'Understand Bragg\'s Law for matter waves: 2d*sin(theta) = n*lambda'
    ],
    intuition: 'In 1927, Clinton Davisson and Lester Germer fired a beam of electrons at a crystalline nickel target. If electrons were classical marbles, they would scatter randomly in all directions. Instead, the scattered electrons formed distinct diffraction peaks at specific angles—matching Bragg\'s law for X-ray waves with the exact de Broglie wavelength! Matter waves were experimentally confirmed.',
    sections: [
      {
        heading: 'The Davisson-Germer Experiment',
        content: 'Electrons accelerated at 54 Volts scattered off nickel crystals. A sharp intensity peak was measured at angle theta = 50 degrees. Using the nickel atomic lattice spacing D = 0.091 nm, the observed wavelength was lambda = D * sin(50°) = 0.165 nm, matching de Broglie\'s prediction h / sqrt(2mK) = 0.167 nm within 1%!'
      }
    ],
    equations: [
      {
        label: 'Bragg Diffraction Condition',
        latex: 'n\\lambda = 2d\\sin\\theta = D\\sin\\phi',
        explanation: 'Constructive interference condition for matter waves scattering off atomic crystal planes.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'In the Davisson-Germer experiment at 54 V, calculate the theoretical de Broglie wavelength and compare it to the crystal lattice observation.',
      solution: 'At 54 V, p = sqrt(2 * 9.109 * 10^-31 * 54 * 1.602 * 10^-19) = 3.97 * 10^-24 kg*m/s. lambda = h / p = 6.626 * 10^-34 / 3.97 * 10^-24 = 0.167 nm. The measured diffraction angle gave lambda = 0.165 nm. The agreement was extraordinary.',
      derivationSteps: [
        'K = 54 eV = 8.65 * 10^{-18} J.',
        'p = sqrt(2 * m * K) = 3.97 * 10^{-24} kg m / s.',
        'lambda = h / p = 0.167 nm.',
        'Observed peak: 0.165 nm. Verification complete.'
      ]
    },
    commonMisconceptions: [
      'Electrons do not bounce off each other to make the diffraction pattern. Even if electrons are fired one at a time, each electron interferes with ITSELF to form the pattern!'
    ],
    quickCheck: {
      question: 'What did the Davisson-Germer experiment prove?',
      options: [
        'Electrons have negative charge.',
        'Electrons exhibit wave diffraction and interference, proving the reality of matter waves.',
        'Electrons travel faster than light.',
        'Nickel has no atomic structure.'
      ],
      correctIndex: 1,
      explanation: 'It provided the first direct experimental confirmation that electrons exhibit wave diffraction.'
    },
    summary: 'The Davisson-Germer experiment proved that matter exhibits wave diffraction in accordance with de Broglie\'s hypothesis.',
    keyEquations: ['n\\lambda = 2d\\sin\\theta', '\\lambda = \\frac{h}{\\sqrt{2mK}}'],
    videoIds: ['vid-davisson-germer'],
    references: ['Davisson, C. & Germer, L. H. (1927). Diffraction of Electrons by a Crystal of Nickel. Phys. Rev.']
  },
  {
    id: '3.9',
    title: 'Double-Slit Experiment',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Matter Waves & Double-Slit Experiment',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['3.8', '2.7'],
    objectives: [
      'Analyze the single-electron double-slit experiment',
      'Explain wave interference when slits are unobserved vs collapse when "which-way" detector is active',
      'Understand Richard Feynman\'s quote: "The central mystery of quantum mechanics"'
    ],
    intuition: 'Richard Feynman called the double-slit experiment "a phenomenon which is impossible, absolutely impossible, to explain in any classical way, and which has in it the heart of quantum mechanics." If you shoot electrons through two slits one by one, each electron lands as a single dot on the screen. But over time, the dots accumulate into alternating interference stripes! Each electron went through BOTH slits simultaneously as a wave, interfered with itself, and landed as a particle.',
    sections: [
      {
        heading: 'The Which-Way (Welcher-Weg) Paradox',
        content: 'What happens if you place a sensor at the slits to see which slit the electron actually went through? The instant the detector measures the electron passing through slit 1 or slit 2, the interference fringes vanish completely! The pattern becomes two boring classical clumps. The act of measurement destroys the quantum superposition.'
      }
    ],
    equations: [
      {
        label: 'Superposition of Slit Paths',
        latex: '|\\psi\\rangle = \\frac{1}{\\sqrt{2}}\\left(|\\text{slit 1}\\rangle + |\\text{slit 2}\\rangle\\right), \\quad P(x) = |\\psi_1(x) + \\psi_2(x)|^2 = P_1 + P_2 + 2\\text{Re}(\\psi_1^* \\psi_2)',
        explanation: 'The interference term 2Re(psi1* psi2) creates the fringes, but vanishes if which-way measurement collapses the state.'
      }
    ],
    diagramType: 'double-slit',
    workedExample: {
      problem: 'Contrast the probability distribution P(x) on the screen when (a) no measurement is made at the slits, versus (b) a detector reveals which slit was used.',
      solution: '(a) Unobserved: P_wave(x) = |psi1 + psi2|^2 = |psi1|^2 + |psi2|^2 + 2|psi1||psi2|cos(Delta phi). The cosine cross-term produces bright fringes where cos=1 and dark fringes where cos=-1.\n(b) Observed: Measurement collapses the state to either psi1 or psi2. P_class(x) = |psi1|^2 + |psi2|^2. The cosine interference term vanishes, leaving two smooth classical peaks.',
      derivationSteps: [
        'Unobserved state: |psi> = (|1> + |2>) / sqrt(2).',
        'P(x) = |<x|psi>|^2 = (1/2)|psi1(x) + psi2(x)|^2.',
        '= (1/2)(|psi1|^2 + |psi2|^2) + Re(psi1* psi2) -> Interference fringes.',
        'Observed state: Mixed ensemble 50% |1>, 50% |2>.',
        'P(x) = (1/2)|psi1|^2 + (1/2)|psi2|^2 -> No interference!'
      ]
    },
    commonMisconceptions: [
      'The detector does not need to physically "bump" the electron violently to destroy the pattern. Merely entangling the electron with a single information-carrying photon is enough to cause decoherence and erase the fringes.'
    ],
    quickCheck: {
      question: 'What happens to the double-slit interference pattern when you install a detector that measures which slit every electron passes through?',
      options: [
        'The fringes become 10 times brighter.',
        'The interference pattern is destroyed, replaced by two classical piles.',
        'The electrons stop reaching the screen.',
        'The screen turns completely white.'
      ],
      correctIndex: 1,
      explanation: 'Which-way detection destroys phase coherence, eliminating the interference cross-term.'
    },
    summary: 'The double-slit experiment demonstrates that quantum particles travel as waves through all available paths simultaneously until measured.',
    keyEquations: ['P(x) = |\\psi_1 + \\psi_2|^2 = P_1 + P_2 + 2\\text{Re}(\\psi_1^*\\psi_2)'],
    videoIds: ['vid-double-slit-quantum'],
    references: ['Feynman, R. P., Lectures on Physics, Vol 3, Chapter 1: Quantum Behavior.']
  },
  {
    id: '3.10',
    title: 'Wave-Particle Duality',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Matter Waves & Double-Slit Experiment',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.9'],
    objectives: [
      'Explain Bohr\'s Principle of Complementarity',
      'Understand the trade-off between wave visibility V and particle path distinguishability D: D^2 + V^2 <= 1',
      'Connect duality to quantum algorithm design'
    ],
    intuition: 'Bohr\'s Principle of Complementarity states that wave aspects and particle aspects are complementary: you can set up an experiment to measure the wave nature (interference fringes), OR you can set up an experiment to measure the particle nature (which slit it took), but you CANNOT observe both simultaneously in full clarity! The more you know which path a particle took, the less interference you get.',
    sections: [
      {
        heading: 'The Englert-Greenberger-Yasin Relation',
        content: 'Wave-particle duality is not all-or-nothing; it is a continuous quantitative trade-off. Let D be the path distinguishability (0 <= D <= 1, where D=1 means you know the slit with certainty) and V be the fringe visibility (0 <= V <= 1, where V=1 means crisp interference stripes). They strictly satisfy: D^2 + V^2 <= 1.'
      }
    ],
    equations: [
      {
        label: 'Wave-Particle Duality Relation',
        latex: 'D^2 + V^2 \\le 1, \\quad V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}',
        explanation: 'Quantifies the complementarity trade-off between path knowledge D and interference visibility V.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'If an experiment achieves 80% path distinguishability (D = 0.8), what is the maximum possible fringe visibility V?',
      solution: 'D^2 + V^2 <= 1 -> 0.8^2 + V^2 <= 1 -> 0.64 + V^2 <= 1 -> V^2 <= 0.36 -> V <= 0.6 (60%). Partial path knowledge partially erases interference fringes.',
      derivationSteps: [
        'D = 0.8 -> D^2 = 0.64.',
        'V_max = sqrt(1 - D^2) = sqrt(1 - 0.64) = sqrt(0.36) = 0.6.',
        'Fringe visibility is reduced to at most 60%.'
      ]
    },
    commonMisconceptions: [
      'Wave-particle duality is not a limitation of human detector technology; it is a fundamental mathematical theorem of quantum Hilbert spaces.'
    ],
    quickCheck: {
      question: 'According to the duality relation D^2 + V^2 <= 1, what is the maximum fringe visibility if you have 100% path knowledge (D = 1)?',
      options: [
        '100%',
        '50%',
        '0% (no interference)',
        '70.7%'
      ],
      correctIndex: 2,
      explanation: 'If D = 1, then V^2 <= 1 - 1 = 0, so visibility is strictly zero (no fringes).'
    },
    summary: 'Bohr\'s Complementarity and D^2 + V^2 <= 1 quantify the strict trade-off between particle path knowledge and wave interference.',
    keyEquations: ['D^2 + V^2 \\le 1', 'V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}'],
    videoIds: ['vid-complementarity'],
    references: ['Englert, B. G. (1996). Fringe visibility and which-way information: an inequality. Phys. Rev. Lett.']
  },
  {
    id: '3.11',
    title: 'Quantum Superposition',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '25 mins',
    difficulty: 'beginner',
    prerequisites: ['1.9', '3.9'],
    objectives: [
      'Define quantum superposition mathematically: |psi> = sum c_i |i>',
      'Distinguish a coherent quantum superposition from a classical mixed ensemble',
      'Why QC needs this: Superposition allows 1 statevector to hold 2^n basis amplitudes'
    ],
    intuition: 'Superposition is NOT "being in two places at once" like a ghost. Rather, it is a definite physical state that does not have a definite value for a particular observable. When a qubit is in state |+> = (|0> + |1>)/sqrt(2), it has an exact 100% definite value for its X-spin (+1), even though its Z-spin is completely undecided.',
    sections: [
      {
        heading: 'Coherent Superposition vs Classical Ignorance',
        content: 'Consider two scenarios:\n1. Classical coin under a cup: The coin is already either Heads or Tails; you just don\'t know it yet (classical ignorance / epistemic probability).\n2. Quantum superposition (|0> + |1>)/sqrt(2): The qubit is genuinely in a state where neither outcome exists until measurement! We prove this because if we apply a Hadamard gate, the two amplitudes interfere to produce |0> with 100% certainty—something a classical 50/50 mixture could NEVER do!'
      }
    ],
    equations: [
      {
        label: 'General Superposition State',
        latex: '|\\psi\\rangle = \\sum_{i=0}^{2^n-1} c_i |i\\rangle \\quad \\text{with} \\quad \\sum_{i} |c_i|^2 = 1',
        explanation: 'A quantum state is a normalized linear combination across all computational basis kets.'
      }
    ],
    diagramType: 'superposition',
    workedExample: {
      problem: 'Prove that an equal superposition (|0>+|1>)/sqrt(2) is fundamentally different from a classical 50% mixed state by applying a Hadamard gate H to both.',
      solution: 'For the quantum state |+>: H(|+>) = H((|0>+|1>)/sqrt(2)) = |0>. Measuring |0> yields 100% certainty! For a classical 50/50 mixture: H|0> is 50/50, and H|1> is 50/50. Mixing them still gives 50% 0 and 50% 1. Superposition produces constructive interference; classical mixtures cannot!',
      derivationSteps: [
        'Quantum: H((|0>+|1>)/sqrt(2)) = (1/sqrt(2))(H|0> + H|1>).',
        '= (1/sqrt(2))([|0>+|1>] + [|0>-|1>]) / sqrt(2) = (2|0>) / 2 = |0>.',
        'P(0) = 1.0 (100% deterministic).',
        'Classical mixture: 0.5 * P_H0 + 0.5 * P_H1 = 0.5(0.5) + 0.5(0.5) = 0.5 (random).',
        'Conclusion: Superposition enables interference; mixtures do not.'
      ]
    },
    commonMisconceptions: [
      'A qubit in superposition does not mean it is secretly 0 or secretly 1 before you look. Bell\'s theorem proved that no local hidden variables determine the outcome beforehand.'
    ],
    quickCheck: {
      question: 'How does applying a Hadamard gate prove that |+> is a coherent superposition rather than a classical 50/50 coin flip?',
      options: [
        'It changes the color of the laser.',
        'It causes constructive interference that yields |0> with 100% certainty.',
        'It destroys the qubit.',
        'It doubles the number of bits.'
      ],
      correctIndex: 1,
      explanation: 'H|+> = |0> with 100% probability due to destructive cancellation of the |1> state, proving phase coherence.'
    },
    summary: 'Quantum superposition is a coherent linear combination of basis states that permits constructive and destructive interference.',
    keyEquations: ['|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle', 'H|+\\rangle = |0\\rangle'],
    videoIds: ['vid-quantum-superposition'],
    references: ['Nielsen & Chuang, Chapter 1.']
  },
  {
    id: '3.12',
    title: 'Measurement',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.11', '1.20'],
    objectives: [
      'Understand projective / Von Neumann measurement',
      'State the projection postulate: |psi_post> = P_k |psi> / sqrt(<psi|P_k|psi>)',
      'Explain irreversibility and information extraction during quantum measurement'
    ],
    intuition: 'Imagine a house of cards: delicate, intricate, balanced in a complex shape. Measurement in quantum mechanics is not like reading a thermometer without disturbing the room. Measurement is an unavoidable physical interaction that collapses the fragile quantum wavefunction into one single basis state, destroying the superposition forever.',
    sections: [
      {
        heading: 'Von Neumann Projective Measurement',
        content: 'An observable A has spectral decomposition A = sum lambda_k P_k, where P_k = |v_k><v_k| is the projector onto the eigenspace of eigenvalue lambda_k. The probability of measuring outcome lambda_k is P(lambda_k) = <psi|P_k|psi>. Immediately after the measurement, the state collapses to: |psi\' > = P_k|psi> / sqrt(P(lambda_k)).'
      }
    ],
    equations: [
      {
        label: 'Projection Postulate (Lüders Rule)',
        latex: 'P(\\lambda_k) = \\langle\\psi|P_k|\\psi\\rangle, \\quad |\\psi\'\\rangle = \\frac{P_k |\\psi\\rangle}{\\sqrt{\\langle\\psi|P_k|\\psi\\rangle}}',
        explanation: 'Measurement projects the statevector onto the measured eigenspace and re-normalizes.'
      }
    ],
    diagramType: 'superposition',
    workedExample: {
      problem: 'State |psi> = (sqrt(3)/2)|0> + (1/2)|1> is measured in the computational basis. If outcome 0 is observed, what is the post-measurement state?',
      solution: 'Projector P0 = |0><0|. P0|psi> = |0><0|((sqrt(3)/2)|0> + (1/2)|1>) = (sqrt(3)/2)|0>. Probability P(0) = |sqrt(3)/2|^2 = 3/4. Normalized post-measurement state: |psi\' > = ( (sqrt(3)/2)|0> ) / sqrt(3/4) = |0>. The state collapsed completely to |0>!',
      derivationSteps: [
        'P0 = |0><0|.',
        'P0|psi> = (sqrt(3)/2)|0>.',
        'Denominator: sqrt(<psi|P0|psi>) = sqrt(3/4) = sqrt(3)/2.',
        '|psi\' > = (sqrt(3)/2 |0>) / (sqrt(3)/2) = |0>.'
      ]
    },
    commonMisconceptions: [
      'If you measure a qubit twice in rapid succession in the same basis, the second measurement will yield the SAME outcome as the first with 100% certainty, because the state has already collapsed.'
    ],
    quickCheck: {
      question: 'A qubit in state (1/sqrt(2))(|0> + |1>) is measured in the Z basis and yields outcome 1. What state is the qubit in immediately after the measurement?',
      options: [
        '(1/sqrt(2))(|0> + |1>)',
        '|0>',
        '|1>',
        'Zero vector'
      ],
      correctIndex: 2,
      explanation: 'Measurement collapses the wavefunction into the detected eigenstate |1>.'
    },
    summary: 'Quantum measurement projects the statevector onto an eigenstate and collapses the superposition.',
    keyEquations: ['P(k) = \\langle\\psi|P_k|\\psi\\rangle', '|\\psi\'\\rangle = |k\\rangle'],
    videoIds: ['vid-quantum-measurement'],
    references: ['Von Neumann, J. (1932). Mathematical Foundations of Quantum Mechanics.']
  },
  {
    id: '3.13',
    title: 'Probability in Quantum Mechanics',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.12', '1.23'],
    objectives: [
      'Contrast classical epistemic probability with quantum ontological probability',
      'Explain Bell\'s Theorem and the rejection of local hidden variables',
      'Understand that nature\'s fundamental indeterminism is an intrinsic physical law'
    ],
    intuition: 'Einstein hated the idea that God "plays dice with the universe." He believed quantum mechanics was incomplete and that some hidden variables were secretly determining measurement results. But in 1964, John Stewart Bell proved a mathematical theorem that settled the debate: NO local hidden variable theory can reproduce the predictions of quantum mechanics. Quantum randomness is fundamental to reality, not a limitation of our instruments.',
    sections: [
      {
        heading: 'Ontological vs Epistemic Indeterminism',
        content: 'In classical physics, a coin flip is "random" only because we don\'t know the exact air currents, finger torque, and bounce coefficients (epistemic uncertainty). In quantum mechanics, an electron\'s spin direction along an unmeasured axis does not exist prior to measurement (ontological indeterminism). Nature creates the outcome at the moment of measurement!'
      }
    ],
    equations: [
      {
        label: 'Bell\'s Inequality (CHSH Form)',
        latex: '|S| = |E(a, b) - E(a, b\') + E(a\', b) + E(a\', b\')| \\le 2 \\quad (\\text{Classical Local Hidden Variables})',
        explanation: 'Classical local theories are bounded by 2; quantum mechanics violates this bound up to 2*sqrt(2) approx 2.828 (Tsirelson\'s bound).'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'What was the experimental verdict of the 2022 Nobel Prize in Physics (Aspect, Clauser, Zeilinger) regarding quantum probability?',
      solution: 'They performed loophole-free Bell tests that violated Bell\'s inequality (measuring S = 2.82 > 2), ruling out all local hidden-variable theories and proving that quantum randomness and entanglement are genuine physical realities.',
      derivationSteps: [
        'Local realism requires |S| <= 2.',
        'Quantum mechanics predicts |S| = 2*sqrt(2) approx 2.828.',
        'Experiments measured S = 2.81 +- 0.01.',
        'Conclusion: Local realism is experimentally refuted.'
      ]
    },
    commonMisconceptions: [
      'Quantum probability does NOT mean anything can happen at any time. The probabilities are calculated with extraordinary mathematical precision, matching experiments to over 12 decimal places (e.g. electron anomalous magnetic moment).'
    ],
    quickCheck: {
      question: 'What did the violation of Bell\'s inequality in physics experiments prove?',
      options: [
        'That classical physics was right all along.',
        'That nature cannot be described by local hidden variables; quantum randomness is fundamental.',
        'That photons travel slower than sound.',
        'That electrons have no spin.'
      ],
      correctIndex: 1,
      explanation: 'Violating Bell\'s inequality proves that nature does not have local pre-existing values determining outcomes.'
    },
    summary: 'Quantum probability is ontological and fundamental to nature, proven by the violation of Bell\'s inequality.',
    keyEquations: ['|S|_{\\text{classical}} \\le 2', '|S|_{\\text{quantum}} = 2\\sqrt{2} \\approx 2.828'],
    videoIds: ['vid-bells-theorem-3b1b'],
    references: ['Bell, J. S. (1964). On the Einstein Podolsky Rosen Paradox. Physics Physique Fizika.']
  },
  {
    id: '3.14',
    title: 'Quantum States',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.8', '3.11'],
    objectives: [
      'Define pure states (statevectors |psi>) vs mixed states (density matrices rho)',
      'Understand ray representation: |psi> and e^(i*phi)|psi> represent the same physical ray',
      'Why QC needs this: The global phase of a quantum state is physically undetectable'
    ],
    intuition: 'A quantum state encapsulates everything that can physically be known about a system. In mathematics, a quantum state is not just a vector, but an entire "ray" in Hilbert space: multiplying the entire state by a complex global phase factor e^(i*phi) changes no measurement probabilities or expectation values whatsoever.',
    sections: [
      {
        heading: 'Global Phase vs Relative Phase',
        content: '• Global Phase: |psi\' > = e^(i*phi) |psi>. For any observable A: <psi\'|A|psi\' > = <psi| e^(-i*phi) A e^(i*phi) |psi> = <psi|A|psi>. Global phase has zero physical consequence.\n• Relative Phase: |psi> = alpha|0> + e^(i*theta) beta|1>. Changing theta rotates the vector around the equator of the Bloch sphere and drastically changes measurement outcomes in the X and Y bases!'
      }
    ],
    equations: [
      {
        label: 'Global Phase Invariance',
        latex: '|\\psi\'\\rangle = e^{i\\phi}|\\psi\\rangle \\implies \\langle\\psi\'|A|\\psi\'\\rangle = \\langle\\psi|A|\\psi\\rangle, \\quad |\\langle x | \\psi\' \\rangle|^2 = |\\langle x | \\psi \\rangle|^2',
        explanation: 'All physical measurement probabilities and observables are invariant under global phase factors.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Compare the states |psi1> = (|0>+|1>)/sqrt(2) and |psi2> = -(|0>+|1>)/sqrt(2) = e^(i*pi)|psi1>. Are they physically distinguishable?',
      solution: 'No. |psi2> differs from |psi1> by an overall global phase factor of -1 = e^(i*pi). For any observable A, <psi2|A|psi2> = (-1)^2 <psi1|A|psi1> = <psi1|A|psi1>. No physical experiment can distinguish |psi1> from |psi2>.',
      derivationSteps: [
        'Global phase: phi = pi, e^{i*pi} = -1.',
        'P(0) for |psi1>: |1/sqrt(2)|^2 = 0.5.',
        'P(0) for |psi2>: |-1/sqrt(2)|^2 = 0.5.',
        'P(1) for both is 0.5.',
        'X-basis expectation: <X> = +1 for both states.'
      ]
    },
    commonMisconceptions: [
      'Do not confuse global phase with relative phase. |0> - |1> is NOT the same as |0> + |1>. The minus sign in (|0> - |1>)/sqrt(2) is a RELATIVE phase between basis states, making it orthogonal to (|0> + |1>)/sqrt(2)!'
    ],
    quickCheck: {
      question: 'Which of the following changes to a statevector produces an observable physical difference?',
      options: [
        'Multiplying the entire state by -1',
        'Multiplying the entire state by e^(i * 0.42)',
        'Changing the relative phase between |0> and |1> from +1 to -1',
        'Multiplying the entire state by i'
      ],
      correctIndex: 2,
      explanation: 'Changing the relative phase changes the state from |+> to |->, which yields completely opposite measurement outcomes in the X basis.'
    },
    summary: 'A quantum state is a ray in Hilbert space. Global phase is unobservable, but relative phase drives quantum interference.',
    keyEquations: ['|\\psi\\rangle \\sim e^{i\\phi}|\\psi\\rangle', '|\\psi\\rangle = \\alpha|0\\rangle + e^{i\\theta}\\beta|1\\rangle'],
    videoIds: ['vid-quantum-states'],
    references: ['Nielsen & Chuang, Section 2.2: The Postulates of Quantum Mechanics.']
  },
  {
    id: '3.15',
    title: 'Probability Amplitudes',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.4', '3.11'],
    objectives: [
      'Define probability amplitude c_i in C as the fundamental quantum currency',
      'Explain the amplitude-to-probability mapping P_i = |c_i|^2',
      'Understand how amplitude cancellation generates destructive interference'
    ],
    intuition: 'If classical computers trade in bits, quantum computers trade in probability amplitudes. An amplitude is a complex number whose length squared tells you the probability of an outcome, but whose angle (phase) determines how it interferes with other possibilities. While probabilities can only add, amplitudes can cancel to zero.',
    sections: [
      {
        heading: 'The Amplitude Algebra',
        content: 'When an event can occur along multiple indistinguishable pathways, the total probability amplitude is the SUM of the individual pathway amplitudes: c_total = c1 + c2 + ... The total probability is the modulus squared of the sum: P = |c_total|^2 = |c1 + c2|^2, NOT P1 + P2.'
      }
    ],
    equations: [
      {
        label: 'Amplitude Superposition and Interference',
        latex: 'P = |c_1 + c_2|^2 = |c_1|^2 + |c_2|^2 + 2\\text{Re}(c_1^* c_2)',
        explanation: 'The interference term 2Re(c1* c2) can be negative, producing destructive interference.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Path 1 has amplitude c1 = 1/2 and Path 2 has amplitude c2 = -1/2. Compare classical probability vs quantum probability.',
      solution: 'Classical: P_class = |1/2|^2 + |-1/2|^2 = 1/4 + 1/4 = 1/2 (50%). Quantum: c_tot = 1/2 + (-1/2) = 0 -> P_quant = |0|^2 = 0. Destructive interference produces complete cancellation.',
      derivationSteps: [
        'c1 = 0.5, c2 = -0.5.',
        'Sum amplitudes: c_tot = 0.5 - 0.5 = 0.',
        'Square magnitude: P = |0|^2 = 0.',
        'Interference term: 2 * (0.5) * (-0.5) = -0.5, exactly canceling P1 + P2 = 0.5.'
      ]
    },
    commonMisconceptions: [
      'Amplitudes are not directly measurable. You cannot hook up a voltmeter and read a complex amplitude; you can only sample probabilities P = |c|^2 over repeated measurements.'
    ],
    quickCheck: {
      question: 'What mathematical entity in quantum mechanics allows two non-zero possibilities to combine into zero total probability?',
      options: [
        'Positive real numbers',
        'Complex probability amplitudes with opposing phases',
        'Classical entropy',
        'The speed of light'
      ],
      correctIndex: 1,
      explanation: 'Complex amplitudes with opposite phases (e.g. +c and -c) sum to zero before being squared.'
    },
    summary: 'Quantum computing processes complex probability amplitudes c_i whose interference governs measurement probabilities P_i = |c_i|^2.',
    keyEquations: ['P = |\\sum c_i|^2', 'P_i = |c_i|^2'],
    videoIds: ['vid-prob-amplitudes'],
    references: ['Feynman, R. P., QED: The Strange Theory of Light and Matter.']
  },
  {
    id: '3.16',
    title: 'Quantum Measurement Collapse',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Superposition, Statevectors & Measurement Collapse',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['3.12'],
    objectives: [
      'Explain wavefunction collapse (the Measurement Problem)',
      'Compare Copenhagen, Many-Worlds, and Decoherence interpretations',
      'Understand how quantum algorithms use measurement to output final classical bitstrings'
    ],
    intuition: 'During an algorithm, a quantum computer manipulates a smooth, unitary, reversible dance of complex amplitudes. But at the very end of the circuit, we must measure the qubits to extract a classical answer (like an encryption key or prime factor). Measurement causes the wavefunction to collapse into a definite classical bitstring.',
    sections: [
      {
        heading: 'The Measurement Postulate in Quantum Circuits',
        content: 'In quantum circuit diagrams, measurement is depicted by a meter icon with a needle. It converts a quantum wire (single line) into a classical bit wire (double line). All phase information is erased, leaving only the discrete classical index k.'
      }
    ],
    equations: [
      {
        label: 'Statevector to Classical Bitstring Collapse',
        latex: '\\sum_{x} c_x |x\\rangle \\xrightarrow{\\text{Measurement}} x_0 \\quad \\text{with probability } P(x_0) = |c_{x_0}|^2',
        explanation: 'Measurement permanently converts a continuous superposition into a single discrete classical bitstring.'
      }
    ],
    diagramType: 'superposition',
    workedExample: {
      problem: 'A Grover search circuit finishes with state |psi> = 0.98 |target> + 0.05 |wrong1> + 0.05 |wrong2> + ... What is the probability that measurement returns the correct target?',
      solution: 'P(target) = |0.98|^2 = 0.9604 (96.04% probability). The measurement collapses the circuit to the target bitstring with over 96% success probability on a single shot.',
      derivationSteps: [
        'c_target = 0.98.',
        'P(target) = (0.98)^2 = 0.9604.',
        'Measurement returns classical bitstring corresponding to |target>.'
      ]
    },
    commonMisconceptions: [
      'Measurement is not "cheating"; every quantum algorithm must balance unitary amplitude amplification with final measurement collapse to succeed.'
    ],
    quickCheck: {
      question: 'In a quantum circuit diagram, what does the double line emerging from a measurement gate represent?',
      options: [
        'A super-cooled microwave cable',
        'A classical bit carrying the collapsed measurement outcome (0 or 1)',
        'An entangled pair of qubits',
        'A high-voltage ground wire'
      ],
      correctIndex: 1,
      explanation: 'Double lines in quantum circuit notation denote classical digital bits.'
    },
    summary: 'Measurement collapse bridges the quantum realm of amplitudes to the classical world of readable bits.',
    keyEquations: ['|\\psi\\rangle \\xrightarrow{\\text{measure}} |k\\rangle'],
    videoIds: ['vid-measurement-problem'],
    references: ['Wheeler & Zurek, Quantum Theory and Measurement (Princeton University Press).']
  },
  {
    id: '3.17',
    title: 'Heisenberg Uncertainty Principle',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.14', '1.25'],
    objectives: [
      'State Heisenberg\'s relation: Delta x * Delta p >= hbar / 2',
      'Derive the generalized Robertson-Schrödinger uncertainty relation for non-commuting operators: Delta A * Delta B >= (1/2)|<[A, B]>|',
      'Why QC needs this: Non-commuting quantum observables (like X and Z gates) cannot be measured simultaneously'
    ],
    intuition: 'The uncertainty principle is NOT about clumsy instruments bumping a particle. It is a fundamental mathematical property of waves! To make a wavepacket tightly localized in position (small Delta x), you must superpose a vast range of different wavelengths, which means an enormous spread in momentum (large Delta p). You cannot simultaneously know both position and momentum to arbitrary precision.',
    sections: [
      {
        heading: 'Commutators and Uncertainty',
        content: 'Two quantum observables A and B can be measured simultaneously without mutual disturbance if and only if their commutator vanishes: [A, B] = AB - BA = 0. For position and momentum, [x, p] = i*hbar != 0. For a qubit, the Pauli gates do NOT commute: [X, Z] = XZ - ZX = -2i*Y != 0. Therefore, a qubit cannot simultaneously possess a definite X-spin and a definite Z-spin!'
      }
    ],
    equations: [
      {
        label: 'Robertson-Heisenberg Uncertainty Relation',
        latex: '\\Delta A \\cdot \\Delta B \\ge \\frac{1}{2} \\left| \\langle [A, B] \\rangle \\right|, \\quad \\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}',
        explanation: 'The product of standard deviations of two observables is bounded by half the expectation value of their commutator.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'For the Pauli gates, evaluate the commutator [X, Z] and compute the minimum uncertainty product Delta X * Delta Z for state |0>.',
      solution: 'XZ = [0 -1; 1 0] and ZX = [0 1; -1 0]. [X, Z] = XZ - ZX = [0 -2; 2 0] = -2i*Y. For state |0>, <0|X|0> = 0 so Delta X = sqrt(<X^2> - <X>^2) = sqrt(1 - 0) = 1. <0|Z|0> = 1 so Delta Z = sqrt(<Z^2> - <Z>^2) = sqrt(1 - 1) = 0. <Y> for |0> is 0. 1 * 0 >= (1/2)|0| = 0. The inequality holds!',
      derivationSteps: [
        'X^2 = I, Z^2 = I.',
        'In state |0>: <X> = 0, Delta X = 1. <Z> = 1, Delta Z = 0.',
        'Product Delta X * Delta Z = 1 * 0 = 0.',
        'Bound: (1/2)|<[X, Z]>| = (1/2)|-2i <Y>| = |-i * 0| = 0.',
        '0 >= 0, satisfied.'
      ]
    },
    commonMisconceptions: [
      'Uncertainty is not an "observer effect" caused by shining photons on a particle. Even in total darkness in vacuum, a quantum particle intrinsically obeys Delta x * Delta p >= hbar/2.'
    ],
    quickCheck: {
      question: 'Why can a quantum computer not measure both Pauli-X and Pauli-Z observables of a qubit on the same run?',
      options: [
        'The computer runs out of memory.',
        'Because Pauli-X and Pauli-Z do not commute ([X, Z] != 0), so measuring one destroys the state of the other.',
        'X and Z gates have the same eigenvalues.',
        'The wires would melt.'
      ],
      correctIndex: 1,
      explanation: 'Non-commuting operators have incompatible eigenbases; measuring one projects the state and randomizes the other.'
    },
    summary: 'The Heisenberg Uncertainty Principle Delta A * Delta B >= (1/2)|<[A, B]>| dictates that non-commuting quantum observables cannot have simultaneous definite values.',
    keyEquations: ['[A, B] = AB - BA', '\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}', '[X, Z] = -2iY'],
    videoIds: ['vid-uncertainty-3b1b'],
    references: ['Heisenberg, W. (1927). Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik.']
  },
  {
    id: '3.18',
    title: 'Quantum Tunneling',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['3.7', '3.17'],
    objectives: [
      'Understand barrier penetration by quantum wavepackets',
      'Calculate exponential transmission probability: T ~ e^(-2*kappa*L)',
      'Why QC needs this: Superconducting Josephson junctions rely on Cooper pair tunneling to create qubits'
    ],
    intuition: 'Throw a tennis ball against a 10-foot brick wall: it bounces off every time because its energy is less than the wall\'s height. But for an electron, the wavefunction does not stop abruptly at the wall—an exponential "evanescent tail" leaks through the barrier. If the barrier is thin enough (a few nanometers), the electron has a non-zero probability of appearing on the other side without ever having enough energy to climb over it! This is quantum tunneling.',
    sections: [
      {
        heading: 'Wavefunction in a Potential Barrier',
        content: 'Inside a barrier of height V_0 > E, the wave equation becomes d^2 psi / dx^2 = kappa^2 psi, where kappa = sqrt(2m(V_0 - E)) / hbar. The solution is an exponentially decaying wave: psi(x) ~ e^(-kappa * x). If the barrier has thickness L, the transmission coefficient is T approx 16 (E/V_0)(1 - E/V_0) e^(-2 kappa L).'
      },
      {
        heading: 'Tunneling in Quantum Hardware: The Josephson Junction',
        content: 'A superconducting qubit (transmon) consists of two superconducting aluminum electrodes separated by an ultra-thin (1-2 nm) aluminum oxide insulating barrier. Superconducting electron pairs (Cooper pairs) tunnel coherently through this barrier, acting as an artificial non-linear atom with tunable quantum energy levels!'
      }
    ],
    equations: [
      {
        label: 'Tunneling Transmission Coefficient',
        latex: 'T \\approx e^{-2\\kappa L}, \\quad \\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}',
        explanation: 'Transmission probability T drops exponentially with barrier thickness L and barrier height (V_0 - E).'
      }
    ],
    diagramType: 'tunneling',
    workedExample: {
      problem: 'An electron with energy E = 2 eV encounters a barrier of height V_0 = 4 eV and width L = 0.5 nm. Calculate the decay constant kappa and the approximate transmission probability T.',
      solution: 'V_0 - E = 2 eV = 2 * 1.602 * 10^-19 J = 3.204 * 10^-19 J. kappa = sqrt(2 * 9.109 * 10^-31 * 3.204 * 10^-19) / (1.055 * 10^-34) = 7.24 * 10^9 m^-1 = 7.24 nm^-1. 2 * kappa * L = 2 * (7.24 nm^-1) * (0.5 nm) = 7.24. T approx e^(-7.24) = 7.17 * 10^-4 (approx 0.072% transmission probability). About 1 in every 1,400 electrons tunnels through!',
      derivationSteps: [
        'V_0 - E = 3.204 * 10^{-19} J.',
        'sqrt(2m(V_0 - E)) = 7.64 * 10^{-25} kg m / s.',
        'kappa = 7.64 * 10^{-25} / 1.055 * 10^{-34} = 7.24 * 10^9 m^{-1}.',
        'Exponent: 2 * kappa * L = 2 * 7.24 * 0.5 = 7.24.',
        'T = e^{-7.24} approx 0.00072.'
      ]
    },
    commonMisconceptions: [
      'The particle does not "punch a physical hole" through the wall; its wave nature simply exists on both sides of the barrier with non-zero amplitude.'
    ],
    quickCheck: {
      question: 'What happens to the quantum tunneling probability T if you double the barrier thickness L?',
      options: [
        'It decreases exponentially by e^(-2 kappa L).',
        'It drops by half (50%).',
        'It stays unchanged.',
        'It increases.'
      ],
      correctIndex: 0,
      explanation: 'Tunneling probability drops exponentially with barrier thickness L: T ~ e^(-2 kappa L).'
    },
    summary: 'Quantum tunneling allows particles to penetrate classically forbidden energy barriers, forming the operating foundation of superconducting Josephson junctions.',
    keyEquations: ['T \\approx e^{-2\\kappa L}', '\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}'],
    videoIds: ['vid-quantum-tunneling'],
    references: ['Griffiths, D. J., Introduction to Quantum Mechanics, Section 2.5.']
  },
  {
    id: '3.19',
    title: 'Quantum Entanglement',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '30 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.26', '3.13'],
    objectives: [
      'Define entanglement: A composite state that CANNOT be factored into product states |psi_A> (x) |psi_B>',
      'Construct the 4 Bell states',
      'Explain the EPR Paradox and non-local correlations'
    ],
    intuition: 'Imagine two magic dice. You give one die to Alice on Earth and one die to Bob on Mars. Whenever Alice rolls her die, she gets a completely random number from 1 to 6. But whenever Bob rolls his die on Mars, it ALWAYS lands on the exact same number as Alice\'s! Even though both dice are completely random individually, their outcomes are 100% correlated. In quantum mechanics, entangled particles share a single, indivisible quantum reality across arbitrary distances.',
    sections: [
      {
        heading: 'Mathematical Definition of Entanglement',
        content: 'A state |psi> in H_A \\otimes H_B is entangled if and only if it CANNOT be written as a product state |psi_A> \\otimes |psi_B>. For example, |00> is a product state. But the Bell state |Phi+> = (|00> + |11>)/sqrt(2) cannot be factored: neither qubit has its own individual statevector!'
      },
      {
        heading: 'The 4 Maximally Entangled Bell States',
        content: '1. |Phi+> = (|00> + |11>) / sqrt(2)\n2. |Phi-> = (|00> - |11>) / sqrt(2)\n3. |Psi+> = (|01> + |10>) / sqrt(2)\n4. |Psi-> = (|01> - |10>) / sqrt(2)'
      }
    ],
    equations: [
      {
        label: 'The Canonical Bell State',
        latex: '|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}} \\ne |\\psi_A\\rangle \\otimes |\\psi_B\\rangle',
        explanation: 'A maximally entangled 2-qubit state that cannot be factored into independent single-qubit states.'
      }
    ],
    diagramType: 'bell-state',
    workedExample: {
      problem: 'Prove mathematically that |Phi+> = (|00> + |11>)/sqrt(2) cannot be factored into (a|0> + b|1>) \\otimes (c|0> + d|1>).',
      solution: 'Expanding the product: (a|0> + b|1>) \\otimes (c|0> + d|1>) = ac|00> + ad|01> + bc|10> + bd|11>. Matching coefficients with |Phi+>: ac = 1/sqrt(2), ad = 0, bc = 0, bd = 1/sqrt(2). If ad = 0, either a=0 or d=0. If a=0, then ac = 0 != 1/sqrt(2) (contradiction!). If d=0, then bd = 0 != 1/sqrt(2) (contradiction!). No solution exists; therefore |Phi+> is strictly entangled!',
      derivationSteps: [
        'ac = 1/sqrt(2), bd = 1/sqrt(2).',
        'ad = 0, bc = 0.',
        'Multiply (ad)(bc) = 0.',
        'Multiply (ac)(bd) = (1/sqrt(2))(1/sqrt(2)) = 1/2.',
        'Algebraic identity: (ad)(bc) must equal (ac)(bd).',
        '0 = 1/2 is impossible! Proof complete by contradiction.'
      ]
    },
    commonMisconceptions: [
      'Entanglement cannot be used for faster-than-light communication (the No-Signaling Theorem). Alice\'s local measurement results appear 100% random; she cannot send a message to Bob without a classical communication channel.'
    ],
    quickCheck: {
      question: 'Which of the following 2-qubit states is ENTANGLED?',
      options: [
        '|00>',
        '|+>|0> = (|00> + |10>)/sqrt(2)',
        '(|01> + |10>)/sqrt(2)',
        '|11>'
      ],
      correctIndex: 2,
      explanation: '(|01> + |10>)/sqrt(2) is the Bell state |Psi+>, which cannot be factored into independent single-qubit states.'
    },
    summary: 'Entanglement is non-local correlation where composite quantum systems cannot be factored into individual subsystems.',
    keyEquations: ['|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}', '|\\psi_{AB}\\rangle \\ne |\\psi_A\\rangle \\otimes |\\psi_B\\rangle'],
    videoIds: ['vid-entanglement-3b1b'],
    references: ['Einstein, Podolsky, & Rosen (1935). Can Quantum-Mechanical Description of Physical Reality be Considered Complete? Phys. Rev.']
  },
  {
    id: '3.20',
    title: 'Quantum Decoherence',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['3.14', '3.19'],
    objectives: [
      'Define decoherence as the uncontrolled entanglement between a quantum system and its environment',
      'Distinguish relaxation (T1) and dephasing (T2)',
      'Explain how decoherence causes the quantum-to-classical transition'
    ],
    intuition: 'A quantum computer is like a soap bubble: beautiful, iridescent, but destroyed the moment it touches anything. When a qubit interacts with stray thermal photons, cosmic rays, or vibrating atoms in its substrate, it entangles with the trillion atoms of its environment. The quantum phase information leaks out into the room, causing the pure superposition to degrade into classical noise. This is decoherence, the #1 engineering challenge in quantum computing.',
    sections: [
      {
        heading: 'Mechanism of Decoherence',
        content: 'System state (|0> + |1>) entangles with environmental bath |E_0>: (|0>|E_0> + |1>|E_1>). Tracing out the unmonitored environment destroys the off-diagonal coherence terms in the system density matrix: rho_01(t) = rho_01(0) * e^(-t / T2).'
      }
    ],
    equations: [
      {
        label: 'Decoherence Decay Law',
        latex: '\\rho_{01}(t) = \\rho_{01}(0) e^{-t / T_2}, \\quad \\frac{1}{T_2} = \\frac{1}{2T_1} + \\frac{1}{T_\\phi}',
        explanation: 'Off-diagonal quantum phase terms decay exponentially with characteristic time T2.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A superconducting qubit has coherence time T2 = 50 microseconds. A two-qubit gate takes 200 nanoseconds. Approximately how many gates can you execute before decoherence corrupts the quantum state?',
      solution: 'Gate depth limit N = T2 / t_gate = (50 * 10^-6 s) / (200 * 10^-9 s) = 50,000 / 200 = 250 gates. This finite circuit depth is the defining constraint of the NISQ (Noisy Intermediate-Scale Quantum) era!',
      derivationSteps: [
        'T2 = 50 microseconds = 50,000 ns.',
        't_gate = 200 ns.',
        'N_gates = 50,000 / 200 = 250 operations.',
        'Beyond this depth, quantum error correction is required.'
      ]
    },
    commonMisconceptions: [
      'Decoherence is not a mysterious collapse; it is standard Schrödinger unitary evolution of the combined system + environment, where we simply cannot track all 10^23 particles of the environment.'
    ],
    quickCheck: {
      question: 'What is the primary physical consequence of quantum decoherence on a quantum computer?',
      options: [
        'The processor catches fire.',
        'Quantum phase information leaks into the environment, turning superpositions into classical random noise.',
        'The qubit clock frequency doubles.',
        'The classical operating system crashes.'
      ],
      correctIndex: 1,
      explanation: 'Decoherence destroys quantum phase coherence, converting pure quantum states into classical mixed noise.'
    },
    summary: 'Decoherence is the leakage of quantum information into the environment, setting strict coherence time limits (T1, T2) on quantum hardware.',
    keyEquations: ['\\rho_{01}(t) = \\rho_{01}(0)e^{-t/T_2}', '\\frac{1}{T_2} = \\frac{1}{2T_1} + \\frac{1}{T_\\phi}'],
    videoIds: ['vid-decoherence'],
    references: ['Zurek, W. H. (2003). Decoherence, einselection, and the quantum origins of the classical. Rev. Mod. Phys.']
  },
  {
    id: '3.21',
    title: 'Quantum States and Observables',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.18', '3.12'],
    objectives: [
      'Synthesize the Postulates of Quantum Mechanics',
      'Map physical observables to Hermitian operators on Hilbert space',
      'Calculate expectation values and measurement probabilities'
    ],
    intuition: 'In classical physics, a state is a list of positions and velocities, and an observable is a function f(x, p). In quantum mechanics, a state is a unit vector |psi> in a complex Hilbert space, and an observable is a Hermitian matrix A. The bridge between the mathematical matrix and the physical laboratory is the expectation value <A> = <psi|A|psi>.',
    sections: [
      {
        heading: 'The 4 Postulates of Quantum Mechanics',
        content: '1. State Space: Associated with any isolated physical system is a complex Hilbert space H. The state is completely described by a unit statevector |psi> in H.\n2. Evolution: The time evolution of a closed quantum system is described by a unitary operator U: |psi(t)> = U|psi(0)>.\n3. Quantum Measurement: Observables are represented by Hermitian operators M = sum m P_m. The probability of measuring m is P(m) = <psi|P_m|psi>, and the post-measurement state is P_m|psi>/sqrt(P(m)).\n4. Composite Systems: The state space of a composite physical system is the tensor product H_1 \\otimes H_2 \\otimes ... \\otimes H_n of the subsystem state spaces.'
      }
    ],
    equations: [
      {
        label: 'The Core Quantum Postulates',
        latex: '|\\psi\\rangle \\in \\mathcal{H}, \\quad |\\psi(t)\\rangle = U(t)|\\psi(0)\\rangle, \\quad P(m) = \\langle\\psi|P_m|\\psi\\rangle, \\quad \\mathcal{H} = \\bigotimes_i \\mathcal{H}_i',
        explanation: 'The four fundamental mathematical pillars of quantum mechanics.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Verify that the Pauli-Z observable satisfies the measurement postulate for state |psi> = (3/5)|0> + (4/5)|1>.',
      solution: 'Projectors: P0 = |0><0|, P1 = |1><1|. P(0) = <psi|P0|psi> = |3/5|^2 = 9/25 = 0.36. P(1) = <psi|P1|psi> = |4/5|^2 = 16/25 = 0.64. Total probability = 0.36 + 0.64 = 1.0. Expectation value <Z> = (+1)(0.36) + (-1)(0.64) = 0.36 - 0.64 = -0.28.',
      derivationSteps: [
        'Z = (+1)P0 + (-1)P1.',
        '<psi|Z|psi> = <psi|(+1 P0 - P1)|psi> = P(0) - P(1).',
        'P(0) = 9/25 = 0.36.',
        'P(1) = 16/25 = 0.64.',
        '<Z> = 0.36 - 0.64 = -0.28.'
      ]
    },
    commonMisconceptions: [
      'The postulates are not arbitrary opinions; they are the minimal, mathematically complete set of axioms verified by every quantum experiment conducted over the last 100 years.'
    ],
    quickCheck: {
      question: 'Which mathematical operation combines multiple individual qubit state spaces into a joint multi-qubit system according to Postulate 4?',
      options: [
        'Direct sum (\\oplus)',
        'Tensor product (\\otimes)',
        'Cross product (\\times)',
        'Arithmetic addition (+)'
      ],
      correctIndex: 1,
      explanation: 'Composite state spaces are formed via the tensor product: H_total = H1 \\otimes H2 \\otimes ... \\otimes Hn.'
    },
    summary: 'The postulates of quantum mechanics rigorously define statevectors, unitary evolution, projective measurement, and composite tensor products.',
    keyEquations: ['\\mathcal{H}_{\\text{tot}} = \\mathcal{H}_1 \\otimes \\mathcal{H}_2', 'P(m) = \\langle\\psi|P_m|\\psi\\rangle'],
    videoIds: ['vid-quantum-postulates'],
    references: ['Nielsen & Chuang, Section 2.2: The Postulates of Quantum Mechanics.']
  },
  {
    id: '3.22',
    title: 'Schrödinger Equation — Introduction',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['1.18', '3.21'],
    objectives: [
      'State the Time-Dependent Schrödinger Equation: i*hbar * d|psi>/dt = H|psi>',
      'State the Time-Independent Schrödinger Equation: H|psi_n> = E_n |psi_n>',
      'Understand the Hamiltonian operator H as the total energy operator'
    ],
    intuition: 'What F = ma is to classical mechanics, the Schrödinger Equation is to quantum mechanics. It is the master equation that governs how wavefunctions evolve smoothly through time. The engine of this evolution is the Hamiltonian operator H, which represents the total energy (kinetic + potential) of the system.',
    sections: [
      {
        heading: 'The Time-Dependent Schrödinger Equation (TDSE)',
        content: 'i * hbar * (d|psi(t)>/dt) = H |psi(t)>. Notice the imaginary unit i! Because of i, the solutions do not decay exponentially like heat; they oscillate forever as complex phase rotations e^(-i E t / hbar), preserving statevector norm.'
      },
      {
        heading: 'The Time-Independent Schrödinger Equation (TISE)',
        content: 'When the Hamiltonian H does not change with time, separation of variables yields the eigenvalue equation: H |psi_n> = E_n |psi_n>. The eigenvalues E_n are the stationary energy levels of the atom or qubit, and |psi_n> are the stationary energy eigenstates.'
      }
    ],
    equations: [
      {
        label: 'Schrödinger Equations',
        latex: 'i\\hbar \\frac{d}{dt}|\\psi(t)\\rangle = H|\\psi(t)\\rangle, \\quad H|\\psi_n\\rangle = E_n |\\psi_n\\rangle',
        explanation: 'TDSE governs continuous time dynamics; TISE determines discrete stationary energy states E_n.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'For a stationary state |psi(0)> = |psi_n> with energy E_n, solve the TDSE to find |psi(t)>.',
      solution: 'i*hbar * d|psi>/dt = H|psi_n> = E_n |psi>. Divide by |psi>: d|psi>/|psi| = (-i E_n / hbar) dt. Integrating both sides: ln|psi(t)> - ln|psi(0)> = -i E_n t / hbar. Therefore |psi(t)> = e^(-i E_n t / hbar) |psi_n>. The state simply rotates its phase at angular frequency omega_n = E_n / hbar!',
      derivationSteps: [
        'i*hbar d|psi>/dt = E_n |psi>.',
        'd|psi>/dt = (-i E_n / hbar) |psi>.',
        'Solution: |psi(t)> = e^{-i E_n t / hbar} |psi(0)>.',
        'Probability density: |psi(t)|^2 = |e^{-i E_n t / hbar}|^2 |psi(0)|^2 = 1 * |psi(0)|^2 (strictly stationary!).'
      ]
    },
    commonMisconceptions: [
      'In a stationary state |psi_n>, probability does NOT change over time. That is why atomic electron orbitals (1s, 2p) are called stationary states: they do not radiate light while sitting in an eigenstate.'
    ],
    quickCheck: {
      question: 'What operator governs the time evolution of a quantum system in the Schrödinger equation?',
      options: [
        'The position operator x',
        'The Hamiltonian operator H (total energy)',
        'The parity operator P',
        'The momentum operator p alone'
      ],
      correctIndex: 1,
      explanation: 'The Hamiltonian operator H represents total energy and generates time evolution via i*hbar d|psi>/dt = H|psi>.'
    },
    summary: 'The Schrödinger equation i*hbar d|psi>/dt = H|psi> governs the deterministic unitary time evolution of quantum states.',
    keyEquations: ['i\\hbar \\frac{d}{dt}|\\psi(t)\\rangle = H|\\psi(t)\\rangle', 'H|\\psi_n\\rangle = E_n |\\psi_n\\rangle'],
    videoIds: ['vid-schrodinger-eq'],
    references: ['Schrödinger, E. (1926). Quantisierung als Eigenwertproblem. Annalen der Physik.']
  },
  {
    id: '3.23',
    title: 'Time Evolution',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '20 mins',
    difficulty: 'intermediate',
    prerequisites: ['3.22', '1.18'],
    objectives: [
      'Express time evolution as a unitary operator: U(t) = e^(-i H t / hbar)',
      'Verify that U(t) is strictly unitary (U^dagger U = I)',
      'Why QC needs this: Quantum gates are physical Hamiltonian pulses applied for calibrated durations t'
    ],
    intuition: 'How does a physical quantum computer actually implement a gate like Pauli-X or Hadamard? A quantum engineer does not type a matrix into the qubit. Instead, they turn on a microwave magnetic field for an exact duration of time t (say, 20 nanoseconds). The Hamiltonian H of the magnetic field causes the qubit to evolve according to U(t) = e^(-i H t / hbar). Calibrating the duration t so that U(t) matches the desired gate matrix is called quantum gate synthesis.',
    sections: [
      {
        heading: 'The Unitary Time Evolution Operator U(t)',
        content: 'Integrating the Schrödinger equation for time-independent H gives |psi(t)> = U(t)|psi(0)>, where U(t) = e^(-i H t / hbar). Because H is Hermitian (H = H^dagger), U(t)^dagger = (e^(-i H t / hbar))^dagger = e^(+i H^dagger t / hbar) = e^(+i H t / hbar) = U(-t). Therefore U^dagger U = e^(iHt/hbar) e^(-iHt/hbar) = e^0 = I. Time evolution is ALWAYS strictly unitary!'
      }
    ],
    equations: [
      {
        label: 'Unitary Time Evolution Operator',
        latex: 'U(t) = \\exp\\left(-\\frac{i H t}{\\hbar}\\right), \\quad U^\\dagger(t) U(t) = I, \\quad |\\psi(t)\\rangle = U(t)|\\psi(0)\\rangle',
        explanation: 'Unitary evolution generated by Hamiltonian H guarantees conservation of probability.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A microwave pulse creates a Hamiltonian H = (hbar * omega / 2) X on a qubit. Find the time evolution operator U(t) for duration t = pi / omega.',
      solution: 'U(t) = e^(-i (omega t / 2) X). At t = pi / omega, the angle is theta = omega * t = pi. U = e^(-i (pi / 2) X) = cos(pi/2) I - i*sin(pi/2) X = 0 - i(1) X = -i*X. Up to an unobservable global phase of -i, this implements the Pauli-X (NOT) gate! Rotating by pi radians flips the qubit from |0> to |1>.',
      derivationSteps: [
        'theta = omega * t = omega * (pi / omega) = pi.',
        'Euler formula for Pauli matrices: e^{-i (theta/2) X} = cos(theta/2) I - i*sin(theta/2) X.',
        'cos(pi/2) = 0, sin(pi/2) = 1.',
        'U = -i * X.',
        'Result: A pi-pulse implements a quantum NOT gate!'
      ]
    },
    commonMisconceptions: [
      'Applying a gate does not happen instantaneously; it takes a finite physical time determined by the pulse amplitude and Hamiltonian coupling strength.'
    ],
    quickCheck: {
      question: 'How are physical quantum gates implemented in hardware laboratories?',
      options: [
        'By printing matrices onto the chip with ink.',
        'By applying Hamiltonian energy pulses (microwaves, lasers) for precise durations t so that U(t) = e^(-i H t / hbar) matches the gate.',
        'By classical transistor switches.',
        'By changing the computer\'s IP address.'
      ],
      correctIndex: 1,
      explanation: 'Gates are physical Hamiltonian pulses calibrated so that U(t) = exp(-iHt/hbar) implements the desired unitary matrix.'
    },
    summary: 'Time evolution is generated by the Hamiltonian through the unitary operator U(t) = e^(-i H t / hbar), which is the physical mechanism of all quantum gates.',
    keyEquations: ['U(t) = \\exp\\left(-\\frac{iHt}{\\hbar}\\right)', 'e^{-i(\\theta/2)\\sigma} = \\cos(\\theta/2)I - i\\sin(\\theta/2)\\sigma'],
    videoIds: ['vid-time-evolution'],
    references: ['Sakurai, J. J., Modern Quantum Mechanics, Chapter 2: Quantum Dynamics.']
  },
  {
    id: '3.24',
    title: 'Quantum Harmonic Oscillator — Conceptual Introduction',
    level: 3,
    levelName: 'Level 3 — Quantum Mechanics',
    module: 'Uncertainty, Tunneling & Schrödinger Dynamics',
    duration: '25 mins',
    difficulty: 'intermediate',
    prerequisites: ['3.3', '3.22'],
    objectives: [
      'Understand the harmonic oscillator potential V(x) = (1/2)m*omega^2*x^2',
      'Analyze the equally spaced energy spectrum: E_n = hbar*omega*(n + 1/2)',
      'Understand zero-point energy E_0 = (1/2)hbar*omega and why transmon qubits require anharmonicity'
    ],
    intuition: 'A mass on a spring or an LC electrical circuit oscillates harmonically. In quantum mechanics, the harmonic oscillator has equally spaced energy rungs: E_n = (n + 1/2)hbar*omega. Notice that the lowest energy level (n = 0) is NOT zero; it has a non-zero "zero-point energy" of (1/2)hbar*omega! Even at absolute zero, quantum particles vibrate ceaselessly due to the uncertainty principle.',
    sections: [
      {
        heading: 'The Equispaced Energy Ladder',
        content: 'E_n = hbar * omega * (n + 1/2) for n in {0, 1, 2, ...}. Ladder operators a and a^dagger lower and raise the energy by exactly hbar*omega: a^dagger|n> = sqrt(n+1)|n+1>.'
      },
      {
        heading: 'Why Qubits Require Anharmonicity (The Josephson Junction)',
        content: 'In an ordinary harmonic oscillator (like an LC circuit), the gap between 0 and 1 is identical to the gap between 1 and 2 (both are hbar*omega). If you shine a 5 GHz pulse to flip |0> to |1>, you will accidentally also excite |1> to |2>, leaking out of your computational subspace! Superconducting qubits use a non-linear Josephson junction to replace the parabolic harmonic well with a cosine potential, making the 0->1 gap different from the 1->2 gap (anharmonicity). This isolates our qubit!'
      }
    ],
    equations: [
      {
        label: 'Harmonic Oscillator Energy Spectrum',
        latex: 'E_n = \\hbar\\omega\\left(n + \\frac{1}{2}\\right), \\quad E_0 = \\frac{1}{2}\\hbar\\omega \\quad (\\text{Zero-Point Energy})',
        explanation: 'Equally spaced energy levels with non-zero ground state zero-point energy.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'An LC microwave cavity resonator oscillates at omega = 2pi * 6 GHz. Calculate its zero-point ground state energy E_0 in Joules.',
      solution: 'E_0 = (1/2) * hbar * omega = (1/2) * h * f = (1/2) * (6.626 * 10^-34 J*s) * (6.0 * 10^9 s^-1) = 1.988 * 10^-24 Joules = 12.4 micro-eV.',
      derivationSteps: [
        'E_0 = (1/2) h f.',
        'E_0 = 0.5 * 6.626 * 10^{-34} * 6 * 10^9 = 1.99 * 10^{-24} J.',
        'In eV: 1.99 * 10^{-24} / 1.602 * 10^{-19} = 1.24 * 10^{-5} eV = 12.4 micro-eV.'
      ]
    },
    commonMisconceptions: [
      'You cannot build a scalable qubit out of a purely linear harmonic oscillator (like an inductor and capacitor alone). A non-linear element (Josephson junction) is mandatory to create distinct energy rungs.'
    ],
    quickCheck: {
      question: 'Why can a pure linear harmonic oscillator (LC circuit) NOT be used as a 2-level qubit by itself?',
      options: [
        'It has no energy levels.',
        'All its energy level spacings are identical (hbar*omega), so a drive pulse would excite |1> to |2> instead of isolating |0> and |1>.',
        'It is too cold.',
        'It produces negative probabilities.'
      ],
      correctIndex: 1,
      explanation: 'Equal energy spacing causes leakage to higher states (|2>, |3>); qubits require an anharmonic non-linear junction to isolate the |0> and |1> transition.'
    },
    summary: 'You have completed Level 3 Quantum Mechanics Foundations! You understand wave-particle duality, superposition, measurement, uncertainty, tunneling, and Schrödinger dynamics. You are now fully ready for Level 4: Quantum Computing Foundations.',
    keyEquations: ['E_n = \\hbar\\omega\\left(n + \\frac{1}{2}\\right)', 'E_0 = \\frac{1}{2}\\hbar\\omega', 'H_{\\text{transmon}} \\approx 4E_C n^2 - E_J \\cos(\\phi)'],
    videoIds: ['vid-harmonic-oscillator'],
    references: ['Koch et al. (2007). Charge-insensitive qubit design derived from the Cooper pair box. Phys. Rev. A (The Transmon Paper).']
  }
];

