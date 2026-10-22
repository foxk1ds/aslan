import React from 'react';
import { motion } from 'framer-motion';

export const CrimeTapeDivider = ({
  text = "CRIME SCENE // DO NOT CROSS // INVESTIGATION IN PROGRESS // FORENSIC ARCHIVE //",
  tilt = -1.2,
  className = ""
}) => {
  return (
    <div className={`relative py-6 overflow-hidden select-none my-8 ${className}`}>
      {/* Background shadow line */}
      <div className="absolute inset-x-0 h-9 bg-black/60 blur-md transform translate-y-1" />

      {/* Crime Tape Strip */}
      <div
        className="relative w-[110%] -left-[5%] bg-yellow-400 text-black py-2 shadow-2xl border-y-2 border-black flex items-center overflow-hidden font-mono text-xs sm:text-sm font-black tracking-widest uppercase transition-transform duration-300"
        style={{
          transform: `rotate(${tilt}deg)`,
        }}
      >
        <motion.div
          className="flex whitespace-nowrap gap-6 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </motion.div>
      </div>
    </div>
  );
};
