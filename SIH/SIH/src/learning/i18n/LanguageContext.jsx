// LanguageContext.jsx
// React Context and Hook for Multilingual Support in the Quantum Learning Platform

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, getLanguage } from './languages.js';
import { getUITranslation } from './ui/index.js';
import { getLocalizedLevel } from './content/levelTranslations.js';
import { getLocalizedLesson, getLocalizedDifficulty, getLocalizedReadingTime } from './content/lessonTranslations.js';
import { getLocalizedQuestion } from './content/assessmentTranslations.js';
import { getLocalizedCompetency } from './content/competencyTranslations.js';
import { getLocalizedVideo } from './content/videoTranslations.js';
import { getQuantumTerm } from './terminology/quantumGlossary.js';

const LanguageContext = createContext(null);

export const STORAGE_KEY_LANGUAGE = 'qlp_learning_language';

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANGUAGE);
      if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
    } catch (e) {
      console.warn('Could not read saved language from localStorage', e);
    }
    return DEFAULT_LANGUAGE;
  });

  const setLanguage = useCallback((code) => {
    if (!SUPPORTED_LANGUAGES.some(l => l.code === code)) return;
    setLanguageState(code);
    try {
      localStorage.setItem(STORAGE_KEY_LANGUAGE, code);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  }, []);

  // UI translation helper
  const t = useCallback((key, fallback) => {
    return getUITranslation(language, key, fallback);
  }, [language]);

  // Quantum terminology translation helper
  const tTerm = useCallback((termKey) => {
    return getQuantumTerm(termKey, language);
  }, [language]);

  // Curriculum Level localizer
  const translateLevel = useCallback((level) => {
    return getLocalizedLevel(level, language);
  }, [language]);

  // Curriculum Lesson localizer
  const translateLesson = useCallback((lesson) => {
    return getLocalizedLesson(lesson, language);
  }, [language]);

  // Assessment Question localizer
  const translateQuestion = useCallback((question) => {
    return getLocalizedQuestion(question, language);
  }, [language]);

  // Competency localizer
  const translateCompetency = useCallback((idOrName) => {
    return getLocalizedCompetency(idOrName, language);
  }, [language]);

  // Video resource localizer
  const translateVideo = useCallback((video) => {
    return getLocalizedVideo(video, language);
  }, [language]);

  // Difficulty localizer
  const translateDifficulty = useCallback((diff) => {
    return getLocalizedDifficulty(diff, language);
  }, [language]);

  // Reading time localizer
  const translateReadingTime = useCallback((timeStr) => {
    return getLocalizedReadingTime(timeStr, language);
  }, [language]);

  const currentLangMeta = getLanguage(language);

  const value = {
    language,
    setLanguage,
    currentLangMeta,
    supportedLanguages: SUPPORTED_LANGUAGES,
    t,
    tTerm,
    translateLevel,
    translateLesson,
    translateQuestion,
    translateCompetency,
    translateVideo,
    translateDifficulty,
    translateReadingTime,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
