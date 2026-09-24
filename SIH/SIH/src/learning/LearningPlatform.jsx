// LearningPlatform.jsx
// Master Container Component for the Quantum Learning Platform with Multilingual & Theme Support

import React, { useState, useEffect } from 'react';
import { DashboardView } from './views/DashboardView.jsx';
import { CurriculumView } from './views/CurriculumView.jsx';
import { LessonView } from './views/LessonView.jsx';
import { AssessmentView } from './views/AssessmentView.jsx';
import { MasteryView } from './views/MasteryView.jsx';
import { CertificateView } from './views/CertificateView.jsx';
import { PersonalizationView } from './views/PersonalizationView.jsx';
import { TutorDrawer } from './components/TutorDrawer.jsx';
import { NotesDrawer } from './components/NotesDrawer.jsx';
import { BookmarksDrawer } from './components/BookmarksDrawer.jsx';
import { LanguageSelector } from './components/LanguageSelector.jsx';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx';
import { LearningContentService } from './services/LearningContentService.js';
import { ProgressService } from './services/ProgressService.js';
import './learning.css';

function LearningPlatformInner({ onBackToDashboard }) {
  const { t, language, translateLesson } = useLanguage();
  const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' | 'curriculum' | 'lesson' | 'assessment' | 'mastery' | 'certificate' | 'personalization'
  const [currentLessonId, setCurrentLessonId] = useState(ProgressService.getCurrentLessonId() || '0.1');
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('qlp_learning_theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('qlp_learning_theme', next);
      } catch (e) {}
      return next;
    });
  };

  // Drawers
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Subscribe to progress changes to keep state fresh
  useEffect(() => {
    const unsub = ProgressService.subscribe(() => {
      // triggers re-render when progress changes
    });
    return unsub;
  }, []);

  const currentLesson = LearningContentService.getLesson(currentLessonId) || LearningContentService.getAllLessons()[0];
  const currentLevel = LearningContentService.getLevel(currentLesson.levelId);

  const handleNavigateLesson = (lessonId) => {
    setCurrentLessonId(lessonId);
    setActiveView('lesson');
    setIsSearchOpen(false);
  };

  const searchResults = searchQuery.trim().length > 1
    ? LearningContentService.search(searchQuery)
    : [];

  return (
    <div className="learning-root" data-theme={theme}>
      {/* Top Learning Navigation Bar */}
      <header className="learning-header">
        <div className="learning-header-inner">
          {/* Brand and Exit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onBackToDashboard}
              className="learning-btn-secondary"
              title="Return to Main Dashboard"
            >
              <span>{t('backBtn', '← Dashboard')}</span>
            </button>

            <div 
              onClick={() => setActiveView('dashboard')}
              className="learning-brand"
            >
              <div className="learning-brand-icon">
                Q
              </div>
              <div>
                <div className="learning-brand-title">Q BRAINS AI</div>
                <div className="learning-brand-sub">{t('brandSub', 'Quantum Scholar Platform')}</div>
              </div>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="learning-nav-group">
            {[
              { id: 'dashboard', label: t('navDashboard', 'Dashboard'), icon: '📊' },
              { id: 'curriculum', label: t('navCurriculum', 'Curriculum'), icon: '📚' },
              { id: 'lesson', label: t('navLesson', 'Lesson'), icon: '📖' },
              { id: 'assessment', label: t('navExams', 'Exams'), icon: '📝' },
              { id: 'mastery', label: t('navMastery', 'Mastery'), icon: '🎯' },
              { id: 'certificate', label: t('navCertificate', 'Certification'), icon: '🏆' },
              { id: 'personalization', label: t('navPersonalization', 'Personalization'), icon: '👤' },
            ].map(tab => (
              <button
                key={tab.id}
                id={`learn-nav-${tab.id}`}
                onClick={() => setActiveView(tab.id)}
                className={`learning-nav-btn ${activeView === tab.id ? 'active' : ''}`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Tools */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Language Selector */}
            <LanguageSelector />

            {/* Theme Toggle Button */}
            <button
              id="learn-btn-theme"
              onClick={toggleTheme}
              className="learning-btn-theme"
              title={`${t('switchTheme', 'Switch Theme')} (${theme === 'light' ? 'Dark' : 'Light'})`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button
              id="learn-btn-search"
              onClick={() => setIsSearchOpen(true)}
              className="learning-btn-icon"
              title={t('searchTitle', 'Search curriculum')}
            >
              🔍
            </button>

            <button
              id="learn-btn-bookmarks"
              onClick={() => setIsBookmarksOpen(true)}
              className="learning-btn-icon"
              title={t('bookmarks', 'Bookmarks')}
            >
              ★
            </button>

            <button
              id="learn-btn-notes"
              onClick={() => setIsNotesOpen(true)}
              className="learning-btn-icon"
              title={t('notes', 'Notes')}
            >
              📝
            </button>

            <button
              id="learn-btn-ai-tutor"
              onClick={() => setIsTutorOpen(true)}
              className="learning-btn-primary"
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
              <span>{t('aiTutor', 'AI Tutor')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main View Container */}
      <main className="learning-main">
        {activeView === 'dashboard' && (
          <DashboardView
            onNavigateToLesson={handleNavigateLesson}
            onNavigateToView={setActiveView}
          />
        )}

        {activeView === 'curriculum' && (
          <CurriculumView
            onNavigateToLesson={handleNavigateLesson}
          />
        )}

        {activeView === 'lesson' && (
          <LessonView
            lessonId={currentLessonId}
            onNavigateToLesson={handleNavigateLesson}
            onOpenTutor={() => setIsTutorOpen(true)}
            onOpenNotes={() => setIsNotesOpen(true)}
          />
        )}

        {activeView === 'assessment' && (
          <AssessmentView
            onNavigateToView={setActiveView}
          />
        )}

        {activeView === 'mastery' && (
          <MasteryView
            onNavigateToLesson={handleNavigateLesson}
          />
        )}

        {activeView === 'certificate' && (
          <CertificateView
            onNavigateToView={setActiveView}
          />
        )}

        {activeView === 'personalization' && (
          <PersonalizationView
            onNavigateToView={setActiveView}
          />
        )}
      </main>

      {/* Drawers */}
      <TutorDrawer
        isOpen={isTutorOpen}
        onClose={() => setIsTutorOpen(false)}
        currentLesson={currentLesson}
        currentLevel={currentLevel}
      />

      <NotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentLesson={currentLesson}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        onSelectLesson={handleNavigateLesson}
      />

      {/* Search Modal */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 animate-in fade-in duration-150"
          style={{ background: 'rgba(0, 0, 0, 0.55)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsSearchOpen(false); }}
        >
          <div 
            className="w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: 'var(--lr-bg-card)', border: '1px solid var(--lr-border)' }}
          >
            <div 
              className="p-4 flex items-center justify-between gap-3"
              style={{ borderBottom: '1px solid var(--lr-border)' }}
            >
              <input
                type="text"
                autoFocus
                placeholder={t('searchPlaceholder', 'Search across 200+ lessons, concepts, formulas...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm focus:outline-none"
                style={{ color: 'var(--lr-text-primary)' }}
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 text-sm rounded hover:opacity-80"
                style={{ color: 'var(--lr-text-muted)' }}
              >
                ✕
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {searchResults.length === 0 ? (
                <div className="text-center py-8 text-xs" style={{ color: 'var(--lr-text-muted)' }}>
                  {searchQuery.trim().length > 1 ? t('noSearchResults', 'No matching lessons found.') : t('typeToSearch', 'Type to search curriculum...')}
                </div>
              ) : (
                searchResults.map(rawL => {
                  const l = translateLesson(rawL);
                  return (
                    <div
                      key={l.id}
                      onClick={() => handleNavigateLesson(l.id)}
                      className="p-3 rounded-xl cursor-pointer transition flex items-center justify-between hover:opacity-90"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--lr-bg-subtle)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div>
                        <div className="text-xs font-semibold" style={{ color: 'var(--lr-primary-text)' }}>{t('navLesson', 'Lesson')} {l.id}</div>
                        <div className="text-sm font-medium" style={{ color: 'var(--lr-text-primary)' }}>{l.title}</div>
                        <div className="text-[11px] truncate max-w-md" style={{ color: 'var(--lr-text-muted)' }}>{l.summary}</div>
                      </div>
                      <span className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>→</span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LearningPlatform(props) {
  return (
    <LanguageProvider>
      <LearningPlatformInner {...props} />
    </LanguageProvider>
  );
}
