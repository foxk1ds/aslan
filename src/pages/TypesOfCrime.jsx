import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, ShieldAlert, Sparkles, Filter, Info } from 'lucide-react';
import { crimeTypes } from '../data/typesOfCrime';
import { FlipCard } from '../components/FlipCard';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const TypesOfCrime = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTypes = activeFilter === 'all'
    ? crimeTypes
    : crimeTypes.filter((c) => c.color === activeFilter || c.id === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest">
          <ShieldAlert className="w-3.5 h-3.5" />
          Typology & Criminological Taxonomy
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Major Categories of Crime
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          In legal jurisprudence, offenses are stratified by intent, victim impact, and structural mechanism. 
          Inspect the dossier cards below to analyze definitions, subcategories, and celebrated historical precedents.
        </p>

        {/* Tip banner */}
        <div className="inline-flex items-center gap-2 bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs font-mono px-4 py-2 rounded-lg shadow-sm">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Interactive Dossier: Click or tap any card to flip and examine real-world historical cases.</span>
        </div>
      </div>

      {/* 3D Flip Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTypes.map((crime) => (
          <motion.div
            key={crime.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FlipCard crime={crime} />
          </motion.div>
        ))}
      </div>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="CLASSIFICATION MATRIX // LEGAL JURISPRUDENCE // FORENSIC ANALYSIS //" tilt={-1} />

      {/* Typology Comparative Matrix */}
      <div className="mt-12 bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-8">
        <h3 className="font-serif text-2xl font-bold text-white mb-2">
          Comparative Typology Matrix
        </h3>
        <p className="text-xs text-zinc-400 mb-6 font-mono">
          High-level overview of legal severity, typical victims, and primary societal prevention mechanisms.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-mono uppercase tracking-wider">
                <th className="py-3 px-4">Crime Category</th>
                <th className="py-3 px-4">Primary Target</th>
                <th className="py-3 px-4">Societal Scale</th>
                <th className="py-3 px-4">Primary Prevention Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              {crimeTypes.map((c) => (
                <tr key={c.id} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="py-3.5 px-4 font-serif font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    {c.title}
                  </td>
                  <td className="py-3.5 px-4 text-zinc-300">
                    {c.subcategories[0]}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-zinc-400">
                    {c.badge}
                  </td>
                  <td className="py-3.5 px-4 text-amber-300/90">
                    {c.preventionStrategy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
