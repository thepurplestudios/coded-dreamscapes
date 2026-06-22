"use client";

import Float from "@/components/motion/Float";

import Bow from "../objects/PinkBow";
import CoffeeCup from "../objects/CoffeeCup";
import MatchaCup from "../objects/MatchaCup";
import CoffeeText from "../objects/CoffeeText";
import MatchaText from "../objects/MatchaText";

export default function CoffeeScene() {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#FFF9F2]
        via-[#FFF3E0]
        to-[#e0bda2]
      "
    >
      <div className="absolute left-[8%] top-[25%]">
        <CoffeeText />
      </div>

      {/* Coffee */}
      <div className="absolute left-[18%] top-[60%]">
        <Float>
          <CoffeeCup />
        </Float>
      </div>

      {/* Matcha */}
      <div className="absolute right-[20%] top-[65%]">
        <Float delay={1}>
          <MatchaCup />
        </Float>
      </div>

      <div className="absolute right-[8%] top-[25%]">
        <MatchaText />
      </div>

      {/* Bow */}
      <div className="absolute left-[35%] top-[20%]">
        <Float delay={0.5}>
          <Bow />
        </Float>
      </div>
    </section>
  );
}
