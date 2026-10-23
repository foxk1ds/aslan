import React from 'react';
import { motion } from 'framer-motion';
import { caseChapters } from '../data/caseFiles';

export const SectionCases = () => {
  return (
    <section id="cases" className="relative border-b border-[#111]/15">
      {/* ================= SECTION 04 OVERVIEW & CASE 1: WATERGATE ================= */}
      <div className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {/* Section Marker */}
          <div>
            <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-12 sm:mb-16">
              <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
                04
              </span>
              <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
                Three Case Chapters
              </span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111] mb-6">
                The anatomy of three failures.
              </h2>
              <p className="text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
                Abstract sociological theories only reveal their teeth when examined through real human choices. Here are three cases that forever altered American law, finance, and flight.
              </p>
            </div>
          </div>

          {/* Sub-Chapter Divider Line with Tag */}
          <div className="pt-12 border-t border-[#111]/20">
            {/* Case I Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold">
                <span>{caseChapters[0].num}</span>
                <span>•</span>
                <span>{caseChapters[0].year}</span>
                <span>•</span>
                <span className="text-[#111]/60">{caseChapters[0].location}</span>
              </div>

              {/* Grouped Headline and Subtitle Lockup */}
              <div className="space-y-3 max-w-3xl">
                <h3 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight text-[#111]">
                  {caseChapters[0].title}
                </h3>
                <p className="text-base sm:text-lg text-[#7A7873] font-sans leading-relaxed">
                  {caseChapters[0].subtitle}
                </p>
              </div>

              <div className="w-16 h-[2px] bg-[#B3261E]" />
            </div>

            {/* Primary Archival Lead Photo */}
            <figure className="my-10 sm:my-14 space-y-3">
              <div className="overflow-hidden border border-[#111]/20 bg-[#EAE5DB]">
                <img
                  src={caseChapters[0].heroImage.src}
                  alt={caseChapters[0].heroImage.alt}
                  className="w-full h-80 sm:h-[440px] object-cover filter grayscale contrast-105"
                  loading="lazy"
                />
              </div>
              <figcaption className="text-xs text-[#7A7873] font-sans flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span>{caseChapters[0].heroImage.caption}</span>
                <span className="text-[10px] uppercase tracking-wider text-[#111]/50">Source: {caseChapters[0].heroImage.credit}</span>
              </figcaption>
            </figure>

            {/* Story & Evidence Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6 text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65] max-w-prose">
                {caseChapters[0].story.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="lg:col-span-5 space-y-8 lg:pl-6 border-l border-[#111]/20">
                <blockquote className="font-serif text-2xl text-[#111] italic leading-snug">
                  "{caseChapters[0].pullquote}"
                </blockquote>

                {/* Secondary Nixon Tape Transcript Photo */}
                <figure className="space-y-2 border-t border-b border-[#111]/15 py-4">
                  <div className="overflow-hidden border border-[#111]/20 bg-[#EAE5DB]">
                    <img
                      src={caseChapters[0].secondaryImage.src}
                      alt={caseChapters[0].secondaryImage.alt}
                      className="w-full h-56 object-cover object-top filter grayscale contrast-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="text-[11px] text-[#7A7873] font-sans">
                    {caseChapters[0].secondaryImage.caption}
                  </figcaption>
                </figure>

                <div className="pt-2 space-y-4">
                  <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-bold block">
                    Evidentiary Facts
                  </span>
                  <dl className="space-y-3 text-xs sm:text-sm font-sans">
                    {caseChapters[0].facts.map((f, fIdx) => (
                      <div key={fIdx} className="flex justify-between border-b border-[#111]/10 pb-2 gap-4">
                        <dt className="text-[#7A7873]">{f.label}</dt>
                        <dd className="text-[#111] font-medium text-right">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CASE 2: ENRON (Full-Bleed Noir Night Chapter) ================= */}
      <article className="py-28 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#0D0E10] text-[#F4F0E8] border-b border-white/10 select-none">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold">
            <span>{caseChapters[1].num}</span>
            <span>•</span>
            <span>{caseChapters[1].year}</span>
            <span>•</span>
            <span className="text-[#F4F0E8]/60">{caseChapters[1].location}</span>
          </div>

          {/* Grouped Headline and Subtitle Lockup */}
          <div className="space-y-3 max-w-3xl">
            <h3 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight text-[#F4F0E8]">
              {caseChapters[1].title}
            </h3>
            <p className="text-base sm:text-lg text-[#F4F0E8]/60 font-sans leading-relaxed">
              {caseChapters[1].subtitle}
            </p>
          </div>

          <div className="w-16 h-[2px] bg-[#B3261E]" />

          {/* Dramatic Skyscraper Photo */}
          <figure className="my-10 sm:my-14 space-y-3">
            <div className="overflow-hidden border border-white/20 bg-black">
              <img
                src={caseChapters[1].heroImage.src}
                alt={caseChapters[1].heroImage.alt}
                className="w-full h-80 sm:h-[460px] object-cover filter contrast-125 brightness-90 hover:brightness-100 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <figcaption className="text-xs text-[#F4F0E8]/60 font-sans flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span>{caseChapters[1].heroImage.caption}</span>
              <span className="text-[10px] uppercase tracking-wider text-white/40">Credit: {caseChapters[1].heroImage.credit}</span>
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
            <div className="lg:col-span-7 space-y-6 text-[18px] sm:text-[20px] text-[#F4F0E8]/85 font-sans leading-[1.65] max-w-prose">
              {caseChapters[1].story.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-8 lg:pl-6 border-l border-white/15">
              <blockquote className="font-serif text-2xl text-[#F4F0E8] italic leading-snug">
                "{caseChapters[1].pullquote}"
              </blockquote>

              <div className="pt-6 border-t border-white/15 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-bold block">
                  The Aftermath In Numbers
                </span>
                <dl className="space-y-3 text-xs sm:text-sm font-sans">
                  {caseChapters[1].facts.map((f, fIdx) => (
                    <div key={fIdx} className="flex justify-between border-b border-white/10 pb-2 gap-4">
                      <dt className="text-[#F4F0E8]/50">{f.label}</dt>
                      <dd className="text-[#F4F0E8] font-medium text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ================= CASE 3: D.B. COOPER (Stark Minimalist Aviation Layout) ================= */}
      <article className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold">
            <span>{caseChapters[2].num}</span>
            <span>•</span>
            <span>{caseChapters[2].year}</span>
            <span>•</span>
            <span className="text-[#111]/60">{caseChapters[2].location}</span>
          </div>

          {/* Grouped Headline and Subtitle Lockup */}
          <div className="space-y-3 max-w-3xl">
            <h3 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95] tracking-tight text-[#111]">
              {caseChapters[2].title}
            </h3>
            <p className="text-base sm:text-lg text-[#7A7873] font-sans leading-relaxed">
              {caseChapters[2].subtitle}
            </p>
          </div>

          <div className="w-16 h-[2px] bg-[#B3261E]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">
            <div className="lg:col-span-7 space-y-6 text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65] max-w-prose">
              {caseChapters[2].story.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-8 lg:pl-6 border-l border-[#111]/20">
              {/* FBI Composite Sketch Photo */}
              <figure className="space-y-3">
                <div className="overflow-hidden border border-[#111]/20 bg-[#EAE5DB]">
                  <img
                    src={caseChapters[2].heroImage.src}
                    alt={caseChapters[2].heroImage.alt}
                    className="w-full h-80 object-contain bg-[#111]/5 p-2 filter grayscale contrast-110"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-xs text-[#7A7873] font-sans leading-relaxed">
                  <span className="font-medium text-[#111] block mb-0.5">FBI Exhibit // Composite B</span>
                  {caseChapters[2].heroImage.caption}
                  <span className="block text-[10px] uppercase tracking-wider text-[#111]/50 mt-1">Source: {caseChapters[2].heroImage.credit}</span>
                </figcaption>
              </figure>

              <blockquote className="font-serif text-2xl text-[#111] italic leading-snug">
                "{caseChapters[2].pullquote}"
              </blockquote>

              <div className="pt-6 border-t border-[#111]/15 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-bold block">
                  Flight Telemetry & Investigation
                </span>
                <dl className="space-y-3 text-xs sm:text-sm font-sans">
                  {caseChapters[2].facts.map((f, fIdx) => (
                    <div key={fIdx} className="flex justify-between border-b border-[#111]/10 pb-2 gap-4">
                      <dt className="text-[#7A7873]">{f.label}</dt>
                      <dd className="text-[#111] font-medium text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
