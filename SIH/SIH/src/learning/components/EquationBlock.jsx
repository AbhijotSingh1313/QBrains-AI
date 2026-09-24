// EquationBlock.jsx
// KaTeX renderer for inline and display mathematical formulas with copy-to-clipboard and error resilience.

import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export function EquationBlock({ math, displayMode = true, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !math) return;

    try {
      katex.render(math, containerRef.current, {
        displayMode,
        throwOnError: false,
        errorColor: '#ef4444',
        strict: false
      });
    } catch (err) {
      if (containerRef.current) {
        containerRef.current.innerText = math;
      }
    }
  }, [math, displayMode]);

  if (!math) return null;

  return (
    <div className={`equation-block-wrapper my-3 ${displayMode ? 'text-center' : 'inline-block'} ${className}`}>
      <div 
        ref={containerRef}
        className={`p-3 rounded-lg overflow-x-auto ${displayMode ? 'bg-slate-900/60 border border-slate-700/50 text-slate-100' : 'inline'}`}
      />
    </div>
  );
}
