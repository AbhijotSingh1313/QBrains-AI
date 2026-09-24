// TutorDrawer.jsx
// Dedicated AI Quantum Tutor side-drawer powered by /api/learning-tutor/chat with Multilingual Support

import React, { useState, useEffect, useRef } from 'react';
import { LearningTutorService } from '../services/LearningTutorService.js';
import { EquationBlock } from './EquationBlock.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export function TutorDrawer({ isOpen, onClose, currentLesson, currentLevel }) {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Set or update initial greeting when opened or language changes
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: t('tutorInitialGreeting', "Hello! I am your **Quantum AI Tutor**. I'm here to guide you through quantum computing, mathematical derivations, real-world analogies, and problem solving."),
          suggestedActions: [
            t('chipExplainSimply', 'Explain this concept intuitively'),
            t('chipDeriveMath', 'Derive the key formula step-by-step'),
            t('chipMisconceptions', 'What is the common misconception here?')
          ]
        }
      ]);
    }
  }, [language, messages.length, t]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const context = {
        current_level_id: currentLevel ? String(currentLevel.id) : '0',
        current_level_title: currentLevel ? currentLevel.title : '',
        current_lesson_id: currentLesson ? currentLesson.id : '0.1',
        current_lesson_title: currentLesson ? currentLesson.title : '',
        summary: currentLesson ? currentLesson.summary : '',
        language: language // Pass active language!
      };

      const res = await LearningTutorService.sendMessage(query, context);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: res.reply,
          suggestedActions: res.suggestedActions || [
            t('chipExplainSimply', 'Explain this concept intuitively'),
            t('chipDeriveMath', 'Derive the key formula step-by-step'),
          ]
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered a temporary connection issue. Please try again.',
          suggestedActions: ['Try again', 'Explain key concept']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="learning-drawer-overlay" onClick={onClose} />
      <div className="learning-drawer-panel">
        {/* Header */}
        <div 
          className="p-4 flex items-center justify-between"
          style={{ background: 'var(--lr-bg-card)', borderBottom: '1px solid var(--lr-border)' }}
        >
          <div className="flex items-center gap-2.5">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: 'var(--lr-primary-light)', border: '1px solid var(--lr-primary)', color: 'var(--lr-primary-text)' }}
            >
              AI
            </div>
            <div>
              <h3 className="font-semibold text-sm" style={{ color: 'var(--lr-text-primary)' }}>
                {t('tutorHeader', 'Quantum Learning Tutor')}
              </h3>
              <p className="text-[11px] truncate max-w-[220px]" style={{ color: 'var(--lr-accent-text)' }}>
                {currentLesson ? currentLesson.title : t('tutorSub', 'AI-Guided Concept Mentor')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="learning-btn-icon"
            style={{ width: '28px', height: '28px', fontSize: '0.8rem' }}
          >
            ✕
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ background: 'var(--lr-bg-page)' }}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={msg.role === 'user' ? 'learning-chat-bubble-user' : 'learning-chat-bubble-ai'}>
                {msg.content}
              </div>

              {/* Suggested action chips */}
              {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                  {msg.suggestedActions.map((action, aidx) => (
                    <button
                      key={aidx}
                      onClick={() => handleSend(action)}
                      className="learning-prompt-chip"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs italic p-2" style={{ color: 'var(--lr-text-muted)' }}>
              <div 
                className="w-3 h-3 rounded-full animate-spin border-2 border-t-transparent"
                style={{ borderColor: 'var(--lr-primary)', borderTopColor: 'transparent' }}
              />
              {t('synthesizingMsg', 'Synthesizing pedagogical explanation...')}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Field */}
        <div 
          className="p-3"
          style={{ background: 'var(--lr-bg-card)', borderTop: '1px solid var(--lr-border)' }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              placeholder={t('inputPlaceholder', 'Ask a question or derivation...')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 rounded-lg px-3 py-2 text-xs md:text-sm focus:outline-none"
              style={{
                background: 'var(--lr-bg-input)',
                border: '1px solid var(--lr-border)',
                color: 'var(--lr-text-primary)'
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="learning-btn-primary"
              style={{ opacity: (!input.trim() || loading) ? 0.5 : 1 }}
            >
              {t('sendBtn', 'Send')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
