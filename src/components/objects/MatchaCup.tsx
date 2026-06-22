"use client";

import { motion } from "motion/react";

export default function MatchaCup() {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="240" height="320" viewBox="0 0 240 320" fill="none">
        <defs>
          <linearGradient id="coffee" x1="120" y1="60" x2="120" y2="280">
            <stop offset="0%" stopColor="#7FAF67" />{" "}
            <stop offset="20%" stopColor="#6A2D10" />
            <stop offset="45%" stopColor="#8B461E" />
            <stop offset="70%" stopColor="#C07A43" />
            <stop offset="100%" stopColor="#5F8F49" />{" "}
          </linearGradient>

          <linearGradient id="straw" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B4A1F" />
            <stop offset="100%" stopColor="#5A2F13" />
          </linearGradient>
        </defs>

        {/* Straw */}
        <g transform="translate(82 10) rotate(-10)">
          <rect width="16" height="130" rx="8" fill="url(#straw)" />

          <rect
            x="4"
            width="3"
            height="130"
            rx="2"
            fill="rgba(255,255,255,.25)"
          />
        </g>

        <path
          d="
    M75 285
    L165 285
    L175 205
    L65 205
    Z
  "
          fill="#EEF3E4"
        />

        <path
          d="
    M65 205
    L175 205
    L185 130
    L55 130
    Z
  "
          fill="#A5C889"
        />

        <path
          d="
    M50 70
    L190 70
    L185 130
    L55 130
    Z
  "
          fill="#6D9F4B"
        />

        {/* Cream Swirl */}
        <path
          d="
    M88 165
    C118 145 148 175 138 215
    C128 245 95 240 100 205
    C105 180 122 172 132 188
  "
          fill="none"
          stroke="#F6FAEF"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.4"
        />

        <path
          d="
    M125 175
    C150 165 165 190 152 220
  "
          fill="none"
          stroke="#F9FFF4"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Top Rim */}
        <ellipse
          cx="120"
          cy="70"
          rx="72"
          ry="14"
          fill="#FFF7ED"
          stroke="#D7C0A6"
          strokeWidth="3"
        />

        <ellipse cx="120" cy="70" rx="62" ry="9" fill="#5E8E42" />

        {/* Cup Outline */}
        <path
          d="
            M50 70
            L190 70
            L165 285
            L75 285
            Z
          "
          stroke="#EFE3D3"
          strokeWidth="3"
          fill="none"
        />

        {/* Ice Cubes */}
        {[
          [70, 80],
          [100, 85],
          [130, 80],
          [150, 95],
          [85, 105],
          [120, 110],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="26"
              height="26"
              rx="4"
              fill="#FFF3E6"
              opacity="0.75"
              transform={`rotate(${12 - i * 4} ${x + 13} ${y + 13})`}
            />

            <rect
              x={x + 3}
              y={y + 3}
              width="7"
              height="7"
              rx="2"
              fill="white"
              opacity="0.4"
              transform={`rotate(${12 - i * 4} ${x + 13} ${y + 13})`}
            />

            <line
              x1={x + 6}
              y1={y + 18}
              x2={x + 18}
              y2={y + 6}
              stroke="white"
              opacity="0.25"
            />
          </g>
        ))}

        {/* Cup Rings */}
        {[110, 135, 160, 185, 210].map((y) => (
          <line
            key={y}
            x1="58"
            y1={y}
            x2="182"
            y2={y}
            stroke="rgba(255,255,255,.15)"
            strokeWidth="2"
          />
        ))}

        <path
          d="
    M90 160
    C120 145 145 175 130 205
    C115 230 90 225 95 195
    C100 175 115 170 125 185
  "
          fill="none"
          stroke="rgba(255,245,230,.45)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        <path
          d="
    M125 175
    C145 165 160 190 150 210
    C142 225 125 220 128 198
  "
          fill="none"
          stroke="rgba(255,245,230,.28)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Highlights */}
        <rect
          x="78"
          y="90"
          width="14"
          height="160"
          rx="8"
          fill="white"
          opacity="0.18"
        />

        <rect
          x="150"
          y="100"
          width="8"
          height="130"
          rx="4"
          fill="white"
          opacity="0.12"
        />

        <rect
          x="95"
          y="85"
          width="6"
          height="170"
          rx="3"
          fill="white"
          opacity="0.15"
        />

        {/* Tiny Coffee Bubbles */}
        <circle cx="95" cy="180" r="3" fill="rgba(240,255,240,.35)" />
        <circle cx="145" cy="210" r="2" fill="rgba(255,255,255,.25)" />
        <circle cx="110" cy="240" r="2" fill="rgba(255,255,255,.25)" />
      </svg>
    </motion.div>
  );
}
