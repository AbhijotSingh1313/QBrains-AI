/**
 * Level 2: Classical Physics Foundations (Lessons 2.1 - 2.10)
 * Wave mechanics, optics, Maxwell electrodynamics, and the breakdown of classical physics.
 */

export const LEVEL_2_LESSONS = [
  {
    id: '2.1',
    title: 'Classical Mechanics Overview',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.8'],
    objectives: [
      'Understand Newtonian determinism (F = ma)',
      'Recognize phase space coordinates (position x and momentum p)',
      'Identify where classical determinism fails at atomic scales'
    ],
    intuition: 'In classical Newtonian mechanics, the universe is a clockwork machine. If you know the exact position x and momentum p of every billiard ball on a table at one instant, Newton\'s laws allow you to predict their exact trajectory forever into the future. But as physicists peered inside the atom in the early 1900s, this clockwork model collapsed: electrons refused to follow smooth classical orbits.',
    sections: [
      {
        heading: 'Newtonian Determinism',
        content: 'Newton\'s second law, F = dp/dt = m*(d^2x/dt^2), states that forces determine accelerations. In classical mechanics, state is defined by a point (x, p) in phase space. Both position and momentum can be measured simultaneously to arbitrary precision.'
      },
      {
        heading: 'The Ultraviolet Catastrophe & Planetary Atom Collapse',
        content: 'Classical physics made two fatal predictions: (1) hot ovens should emit infinite ultraviolet energy, and (2) orbiting electrons should continuously radiate light and spiral into the nucleus within 10^(-11) seconds, meaning stable atoms should not exist! These failures forced the birth of quantum mechanics.'
      }
    ],
    equations: [
      {
        label: 'Newton\'s Second Law',
        latex: 'F = m\\frac{d^2 x}{dt^2} = \\frac{dp}{dt}',
        explanation: 'In classical physics, forces govern deterministic trajectories in phase space (x, p).'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'According to classical electrodynamics, an electron in circular orbit radiates power P = (q^2 a^2)/(6 pi epsilon_0 c^3). Why does this predict the instant collapse of classical atoms?',
      solution: 'An orbiting electron undergoes continuous centripetal acceleration a = v^2/r. Under classical Larmor radiation, it continuously loses kinetic energy as light, causing its orbital radius r to shrink to zero in ~16 picoseconds. Quantum mechanics solved this by establishing discrete, quantized non-radiating energy orbitals.',
      derivationSteps: [
        'Orbital acceleration: a = v^2/r.',
        'Larmor radiated power: P_rad > 0 continuously.',
        'Total energy E = -e^2 / (8 pi epsilon_0 r) decreases.',
        'Collapse time: t_collapse approx 1.6 * 10^{-11} seconds.',
        'Conclusion: Classical physics cannot explain why atoms are stable!'
      ]
    },
    commonMisconceptions: [
      'Quantum mechanics does not invalidate Newton\'s laws for baseballs or planets. By the Ehrenfest Theorem, quantum expectation values reproduce classical mechanics in the macroscopic limit (h -> 0).'
    ],
    quickCheck: {
      question: 'Why does classical electromagnetism fail to explain the stability of atoms?',
      options: [
        'Electrons are too heavy to orbit nuclei.',
        'Accelerating charges must radiate energy classically, predicting electrons would spiral into the nucleus.',
        'Gravity pulls electrons away from protons.',
        'Magnetic fields freeze atomic vibrations.'
      ],
      correctIndex: 1,
      explanation: 'Classical electrodynamics demands that accelerating electrons radiate energy and collapse into the nucleus.'
    },
    summary: 'Classical mechanics treats particles as deterministic points in phase space, but fails to account for atomic stability and blackbody radiation.',
    keyEquations: ['F = ma', 'P = \\frac{q^2 a^2}{6\\pi\\varepsilon_0 c^3}'],
    videoIds: ['vid-classical-physics'],
    references: ['Taylor, J. R., Classical Mechanics.']
  },
  {
    id: '2.2',
    title: 'Waves',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['1.4'],
    objectives: [
      'Define a wave as an oscillating disturbance transporting energy without bulk matter transport',
      'Understand wave speed: v = lambda * f',
      'Why QC needs this: Quantum statevectors behave as complex probability waves'
    ],
    intuition: 'Drop a pebble into a still pond. Rings of ripples spread outward. The water molecules themselves do not travel across the lake—they merely bob up and down in place. What travels across the lake is energy and phase. A wave is an oscillation traveling through space and time.',
    sections: [
      {
        heading: 'Wave Motion and Equation',
        content: 'A harmonic wave is written as y(x, t) = A * cos(kx - omega*t + phi), where A is amplitude, k = 2pi/lambda is the wavenumber, and omega = 2pi*f is angular frequency. The wave speed is v = lambda * f = omega / k.'
      },
      {
        heading: 'From Ocean Waves to Quantum Amplitudes',
        content: 'In quantum mechanics, particles do not have sharp trajectories; instead, their likelihood of presence is guided by a wave function psi(x, t). The wave properties of frequency and wavenumber translate directly into energy and momentum via de Broglie\'s relations.'
      }
    ],
    equations: [
      {
        label: 'Wave Speed Relation',
        latex: 'v = \\lambda f = \\frac{\\omega}{k}, \\quad y(x, t) = A\\cos(kx - \\omega t + \\phi)',
        explanation: 'v is wave speed, lambda is wavelength, f is frequency, omega is angular frequency, and k is wavenumber.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A laser light wave has frequency f = 5 * 10^14 Hz. Given speed of light c = 3 * 10^8 m/s, calculate its wavelength lambda.',
      solution: 'lambda = c / f = (3 * 10^8 m/s) / (5 * 10^14 s^-1) = 6 * 10^-7 m = 600 nm (orange visible light).',
      derivationSteps: [
        'c = lambda * f -> lambda = c / f.',
        'lambda = (3 * 10^8) / (5 * 10^{14}) = 0.6 * 10^{-6} m.',
        'lambda = 600 nanometers.'
      ]
    },
    commonMisconceptions: [
      'Waves transport energy and information, but do NOT transport the underlying medium.'
    ],
    quickCheck: {
      question: 'If you double the frequency f of a wave while wave speed v remains constant, what happens to its wavelength lambda?',
      options: [
        'It doubles.',
        'It is cut in half (halved).',
        'It stays unchanged.',
        'It increases fourfold.'
      ],
      correctIndex: 1,
      explanation: 'Since v = lambda * f is constant, lambda = v / f is inversely proportional to frequency.'
    },
    summary: 'Waves transmit energy via oscillations characterized by amplitude, wavelength lambda, and frequency f, satisfying v = lambda * f.',
    keyEquations: ['v = \\lambda f', 'k = \\frac{2\\pi}{\\lambda}', '\\omega = 2\\pi f'],
    videoIds: ['vid-wave-physics'],
    references: ['Hecht, E., Optics, 5th Edition.']
  },
  {
    id: '2.3',
    title: 'Wave Properties',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.2'],
    objectives: [
      'Understand Superposition of waves: y_total = y1 + y2',
      'Differentiate Constructive Interference (in-phase) and Destructive Interference (out-of-phase)',
      'Explain Phase difference Delta phi = k * Delta x'
    ],
    intuition: 'When two particles collide, they bounce off each other. But when two waves meet, they pass directly through each other! At the point where they cross, their heights simply add up. If two crests meet, you get a giant crest (constructive interference). If a crest meets a trough, the water goes completely flat (destructive interference).',
    sections: [
      {
        heading: 'Principle of Wave Superposition',
        content: 'When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the individual displacements: y(x, t) = y1(x, t) + y2(x, t).'
      },
      {
        heading: 'Interference Conditions',
        content: '• Constructive: Path difference Delta x = m * lambda (Phase difference Delta phi = 2pi * m). Waves reinforce to maximum amplitude.\n• Destructive: Path difference Delta x = (m + 1/2) * lambda (Phase difference Delta phi = (2m + 1)pi). Waves completely cancel to zero amplitude.'
      }
    ],
    equations: [
      {
        label: 'Wave Interference Conditions',
        latex: '\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x, \\quad \\Delta x = m\\lambda \\text{ (Constructive)}, \\quad \\Delta x = \\left(m + \\frac{1}{2}\\right)\\lambda \\text{ (Destructive)}',
        explanation: 'Path difference Delta x determines whether overlapping waves add constructively or cancel destructively.'
      }
    ],
    diagramType: 'double-slit',
    workedExample: {
      problem: 'Two sound waves of wavelength lambda = 2 meters meet at a listener. Speaker 1 is 10 meters away, and Speaker 2 is 13 meters away. Will the listener hear a loud sound or silence?',
      solution: 'Path difference Delta x = 13 - 10 = 3 meters. Compare with lambda: Delta x / lambda = 3 / 2 = 1.5 wavelengths = (1 + 1/2) lambda. This is an odd half-integer multiple of wavelength, so the two sound waves cancel destructively, resulting in silence (destructive interference)!',
      derivationSteps: [
        'Delta x = |x2 - x1| = 13 - 10 = 3 m.',
        'Delta x / lambda = 3 / 2 = 1.5.',
        '1.5 = 1 + 1/2 -> m = 1 destructive condition.',
        'Delta phi = (2pi / 2) * 3 = 3pi radians = 180 degrees out of phase.'
      ]
    },
    commonMisconceptions: [
      'Destructive interference does not destroy energy. The energy is redistributed into regions of constructive interference.'
    ],
    quickCheck: {
      question: 'What path difference Delta x between two identical waves causes total destructive interference?',
      options: [
        '0 wavelengths',
        '1 full wavelength (lambda)',
        'Half a wavelength (lambda / 2)',
        '2 full wavelengths (2 lambda)'
      ],
      correctIndex: 2,
      explanation: 'A path difference of lambda/2 causes a 180-degree (pi) phase shift, making crests meet troughs and cancel.'
    },
    summary: 'Overlapping waves interfere constructively when in phase (Delta phi = 2pi*m) and destructively when out of phase (Delta phi = pi*(2m+1)).',
    keyEquations: ['y_{\\text{tot}} = y_1 + y_2', '\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta x'],
    videoIds: ['vid-wave-interference'],
    references: ['Halliday, Resnick, & Walker, Fundamentals of Physics.']
  },
  {
    id: '2.4',
    title: 'Frequency and Wavelength',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['2.2'],
    objectives: [
      'Calculate period T = 1/f',
      'Relate frequency to pitch in sound and color in light',
      'Understand dispersion relations v(k)'
    ],
    intuition: 'Frequency is the heartbeat of a wave: how many complete cycles pass a fixed point each second, measured in Hertz (Hz). Wavelength is the physical distance between two consecutive crests. A hummingbird flapping its wings 50 times a second has an oscillation frequency of 50 Hz and a period of 1/50 = 0.02 seconds.',
    sections: [
      {
        heading: 'Period and Frequency',
        content: 'The period T is the time required for one full oscillation: T = 1/f. In quantum computing, the clock cycle time of microwave drive pulses is directly determined by the resonant transition frequency f_01 between qubit states |0> and |1> (typically 4 to 6 GHz).'
      }
    ],
    equations: [
      {
        label: 'Period and Frequency',
        latex: 'T = \\frac{1}{f}, \\quad f = \\frac{v}{\\lambda}',
        explanation: 'Period T is the inverse of frequency f.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A superconducting transmon qubit has a transition frequency f_01 = 5.0 GHz. Calculate the oscillation period T of its microwave drive.',
      solution: 'T = 1 / f = 1 / (5.0 * 10^9 s^-1) = 0.2 * 10^-9 seconds = 200 picoseconds (0.2 ns).',
      derivationSteps: [
        'f = 5 * 10^9 Hz.',
        'T = 1 / (5 * 10^9) = 2 * 10^{-10} s.',
        'T = 0.2 nanoseconds.'
      ]
    },
    commonMisconceptions: [
      'Frequency does not change when a wave enters a new medium (like light entering glass); only wavelength and speed change together.'
    ],
    quickCheck: {
      question: 'If a qubit operates at a transition frequency of 4 GHz, what is its oscillation period?',
      options: [
        '4 seconds',
        '0.25 nanoseconds (250 ps)',
        '1 millisecond',
        '25 microseconds'
      ],
      correctIndex: 1,
      explanation: 'T = 1 / (4 * 10^9 Hz) = 0.25 * 10^-9 s = 0.25 ns.'
    },
    summary: 'Frequency f measures cycles per second (Hz) and period T = 1/f measures cycle duration.',
    keyEquations: ['T = \\frac{1}{f}', 'f_{01} = \\frac{\\omega_{01}}{2\\pi}'],
    videoIds: ['vid-freq-wavelength'],
    references: ['Hecht, E., Optics.']
  },
  {
    id: '2.5',
    title: 'Electromagnetic Waves',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.2'],
    objectives: [
      'Understand Maxwell\'s unification: Light is an oscillating electromagnetic wave',
      'Recognize perpendicular electric E and magnetic B field vectors',
      'State the speed of light c = 1 / sqrt(mu_0 * epsilon_0)'
    ],
    intuition: 'In the 1860s, James Clerk Maxwell achieved one of the greatest syntheses in science: an oscillating electric field creates an oscillating magnetic field, which in turn recreates the electric field! This self-sustaining electromagnetic wave leaps through the vacuum of space at exactly 300,000 kilometers per second. Light, radio, X-rays, and the microwaves used to control qubits are all electromagnetic waves.',
    sections: [
      {
        heading: 'Maxwell\'s Equations',
        content: 'Maxwell unified electricity and magnetism into four equations. In vacuum, they predict transverse waves where the electric field E and magnetic field B oscillate perpendicular to each other and perpendicular to the direction of wave propagation.'
      },
      {
        heading: 'Qubit Control Pulses',
        content: 'In superconducting quantum computers, qubits are driven and read out using shaped electromagnetic microwave pulses traveling down coaxial cables inside dilution refrigerators.'
      }
    ],
    equations: [
      {
        label: 'Speed of Light in Vacuum',
        latex: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} \\approx 2.9979 \\times 10^8 \\text{ m/s}',
        explanation: 'mu_0 is the magnetic permeability and epsilon_0 is the electric permittivity of free space.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'What is the ratio of the electric field amplitude E_0 to magnetic field amplitude B_0 in an electromagnetic wave in vacuum?',
      solution: 'From Maxwell\'s equations: E_0 / B_0 = c = 3 * 10^8 m/s. The electric and magnetic amplitudes are strictly locked by the speed of light.',
      derivationSteps: [
        'curl(E) = -dB/dt -> k E_0 = omega B_0.',
        'E_0 / B_0 = omega / k = c.',
        'E_0 = c * B_0.'
      ]
    },
    commonMisconceptions: [
      'Electromagnetic waves do NOT require a physical medium (like the debunked "luminiferous aether") to propagate; they travel effortlessly through pure vacuum.'
    ],
    quickCheck: {
      question: 'How are the electric and magnetic fields oriented relative to each other in an electromagnetic wave?',
      options: [
        'Parallel to each other',
        'Mutually perpendicular (at 90 degrees) to each other and to the direction of travel',
        'At a 45-degree angle',
        'They point in random directions'
      ],
      correctIndex: 1,
      explanation: 'Electromagnetic waves are transverse: E, B, and the propagation vector k are mutually orthogonal.'
    },
    summary: 'Light is an electromagnetic wave with orthogonal oscillating electric and magnetic fields traveling at c.',
    keyEquations: ['c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}', 'E_0 = c B_0'],
    videoIds: ['vid-em-waves'],
    references: ['Griffiths, D. J., Introduction to Electrodynamics, Chapter 9.']
  },
  {
    id: '2.6',
    title: 'Energy and Frequency',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.4', '2.5'],
    objectives: [
      'Contrast classical wave energy (proportional to amplitude squared) with quantum energy (proportional to frequency)',
      'Introduce Planck\'s quantum relation E = h*f = hbar*omega',
      'Calculate photon energies across the electromagnetic spectrum'
    ],
    intuition: 'In classical physics, the energy of an ocean wave depends strictly on its height (amplitude): a 10-meter tsunami carries vastly more energy than a 10-centimeter ripple, regardless of frequency. But light does something shocking: shine a blindingly bright red light on a metal sheet, and nothing happens. Shine a faint, dim ultraviolet light, and electrons instantly fly out! Max Planck and Albert Einstein discovered that light energy comes in discrete packets whose energy is dictated solely by frequency: E = h*f.',
    sections: [
      {
        heading: 'The Classical vs Quantum Energy Divide',
        content: '• Classical Wave: Energy is proportional to Amplitude squared (Intensity I ~ A^2). Any arbitrary continuous amount of energy can be absorbed.\n• Quantum Wavepacket: Energy is quantized into photons of discrete energy E = h*f. Brighter light means MORE photons, but not more energetic photons.'
      }
    ],
    equations: [
      {
        label: 'Planck-Einstein Relation',
        latex: 'E = h f = \\hbar \\omega, \\quad h \\approx 6.626 \\times 10^{-34} \\text{ J}\\cdot\\text{s}, \\quad \\hbar = \\frac{h}{2\\pi}',
        explanation: 'E is the discrete energy quantum, h is Planck constant, and hbar is the reduced Planck constant.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Calculate the energy of a single photon of blue light with frequency f = 6.0 * 10^14 Hz in electron-volts (1 eV = 1.602 * 10^-19 J).',
      solution: 'E = h * f = (6.626 * 10^-34 J*s) * (6.0 * 10^14 s^-1) = 3.976 * 10^-19 Joules. In eV: E = (3.976 * 10^-19 J) / (1.602 * 10^-19 J/eV) = 2.48 eV.',
      derivationSteps: [
        'E = h * f.',
        'E = 6.626 * 10^{-34} * 6.0 * 10^{14} = 3.976 * 10^{-19} J.',
        'Convert to eV: E / (1.602 * 10^{-19}) = 2.48 eV.'
      ]
    },
    commonMisconceptions: [
      'A common confusion is thinking a 100-watt red bulb emits higher energy photons than a 1-watt UV LED. The 100-watt red bulb emits vastly MORE photons, but each individual red photon has far LESS energy than a single UV photon!'
    ],
    quickCheck: {
      question: 'According to Planck\'s relation E = h*f, which light photon has the highest energy?',
      options: [
        'Microwave photon (f = 5 GHz)',
        'Infrared photon (f = 10^13 Hz)',
        'Visible red photon (f = 4.3 * 10^14 Hz)',
        'X-ray photon (f = 10^18 Hz)'
      ],
      correctIndex: 3,
      explanation: 'Energy is directly proportional to frequency: higher frequency means higher photon energy, so X-rays carry the highest energy.'
    },
    summary: 'Quantum mechanics links energy directly to frequency through Planck\'s constant: E = h*f = hbar*omega.',
    keyEquations: ['E = h f', 'E = \\hbar \\omega', '\\hbar = 1.05457 \\times 10^{-34} \\text{ J}\\cdot\\text{s}'],
    videoIds: ['vid-energy-frequency'],
    references: ['Eisberg & Resnick, Quantum Physics of Atoms, Molecules, Solids, Nuclei, and Particles.']
  },
  {
    id: '2.7',
    title: 'Light as a Wave',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.3', '2.5'],
    objectives: [
      'Describe Thomas Young\'s 1801 Double-Slit Experiment',
      'Explain diffraction and interference fringes on a detection screen',
      'Derive fringe spacing: y = m * lambda * L / d'
    ],
    intuition: 'In 1801, Thomas Young definitively proved that light is a wave through his historic double-slit experiment. When sunlight passed through two tiny parallel slits, it did not create two bright parallel lines on the wall as classical billiard balls would. Instead, it created an alternating pattern of bright and dark stripes called interference fringes.',
    sections: [
      {
        heading: 'Young\'s Double-Slit Experiment',
        content: 'Light waves emerging from two slits separated by distance d spread out via diffraction. On a screen at distance L, the waves from the two slits travel slightly different distances. Where the path difference Delta x = d * sin(theta) = m * lambda, waves arrive in-phase, creating bright bands.'
      }
    ],
    equations: [
      {
        label: 'Double-Slit Fringe Formula',
        latex: 'd\\sin\\theta = m\\lambda \\implies y_m \\approx \\frac{m\\lambda L}{d} \\quad (m \\in \\mathbb{Z})',
        explanation: 'y_m is the position of the m-th bright fringe on a screen at distance L from slits separated by d.'
      }
    ],
    diagramType: 'double-slit',
    workedExample: {
      problem: 'Laser light of wavelength 500 nm illuminates two slits separated by d = 0.1 mm. A screen is placed L = 2.0 m away. What is the distance Delta y between adjacent bright fringes?',
      solution: 'Delta y = lambda * L / d = (500 * 10^-9 m) * (2.0 m) / (0.1 * 10^-3 m) = (1000 * 10^-9) / (10^-4) = 10^-2 m = 1.0 cm (10 mm).',
      derivationSteps: [
        'lambda = 5 * 10^{-7} m, L = 2.0 m, d = 10^{-4} m.',
        'Delta y = (5 * 10^{-7} * 2) / 10^{-4} = 10^{-6} / 10^{-4} = 10^{-2} m.',
        'Fringe separation = 10 millimeters.'
      ]
    },
    commonMisconceptions: [
      'The dark bands are not caused by obstacles blocking the light; light plus light literally cancels to produce total darkness through destructive interference!'
    ],
    quickCheck: {
      question: 'What happens to the spacing between bright fringes if you move the screen farther away (increase L)?',
      options: [
        'The fringes get closer together.',
        'The fringes spread farther apart.',
        'The fringes disappear entirely.',
        'The fringes turn completely black.'
      ],
      correctIndex: 1,
      explanation: 'Fringe spacing Delta y = lambda * L / d is directly proportional to L, so increasing L spreads the fringes wider.'
    },
    summary: 'Young\'s double-slit experiment proved the wave nature of light through diffraction and interference fringes.',
    keyEquations: ['d\\sin\\theta = m\\lambda', '\\Delta y = \\frac{\\lambda L}{d}'],
    videoIds: ['vid-young-double-slit'],
    references: ['Hecht, E., Optics, Chapter 9: Interference.']
  },
  {
    id: '2.8',
    title: 'Light as a Particle',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.6', '2.7'],
    objectives: [
      'Analyze the Photoelectric Effect experiment (Heinrich Hertz & Albert Einstein)',
      'Understand work function Phi and threshold frequency f_0',
      'Explain why classical wave theory failed to explain the photoelectric effect'
    ],
    intuition: 'Just when physicists thought light was definitively a wave, the Photoelectric Effect proved the exact opposite! When light strikes a polished metal plate, it knocks out electrons. Classically, high-intensity waves should gradually deposit energy until electrons escape. In reality, electrons are ejected INSTANTANEOUSLY, and only if the light frequency exceeds a critical threshold f_0. Einstein won the 1921 Nobel Prize by proving that light is composed of localized packets of energy called photons.',
    sections: [
      {
        heading: 'The Photoelectric Effect',
        content: 'Einstein proposed that light consists of particle-like quanta (photons), each carrying energy E = h*f. An electron absorbs a SINGLE photon in an instantaneous collision. If h*f exceeds the metal\'s binding energy (work function Phi), the electron escapes with maximum kinetic energy K_max = h*f - Phi.'
      }
    ],
    equations: [
      {
        label: 'Einstein Photoelectric Equation',
        latex: 'K_{\\max} = h f - \\Phi = h(f - f_0), \\quad f_0 = \\frac{\\Phi}{h}',
        explanation: 'K_max is maximum photoelectron kinetic energy, Phi is metal work function, and f_0 is threshold frequency.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'A metal has work function Phi = 2.0 eV. What is the threshold frequency f_0 required to eject electrons?',
      solution: 'Phi = 2.0 eV = 2.0 * 1.602 * 10^-19 J = 3.204 * 10^-19 J. Threshold frequency f_0 = Phi / h = (3.204 * 10^-19 J) / (6.626 * 10^-34 J*s) = 4.84 * 10^14 Hz (orange visible light). Any light with frequency below this cannot eject electrons, no matter how bright!',
      derivationSteps: [
        'Phi in Joules: 2 * 1.602 * 10^{-19} = 3.204 * 10^{-19} J.',
        'f_0 = Phi / h = 3.204 * 10^{-19} / 6.626 * 10^{-34}.',
        'f_0 = 4.84 * 10^{14} Hz.'
      ]
    },
    commonMisconceptions: [
      'Increasing the brightness of light below threshold frequency will NOT eventually knock out an electron. Brightness increases the photon arrival rate, not individual photon energy!'
    ],
    quickCheck: {
      question: 'What did the photoelectric effect prove about light?',
      options: [
        'Light travels at infinite speed.',
        'Light interacts with matter as discrete localized particle-like packets (photons) with energy E = h*f.',
        'Light carries no momentum.',
        'Metals cannot conduct electricity.'
      ],
      correctIndex: 1,
      explanation: 'The photoelectric effect demonstrated the particle (photon) nature of light.'
    },
    summary: 'The photoelectric effect proved that light interacts as discrete energy packets (photons) with K_max = h*f - Phi.',
    keyEquations: ['K_{\\max} = hf - \\Phi', 'f_0 = \\frac{\\Phi}{h}'],
    videoIds: ['vid-photoelectric-effect'],
    references: ['Einstein, A. (1905). Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt.']
  },
  {
    id: '2.9',
    title: 'The Electromagnetic Spectrum',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '15 mins',
    difficulty: 'beginner',
    prerequisites: ['2.5', '2.6'],
    objectives: [
      'Map the EM spectrum: Radio, Microwaves, Infrared, Visible, UV, X-rays, Gamma rays',
      'Identify frequency bands used in quantum hardware: Microwaves (4-8 GHz) and Optical/Laser (400-800 nm)',
      'Understand thermal noise and why quantum computers operate at millikelvin temperatures'
    ],
    intuition: 'All electromagnetic radiation travels at the same speed of light c, but ranges across dozens of orders of magnitude in frequency. From kilometer-long radio waves to sub-picometer gamma rays, quantum technologies use different slices of this spectrum: superconducting qubits use 5 GHz microwaves, while trapped-ion and photonic quantum computers use 400-800 nm visible and ultraviolet lasers.',
    sections: [
      {
        heading: 'The Spectrum and Quantum Hardware',
        content: '• Radio & Microwaves (10^9 Hz, GHz): Superconducting transmons operate at ~5 GHz. A 5 GHz photon has tiny energy E ~ 3.3 * 10^-24 J ~ 20 micro-eV, equivalent to thermal energy at T = 240 mK! To prevent ambient heat from accidentally exciting qubits, superconducting processors must be cooled to 15 millikelvin (-273.13 °C) inside dilution refrigerators.\n• Visible & UV (10^14 - 10^15 Hz): Trapped ions and neutral atoms use optical laser transitions where room-temperature thermal noise is negligible compared to eV transition energies.'
      }
    ],
    equations: [
      {
        label: 'Thermal Noise vs Qubit Energy',
        latex: 'E_{\\text{qubit}} = h f_{01} \\gg k_B T \\implies T \\ll \\frac{h f_{01}}{k_B} \\approx 240 \\text{ mK}',
        explanation: 'Qubit transition energy must far exceed ambient thermal fluctuations to prevent spontaneous thermal excitation.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'Why do superconducting qubits (f = 5 GHz) require a dilution refrigerator at 15 mK, while optical photonic qubits work at room temperature (300 K)?',
      solution: 'At 5 GHz, h*f / k_B = (6.626 * 10^-34 * 5 * 10^9) / (1.38 * 10^-23) = 0.24 Kelvin. At room temperature (300 K), thermal noise is 1,250 times larger than the qubit energy, destroying all coherence instantly! For optical light (f = 5 * 10^14 Hz), h*f / k_B = 24,000 K, which is 80 times hotter than room temperature, so thermal noise cannot excite optical transitions.',
      derivationSteps: [
        'Microwave 5 GHz: E = 3.3 * 10^{-24} J -> T_eq = 0.24 K.',
        'At 15 mK: E_qubit / (k_B * T) = 0.24 / 0.015 = 16 >> 1 (thermal noise frozen out!).',
        'Optical light: E = 3.3 * 10^{-19} J -> T_eq = 24,000 K >> 300 K.'
      ]
    },
    commonMisconceptions: [
      'Not all quantum computers require massive dilution refrigerators. Photonic quantum processors operate at room temperature because optical photons are immune to room-temperature thermal noise.'
    ],
    quickCheck: {
      question: 'Why must superconducting transmon qubits be cooled to ~15 millikelvin inside a dilution refrigerator?',
      options: [
        'To make the silicon chip shiny.',
        'To prevent room-temperature thermal microwave photons from overwhelming the fragile 5 GHz qubit states.',
        'To speed up classical internet cables.',
        'To stop gravity from pulling on the qubits.'
      ],
      correctIndex: 1,
      explanation: 'At 5 GHz, ambient room temperature (300 K) creates thermal microwave noise that destroys quantum superposition within nanoseconds unless cooled below 20 mK.'
    },
    summary: 'The electromagnetic spectrum spans microwaves (superconducting qubits) to visible lasers (trapped-ion qubits).',
    keyEquations: ['c = \\lambda f', 'k_B T \\ll h f_{01}'],
    videoIds: ['vid-em-spectrum'],
    references: ['Krantz et al., A Quantum Engineer\'s Guide to Superconducting Qubits (2019).']
  },
  {
    id: '2.10',
    title: 'Limits of Classical Physics',
    level: 2,
    levelName: 'Level 2 — Classical Physics',
    module: 'Mechanics, Waves & Electromagnetism',
    duration: '20 mins',
    difficulty: 'beginner',
    prerequisites: ['2.1', '2.8'],
    objectives: [
      'Synthesize the breakdown of classical physics: Blackbody radiation, Photoelectric effect, Atomic stability, and Wave-particle duality',
      'Understand why the universe requires quantum mechanics',
      'Prepare for Level 3: Quantum Mechanics Foundations'
    ],
    intuition: 'At the close of the 19th century, Lord Kelvin famously suggested that physics was almost complete, with only "two small clouds on the horizon": the null result of the Michelson-Morley experiment, and the failure of classical thermodynamics to explain blackbody radiation. Those two "clouds" unleashed the twin revolutions of modern physics: Einstein\'s Relativity and Quantum Mechanics.',
    sections: [
      {
        heading: 'The Four Pillars of Classical Failure',
        content: '1. Blackbody Radiation: Classical Rayleigh-Jeans law predicted infinite energy at ultraviolet frequencies (Ultraviolet Catastrophe). Solved by Planck\'s energy quantization E = nhf.\n2. Photoelectric Effect: Classical wave theory could not explain the threshold frequency or zero time-delay. Solved by Einstein\'s photon concept.\n3. Atomic Line Spectra & Stability: Classical atoms should collapse in picoseconds. Solved by Bohr\'s quantized angular momentum.\n4. Wave-Particle Duality: Light acts as a wave in propagation, but as a particle in exchange with matter.'
      }
    ],
    equations: [
      {
        label: 'The Quantum Transition',
        latex: '\\lim_{h \\to 0} \\text{Quantum Physics} = \\text{Classical Physics} \\quad (\\text{Correspondence Principle})',
        explanation: 'Classical physics is an effective macroscopic approximation of quantum mechanics as hbar approaches 0.'
      }
    ],
    diagramType: null,
    workedExample: {
      problem: 'State the Correspondence Principle (Niels Bohr) and explain why we do not notice quantum superposition in everyday macroscopic life.',
      solution: 'Bohr\'s Correspondence Principle states that quantum mechanics reproduces classical physics when quantum numbers become very large (n >> 1) or action >> h. Macroscopic objects (like a 1 kg ball) have de Broglie wavelengths of ~10^-34 meters, which are millions of times smaller than an atomic nucleus. Environmental decoherence destroys macroscopic superposition in less than 10^-20 seconds.',
      derivationSteps: [
        'de Broglie wavelength: lambda = h / p.',
        'For m = 1 kg at v = 1 m/s: lambda = 6.6 * 10^{-34} m.',
        'At this scale, wave interference is utterly undetectable.',
        'Result: Macroscopic objects appear purely classical.'
      ]
    },
    commonMisconceptions: [
      'Classical physics is not "wrong"; it is an extremely accurate limiting case of quantum mechanics for large, warm, macroscopic systems.'
    ],
    quickCheck: {
      question: 'What historical paradox in classical physics was resolved by Max Planck proposing that energy is emitted in discrete packets E = nhf?',
      options: [
        'The twin paradox',
        'The ultraviolet catastrophe of blackbody radiation',
        'Newton\'s third law',
        'Ohm\'s law of resistance'
      ],
      correctIndex: 1,
      explanation: 'The ultraviolet catastrophe was resolved by Planck proposing quantized energy packets.'
    },
    summary: 'You have completed Level 2 Classical Physics! You are now prepared to explore the birth of Quantum Mechanics in Level 3.',
    keyEquations: ['E = n h f', '\\lim_{h \\to 0} \\text{Quantum} = \\text{Classical}'],
    videoIds: ['vid-limits-classical'],
    references: ['Jammer, M. (1966). The Conceptual Development of Quantum Mechanics.']
  }
];
