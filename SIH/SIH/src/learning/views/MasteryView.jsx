// MasteryView.jsx
// Competency mastery breakdown with strength & weakness analysis and study recommendations with Multilingual Support.

import React from 'react';
import { MasteryService } from '../services/MasteryService.js';
import { LearningContentService } from '../services/LearningContentService.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function MasteryView({ onNavigateToLesson }) {
  const { t, translateCompetency } = useLanguage();
  const competencies = MasteryService.getCompetencyMasteryList();
  const overallMastery = MasteryService.getOverallMastery();
  const { strengths, weaknesses } = MasteryService.getStrengthsAndWeaknesses();

  const getStatusLabel = (status) => {
    switch (status) {
      case 'Mastered': return t('mastered', 'Mastered');
      case 'Proficient': return t('proficient', 'Proficient');
      case 'In Progress': return t('inProgressStatus', 'In Progress');
      default: return t('notStarted', 'Not Started');
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div 
        className="pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
        style={{ borderBottom: '1px solid var(--lr-border)' }}
      >
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
            {t('masteryTitle', 'Competency Mastery Analytics')}
          </h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-muted)' }}>
            {t('masteryDesc', 'Real-time evaluation of your conceptual and computational mastery across the 10 core domains.')}
          </p>
        </div>
        <div className="learning-card flex items-center gap-3 p-3 shrink-0">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--lr-text-muted)' }}>
              {t('totalMastery', 'Total Mastery')}
            </div>
            <div className="text-xl font-bold" style={{ color: 'var(--lr-success-text)' }}>{overallMastery}%</div>
          </div>
          <div 
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs"
            style={{ borderColor: 'var(--lr-success)', color: 'var(--lr-success-text)' }}
          >
            {overallMastery}%
          </div>
        </div>
      </div>

      {/* Recommendations Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          className="p-5 rounded-2xl border"
          style={{ background: 'var(--lr-success-light)', borderColor: 'var(--lr-success-border)' }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--lr-success-text)' }}>
            <span>{t('demonstratedStrengths', '★ Demonstrated Strengths')}</span>
          </div>
          {strengths.length > 0 ? (
            <div className="space-y-2">
              {strengths.map(s => (
                <div key={s.id} className="flex justify-between items-center text-xs" style={{ color: 'var(--lr-text-secondary)' }}>
                  <span>{translateCompetency(s.id).name}</span>
                  <span className="font-bold" style={{ color: 'var(--lr-success-text)' }}>{s.score}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>
              {t('strengthsDesc', 'Complete lessons and quizzes with ≥60% score to register conceptual strengths.')}
            </p>
          )}
        </div>

        <div 
          className="p-5 rounded-2xl border"
          style={{ background: 'var(--lr-warning-light)', borderColor: 'var(--lr-warning-border)' }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--lr-warning-text)' }}>
            <span>{t('recommendedFocus', '🎯 Recommended Focus Areas')}</span>
          </div>
          {weaknesses.length > 0 ? (
            <div className="space-y-2">
              {weaknesses.map(w => {
                const lessons = LearningContentService.getLessonsForLevel(w.levelId);
                const firstLesson = lessons[0];
                return (
                  <div key={w.id} className="flex justify-between items-center text-xs">
                    <span style={{ color: 'var(--lr-text-secondary)' }}>{translateCompetency(w.id).name} ({w.score}%)</span>
                    {firstLesson && (
                      <button
                        onClick={() => onNavigateToLesson(firstLesson.id)}
                        className="hover:underline font-medium"
                        style={{ color: 'var(--lr-primary-text)' }}
                      >
                        {t('studyLevel', 'Study Level')} {w.levelId} →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xs" style={{ color: 'var(--lr-success-text)' }}>
              {t('weaknessesDesc', 'All started domains are currently proficient! Keep advancing through higher levels.')}
            </p>
          )}
        </div>
      </div>

      {/* Competency Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>
          {t('domainBreakdown', 'Full Domain Competency Breakdown')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {competencies.map(comp => (
            <div key={comp.id} className="learning-card space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[11px] font-mono" style={{ color: 'var(--lr-primary-text)' }}>{t('navLevel', 'Level')} {comp.levelId}</div>
                  <h4 className="text-sm md:text-base font-bold" style={{ color: 'var(--lr-text-primary)' }}>{translateCompetency(comp.id).name}</h4>
                </div>
                <span className={`learning-pill ${
                  comp.status === 'Mastered'
                    ? 'learning-pill-emerald'
                    : comp.status === 'Proficient'
                    ? 'learning-pill-blue'
                    : comp.status === 'In Progress'
                    ? 'learning-pill-gold'
                    : ''
                }`}>
                  {getStatusLabel(comp.status)}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs" style={{ color: 'var(--lr-text-muted)' }}>
                  <span>{t('masteryScore', 'Mastery Score')}</span>
                  <span className="font-bold font-mono" style={{ color: 'var(--lr-text-primary)' }}>{comp.score}%</span>
                </div>
                <div className="learning-progress-track">
                  <div
                    style={{ width: `${comp.score}%` }}
                    className={`learning-progress-fill ${
                      comp.score >= 80 ? 'learning-progress-fill-emerald' : ''
                    }`}
                  />
                </div>
              </div>

              <div 
                className="flex justify-between items-center text-[11px] pt-2"
                style={{ borderTop: '1px solid var(--lr-border)', color: 'var(--lr-text-muted)' }}
              >
                <span>{comp.completedCount} {t('ofText', 'of')} {comp.totalLessons} {t('lessonsCount', 'lessons')} {t('completedBtn', 'completed')}</span>
                <button
                  onClick={() => {
                    const lessons = LearningContentService.getLessonsForLevel(comp.levelId);
                    if (lessons.length > 0) onNavigateToLesson(lessons[0].id);
                  }}
                  className="hover:underline font-medium"
                  style={{ color: 'var(--lr-primary-text)' }}
                >
                  {t('goToLessons', 'Go to Lessons →')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
