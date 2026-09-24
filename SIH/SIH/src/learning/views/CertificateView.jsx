// CertificateView.jsx
// Verifiable Quantum Computing Scholar Certificate issuance, customization, and export with Multilingual Support.

import React, { useState, useEffect } from 'react';
import { CertificateService } from '../services/CertificateService.js';
import { CERTIFICATION_REQUIREMENTS } from '../data/curriculumIndex.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function CertificateView({ onNavigateToView }) {
  const { t, translateCompetency } = useLanguage();
  const [eligibility, setEligibility] = useState(CertificateService.checkEligibility());
  const [certificate, setCertificate] = useState(CertificateService.getCertificate());
  const [studentName, setStudentName] = useState(certificate ? certificate.studentName : 'Quantum Scholar');
  const [isEditingName, setIsEditingName] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    const updatedElig = CertificateService.checkEligibility();
    setEligibility(updatedElig);
    const existingCert = CertificateService.getCertificate();
    if (existingCert) {
      setCertificate(existingCert);
      setStudentName(existingCert.studentName);
    }
  }, []);

  const handleClaim = () => {
    const issued = CertificateService.issueCertificate(studentName);
    setCertificate(issued);
  };

  const handleSaveName = () => {
    const updated = CertificateService.updateStudentName(studentName);
    setCertificate(updated);
    setIsEditingName(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    if (certificate) {
      navigator.clipboard.writeText(certificate.verificationUrl);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div 
        className="pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ borderBottom: '1px solid var(--lr-border)' }}
      >
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
            {t('certTitle', 'Quantum Computing Scholar Certification')}
          </h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-muted)' }}>
            {t('certDesc', 'Official academic credential certifying comprehensive competency in Quantum Information Science.')}
          </p>
        </div>

        {certificate && (
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="learning-btn-primary"
            >
              <span>{t('printPdfExport', '🖨 Print / PDF Export')}</span>
            </button>
          </div>
        )}
      </div>

      {/* Eligibility Checklist (if not yet claimed) */}
      {!certificate && (
        <div className="learning-card space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>
              {t('graduationCriteria', 'Graduation & Award Criteria')}
            </h2>
            <span className={`learning-pill ${eligibility.isEligible ? 'learning-pill-emerald' : 'learning-pill-gold'}`}>
              {eligibility.isEligible ? t('criteriaSatisfiedStatus', 'CRITERIA SATISFIED') : t('reqPendingStatus', 'REQUIREMENTS PENDING')}
            </span>
          </div>

          <div className="space-y-3">
            {eligibility.criteria.map((crit, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border flex items-center justify-between text-xs md:text-sm"
                style={{
                  background: crit.met ? 'var(--lr-success-light)' : 'var(--lr-bg-subtle)',
                  borderColor: crit.met ? 'var(--lr-success-border)' : 'var(--lr-border)',
                  color: crit.met ? 'var(--lr-success-text)' : 'var(--lr-text-secondary)'
                }}
              >
                <div className="flex items-center gap-3">
                  <span 
                    className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs"
                    style={{
                      background: crit.met ? 'var(--lr-success)' : 'var(--lr-border)',
                      color: crit.met ? '#ffffff' : 'var(--lr-text-muted)'
                    }}
                  >
                    {crit.met ? '✓' : '○'}
                  </span>
                  <span>
                    {idx === 0 
                      ? t('criteriaLessons', crit.name) 
                      : idx === 1 
                      ? t('criteriaMastery', crit.name) 
                      : t('criteriaExam', crit.name)}
                  </span>
                </div>
                <span className="font-mono text-xs">{crit.current}</span>
              </div>
            ))}
          </div>

          <div 
            className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid var(--lr-border)' }}
          >
            <div className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>
              {t('needFinalExam', 'Need to complete the final exam? Take it in the Assessments tab.')}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onNavigateToView('assessment')}
                className="learning-btn-secondary"
              >
                {t('goToFinalExam', 'Go to Final Exam →')}
              </button>
              <button
                onClick={handleClaim}
                className="learning-btn-gold"
              >
                {eligibility.isEligible ? t('claimCredential', 'Claim My Certificate') : t('previewIssueCert', 'Preview / Issue Certificate')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Verifiable Certificate Preview/Display */}
      {certificate && (
        <div className="space-y-6">
          {/* Certificate Customization Bar */}
          <div className="learning-card flex flex-wrap items-center justify-between gap-4" style={{ padding: '12px 20px' }}>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>
                {t('studentNameLabel', 'Student Name:')}
              </span>
              {isEditingName ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="px-3 py-1 rounded text-xs focus:outline-none"
                    style={{ background: 'var(--lr-bg-input)', border: '1px solid var(--lr-border)', color: 'var(--lr-text-primary)' }}
                  />
                  <button
                    onClick={handleSaveName}
                    className="learning-btn-primary"
                    style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                  >
                    {t('saveBtn', 'Save')}
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: 'var(--lr-text-primary)' }}>{certificate.studentName}</span>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-xs hover:underline"
                    style={{ color: 'var(--lr-primary-text)' }}
                  >
                    {t('editBtn', '✎ Edit')}
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="learning-btn-secondary"
                style={{ padding: '6px 12px', fontSize: '0.75rem' }}
              >
                {copiedUrl ? t('linkCopied', '✓ Link Copied') : t('copyVerificationUrl', '🔗 Copy Verification URL')}
              </button>
              <span className="text-xs font-mono" style={{ color: 'var(--lr-text-muted)' }}>{certificate.certificateId}</span>
            </div>
          </div>

          {/* Printable Official Certificate Document */}
          <div className="learning-certificate-frame print:border-black print:text-black print:bg-white print:p-8">
            <div className="learning-certificate-border" />
            
            {/* Seal / Badge */}
            <div className="learning-cert-seal">
              Q
            </div>

            <div className="text-xs uppercase tracking-[0.25em] font-semibold mb-2" style={{ color: 'var(--lr-warning-text)' }}>
              Q BRAINS AI • Quantum Academy
            </div>

            <h2 className="text-2xl md:text-4xl font-serif font-bold tracking-wide" style={{ color: 'var(--lr-text-primary)' }}>
              {t('certMasteryTitle', 'Certificate of Academic Mastery')}
            </h2>

            <p className="text-xs md:text-sm mt-2 italic" style={{ color: 'var(--lr-text-muted)' }}>
              {t('certConferredUpon', 'This official credential is hereby conferred upon')}
            </p>

            <div className="my-6">
              <span className="learning-cert-name">
                {certificate.studentName}
              </span>
            </div>

            <p className="text-xs md:text-sm max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--lr-text-secondary)' }}>
              {t('certBody', 'for successfully completing the rigorous 11-Level Quantum Computing Scholar Curriculum, demonstrating advanced theoretical, mathematical, and computational mastery across all foundational domains of Quantum Information Science.')}
            </p>

            {/* Honors Distinction Badge */}
            {certificate.distinction && (
              <div className="inline-block my-4">
                <span className="learning-pill learning-pill-gold font-bold">
                  {t('certHonorsBadge', '★ Conferred with Highest Academic Honors & Distinction ★')}
                </span>
              </div>
            )}

            {/* Competency Transcript */}
            <div 
              className="my-6 max-w-lg mx-auto grid grid-cols-2 gap-2 text-left text-[11px] p-4 rounded-xl border print:text-black print:bg-slate-100"
              style={{ background: 'var(--lr-bg-subtle)', borderColor: 'var(--lr-border)', color: 'var(--lr-text-secondary)' }}
            >
              {certificate.competencies.map((comp, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span style={{ color: 'var(--lr-warning-text)' }}>✓</span>
                  <span className="truncate">{translateCompetency(comp).name}</span>
                </div>
              ))}
            </div>

            {/* Signatures & Footer Metadata */}
            <div 
              className="pt-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs print:text-black"
              style={{ borderTop: '1px solid var(--lr-border)', color: 'var(--lr-text-muted)' }}
            >
              <div className="text-left">
                <div className="font-serif italic text-sm" style={{ color: 'var(--lr-text-primary)' }}>
                  {t('boardOfDirectors', 'Quantum Board of Directors')}
                </div>
                <div className="mt-1 pt-1 text-[10px]" style={{ borderTop: '1px solid var(--lr-border)' }}>
                  {t('academicCouncil', 'Q BRAINS AI Academic Council')}
                </div>
              </div>

              <div className="text-center font-mono text-[10px]" style={{ color: 'var(--lr-text-faint)' }}>
                <div>ID: {certificate.certificateId}</div>
                <div>Issued: {certificate.issueDate}</div>
              </div>

              <div className="text-right">
                <div className="font-mono text-[10px]" style={{ color: 'var(--lr-warning-text)' }}>{certificate.verificationCode}</div>
                <div className="mt-1 pt-1 text-[10px]" style={{ borderTop: '1px solid var(--lr-border)' }}>
                  {t('cryptoVerified', 'Cryptographically Verified')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
