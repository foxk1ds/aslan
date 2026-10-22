import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderLock, 
  Search, 
  Calendar, 
  MapPin, 
  FileText, 
  AlertTriangle, 
  ChevronRight,
  Filter
} from 'lucide-react';
import { caseFiles } from '../data/caseFiles';
import { DossierModal } from '../components/DossierModal';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const CaseFiles = () => {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases = activeFilter === 'all'
    ? caseFiles
    : caseFiles.filter(c => c.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest">
          <FolderLock className="w-3.5 h-3.5" />
          Classified Historical Archives
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Investigative Case Files
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          Examine five landmark criminal cases that revolutionized forensic protocols, corporate governance, aviation safety, and global cyber security. Click any dossier card to open full evidence files.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {['all', 'white-collar', 'heist', 'cybercrime'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border uppercase tracking-wider transition-all ${
                activeFilter === filter
                  ? 'bg-red-950 text-red-400 border-red-700 font-bold shadow-sm'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {filter === 'all' ? 'All Dossiers' : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Detective Dossier Folder Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map((caseItem, idx) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            onClick={() => setSelectedCase(caseItem)}
            className="group relative cursor-pointer"
          >
            {/* Folder Tab at the top */}
            <div className="w-40 h-6 bg-[#181d28] group-hover:bg-[#1f2533] border-t border-x border-zinc-700 rounded-t-lg ml-4 px-3 flex items-center justify-between text-[10px] font-mono text-zinc-400 transition-colors">
              <span className="truncate">{caseItem.caseNumber}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            </div>

            {/* Main Folder Body */}
            <div className="bg-[#11141c] group-hover:bg-[#151923] border border-zinc-800 group-hover:border-red-600/50 rounded-xl rounded-tl-none p-6 shadow-lg group-hover:shadow-glow-red transition-all duration-300 flex flex-col justify-between h-[360px] relative overflow-hidden">
              {/* Rubber Stamp */}
              <div className="absolute top-4 right-4 transform rotate-12 border-2 border-red-700/60 text-red-500/80 font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-wider select-none pointer-events-none group-hover:rotate-6 transition-transform">
                {caseItem.stamp}
              </div>

              <div>
                {/* Meta info */}
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    {caseItem.year}
                  </span>
                  <span>•</span>
                  <span className="text-zinc-500">{caseItem.category}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-red-400 transition-colors mb-3 pr-14 leading-snug">
                  {caseItem.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="truncate">{caseItem.location}</span>
                </div>

                {/* Summary snippet */}
                <p className="text-xs text-zinc-300 line-clamp-4 leading-relaxed font-sans bg-black/30 p-3 rounded border border-zinc-800/80">
                  {caseItem.summary}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between font-mono text-xs text-zinc-400 group-hover:text-white">
                <span className="flex items-center gap-1 text-red-400">
                  <FileText className="w-3.5 h-3.5" />
                  Inspect Full File
                </span>
                <span className="flex items-center text-xs text-zinc-500 group-hover:translate-x-1 transition-transform">
                  Open Dossier →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="CASE ARCHIVES // CHAIN OF CUSTODY // FORENSIC EVIDENCE PRESERVED //" tilt={-1.3} />

      {/* Modal Dossier Viewer */}
      {selectedCase && (
        <DossierModal
          caseItem={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </div>
  );
};
