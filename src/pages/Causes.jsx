import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitCommit, 
  TrendingUp, 
  ShieldCheck, 
  AlertCircle, 
  HelpCircle, 
  Scale, 
  BookOpen, 
  ChevronRight,
  Brain,
  Coins,
  GraduationCap,
  Users2,
  Activity
} from 'lucide-react';
import { crimeCauses } from '../data/causes';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

const iconMap = {
  poverty: Coins,
  education: GraduationCap,
  'peer-pressure': Users2,
  'mental-health': Brain,
  addiction: Activity
};

export const Causes = () => {
  const [selectedCause, setSelectedCause] = useState(crimeCauses[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400 font-mono text-xs uppercase tracking-widest">
          <TrendingUp className="w-3.5 h-3.5" />
          Sociological Causation Models
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Root Causes of Criminal Behavior
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          Criminologists reject the simplistic assertion that individuals break the law in a moral vacuum. 
          Trace the vertical timeline below to uncover the psychological, socio-economic, and structural drivers of crime.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative">
        {/* Central Vertical Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-red-600 via-amber-500 to-zinc-800" />

        <div className="space-y-12 lg:space-y-16">
          {crimeCauses.map((cause, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = iconMap[cause.id] || GitCommit;

            return (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node Badge (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#11141c] border-2 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)] items-center justify-center text-red-400 z-10">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Content Box */}
                <div className="w-full lg:w-5/12">
                  <div className="bg-[#11141c] border border-zinc-800 hover:border-red-600/50 rounded-xl p-6 sm:p-7 shadow-lg hover:shadow-glow-red transition-all duration-300">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs uppercase text-red-400 font-bold tracking-wider">
                        {cause.yearTag}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-amber-400 border border-zinc-800">
                        {cause.badge}
                      </span>
                    </div>

                    {/* Title & Theory */}
                    <h3 className="font-serif text-2xl font-bold text-white mb-1">
                      {cause.title}
                    </h3>
                    <div className="font-mono text-xs text-amber-400/90 mb-3 italic">
                      Foundational Theory: {cause.theory}
                    </div>

                    {/* Short & Full Analysis */}
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                      {cause.fullAnalysis}
                    </p>

                    {/* Key Statistic Banner */}
                    <div className="bg-red-950/20 border-l-4 border-red-600 p-3 rounded-r mb-4">
                      <span className="font-mono text-[11px] text-red-400 font-bold uppercase block mb-0.5">
                        Documented Empirical Impact
                      </span>
                      <p className="text-xs text-zinc-300 font-sans">
                        {cause.keyStatistic}
                      </p>
                    </div>

                    {/* Contributing Factors Accordion/Bullets */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold mb-1">
                        Direct Catalysts:
                      </span>
                      {cause.contributingFactors.map((factor, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                          <span className="text-red-500 font-bold">›</span>
                          <span>{factor}</span>
                        </div>
                      ))}
                    </div>

                    {/* Protective Countermeasure */}
                    <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-start gap-2 text-xs text-emerald-400/90 bg-emerald-950/10 p-2.5 rounded border border-emerald-900/30">
                      <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                      <div>
                        <span className="font-mono font-bold block text-[10px] uppercase text-emerald-500">
                          Protective Countermeasure:
                        </span>
                        <span className="text-zinc-300">{cause.protectiveCountermeasure}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for the other half of the timeline */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Crime Scene Tape Divider */}
      <CrimeTapeDivider text="SOCIOLOGICAL INQUIRY // CORRELATION VS CAUSATION // AP ENGLISH SEMINAR //" tilt={1} />
    </div>
  );
};
