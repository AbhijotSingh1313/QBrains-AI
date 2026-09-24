// AssessmentService.js
// Handles diagnostic testing and evaluation of the Comprehensive Final Certification Exam.

import { COMPREHENSIVE_EXAM_QUESTIONS, DIAGNOSTIC_QUESTIONS } from '../data/assessments/questionBank.js';
import { ProgressService } from './ProgressService.js';
import { CERTIFICATION_REQUIREMENTS } from '../data/curriculumIndex.js';
import { ASSESSMENT_TRANSLATIONS } from '../i18n/content/assessmentTranslations.js';

export const AssessmentService = {
  getDiagnosticQuestions() {
    return DIAGNOSTIC_QUESTIONS;
  },

  getComprehensiveExamQuestions() {
    return COMPREHENSIVE_EXAM_QUESTIONS;
  },

  evaluateExam(userAnswers) {
    const questions = COMPREHENSIVE_EXAM_QUESTIONS;
    let correctCount = 0;
    const details = [];

    questions.forEach(q => {
      const selected = userAnswers[q.id];
      let isCorrect = selected === q.correctAnswer;
      
      // If not direct match, check if selected matches localized option in any language
      if (!isCorrect && selected && q.options) {
        const correctIdx = q.options.indexOf(q.correctAnswer);
        const trans = ASSESSMENT_TRANSLATIONS[q.id];
        if (trans && correctIdx !== -1) {
          for (const lang in trans) {
            const locQ = trans[lang];
            if (locQ && (locQ.correctAnswer === selected || (locQ.options && locQ.options[correctIdx] === selected))) {
              isCorrect = true;
              break;
            }
          }
        }
      }

      if (isCorrect) correctCount++;
      details.push({
        id: q.id,
        competency: q.competency,
        question: q.question,
        selectedAnswer: selected || null,
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      });
    });

    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= CERTIFICATION_REQUIREMENTS.passingExamScore;
    const distinction = percentage >= CERTIFICATION_REQUIREMENTS.distinctionThreshold;

    // Persist exam attempt
    ProgressService.saveQuizResult('comprehensive-final-exam', correctCount, total);

    return {
      score: correctCount,
      total,
      percentage,
      passed,
      distinction,
      details,
      timestamp: Date.now()
    };
  },

  getLatestExamResult() {
    return ProgressService.getQuizResult('comprehensive-final-exam');
  }
};
