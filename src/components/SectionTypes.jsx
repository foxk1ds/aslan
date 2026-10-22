import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { crimeTypes } from '../data/typesOfCrime';

export const SectionTypes = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="types-of-crime" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16 sm:mb-20">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            02
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            Typology of Deviance
          </span>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111] mb-6">
            Five ways we break the pact.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
            In the eyes of the law, crime is sorted by statute and sentencing guidelines. But in human terms, it falls into five distinct behaviors—each driven by an entirely different impulse.
          </p>
        </div>

        {/* Tab Selector Rail (Desktop & Mobile) */}
        <div className="flex overflow-x-auto gap-4 border-b border-[#111]/20 pb-4 mb-12 sm:mb-16 scrollbar-none">
          {crimeTypes.map((type, idx) => (
            <button
              key={type.num}
              onClick={() => setActiveTab(idx)}
              className={`pb-2 px-1 text-left whitespace-nowrap transition-all duration-200 focus:outline-none ${
                activeTab === idx
                  ? 'border-b-2 border-[#B3261E] text-[#111] font-semibold'
                  : 'text-[#111]/40 hover:text-[#111]'
              }`}
            >
              <span className="font-serif text-xs mr-2">{type.num}</span>
              <span className="text-sm font-sans tracking-wide">{type.title}</span>
            </button>
          ))}
        </div>

        {/* Active Typology Editorial Spread (No card grid!) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Big Typographic Numeral & Title */}
          <div className="lg:col-span-4 border-t border-[#111] pt-6">
            <span className="font-serif text-7xl sm:text-9xl text-[#111]/15 leading-none block mb-4 select-none">
              {crimeTypes[activeTab].num}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#111] leading-tight mb-2">
              {crimeTypes[activeTab].title}
            </h3>
            <p className="text-sm font-sans text-[#7A7873] uppercase tracking-wider mb-6">
              {crimeTypes[activeTab].subtitle}
            </p>
            <div className="w-8 h-[2px] bg-[#B3261E]" />
          </div>

          {/* Core Essay Text */}
          <div className="lg:col-span-5 border-t border-[#111] pt-6 space-y-6">
            <p className="text-xl sm:text-2xl font-serif text-[#111] italic leading-snug">
              "{crimeTypes[activeTab].lead}"
            </p>
            <p className="text-[17px] sm:text-[19px] text-[#3A3A38] font-sans leading-[1.65]">
              {crimeTypes[activeTab].body}
            </p>
          </div>

          {/* Historical Case Anchor Note */}
          <div className="lg:col-span-3 border-t border-[#111] pt-6 bg-[#EAE5DB]/40 p-6">
            <span className="text-[11px] uppercase tracking-widest text-[#B3261E] font-sans font-bold block mb-2">
              Historical Reference // {crimeTypes[activeTab].caseStudy.year}
            </span>
            <h4 className="font-serif text-lg font-bold text-[#111] mb-2">
              {crimeTypes[activeTab].caseStudy.name}
            </h4>
            <p className="text-xs sm:text-sm text-[#3A3A38] font-sans leading-relaxed">
              {crimeTypes[activeTab].caseStudy.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
