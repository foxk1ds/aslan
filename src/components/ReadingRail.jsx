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

      {/* Desktop Sticky Chapter Rail - Sleek, non-intrusive, hover-revealed labels */}
      <nav
        aria-label="Reading chapters"
        className="hidden lg:flex fixed right-3 xl:right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 select-none"
      >
        <div className="sr-only">Table of Contents</div>
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="group relative flex items-center justify-end py-1.5 focus:outline-none"
              title={ch.label}
              aria-label={`Jump to ${ch.label}`}
            >
              {/* Floating Tooltip Label (revealed on hover, or prominent only on huge screens) */}
              <span
                className={`absolute right-7 py-0.5 px-2 text-[10px] tracking-wider uppercase font-sans whitespace-nowrap rounded transition-all duration-200 pointer-events-none shadow-sm ${
                  isActive
                    ? 'opacity-0 2xl:opacity-100 group-hover:opacity-100 bg-[#111] text-[#F4F0E8] font-medium'
                    : 'opacity-0 group-hover:opacity-100 bg-[#EAE5DB] text-[#111] border border-[#111]/15'
                }`}
              >
                {ch.label}
              </span>

              {/* Minimalist Rail Indicator Tick */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-5 h-[2px] bg-[#B3261E]'
                    : 'w-2 h-[1px] bg-[#111]/25 group-hover:w-4 group-hover:bg-[#111]'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </>
  );
};
