import React, { useState } from 'react';
import {
  Sparkles,
  GitBranch,
  BookOpen,
  Cpu,
  ArrowRight,
  Zap,
  Layers,
  ChevronRight,
  Info,
  Activity,
  CheckCircle2,
  Terminal,
  Sliders
} from 'lucide-react';

export default function Hero({ openModal }) {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const nqmPillars = [
    {
      id: 'pillar-algo',
      tag: 'Pillar 1',
      accentColor: '#FF9933', // Saffron
      accentGlow: 'rgba(255, 153, 51, 0.3)',
      title: 'Indigenous Quantum Algorithms & Computing',
      desc: 'Advancing NQM targets (50–1000 qubits) through interactive circuit composition, noise simulation, and native Qiskit/Cirq algorithm synthesis.',
    },
    {
      id: 'pillar-skilling',
      tag: 'Pillar 2',
      accentColor: '#FFFFFF', // White
      accentGlow: 'rgba(255, 255, 255, 0.25)',
      title: 'National Quantum Workforce & Human Capital',
      desc: 'Democratizing quantum education across Indian institutions with an 11-level curriculum, 209 lessons, KaTeX proofs, and Scholar Certification.',
    },
    {
      id: 'pillar-hubs',
      tag: 'Pillar 3',
      accentColor: '#138808', // India Green
      accentGlow: 'rgba(19, 136, 8, 0.3)',
      title: 'NQM Thematic Hubs & Ecosystem Synergy',
      desc: 'Bridging fundamental research with industrial quantum cryptography, materials modeling, and tech sovereignty for Viksit Bharat 2047.',
    },
  ];

  return (
    <section
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '130px 24px 60px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Quantum Decorative Elements in Left & Right Background */}
      <div
        className="anim-bg-elements"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Left Subtle Background Elements */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            left: '4%',
            top: '32%',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            opacity: 0.42,
          }}
        >
          <div
            style={{
              padding: '7px 14px',
              borderRadius: '10px',
              background: 'rgba(24, 13, 48, 0.5)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            |ψ⟩ = α|0⟩ + β|1⟩
          </div>
          <div
            style={{
              padding: '5px 12px',
              borderRadius: '8px',
              background: 'rgba(24, 13, 48, 0.35)',
              border: '1px solid rgba(168, 85, 247, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
            <span>Hadamard: H ─ • ─</span>
          </div>
        </div>

        {/* Right Subtle Background Elements */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            right: '4%',
            top: '34%',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            opacity: 0.42,
            animationDelay: '2.5s',
          }}
        >
          <div
            style={{
              padding: '7px 14px',
              borderRadius: '10px',
              background: 'rgba(24, 13, 48, 0.5)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--accent-purple)',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
          >
            U(θ, φ, λ) • Unitary
          </div>
          <div
            style={{
              padding: '5px 12px',
              borderRadius: '8px',
              background: 'rgba(24, 13, 48, 0.35)',
              border: '1px solid rgba(168, 85, 247, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
            <span>Bell State: |Φ⁺⟩</span>
          </div>
        </div>
      </div>

      {/* Big Title in the Center with Readability Gradient Shield */}
      <div className="hero-center-shield anim-hero-shield" style={{ marginBottom: '44px' }}>
        <h1
          className="hero-title-text"
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '26px',
            textTransform: 'uppercase',
          }}
        >
          AI-Based Interactive <br />
          <span className="gradient-text">Quantum Algorithm</span>
          <br />
          <span
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '0.01em',
              color: 'var(--text-primary)',
              opacity: 0.95,
            }}
          >
            Learning Platform
          </span>
        </h1>

        {/* CTA Button Group directly beneath title */}
        <div
          className="anim-hero-buttons"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <button
            onClick={() => { window.location.href = '/simulator/index.html'; }}
            className="btn-primary"
            style={{
              padding: '14px 28px',
              fontSize: '1.02rem',
              borderRadius: '12px',
            }}
          >
            <GitBranch size={18} />
            <span>Launch Circuit Composer</span>
          </button>

          <button
            onClick={() => {
              if (openModal) openModal('learning');
              else {
                window.history.pushState(null, '', '/learn');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
            }}
            className="btn-secondary"
            style={{
              padding: '14px 28px',
              fontSize: '1.02rem',
              borderRadius: '12px',
              borderColor: 'rgba(56, 189, 248, 0.4)',
              color: 'var(--accent-cyan)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <BookOpen size={18} />
            <span>Learning Path</span>
          </button>
        </div>
      </div>

      {/* 3. National Quantum Mission (NQM) Alignment Section */}
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '28px 34px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'center',
          textAlign: 'left',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          boxShadow: '0 16px 50px rgba(0, 0, 0, 0.45)',
        }}
      >
        {/* Tricolour Accent Top Ribbon Graphic (Only on this section) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #FF9933 0%, #FF9933 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #138808 66.6%, #138808 100%)',
            boxShadow: '0 0 16px rgba(255, 153, 51, 0.5), 0 0 16px rgba(19, 136, 8, 0.5)',
          }}
        />

        <div>
          {/* Badge with Indian Tricolour and Ashoka Blue Pip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(19, 136, 8, 0.15) 100%)',
              border: '1px solid rgba(255, 153, 51, 0.4)',
              marginBottom: '14px',
              boxShadow: '0 2px 12px rgba(255, 153, 51, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF9933' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF', border: '1px solid #000088' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#138808' }} />
            </div>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.08em', color: '#FFB366', textTransform: 'uppercase' }}>
              National Quantum Mission (NQM) • India
            </span>
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '10px', lineHeight: 1.25 }}>
            Empowering India's National Quantum Leap
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
            Directly aligned with the Government of India's <strong>National Quantum Mission (NQM)</strong> under the Department of Science &amp; Technology (DST). We accelerate domestic quantum capability through open circuit simulation, algorithm development, and university-wide skilling for <strong>Viksit Bharat 2047</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {nqmPillars.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveHotspot(p.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: activeHotspot === p.id ? 'rgba(255, 255, 255, 0.07)' : 'rgba(20, 10, 40, 0.55)',
                  border: `1px solid ${activeHotspot === p.id ? p.accentColor : 'rgba(168, 85, 247, 0.2)'}`,
                  borderLeft: `4px solid ${p.accentColor}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: activeHotspot === p.id ? `0 4px 18px ${p.accentGlow}` : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: p.accentColor, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {p.tag}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>•</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-bright)' }}>
                    {p.title}
                  </span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Showcase Card with Fused Hardware Image & Tricolour Lighting */}
        <div
          style={{
            position: 'relative',
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            background: 'radial-gradient(ellipse at top left, rgba(255, 153, 51, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(19, 136, 8, 0.15) 0%, transparent 50%), linear-gradient(180deg, rgba(16, 7, 34, 0.9) 0%, rgba(8, 3, 18, 0.95) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 20px 70px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.1)',
          }}
        >
          {/* Subtle Ambient Flag Lights behind the Cryostat */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '15%',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 153, 51, 0.35) 0%, transparent 70%)',
              filter: 'blur(32px)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '22%',
              right: '15%',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(19, 136, 8, 0.35) 0%, transparent 70%)',
              filter: 'blur(32px)',
              pointerEvents: 'none',
            }}
          />

          <img
            src="/quantum-processor-transparent.png"
            alt="Superconducting Quantum Hardware"
            style={{
              maxHeight: '370px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 24px rgba(255, 153, 51, 0.35)) drop-shadow(0 15px 35px rgba(0, 0, 0, 0.8))',
              transition: 'transform 0.5s ease',
              position: 'relative',
              zIndex: 2,
            }}
            className="animate-float"
          />

          {/* Glowing National Mission Status Badge at Bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              padding: '11px 16px',
              borderRadius: '12px',
              background: 'rgba(8, 4, 20, 0.9)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 153, 51, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 3,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF9933' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFFFFF' }} />
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#138808' }} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                NQM QPU COMPATIBLE
              </span>
            </div>
            <button
              onClick={() => {
                window.history.pushState(null, '', '/learn');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              style={{
                fontSize: '0.75rem',
                color: '#FFB366',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Learn More <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
