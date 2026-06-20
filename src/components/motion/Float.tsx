"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  delay?: number;
};

export default function Float({ children, delay = 0 }: FloatProps) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
