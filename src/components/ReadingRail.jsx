import React, { useState, useEffect } from 'react';

const chapters = [
  { id: 'cold-open', label: 'Prologue' },
  { id: 'the-question', label: '01 The Question' },
  { id: 'types-of-crime', label: '02 Typologies' },
  { id: 'causes', label: '03 The Causes' },
  { id: 'cases', label: '04 Three Cases' },
  { id: 'the-numbers', label: '05 The Numbers' },
  { id: 'what-works', label: '06 What Works' },
  { id: 'quiz', label: '07 The Inquiry' },
  { id: 'opinion', label: '08 The Verdict' },
  { id: 'sources', label: '09 Works Cited' },
];

export const ReadingRail = () => {
  const [activeChapter, setActiveChapter] = useState('cold-open');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) {
        setScrollProgress((scrollY / height) * 100);
      }

      // Find active chapter by section offset
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveChapter(chapters[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Hairline Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#111]/5 z-50 pointer-events-none">
        <div
          className="h-full bg-[#B3261E] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Desktop Sticky Chapter Rail */}
      <nav
        aria-label="Reading chapters"
        className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto select-none"
      >
        <div className="text-[10px] uppercase tracking-widest text-[#111]/40 font-sans mb-2 font-medium">
          Story Chapters
        </div>
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="group flex items-center gap-3 py-1 text-right focus:outline-none"
            >
              <span
                className={`text-[11px] font-sans transition-all duration-200 tracking-wide ${
                  isActive
                    ? 'text-[#B3261E] font-semibold translate-x-0 opacity-100'
                    : 'text-[#111]/40 opacity-0 group-hover:opacity-100 group-hover:text-[#111] -translate-x-1'
                }`}
              >
                {ch.label}
              </span>
              <span
                className={`block transition-all duration-300 ${
                  isActive
                    ? 'w-6 h-[1.5px] bg-[#B3261E]'
                    : 'w-2 h-[1px] bg-[#111]/30 group-hover:w-4 group-hover:bg-[#111]'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
};
