"use client";

import { motion } from "motion/react";

export default function OceanSparkle() {
  return (
    <motion.div
      animate={{
        scale: [0.8, 1.1, 0.8],
        rotate: [0, 10, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
  text-4xl
  text-[#FFE066]
  drop-shadow-[0_0_12px_rgba(255,224,102,0.8)]
"
    >
      ✨
    </motion.div>
  );
}
