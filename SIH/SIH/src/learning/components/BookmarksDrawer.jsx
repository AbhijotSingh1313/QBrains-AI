// BookmarksDrawer.jsx
// Slide-over drawer listing all bookmarked lessons with one-click jump navigation and Multilingual Support.

import React from 'react';
import { ProgressService } from '../services/ProgressService.js';
import { LearningContentService } from '../services/LearningContentService.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function BookmarksDrawer({ isOpen, onClose, onSelectLesson }) {
  const { t, translateLesson } = useLanguage();
  const bookmarkIds = ProgressService.getBookmarks();
  const bookmarkedLessons = bookmarkIds
    .map(id => LearningContentService.getLesson(id))
    .filter(Boolean);

  if (!isOpen) return null;

  return (
    <>
      <div className="learning-drawer-overlay" onClick={onClose} />
      <div className="learning-drawer-panel">
        <div 
          className="p-4 flex items-center justify-between"
          style={{ background: 'var(--lr-bg-card)', borderBottom: '1px solid var(--lr-border)' }}
        >
          <div>
            <h3 className="font-semibold text-sm" style={{ color: 'var(--lr-text-primary)' }}>{t('savedBookmarks', 'Saved Bookmarks')}</h3>
            <p className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>{bookmarkedLessons.length} {t('savedLessonsCount', 'saved lessons')}</p>
          </div>
          <button
            onClick={onClose}
            className="learning-btn-icon"
            style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{ background: 'var(--lr-bg-page)' }}>
          {bookmarkedLessons.length === 0 ? (
            <div className="text-center py-12 text-xs" style={{ color: 'var(--lr-text-muted)' }}>
              {t('noBookmarksYet', 'No lessons bookmarked yet. Click the bookmark icon in any lesson to save it here.')}
            </div>
          ) : (
            bookmarkedLessons.map(rawLesson => {
              const lesson = translateLesson(rawLesson);
              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    onSelectLesson(lesson.id);
                    onClose();
                  }}
                  className="learning-lesson-card group cursor-pointer"
                >
                  <div>
                    <div className="text-xs font-semibold" style={{ color: 'var(--lr-primary-text)' }}>{t('navLesson', 'Lesson')} {lesson.id}</div>
                    <div className="text-sm font-medium" style={{ color: 'var(--lr-text-primary)' }}>{lesson.title}</div>
                    <div className="text-[11px] truncate max-w-[260px]" style={{ color: 'var(--lr-text-muted)' }}>{lesson.summary}</div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      ProgressService.toggleBookmark(lesson.id);
                    }}
                    className="learning-btn-icon"
                    style={{ width: '28px', height: '28px', color: 'var(--lr-warning-text)' }}
                    title={t('bookmark', 'Bookmark')}
                  >
                    ★
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
