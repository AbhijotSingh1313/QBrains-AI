// ProgressService.js
// Handles tracking of completed lessons, quiz scores, bookmarks, user notes, and current study position.

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'qnova_completed_lessons',
  QUIZ_RESULTS: 'qnova_quiz_results',
  BOOKMARKS: 'qnova_bookmarks',
  NOTES: 'qnova_notes',
  CURRENT_LESSON: 'qnova_current_lesson',
};

// Simple event listeners for cross-component reactive updates
const listeners = new Set();
function notifyListeners() {
  listeners.forEach(fn => {
    try { fn(); } catch (e) { console.error(e); }
  });
}

function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSet(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
    notifyListeners();
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
}

export const ProgressService = {
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  getCompletedLessons() {
    return safeGet(STORAGE_KEYS.COMPLETED_LESSONS, []);
  },

  isLessonCompleted(lessonId) {
    const list = this.getCompletedLessons();
    return list.includes(String(lessonId));
  },

  markLessonCompleted(lessonId) {
    const list = this.getCompletedLessons();
    const strId = String(lessonId);
    if (!list.includes(strId)) {
      list.push(strId);
      safeSet(STORAGE_KEYS.COMPLETED_LESSONS, list);
    }
  },

  toggleLessonCompleted(lessonId) {
    const list = this.getCompletedLessons();
    const strId = String(lessonId);
    const idx = list.indexOf(strId);
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(strId);
    }
    safeSet(STORAGE_KEYS.COMPLETED_LESSONS, list);
  },

  getCurrentLessonId() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_LESSON) || '0.1';
  },

  setCurrentLessonId(lessonId) {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_LESSON, String(lessonId));
      notifyListeners();
    } catch (e) {}
  },

  // Quizzes & Assessments
  getQuizResults() {
    return safeGet(STORAGE_KEYS.QUIZ_RESULTS, {});
  },

  saveQuizResult(lessonOrQuizId, score, total) {
    const results = this.getQuizResults();
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
    results[String(lessonOrQuizId)] = {
      score,
      total,
      percentage,
      timestamp: Date.now()
    };
    safeSet(STORAGE_KEYS.QUIZ_RESULTS, results);
  },

  getQuizResult(lessonOrQuizId) {
    const results = this.getQuizResults();
    return results[String(lessonOrQuizId)] || null;
  },

  // Bookmarks
  getBookmarks() {
    return safeGet(STORAGE_KEYS.BOOKMARKS, []);
  },

  isBookmarked(lessonId) {
    const list = this.getBookmarks();
    return list.includes(String(lessonId));
  },

  toggleBookmark(lessonId) {
    const list = this.getBookmarks();
    const strId = String(lessonId);
    const idx = list.indexOf(strId);
    if (idx >= 0) {
      list.splice(idx, 1);
    } else {
      list.push(strId);
    }
    safeSet(STORAGE_KEYS.BOOKMARKS, list);
  },

  // Notes
  getNotes() {
    return safeGet(STORAGE_KEYS.NOTES, {});
  },

  getNote(lessonId) {
    const notes = this.getNotes();
    return notes[String(lessonId)] || '';
  },

  saveNote(lessonId, text) {
    const notes = this.getNotes();
    if (text && text.trim().length > 0) {
      notes[String(lessonId)] = text;
    } else {
      delete notes[String(lessonId)];
    }
    safeSet(STORAGE_KEYS.NOTES, notes);
  },

  // Statistics
  getOverallStats(totalLessons) {
    const completed = this.getCompletedLessons().length;
    const total = totalLessons || 180;
    const percentage = Math.min(100, Math.round((completed / total) * 100));
    const quizResults = this.getQuizResults();
    const quizCount = Object.keys(quizResults).length;
    
    let totalScore = 0;
    Object.values(quizResults).forEach(q => {
      totalScore += (q.percentage || 0);
    });
    const avgQuizScore = quizCount > 0 ? Math.round(totalScore / quizCount) : 0;

    return {
      completedCount: completed,
      totalLessons: total,
      completionPercentage: percentage,
      quizzesTaken: quizCount,
      averageQuizScore: avgQuizScore,
      bookmarksCount: this.getBookmarks().length,
      notesCount: Object.keys(this.getNotes()).length
    };
  }
};
