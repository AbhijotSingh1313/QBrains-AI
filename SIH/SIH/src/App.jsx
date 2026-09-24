import React, { useState, useEffect } from 'react';
import QuantumBackground3D from './components/QuantumBackground3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AlgorithmsShowcase from './components/AlgorithmsShowcase';
import FeatureModal from './components/FeatureModal';
import Footer from './components/Footer';
import LearningPlatform from './learning/LearningPlatform';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('home');
  const [modalType, setModalType] = useState(null);

  const isLearnRoute = () => {
    return window.location.pathname.startsWith('/learn') || window.location.hash.startsWith('#/learn');
  };

  const [route, setRoute] = useState(isLearnRoute() ? 'learn' : 'home');

  // Handle browser back/forward and routing events
  useEffect(() => {
    const handlePopState = () => {
      setRoute(isLearnRoute() ? 'learn' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Sync theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openModal = (type) => {
    if (type === 'learning') {
      window.history.pushState(null, '', '/learn');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }
    setModalType(type);
    if (['simulation', 'composer', 'tutor', 'assessment'].includes(type)) {
      setActiveTab(type);
    }
  };

  const closeModal = () => {
    setModalType(null);
  };

  // If in learning route, display isolated full-screen Quantum Learning Platform
  if (route === 'learn') {
    return (
      <LearningPlatform
        onBackToDashboard={() => {
          if (window.location.pathname.startsWith('/learn')) {
            window.history.pushState(null, '', '/');
          } else {
            window.location.hash = '';
          }
          setRoute('home');
        }}
      />
    );
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* 1. 3D Interactive Three.js Quantum Chandelier & High-Res Blurred Background */}
      <QuantumBackground3D theme={theme} />

      {/* 2. Top Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openModal={openModal}
      />

      {/* 3. Hero Section with Big Center Title & Live Telemetry */}
      <main>
        <Hero openModal={openModal} />

        {/* 4. Algorithm Showcase */}
        <AlgorithmsShowcase openModal={openModal} />
      </main>

      {/* 5. Footer */}
      <Footer openModal={openModal} />

      {/* 6. Interactive Feature Modal */}
      <FeatureModal
        type={modalType}
        onClose={closeModal}
        onNavigate={(newType) => openModal(newType)}
      />
    </div>
  );
}

