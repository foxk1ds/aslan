import React from 'react';
import { motion } from 'framer-motion';
import { solutionPairs } from '../data/solutions';

export const SectionSolutions = () => {
  return (
    <section id="what-works" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16 sm:mb-24">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            06
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            Comparative Interventions
          </span>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111] mb-6">
            What works: four contrasting truths.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
            For fifty years, crime policy has been guided by gut instinct rather than rigorous trials. When we examine outcomes side by side, our political common sense repeatedly collapses.
          </p>
        </div>

        {/* Contrasting Pairs List */}
        <div className="space-y-20 border-t border-[#111]/20 pt-16">
          {solutionPairs.map((pair) => (
            <div key={pair.num} className="space-y-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold">
                <span>Pair {pair.num}</span>
                <span>•</span>
                <span className="text-[#111]">{pair.theme}</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                {/* Left Column: What Failed */}
                <div className="lg:col-span-5 border-t border-[#111]/30 pt-4 space-y-3">
                  <span className="text-[11px] uppercase tracking-widest text-[#7A7873] font-sans font-semibold block">
                    The Retributive Dogma
                  </span>
                  <h3 className="font-serif text-2xl text-[#7A7873] leading-snug line-through decoration-[#B3261E]/60">
                    {pair.failedTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-[#7A7873] font-sans leading-relaxed">
                    {pair.failedDetail}
                  </p>
                </div>

                {/* Right Column: What Actually Works */}
                <div className="lg:col-span-7 border-t-2 border-[#111] pt-4 space-y-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#B3261E] font-sans font-semibold block">
                    The Documented Alternative
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#111] leading-snug">
                    {pair.workedTitle}
                  </h3>
                  <p className="text-[17px] sm:text-[19px] text-[#3A3A38] font-sans leading-[1.65]">
                    {pair.workedDetail}
                  </p>

                  <div className="bg-[#EAE5DB]/50 p-4 border-l border-[#B3261E] text-xs sm:text-sm text-[#3A3A38] font-sans italic">
                    <strong className="text-[#111] not-italic block mb-0.5 font-medium">Field Proof:</strong>
                    {pair.evidence}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
