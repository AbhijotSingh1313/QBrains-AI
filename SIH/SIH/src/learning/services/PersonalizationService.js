// PersonalizationService.js
// Handles local storage and state management for learner personalization profiles.
// COMPLETELY ISOLATED: Does not connect to curriculum, tutor, progress, assessments, or simulator.

const STORAGE_KEY = 'quantum_learning_personalization';

const listeners = new Set();
function notifyListeners() {
  listeners.forEach(fn => {
    try { fn(); } catch (e) { console.error('PersonalizationService listener error', e); }
  });
}

function safeGet(fallback = null) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    console.warn('Failed to read personalization from localStorage', e);
    return fallback;
  }
}

function safeSet(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    notifyListeners();
    return true;
  } catch (e) {
    console.error('Failed to write personalization to localStorage', e);
    return false;
  }
}

export const PersonalizationService = {
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },

  getPersonalization() {
    return safeGet(null);
  },

  hasPersonalization() {
    const data = this.getPersonalization();
    return data !== null && typeof data === 'object' && Object.keys(data).length > 0;
  },

  savePersonalization(profile) {
    const payload = {
      ...profile,
      updatedAt: new Date().toISOString()
    };
    safeSet(payload);
    return payload;
  },

  clearPersonalization() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      notifyListeners();
      return true;
    } catch (e) {
      console.error('Failed to clear personalization', e);
      return false;
    }
  },

  getDefaultProfile() {
    return {
      currentLevel: '',
      currentRole: '',
      currentRoleOther: '',
      background: '',
      backgroundOther: '',
      mathComfort: '',
      programmingExperience: '',
      qcExperience: '',
      physicsBackground: '',
      learningGoal: '',
      learningGoalOther: '',
      learningPreferences: [],
      weeklyTime: '',
      learningPace: '',
      learningInterests: []
    };
  }
};
