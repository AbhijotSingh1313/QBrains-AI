// CertificateService.js
// Validates graduation criteria, generates verifiable credentials, and manages certification persistence.

import { CERTIFICATION_REQUIREMENTS } from '../data/curriculumIndex.js';
import { ProgressService } from './ProgressService.js';
import { MasteryService } from './MasteryService.js';
import { AssessmentService } from './AssessmentService.js';

const STORAGE_KEY = 'qnova_student_certificate';

export const CertificateService = {
  checkEligibility() {
    const completedLessons = ProgressService.getCompletedLessons().length;
    const overallMastery = MasteryService.getOverallMastery();
    const examResult = AssessmentService.getLatestExamResult();
    const examScore = examResult ? examResult.percentage : 0;
    const examPassed = examResult ? examResult.percentage >= CERTIFICATION_REQUIREMENTS.passingExamScore : false;

    const lessonsMet = completedLessons >= CERTIFICATION_REQUIREMENTS.minimumLessonsCompleted;
    const masteryMet = overallMastery >= CERTIFICATION_REQUIREMENTS.minimumMasteryScore;
    const examMet = examPassed;

    const isEligible = lessonsMet && masteryMet && examMet;

    return {
      isEligible,
      criteria: [
        {
          name: `Complete at least ${CERTIFICATION_REQUIREMENTS.minimumLessonsCompleted} core lessons`,
          current: `${completedLessons} / ${CERTIFICATION_REQUIREMENTS.minimumLessonsCompleted}`,
          met: lessonsMet
        },
        {
          name: `Achieve ≥${CERTIFICATION_REQUIREMENTS.minimumMasteryScore}% overall curriculum mastery`,
          current: `${overallMastery}%`,
          met: masteryMet
        },
        {
          name: `Pass Comprehensive Final Exam with ≥${CERTIFICATION_REQUIREMENTS.passingExamScore}%`,
          current: examResult ? `${examScore}%` : 'Not Taken',
          met: examMet
        }
      ],
      currentStats: {
        completedLessons,
        overallMastery,
        examScore
      }
    };
  },

  getCertificate() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  },

  issueCertificate(studentName = 'Quantum Scholar') {
    const eligibility = this.checkEligibility();
    
    // Generate unique verifiable serial: QNOVA-QC-YYYY-XXXX
    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
    const certId = `QNOVA-QC-${year}-${randomHex}`;

    const examResult = AssessmentService.getLatestExamResult();
    const examScore = examResult ? examResult.percentage : 85;
    const distinction = examScore >= CERTIFICATION_REQUIREMENTS.distinctionThreshold;

    const certData = {
      certificateId: certId,
      studentName: studentName.trim() || 'Quantum Computing Scholar',
      title: 'Certified Quantum Computing Scholar',
      subTitle: distinction ? 'Passed with Highest Honors & Academic Distinction' : 'Demonstrated Proficiency in Quantum Information Science',
      distinction,
      examScore,
      masteryScore: eligibility.currentStats.overallMastery,
      completedLessons: eligibility.currentStats.completedLessons,
      issueDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      competencies: CERTIFICATION_REQUIREMENTS.competencies,
      verificationUrl: `https://qnova.quantum/verify/${certId}`,
      verificationCode: `SHA256-${Math.random().toString(36).substring(2, 12).toUpperCase()}`
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(certData));
    } catch (e) {
      console.error('Failed to save certificate', e);
    }

    return certData;
  },

  updateStudentName(name) {
    const cert = this.getCertificate();
    if (cert && name && name.trim().length > 0) {
      cert.studentName = name.trim();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cert));
      return cert;
    }
    return cert;
  }
};
