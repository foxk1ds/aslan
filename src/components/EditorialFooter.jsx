import React from 'react';
import { essayData } from '../data/opinion';

export const EditorialFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain text-[#111] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between border-t border-[#111] pt-8 gap-8">
        {/* Left Col */}
        <div className="space-y-2">
          <span className="font-serif text-2xl font-normal block tracking-tight">
            Why Do People Commit Crimes?
          </span>
          <p className="text-xs text-[#7A7873] max-w-md leading-relaxed">
            A long-form investigative essay published for the {essayData.course} at {essayData.school}.
          </p>
        </div>

        {/* Center Col */}
        <div className="text-xs text-[#7A7873] space-y-1">
          <div>Author: <span className="text-[#111] font-medium">{essayData.author}</span></div>
          <div>Faculty: <span className="text-[#111] font-medium">{essayData.evaluator}</span></div>
          <div>Date: {essayData.date}</div>
        </div>

        {/* Right Col */}
        <div className="flex flex-col items-start md:items-end gap-2 text-xs">
          <button
            onClick={scrollToTop}
            className="uppercase tracking-widest text-[#B3261E] hover:text-[#111] transition-colors font-medium"
          >
            ↑ Return to Top
          </button>
          <span className="text-[#7A7873]">Designed in the tradition of long-form print journalism.</span>
        </div>
      </div>
    </footer>
  );
};
