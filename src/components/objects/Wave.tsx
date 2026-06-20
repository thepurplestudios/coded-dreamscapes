"use client";

import { motion } from "motion/react";

type WaveProps = {
  color: string;
  opacity?: number;
  duration?: number;
};

export default function Wave({ color, opacity = 1, duration = 12 }: WaveProps) {
  return (
    <motion.svg
      viewBox="0 0 1440 320"
      className="absolute bottom-0 w-[130%]"
      animate={{
        x: [-60, 60, -60],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ opacity }}
    >
      <path
        fill={color}
        d="
        M0,224
        C120,170 240,170 360,224
        C480,278 600,278 720,224
        C840,170 960,170 1080,224
        C1200,278 1320,278 1440,224
        L1440,320
        L0,320
        Z
      "
      />
    </motion.svg>
  );
}
