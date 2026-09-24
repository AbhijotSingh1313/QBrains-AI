// DashboardView.jsx
// Main command center displaying student progress, study metrics, active lesson resume, video resources, and certificate eligibility.

import React from 'react';
import { ProgressService } from '../services/ProgressService.js';
import { MasteryService } from '../services/MasteryService.js';
import { LearningContentService } from '../services/LearningContentService.js';
import { CertificateService } from '../services/CertificateService.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function DashboardView({ onNavigateToLesson, onNavigateToView }) {
  const { t, translateLesson, translateCompetency, translateVideo, translateReadingTime } = useLanguage();
  const totalLessons = LearningContentService.getTotalLessonsCount();
  const stats = ProgressService.getOverallStats(totalLessons);
  const overallMastery = MasteryService.getOverallMastery();
  const competencies = MasteryService.getCompetencyMasteryList();
  const eligibility = CertificateService.checkEligibility();
  const currentLessonId = ProgressService.getCurrentLessonId();
  const rawCurrentLesson = LearningContentService.getLesson(currentLessonId) || LearningContentService.getAllLessons()[0];
  const currentLesson = translateLesson(rawCurrentLesson);
  const videos = LearningContentService.getCuratedVideos().slice(0, 4);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Welcome Banner */}
      <div className="learning-card-hero">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="learning-pill mb-3">
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--lr-primary)', display: 'inline-block' }} />
              <span>{t('heroTag', '11-Level Quantum Computing Scholar Curriculum')}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: 'var(--lr-text-primary)' }}>
              {t('heroTitle', 'Quantum Learning Command Center')}
            </h1>
            <p className="text-xs md:text-sm mt-2 leading-relaxed" style={{ color: 'var(--lr-text-secondary)' }}>
              {t('heroDesc', 'Master quantum mechanics, linear algebra, unitary gates, entanglement, and advanced algorithms with interactive KaTeX math, dynamic SVG visualizers, and pedagogical AI tutoring.')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigateToLesson(currentLesson.id)}
              className="learning-btn-primary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <span>{t('resumeLesson', '▶ Resume Lesson')} {currentLesson.id}</span>
            </button>
            <button
              onClick={() => onNavigateToView('assessment')}
              className="learning-btn-secondary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
            >
              <span>{t('finalExam', 'Final Exam')}</span>
            </button>
            <button
              onClick={() => onNavigateToView('personalization')}
              className="learning-btn-secondary"
              style={{ padding: '10px 18px', fontSize: '0.85rem' }}
              title={t('personalizeLearning', 'Personalize Learning')}
            >
              <span>👤 {t('navPersonalization', 'Personalization')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="learning-card">
          <div className="text-xs mb-1" style={{ color: 'var(--lr-text-muted)' }}>{t('lessonsCompleted', 'Lessons Completed')}</div>
          <div className="text-2xl font-bold flex items-baseline gap-2" style={{ color: 'var(--lr-text-primary)' }}>
            <span>{stats.completedCount}</span>
            <span className="text-xs font-normal" style={{ color: 'var(--lr-text-faint)' }}>/ {totalLessons}</span>
          </div>
          <div className="mt-2 learning-progress-track">
            <div style={{ width: `${stats.completionPercentage}%` }} className="learning-progress-fill" />
          </div>
        </div>

        <div className="learning-card">
          <div className="text-xs mb-1" style={{ color: 'var(--lr-text-muted)' }}>{t('curriculumMastery', 'Curriculum Mastery')}</div>
          <div className="text-2xl font-bold" style={{ color: 'var(--lr-success-text)' }}>{overallMastery}%</div>
          <div className="mt-2 learning-progress-track">
            <div style={{ width: `${overallMastery}%` }} className="learning-progress-fill learning-progress-fill-emerald" />
          </div>
        </div>

        <div className="learning-card">
          <div className="text-xs mb-1" style={{ color: 'var(--lr-text-muted)' }}>{t('avgQuizScore', 'Average Quiz Score')}</div>
          <div className="text-2xl font-bold" style={{ color: 'var(--lr-warning-text)' }}>{stats.averageQuizScore}%</div>
          <div className="mt-2 text-[11px]" style={{ color: 'var(--lr-text-muted)' }}>{stats.quizzesTaken} {t('quizzesEvaluated', 'quizzes evaluated')}</div>
        </div>

        <div 
          onClick={() => onNavigateToView('certificate')}
          className="learning-card cursor-pointer transition"
          style={{
            borderColor: eligibility.isEligible ? 'var(--lr-warning-border)' : 'var(--lr-border)',
            background: eligibility.isEligible ? 'var(--lr-warning-light)' : 'var(--lr-bg-card)'
          }}
        >
          <div className="flex justify-between items-start">
            <div className="text-xs mb-1" style={{ color: 'var(--lr-text-muted)' }}>{t('certification', 'Certification')}</div>
            {eligibility.isEligible && (
              <span className="learning-pill learning-pill-gold">
                {t('unlocked', 'UNLOCKED')}
              </span>
            )}
          </div>
          <div className="text-base font-semibold truncate" style={{ color: 'var(--lr-text-primary)' }}>
            {eligibility.isEligible ? t('claimCredential', 'Claim Credential') : t('inProgress', 'In Progress')}
          </div>
          <div className="mt-2 text-[11px]" style={{ color: 'var(--lr-text-muted)' }}>
            {eligibility.criteria.filter(c => c.met).length} / 3 {t('criteriaSatisfied', 'criteria satisfied')}
          </div>
        </div>
      </div>

      {/* Active Lesson Spotlight & Quick Mastery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Study Card */}
        <div className="lg:col-span-2 learning-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--lr-accent-text)' }}>
                {t('upNextInStudies', 'Up Next in Your Studies')}
              </span>
              <span className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>{translateReadingTime(currentLesson.readingTime)} {t('readTime', 'read')}</span>
            </div>
            <h2 className="text-xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>{currentLesson.title}</h2>
            <p className="text-xs md:text-sm mt-2 leading-relaxed" style={{ color: 'var(--lr-text-secondary)' }}>
              {currentLesson.summary}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4" style={{ borderTop: '1px solid var(--lr-border)' }}>
            <div className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>
              {t('navLevel', 'Level')} {currentLesson.levelId} • {t('navModule', 'Module')} {currentLesson.moduleId}
            </div>
            <button
              onClick={() => onNavigateToLesson(currentLesson.id)}
              className="learning-btn-primary"
            >
              {t('openLesson', 'Open Lesson →')}
            </button>
          </div>
        </div>

        {/* Competency Mastery Overview */}
        <div className="learning-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold" style={{ color: 'var(--lr-text-primary)' }}>{t('competencies', 'Competencies')}</h3>
              <button 
                onClick={() => onNavigateToView('mastery')}
                className="text-xs hover:underline"
                style={{ color: 'var(--lr-primary-text)' }}
              >
                {t('viewAll', 'View all')}
              </button>
            </div>
            <div className="space-y-3">
              {competencies.slice(0, 4).map(c => {
                const comp = translateCompetency(c.id);
                return (
                  <div key={c.id}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="truncate max-w-[170px]" style={{ color: 'var(--lr-text-secondary)' }}>{comp.name}</span>
                      <span className="font-mono" style={{ color: 'var(--lr-text-muted)' }}>{c.score}%</span>
                    </div>
                    <div className="learning-progress-track">
                      <div 
                        style={{ width: `${c.score}%` }} 
                        className={`learning-progress-fill ${
                          c.score >= 80 ? 'learning-progress-fill-emerald' : ''
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 pt-3 text-center" style={{ borderTop: '1px solid var(--lr-border)' }}>
            <button
              onClick={() => onNavigateToView('mastery')}
              className="text-xs transition hover:underline"
              style={{ color: 'var(--lr-text-muted)' }}
            >
              {t('detailedAnalysis', 'Detailed Strength & Weakness Analysis →')}
            </button>
          </div>
        </div>
      </div>

      {/* Curated Video Lectures */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>{t('videoLectures', 'Curated Academic Video Lectures')}</h3>
            <p className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>{t('videoLecturesSub', 'Lectures from MIT, 3Blue1Brown, IBM Qiskit, and Walter Lewin')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map(rawVid => {
            const vid = translateVideo(rawVid);
            return (
              <a
                key={vid.id}
                href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="learning-card group flex flex-col justify-between"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <div className="text-[11px] font-semibold mb-1" style={{ color: 'var(--lr-accent-text)' }}>{vid.channel}</div>
                  <h4 className="text-xs md:text-sm font-medium line-clamp-2" style={{ color: 'var(--lr-text-primary)' }}>
                    {vid.title}
                  </h4>
                  <p className="text-[11px] mt-1 line-clamp-2" style={{ color: 'var(--lr-text-muted)' }}>{vid.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] pt-2" style={{ borderTop: '1px solid var(--lr-border)', color: 'var(--lr-text-muted)' }}>
                  <span>⏱ {vid.duration}</span>
                  <span className="font-medium" style={{ color: 'var(--lr-accent-text)' }}>{t('watchOnYoutube', 'Watch on YouTube ↗')}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
