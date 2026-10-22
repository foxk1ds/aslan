import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  ArrowRight, 
  Search, 
  Fingerprint, 
  FileText, 
  Scale, 
  BarChart2, 
  HelpCircle, 
  Sparkles,
  Flame,
  ChevronDown
} from 'lucide-react';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';
import { projectMeta } from '../data/projectMeta';
import { crimeTypes } from '../data/typesOfCrime';
import { caseFiles } from '../data/caseFiles';

export const Home = () => {
  // Typewriter effect state
  const targetText = "Why Do People Commit Crimes?";
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= targetText.length) {
        setDisplayText(targetText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#06080a] via-[#0b0e14] to-[#0c0e12]">
        {/* Cinematic Noir Vignette & Radial Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(220,38,38,0.18)_0%,transparent_65%)] pointer-events-none" />
        
        {/* Subtle Scanline / Film Grain Overlay */}
        <div className="absolute inset-0 noir-grain opacity-50 pointer-events-none" />

        {/* Ambient Flickering Emergency / Noir Lamp */}
        <div className="absolute top-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-flicker" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Top Dossier Header Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-400 font-mono text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.3)] select-none"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <Fingerprint className="w-3.5 h-3.5" />
            Special English Research Dossier // Case #2026-ENG
          </motion.div>

          {/* Main Animated Typewriter Title with Noir Flickering Glow */}
          <div className="min-h-[140px] sm:min-h-[160px] flex items-center justify-center">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-2xl">
              <span className="relative">
                {displayText}
                <span className="inline-block w-1 sm:w-1.5 h-10 sm:h-16 bg-red-500 ml-1.5 align-middle animate-flicker" />
              </span>
            </h1>
          </div>

          {/* Subtitle / Documentary Teaser */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingDone ? 1 : 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-base sm:text-xl text-zinc-300 font-sans max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Beyond the headlines and crime scene tape lies a profound question of human nature: 
            Are criminals shaped by <span className="text-red-400 font-medium">innate morality</span>, 
            or is lawbreaking the inevitable symptom of <span className="text-amber-400 font-medium">socio-economic inequality</span>?
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/types"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-mono text-sm tracking-wider uppercase font-bold shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] transform hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <span>Begin the Investigation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/case-files"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-sm tracking-wider uppercase font-medium hover:border-zinc-500 transition-all w-full sm:w-auto"
            >
              <FileText className="w-4 h-4 text-amber-500" />
              <span>Inspect Case Files</span>
            </Link>
          </motion.div>

          {/* Down Indicator */}
          <div className="pt-12 text-zinc-500 flex flex-col items-center gap-1 animate-bounce">
            <span className="font-mono text-[10px] tracking-widest uppercase">Scroll to inspect archive</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider tilt={-1.5} />

      {/* ================= INVESTIGATIVE FRAMEWORK ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold block">
            Criminological Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Anatomy of Deviance & Justice
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            This analytical project synthesizes sociology, legal history, and empirical data into eight distinct thematic chapters.
          </p>
        </div>

        {/* 6 Core Chapter Teasers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link
            to="/types"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-red-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-red flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                  Chapter 01
                </span>
                <span className="p-2 rounded bg-red-950/60 border border-red-800/40 text-red-400 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                Types of Crime
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Interactive 3D flip dossiers examining Property, Violent, Cyber, White-Collar, and Transnational Organized crime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-red-400">
              <span>5 Typology Cards</span>
              <span>Flip Files →</span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/causes"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-amber-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-amber flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
                  Chapter 02
                </span>
                <span className="p-2 rounded bg-amber-950/60 border border-amber-800/40 text-amber-400 group-hover:scale-110 transition-transform">
                  <Search className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Root Causes & Theories
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                An animated timeline examining Strain Theory, Differential Association, poverty, mental healthcare gaps, and chemical addiction.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-amber-400">
              <span>Vertical Timeline</span>
              <span>Trace Origins →</span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/case-files"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-red-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-red flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                  Chapter 03
                </span>
                <span className="p-2 rounded bg-red-950/60 border border-red-800/40 text-red-400 group-hover:scale-110 transition-transform">
                  <FileText className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                Historical Case Files
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Classified detective folders: Watergate, Enron, D.B. Cooper skyjacking, the Great Train Robbery, and SWIFT cyber heist.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-red-400">
              <span>5 Modal Dossiers</span>
              <span>Open Evidence →</span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/statistics"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-amber-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-amber flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
                  Chapter 04
                </span>
                <span className="p-2 rounded bg-amber-950/60 border border-amber-800/40 text-amber-400 group-hover:scale-110 transition-transform">
                  <BarChart2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Empirical Statistics
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Interactive Recharts tracking four decades of violent crime drops, cybercrime spikes, and recidivism differences.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-amber-400">
              <span>Charts & Counters</span>
              <span>Analyze Trends →</span>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/solutions"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-red-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-red flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-bold">
                  Chapter 05
                </span>
                <span className="p-2 rounded bg-red-950/60 border border-red-800/40 text-red-400 group-hover:scale-110 transition-transform">
                  <Scale className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                Societal Solutions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                The 5 pillars of systemic prevention: community policing, judicial reform, early childhood education, and restorative justice.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-red-400">
              <span>Interactive Accordion</span>
              <span>Explore Reforms →</span>
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            to="/quiz"
            className="group relative bg-[#11141c] hover:bg-[#151923] border border-zinc-800 hover:border-amber-600/50 p-6 sm:p-7 rounded-xl transition-all duration-300 hover:shadow-glow-amber flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest font-bold">
                  Chapter 06
                </span>
                <span className="p-2 rounded bg-amber-950/60 border border-amber-800/40 text-amber-400 group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-4 h-4" />
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                Investigative Quiz
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Test your criminological knowledge with 10 questions featuring immediate feedback, score analysis, and instant retry.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-amber-400">
              <span>10 Questions</span>
              <span>Test Clearance →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="EVIDENCE VERIFIED // MLA 9TH EDITION BIBLIOGRAPHY // SENIOR ENGLISH SEMINAR //" tilt={1.2} />

      {/* ================= STUDENT ESSAY SPOTLIGHT BANNER ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-red-950/40 via-noir-850 to-amber-950/30 border border-red-900/40 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Editorial Conclusion & Thesis
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-relaxed">
              "A civilization is not judged by the height of its prison walls, but by the courage with which it dismantles the despair that builds them."
            </blockquote>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans max-w-2xl">
              Read the full synthesis essay arguing for structural reform over reflexive punishment in the student opinion chapter.
            </p>
            <div className="pt-2">
              <Link
                to="/opinion"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-red-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Read the Student Essay & Conclusion →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
