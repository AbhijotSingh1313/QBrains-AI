import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function QuantumBackground3D({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for the 3D Quantum Chandelier
    const chandelierGroup = new THREE.Group();
    scene.add(chandelierGroup);

    const isLight = theme === 'light';
    const goldColor = isLight ? 0xc4820a : 0xf59e0b;
    const silverColor = isLight ? 0x9333ea : 0xd8b4fe; // violet-tinted alloy
    const violetNeon = isLight ? 0x7c3aed : 0xc084fc;
    const purpleColor = isLight ? 0x6d28d9 : 0xa855f7;

    // 1. Top Flange Plate (Gold)
    const topPlateGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.4, 32);
    const goldMat = new THREE.MeshStandardMaterial({
      color: goldColor,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });
    const topPlate = new THREE.Mesh(topPlateGeo, goldMat);
    topPlate.position.y = 5.5;
    chandelierGroup.add(topPlate);

    // Golden bolts on top plate
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const bolt = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 0.2, 8),
        goldMat
      );
      bolt.position.set(Math.cos(angle) * 3.8, 5.75, Math.sin(angle) * 3.8);
      chandelierGroup.add(bolt);
    }

    // Central structural golden mast
    const mastGeo = new THREE.CylinderGeometry(0.35, 0.35, 10, 16);
    const mast = new THREE.Mesh(mastGeo, goldMat);
    mast.position.y = 0.5;
    chandelierGroup.add(mast);

    // 2. Stage 2 Plate (50K Stage - Silver)
    const silverMat = new THREE.MeshStandardMaterial({
      color: silverColor,
      metalness: 0.9,
      roughness: 0.2,
    });
    const stage2 = new THREE.Mesh(
      new THREE.CylinderGeometry(3.6, 3.8, 0.35, 32),
      silverMat
    );
    stage2.position.y = 3.2;
    chandelierGroup.add(stage2);

    // 3. Stage 3 Plate (4K Stage - Gold)
    const stage3 = new THREE.Mesh(
      new THREE.CylinderGeometry(3.0, 3.2, 0.35, 32),
      goldMat
    );
    stage3.position.y = 1.0;
    chandelierGroup.add(stage3);

    // 4. Stage 4 Plate (Still Stage - Silver)
    const stage4 = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.5, 0.3, 32),
      silverMat
    );
    stage4.position.y = -1.2;
    chandelierGroup.add(stage4);

    // 5. Bottom Mixing Chamber (10 mK Quantum Core)
    const qpuBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.8, 1.8, 0.5, 32),
      goldMat
    );
    qpuBase.position.y = -3.5;
    chandelierGroup.add(qpuBase);

    // Quantum Processor Enclosure Box (Glowing chip housing)
    const chipGeo = new THREE.BoxGeometry(1.2, 0.6, 1.2);
    const chipMat = new THREE.MeshStandardMaterial({
      color: 0x150a2b,
      metalness: 0.95,
      roughness: 0.1,
      emissive: violetNeon,
      emissiveIntensity: isLight ? 0.4 : 0.75,
    });
    const chipMesh = new THREE.Mesh(chipGeo, chipMat);
    chipMesh.position.y = -4.1;
    chandelierGroup.add(chipMesh);

    // Coaxial Braided Wires (curves cascading down stages)
    const wireMat = new THREE.MeshBasicMaterial({
      color: violetNeon,
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.45 : 0.7,
    });

    const numWires = 24;
    for (let i = 0; i < numWires; i++) {
      const angle = (i / numWires) * Math.PI * 2;
      const r1 = 3.4;
      const r2 = 1.6;
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(Math.cos(angle) * r1, 3.2, Math.sin(angle) * r1),
        new THREE.Vector3(Math.cos(angle + 0.4) * (r1 * 0.9), 1.0, Math.sin(angle + 0.4) * (r1 * 0.9)),
        new THREE.Vector3(Math.cos(angle - 0.2) * (r2 * 1.3), -1.2, Math.sin(angle - 0.2) * (r2 * 1.3)),
        new THREE.Vector3(Math.cos(angle) * r2, -3.5, Math.sin(angle) * r2)
      );

      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.04, 6, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, wireMat);
      chandelierGroup.add(tubeMesh);
    }

    // Glowing Quantum Orbital Rings around the QPU Core
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.03, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: violetNeon,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.position.y = -4.1;
    ring1.rotation.x = Math.PI / 2;
    chandelierGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.02, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: purpleColor,
      transparent: true,
      opacity: 0.7,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.position.y = -4.1;
    ring2.rotation.x = Math.PI / 2.3;
    ring2.rotation.y = Math.PI / 5;
    chandelierGroup.add(ring2);

    // Floating Quantum Particle Swarm (representing Superposition states |0⟩ and |1⟩)
    const particlesCount = 280;
    const particleGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.09,
      color: violetNeon,
      transparent: true,
      opacity: isLight ? 0.6 : 0.9,
    });
    const particleField = new THREE.Points(particleGeometry, particleMat);
    scene.add(particleField);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f3ff, isLight ? 1.2 : 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, isLight ? 1.5 : 2.0);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const violetPoint = new THREE.PointLight(violetNeon, isLight ? 2.5 : 5, 18);
    violetPoint.position.set(0, -3.5, 2);
    scene.add(violetPoint);

    const purplePoint = new THREE.PointLight(purpleColor, isLight ? 2 : 4, 18);
    purplePoint.position.set(-4, 2, -2);
    scene.add(purplePoint);

    // Position chandelier comfortably in the view
    chandelierGroup.position.set(0, 0.4, 0);
    chandelierGroup.scale.set(1.1, 1.1, 1.1);

    // Interactive mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0;
    let targetRotationX = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0006;
      mouseY = (e.clientY - windowHalfY) * 0.0006;
      targetRotationY = mouseX * 1.5;
      targetRotationX = mouseY * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Continuous subtle spin + mouse parallax
      chandelierGroup.rotation.y += 0.0035;
      chandelierGroup.rotation.y += (targetRotationY - (chandelierGroup.rotation.y % (Math.PI * 2))) * 0.03;
      chandelierGroup.rotation.x += (targetRotationX - chandelierGroup.rotation.x) * 0.03;

      // Pulse the rings
      ring1.rotation.z = elapsedTime * 0.8;
      ring2.rotation.z = -elapsedTime * 0.6;
      ring1.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.04);

      // Subtle wave for particles
      particleField.rotation.y = elapsedTime * 0.04;
      particleField.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* 1. Cinematic Quantum Computer Lab Blurred Background */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          left: -20,
          right: -20,
          bottom: -20,
          backgroundImage: `url('/quantum-lab-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: theme === 'light' ? 'blur(30px) brightness(1.15) opacity(0.35)' : 'blur(28px) brightness(0.4) opacity(0.85)',
          transform: 'scale(1.05)',
          transition: 'filter 0.5s ease',
        }}
      />

      {/* 2. Cybernetic Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            theme === 'light'
              ? 'radial-gradient(circle at center, rgba(251, 247, 255, 0.35) 0%, rgba(251, 247, 255, 0.85) 75%, #fbf7ff 100%)'
              : 'radial-gradient(circle at center, rgba(9, 4, 20, 0.45) 0%, rgba(9, 4, 20, 0.88) 70%, #090414 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3. Subtle Digital Circuit Matrix Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            theme === 'light'
              ? 'radial-gradient(rgba(124, 58, 237, 0.12) 1px, transparent 1px)'
              : 'radial-gradient(rgba(192, 132, 252, 0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.7,
        }}
      />

      {/* 4. Three.js 3D Quantum Chandelier Canvas */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'auto',
        }}
      />
    </div>
  );
}
