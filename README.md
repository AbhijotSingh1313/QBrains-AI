
QBrains AI

An interactive, AI-assisted quantum computing learning and
experimentation platform

QBrains AI is an interactive quantum computing platform designed to
bring quantum circuit experimentation, structured quantum education,
AI-assisted learning, and developer-oriented quantum tooling into one
environment.

The project combines an interactive quantum circuit composer/simulator
with a separate, extensive learning platform. The learning experience is
designed to take learners from foundational mathematics and quantum
mechanics through quantum gates, circuits, algorithms, and advanced
quantum computing concepts.

Project Overview

QBrains AI is organized into two major areas:

1. Quantum Circuit Composer & Simulator

The circuit environment provides an interactive drag-and-drop workspace
for constructing and exploring quantum circuits.

It supports capabilities inherited from and extended around the
Quirk-E quantum circuit simulator, including circuit construction,
visualization, simulation, circuit inspection, probability/output
visualization, importing/exporting circuits, and quantum-code
generation.

QBrains AI adds a redesigned interface and additional
educational/developer-oriented capabilities around this environment
while preserving the underlying circuit functionality.

2. QBrains AI Learning Platform

The Learning Platform is a separate learning environment and is
intentionally kept independent from the Circuit Composer.

It provides a structured learning path covering quantum computing from
fundamentals to advanced concepts, including:

Mathematical foundations

Complex numbers

Linear algebra and matrices

Quantum mechanics foundations

Qubits and quantum states

Superposition

Measurement

Interference

Quantum gates

Quantum circuits

Entanglement

Quantum tunneling

Quantum parallelism

Quantum algorithms

Quantum cryptography

Quantum error correction

Quantum machine learning

Quantum cybersecurity

Advanced quantum computing concepts

The curriculum is divided into manageable learning units so that
learners can progressively build their understanding rather than
encountering advanced concepts without the required prerequisites.

Key Features

Interactive Quantum Circuit Composer

Drag-and-drop quantum circuit construction

Multi-qubit circuit support

Quantum gate library

Circuit visualization

State and probability visualization

Local wire-state visualization

Bloch-sphere-based visualization

Circuit inspection

Step-by-step circuit inspection

Circuit import/export

Circuit image download

Custom gate support

Circuit gallery

Undo/redo

Theme support

The existing circuit functionality is preserved while the surrounding
interface is adapted for the QBrains AI platform.

Real-Time Quantum Code Generation

QBrains AI provides a dedicated code panel within the circuit dashboard.

The current circuit can be represented as code for supported
quantum-computing frameworks.

The code panel is designed to:

Generate code automatically as the circuit changes

Allow the learner/developer to select the target framework

Display the corresponding generated code

Provide convenient code copying

Preserve the existing Export functionality

The original Export workflow remains available for users who want the
complete export interface.

Circuit Inspector

The Circuit Inspector provides a way to examine a quantum circuit step
by step.

It is intended to help learners understand:

What operation is being applied

Where the operation occurs

How the circuit changes between steps

The resulting state/visualization

The progression of the computation

This makes the circuit environment useful not only as a simulator but
also as an educational exploration tool.

AI Quantum Tutor

QBrains AI includes a circuit-aware AI tutor designed specifically
for quantum-computing education.

The tutor combines:

Large Language Model (LLM) capabilities

Quantum-computing knowledge retrieval

Retrieval-Augmented Generation (RAG)

Circuit context

Learning-platform context

Educational explanations

The goal is to help learners understand why a circuit behaves the way
it does rather than simply providing an answer.

The AI tutor can be designed to explain concepts such as:

Quantum states

Gate operations

Matrix representations

State-vector transformations

Measurement probabilities

Superposition

Entanglement

Quantum algorithms

Circuit behavior

Mathematical derivations

The tutor is designed as an educational assistant rather than a
replacement for the underlying simulator.

Quantum Learning Platform

The QBrains AI Learning Platform follows a structured progression from
fundamentals to advanced quantum computing.

Foundational Mathematics

The learning path includes mathematical prerequisites such as:

Real numbers

Complex numbers

Complex plane

Magnitude and phase

Euler's formula

Euler's identity

Complex conjugates

Vectors

Matrices

Matrix multiplication

Inner products

Tensor products

Eigenvalues and eigenvectors

Unitary matrices

These topics provide the mathematical foundation required to understand
quantum states and quantum operations.

Quantum Mechanics Foundations

The curriculum progressively introduces:

Classical and quantum descriptions of nature

Wave-particle duality

Quantum states

Probability amplitudes

Superposition

Measurement

Uncertainty

Interference

Quantum tunneling

Quantum entanglement

Quantum Computing

The platform then moves toward:

Qubits

Computational basis states

Quantum gates

Single-qubit operations

Multi-qubit operations

Controlled operations

Quantum circuits

Measurement

State-vector evolution

Bloch-sphere representation

Advanced Topics

The learning path can progress into:

Quantum Fourier Transform

Grover's algorithm

Shor's algorithm

Quantum teleportation

Superdense coding

Bell states

Quantum error correction

Quantum cryptography

Quantum machine learning

Quantum simulation

Quantum cybersecurity

Advanced quantum algorithms

Interactive Learning

The Learning Platform is designed around active learning rather than
static documentation.

Learning content can include:

Interactive diagrams

Quantum circuit illustrations

Mathematical equations

Worked examples

Step-by-step derivations

Interactive visualizations

Concept explanations

Practical examples

Exercises

Quizzes

Assessments

The curriculum is divided into smaller learning units so that difficult
subjects can be approached progressively.

Assessments

QBrains AI includes a structured assessment approach for evaluating
learner understanding.

Assessments can be organized by:

Difficulty

Beginner

Intermediate

Advanced

Expert

Question Type

Multiple-choice questions

Multiple-select questions

Numerical problems

Conceptual questions

Matrix calculations

Circuit analysis

State-vector problems

Algorithmic reasoning

Application-based questions

The assessment architecture is intended to support academically
meaningful evaluation and can incorporate questions inspired by
established academic and professional examination patterns.

Any third-party examination questions or copyrighted material should
only be incorporated where their use and licensing/permissions allow it.

Multilingual Learning

The Learning Platform supports multilingual learning so that
quantum-computing concepts can be made accessible to a broader audience.

Translation support covers the learning experience, including:

Navigation

Curriculum headings

Lesson titles

Lesson content

Explanations

Questions

Answer choices

Assessment content

Buttons and interface text

Learning guidance

The multilingual architecture is kept within the Learning Module and
does not modify the Circuit Composer's underlying functionality.

Learning Personalization

QBrains AI includes a standalone personalization layer within the
Learning Platform.

Learners can provide information such as:

Current quantum-computing level

Student/professional status

Academic or professional background

Mathematics experience

Programming experience

Physics background

Previous quantum-computing experience

Learning goals

Preferred learning methods

Available learning time

Preferred learning pace

Areas of quantum-computing interest

The personalization information is designed to provide learner context
for future educational features.

Learning Resources

The platform can also provide additional learning resources, including
recommended educational videos.

Where appropriate, recommendations can include high-quality educational
creators and resources from India, including creators such as For the
Love of Physics, helping learners access explanations beyond the
platform itself.

External resources remain separate from the core learning content and
should be attributed to their original creators.

Technology Direction

The platform is built around a combination of technologies for
interactive quantum computing, web development, AI, and education.

The project architecture includes areas such as:

Interactive web-based quantum simulation

JavaScript/HTML/CSS-based circuit interaction

Quantum state visualization

Quantum-code generation

Python-based AI/backend services

LLM APIs

Retrieval-Augmented Generation (RAG)

Educational content retrieval

Multilingual content

Interactive assessment systems

Specific implementation details may evolve as the platform develops.

Relationship to Quirk-E

The Quantum Circuit Composer/Simulator portion of QBrains AI
incorporates code from the open-source Quirk-E project.

Quirk-E is an extended version of the original Quirk quantum circuit
simulator and was developed as part of the Developer Experience in
Iterative Quantum Software Engineering (DEQSE) project by the Quantum
Programming and Algorithms (QPA) Research Group at the University of
Jyväskylä, Finland.

QBrains AI does not claim authorship of the original Quirk-E
codebase.

The project uses and extends the relevant Quirk-E code while adding its
own platform-level work, including the QBrains AI learning environment,
AI-assisted educational functionality, multilingual learning features,
personalization interfaces, UI/UX adaptations, and other
project-specific functionality.

For the exact upstream implementation and history, refer to the original
Quirk-E repository:

Quirk-E:
https://github.com/DEQSE-Project/Quirk-E

Quirk-E website:
https://quirk-e.dev/

Upstream Attribution

The Quirk-E project states that Quirk-E is free to use and modify and
requests that its references be included in publications, production,
execution, and related uses.

Accordingly, QBrains AI acknowledges both the original Quirk project
and the Quirk-E extension.

Original Quirk

Craig Gidney. Quirk: A drag-and-drop quantum circuit simulator in the
browser. 2017.

Website: https://algassert.com/quirk

Repository: https://github.com/Strilanc/Quirk

Quirk-E

Haghparast, M., Heikkinen, R., Ovaskainen, S., Fuchs, J., Jokinen, J.
P., & Mikkonen, T. (2025).

Quirk-E quantum circuit simulator: Integrated tool for quantum
algorithm development.

SoftwareX, 32, 102383.

DEQSE Acknowledgement

Quirk-E was developed as part of the Developer Experience in Iterative
Quantum Software Engineering (DEQSE) project.

The original Quirk-E project acknowledges support from the Research
Council of Finland under grant number 349945.

QBrains AI acknowledges the upstream project and its contributors for
the open-source quantum simulation foundation used in the circuit
environment.

Original Quirk-E Contributors

The Quirk-E repository identifies the following contributors:

Samuel Ovaskainen --- University of Jyväskylä

Majid Haghparast --- University of Jyväskylä

Ronja Heikkinen --- University of Jyväskylä

Julian Fuchs --- University of Jyväskylä / Hasso Plattner Institute
/ University of Potsdam

Their contribution is acknowledged as part of the upstream Quirk-E
project and should not be interpreted as authorship of the QBrains AI
additions.

Related Publication

For the Quirk-E quantum circuit simulator:

Haghparast, M., Heikkinen, R., Ovaskainen, S., Fuchs, J., Jokinen, J.
P., & Mikkonen, T. (2025). Quirk-E quantum circuit simulator:
Integrated tool for quantum algorithm development. SoftwareX, 32,
102383.

For the associated DEQSE Quantum IDE Extension:

Haghparast, M., Heikkinen, R., Ovaskainen, S., Fuchs, J., Jokinen, J.
P., & Mikkonen, T. (2025). DEQSE Quantum IDE Extension: Integrated Tool
for Quantum Software Engineering. arXiv preprint arXiv:2507.22843.

Project Structure

At a high level, QBrains AI is organized into two independent functional
areas:

QBrains AI
│
├── Quantum Circuit Composer
│   ├── Circuit construction
│   ├── Quantum simulation
│   ├── Visualization
│   ├── Inspector
│   ├── Import / Export
│   ├── Circuit Gallery
│   └── Real-time code generation
│
└── Learning Platform
    ├── Curriculum
    ├── Lessons
    ├── Mathematics foundations
    ├── Quantum mechanics
    ├── Quantum computing
    ├── Advanced algorithms
    ├── Interactive visualizations
    ├── Assessments
    ├── Multilingual learning
    ├── Personalization
    └── AI Quantum Tutor

The two areas are intentionally separated so that educational
functionality can evolve without changing the core circuit-simulation
functionality.

Attribution and Licensing Notice

QBrains AI contains original project work as well as code derived from
or incorporating the Quirk-E quantum circuit simulator.

The Quirk-E portions remain subject to the applicable upstream terms and
attribution requirements.

When modifying, distributing, publishing, deploying, or otherwise using
this project, users should review:

The QBrains AI project files and documentation.

The original Quirk-E repository and its applicable terms.

The original Quirk repository and its applicable terms.

Any third-party libraries, datasets, models, APIs, educational
resources, or external content included in a particular deployment.

Third-party materials should retain their respective copyright,
attribution, and licensing information.

References

[1] Gidney, C. (2017). Quirk: A drag-and-drop quantum circuit
simulator in the browser.
https://algassert.com/quirk\
https://github.com/Strilanc/Quirk

[2] Haghparast, M., Heikkinen, R., Ovaskainen, S., Fuchs, J., Jokinen,
J. P., & Mikkonen, T. (2025). Quirk-E quantum circuit simulator:
Integrated tool for quantum algorithm development. SoftwareX, 32,
102383.

[3] Haghparast, M., Heikkinen, R., Ovaskainen, S., Fuchs, J., Jokinen,
J. P., & Mikkonen, T. (2025). DEQSE Quantum IDE Extension: Integrated
Tool for Quantum Software Engineering. arXiv preprint arXiv:2507.22843.

[4] Quirk-E Project Repository.
https://github.com/DEQSE-Project/Quirk-E

Acknowledgement

QBrains AI acknowledges the developers and researchers behind Quirk and
Quirk-E whose work provides the foundation for the quantum circuit
environment incorporated into this project.

The QBrains AI-specific learning platform, AI-assisted educational
architecture, curriculum structure, multilingual learning functionality,
personalization layer, interface adaptations, and other project-specific
additions are developed as part of the QBrains AI project.

Project Status

QBrains AI is an evolving educational and experimentation platform.

The project is being developed with the goal of making quantum computing
more understandable and accessible by combining:

Learn → Experiment → Visualize → Understand → Apply
