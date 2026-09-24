// LearningTutorService.js
// Interfaces with backend AI Learning Tutor endpoints (/api/learning-tutor/chat and /status)

export const LearningTutorService = {
  async getStatus() {
    try {
      const res = await fetch('/api/learning-tutor/status');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      return { status: 'offline', error: e.message };
    }
  },

  async sendMessage(message, context = {}) {
    const payload = {
      message,
      language: context.language || 'en',
      context: {
        current_level_id: context.current_level_id || '0',
        current_level_title: context.current_level_title || '',
        current_lesson_id: context.current_lesson_id || '0.1',
        current_lesson_title: context.current_lesson_title || '',
        summary: context.summary || '',
        user_notes: context.user_notes || '',
        language: context.language || 'en'
      }
    };

    try {
      const res = await fetch('/api/learning-tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }

      const data = await res.json();
      return {
        reply: data.reply,
        suggestedActions: data.suggested_actions || [],
        references: data.references || []
      };
    } catch (err) {
      console.warn('Learning tutor fetch failed, using pedagogical fallback', err);
      return {
        reply: `### Conceptual Guidance: ${context.current_lesson_title || 'Quantum Mechanics'}\n\nIn quantum mechanics, states are represented by normalized vectors in complex Hilbert space $\\mathcal{H}$. When studying **${context.current_lesson_title || 'this topic'}**, remember:\n\n1. **Linear Superposition**: Quantum states can exist in combinations $\\alpha|0\\rangle + \\beta|1\\rangle$ with probabilities $|\alpha|^2$ and $|\beta|^2$.\n2. **Unitary Evolution**: Physical operations preserve the norm $\\langle\\psi|\\psi\\rangle = 1$.\n3. **Measurement Collapse**: Observing a system forces it into one of the operator's eigenstates.\n\n*Would you like to walk through a mathematical derivation, see an interactive diagram, or test yourself on this concept?*`,
        suggestedActions: [
          'Show step-by-step derivation',
          'Explain with an analogy',
          'Give me a practice problem'
        ],
        references: [context.current_lesson_title || 'Quantum Foundations']
      };
    }
  }
};
