import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Terminal, Lock, CheckCircle2 } from 'lucide-react';

export const LoadingScreen = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([]);

  const messages = [
    "INITIALIZING INVESTIGATIVE DATABASE...",
    "AUTHENTICATING EVIDENCE ARCHIVES [DOJ-CRIM-2026]...",
    "DECRYPTING HISTORICAL CASE DOSSIERS...",
    "ANALYZING CRIMINOLOGICAL STRAIN THEORIES...",
    "CLEARANCE VERIFIED: WELCOME, INVESTIGATOR."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < messages.length - 1) {
          setLogs((l) => [...l, messages[prev]]);
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-[#07080a] text-white flex flex-col items-center justify-center p-6 select-none"
      >
        {/* Subtle grid and red ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 noir-grain opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-md w-full bg-[#0e1117] border border-red-950/70 p-6 sm:p-8 rounded-lg shadow-2xl shadow-red-950/30">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-red-950/50 border border-red-700/50 flex items-center justify-center text-red-500">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-red-500 block">Classified Portal</span>
                <span className="font-serif text-sm tracking-wide text-zinc-200">Crime & Society Dossier</span>
              </div>
            </div>
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
              LVL-4
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-zinc-900 rounded-full h-2 mb-6 overflow-hidden border border-zinc-800">
            <motion.div
              className="bg-gradient-to-r from-red-600 to-amber-500 h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / messages.length) * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            />
          </div>

          {/* Terminal log messages */}
          <div className="font-mono text-xs text-zinc-300 space-y-2 mb-6 min-h-[110px] bg-black/60 p-3 rounded border border-zinc-900">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-center gap-2 text-zinc-400">
                <span className="text-red-500 font-bold">›</span>
                <span>{log}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-amber-400 animate-pulse">
              <span className="text-red-500 font-bold">›</span>
              <span>{messages[step]}</span>
              <span className="inline-block w-2 h-4 bg-amber-400 animate-flicker ml-1" />
            </div>
          </div>

          {/* Skip button */}
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500 font-mono">ENCRYPTED // SHA-256</span>
            <button
              onClick={onComplete}
              className="text-zinc-400 hover:text-red-400 underline underline-offset-4 font-mono transition-colors"
            >
              Skip Intro [ESC]
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
