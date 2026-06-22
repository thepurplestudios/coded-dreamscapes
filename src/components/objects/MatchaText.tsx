"use client";

import { motion } from "motion/react";

export default function MatchaText() {
  const textClass = `
    text-[48px]
    text-[#6B9E45]
    drop-shadow-[3px_3px_0px_#4E7631]
  `;

  return (
    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <div
        style={{
          fontFamily: "Fredoka",
        }}
        className="
          flex
          flex-col
          items-center
          leading-[0.9]
          tracking-tight
          text-center
          select-none
        "
      >
        <span className={textClass}>NO DRAMA,</span>

        <span className={textClass}>JUST MATCHA.</span>

        <div className="mt-2 text-2xl">💚</div>
      </div>
    </motion.div>
  );
}
