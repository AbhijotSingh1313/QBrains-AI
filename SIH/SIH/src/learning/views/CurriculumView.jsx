// CurriculumView.jsx
// Complete hierarchical syllabus showing all 11 levels, modules, lessons, and completion states with Multilingual Support.

import React, { useState } from 'react';
import { LearningContentService } from '../services/LearningContentService.js';
import { ProgressService } from '../services/ProgressService.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function CurriculumView({ onNavigateToLesson }) {
  const { t, translateLevel, translateLesson } = useLanguage();
  const rawLevels = LearningContentService.getCurriculumLevels();
  const completedLessons = new Set(ProgressService.getCompletedLessons());
  const [expandedLevel, setExpandedLevel] = useState(0);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="pb-4" style={{ borderBottom: '1px solid var(--lr-border)' }}>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
          {t('syllabusTitle', 'Full Curriculum Syllabus')}
        </h1>
        <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-muted)' }}>
          {t('syllabusDesc', '11 progressive academic levels covering mathematics, physics, qubits, gates, entanglement, and fault-tolerant algorithms.')}
        </p>
      </div>

      <div className="space-y-4">
        {rawLevels.map((rawLvl) => {
          const lvl = translateLevel(rawLvl);
          const rawLessons = LearningContentService.getLessonsForLevel(lvl.id);
          const completedCount = rawLessons.filter(l => completedLessons.has(l.id)).length;
          const isExpanded = expandedLevel === lvl.id;
          const percentage = rawLessons.length > 0 ? Math.round((completedCount / rawLessons.length) * 100) : 0;

          return (
            <div
              key={lvl.id}
              className="learning-card p-0 overflow-hidden transition shadow-sm"
              style={{ padding: 0 }}
            >
              {/* Level Header Accordion Trigger */}
              <div
                onClick={() => setExpandedLevel(isExpanded ? -1 : lvl.id)}
                className="p-5 cursor-pointer flex items-center justify-between gap-4 transition"
                style={{ 
                  background: isExpanded ? 'var(--lr-bg-card-hover)' : 'transparent',
                  borderBottom: isExpanded ? '1px solid var(--lr-border)' : 'none'
                }}
              >
                <div className="flex items-center gap-4">
                  <div 
                    style={{ 
                      backgroundColor: lvl.bgGlow || 'var(--lr-bg-subtle)', 
                      borderColor: lvl.color || 'var(--lr-primary)',
                      color: lvl.color || 'var(--lr-primary)'
                    }}
                    className="w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-sm shrink-0"
                  >
                    <span>{lvl.id}</span>
                  </div>
                  <div>
                    <h2 className="text-base md:text-lg font-bold flex items-center gap-2" style={{ color: 'var(--lr-text-primary)' }}>
                      {lvl.title}
                    </h2>
                    <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'var(--lr-text-muted)' }}>{lvl.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="hidden sm:flex flex-col items-end text-xs">
                    <span className="font-medium" style={{ color: 'var(--lr-text-secondary)' }}>
                      {completedCount} / {rawLessons.length} {t('lessonsCount', 'lessons')}
                    </span>
                    <span style={{ color: 'var(--lr-text-faint)' }}>{lvl.estimatedHours} {t('hrs', 'hrs')}</span>
                  </div>
                  <div className="w-16 learning-progress-track hidden md:block">
                    <div style={{ width: `${percentage}%`, backgroundColor: lvl.color || 'var(--lr-primary)' }} className="learning-progress-fill" />
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--lr-text-muted)' }}>
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {/* Module & Lesson Contents */}
              {isExpanded && (
                <div className="p-5 space-y-6" style={{ background: 'var(--lr-bg-card)' }}>
                  {lvl.modules.map(mod => {
                    const rawModuleLessons = LearningContentService.getLessonsForModule(mod.id, mod);

                    return (
                      <div key={mod.id} className="space-y-2.5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider pt-2" style={{ color: 'var(--lr-text-muted)' }}>
                          {mod.title}
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                          {rawModuleLessons.map(rawLesson => {
                            const lesson = translateLesson(rawLesson);
                            const isDone = completedLessons.has(lesson.id);

                            return (
                              <div
                                key={lesson.id}
                                id={`lesson-item-${lesson.id.replace('.', '-')}`}
                                onClick={() => onNavigateToLesson(lesson.id)}
                                className={`learning-lesson-card group ${isDone ? 'completed' : ''}`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="text-xs font-mono shrink-0 font-semibold" style={{ color: 'var(--lr-primary-text)' }}>
                                    {lesson.id}
                                  </span>
                                  <div className="min-w-0">
                                    <div className="text-xs md:text-sm font-medium truncate" style={{ color: 'var(--lr-text-primary)' }}>
                                      {lesson.title}
                                    </div>
                                    <div className="text-[10px] flex items-center gap-2" style={{ color: 'var(--lr-text-muted)' }}>
                                      <span>⏱ {lesson.readingTime}</span>
                                      <span>•</span>
                                      <span>{lesson.difficulty}</span>
                                    </div>
                                  </div>
                                </div>

                                {isDone ? (
                                  <span 
                                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                                    style={{ background: 'var(--lr-success-light)', color: 'var(--lr-success-text)', border: '1px solid var(--lr-success-border)' }}
                                  >
                                    ✓
                                  </span>
                                ) : (
                                  <span className="text-xs transition shrink-0" style={{ color: 'var(--lr-text-muted)' }}>
                                    →
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
