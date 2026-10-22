import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { bigStats, lineTrendPoints } from '../data/statistics';

// Simple, smooth count-up component without bouncing
const StatCounter = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(value);
    const duration = 1500;
    const startTime = performance.now();
    const isFloat = value.toString().includes('.');

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Clean cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = target * ease;
      setCount(isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString());

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(isFloat ? target.toFixed(1) : target.toLocaleString());
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

export const SectionNumbers = () => {
  // SVG Line Chart coordinates math
  const width = 800;
  const height = 300;
  const padding = { top: 20, right: 30, bottom: 40, left: 45 };

  const minRate = 300;
  const maxRate = 800;

  const points = lineTrendPoints.map((pt, idx) => {
    const x = padding.left + (idx / (lineTrendPoints.length - 1)) * (width - padding.left - padding.right);
    const y = height - padding.bottom - ((pt.rate - minRate) / (maxRate - minRate)) * (height - padding.top - padding.bottom);
    return { ...pt, x, y };
  });

  const pathD = points.reduce((acc, pt, idx) => {
    return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
  }, "");

  return (
    <section id="the-numbers" className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-20 bg-[#F4F0E8] paper-grain border-b border-[#111]/15">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-baseline justify-between border-b border-[#111]/20 pb-4 mb-16 sm:mb-24">
          <span className="font-serif text-5xl sm:text-7xl text-[#111]/15 font-normal select-none">
            05
          </span>
          <span className="text-xs uppercase tracking-widest text-[#111]/60 font-sans font-medium">
            By The Numbers
          </span>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-20 sm:mb-24">
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] font-normal text-[#111] mb-6">
            Four decades of facts vs. fear.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#3A3A38] font-sans leading-[1.65]">
            Public polling routinely shows that more than seventy percent of voters believe crime has risen every year. The federal records tell a startlingly different story.
          </p>
        </div>

        {/* Big Typographic Numbers Grid (No icons, no cards!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-20 border-b border-[#111]/20">
          {bigStats.map((stat, idx) => (
            <div key={idx} className="border-t border-[#111] pt-6 space-y-3">
              <span className="font-serif text-[clamp(3.5rem,6vw,5.5rem)] text-[#111] leading-none block font-normal tracking-tight">
                <StatCounter value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#B3261E] font-bold">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm text-[#3A3A38] font-sans leading-relaxed">
                {stat.caption}
              </p>
              <span className="text-[11px] text-[#7A7873] font-sans block pt-2 border-t border-[#111]/10">
                Source: {stat.source}
              </span>
            </div>
          ))}
        </div>

        {/* One Honest Minimal SVG Line Chart Drawn On Scroll */}
        <div className="mt-20 sm:mt-28">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B3261E] font-sans font-semibold block mb-2">
              Fig. 1 — Empirical Reality
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#111] mb-2">
              Violent Crime Rate Per 100,000 People (1990–2024)
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7873] font-sans">
              Plotted from the FBI Uniform Crime Reporting Program and Bureau of Justice Statistics.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[650px] bg-[#EAE5DB]/40 p-6 border-t border-b border-[#111]/20">
              <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                {/* Horizontal gridlines */}
                {[400, 500, 600, 700].map((val) => {
                  const y = height - padding.bottom - ((val - minRate) / (maxRate - minRate)) * (height - padding.top - padding.bottom);
                  return (
                    <g key={val}>
                      <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#111" strokeOpacity="0.1" strokeDasharray="2 2" />
                      <text x={padding.left - 8} y={y + 4} textAnchor="end" className="text-[10px] font-sans fill-[#7A7873]">{val}</text>
                    </g>
                  );
                })}

                {/* Animated Line Path */}
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke="#111"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Data points & labels */}
                {points.map((pt, idx) => (
                  <g key={idx}>
                    <circle cx={pt.x} cy={pt.y} r={idx === points.length - 1 ? 4.5 : 3} fill={idx === points.length - 1 ? "#B3261E" : "#111"} />
                    <text x={pt.x} y={height - 12} textAnchor="middle" className="text-[10px] font-sans fill-[#7A7873]">
                      {pt.year}
                    </text>
                    {(idx === 0 || idx === points.length - 1) && (
                      <text x={pt.x} y={pt.y - 10} textAnchor="middle" className="text-[11px] font-sans font-bold fill-[#111]">
                        {pt.rate}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
