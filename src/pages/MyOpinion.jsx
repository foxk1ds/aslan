import React from 'react';
import { motion } from 'framer-motion';
import { Edit3, BookOpen, Quote, Sparkles, UserCheck, Calendar } from 'lucide-react';
import { projectMeta } from '../data/projectMeta';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const MyOpinion = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Student Author Header & Metadata */}
      <div className="border-b border-zinc-800 pb-8 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          Capstone Editorial Essay
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          The Architecture of Despair: Why Punishment Fails Where Community Heals
        </h1>

        {/* Byline */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="flex items-center gap-1.5 text-zinc-200 font-semibold">
            <UserCheck className="w-3.5 h-3.5 text-red-500" />
            By {projectMeta.studentName}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-500" />
            {projectMeta.date}
          </span>
          <span>•</span>
          <span className="text-amber-400/90">{projectMeta.course}</span>
        </div>

        {/* Note to student for easy editing */}
        <div className="mt-4 bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex items-start gap-2.5 text-xs font-mono text-zinc-400">
          <Edit3 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-zinc-200">Student Note:</strong> This essay serves as a complete, school-appropriate analytical argument. You can easily edit any paragraph or quotes in <code className="text-amber-400 bg-black/50 px-1 py-0.5 rounded">src/pages/MyOpinion.jsx</code>.
          </span>
        </div>
      </div>

      {/* ================= BIG PULL-QUOTE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="my-10 relative bg-gradient-to-r from-red-950/40 via-noir-850 to-amber-950/30 border-y-2 border-red-700/80 py-8 px-6 sm:px-10 rounded-lg shadow-xl"
      >
        <Quote className="w-10 h-10 text-red-500/30 absolute -top-4 left-6" />
        <blockquote className="font-serif text-2xl sm:text-3xl text-zinc-100 italic leading-snug text-center relative z-10">
          "A society that measures justice solely by the suffering it inflicts upon the wrongdoer is a society that has abandoned the hope of redemption."
        </blockquote>
        <div className="text-center font-mono text-xs uppercase tracking-widest text-amber-400 mt-4 font-bold">
          — Alex Mercer, Investigative Conclusion
        </div>
      </motion.div>

      {/* ================= EDITORIAL ESSAY BODY ================= */}
      <article className="prose prose-invert max-w-none text-zinc-300 font-sans text-base sm:text-lg leading-relaxed space-y-6">
        <p className="first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-red-500 first-letter:mr-3 first-letter:float-left">
          When we consume true-crime documentaries and sensationalized tabloid headlines, crime is almost exclusively presented as a discrete sequence of moral villainy. We are conditioned to view offenders as autonomous predators who make calculated decisions in an ethical vacuum, and our collective instinct is immediate, retaliatory exile. Yet, having synthesized four decades of criminal justice datasets and sociological research, one inescapable conclusion emerges: criminality is far less an indictment of solitary moral depravity than it is an acute symptom of systemic institutional failure.
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4 border-b border-zinc-800 pb-2">
          The Illusion of the Punitive Panacea
        </h2>
        <p>
          For over half a century, Western criminal jurisprudence has operated on the foundational premise that harsher sentences reliably deter unlawful conduct. Yet empirical reality refutes this intuition. As demonstrated by the RAND Corporation and Bureau of Justice Statistics, mandatory minimums and prolonged carceral isolation do virtually nothing to deter crime; instead, they operate as graduate academies for recidivism. When an individual is severed from family bonds, barred from employment due to a permanent felony record, and stripped of dignity, society has not eliminated a threat—it has engineered a permanent underclass.
        </p>

        {/* Secondary Callout Box */}
        <div className="bg-[#11141c] border-l-4 border-amber-500 p-5 rounded-r my-6 font-sans text-sm text-zinc-300 space-y-2">
          <strong className="font-mono text-xs uppercase tracking-wider text-amber-400 block">
            The Fiscal Incoherence of Incarceration
          </strong>
          <p>
            Taxpayers routinely spend over $45,000 annually to incarcerate a single nonviolent offender, while municipal school districts in high-poverty neighborhoods struggle on less than $14,000 per student. If deterrence were our genuine goal, redirecting even twenty percent of carceral budgets into universal early childhood education and mental health crisis response would collapse crime rates faster than any fleet of squad cars.
          </p>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4 border-b border-zinc-800 pb-2">
          Restorative Justice as Practical Necessity
        </h2>
        <p>
          Moving beyond reflexive retribution does not mean abandoning accountability or dismissing victim suffering. On the contrary, traditional courts render victims into passive spectators while state prosecutors collect fines and prison quotas. Restorative justice places the victim and the harmed community at the center of the dialogue. By requiring offenders to face the tangible human consequences of their actions and perform direct restitution, restorative models achieve what prison bars never could: genuine cognitive empathy and civic reintegration.
        </p>

        <p>
          International models corroborate this reality. In Norway, where correctional facilities prioritize education, vocational trades, and human dignity, two-year recidivism rates hover near twenty percent. In the United States, traditional retributive prisons see recidivism exceed sixty percent. To persist in methods that double re-offense rates is not tough on crime; it is willfully negligent.
        </p>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight pt-4 border-b border-zinc-800 pb-2">
          The Final Verdict: A Restored Social Contract
        </h2>
        <p>
          As students examining our civic landscape, we must possess the intellectual honesty to look past fearmongering campaign slogans. People do not risk their freedom because they delight in transgression; they do so when the legitimate social contract has broken down—when mental health crises go unanswered, when substance addiction is treated as a crime rather than a pathology, and when legitimate economic pathways are closed off.
        </p>
        <p>
          True public safety will never be secured through heavier padlocks or longer sentences. It is forged in the classroom, in the community center, in living-wage employment, and in a justice system that possesses the wisdom to heal rather than destroy.
        </p>
      </article>

      {/* Signature & Date Block */}
      <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-zinc-400 gap-4">
        <div>
          <span className="text-zinc-500">RESPECTFULLY SUBMITTED BY:</span>
          <div className="text-sm font-serif font-bold text-white">{projectMeta.studentName}</div>
          <div>Candidate for {projectMeta.course}</div>
        </div>
        <div className="text-left sm:text-right">
          <span className="text-zinc-500">FACULTY EVALUATOR:</span>
          <div className="text-sm font-serif font-bold text-white">{projectMeta.teacherName}</div>
          <div>{projectMeta.institution}</div>
        </div>
      </div>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="ARGUMENT CONCLUDED // DISSERTATION SUBMITTED // AP ENGLISH SEMINAR //" tilt={-1} />
    </div>
  );
};
