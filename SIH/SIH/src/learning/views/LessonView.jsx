// LessonView.jsx
// Immersive lesson reader with KaTeX math, interactive SVG diagrams, worked examples, misconceptions, and knowledge checks with Multilingual Support.

import React, { useState, useEffect } from 'react';
import { LearningContentService } from '../services/LearningContentService.js';
import { ProgressService } from '../services/ProgressService.js';
import { EquationBlock } from '../components/EquationBlock.jsx';
import { DiagramBlock } from '../components/DiagramBlock.jsx';
import { AssessmentQuestion } from '../components/AssessmentQuestion.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function LessonView({ lessonId, onNavigateToLesson, onOpenTutor, onOpenNotes }) {
  const { t, translateLevel, translateLesson } = useLanguage();
  const rawLesson = LearningContentService.getLesson(lessonId) || LearningContentService.getAllLessons()[0];
  const lesson = translateLesson(rawLesson);
  const rawLevel = LearningContentService.getLevel(lesson.levelId);
  const level = translateLevel(rawLevel);

  const nextLesson = LearningContentService.getNextLesson(lesson.id);
  const prevLesson = LearningContentService.getPreviousLesson(lesson.id);

  const [isCompleted, setIsCompleted] = useState(ProgressService.isLessonCompleted(lesson.id));
  const [isBookmarked, setIsBookmarked] = useState(ProgressService.isBookmarked(lesson.id));

  useEffect(() => {
    setIsCompleted(ProgressService.isLessonCompleted(lesson.id));
    setIsBookmarked(ProgressService.isBookmarked(lesson.id));
    ProgressService.setCurrentLessonId(lesson.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  const handleToggleComplete = () => {
    ProgressService.toggleLessonCompleted(lesson.id);
    setIsCompleted(ProgressService.isLessonCompleted(lesson.id));
  };

  const handleToggleBookmark = () => {
    ProgressService.toggleBookmark(lesson.id);
    setIsBookmarked(ProgressService.isBookmarked(lesson.id));
  };

  const handleQuizAnswer = (questionId, option, isCorrect) => {
    ProgressService.saveQuizResult(lesson.id, isCorrect ? 1 : 0, 1);
  };

  return (
    <div className="learning-reading-container space-y-8 animate-in fade-in duration-200">
      {/* Navigation Breadcrumb Bar */}
      <div 
        className="flex flex-wrap items-center justify-between gap-3 text-xs pb-3"
        style={{ borderBottom: '1px solid var(--lr-border)' }}
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold" style={{ color: 'var(--lr-primary-text)' }}>
            {level ? level.title : `Level ${lesson.levelId}`}
          </span>
          <span style={{ color: 'var(--lr-text-faint)' }}>›</span>
          <span style={{ color: 'var(--lr-text-secondary)' }}>{t('navLesson', 'Lesson')} {lesson.id}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className="learning-btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.75rem' }}
          >
            <span>{isBookmarked ? t('bookmarked', '★ Bookmarked') : t('bookmark', '☆ Bookmark')}</span>
          </button>

          <button
            onClick={onOpenNotes}
            className="learning-btn-secondary"
            style={{ padding: '6px 12px', fontSize: '0.75rem' }}
          >
            <span>{t('lessonNotes', '📝 Notes')}</span>
          </button>

          <button
            onClick={onOpenTutor}
            className="learning-btn-primary"
            style={{ padding: '6px 12px', fontSize: '0.75rem' }}
          >
            <span>{t('askTutor', 'Ask AI Tutor')}</span>
          </button>
        </div>
      </div>

      {/* Lesson Header */}
      <div>
        <div className="flex items-center gap-3 text-xs mb-2" style={{ color: 'var(--lr-text-muted)' }}>
          <span className="learning-pill">
            {lesson.difficulty}
          </span>
          <span>⏱ {lesson.readingTime} {t('readTime', 'read')}</span>
          <span>•</span>
          <span className="font-mono" style={{ color: 'var(--lr-text-faint)' }}>ID: {lesson.id}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--lr-text-primary)' }}>
          {lesson.title}
        </h1>
        <div className="learning-card p-4 mt-3 leading-relaxed text-sm md:text-base" style={{ color: 'var(--lr-text-secondary)' }}>
          {lesson.summary}
        </div>
      </div>

      {/* Intuition Box */}
      {lesson.intuition && (
        <div className="learning-intuition-box">
          <div className="font-bold mb-1" style={{ color: 'var(--lr-accent-text)' }}>
            {t('intuitionTitle', '💡 Intuitive Foundation')}
          </div>
          <p className="leading-relaxed text-xs md:text-sm" style={{ color: 'var(--lr-text-secondary)' }}>
            {lesson.intuition}
          </p>
        </div>
      )}

      {/* Top-level Equations */}
      {lesson.equations && lesson.equations.length > 0 && (
        <div className="space-y-3 my-4">
          {lesson.equations.map((eq, i) => (
            <div key={i} className="learning-math-box">
              {eq.label && <div className="text-xs font-semibold mb-1" style={{ color: 'var(--lr-primary-text)' }}>{eq.label}</div>}
              <EquationBlock math={eq.latex} displayMode={true} />
              {eq.explanation && <div className="text-xs italic text-center mt-1" style={{ color: 'var(--lr-text-muted)' }}>{eq.explanation}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Top-level Diagram */}
      {lesson.diagramType && (
        <DiagramBlock type={lesson.diagramType.replace(/-/g, '_')} props={lesson.diagramProps || {}} />
      )}

      {/* Lesson Sections */}
      <div className="space-y-8">
        {lesson.sections && lesson.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-lg md:text-xl font-bold flex items-center gap-2" style={{ color: 'var(--lr-text-primary)' }}>
              <span className="font-mono text-sm" style={{ color: 'var(--lr-primary-text)' }}>0{idx + 1}.</span>
              <span>{section.title || section.heading}</span>
            </h2>

            <div className="text-xs md:text-sm leading-relaxed whitespace-pre-line space-y-2" style={{ color: 'var(--lr-text-secondary)' }}>
              {section.content}
            </div>

            {/* Math KaTeX Block */}
            {section.math && (
              <div className="learning-math-box">
                <EquationBlock math={section.math} displayMode={section.mathDisplay !== false} />
              </div>
            )}

            {/* Interactive SVG Diagram */}
            {section.diagramType && (
              <DiagramBlock type={section.diagramType.replace(/-/g, '_')} props={section.diagramProps || {}} />
            )}

            {/* Worked Example Box */}
            {section.workedExample && (
              <div className="learning-worked-example space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--lr-primary-text)' }}>
                  <span>{t('workedExampleTitle', 'Worked Problem & Derivation')}: {section.workedExample.title || ''}</span>
                </div>
                <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--lr-text-primary)' }}>
                  {section.workedExample.problem}
                </div>
                {section.workedExample.solution && (
                  <p className="text-xs" style={{ color: 'var(--lr-text-secondary)' }}>{section.workedExample.solution}</p>
                )}
                {section.workedExample.solutionSteps && (
                  <div className="space-y-1.5 pl-3 border-l-2 text-xs" style={{ borderColor: 'var(--lr-primary)', color: 'var(--lr-text-secondary)' }}>
                    {section.workedExample.solutionSteps.map((step, sIdx) => (
                      <div key={sIdx}>• {step}</div>
                    ))}
                  </div>
                )}
                {section.workedExample.result && (
                  <div 
                    className="p-2.5 rounded text-xs font-semibold border"
                    style={{ background: 'var(--lr-bg-card)', borderColor: 'var(--lr-border)', color: 'var(--lr-primary-text)' }}
                  >
                    {t('result', 'Result')}: {section.workedExample.result}
                  </div>
                )}
              </div>
            )}

            {/* Common Misconceptions */}
            {section.commonMisconceptions && section.commonMisconceptions.length > 0 && (
              <div className="learning-misconceptions space-y-2">
                <div className="font-bold flex items-center gap-1.5" style={{ color: 'var(--lr-warning-text)' }}>
                  <span>{t('misconceptionsTitle', '⚠ Common Pitfalls & Misconceptions')}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: 'var(--lr-text-secondary)' }}>
                  {section.commonMisconceptions.map((misc, mIdx) => (
                    <li key={mIdx}>{misc}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Top-level Worked Example */}
      {lesson.workedExample && (
        <div className="learning-worked-example space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--lr-primary-text)' }}>
            <span>{t('workedExampleTitle', 'Worked Problem & Derivation')}</span>
          </div>
          <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--lr-text-primary)' }}>
            {lesson.workedExample.problem}
          </div>
          {lesson.workedExample.solution && (
            <p className="text-xs" style={{ color: 'var(--lr-text-secondary)' }}>{lesson.workedExample.solution}</p>
          )}
          {lesson.workedExample.derivationSteps && (
            <div className="space-y-1.5 pl-3 border-l-2 text-xs" style={{ borderColor: 'var(--lr-primary)', color: 'var(--lr-text-secondary)' }}>
              {lesson.workedExample.derivationSteps.map((step, sIdx) => (
                <div key={sIdx}>• {step}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Top-level Common Misconceptions */}
      {lesson.commonMisconceptions && lesson.commonMisconceptions.length > 0 && (
        <div className="learning-misconceptions space-y-2 my-4">
          <div className="font-bold flex items-center gap-1.5" style={{ color: 'var(--lr-warning-text)' }}>
            <span>{t('misconceptionsTitle', '⚠ Common Pitfalls & Misconceptions')}</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-xs" style={{ color: 'var(--lr-text-secondary)' }}>
            {lesson.commonMisconceptions.map((misc, mIdx) => (
              <li key={mIdx}>{misc}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Knowledge Check Quizzes */}
      {lesson.knowledgeCheck && lesson.knowledgeCheck.length > 0 && (
        <div className="pt-6" style={{ borderTop: '1px solid var(--lr-border)' }}>
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--lr-primary-text)' }}>
              {t('conceptVerification', 'Concept Verification')}
            </span>
            <h3 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>
              {t('knowledgeCheckTitle', 'Lesson Knowledge Check')}
            </h3>
          </div>
          <div className="space-y-4">
            {lesson.knowledgeCheck.map((q) => (
              <AssessmentQuestion
                key={q.id}
                question={q}
                onAnswer={handleQuizAnswer}
              />
            ))}
          </div>
        </div>
      )}

      {/* Quick Check Quizzes */}
      {lesson.quickCheck && (
        <div className="pt-6" style={{ borderTop: '1px solid var(--lr-border)' }}>
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--lr-primary-text)' }}>
              {t('conceptVerification', 'Concept Verification')}
            </span>
            <h3 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>
              {t('knowledgeCheckTitle', 'Lesson Knowledge Check')}
            </h3>
          </div>
          <AssessmentQuestion
            question={{
              id: `qc-${lesson.id}`,
              question: lesson.quickCheck.question,
              options: lesson.quickCheck.options,
              correctAnswer: typeof lesson.quickCheck.correctIndex === 'number' 
                ? lesson.quickCheck.options[lesson.quickCheck.correctIndex] 
                : lesson.quickCheck.correctAnswer,
              explanation: lesson.quickCheck.explanation
            }}
            onAnswer={handleQuizAnswer}
          />
        </div>
      )}

      {/* Completion & Next Lesson Footer */}
      <div 
        className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{ borderTop: '1px solid var(--lr-border)' }}
      >
        <button
          onClick={handleToggleComplete}
          className={isCompleted ? 'learning-btn-primary' : 'learning-btn-secondary'}
          style={{
            background: isCompleted ? 'var(--lr-success)' : undefined,
            borderColor: isCompleted ? 'var(--lr-success)' : undefined,
            color: isCompleted ? '#ffffff' : undefined
          }}
        >
          <span>{isCompleted ? t('completedBtn', '✓ Completed') : t('markCompletedBtn', 'Mark as Completed')}</span>
        </button>

        <div className="flex items-center gap-3">
          {prevLesson && (
            <button
              onClick={() => onNavigateToLesson(prevLesson.id)}
              className="learning-btn-secondary"
            >
              {t('prevLesson', '← Previous')} ({prevLesson.id})
            </button>
          )}

          {nextLesson && (
            <button
              onClick={() => onNavigateToLesson(nextLesson.id)}
              className="learning-btn-primary"
            >
              {t('nextLesson', 'Next Lesson →')} ({nextLesson.id})
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
