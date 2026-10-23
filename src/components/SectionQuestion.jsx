import React from 'react';
import { motion } from 'framer-motion';

export const SectionQuestion = () => {
  return (
    <section id="the-question" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16 sm:mb-24">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            01
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            The Central Premise
          </span>
        </div>

        {/* Asymmetrical Layout: Bleeding Headline + Margin Pull Quote + Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Title Column (Left) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111]"
            >
              We want to believe evil is rare, bizarre, and cleanly separated from ourselves.
            </motion.h2>

            <div className="w-16 h-[2px] bg-[#B3261E]" />

            <div className="space-y-6 text-[18px] sm:text-[20px] text-[#3A3A38] leading-[1.65] font-sans max-w-prose">
              <p>
                Every evening on the local news, crime arrives in the same packaging: a mugshot, a police radio crackle, a brief summary of damage. We are invited to shake our heads, turn the lock, and sleep well knowing the bad person has been placed behind iron.
              </p>
              <p>
                It is a comforting bedtime story. It is also completely false.
              </p>
              <p>
                When you sit in a municipal courtroom on an ordinary Tuesday morning and watch fifty arraignments in ninety minutes, you do not see masterminds or comic-book villains. You see a tired mother whose water was shut off, an eighteen-year-old caught with thirty pills in his pocket, a man who broke a pharmacy window in twenty-degree frost.
              </p>
              <p>
                You see human beings responding, almost mathematically, to the conditions of their environment.
              </p>
            </div>
          </div>

          {/* Editorial Margin Column (Right) */}
          <div className="lg:col-span-5 lg:pl-8 space-y-10">
            {/* Margin Pull Quote */}
            <div className="border-l border-[#111] pl-6 py-2 my-2">
              <blockquote className="font-serif text-2xl sm:text-3xl text-[#111] italic leading-snug">
                "Crime is not a disease that infects the blood. It is a symptom of a torn social contract."
              </blockquote>
              <cite className="block text-xs uppercase tracking-widest text-[#7A7873] font-sans not-italic mt-4">
                Field Notes, Cook County Criminal Court
              </cite>
            </div>

            {/* Archival Documentary Photo */}
            <figure className="border-t border-b border-[#111]/20 py-4 space-y-3">
              <div className="overflow-hidden border border-[#111]/20 bg-[#EAE5DB]">
                <img
                  src="/images/migrant-mother.jpg"
                  alt="Dorothea Lange's 1936 Migrant Mother portrait"
                  className="w-full h-72 sm:h-80 object-cover object-top filter grayscale contrast-105 hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs text-[#7A7873] font-sans leading-relaxed">
                <span className="font-medium text-[#111] block mb-0.5">Fig 1.1 — The Face of Structural Deprivation</span>
                Dorothea Lange's 1936 portrait <em>Migrant Mother</em>. When legal avenues to basic survival collapse, deviance becomes a survival adaptation rather than a moral choice.
                <span className="block text-[10px] uppercase tracking-wider text-[#111]/50 mt-1">Photo: Library of Congress Prints & Photographs Division</span>
              </figcaption>
            </figure>

            {/* Quiet Context Note */}
            <div className="bg-[#EAE5DB]/60 p-6 sm:p-7 rounded-none border-t border-[#111]/20 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold block">
                The Working Thesis
              </span>
              <p className="text-xs sm:text-sm text-[#3A3A38] font-sans leading-relaxed">
                If criminality were an inherent flaw of individual character, crime rates would remain uniform across time and geography. They do not. They spike and drop in lockstep with school funding, housing affordability, employment options, and untreated public health crises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
