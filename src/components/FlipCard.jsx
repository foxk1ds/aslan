import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PackageCheck, 
  ShieldAlert, 
  Terminal, 
  Briefcase, 
  Network, 
  RotateCw, 
  FileText, 
  AlertTriangle,
  Lightbulb
} from 'lucide-react';

const iconMap = {
  PackageCheck,
  ShieldAlert,
  Terminal,
  Briefcase,
  Network
};

export const FlipCard = ({ crime }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = iconMap[crime.icon] || FileText;

  const handleToggle = () => setIsFlipped(!isFlipped);

  return (
    <div 
      className="perspective-1000 w-full h-[470px] cursor-pointer group"
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle();
        }
      }}
      aria-label={`${crime.title}: Click to flip for case study`}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-all duration-700 rounded-xl"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-xl bg-gradient-to-b from-noir-850 to-noir-900 dark:from-[#11141c] dark:to-[#0c0e14] border border-zinc-800 dark:border-zinc-800/80 p-6 flex flex-col justify-between shadow-lg hover:shadow-glow-red hover:border-red-600/40 transition-all duration-300">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-950/40 text-red-400 border border-red-800/40 uppercase tracking-wider">
                {crime.badge}
              </span>
              <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                <IconComponent className="w-5 h-5" />
              </div>
            </div>

            {/* Title & Tagline */}
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-red-400 transition-colors">
              {crime.title}
            </h3>
            <p className="text-xs text-amber-400/90 font-mono mb-4 italic">
              "{crime.tagline}"
            </p>

            {/* Definition */}
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              {crime.definition}
            </p>

            {/* Subcategories tags */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {crime.subcategories.map((sub, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Flip Call to Action */}
          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-red-400">
              <AlertTriangle className="w-3.5 h-3.5" />
              See Real Example
            </span>
            <span className="flex items-center gap-1 hover:text-white transition-colors">
              Flip File <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-xl bg-gradient-to-b from-[#141214] to-[#0c0a0c] border border-amber-600/40 p-6 flex flex-col justify-between shadow-glow-amber text-zinc-200">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-3 border-b border-amber-900/40 pb-2">
              <span className="font-mono text-[11px] tracking-widest text-amber-500 uppercase flex items-center gap-1 font-bold">
                ★ CASE EVIDENCE DOSSIER
              </span>
              <span className="font-mono text-[10px] text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                ARCHIVAL
              </span>
            </div>

            {/* Real Case Name & Perps */}
            <h4 className="font-serif text-lg font-bold text-amber-300 leading-snug mb-1">
              {crime.realExample.name}
            </h4>
            <div className="font-mono text-xs text-zinc-400 mb-3">
              <span className="text-zinc-500">Subject:</span> {crime.realExample.perpetrator}
            </div>

            {/* Context */}
            <div className="text-xs text-zinc-300 leading-relaxed mb-3 bg-black/40 p-3 rounded border border-zinc-800/80">
              <p className="line-clamp-4">{crime.realExample.context}</p>
            </div>

            {/* Significance */}
            <div className="space-y-1 text-xs">
              <span className="text-[11px] font-mono font-bold text-amber-400 uppercase flex items-center gap-1">
                <Lightbulb className="w-3 h-3 text-amber-400" /> Societal Significance
              </span>
              <p className="text-zinc-400 leading-relaxed line-clamp-3">
                {crime.realExample.significance}
              </p>
            </div>
          </div>

          {/* Bottom Flip Back */}
          <div className="pt-3 border-t border-amber-900/40 flex items-center justify-between text-xs font-mono text-amber-400">
            <span>Primary Focus: {crime.title}</span>
            <span className="flex items-center gap-1 hover:text-white transition-colors">
              Return <RotateCw className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
