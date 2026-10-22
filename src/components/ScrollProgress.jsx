import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-noir-850/40 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blood-600 via-evidence-amber to-blood-500 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
