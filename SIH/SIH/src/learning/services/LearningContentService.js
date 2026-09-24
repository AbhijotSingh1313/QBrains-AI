// LearningContentService.js
// Central repository service aggregating all 11 curriculum levels, lessons, prerequisites, and videos.

import { CURRICULUM_LEVELS, PREREQUISITE_DEPENDENCIES, CERTIFICATION_REQUIREMENTS } from '../data/curriculumIndex.js';
import { LEVEL_0_LESSONS } from '../data/levels/level0_orientation.js';
import { LEVEL_1_LESSONS } from '../data/levels/level1_mathematics.js';
import { LEVEL_2_LESSONS } from '../data/levels/level2_classical_physics.js';
import { LEVEL_3_LESSONS } from '../data/levels/level3_quantum_mechanics.js';
import { LEVEL_4_LESSONS } from '../data/levels/level4_quantum_computing.js';
import { LEVEL_5_LESSONS } from '../data/levels/level5_quantum_gates.js';
import { LEVEL_6_LESSONS } from '../data/levels/level6_multi_qubit.js';
import { LEVEL_7_LESSONS } from '../data/levels/level7_quantum_information.js';
import { LEVEL_8_LESSONS } from '../data/levels/level8_quantum_algorithms.js';
import { LEVEL_9_LESSONS } from '../data/levels/level9_advanced.js';
import { LEVEL_10_LESSONS } from '../data/levels/level10_industry_research.js';
import { CURATED_VIDEOS } from '../data/videos/videoDirectory.js';

// Aggregate all lessons in canonical sequence with normalized schema
const RAW_LESSONS_ARRAY = [
  ...LEVEL_0_LESSONS,
  ...LEVEL_1_LESSONS,
  ...LEVEL_2_LESSONS,
  ...LEVEL_3_LESSONS,
  ...LEVEL_4_LESSONS,
  ...LEVEL_5_LESSONS,
  ...LEVEL_6_LESSONS,
  ...LEVEL_7_LESSONS,
  ...LEVEL_8_LESSONS,
  ...LEVEL_9_LESSONS,
  ...LEVEL_10_LESSONS,
];

const ALL_LESSONS_ARRAY = RAW_LESSONS_ARRAY.map(l => {
  const derivedLevel = typeof l.levelId === 'number' ? l.levelId : (typeof l.level === 'number' ? l.level : parseInt(l.id.split('.')[0]));
  return {
    ...l,
    levelId: derivedLevel,
    readingTime: l.readingTime || l.duration || '15 min',
    summary: l.summary || l.intuition || l.title,
    difficulty: l.difficulty || 'Intermediate',
  };
});

// Map lookup by ID
const LESSONS_MAP = new Map(ALL_LESSONS_ARRAY.map(l => [l.id, l]));

export const LearningContentService = {
  getCurriculumLevels() {
    return CURRICULUM_LEVELS;
  },

  getLevel(levelId) {
    const numId = Number(levelId);
    return CURRICULUM_LEVELS.find(lvl => lvl.id === numId) || null;
  },

  getAllLessons() {
    return ALL_LESSONS_ARRAY;
  },

  getTotalLessonsCount() {
    return ALL_LESSONS_ARRAY.length;
  },

  getLesson(lessonId) {
    if (!lessonId) return null;
    return LESSONS_MAP.get(String(lessonId)) || null;
  },

  getLessonsForLevel(levelId) {
    const numId = Number(levelId);
    return ALL_LESSONS_ARRAY.filter(l => l.levelId === numId);
  },

  getLessonsForModule(moduleId, moduleObj = null) {
    if (moduleObj && Array.isArray(moduleObj.lessons)) {
      return moduleObj.lessons.map(id => this.getLesson(id)).filter(Boolean);
    }
    return ALL_LESSONS_ARRAY.filter(l => l.moduleId === moduleId);
  },

  getNextLesson(lessonId) {
    const idx = ALL_LESSONS_ARRAY.findIndex(l => l.id === String(lessonId));
    if (idx >= 0 && idx < ALL_LESSONS_ARRAY.length - 1) {
      return ALL_LESSONS_ARRAY[idx + 1];
    }
    return null;
  },

  getPreviousLesson(lessonId) {
    const idx = ALL_LESSONS_ARRAY.findIndex(l => l.id === String(lessonId));
    if (idx > 0) {
      return ALL_LESSONS_ARRAY[idx - 1];
    }
    return null;
  },

  getPrerequisites(levelSlug) {
    return PREREQUISITE_DEPENDENCIES[levelSlug] || [];
  },

  getCertificationRequirements() {
    return CERTIFICATION_REQUIREMENTS;
  },

  getCuratedVideos(levelId = null) {
    if (levelId !== null) {
      const num = Number(levelId);
      return CURATED_VIDEOS.filter(v => v.levelId === num);
    }
    return CURATED_VIDEOS;
  },

  search(query) {
    if (!query || query.trim().length === 0) return [];
    const q = query.toLowerCase().trim();
    return ALL_LESSONS_ARRAY.filter(l => 
      l.title.toLowerCase().includes(q) ||
      l.summary.toLowerCase().includes(q) ||
      l.sections.some(s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
    ).slice(0, 15);
  }
};
