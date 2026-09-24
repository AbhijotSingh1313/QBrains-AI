import React, { useState } from 'react';
import {
  X,
  BookOpen,
  Cpu,
  GitBranch,
  Sparkles,
  Award,
  LogIn,
  UserPlus,
  Play,
  RotateCcw,
  Send,
  CheckCircle2,
  HelpCircle,
  Zap,
  Key,
  Layers,
  ArrowRight,
  Sliders,
  ChevronRight,
  Code
} from 'lucide-react';

export default function FeatureModal({ type, onClose, onNavigate }) {
  if (!type) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel-glow"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: type === 'signin' || type === 'signup' ? '460px' : '920px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          position: 'relative',
          border: '1px solid var(--border-glass-strong)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
          }}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {type === 'learning' && <LearningModule onNavigate={onNavigate} onClose={onClose} />}
        {type === 'simulation' && <SimulationModule />}
        {type === 'composer' && <ComposerModule />}
        {type === 'tutor' && <AiTutorModule />}
        {type === 'assessment' && <AssessmentModule />}
        {(type === 'signin' || type === 'signup') && (
          <AuthModule initialMode={type} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   1. LEARNING MODULE
   ========================================================================== */
function LearningModule({ onNavigate, onClose }) {
  const [selectedTrack, setSelectedTrack] = useState(0);

  const tracks = [
    {
      title: 'Module 1: Foundations of Quantum Bits',
      level: 'Beginner',
      duration: '45 mins',
      progress: 75,
      description: 'Understand superposition, classical vs. quantum states, Dirac bra-ket notation, and statevectors.',
      concepts: ['Statevector Representation', 'Bloch Sphere Coordinates', 'Probability Amplitudes', 'Quantum Measurement Collapse'],
      formula: '|\\psi\\rangle = \\alpha|0\\rangle + \\beta|1\\rangle \\quad \\text{where } |\\alpha|^2 + |\\beta|^2 = 1',
    },
    {
      title: 'Module 2: Quantum Gates & Multi-Qubit Systems',
      level: 'Intermediate',
      duration: '1.2 hrs',
      progress: 40,
      description: 'Single-qubit unitary matrices (X, Y, Z, H, S, T) and two-qubit entanglement generators (CNOT, CZ, SWAP).',
      concepts: ['Unitary Matrix Operators', 'Bell States & Entanglement', 'No-Cloning Theorem', 'Phase Kickback'],
      formula: '|\\Phi^+\\rangle = \\frac{1}{\\sqrt{2}}(|00\\rangle + |11\\rangle)',
    },
    {
      title: 'Module 3: Quantum Fourier Transform (QFT)',
      level: 'Advanced',
      duration: '2.5 hrs',
      progress: 10,
      description: 'The computational core behind Shor’s factoring algorithm and quantum phase estimation.',
      concepts: ['Discrete Phase Rotation', 'Controlled-Phase Gates', 'Frequency Domain Mapping', 'Period Finding'],
      formula: 'QFT|j\\rangle = \\frac{1}{\\sqrt{N}} \\sum_{k=0}^{N-1} \\omega^{jk} |k\\rangle',
    },
    {
      title: 'Module 4: Grover’s Quantum Search Algorithm',
      level: 'Advanced',
      duration: '2.0 hrs',
      progress: 0,
      description: 'Achieve quadratic speedup $O(\\sqrt{N})$ for unstructured database search using amplitude amplification.',
      concepts: ['Oracle Function Design', 'Diffusion Operator (Inversion about mean)', 'Geometric State Rotation', 'Decoherence Mitigation'],
      formula: 'G = (2|s\\rangle\\langle s| - I) \\cdot O_f',
    },
  ];

  const current = tracks[selectedTrack];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div className="quantum-pill">
          <BookOpen size={14} /> Interactive Curriculum
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AI-Guided Pathway</span>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px' }}>
        Quantum Computing & Algorithm Mastery
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem' }}>
        Interactive step-by-step masterclasses engineered for both quantum beginners and algorithm researchers.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '20px' }}>
        {/* Track List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {tracks.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedTrack(idx)}
              className="glass-panel"
              style={{
                padding: '14px',
                cursor: 'pointer',
                borderColor: selectedTrack === idx ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                backgroundColor: selectedTrack === idx ? 'rgba(0, 240, 255, 0.08)' : 'transparent',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{t.level}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.duration}</span>
              </div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>{t.title}</h4>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${t.progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Selected Track Details */}
        <div
          className="glass-panel-glow"
          style={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="quantum-pill-gold quantum-pill">{current.level} Track</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>
                Progress: {current.progress}%
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>
              {current.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              {current.description}
            </p>

            {/* Formula Block */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid var(--border-glass)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-cyan)',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              {current.formula}
            </div>

            <h5 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '8px' }}>
              Key Concepts Covered:
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {current.concepts.map((c, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.78rem',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'var(--bg-glass)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button
              className="btn-primary"
              style={{ flex: 1, padding: '10px' }}
              onClick={() => {
                if (onClose) onClose();
                window.history.pushState(null, '', '/learn');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              <Play size={16} /> Launch Full 11-Level Learning Platform →
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '10px 16px' }}
              onClick={() => onNavigate('simulation')}
            >
              <Cpu size={16} /> Simulate Circuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   2. SIMULATION MODULE (Bloch Sphere & Statevector)
   ========================================================================== */
function SimulationModule() {
  const [theta, setTheta] = useState(Math.PI / 2); // default 50/50 superposition
  const [phi, setPhi] = useState(0);

  // Compute alpha and beta
  const alphaVal = Math.cos(theta / 2);
  const betaVal = Math.sin(theta / 2);
  const prob0 = Math.pow(alphaVal, 2);
  const prob1 = Math.pow(betaVal, 2);

  // Presets
  const applyPreset = (t, p) => {
    setTheta(t);
    setPhi(p);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div className="quantum-pill">
          <Cpu size={14} /> Quantum Simulation Engine
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bloch Vector & Amplitudes</span>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px' }}>
        Interactive 1-Qubit Bloch Sphere Simulation
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.92rem' }}>
        Rotate the state vector |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩ across the Bloch sphere.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '24px' }}>
        {/* Visual Bloch Representation */}
        <div
          className="glass-panel-glow"
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '300px',
            position: 'relative',
          }}
        >
          {/* Custom Stylized Bloch Sphere Graphic */}
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px dashed var(--border-glass)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 0 0 35px rgba(0, 240, 255, 0.15)',
            }}
          >
            {/* Equator Ellipse */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '60px',
                borderRadius: '50%',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                transform: 'rotateX(60deg)',
              }}
            />
            {/* North Pole |0⟩ */}
            <span
              style={{
                position: 'absolute',
                top: '-26px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
              }}
            >
              |0⟩ (Z+)
            </span>
            {/* South Pole |1⟩ */}
            <span
              style={{
                position: 'absolute',
                bottom: '-26px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--accent-purple)',
              }}
            >
              |1⟩ (Z-)
            </span>

            {/* State Pointer Vector */}
            <div
              style={{
                position: 'absolute',
                width: '90px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--accent-cyan))',
                transformOrigin: '0% 50%',
                left: '50%',
                transform: `rotate(${theta - Math.PI / 2}rad)`,
                boxShadow: '0 0 10px var(--accent-cyan)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  right: '-6px',
                  top: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 0 12px var(--accent-cyan)',
                }}
              />
            </div>
          </div>

          {/* Quick Presets */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '35px' }}>
            <button
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              onClick={() => applyPreset(0, 0)}
            >
              Reset |0⟩
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              onClick={() => applyPreset(Math.PI, 0)}
            >
              Flip |1⟩
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              onClick={() => applyPreset(Math.PI / 2, 0)}
            >
              Superposition |+⟩
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem' }}
              onClick={() => applyPreset(Math.PI / 2, Math.PI / 2)}
            >
              |+i⟩
            </button>
          </div>
        </div>

        {/* Controls and Probabilities */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Polar Angle θ (Superposition):
              </label>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                {(theta / Math.PI).toFixed(2)}π rad
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={Math.PI}
              step="0.01"
              value={theta}
              onChange={(e) => setTheta(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-cyan)' }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '14px', marginBottom: '8px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                Azimuthal Angle φ (Relative Phase):
              </label>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)' }}>
                {(phi / Math.PI).toFixed(2)}π rad
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={Math.PI * 2}
              step="0.01"
              value={phi}
              onChange={(e) => setPhi(parseFloat(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--accent-purple)' }}
            />
          </div>

          {/* Measurement Probability Distribution */}
          <div className="glass-panel" style={{ padding: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', marginBottom: '12px' }}>
              Measurement Probabilities P(x)
            </h4>

            {/* |0⟩ Bar */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>|0⟩ Amplitude: {alphaVal.toFixed(3)}</span>
                <span style={{ fontWeight: 600 }}>{(prob0 * 100).toFixed(1)}%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${prob0 * 100}%`, height: '100%', background: 'var(--accent-cyan)', transition: 'width 0.15s ease' }} />
              </div>
            </div>

            {/* |1⟩ Bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)' }}>|1⟩ Amplitude: {betaVal.toFixed(3)}</span>
                <span style={{ fontWeight: 600 }}>{(prob1 * 100).toFixed(1)}%</span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${prob1 * 100}%`, height: '100%', background: 'var(--accent-purple)', transition: 'width 0.15s ease' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. COMPOSER MODULE (Circuit Builder)
   ========================================================================== */
function ComposerModule() {
  const [circuit, setCircuit] = useState([
    { wire: 0, gates: ['H', '•', ''] },
    { wire: 1, gates: ['', '⊕', ''] },
    { wire: 2, gates: ['', '', 'X'] },
  ]);

  const [shotOutput, setShotOutput] = useState(null);

  const gatePalette = [
    { name: 'H', desc: 'Hadamard (Superposition)' },
    { name: 'X', desc: 'Pauli-X (NOT Gate)' },
    { name: 'Z', desc: 'Pauli-Z (Phase Flip)' },
    { name: '•', desc: 'Control Node' },
    { name: '⊕', desc: 'Target (CNOT)' },
    { name: 'M', desc: 'Measurement' },
  ];

  const addGateToWire = (wireIdx, gateName) => {
    setCircuit((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[wireIdx].gates.push(gateName);
      return copy;
    });
  };

  const clearCircuit = () => {
    setCircuit([
      { wire: 0, gates: [] },
      { wire: 1, gates: [] },
      { wire: 2, gates: [] },
    ]);
    setShotOutput(null);
  };

  const runSimulation = () => {
    // Generate realistic Bell state or measurement histogram
    setShotOutput({
      shots: 1024,
      counts: {
        '|000⟩': 508,
        '|110⟩': 516,
      },
      fidelity: '99.82%',
      executionTime: '12.4 ms',
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div className="quantum-pill">
          <GitBranch size={14} /> Quantum Circuit Composer
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Multi-Qubit Entanglement Engine</span>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px' }}>
        Visual Quantum Algorithm Circuit Board
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.92rem' }}>
          Compose quantum circuits with unitary quantum gates and execute statevector simulations.
        </p>
        <button
          onClick={() => { window.location.href = '/simulator/index.html'; }}
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.92rem', borderRadius: '10px' }}
        >
          <GitBranch size={16} />
          <span>Open Full Circuit Builder →</span>
        </button>
      </div>

      {/* Gate Palette */}
      <div
        className="glass-panel"
        style={{
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          Gate Library:
        </span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {gatePalette.map((g) => (
            <button
              key={g.name}
              title={g.desc}
              onClick={() => addGateToWire(0, g.name)}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'rgba(0, 240, 255, 0.1)',
                border: '1px solid var(--border-glass)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.9rem',
              }}
            >
              {g.name}
            </button>
          ))}
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
          Click gate to append to q[0]
        </span>
      </div>

      {/* Circuit Wires */}
      <div
        className="glass-panel-glow"
        style={{
          padding: '24px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {circuit.map((line, wIdx) => (
          <div key={wIdx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.9rem',
                width: '45px',
                color: 'var(--accent-cyan)',
              }}
            >
              q[{wIdx}]
            </span>

            {/* Wire Line */}
            <div
              style={{
                flex: 1,
                height: '2px',
                background: 'rgba(255,255,255,0.2)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                paddingLeft: '20px',
              }}
            >
              {line.gates.map((g, gIdx) => (
                <div
                  key={gIdx}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: g ? 'var(--bg-glass-hover)' : 'transparent',
                    border: g ? '1px solid var(--accent-cyan)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    color: g === '•' ? 'var(--accent-cyan)' : g === '⊕' ? 'var(--accent-purple)' : 'var(--text-bright)',
                    boxShadow: g ? '0 0 10px rgba(0,240,255,0.25)' : 'none',
                  }}
                >
                  {g}
                </div>
              ))}
            </div>

            <button
              className="btn-secondary"
              style={{ padding: '4px 8px', fontSize: '0.75rem' }}
              onClick={() => addGateToWire(wIdx, 'H')}
            >
              +H
            </button>
            <button
              className="btn-secondary"
              style={{ padding: '4px 8px', fontSize: '0.75rem' }}
              onClick={() => addGateToWire(wIdx, 'X')}
            >
              +X
            </button>
          </div>
        ))}
      </div>

      {/* Action Buttons & Simulation Result */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-primary" onClick={runSimulation}>
            <Play size={16} /> Run 1024 Q-Shots
          </button>
          <button className="btn-secondary" onClick={clearCircuit}>
            <RotateCcw size={16} /> Reset Wires
          </button>
        </div>

        {shotOutput && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
            }}
          >
            <span style={{ color: 'var(--accent-emerald)' }}>
              ✓ Coherence: {shotOutput.fidelity}
            </span>
            <span style={{ color: 'var(--accent-cyan)' }}>
              |000⟩: {shotOutput.counts['|000⟩']}
            </span>
            <span style={{ color: 'var(--accent-purple)' }}>
              |110⟩: {shotOutput.counts['|110⟩']}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   4. AI TUTOR MODULE (Q-Copilot)
   ========================================================================== */
function AiTutorModule() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Greetings, Quantum Explorer! I am Q-Copilot, your AI quantum physics tutor. How can I assist your algorithm design or theory today?',
      code: `# Bell State Entanglement Example
from qiskit import QuantumCircuit
qc = QuantumCircuit(2)
qc.h(0)         # Put qubit 0 into superposition
qc.cx(0, 1)     # Entangle qubit 0 and 1 into Bell state |Φ+⟩`,
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const sampleQuestions = [
    'Explain how Grover’s amplitude amplification works',
    'What is the difference between T1 and T2 coherence time?',
    'Show me how to construct a Quantum Teleportation circuit',
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg = { role: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Insight on "${query}": In quantum computing, constructive interference amplifies probability amplitudes of the correct eigenstate, while destructive interference cancels erroneous paths.`,
          code: `# Qiskit Optimization
# Running simulated statevector analysis...
statevector = backend.run(transpiled_circuit).result().get_statevector()
print("Circuit depth minimized to 4 gates")`,
        },
      ]);
    }, 700);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div className="quantum-pill" style={{ borderColor: 'rgba(168,85,247,0.4)', color: 'var(--accent-purple)' }}>
          <Sparkles size={14} /> AI Quantum Copilot v4.2
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fine-Tuned on Qiskit & PennyLane</span>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px' }}>
        AI Quantum Algorithmic Tutor
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.92rem' }}>
        Ask any questions on quantum gates, error correction, Hamiltonian simulations, or algorithm optimization.
      </p>

      {/* Suggested Chips */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        {sampleQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSend(q)}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              textAlign: 'left',
            }}
          >
            "{q}"
          </button>
        ))}
      </div>

      {/* Chat Messages Box */}
      <div
        className="glass-panel"
        style={{
          height: '280px',
          overflowY: 'auto',
          padding: '16px',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              background: m.role === 'user' ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: m.role === 'user' ? '1px solid var(--border-glass)' : '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '12px 16px',
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: m.role === 'user' ? 'var(--accent-cyan)' : 'var(--accent-purple)', marginBottom: '4px' }}>
              {m.role === 'user' ? 'You' : 'Q-Copilot AI'}
            </div>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>{m.text}</div>
            {m.code && (
              <pre
                style={{
                  marginTop: '10px',
                  padding: '10px',
                  background: 'rgba(0,0,0,0.4)',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--accent-cyan)',
                  overflowX: 'auto',
                }}
              >
                {m.code}
              </pre>
            )}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Ask a quantum mechanics or algorithm question..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            color: 'var(--text-primary)',
          }}
        />
        <button className="btn-primary" onClick={() => handleSend()}>
          <Send size={16} /> Send
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   5. ASSESSMENT MODULE
   ========================================================================== */
function AssessmentModule() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const question = {
    title: 'Quantum State Evolution & Circuit Equivalence',
    text: 'A qubit is initialized in state |0⟩. A Hadamard gate (H) is applied, followed immediately by another Hadamard gate (H). What is the final state of the qubit?',
    options: [
      { id: 'A', label: '|+⟩ = 1/√2 (|0⟩ + |1⟩)', correct: false },
      { id: 'B', label: '|0⟩ (H is its own hermitian inverse: H² = I)', correct: true },
      { id: 'C', label: '|1⟩ (Bit flip)', correct: false },
      { id: 'D', label: 'Superposition with phase π', correct: false },
    ],
    explanation:
      'The Hadamard gate is unitary and self-inverse: H · H = H² = I (the Identity operator). Applying it twice restores the exact initial state |0⟩.',
  };

  const handleSelect = (id) => {
    if (!submitted) setSelectedAnswer(id);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
        <div className="quantum-pill">
          <Award size={14} /> Knowledge Benchmark
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Adaptive Assessment Level 1</span>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '6px' }}>
        {question.title}
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
        {question.text}
      </p>

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {question.options.map((opt) => {
          let bg = 'var(--bg-glass)';
          let border = 'var(--border-subtle)';

          if (selectedAnswer === opt.id) {
            border = 'var(--accent-cyan)';
            bg = 'rgba(0, 240, 255, 0.1)';
          }

          if (submitted) {
            if (opt.correct) {
              border = 'var(--accent-emerald)';
              bg = 'rgba(16, 185, 129, 0.15)';
            } else if (selectedAnswer === opt.id && !opt.correct) {
              border = '#ef4444';
              bg = 'rgba(239, 68, 68, 0.15)';
            }
          }

          return (
            <div
              key={opt.id}
              onClick={() => handleSelect(opt.id)}
              style={{
                padding: '14px 18px',
                borderRadius: '12px',
                border: `1px solid ${border}`,
                backgroundColor: bg,
                cursor: submitted ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'var(--transition-smooth)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-glass)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                }}
              >
                {opt.id}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                {opt.label}
              </div>
            </div>
          );
        })}
      </div>

      {submitted && (
        <div
          className="glass-panel"
          style={{
            padding: '16px',
            marginBottom: '20px',
            borderColor: selectedAnswer === 'B' ? 'var(--accent-emerald)' : '#ef4444',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', fontWeight: 700 }}>
            <CheckCircle2 size={18} color="var(--accent-emerald)" />
            <span>Explanation:</span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {question.explanation}
          </p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Question 1 of 10 • Pass mark 80%
        </span>
        <button
          className="btn-primary"
          onClick={() => {
            if (!submitted) {
              setSubmitted(true);
            } else {
              setSubmitted(false);
              setSelectedAnswer(null);
            }
          }}
        >
          {submitted ? 'Next Question' : 'Submit Answer'}
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   6. AUTH MODULE (Sign In & Sign Up)
   ========================================================================== */
function AuthModule({ initialMode, onClose }) {
  const [mode, setMode] = useState(initialMode || 'signin');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div>
      {/* Mode Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: '24px',
          paddingBottom: '10px',
          gap: '20px',
        }}
      >
        <button
          onClick={() => setMode('signin')}
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: mode === 'signin' ? 'var(--accent-cyan)' : 'var(--text-muted)',
            borderBottom: mode === 'signin' ? '2px solid var(--accent-cyan)' : 'none',
            paddingBottom: '6px',
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => setMode('signup')}
          style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: mode === 'signup' ? 'var(--accent-cyan)' : 'var(--text-muted)',
            borderBottom: mode === 'signup' ? '2px solid var(--accent-cyan)' : 'none',
            paddingBottom: '6px',
          }}
        >
          Create Account
        </button>
      </div>

      {isSuccess ? (
        <div style={{ textAlign: 'center', padding: '30px 0' }}>
          <CheckCircle2 size={48} color="var(--accent-cyan)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Quantum Access Granted
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Connecting your cryptographic state to the QNova quantum cloud...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {mode === 'signup' && (
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
                Full Name or Quantum Handle
              </label>
              <input
                type="text"
                placeholder="Dr. Richard Feynman"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
              Lab Email Address
            </label>
            <input
              type="email"
              placeholder="researcher@quantum.org"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', marginBottom: '6px', color: 'var(--text-muted)' }}>
              Quantum Key Password
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '10px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px', padding: '12px' }}>
            {mode === 'signin' ? <LogIn size={16} /> : <Zap size={16} />}
            <span>{mode === 'signin' ? 'Sign In to Quantum Lab' : 'Create Free Student Account'}</span>
          </button>

          <div
            style={{
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              margin: '8px 0',
            }}
          >
            or connect with
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
              onClick={() => handleSubmit({ preventDefault: () => {} })}
            >
              GitHub SSO
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{ flex: 1, padding: '10px', fontSize: '0.85rem' }}
              onClick={() => handleSubmit({ preventDefault: () => {} })}
            >
              Google Academic
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
