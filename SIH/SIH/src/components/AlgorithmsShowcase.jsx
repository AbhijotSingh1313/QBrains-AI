import React from 'react';
import {
  Search,
  Radio,
  Activity,
  CheckCircle2,
  ArrowRight,
  Zap,
  BookOpen
} from 'lucide-react';

export default function AlgorithmsShowcase() {
  const algorithms = [
    {
      id: 'grover',
      name: "Grover's Quantum Search",
      category: 'Database & Amplitude Amplification',
      speedup: 'Quadratic Speedup (√N)',
      complexity: 'O(√N)',
      description: 'Optimal search in unsorted databases via phase inversion and diffusion amplification. Fully interactive in circuit composer.',
      icon: Search,
      tagColor: 'var(--accent-cyan)',
      circuitUrl: '/simulator/index.html#circuit={"cols":[["H","H"],["•","Z"],["H","H"],["X","X"],["•","Z"],["X","X"],["H","H"]]}',
      curriculumId: '8.4',
    },
    {
      id: 'teleport',
      name: 'Quantum Teleportation',
      category: 'Entanglement & State Transfer',
      speedup: 'EPR Channel Protocol',
      complexity: '2 Classical Bits + 1 EPR',
      description: 'Transfers unknown qubit states using shared Bell-state entanglement and classical Bell-state measurement communications.',
      icon: Radio,
      tagColor: 'var(--accent-gold)',
      circuitUrl: '/simulator/index.html#circuit={"cols":[["H"],["•","X"],["•"],["H"],["Measure","Measure"]]}',
      curriculumId: '7.1',
    },
    {
      id: 'qft',
      name: 'Quantum Fourier Transform (QFT)',
      category: 'Phase Estimation & Frequency Domain',
      speedup: 'Exponential Speedup',
      complexity: 'O(n²)',
      description: 'Transforms computational amplitudes into quantum frequency spectra with Hadamard gates and controlled phase shifts.',
      icon: Activity,
      tagColor: 'var(--accent-emerald)',
      circuitUrl: '/simulator/index.html#circuit={"cols":[["H"],["Z^½","•"],["Z^¼",1,"•"],["H"],["Z^½","•"],[1,"H"],["Swap","Swap"]]}',
      curriculumId: '8.5',
    },
    {
      id: 'deutsch',
      name: 'Deutsch-Jozsa Algorithm',
      category: 'Quantum Oracle Query Complexity',
      speedup: 'Deterministic Exponential Speedup',
      complexity: '1 Query (vs 2ⁿ⁻¹ + 1)',
      description: 'Determines whether an unknown oracle function is constant or balanced in a single quantum query using global interference.',
      icon: CheckCircle2,
      tagColor: 'var(--accent-purple)',
      circuitUrl: '/simulator/index.html#circuit={"cols":[["X"],["H","H"],["•","X"],["H"],[1,"Measure"]]}',
      curriculumId: '8.1',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '60px 24px 80px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="quantum-pill" style={{ marginBottom: '10px' }}>
          <Zap size={14} /> Built-in Quantum Algorithms
        </div>
        <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
          Interactive Algorithm Suite
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '8px auto 0', fontSize: '0.98rem', lineHeight: 1.6 }}>
          Explore verified quantum circuits directly in the interactive Circuit Simulator or study their step-by-step mathematical proofs in the Learning Platform.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        {algorithms.map((algo) => {
          const Icon = algo.icon;
          return (
            <div
              key={algo.id}
              className="glass-panel-glow"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-glass)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: algo.tagColor,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: algo.tagColor,
                      border: `1px solid ${algo.tagColor}44`,
                    }}
                  >
                    {algo.complexity}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    marginBottom: '4px',
                  }}
                >
                  {algo.category}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
                  {algo.name}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {algo.description}
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span style={{ color: 'var(--accent-emerald)' }}>⚡</span>
                  <span>{algo.speedup}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    onClick={() => {
                      window.location.href = algo.circuitUrl;
                    }}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      fontSize: '0.85rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>Simulate Circuit</span>
                    <ArrowRight size={15} />
                  </button>

                  <button
                    onClick={() => {
                      window.history.pushState(null, '', '/learn');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                    }}
                    className="btn-secondary"
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      fontSize: '0.78rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      color: 'var(--accent-cyan)',
                      borderColor: 'rgba(56, 189, 248, 0.3)',
                    }}
                  >
                    <BookOpen size={13} />
                    <span>Study in Curriculum</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
