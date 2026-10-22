import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, FolderX, Search, Home } from 'lucide-react';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center py-16">
      <div className="max-w-md w-full bg-[#11141c] border border-red-900/60 p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
        {/* Rubber Stamp */}
        <div className="absolute top-6 right-6 transform rotate-12 border-2 border-red-600 text-red-500 font-mono text-xs font-black px-3 py-1 uppercase tracking-widest select-none">
          COLD CASE
        </div>

        <div className="w-16 h-16 rounded-2xl bg-red-950/60 border border-red-700/60 flex items-center justify-center text-red-500 mx-auto mb-6 shadow-glow-red">
          <FolderX className="w-8 h-8" />
        </div>

        <span className="font-mono text-xs text-red-400 uppercase tracking-widest block font-bold mb-2">
          Evidence Code #404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-black text-white mb-3">
          Case File Not Found
        </h1>

        <p className="text-zinc-400 text-xs sm:text-sm font-sans mb-8 leading-relaxed">
          The requested investigative document has been redacted, moved, or never existed in the official archives. Verify the URL coordinates or return to main operations.
        </p>

        <div className="space-y-3">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-lg shadow-red-950/50"
          >
            <Home className="w-4 h-4" />
            <span>Return to Headquarters</span>
          </Link>

          <Link
            to="/case-files"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-mono text-xs uppercase font-medium tracking-wider transition-all"
          >
            <Search className="w-4 h-4 text-amber-500" />
            <span>Browse Active Case Files</span>
          </Link>
        </div>
      </div>

      <CrimeTapeDivider text="EVIDENCE EXPUNGED // PERIMETER SECURED // COLD CASE REPOSITORY //" tilt={-1.5} className="mt-12" />
    </div>
  );
};
