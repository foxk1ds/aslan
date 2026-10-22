import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingDown, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  PieChart as PieIcon,
  LineChart as LineIcon,
  Activity
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { 
  keyMetricCounters, 
  historicalTrendsData, 
  crimeCategoryData, 
  cybercrimeVectorData, 
  recidivismComparisonData 
} from '../data/statistics';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { CrimeTapeDivider } from '../components/CrimeTapeDivider';

// Custom Noir Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f121a] border border-red-800/80 p-3 rounded-lg shadow-xl text-xs font-mono">
        <p className="text-amber-400 font-bold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color || entry.fill }}>
            {entry.name}: <span className="text-white font-bold">{entry.value}</span>
            {entry.unit ? ` ${entry.unit}` : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const Statistics = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-400 font-mono text-xs uppercase tracking-widest">
          <BarChart3 className="w-3.5 h-3.5" />
          Empirical Criminological Analytics
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Crime in Numbers & Trends
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
          Public perception of crime often diverges sharply from empirical reality. 
          Analyze the data below from the FBI, Bureau of Justice Statistics, and RAND Corporation to separate media sensationalism from statistical fact.
        </p>
      </div>

      {/* ================= KEY METRIC COUNTERS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {keyMetricCounters.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-[#11141c] border border-zinc-800 hover:border-red-600/50 rounded-xl p-6 shadow-lg hover:shadow-glow-red transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider block mb-2">
                Metric #0{idx + 1}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight text-red-500 mb-2">
                <AnimatedCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>
              <h3 className="font-sans font-bold text-sm text-zinc-200 mb-2">
                {item.label}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-4">
                {item.description}
              </p>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 text-[10px] font-mono text-amber-400/80 flex items-center justify-between">
              <span className="truncate max-w-[200px]" title={item.source}>
                Source: {item.source}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Crime Tape Divider */}
      <CrimeTapeDivider text="EMPIRICAL EVIDENCE // FBI UNIFORM CRIME REPORTING // BUREAU OF JUSTICE //" tilt={-1} />

      {/* ================= CHARTS GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* CHART 1: Longitudinal Crime Rates Line Chart */}
        <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5">
                <LineIcon className="w-4 h-4" /> Historical 34-Year Trend
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                Per 100,000 citizens
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Violent vs. Property Crime Rates (1990–2024)
            </h3>
            <p className="text-xs text-zinc-400 font-sans mb-6">
              Shows the dramatic multi-decade downward trajectory across violent and property offenses since the historic peak in the early 1990s.
            </p>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalTrendsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222836" />
                  <XAxis dataKey="year" stroke="#6b7280" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Line
                    type="monotone"
                    dataKey="propertyCrime"
                    name="Property Crime Rate"
                    stroke="#f59e0b"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#f59e0b' }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="violentCrime"
                    name="Violent Crime Rate"
                    stroke="#dc2626"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#dc2626' }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            Source: FBI Uniform Crime Reporting (UCR) Program & National Crime Victimization Survey (NCVS).
          </div>
        </div>

        {/* CHART 2: Crime Frequency by Category Bar Chart */}
        <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" /> Category Frequency
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                Annual Millions
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Annual Reported Occurrences by Category
            </h3>
            <p className="text-xs text-zinc-400 font-sans mb-6">
              Property offenses (theft, vehicle theft) and modern corporate financial fraud vastly outnumber reported violent confrontations.
            </p>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={crimeCategoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222836" />
                  <XAxis dataKey="category" stroke="#6b7280" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" name="Reported Incidents (Millions)" radius={[4, 4, 0, 0]}>
                    {crimeCategoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            Source: Bureau of Justice Statistics (BJS) Annual Incident Reports & FTC Consumer Sentinel Network.
          </div>
        </div>

        {/* CHART 3: Cybercrime Vectors Pie Chart */}
        <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold flex items-center gap-1.5">
                <PieIcon className="w-4 h-4" /> Digital Attack Vectors
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                % Share of Complaints
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Breakdown of Modern Cybercrime Incidents
            </h3>
            <p className="text-xs text-zinc-400 font-sans mb-6">
              Phishing, social engineering, and fraudulent investment schemes constitute over 58% of digital offenses reported to law enforcement.
            </p>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cybercrimeVectorData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {cybercrimeVectorData.map((entry, index) => (
                      <Cell key={`pie-cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            Source: FBI Internet Crime Complaint Center (IC3) 2023 Annual Threat Report.
          </div>
        </div>

        {/* CHART 4: Recidivism Comparison Bar Chart */}
        <div className="bg-[#11141c] border border-zinc-800 rounded-xl p-6 sm:p-7 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
                <Activity className="w-4 h-4" /> 3-Year Post-Release Outcomes
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                Percentage (%)
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Recidivism Rates: Punishment vs. Education
            </h3>
            <p className="text-xs text-zinc-400 font-sans mb-6">
              Incarcerated individuals earning a college degree exhibit an 86% success rate, compared to a 67% re-arrest rate under punitive confinement alone.
            </p>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={recidivismComparisonData}
                  layout="vertical"
                  margin={{ top: 10, right: 20, left: 40, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#222836" />
                  <XAxis type="number" stroke="#6b7280" tick={{ fontSize: 11 }} domain={[0, 100]} />
                  <YAxis type="category" dataKey="approach" stroke="#6b7280" tick={{ fontSize: 10 }} width={120} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="reincarcerated" name="Re-incarcerated (%)" fill="#dc2626" stackId="a" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="rehabilitated" name="Rehabilitated (%)" fill="#10b981" stackId="a" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
            Source: RAND Corporation Meta-Analysis on Correctional Higher Education & Vera Institute of Justice.
          </div>
        </div>
      </div>
    </div>
  );
};
