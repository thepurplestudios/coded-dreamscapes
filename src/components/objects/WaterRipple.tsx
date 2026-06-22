"use client";

import { motion } from "motion/react";

export default function WaterRipple() {
  return (
    <motion.div
      animate={{
        scale: [0.7, 1.4],
        opacity: [0.6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        h-32
        w-32
        rounded-full
        border-2
        border-white/50
      "
    />
  );
}
