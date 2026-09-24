// DiagramBlock.jsx
// Interactive SVG Visualizations for Core Quantum Phenomena: Bloch Sphere, Double-Slit, Superposition, Tunneling, Bell States, Teleportation, and Grover Rotation.

import React, { useState } from 'react';

export function DiagramBlock({ type, props = {} }) {
  if (type === 'bloch_sphere') {
    return <InteractiveBlochSphere {...props} />;
  }
  if (type === 'double_slit') {
    return <InteractiveDoubleSlit {...props} />;
  }
  if (type === 'superposition') {
    return <InteractiveSuperposition {...props} />;
  }
  if (type === 'tunneling') {
    return <InteractiveTunneling {...props} />;
  }
  if (type === 'bell_state') {
    return <InteractiveBellState {...props} />;
  }
  if (type === 'teleportation') {
    return <InteractiveTeleportation {...props} />;
  }
  if (type === 'grover_rotation') {
    return <InteractiveGroverRotation {...props} />;
  }

  // Fallback generic schematic
  return (
    <div className="p-4 bg-slate-900/80 border border-slate-700/60 rounded-xl my-4 text-center">
      <div className="text-cyan-400 font-medium text-sm mb-1">Quantum Diagram</div>
      <p className="text-xs text-slate-400">Interactive schematic active for {type}</p>
    </div>
  );
}

// 1. Interactive Bloch Sphere
function InteractiveBlochSphere() {
  const [theta, setTheta] = useState(1.047); // ~60 deg
  const [phi, setPhi] = useState(0.785);   // ~45 deg

  // Spherical to 2D projection
  const r = 90;
  const cx = 140;
  const cy = 130;

  // 3D coordinates
  const x3d = Math.sin(theta) * Math.cos(phi);
  const y3d = Math.sin(theta) * Math.sin(phi);
  const z3d = Math.cos(theta);

  // Simple orthographic projection
  const px = cx + r * (x3d * 0.866 - y3d * 0.5);
  const py = cy - r * (z3d * 0.9 + y3d * 0.25);

  const prob0 = (Math.cos(theta / 2) ** 2).toFixed(3);
  const prob1 = (Math.sin(theta / 2) ** 2).toFixed(3);

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-4 my-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-cyan-300">Interactive 3D Bloch Sphere</span>
        <span className="text-xs text-slate-400">Drag sliders to rotate statevector</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <svg width="280" height="260" viewBox="0 0 280 260" className="drop-shadow-lg">
            {/* Ambient sphere glow */}
            <circle cx={cx} cy={cy} r={r} fill="url(#blochGrad)" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.5" />
            <defs>
              <radialGradient id="blochGrad" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
              </radialGradient>
            </defs>

            {/* Equator ellipse */}
            <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.35} fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />

            {/* Axes */}
            {/* Z-axis */}
            <line x1={cx} y1={cy - r - 15} x2={cx} y2={cy + r + 15} stroke="#cbd5e1" strokeWidth="1.5" />
            <text x={cx + 8} y={cy - r - 5} fill="#38bdf8" fontSize="12" fontWeight="bold">|0⟩ (+Z)</text>
            <text x={cx + 8} y={cy + r + 12} fill="#ec4899" fontSize="12" fontWeight="bold">|1⟩ (-Z)</text>

            {/* X-axis */}
            <line x1={cx - r * 0.8} y1={cy + r * 0.4} x2={cx + r * 0.8} y2={cy - r * 0.4} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <text x={cx + r * 0.8 + 4} y={cy - r * 0.4} fill="#a78bfa" fontSize="11">|+⟩</text>

            {/* Y-axis */}
            <line x1={cx - r * 0.9} y1={cy} x2={cx + r * 0.9} y2={cy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
            <text x={cx + r * 0.9 + 4} y={cy + 4} fill="#a78bfa" fontSize="11">|+i⟩</text>

            {/* Statevector */}
            <line x1={cx} y1={cy} x2={px} y2={py} stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx={px} cy={py} r="5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="space-y-3 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Polar Angle (θ): {((theta * 180) / Math.PI).toFixed(0)}°</span>
              <span className="text-cyan-400">P(|0⟩) = {prob0}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="3.1415" 
              step="0.05"
              value={theta}
              onChange={(e) => setTheta(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <span>Azimuthal Phase (φ): {((phi * 180) / Math.PI).toFixed(0)}°</span>
              <span className="text-pink-400">P(|1⟩) = {prob1}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="6.283" 
              step="0.05"
              value={phi}
              onChange={(e) => setPhi(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
          </div>

          <div className="p-2 bg-slate-900/90 rounded border border-slate-700/80 text-xs font-mono text-slate-300">
            <div>
              {`|ψ⟩ = cos(${((theta*180)/(2*Math.PI)).toFixed(0)}°)|0⟩ + e^{i${((phi*180/Math.PI)).toFixed(0)}°}sin(${((theta*180)/(2*Math.PI)).toFixed(0)}°)|1⟩`}
            </div>
            <div className="mt-1 text-emerald-400">|⟨0|ψ⟩|² = {prob0} &nbsp;|&nbsp; |⟨1|ψ⟩|² = {prob1}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Interactive Double-Slit Experiment
function InteractiveDoubleSlit() {
  const [detectorOn, setDetectorOn] = useState(false);
  const [slitSeparation, setSlitSeparation] = useState(40);

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-emerald-300">Double-Slit Wave Interference & Detector Collapse</span>
        <button
          onClick={() => setDetectorOn(!detectorOn)}
          className={`px-2.5 py-1 text-xs font-medium rounded border transition ${
            detectorOn 
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/50' 
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
          }`}
        >
          {detectorOn ? 'Detector: ACTIVE (Which-Way)' : 'Detector: OFF (Coherent)'}
        </button>
      </div>

      <div className="flex justify-center">
        <svg width="340" height="180" viewBox="0 0 340 180" className="bg-slate-950 rounded-lg p-1 border border-slate-800">
          {/* Light source */}
          <circle cx="20" cy="90" r="6" fill="#38bdf8" />
          <path d="M 28 85 Q 50 60 70 40 M 28 90 Q 50 90 70 90 M 28 95 Q 50 120 70 140" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" fill="none" />

          {/* Barrier with two slits */}
          <line x1="80" y1="10" x2="80" y2={90 - slitSeparation/2} stroke="#64748b" strokeWidth="4" />
          <line x1="80" y1={90 - slitSeparation/2 + 8} x2="80" y2={90 + slitSeparation/2 - 8} stroke="#64748b" strokeWidth="4" />
          <line x1="80" y1={90 + slitSeparation/2} x2="80" y2="170" stroke="#64748b" strokeWidth="4" />

          {/* Detector icon */}
          {detectorOn && (
            <g transform="translate(85, 65)">
              <circle cx="8" cy="8" r="6" fill="#ef4444" />
              <text x="18" y="12" fill="#ef4444" fontSize="9" fontWeight="bold">EYE</text>
            </g>
          )}

          {/* Wave propagation */}
          {!detectorOn ? (
            <g opacity="0.6">
              {[1, 2, 3, 4, 5].map(i => (
                <circle key={i} cx="80" cy={90 - slitSeparation/2 + 4} r={i * 24} fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="3 3" />
              ))}
              {[1, 2, 3, 4, 5].map(i => (
                <circle key={i} cx="80" cy={90 + slitSeparation/2 - 4} r={i * 24} fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeDasharray="3 3" />
              ))}
            </g>
          ) : (
            <g opacity="0.6">
              <path d="M 85 70 L 250 50 M 85 70 L 250 85" stroke="#f43f5e" strokeWidth="1.2" />
              <path d="M 85 110 L 250 95 M 85 110 L 250 130" stroke="#f43f5e" strokeWidth="1.2" />
            </g>
          )}

          {/* Detection screen */}
          <line x1="260" y1="10" x2="260" y2="170" stroke="#cbd5e1" strokeWidth="3" />

          {/* Intensity distribution */}
          {!detectorOn ? (
            // Wave interference fringes (cos^2 pattern)
            <path
              d="M 265 10 Q 280 20 265 35 Q 310 55 265 75 Q 330 90 265 105 Q 310 125 265 145 Q 280 160 265 170"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2.5"
            />
          ) : (
            // Two classical probability bumps
            <path
              d="M 265 10 L 265 40 Q 300 70 265 90 Q 300 110 265 140 L 265 170"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2.5"
            />
          )}
        </svg>
      </div>

      <div className="mt-2 text-center text-xs text-slate-300">
        {detectorOn 
          ? 'Measurement destroys coherence: Wavefunction collapses into two classical particle streams.' 
          : 'Wave interference: Superposition of paths creates constructive and destructive fringe peaks.'}
      </div>
    </div>
  );
}

// 3. Interactive Superposition
function InteractiveSuperposition() {
  const [angle, setAngle] = useState(0.785); // 45 deg

  const a = Math.cos(angle);
  const b = Math.sin(angle);
  const p0 = (a ** 2 * 100).toFixed(1);
  const p1 = (b ** 2 * 100).toFixed(1);

  return (
    <div className="bg-slate-900/90 border border-purple-500/30 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-purple-300">Quantum Superposition Amplitudes</span>
        <span className="text-xs font-mono text-cyan-400">|ψ⟩ = {a.toFixed(2)}|0⟩ + {b.toFixed(2)}|1⟩</span>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>State |0⟩ Probability: {p0}%</span>
            <span>State |1⟩ Probability: {p1}%</span>
          </div>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden flex">
            <div style={{ width: `${p0}%` }} className="bg-cyan-500 transition-all duration-150" />
            <div style={{ width: `${p1}%` }} className="bg-pink-500 transition-all duration-150" />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="1.5707"
          step="0.02"
          value={angle}
          onChange={(e) => setAngle(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
        />
      </div>
    </div>
  );
}

// 4. Interactive Tunneling
function InteractiveTunneling() {
  const [barrierWidth, setBarrierWidth] = useState(40);
  const transmission = Math.exp(-0.06 * barrierWidth);

  return (
    <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-amber-300">Quantum Tunneling Through Finite Potential Barrier</span>
        <span className="text-xs text-emerald-400">Transmission T = {(transmission * 100).toFixed(1)}%</span>
      </div>

      <svg width="320" height="120" viewBox="0 0 320 120" className="bg-slate-950 rounded-lg w-full">
        {/* Potential Barrier */}
        <rect x={140 - barrierWidth / 2} y="30" width={barrierWidth} height="80" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="140" y="24" fill="#f59e0b" fontSize="10" textAnchor="middle">Potential V0</text>

        {/* Incident wave */}
        <path d="M 10 70 Q 30 50 50 70 T 90 70 T 120 70" fill="none" stroke="#38bdf8" strokeWidth="2" />

        {/* Exponentially decaying wave in barrier */}
        <path d={`M ${140 - barrierWidth/2} 70 Q 140 85 ${140 + barrierWidth/2} 88`} fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="2 2" />

        {/* Transmitted wave */}
        <path d={`M ${140 + barrierWidth/2} 88 Q ${170 + barrierWidth/2} ${88 - 15 * transmission} ${190 + barrierWidth/2} 88 T ${230 + barrierWidth/2} 88`} fill="none" stroke="#10b981" strokeWidth="2" />
      </svg>

      <div className="mt-2">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>Barrier Width: {barrierWidth} nm</span>
          <span>Decay: e^{`{-2κa}`}</span>
        </div>
        <input
          type="range"
          min="15"
          max="70"
          value={barrierWidth}
          onChange={(e) => setBarrierWidth(parseInt(e.target.value))}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
        />
      </div>
    </div>
  );
}

// 5. Interactive Bell State
function InteractiveBellState() {
  const [basis, setBasis] = useState('phi_plus');

  const descriptions = {
    phi_plus: { name: '|Φ+⟩ = (|00⟩ + |11⟩)/√2', corr: 'Perfect Z-correlation (00 or 11)' },
    phi_minus: { name: '|Φ-⟩ = (|00⟩ - |11⟩)/√2', corr: 'Z-correlation with relative π phase' },
    psi_plus: { name: '|Ψ+⟩ = (|01⟩ + |10⟩)/√2', corr: 'Perfect Z-anticorrelation (01 or 10)' },
    psi_minus: { name: '|Ψ-⟩ = (|01⟩ - |10⟩)/√2', corr: 'Singlet state: invariant in all rotation bases' },
  };

  return (
    <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-sky-300">Bell State Entanglement Analyzer</span>
        <span className="text-xs font-mono text-cyan-400">{descriptions[basis].name}</span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        {['phi_plus', 'phi_minus', 'psi_plus', 'psi_minus'].map((b) => (
          <button
            key={b}
            onClick={() => setBasis(b)}
            className={`px-2 py-1 text-xs rounded border transition ${
              basis === b
                ? 'bg-sky-500/30 text-sky-200 border-sky-400'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500'
            }`}
          >
            {b.replace('_', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
        <div className="font-semibold text-sky-400 mb-1">Correlation Behavior:</div>
        <div>{descriptions[basis].corr}</div>
        <div className="mt-2 text-slate-400">CHSH Correlator S = 2√2 ≈ 2.828 (Violates classical local realism bound of 2).</div>
      </div>
    </div>
  );
}

// 6. Interactive Teleportation
function InteractiveTeleportation() {
  const [step, setStep] = useState(0);

  const steps = [
    { title: 'Step 1: Shared EPR Pair', desc: 'Alice and Bob share pre-entangled Bell pair |Φ+⟩ on qubits 1 and 2. Alice holds unknown qubit |ψ⟩ on qubit 0.' },
    { title: 'Step 2: Alice’s Bell Measurement', desc: 'Alice performs CNOT(0->1) and Hadamard on qubit 0, projecting her two qubits into one of four orthogonal Bell states.' },
    { title: 'Step 3: Classical Transmission', desc: 'Alice measures her two qubits and transmits 2 classical bits (b0, b1) to Bob at speed <= c.' },
    { title: 'Step 4: Bob’s Pauli Correction', desc: 'Bob applies operator Z^{b0} X^{b1} to qubit 2, reconstructing the exact unknown state |ψ⟩ with 100% fidelity.' }
  ];

  return (
    <div className="bg-slate-900/90 border border-violet-500/30 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-violet-300">Quantum Teleportation Step-by-Step</span>
        <span className="text-xs text-slate-400">Step {step + 1} of 4</span>
      </div>

      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
        <div className="font-semibold text-violet-400 mb-1">{steps[step].title}</div>
        <div className="text-slate-300">{steps[step].desc}</div>
      </div>

      <div className="flex justify-between mt-3">
        <button
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
          className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-300 disabled:opacity-40"
        >
          Previous
        </button>
        <button
          disabled={step === 3}
          onClick={() => setStep(step + 1)}
          className="px-3 py-1 text-xs rounded bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-40"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

// 7. Interactive Grover Rotation
function InteractiveGroverRotation() {
  const [iteration, setIteration] = useState(1);
  const theta = 0.35; // ~20 deg
  const angle = (2 * iteration + 1) * (theta / 2);

  const cx = 130;
  const cy = 130;
  const r = 90;
  const vx = cx + r * Math.cos(angle);
  const vy = cy - r * Math.sin(angle);

  const probSuccess = (Math.sin(angle) ** 2 * 100).toFixed(1);

  return (
    <div className="bg-slate-900/90 border border-yellow-500/30 rounded-xl p-4 my-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-yellow-300">Grover 2D Geometric Rotation</span>
        <span className="text-xs text-emerald-400">Target Probability: {probSuccess}%</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        <svg width="260" height="180" viewBox="0 0 260 180" className="bg-slate-950 rounded-lg">
          {/* Axes */}
          <line x1={cx} y1={cy} x2={cx + 100} y2={cy} stroke="#64748b" strokeWidth="1.5" />
          <text x={cx + 70} y={cy + 15} fill="#64748b" fontSize="10">|w^⊥⟩</text>

          <line x1={cx} y1={cy} x2={cx} y2={cy - 100} stroke="#f59e0b" strokeWidth="1.5" />
          <text x={cx - 30} y={cy - 85} fill="#f59e0b" fontSize="10" fontWeight="bold">|w⟩ Target</text>

          {/* Quarter arc */}
          <path d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 0 ${cx} ${cy - r}`} fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

          {/* State vector */}
          <line x1={cx} y1={cy} x2={vx} y2={vy} stroke="#22d3ee" strokeWidth="2.5" />
          <circle cx={vx} cy={vy} r="4" fill="#22d3ee" />
        </svg>

        <div className="space-y-3">
          <div className="text-xs text-slate-300">
            Current Iteration: <span className="text-yellow-400 font-bold">{iteration}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIteration(Math.max(0, iteration - 1))}
              className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
            >
              -1 Iteration
            </button>
            <button
              onClick={() => setIteration(iteration + 1)}
              className="px-3 py-1 text-xs rounded bg-yellow-600 hover:bg-yellow-500 text-white"
            >
              +1 Iteration
            </button>
          </div>
          <p className="text-xs text-slate-400">
            Each reflection advances vector towards target by angle θ ≈ 2/√N. Notice how exceeding R_opt causes probability to oscillate back down (overcooking).
          </p>
        </div>
      </div>
    </div>
  );
}
