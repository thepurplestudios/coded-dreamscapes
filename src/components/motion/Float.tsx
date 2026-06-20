"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export default function Float({
  children,
  delay = 0,
  duration = 8,
}: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [-12, 12, -12],
        x: [-6, 6, -6],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
