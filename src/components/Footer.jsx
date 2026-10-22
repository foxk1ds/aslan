import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, BookOpen, GraduationCap, Award, Calendar, User, FileText } from 'lucide-react';
import { projectMeta } from '../data/projectMeta';

export const Footer = () => {
  return (
    <footer className="bg-[#07090c] border-t border-zinc-800 text-zinc-400 font-sans relative overflow-hidden mt-20">
      {/* Background watermark */}
      <div className="absolute right-6 -bottom-10 opacity-5 pointer-events-none select-none">
        <span className="font-mono text-9xl font-black text-white">EVIDENCE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Academic Project Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              <span className="font-serif font-bold text-lg tracking-tight">CRIME & SOCIETY</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              An analytical multimedia capstone exploring criminological theory, systemic socio-economic catalysts, and contemporary criminal justice reforms.
            </p>
            <div className="font-mono text-[11px] text-zinc-500 border border-zinc-800 p-2.5 rounded bg-black/40">
              <span className="text-red-400 font-semibold block mb-0.5">ACADEMIC CLEARANCE</span>
              School-appropriate sociological research; designed strictly for educational presentation.
            </div>
          </div>

          {/* Column 2: Classroom & Student Metadata (Placeholders) */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 font-bold">
              <GraduationCap className="w-4 h-4 text-amber-500" /> Course Dossier
            </h4>
            <div className="text-xs space-y-2 font-mono text-zinc-400 bg-zinc-900/60 p-4 rounded-lg border border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Student:</span>
                <span className="text-zinc-200 font-semibold">{projectMeta.studentName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Teacher:</span>
                <span className="text-zinc-200">{projectMeta.teacherName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Course:</span>
                <span className="text-amber-400 text-right truncate max-w-[130px]" title={projectMeta.course}>
                  {projectMeta.course}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Date:</span>
                <span className="text-zinc-300">{projectMeta.date}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 font-bold">
              <BookOpen className="w-4 h-4 text-red-500" /> Chapters
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
              <Link to="/types" className="hover:text-red-400 transition-colors">› Types of Crime</Link>
              <Link to="/causes" className="hover:text-red-400 transition-colors">› Causes</Link>
              <Link to="/case-files" className="hover:text-red-400 transition-colors">› Case Files</Link>
              <Link to="/statistics" className="hover:text-red-400 transition-colors">› Statistics</Link>
              <Link to="/solutions" className="hover:text-red-400 transition-colors">› Solutions</Link>
              <Link to="/quiz" className="hover:text-red-400 transition-colors">› Knowledge Quiz</Link>
              <Link to="/opinion" className="hover:text-red-400 transition-colors">› My Opinion</Link>
              <Link to="/sources" className="hover:text-red-400 transition-colors">› MLA Sources</Link>
            </div>
          </div>

          {/* Column 4: Guiding Inquiry */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-200 flex items-center gap-1.5 font-bold">
              <Award className="w-4 h-4 text-amber-500" /> Essential Inquiry
            </h4>
            <p className="text-xs text-zinc-300 italic font-serif leading-relaxed border-l-2 border-red-600 pl-3">
              "{projectMeta.inquiryQuestion}"
            </p>
            <div className="pt-2">
              <Link
                to="/quiz"
                className="inline-flex items-center gap-1.5 font-mono text-xs bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-700/60 px-3 py-1.5 rounded transition-all"
              >
                Take the 10-Question Quiz →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {projectMeta.academicYear} {projectMeta.institution} • {projectMeta.course}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-500">MLA 9th Edition Citations Verified</span>
            <span>•</span>
            <Link to="/sources" className="hover:text-zinc-300 underline">
              View Bibliography
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
