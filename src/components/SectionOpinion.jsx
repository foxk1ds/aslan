import React from 'react';
import { essayData } from '../data/opinion';

export const SectionOpinion = () => {
  return (
    <section id="opinion" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            08
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            The Analytical Verdict
          </span>
        </div>

        {/* Essay Header */}
        <div className="space-y-6">
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111]">
            {essayData.headline}
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#7A7873] italic leading-snug">
            {essayData.dek}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-[#7A7873] font-sans border-t border-b border-[#111]/15 py-3">
            <span className="text-[#111] font-semibold">By {essayData.author}</span>
            <span>•</span>
            <span>{essayData.course}</span>
            <span>•</span>
            <span>Faculty Evaluator: {essayData.evaluator}</span>
            <span>•</span>
            <span>{essayData.date}</span>
          </div>
        </div>

        {/* Essay Body with Drop Cap and One Pull Quote */}
        <article className="space-y-8 text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
          {/* First paragraph with Drop Cap */}
          <p className="drop-cap">
            {essayData.paragraphs[0]}
          </p>

          <p>{essayData.paragraphs[1]}</p>

          {/* One Big Editorial Pull Quote */}
          <div className="my-14 sm:my-20 border-y border-[#111] py-10 sm:py-14 text-center">
            <blockquote className="font-serif text-2xl sm:text-4xl text-[#111] italic leading-tight max-w-2xl mx-auto">
              "{essayData.pullquote}"
            </blockquote>
            <cite className="block text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold mt-6 not-italic">
              — {essayData.author}, Final Inquiry Thesis
            </cite>
          </div>

          <p>{essayData.paragraphs[2]}</p>
          <p>{essayData.paragraphs[3]}</p>
          <p>{essayData.paragraphs[4]}</p>
        </article>

        {/* Student Note */}
        <div className="border-t border-[#111]/15 pt-6 text-xs text-[#7A7873] font-sans flex items-center justify-between">
          <span>Student Capstone Submission // {essayData.school}</span>
          <span className="text-[#111]">MLA 9th Edition Compliant</span>
        </div>
      </div>
    </section>
  );
};
