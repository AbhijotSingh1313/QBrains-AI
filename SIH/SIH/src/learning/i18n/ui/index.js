// index.js - Central UI translations registry
import en from './en.js';
import hi from './hi.js';
import ta from './ta.js';
import te from './te.js';
import kn from './kn.js';
import ml from './ml.js';
import bn from './bn.js';
import mr from './mr.js';
import gu from './gu.js';
import pa from './pa.js';

export const UI_TRANSLATIONS = {
  en,
  hi,
  ta,
  te,
  kn,
  ml,
  bn,
  mr,
  gu,
  pa,
};

export function getUITranslation(langCode, key, fallback) {
  const langDict = UI_TRANSLATIONS[langCode];
  if (langDict && langDict[key] !== undefined) {
    return langDict[key];
  }
  // Fall back to English
  if (UI_TRANSLATIONS.en && UI_TRANSLATIONS.en[key] !== undefined) {
    return UI_TRANSLATIONS.en[key];
  }
  return fallback !== undefined ? fallback : key;
}
