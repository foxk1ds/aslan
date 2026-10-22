import React, { useState } from 'react';
import { mlaSources } from '../data/sources';

export const SectionSources = () => {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="sources" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            09
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            Academic Attribution
          </span>
        </div>

        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111]">
            Works Cited
          </h2>
          <p className="text-[17px] sm:text-[19px] text-[#3A3A38] font-sans max-w-prose leading-relaxed">
            All statistical figures, longitudinal datasets, and theoretical frameworks adhere to the Modern Language Association (MLA 9th Edition) citation standards.
          </p>
        </div>

        {/* Clean MLA Citation Entries with Hanging Indents */}
        <div className="border-t border-[#111] pt-8 space-y-10">
          {mlaSources.map((source, idx) => (
            <div key={source.id} className="space-y-3 group">
              <div className="flex items-center justify-between text-xs font-sans text-[#7A7873]">
                <span className="uppercase tracking-widest">Entry [{idx + 1}]</span>
                <button
                  onClick={() => handleCopy(source.id, source.entry)}
                  className="hover:text-[#B3261E] transition-colors"
                >
                  {copiedId === source.id ? "✓ Copied to Clipboard" : "Copy MLA"}
                </button>
              </div>

              {/* Hanging Indent Citation */}
              <p className="font-serif text-lg sm:text-xl text-[#111] leading-relaxed pl-8 -indent-8">
                {source.entry}
              </p>

              {/* Research Note */}
              <div className="pl-8 text-xs font-sans text-[#7A7873]">
                <span>Investigative Note: {source.note}</span>
                {source.url && (
                  <span className="ml-2 text-[#B3261E] hover:underline cursor-pointer">
                    <a href={source.url} target="_blank" rel="noreferrer">↗ Primary Repository</a>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
