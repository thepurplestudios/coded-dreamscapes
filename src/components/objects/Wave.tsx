"use client";

import { motion } from "motion/react";

type WaveProps = {
  color: string;
  opacity?: number;
};

export default function Wave({ color, opacity = 1 }: WaveProps) {
  return (
    <motion.svg
      viewBox="0 0 1440 320"
      className="absolute bottom-0 w-[120%]"
      animate={{
        x: [-40, 40, -40],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ opacity }}
    >
      <path
        fill={color}
        d="
          M0,192
          L80,176
          C160,160,320,128,480,138
          C640,149,800,203,960,213
          C1120,224,1280,192,1360,176
          L1440,160
          L1440,320
          L0,320
          Z
        "
      />
    </motion.svg>
  );
}
