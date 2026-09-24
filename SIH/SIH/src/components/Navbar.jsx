import React, { useState } from 'react';
import {
  Atom,
  BookOpen,
  Cpu,
  GitBranch,
  Sparkles,
  Award,
  Sun,
  Moon,
  LogIn,
  UserPlus,
  Menu,
  X,
  Zap
} from 'lucide-react';

export default function Navbar({
  theme,
  toggleTheme,
  activeTab,
  setActiveTab,
  openModal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'learning', label: 'Learning', icon: BookOpen, badge: 'Roadmap' },
    { id: 'composer', label: 'Composer', icon: GitBranch, badge: 'Circuit' },
  ];

  const handleNavClick = (id) => {
    if (id === 'composer') {
      window.location.href = '/simulator/index.html';
      return;
    }
    if (id === 'learning') {
      window.history.pushState(null, '', '/learn');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setMobileMenuOpen(false);
      return;
    }
    setActiveTab(id);
    openModal(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="anim-nav-entrance"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 24px',
        transition: 'var(--transition-smooth)',
      }}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '16px',
          border: '1px solid var(--border-glass)',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Brand / Logo */}
        <div
          onClick={() => setActiveTab('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
          }}
        >
          <div
            className="qnova-logo-container"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              flexShrink: 0,
            }}
          >
            <img
              src="/qnova-logo.png"
              alt="Q Brains AI Logo"
              className="qnova-logo-img"
            />
          </div>
          <div
            style={{
              fontFamily: 'var(--font-tech)',
              fontWeight: 800,
              fontSize: '1.45rem',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>Q Brains</span>
            <span
              style={{
                fontSize: '0.68rem',
                padding: '3px 8px',
                borderRadius: '6px',
                background: 'rgba(168, 85, 247, 0.2)',
                color: 'var(--accent-cyan)',
                border: '1px solid var(--border-glass)',
                fontWeight: 700,
                letterSpacing: '0.06em',
              }}
            >
              AI
            </span>
          </div>
        </div>

        {/* Center Nav Items (Desktop) */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive
                    ? 'var(--accent-cyan)'
                    : item.highlight
                    ? 'var(--accent-purple)'
                    : 'var(--text-primary)',
                  backgroundColor: isActive
                    ? 'rgba(168, 85, 247, 0.16)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid var(--border-glass)'
                    : '1px solid transparent',
                  transition: 'var(--transition-smooth)',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'var(--bg-glass-hover)';
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.62rem',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      backgroundColor: item.highlight
                        ? 'rgba(168, 85, 247, 0.25)'
                        : 'rgba(192, 132, 252, 0.18)',
                      color: item.highlight
                        ? 'var(--accent-purple)'
                        : 'var(--accent-cyan)',
                      border: `1px solid ${item.highlight ? 'rgba(168,85,247,0.3)' : 'var(--border-glass)'}`,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Theme Toggle + Auth Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} style={{ color: 'var(--accent-gold)' }} />
            ) : (
              <Moon size={18} style={{ color: 'var(--accent-cyan)' }} />
            )}
          </button>

          {/* Sign In Button */}
          <button
            onClick={() => openModal('signin')}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-subtle)',
              transition: 'var(--transition-smooth)',
            }}
            className="auth-btn-signin"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-glass)';
              e.currentTarget.style.color = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            <LogIn size={15} />
            <span>Sign In</span>
          </button>

          {/* Sign Up Button */}
          <button
            onClick={() => openModal('signup')}
            className="btn-primary"
            style={{
              padding: '8px 18px',
              fontSize: '0.88rem',
              borderRadius: '10px',
            }}
          >
            <Zap size={15} />
            <span>Sign Up</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-menu-btn"
            style={{ display: 'none' }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="glass-panel-glow"
          style={{
            marginTop: '10px',
            maxWidth: '1380px',
            margin: '10px auto 0',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: activeTab === item.id ? 'rgba(0,240,255,0.1)' : 'transparent',
                  color: activeTab === item.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {item.badge}
                </span>
              </button>
            );
          })}

          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <button
              onClick={() => {
                openModal('signin');
                setMobileMenuOpen(false);
              }}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <LogIn size={16} />
              <span>Sign In</span>
            </button>
            <button
              onClick={() => {
                openModal('signup');
                setMobileMenuOpen(false);
              }}
              className="btn-primary"
              style={{ flex: 1, padding: '10px', borderRadius: '8px' }}
            >
              <UserPlus size={16} />
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      )}

      {/* Responsive media style injection */}
      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .auth-btn-signin {
            display: inline-flex !important;
          }
        }
        @media (max-width: 959px) {
          .mobile-menu-btn {
            display: inline-flex !important;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </header>
  );
}
