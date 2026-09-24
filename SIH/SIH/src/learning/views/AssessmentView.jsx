// AssessmentView.jsx
// Comprehensive Final Examination and Diagnostic testing suite with Multilingual Support.

import React, { useState } from 'react';
import { AssessmentService } from '../services/AssessmentService.js';
import { CERTIFICATION_REQUIREMENTS } from '../data/curriculumIndex.js';
import { AssessmentQuestion } from '../components/AssessmentQuestion.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function AssessmentView({ onNavigateToView }) {
  const { t, translateQuestion } = useLanguage();
  const [activeTab, setActiveTab] = useState('comprehensive'); // 'comprehensive' | 'diagnostic'
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const rawQuestions = activeTab === 'comprehensive' 
    ? AssessmentService.getComprehensiveExamQuestions() 
    : AssessmentService.getDiagnosticQuestions();

  const handleAnswer = (questionId, option, isCorrect, canonicalOption) => {
    setAnswers(prev => ({ ...prev, [questionId]: canonicalOption || option }));
  };

  const handleSubmitExam = () => {
    if (activeTab === 'comprehensive') {
      const evaluation = AssessmentService.evaluateExam(answers);
      setResult(evaluation);
    } else {
      let correct = 0;
      rawQuestions.forEach(q => {
        const loc = translateQuestion(q);
        const ans = answers[q.id];
        const isMatch = ans === q.correctAnswer || (loc && ans === loc.correctAnswer) ||
          (loc && loc.options && q.options && loc.options.indexOf(ans) === q.options.indexOf(q.correctAnswer));
        if (isMatch) correct++;
      });
      setResult({
        score: correct,
        total: rawQuestions.length,
        percentage: Math.round((correct / rawQuestions.length) * 100),
        passed: correct >= 2
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setAnswers({});
    setResult(null);
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Tab Switcher */}
      <div 
        className="flex pb-3 justify-between items-center"
        style={{ borderBottom: '1px solid var(--lr-border)' }}
      >
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
            {t('assessmentsTitle', 'Quantum Assessments')}
          </h1>
          <p className="text-xs mt-0.5" style={{ color: 'var(--lr-text-muted)' }}>
            {t('assessmentsDesc', 'Test your quantum competencies under exam conditions.')}
          </p>
        </div>

        <div className="flex p-1 rounded-xl" style={{ background: 'var(--lr-bg-subtle)', border: '1px solid var(--lr-border)' }}>
          <button
            onClick={() => { setActiveTab('comprehensive'); setResult(null); setAnswers({}); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'comprehensive' 
                ? 'learning-btn-primary' 
                : 'learning-nav-btn'
            }`}
            style={{ padding: '6px 12px' }}
          >
            {t('finalExamTab', 'Final Exam (15 Qs)')}
          </button>
          <button
            onClick={() => { setActiveTab('diagnostic'); setResult(null); setAnswers({}); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'diagnostic' 
                ? 'learning-btn-primary' 
                : 'learning-nav-btn'
            }`}
            style={{ padding: '6px 12px' }}
          >
            {t('diagnosticTab', 'Diagnostic')}
          </button>
        </div>
      </div>

      {/* Result Card if Submitted */}
      {result && (
        <div 
          className="p-6 rounded-2xl border shadow-xl animate-in zoom-in-95 duration-200"
          style={{
            background: result.passed ? 'var(--lr-success-light)' : 'var(--lr-danger-light)',
            borderColor: result.passed ? 'var(--lr-success-border)' : 'var(--lr-danger-border)'
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-2" style={{ background: 'var(--lr-bg-card)', border: '1px solid var(--lr-border)' }}>
                {result.passed ? (
                  <span style={{ color: 'var(--lr-success-text)' }}>{t('passedBadge', 'PASSED')} ({result.percentage}%)</span>
                ) : (
                  <span style={{ color: 'var(--lr-danger-text)' }}>{t('notPassedBadge', 'NOT PASSED')} ({result.percentage}%)</span>
                )}
                {result.distinction && (
                  <span className="pl-2 border-l" style={{ color: 'var(--lr-warning-text)', borderColor: 'var(--lr-border)' }}>
                    {t('honorsDistinction', 'HONORS DISTINCTION')}
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
                {result.passed ? t('examPassedTitle', 'Outstanding Academic Achievement!') : t('examFailedTitle', 'Review and Try Again')}
              </h2>
              <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-secondary)' }}>
                {result.passed 
                  ? t('examPassedDesc', 'You have fulfilled the examination requirement for your Quantum Computing Scholar Certificate!')
                  : t('examFailedDesc', 'Score is below the required passing percentage. Review concepts and try again.')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <button
                onClick={handleRetake}
                className="learning-btn-secondary"
              >
                {t('retakeExam', 'Retake Exam')}
              </button>
              {result.passed && activeTab === 'comprehensive' && (
                <button
                  onClick={() => onNavigateToView('certificate')}
                  className="learning-btn-gold"
                >
                  {t('claimCertBtn', 'Claim Certificate →')}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Progress & Submit Bar */}
      {!result && (
        <div className="learning-card flex items-center justify-between" style={{ padding: '14px 20px' }}>
          <div className="text-xs" style={{ color: 'var(--lr-text-secondary)' }}>
            {t('examProgress', 'Progress')}: <span className="font-bold" style={{ color: 'var(--lr-primary-text)' }}>{answeredCount}</span> {t('ofText', 'of')} {rawQuestions.length} {t('questionsAnswered', 'questions answered')}
          </div>
          <button
            onClick={handleSubmitExam}
            disabled={answeredCount === 0}
            className="learning-btn-primary"
            style={{ opacity: answeredCount === 0 ? 0.5 : 1 }}
          >
            {t('submitForGrading', 'Submit for Grading')}
          </button>
        </div>
      )}

      {/* Question List */}
      <div className="space-y-4">
        {rawQuestions.map((q, idx) => (
          <div key={q.id}>
            <div className="text-xs font-mono mb-1" style={{ color: 'var(--lr-text-muted)' }}>
              {t('questionNum', 'Question')} {idx + 1} {t('ofText', 'of')} {rawQuestions.length}
            </div>
            <AssessmentQuestion
              question={q}
              onAnswer={handleAnswer}
              userSelected={answers[q.id]}
              disabled={!!result}
              showExplanation={!!result}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
