// AssessmentQuestion.jsx
// Interactive quiz question component with instant feedback, pedagogical derivations, and Multilingual Support.

import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function AssessmentQuestion({ question, onAnswer, userSelected, showExplanation = true, disabled = false }) {
  const { t, translateQuestion } = useLanguage();
  const q = translateQuestion(question);

  const getLocalizedSelected = (val) => {
    if (!val) return null;
    if (q.options && q.options.includes(val)) return val;
    if (question.options && q.options) {
      const idx = question.options.indexOf(val);
      if (idx !== -1 && q.options[idx]) return q.options[idx];
    }
    return val;
  };

  const [selected, setSelected] = useState(() => getLocalizedSelected(userSelected));
  const [submitted, setSubmitted] = useState(!!userSelected);

  // Sync state if userSelected or q changes
  React.useEffect(() => {
    if (userSelected) {
      setSelected(getLocalizedSelected(userSelected));
      setSubmitted(true);
    } else {
      setSelected(null);
      setSubmitted(false);
    }
  }, [userSelected, q]);

  const handleSelect = (option, optIdx) => {
    if (disabled || submitted) return;
    setSelected(option);
    setSubmitted(true);
    if (onAnswer) {
      // isCorrect is true if selected matches q.correctAnswer OR original question.correctAnswer
      const isCorrect = option === q.correctAnswer || (question.options && question.options[optIdx] === question.correctAnswer);
      const canonicalOption = (question.options && question.options[optIdx]) || option;
      onAnswer(question.id, option, isCorrect, canonicalOption);
    }
  };

  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="learning-card my-4 transition-all">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h4 className="text-sm md:text-base font-semibold leading-snug" style={{ color: 'var(--lr-text-primary)' }}>
          {q.question}
        </h4>
        {q.competency && (
          <span className="learning-pill shrink-0">
            {q.competency}
          </span>
        )}
      </div>

      <div className="space-y-2 my-3">
        {q.options.map((option, idx) => {
          let btnClass = 'learning-option-btn';
          
          if (submitted) {
            if (option === q.correctAnswer) {
              btnClass += ' correct';
            } else if (option === selected) {
              btnClass += ' incorrect';
            } else {
              btnClass += ' opacity-50';
            }
          } else if (selected === option) {
            btnClass += ' selected';
          }

          return (
            <button
              key={idx}
              disabled={disabled || submitted}
              onClick={() => handleSelect(option, idx)}
              className={btnClass}
            >
              <div 
                className="w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  background: submitted && option === q.correctAnswer
                    ? 'var(--lr-success)'
                    : submitted && option === selected
                    ? 'var(--lr-danger)'
                    : 'var(--lr-bg-subtle)',
                  color: (submitted && (option === q.correctAnswer || option === selected))
                    ? '#ffffff'
                    : 'var(--lr-text-secondary)',
                  borderColor: (submitted && option === q.correctAnswer)
                    ? 'var(--lr-success)'
                    : (submitted && option === selected)
                    ? 'var(--lr-danger)'
                    : 'var(--lr-border)'
                }}
              >
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="flex-1 font-normal">{option}</span>
            </button>
          );
        })}
      </div>

      {submitted && showExplanation && q.explanation && (
        <div 
          className="mt-4 p-3.5 rounded-lg border text-xs md:text-sm"
          style={{
            background: isCorrect ? 'var(--lr-success-light)' : 'var(--lr-bg-subtle)',
            borderColor: isCorrect ? 'var(--lr-success-border)' : 'var(--lr-border)',
            color: isCorrect ? 'var(--lr-success-text)' : 'var(--lr-text-secondary)'
          }}
        >
          <div className="font-semibold mb-1 flex items-center gap-1.5">
            <span>{isCorrect ? t('correctSolution', '✓ Correct Solution') : t('explanationDerivation', 'ℹ Explanation & Derivation')}</span>
          </div>
          <p className="leading-relaxed" style={{ color: isCorrect ? 'var(--lr-success-text)' : 'var(--lr-text-secondary)' }}>
            {q.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
