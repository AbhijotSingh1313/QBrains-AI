// LanguageSelector.jsx
// Elegant multilingual language selector dropdown for the Quantum Learning Platform

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function LanguageSelector() {
  const { language, setLanguage, supportedLanguages, currentLangMeta } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={containerRef} style={{ position: 'relative' }}>
      <button
        id="learn-btn-language"
        onClick={() => setIsOpen(prev => !prev)}
        className="learning-btn-secondary"
        style={{
          padding: '6px 11px',
          fontSize: '0.78rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontWeight: 600,
        }}
        title={`Selected Language: ${currentLangMeta.name} (${currentLangMeta.nativeName})`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span style={{ fontSize: '0.9rem' }}>🌐</span>
        <span className="hidden sm:inline">{currentLangMeta.nativeName}</span>
        <span className="inline sm:hidden">{currentLangMeta.code.toUpperCase()}</span>
        <span style={{ fontSize: '0.65rem', opacity: 0.7, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          className="learning-card shadow-2xl animate-in fade-in duration-150"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            width: '210px',
            maxHeight: '340px',
            overflowY: 'auto',
            padding: '6px',
            zIndex: 1000,
            borderRadius: 'var(--lr-radius-md)',
            background: 'var(--lr-bg-card)',
            border: '1px solid var(--lr-border)',
            boxShadow: 'var(--lr-shadow-lg)'
          }}
          role="listbox"
        >
          <div 
            style={{ 
              padding: '6px 10px', 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              color: 'var(--lr-text-muted)',
              borderBottom: '1px solid var(--lr-border)'
            }}
          >
            Choose Language
          </div>

          <div style={{ padding: '4px 0' }}>
            {supportedLanguages.map(lang => {
              const isSelected = lang.code === language;

              return (
                <button
                  key={lang.code}
                  id={`learn-lang-${lang.code}`}
                  onClick={() => handleSelect(lang.code)}
                  className="w-full text-left transition flex items-center justify-between"
                  style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--lr-radius-sm)',
                    background: isSelected ? 'var(--lr-primary-light)' : 'transparent',
                    color: isSelected ? 'var(--lr-primary-text)' : 'var(--lr-text-primary)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 600 : 500,
                    marginBottom: '2px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'var(--lr-bg-subtle)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.background = 'transparent';
                  }}
                  role="option"
                  aria-selected={isSelected}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.84rem' }}>{lang.nativeName}</span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--lr-text-muted)' }}>{lang.name}</span>
                  </div>

                  {isSelected && (
                    <span style={{ color: 'var(--lr-primary)', fontWeight: 800, fontSize: '0.85rem' }}>
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
