"use client";

import { motion } from "motion/react";

export default function PinkBow() {
  return (
    <motion.div
      animate={{
        rotate: [-1.5, 1.5, -1.5],
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
        <defs>
          <linearGradient id="bowGradient" x1="0" y1="0" x2="260" y2="220">
            <stop offset="0%" stopColor="#FFEAF2" />
            <stop offset="50%" stopColor="#FFCFE0" />
            <stop offset="100%" stopColor="#FFB9D1" />
          </linearGradient>

          <linearGradient id="innerGradient" x1="0" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="#FFB9D1" />
            <stop offset="100%" stopColor="#F49FC0" />
          </linearGradient>
        </defs>

        {/* Left Loop */}
        <path
          d="
            M130 85
            C95 35 25 35 20 90
            C15 135 65 140 130 95
          "
          fill="url(#bowGradient)"
          stroke="#F5A7C5"
          strokeWidth="2"
        />

        {/* Right Loop */}
        <path
          d="
            M130 85
            C165 35 235 35 240 90
            C245 135 195 140 130 95
          "
          fill="url(#bowGradient)"
          stroke="#F5A7C5"
          strokeWidth="2"
        />

        {/* Inner Loop Shadows */}
        <path
          d="
            M130 88
            C102 72 55 72 42 98
            C65 108 90 105 130 95
          "
          fill="url(#innerGradient)"
          opacity="0.55"
        />

        <path
          d="
            M130 88
            C158 72 205 72 218 98
            C195 108 170 105 130 95
          "
          fill="url(#innerGradient)"
          opacity="0.55"
        />

        {/* Knot */}
        <ellipse
          cx="130"
          cy="90"
          rx="18"
          ry="24"
          fill="#FFD7E5"
          stroke="#F5A7C5"
          strokeWidth="2"
        />

        {/* Left Ribbon */}
        <path
          d="
            M118 108
            C90 145 82 175 90 210
            C110 192 118 175 128 145
            Z
          "
          fill="url(#bowGradient)"
          stroke="#F5A7C5"
          strokeWidth="2"
        />

        {/* Right Ribbon */}
        <path
          d="
            M142 108
            C170 145 178 175 170 210
            C150 192 142 175 132 145
            Z
          "
          fill="url(#bowGradient)"
          stroke="#F5A7C5"
          strokeWidth="2"
        />

        {/* Highlights */}
        <ellipse cx="80" cy="72" rx="24" ry="8" fill="white" opacity="0.35" />

        <ellipse cx="180" cy="72" rx="24" ry="8" fill="white" opacity="0.35" />

        <ellipse cx="130" cy="82" rx="8" ry="4" fill="white" opacity="0.4" />
      </svg>
    </motion.div>
  );
}
