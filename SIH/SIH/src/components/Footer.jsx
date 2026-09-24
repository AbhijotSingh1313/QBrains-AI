import React from 'react';

export default function Footer() {
  const navigateToLearn = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', '/learn');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(20px)',
        padding: '50px 24px 30px',
        color: 'var(--text-secondary)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}
      >
        {/* Brand & Status */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div
              className="qnova-logo-container"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                flexShrink: 0,
              }}
            >
              <img
                src="/qnova-logo.png"
                alt="Q Brains AI Logo"
                className="qnova-logo-img"
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-bright)' }}>
                Q Brains
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 7px',
                  borderRadius: '5px',
                  background: 'rgba(168, 85, 247, 0.2)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid var(--border-glass)',
                  fontWeight: 700,
                }}
              >
                AI
              </span>
            </div>
          </div>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
            Empowering quantum learners, researchers, and engineers with real-time circuit simulation,
            an 11-level academic curriculum, and AI pedagogical tutoring.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--accent-emerald)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: '0 0 8px var(--accent-emerald)' }} />
            <span>Simulator &amp; Learning Engine: Active</span>
          </div>
        </div>

        {/* Navigation / Modules */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '16px' }}>
            Platform Modules
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
            <li>
              <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
                11-Level Quantum Curriculum
              </a>
            </li>
            <li>
              <a href="/simulator/index.html" style={{ color: 'inherit', textDecoration: 'none' }}>
                Interactive Circuit Composer
              </a>
            </li>
            <li>
              <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
                Interactive SVG Visualizers
              </a>
            </li>
            <li>
              <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
                AI Quantum Learning Tutor
              </a>
            </li>
            <li>
              <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
                Scholar Certification System
              </a>
            </li>
          </ul>
        </div>

        {/* Code Formats & Transpilers */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '16px' }}>
            Code Export &amp; Formats
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
            <li>IBM Qiskit (Python 3)</li>
            <li>Google Cirq Framework</li>
            <li>OpenQASM 2.0 / 3.0</li>
            <li>Real-Time Statevector &amp; Density</li>
            <li>SVG &amp; PNG Circuit Export</li>
          </ul>
        </div>

        {/* Platform Technical Specifications */}
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-bright)', marginBottom: '16px' }}>
            Platform Specifications
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Circuit Capacity:</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Up to 16 Wires</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Gate Library:</span>
              <span style={{ color: 'var(--accent-gold)' }}>50+ Quantum Gates</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Curriculum Scope:</span>
              <span style={{ color: 'var(--accent-emerald)' }}>11 Levels • 209 Lessons</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Math Renderer:</span>
              <span style={{ color: 'var(--accent-purple)' }}>KaTeX Live Engine</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Simulation Engine:</span>
              <span style={{ color: 'var(--accent-cyan)' }}>Client-Side Zero Latency</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8rem',
        }}
      >
        <div>
          © 2026 Q Brains AI. Designed for Next-Gen Quantum Algorithm Education &amp; Research.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
            National Quantum Mission Aligned
          </a>
          <a href="/learn" onClick={navigateToLearn} style={{ color: 'inherit', textDecoration: 'none' }}>
            Scholar Certification
          </a>
          <a href="/simulator/index.html" style={{ color: 'inherit', textDecoration: 'none' }}>
            Circuit Composer
          </a>
        </div>
      </div>
    </footer>
  );
}
