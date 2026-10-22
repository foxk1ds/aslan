import React from 'react';
import { motion } from 'framer-motion';
import { causesTimeline } from '../data/causes';

export const SectionCauses = () => {
  return (
    <section id="causes" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16 sm:mb-24">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            03
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            The Historical Evolution of Cause
          </span>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-20 sm:mb-28">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111] mb-6">
            Eighty years of asking the wrong questions.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
            For nearly a century, sociologists, psychologists, and economists have tried to isolate the spark that turns a law-abiding citizen into a defendant. Each generation found an answer that reflected its own blind spots.
          </p>
        </div>

        {/* Vertical Timeline with Large Typographic Dates */}
        <div className="space-y-16 sm:space-y-24 border-t border-[#111]/20 pt-12">
          {causesTimeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-baseline pt-8 border-t border-[#111]/10 first:border-t-0"
            >
              {/* Date Column */}
              <div className="lg:col-span-3">
                <span className="font-serif text-5xl sm:text-7xl text-[#111] leading-none block tracking-tight font-normal">
                  {item.year}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold mt-2 block">
                  {item.marker}
                </span>
                <span className="text-xs font-sans text-[#7A7873] block mt-1">
                  {item.theorist}
                </span>
              </div>

              {/* Story Column */}
              <div className="lg:col-span-9 max-w-prose space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#111] leading-snug">
                  {item.headline}
                </h3>
                <p className="text-[17px] sm:text-[19px] text-[#3A3A38] font-sans leading-[1.65]">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
