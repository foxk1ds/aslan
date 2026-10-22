import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileText, 
  Calendar, 
  MapPin, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Award, 
  Shield, 
  ExternalLink 
} from 'lucide-react';

export const DossierModal = ({ caseItem, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!caseItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Dossier Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-3xl bg-[#11141c] border-2 border-red-900/60 rounded-xl shadow-[0_25px_60px_-15px_rgba(220,38,38,0.3)] overflow-hidden text-zinc-100"
        >
          {/* Top Dossier Tab Bar (Folder Look) */}
          <div className="bg-[#181d29] px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-950 text-red-400 border border-red-700/60 font-bold uppercase tracking-wider">
                {caseItem.caseNumber}
              </span>
              <span className="text-xs font-mono text-amber-400 hidden sm:inline">
                {caseItem.classification}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-950 text-zinc-400 hover:text-red-300 transition-colors"
              aria-label="Close Case File"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Header with Red Stamp */}
          <div className="p-6 sm:p-8 border-b border-zinc-800/80 relative">
            {/* Rubber Stamp */}
            <div className="absolute top-6 right-6 sm:right-8 transform rotate-12 border-2 sm:border-4 border-red-600/80 text-red-500 font-mono font-black text-xs sm:text-base px-2.5 sm:px-4 py-1 uppercase tracking-widest pointer-events-none rounded opacity-90 select-none">
              {caseItem.stamp}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                {caseItem.year}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                {caseItem.location}
              </span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-300">{caseItem.category}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pr-24">
              {caseItem.title}
            </h2>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-zinc-800 bg-[#0e1118] px-6 gap-2 text-xs font-mono overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              1. Overview & Actors
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`py-3 px-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              2. Evidence Timeline
            </button>
            <button
              onClick={() => setActiveTab('outcome')}
              className={`py-3 px-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'outcome'
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              3. Outcome & Verdict
            </button>
            <button
              onClick={() => setActiveTab('lesson')}
              className={`py-3 px-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
                activeTab === 'lesson'
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              4. Societal Lesson Learned
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto space-y-4 font-sans text-sm">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2">
                    Executive Incident Summary
                  </h4>
                  <p className="text-zinc-200 leading-relaxed bg-black/40 p-4 rounded-lg border border-zinc-800">
                    {caseItem.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2">
                    Key Persons of Interest & Conspirators
                  </h4>
                  <div className="bg-[#161a24] p-4 rounded-lg border border-zinc-800 text-zinc-300 font-mono text-xs">
                    {caseItem.perpetrators}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'timeline' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2">
                  Chronological Log of Evidence
                </h4>
                <div className="relative border-l-2 border-red-900/60 ml-3 pl-5 space-y-4">
                  {caseItem.evidenceTimeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
                      <div className="font-mono text-xs text-amber-400 font-semibold mb-0.5">
                        {item.date}
                      </div>
                      <p className="text-zinc-300 text-xs sm:text-sm">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'outcome' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  Judicial Verdict & Aftermath
                </div>
                <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-lg text-zinc-200 leading-relaxed">
                  {caseItem.outcome}
                </div>
              </motion.div>
            )}

            {activeTab === 'lesson' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                  <Award className="w-4 h-4 text-amber-500" />
                  Impact on Law, Ethics & Society
                </div>
                <div className="bg-amber-950/20 border border-amber-900/40 p-5 rounded-lg text-amber-100 leading-relaxed font-serif text-base italic">
                  "{caseItem.lessonLearned}"
                </div>
              </motion.div>
            )}
          </div>

          {/* Dossier Footer */}
          <div className="bg-[#0f121a] px-6 py-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
            <span>ST. JUDE ACADEMIC CASE ARCHIVES</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold transition-colors"
            >
              Close Folder [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
