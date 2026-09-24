// PersonalizationView.jsx
// Dedicated standalone Personalization view for the Quantum Learning Platform with full Multilingual & Light/Dark Theme Support.
// Strictly isolated: Only collects and stores data in localStorage; does NOT alter curriculum, tutor, progress, or assessments.

import React, { useState, useEffect } from 'react';
import { PersonalizationService } from '../services/PersonalizationService.js';
import { getLocalizedPersonalization } from '../i18n/content/personalizationTranslations.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function PersonalizationView({ onNavigateToView }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedPersonalization(language);

  const [savedProfile, setSavedProfile] = useState(() => PersonalizationService.getPersonalization());
  const [isEditing, setIsEditing] = useState(() => !PersonalizationService.hasPersonalization());
  const [formData, setFormData] = useState(() => {
    const existing = PersonalizationService.getPersonalization();
    return existing || PersonalizationService.getDefaultProfile();
  });
  const [validationError, setValidationError] = useState('');
  const [showSavedToast, setShowSavedToast] = useState(false);

  // Sync state if external changes occur
  useEffect(() => {
    const unsub = PersonalizationService.subscribe(() => {
      const updated = PersonalizationService.getPersonalization();
      setSavedProfile(updated);
    });
    return unsub;
  }, []);

  // Handle single choice option select
  const handleSingleSelect = (questionId, optionId) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: optionId
    }));
    if (validationError) setValidationError('');
  };

  // Handle multi-choice toggle
  const handleMultiToggle = (questionId, optionId) => {
    setFormData(prev => {
      const currentList = Array.isArray(prev[questionId]) ? prev[questionId] : [];
      const exists = currentList.includes(optionId);
      const nextList = exists
        ? currentList.filter(id => id !== optionId)
        : [...currentList, optionId];
      return {
        ...prev,
        [questionId]: nextList
      };
    });
  };

  // Handle text input for "other"
  const handleOtherTextChange = (fieldKey, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldKey]: value
    }));
  };

  // Form submission
  const handleSave = (e) => {
    if (e) e.preventDefault();

    // Check required fields
    const requiredQuestions = loc.questions.filter(q => q.required);
    for (const q of requiredQuestions) {
      const val = formData[q.id];
      if (!val || val.trim?.() === '') {
        setValidationError(loc.validationError || 'Please complete all required fields.');
        // Scroll to error
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      // If "other" is selected, require custom text
      if (val === 'other') {
        const otherKey = `${q.id}Other`;
        if (!formData[otherKey] || formData[otherKey].trim() === '') {
          setValidationError(`Please specify your answer for "${q.question}"`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
    }

    setValidationError('');
    const saved = PersonalizationService.savePersonalization(formData);
    setSavedProfile(saved);
    setIsEditing(false);
    setShowSavedToast(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowSavedToast(false), 4000);
  };

  // Cancel edit
  const handleCancel = () => {
    if (savedProfile) {
      setFormData(savedProfile);
      setIsEditing(false);
      setValidationError('');
    } else {
      setFormData(PersonalizationService.getDefaultProfile());
      setValidationError('');
      if (onNavigateToView) onNavigateToView('dashboard');
    }
  };

  // Helper to look up localized label for a question option
  const getOptionLabel = (questionId, optionId) => {
    const q = loc.questions.find(item => item.id === questionId);
    if (!q) return optionId;
    const opt = q.options.find(o => o.id === optionId);
    return opt ? opt.label : optionId;
  };

  // Group questions by section for clean rendering
  const section1Questions = loc.questions.filter(q => ['currentLevel', 'currentRole', 'background', 'qcExperience'].includes(q.id));
  const section2Questions = loc.questions.filter(q => ['mathComfort', 'physicsBackground', 'programmingExperience'].includes(q.id));
  const section3Questions = loc.questions.filter(q => ['learningGoal', 'weeklyTime', 'learningPace'].includes(q.id));
  const section4Questions = loc.questions.filter(q => ['learningPreferences', 'learningInterests'].includes(q.id));

  // Render question field in Form Mode
  const renderQuestionField = (q) => {
    const isSingle = q.type === 'single';
    const isMulti = q.type === 'multiple';
    const selectedValue = formData[q.id];
    const otherKey = `${q.id}Other`;
    const isOtherSelected = selectedValue === 'other';

    return (
      <div key={q.id} id={`personalization-q-${q.id}`} className="learning-card p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--lr-primary-text)' }}>
              {q.title} {q.required && <span style={{ color: 'var(--lr-danger-text)' }}>*</span>}
            </div>
            <h3 className="text-sm md:text-base font-semibold mt-1" style={{ color: 'var(--lr-text-primary)' }}>
              {q.question}
            </h3>
          </div>
          {q.required ? (
            <span className="learning-pill text-[10px] shrink-0" style={{ background: 'var(--lr-bg-subtle)' }}>
              Required
            </span>
          ) : (
            <span className="learning-pill text-[10px] shrink-0 opacity-75">
              Optional
            </span>
          )}
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-2">
          {q.options.map(opt => {
            const isSelected = isSingle
              ? selectedValue === opt.id
              : Array.isArray(selectedValue) && selectedValue.includes(opt.id);

            return (
              <label
                key={opt.id}
                onClick={() => {
                  if (isSingle) handleSingleSelect(q.id, opt.id);
                  else handleMultiToggle(q.id, opt.id);
                }}
                className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition select-none ${
                  isSelected ? 'border-primary ring-1' : 'hover:border-slate-400'
                }`}
                style={{
                  background: isSelected ? 'var(--lr-primary-light)' : 'var(--lr-bg-card)',
                  borderColor: isSelected ? 'var(--lr-primary)' : 'var(--lr-border)',
                  color: isSelected ? 'var(--lr-primary-text)' : 'var(--lr-text-secondary)',
                  fontWeight: isSelected ? '600' : 'normal'
                }}
              >
                <input
                  type={isSingle ? 'radio' : 'checkbox'}
                  name={q.id}
                  value={opt.id}
                  checked={isSelected}
                  onChange={() => {}} // Controlled via label onClick
                  className="sr-only"
                />
                <span 
                  className={`w-4 h-4 rounded-${isSingle ? 'full' : 'md'} border flex items-center justify-center shrink-0 text-[10px]`}
                  style={{
                    borderColor: isSelected ? 'var(--lr-primary)' : 'var(--lr-border)',
                    background: isSelected ? 'var(--lr-primary)' : 'transparent',
                    color: '#ffffff'
                  }}
                >
                  {isSelected && (isSingle ? '●' : '✓')}
                </span>
                <span className="text-xs leading-snug">{opt.label}</span>
              </label>
            );
          })}
        </div>

        {/* "Other" text input field */}
        {q.hasOther && isOtherSelected && (
          <div className="pt-2">
            <input
              type="text"
              value={formData[otherKey] || ''}
              onChange={(e) => handleOtherTextChange(otherKey, e.target.value)}
              placeholder={loc.otherPlaceholder || 'Please specify...'}
              className="w-full px-3.5 py-2.5 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-1"
              style={{
                background: 'var(--lr-bg-input)',
                border: '1px solid var(--lr-primary)',
                color: 'var(--lr-text-primary)'
              }}
              autoFocus
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Toast Notification */}
      {showSavedToast && (
        <div 
          className="p-4 rounded-xl border flex items-center justify-between gap-3 shadow-lg animate-in slide-in-from-top-3 duration-300"
          style={{ background: 'var(--lr-success-light)', borderColor: 'var(--lr-success-border)', color: 'var(--lr-success-text)' }}
        >
          <div className="flex items-center gap-2.5 text-xs md:text-sm font-semibold">
            <span>✓</span>
            <span>{loc.savedToast || 'Your learning profile has been saved.'}</span>
          </div>
          <button 
            onClick={() => setShowSavedToast(false)}
            className="text-xs hover:opacity-75 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Validation Error Banner */}
      {validationError && (
        <div 
          className="p-4 rounded-xl border flex items-center justify-between gap-3 animate-in shake duration-200"
          style={{ background: 'var(--lr-danger-light)', borderColor: 'var(--lr-danger-border)', color: 'var(--lr-danger-text)' }}
        >
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium">
            <span>⚠</span>
            <span>{validationError}</span>
          </div>
          <button 
            onClick={() => setValidationError('')}
            className="text-xs hover:opacity-75 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header Bar */}
      <div 
        className="pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ borderBottom: '1px solid var(--lr-border)' }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="learning-pill text-[11px] font-semibold" style={{ color: 'var(--lr-primary-text)' }}>
              👤 {t('navPersonalization', 'Personalization')}
            </span>
            {savedProfile && (
              <span className="learning-pill learning-pill-emerald text-[10px]">
                {loc.summaryBadge || 'PROFILE ACTIVE'}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--lr-text-primary)' }}>
            {loc.title || 'Learner Personalization Profile'}
          </h1>
          <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-muted)' }}>
            {loc.subtitle || 'Share your background, comfort levels, and study preferences to personalize your quantum scholar identity.'}
          </p>
        </div>

        {/* Action Button in Header */}
        {!isEditing && savedProfile && (
          <button
            onClick={() => { setIsEditing(true); setValidationError(''); }}
            className="learning-btn-primary shrink-0"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <span>{loc.editBtn || '✎ Edit Personalization'}</span>
          </button>
        )}
      </div>

      {/* ========================================================
          MODE 1: SUMMARY MODE (Displays saved profile card)
          ======================================================== */}
      {!isEditing && savedProfile ? (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Summary Hero Banner */}
          <div className="learning-card p-6" style={{ background: 'var(--lr-bg-card-hover)', borderColor: 'var(--lr-border)' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold" style={{ color: 'var(--lr-text-primary)' }}>
                  {loc.summaryTitle || 'Your Quantum Learning Profile'}
                </h2>
                <p className="text-xs md:text-sm mt-1" style={{ color: 'var(--lr-text-secondary)' }}>
                  {loc.summaryDesc || 'This personalization record is saved locally in your browser memory and represents your scholar baseline.'}
                </p>
              </div>
              <button
                onClick={() => { setIsEditing(true); setValidationError(''); }}
                className="learning-btn-primary shrink-0"
              >
                <span>{loc.editBtn || '✎ Edit Personalization'}</span>
              </button>
            </div>
          </div>

          {/* Grid of Profile Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Background & Role */}
            <div className="learning-card p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--lr-accent-text)' }}>
                <span>🎓</span>
                <span>{loc.sectionPersonal || '1. Background & Academic Role'}</span>
              </h3>
              <div className="space-y-3 text-xs md:text-sm divide-y" style={{ borderColor: 'var(--lr-border)' }}>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Learning Level:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-primary-text)' }}>
                    {getOptionLabel('currentLevel', savedProfile.currentLevel)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Current Role:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {savedProfile.currentRole === 'other'
                      ? savedProfile.currentRoleOther || 'Other'
                      : getOptionLabel('currentRole', savedProfile.currentRole)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Background:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {savedProfile.background === 'other'
                      ? savedProfile.backgroundOther || 'Other'
                      : getOptionLabel('background', savedProfile.background)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>QC Experience:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('qcExperience', savedProfile.qcExperience)}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Technical Readiness */}
            <div className="learning-card p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--lr-primary-text)' }}>
                <span>📐</span>
                <span>{loc.sectionReadiness || '2. Mathematical & Technical Readiness'}</span>
              </h3>
              <div className="space-y-3 text-xs md:text-sm divide-y" style={{ borderColor: 'var(--lr-border)' }}>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Mathematics Comfort:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('mathComfort', savedProfile.mathComfort)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Physics Background:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('physicsBackground', savedProfile.physicsBackground)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Programming Comfort:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('programmingExperience', savedProfile.programmingExperience)}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Objectives & Study Dedication */}
            <div className="learning-card p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--lr-warning-text)' }}>
                <span>🎯</span>
                <span>{loc.sectionGoals || '3. Objectives & Study Dedication'}</span>
              </h3>
              <div className="space-y-3 text-xs md:text-sm divide-y" style={{ borderColor: 'var(--lr-border)' }}>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Primary Goal:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {savedProfile.learningGoal === 'other'
                      ? savedProfile.learningGoalOther || 'Other'
                      : getOptionLabel('learningGoal', savedProfile.learningGoal)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Weekly Dedication:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('weeklyTime', savedProfile.weeklyTime)}
                  </span>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span style={{ color: 'var(--lr-text-muted)' }}>Preferred Pace:</span>
                  <span className="font-semibold" style={{ color: 'var(--lr-text-primary)' }}>
                    {getOptionLabel('learningPace', savedProfile.learningPace)}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Learning Preferences & Topic Interests */}
            <div className="learning-card p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: 'var(--lr-success-text)' }}>
                <span>💡</span>
                <span>{loc.sectionInterests || '4. Learning Preferences & Topic Interests'}</span>
              </h3>
              <div className="space-y-4 text-xs md:text-sm">
                <div>
                  <div className="text-[11px] mb-2 font-semibold" style={{ color: 'var(--lr-text-muted)' }}>Learning Preferences:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {savedProfile.learningPreferences && savedProfile.learningPreferences.length > 0 ? (
                      savedProfile.learningPreferences.map(prefId => (
                        <span key={prefId} className="learning-pill learning-pill-blue text-[11px]">
                          {getOptionLabel('learningPreferences', prefId)}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs italic" style={{ color: 'var(--lr-text-faint)' }}>{loc.noneSelected || 'None selected'}</span>
                    )}
                  </div>
                </div>

                <div className="pt-2" style={{ borderTop: '1px solid var(--lr-border)' }}>
                  <div className="text-[11px] mb-2 font-semibold" style={{ color: 'var(--lr-text-muted)' }}>Topic Interests:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {savedProfile.learningInterests && savedProfile.learningInterests.length > 0 ? (
                      savedProfile.learningInterests.map(intId => (
                        <span key={intId} className="learning-pill learning-pill-gold text-[11px]">
                          {getOptionLabel('learningInterests', intId)}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs italic" style={{ color: 'var(--lr-text-faint)' }}>{loc.noneSelected || 'None selected'}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Reset option */}
          <div className="pt-4 flex items-center justify-between text-xs" style={{ borderTop: '1px solid var(--lr-border)', color: 'var(--lr-text-muted)' }}>
            <span>Last updated: {new Date(savedProfile.updatedAt || Date.now()).toLocaleDateString()}</span>
            <button
              onClick={() => {
                if (window.confirm('Reset your personalization profile?')) {
                  PersonalizationService.clearPersonalization();
                  setSavedProfile(null);
                  setFormData(PersonalizationService.getDefaultProfile());
                  setIsEditing(true);
                }
              }}
              className="hover:underline text-[11px]"
              style={{ color: 'var(--lr-danger-text)' }}
            >
              Reset Profile
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================
           MODE 2: FORM MODE (Questionnaire to collect or edit)
           ======================================================== */
        <form onSubmit={handleSave} className="space-y-8 animate-in fade-in duration-200">
          <div className="text-xs flex items-center justify-between pb-2" style={{ color: 'var(--lr-text-muted)' }}>
            <span>{loc.requiredNote || '* Required fields'}</span>
            <span>All responses are stored locally in your browser memory.</span>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-1" style={{ color: 'var(--lr-primary-text)', borderBottom: '1px solid var(--lr-border)' }}>
              <span>🎓</span>
              <span>{loc.sectionPersonal || '1. Background & Academic Role'}</span>
            </h2>
            <div className="space-y-4">
              {section1Questions.map(q => renderQuestionField(q))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-1" style={{ color: 'var(--lr-primary-text)', borderBottom: '1px solid var(--lr-border)' }}>
              <span>📐</span>
              <span>{loc.sectionReadiness || '2. Mathematical & Technical Readiness'}</span>
            </h2>
            <div className="space-y-4">
              {section2Questions.map(q => renderQuestionField(q))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-1" style={{ color: 'var(--lr-primary-text)', borderBottom: '1px solid var(--lr-border)' }}>
              <span>🎯</span>
              <span>{loc.sectionGoals || '3. Objectives & Study Dedication'}</span>
            </h2>
            <div className="space-y-4">
              {section3Questions.map(q => renderQuestionField(q))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 pb-1" style={{ color: 'var(--lr-primary-text)', borderBottom: '1px solid var(--lr-border)' }}>
              <span>💡</span>
              <span>{loc.sectionInterests || '4. Learning Preferences & Topic Interests'}</span>
            </h2>
            <div className="space-y-4">
              {section4Questions.map(q => renderQuestionField(q))}
            </div>
          </div>

          {/* Form Actions Footer */}
          <div 
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-4 p-4 rounded-2xl shadow-xl"
            style={{
              background: 'var(--lr-bg-card)',
              border: '1px solid var(--lr-border)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="text-xs" style={{ color: 'var(--lr-text-muted)' }}>
              {validationError ? (
                <span style={{ color: 'var(--lr-danger-text)' }}>⚠ {validationError}</span>
              ) : (
                <span>Ready to save your learning profile?</span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="learning-btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <span>{loc.cancelBtn || 'Cancel'}</span>
              </button>

              <button
                type="submit"
                className="learning-btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.85rem' }}
              >
                <span>{loc.saveBtn || 'Save Personalization'}</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
