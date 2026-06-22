"use client";

import { motion } from "motion/react";

export default function CoffeeText() {
  return (
    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="select-none"
    >
      <div
        className="
        font-fredoka
          flex
          flex-col
          items-center
          leading-none
          font-black
          tracking-tight
        "
      >
        <span
          className="
            text-[52px]
            text-[#8B5E3C]
            drop-shadow-[3px_3px_0px_#5D3C25]
          "
        >
          ICED
        </span>

        <span
          className="
            text-[52px]
            text-[#8B5E3C]
            drop-shadow-[3px_3px_0px_#5D3C25]
          "
        >
          COFFEE
        </span>

        <span
          className="
            text-[52px]
            text-[#8B5E3C]
            drop-shadow-[3px_3px_0px_#5D3C25]
          "
        >
          AND
        </span>

        <span
          className="
            text-[52px]
            text-[#8B5E3C]
            drop-shadow-[3px_3px_0px_#5D3C25]
          "
        >
          CATS.
        </span>

        <div
          className="
            mt-2
            text-2xl
          "
        >
          🤎
        </div>
      </div>
    </motion.div>
  );
}
