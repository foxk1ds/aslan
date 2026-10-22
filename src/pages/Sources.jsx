import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Copy, Check, ExternalLink, Filter, GraduationCap, Award } from 'lucide-react';
import { sourcesBibliography } from '../data/sources';
import { projectMeta } from '../data/projectMeta';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const Sources = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(sourcesBibliography.map(s => s.category))];

  const filteredSources = selectedCategory === 'all'
    ? sourcesBibliography
    : sourcesBibliography.filter(s => s.category === selectedCategory);

  const handleCopy = (id, citation) => {
    navigator.clipboard.writeText(citation);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" />
          Academic Rigor & Verification
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Works Cited & Bibliography
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          All statistical datasets, criminological theories, and historical case records utilized in this project are documented below adhering strictly to <strong className="text-zinc-200">MLA 9th Edition</strong> citation standards.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-red-950 text-red-400 border-red-700 font-bold shadow-sm'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat === 'all' ? 'All Citations' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* MLA Works Cited List */}
      <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {projectMeta.studentName} // {projectMeta.course}
          </span>
          <span className="font-mono text-xs text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded">
            MLA 9th Edition Standard
          </span>
        </div>

        <div className="space-y-8">
          {filteredSources.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group border-b border-zinc-800/80 pb-6 last:border-b-0 space-y-3"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-red-400 font-bold uppercase tracking-wider">
                  [{idx + 1}] {item.category}
                </span>
                <button
                  onClick={() => handleCopy(item.id, item.citation)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
                  title="Copy formatted citation"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy MLA</span>
                    </>
                  )}
                </button>
              </div>

              {/* MLA Hanging Indent Citation Text */}
              <p className="font-serif text-base sm:text-lg text-zinc-200 pl-8 -indent-8 leading-relaxed selection:bg-red-800">
                {item.citation}
              </p>

              {/* Analytical Annotation */}
              <div className="bg-black/40 border-l-2 border-amber-600/80 p-3 rounded-r text-xs font-sans text-zinc-400 space-y-1">
                <span className="font-mono text-[11px] text-amber-400 font-semibold uppercase block">
                  Investigative Annotation:
                </span>
                <p>{item.annotation}</p>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-red-400 underline transition-colors pt-1"
                  >
                    <span>External Resource Node</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="ACADEMIC HONESTY // PEER-REVIEWED CITATIONS // VERIFIED DATASETS //" tilt={-1} />
    </div>
  );
};
