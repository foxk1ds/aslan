import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, HeartHandshake, CheckCircle2, XCircle } from 'lucide-react';
import { solutionsData } from '../data/solutions';
import { SolutionsAccordion } from '../components/Accordion';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

export const Solutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 font-mono text-xs uppercase tracking-widest">
          <Scale className="w-3.5 h-3.5" />
          Systemic Remediation & Policy
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          How Society Confronts Crime
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          Effective crime reduction requires shifting from reactive vengeance to proactive public health interventions. 
          Explore the five pillars below to examine how modern communities are breaking cycles of incarceration.
        </p>
      </div>

      {/* Interactive Accordion for the 5 Pillars */}
      <div className="max-w-4xl mx-auto mb-16">
        <SolutionsAccordion items={solutionsData} />
      </div>

      {/* Crime Scene Tape Divider */}
      <CrimeTapeDivider text="PARADIGM SHIFT // RESTORATIVE JUSTICE // CIVIC INTERVENTION //" tilt={-1.2} />

      {/* Retributive vs. Restorative Justice Comparison Table */}
      <div className="max-w-4xl mx-auto bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-8 mt-12 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-amber-950/60 text-amber-400 border border-amber-800/40">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Retributive vs. Restorative Justice
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              The fundamental ideological divide defining 21st-century penal reform.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 font-mono uppercase tracking-wider">
                <th className="py-3 px-4">Analytical Dimension</th>
                <th className="py-3 px-4 text-red-400">Traditional Retributive Model</th>
                <th className="py-3 px-4 text-emerald-400">Modern Restorative Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                  Core Question
                </td>
                <td className="py-3.5 px-4 text-zinc-400 italic">
                  "What law was broken, who broke it, and what punishment do they deserve?"
                </td>
                <td className="py-3.5 px-4 text-emerald-300 italic">
                  "Who was harmed, what are their needs, and whose obligation is it to make things right?"
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                  Target of Offense
                </td>
                <td className="py-3.5 px-4 text-zinc-400">
                  Crime is an infraction committed strictly against the abstract state authority.
                </td>
                <td className="py-3.5 px-4 text-zinc-200">
                  Crime is a tear in the tangible fabric of interpersonal human relationships.
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                  Role of the Victim
                </td>
                <td className="py-3.5 px-4 text-zinc-400">
                  Largely peripheral; the victim serves merely as an evidentiary witness for the prosecutor.
                </td>
                <td className="py-3.5 px-4 text-zinc-200">
                  Central; victim voice guides restitution, closure, and reparative agreement.
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                  Accountability
                </td>
                <td className="py-3.5 px-4 text-zinc-400">
                  Passive endurance of prison sentence; isolation breeds lingering bitterness.
                </td>
                <td className="py-3.5 px-4 text-zinc-200">
                  Active accountability; confronting victim, offering restitution, undergoing rehabilitation.
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                  Long-term Outcome
                </td>
                <td className="py-3.5 px-4 text-red-400">
                  High recidivism (~60%), post-release unemployment, severed family ties.
                </td>
                <td className="py-3.5 px-4 text-emerald-400">
                  Significantly lower recidivism (~20%), community healing, successful reintegration.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
