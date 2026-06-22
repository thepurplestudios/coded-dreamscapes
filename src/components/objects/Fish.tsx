"use client";

import { motion } from "motion/react";

export default function Fish() {
  return (
    <motion.svg
      width="90"
      height="60"
      viewBox="0 0 180 120"
      fill="none"
      animate={{
        x: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Tail */}
      <path d="M135 60 L180 20 L170 60 L180 100 Z" fill="#FFD36B" />

      {/* Body */}
      <ellipse cx="90" cy="60" rx="55" ry="35" fill="#FFA629" />

      {/* Belly */}
      <ellipse cx="85" cy="70" rx="40" ry="18" fill="#FFD36B" opacity="0.6" />

      {/* Top fin */}
      <path d="M80 30 L100 0 L120 35 Z" fill="#FFC34D" />

      {/* Bottom fin */}
      <path d="M90 90 L110 120 L125 85 Z" fill="#FFC34D" />

      {/* Side fin */}
      <path d="M75 70 L55 95 L95 80 Z" fill="#FFD36B" />

      {/* Eye */}
      <circle cx="50" cy="52" r="8" fill="#1A1A1A" />

      <circle cx="47" cy="49" r="2" fill="white" />

      {/* Mouth */}
      <path
        d="M28 62 Q20 60 28 58"
        stroke="#E07A12"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
