// NotesDrawer.jsx
// Note taking panel for the active lesson with auto-save to localStorage and Multilingual Support.

import React, { useState, useEffect } from 'react';
import { ProgressService } from '../services/ProgressService.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function NotesDrawer({ isOpen, onClose, currentLesson }) {
  const { t, translateLesson } = useLanguage();
  const [noteText, setNoteText] = useState('');
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    if (currentLesson) {
      const text = ProgressService.getNote(currentLesson.id);
      setNoteText(text);
      setSavedStatus(false);
    }
  }, [currentLesson, isOpen]);

  const handleChange = (e) => {
    const val = e.target.value;
    setNoteText(val);
    if (currentLesson) {
      ProgressService.saveNote(currentLesson.id, val);
      setSavedStatus(true);
      setTimeout(() => setSavedStatus(false), 2000);
    }
  };

  if (!isOpen) return null;

  const locLesson = currentLesson ? translateLesson(currentLesson) : null;

  return (
    <>
      <div className="learning-drawer-overlay" onClick={onClose} />
      <div className="learning-drawer-panel">
        <div 
          className="p-4 flex items-center justify-between"
          style={{ background: 'var(--lr-bg-card)', borderBottom: '1px solid var(--lr-border)' }}
        >
          <div>
            <h3 className="font-semibold text-sm" style={{ color: 'var(--lr-text-primary)' }}>{t('lessonNotes', 'Lesson Notes')}</h3>
            <p className="text-xs truncate max-w-[240px]" style={{ color: 'var(--lr-warning-text)' }}>
              {locLesson ? locLesson.title : t('studyNotebook', 'Study Notebook')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {savedStatus && (
              <span className="text-[11px] font-semibold" style={{ color: 'var(--lr-success-text)' }}>{t('notesSaved', 'Saved')}</span>
            )}
            <button
              onClick={onClose}
              className="learning-btn-icon"
              style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col" style={{ background: 'var(--lr-bg-page)' }}>
          <textarea
            value={noteText}
            onChange={handleChange}
            placeholder={t('notesPlaceholder', 'Jot down personal observations, questions, or key formulas for this lesson...')}
            className="w-full flex-1 rounded-xl p-3.5 text-xs md:text-sm font-mono leading-relaxed focus:outline-none resize-none"
            style={{
              background: 'var(--lr-bg-input)',
              border: '1px solid var(--lr-border)',
              color: 'var(--lr-text-primary)'
            }}
          />
          <div className="mt-2 text-[11px] flex justify-between" style={{ color: 'var(--lr-text-muted)' }}>
            <span>{t('markdownSupported', 'Markdown formatting supported')}</span>
            <span>{t('autoSavedLocal', 'Auto-saved to local memory')}</span>
          </div>
        </div>
      </div>
    </>
  );
}
