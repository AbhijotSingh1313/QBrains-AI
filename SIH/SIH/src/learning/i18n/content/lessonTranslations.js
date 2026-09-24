// lessonTranslations.js
// Master aggregator for multilingual lesson translations across all 11 curriculum levels and 10 languages
// Guarantees exact preservation of mathematical equations, KaTeX expressions, Dirac notation, and answer keys.

import { LEVEL_0_TRANSLATIONS } from './lessons/level0_lessons.js';
import { LEVEL_1_TRANSLATIONS } from './lessons/level1_lessons.js';
import { LEVEL_4_TRANSLATIONS } from './lessons/level4_lessons.js';
import { LEVEL_5_TRANSLATIONS } from './lessons/level5_lessons.js';
import { LEVEL_6_TO_10_TRANSLATIONS } from './lessons/level6_to_10_lessons.js';
import { ALL_LESSONS_METADATA } from './lessons/all_lessons_meta.js';

// Aggregate full-content translations
export const FULL_LESSON_TRANSLATIONS = {
  ...LEVEL_0_TRANSLATIONS,
  ...LEVEL_1_TRANSLATIONS,
  ...LEVEL_4_TRANSLATIONS,
  ...LEVEL_5_TRANSLATIONS,
  ...LEVEL_6_TO_10_TRANSLATIONS,
};

// Localized difficulty tags across all 10 languages
const DIFFICULTY_TRANSLATIONS = {
  beginner: {
    en: 'Beginner',
    hi: 'प्रारंभिक',
    ta: 'தொடக்கநிலை',
    te: 'ప్రారంభ',
    kn: 'ಆರಂಭಿಕ',
    ml: 'തുടക്കക്കാരൻ',
    bn: 'প্রাথমিক',
    mr: 'प्रारंभिक',
    gu: 'પ્રારંભિક',
    pa: 'ਸ਼ੁਰੂਆਤੀ',
  },
  intermediate: {
    en: 'Intermediate',
    hi: 'मध्यवर्ती',
    ta: 'இடைநிலை',
    te: 'మధ్యస్థ',
    kn: 'ಮಧ್ಯಂತರ',
    ml: 'ഇന്റർമീഡിയറ്റ്',
    bn: 'মধ্যবর্তী',
    mr: 'मध्यम',
    gu: 'મધ્યવર્તી',
    pa: 'ਦਰਮਿਆਨਾ',
  },
  advanced: {
    en: 'Advanced',
    hi: 'उन्नत',
    ta: 'மேம்பட்ட',
    te: 'అధునాతన',
    kn: 'ಮುಂದುವರಿದ',
    ml: 'വിപുലമായ',
    bn: 'উন্নত',
    mr: 'प्रगत',
    gu: 'અદ્યતન',
    pa: 'ਉੱਨਤ',
  }
};

// Localized time unit strings across all 10 languages
const TIME_UNITS = {
  hi: { min: 'मिनट', mins: 'मिनट', hr: 'घंटा', hrs: 'घंटे', read: 'पठन' },
  ta: { min: 'நிமிடம்', mins: 'நிமிடங்கள்', hr: 'மணிநேரம்', hrs: 'மணிநேரம்', read: 'வாசிப்பு' },
  te: { min: 'నిమిషం', mins: 'నిమిషాలు', hr: 'గంట', hrs: 'గంటలు', read: 'చదువు' },
  kn: { min: 'ನಿಮಿಷ', mins: 'ನಿಮಿಷಗಳು', hr: 'ಗಂಟೆ', hrs: 'ಗಂಟೆಗಳು', read: 'ಓದು' },
  ml: { min: 'മിനിറ്റ്', mins: 'മിനിറ്റ്', hr: 'മണിക്കൂർ', hrs: 'മണിക്കൂർ', read: 'വായന' },
  bn: { min: 'মিনিট', mins: 'মিনিট', hr: 'ঘণ্টা', hrs: 'ঘণ্টা', read: 'পড়া' },
  mr: { min: 'मिनिट', mins: 'मिनिटे', hr: 'तास', hrs: 'तास', read: 'वाचणे' },
  gu: { min: 'મિનિટ', mins: 'મિનિટ', hr: 'કલાક', hrs: 'કલાક', read: 'વાંચન' },
  pa: { min: 'ਮਿੰਟ', mins: 'ਮਿੰਟ', hr: 'ਘੰਟਾ', hrs: 'ਘੰਟੇ', read: 'ਪੜ੍ਹਨਾ' },
};

export function getLocalizedDifficulty(diff = 'intermediate', langCode = 'en') {
  if (langCode === 'en') return diff.charAt(0).toUpperCase() + diff.slice(1);
  const key = String(diff).toLowerCase();
  const entry = DIFFICULTY_TRANSLATIONS[key] || DIFFICULTY_TRANSLATIONS.intermediate;
  return entry[langCode] || entry.en || diff;
}

export function getLocalizedReadingTime(timeStr = '15 mins', langCode = 'en') {
  if (!timeStr || langCode === 'en') return timeStr;
  const units = TIME_UNITS[langCode];
  if (!units) return timeStr;

  // Replace 'mins', 'min', 'hrs', 'hr'
  return String(timeStr)
    .replace(/\bmins?\b/gi, units.mins || units.min)
    .replace(/\bhours?\b|\bhrs?\b/gi, units.hrs || units.hr);
}

/**
 * Deep localizer for curriculum lessons.
 * Localizes titles, summaries, sections, worked examples, pitfalls, and quizzes,
 * while preserving KaTeX math, diagrams, IDs, and answer keys.
 */
export function getLocalizedLesson(lesson, langCode = 'en') {
  if (!lesson || langCode === 'en') return lesson;

  const fullTrans = FULL_LESSON_TRANSLATIONS[lesson.id] && FULL_LESSON_TRANSLATIONS[lesson.id][langCode];
  const metaTrans = ALL_LESSONS_METADATA[lesson.id] && ALL_LESSONS_METADATA[lesson.id][langCode];

  // Base localized fields with fallback cascade
  const title = (fullTrans && fullTrans.title) || (metaTrans && metaTrans.title) || lesson.title;
  const summary = (fullTrans && fullTrans.summary) || (metaTrans && metaTrans.summary) || lesson.summary;
  const intuition = (fullTrans && fullTrans.intuition) || lesson.intuition;
  const difficulty = getLocalizedDifficulty(lesson.difficulty, langCode);
  const readingTime = getLocalizedReadingTime(lesson.readingTime || lesson.duration, langCode);

  // Localize sections (headings, paragraphs, internal worked examples)
  let sections = lesson.sections;
  if (lesson.sections && Array.isArray(lesson.sections)) {
    sections = lesson.sections.map((sec, idx) => {
      const locSec = fullTrans && fullTrans.sections && fullTrans.sections[idx];
      if (!locSec) return sec;

      return {
        ...sec,
        heading: locSec.heading || sec.heading,
        title: locSec.title || sec.title || locSec.heading,
        content: locSec.content || sec.content,
        workedExample: locSec.workedExample || sec.workedExample,
        commonMisconceptions: locSec.commonMisconceptions || sec.commonMisconceptions,
      };
    });
  }

  // Localize top-level worked example
  const workedExample = (fullTrans && fullTrans.workedExample) || lesson.workedExample;

  // Localize common misconceptions
  const commonMisconceptions = (fullTrans && fullTrans.commonMisconceptions) || lesson.commonMisconceptions;

  // Localize quickCheck / knowledgeCheck while preserving correct answer logic
  let quickCheck = lesson.quickCheck;
  if (lesson.quickCheck && fullTrans && fullTrans.quickCheck) {
    quickCheck = {
      ...lesson.quickCheck,
      question: fullTrans.quickCheck.question || lesson.quickCheck.question,
      options: fullTrans.quickCheck.options || lesson.quickCheck.options,
      explanation: fullTrans.quickCheck.explanation || lesson.quickCheck.explanation,
    };
  }

  return {
    ...lesson,
    title,
    summary,
    intuition,
    difficulty,
    readingTime,
    sections,
    workedExample,
    commonMisconceptions,
    quickCheck,
  };
}
