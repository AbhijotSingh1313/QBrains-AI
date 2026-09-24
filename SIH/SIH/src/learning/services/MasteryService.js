// MasteryService.js
// Evaluates student mastery across the foundational quantum competencies, identifying strengths and weak areas.

import { LearningContentService } from './LearningContentService.js';
import { ProgressService } from './ProgressService.js';

const COMPETENCY_LEVEL_MAP = [
  { id: 'math', name: 'Linear Algebra & Vector Spaces', levelId: 1, icon: 'Sigma' },
  { id: 'classical', name: 'Classical Physics Foundations', levelId: 2, icon: 'Compass' },
  { id: 'qm', name: 'Postulates of Quantum Mechanics', levelId: 3, icon: 'Atom' },
  { id: 'qubit', name: 'Qubit States & Bloch Sphere Geometry', levelId: 4, icon: 'Orbit' },
  { id: 'gates', name: 'Unitary Quantum Gates & Circuit Construction', levelId: 5, icon: 'Layers' },
  { id: 'entanglement', name: 'Multi-Qubit Entanglement & Bell States', levelId: 6, icon: 'Link2' },
  { id: 'qec', name: 'Quantum Information & Error Correction Principles', levelId: 7, icon: 'ShieldAlert' },
  { id: 'algorithms', name: 'Quantum Algorithms (Grover, QFT, Shor)', levelId: 8, icon: 'Zap' },
  { id: 'advanced', name: 'Advanced Quantum Computing', levelId: 9, icon: 'Sparkles' },
  { id: 'hardware', name: 'Physical Hardware & Industry Track', levelId: 10, icon: 'Cpu' },
];

export const MasteryService = {
  getCompetencyMasteryList() {
    const completed = new Set(ProgressService.getCompletedLessons());
    const quizResults = ProgressService.getQuizResults();

    return COMPETENCY_LEVEL_MAP.map(comp => {
      const lessons = LearningContentService.getLessonsForLevel(comp.levelId);
      const totalLessons = lessons.length;
      if (totalLessons === 0) return { ...comp, score: 0, completedCount: 0, totalLessons: 0, status: 'Not Started' };

      const completedCount = lessons.filter(l => completed.has(l.id)).length;
      const lessonCompletionRatio = completedCount / totalLessons;

      // Check quizzes for lessons in this level
      let quizPointsEarned = 0;
      let quizPointsPossible = 0;
      lessons.forEach(l => {
        const qr = quizResults[l.id];
        if (qr) {
          quizPointsEarned += qr.score;
          quizPointsPossible += qr.total;
        }
      });

      const quizRatio = quizPointsPossible > 0 ? (quizPointsEarned / quizPointsPossible) : lessonCompletionRatio;

      // Combined score: 50% lesson completion, 50% quiz performance
      const masteryScore = Math.round((lessonCompletionRatio * 0.5 + quizRatio * 0.5) * 100);

      let status = 'Not Started';
      if (masteryScore >= 80) status = 'Mastered';
      else if (masteryScore >= 50) status = 'Proficient';
      else if (masteryScore > 0) status = 'In Progress';

      return {
        ...comp,
        score: masteryScore,
        completedCount,
        totalLessons,
        status,
        quizzesTaken: quizPointsPossible > 0 ? 1 : 0
      };
    });
  },

  getOverallMastery() {
    const list = this.getCompetencyMasteryList();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, c) => acc + c.score, 0);
    return Math.round(sum / list.length);
  },

  getStrengthsAndWeaknesses() {
    const list = this.getCompetencyMasteryList();
    const sorted = [...list].sort((a, b) => b.score - a.score);
    const strengths = sorted.filter(c => c.score >= 60);
    const weaknesses = sorted.filter(c => c.score < 60 && c.completedCount > 0);
    const unstarted = sorted.filter(c => c.completedCount === 0);

    return {
      strengths,
      weaknesses: weaknesses.length > 0 ? weaknesses : (unstarted.length > 0 ? [unstarted[0]] : []),
      unstarted
    };
  }
};
