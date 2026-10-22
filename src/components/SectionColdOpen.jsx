import React from 'react';
import { motion } from 'framer-motion';

export const SectionColdOpen = () => {
  return (
    <section
      id="cold-open"
      className="relative min-h-screen bg-[#0D0E10] text-[#F4F0E8] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-16 sm:py-24 overflow-hidden select-none"
    >
      {/* Top Meta Masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-between text-xs tracking-widest uppercase text-[#F4F0E8]/50 border-b border-white/10 pb-6"
      >
        <span className="font-sans font-medium">An Investigative Essay & Documentary Feature</span>
        <span className="hidden sm:inline font-sans">English Seminar Capstone</span>
        <span className="text-[#B3261E] font-sans font-semibold">12-Minute Read</span>
      </motion.div>

      {/* Center Cinematic Block */}
      <div className="max-w-6xl my-auto py-12">
        {/* Cold Open Epigraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl text-[#F4F0E8]/70 font-sans font-light tracking-wide max-w-xl mb-12 sm:mb-16 leading-relaxed"
        >
          Every crime is a quiet confession about the society that made it possible.
        </motion.p>

        {/* Hero Title with Mask Line Reveal */}
        <div className="space-y-1">
          <div className="mask-line">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3.75rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.03em] font-normal text-[#F4F0E8]"
            >
              Why Do
            </motion.h1>
          </div>

          <div className="mask-line">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3.75rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.03em] font-normal italic text-[#F4F0E8]"
            >
              People Commit
            </motion.h1>
          </div>

          <div className="mask-line flex items-baseline gap-4 sm:gap-8">
            <motion.h1
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(3.75rem,12vw,9.5rem)] leading-[0.88] tracking-[-0.03em] font-normal text-[#F4F0E8]"
            >
              Crimes<span className="text-[#B3261E] not-italic">?</span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between border-t border-white/10 pt-6 text-xs text-[#F4F0E8]/50 gap-4"
      >
        <div className="max-w-md text-xs sm:text-sm font-sans text-[#F4F0E8]/70 leading-relaxed">
          Reported and analyzed through four decades of judicial data, historical trial transcripts, and sociological fieldwork.
        </div>
        <div className="flex items-center gap-3 font-sans uppercase tracking-widest text-[11px] text-[#F4F0E8]/60">
          <span>Scroll to begin reading</span>
          <span className="inline-block w-4 h-4 border-b border-r border-[#B3261E] rotate-45 transform translate-y-[-2px] animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
