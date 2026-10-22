import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Scale, GraduationCap, HeartHandshake, Users, CheckCircle2, AlertOctagon } from 'lucide-react';

const iconMap = {
  police: Shield,
  laws: Scale,
  education: GraduationCap,
  rehabilitation: HeartHandshake,
  community: Users
};

export const SolutionsAccordion = ({ items }) => {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const IconComponent = iconMap[item.id] || Shield;

        return (
          <div
            key={item.id}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#13161f] border-red-800/80 shadow-[0_10px_30px_rgba(220,38,38,0.15)]'
                : 'bg-[#0f1218] border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start sm:items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-red-950 text-red-400 border border-red-700/60'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs uppercase text-amber-500 font-bold">
                      {item.pillar}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1 sm:line-clamp-none">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div
                className={`p-2 rounded-full border transition-transform duration-300 shrink-0 ${
                  isOpen
                    ? 'rotate-180 bg-red-950/80 border-red-700 text-red-400'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Accordion Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="border-t border-zinc-800/80"
                >
                  <div className="p-5 sm:p-6 space-y-6 text-sm">
                    {/* Philosophical grounding */}
                    <div className="bg-black/40 border-l-4 border-amber-500 p-4 rounded-r">
                      <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block font-bold mb-1">
                        Core Societal Principle
                      </span>
                      <p className="text-zinc-200 italic font-serif">
                        "{item.corePhilosophy}"
                      </p>
                    </div>

                    {/* Mechanisms Grid */}
                    <div>
                      <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3">
                        Strategic Action Mechanisms
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {item.keyMechanisms.map((mech, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-[#181d28] p-4 rounded-lg border border-zinc-800"
                          >
                            <div className="flex items-center gap-2 text-red-400 font-semibold mb-1 text-xs">
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                              <span>{mech.name}</span>
                            </div>
                            <p className="text-zinc-300 text-xs leading-relaxed">
                              {mech.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Real-World Evidence & Challenges */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-lg">
                        <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                          ✓ Empirically Documented Case Result
                        </span>
                        <p className="text-zinc-300 text-xs leading-relaxed">
                          {item.realWorldEvidence}
                        </p>
                      </div>

                      <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg">
                        <span className="font-mono text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <AlertOctagon className="w-3.5 h-3.5 text-amber-500" />
                          Implementation Challenge
                        </span>
                        <p className="text-zinc-400 text-xs leading-relaxed">
                          {item.limitations}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
