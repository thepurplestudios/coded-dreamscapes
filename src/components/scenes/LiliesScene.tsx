"use client";

import Float from "@/components/motion/Float";

import Lily from "../objects/Lily";
import LilyPad from "../objects/LilyPad";
import WaterRipple from "../objects/WaterRipple";
import Fish from "../objects/Fish";

export default function LiliesScene() {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
        bg-gradient-to-b
        from-[#B9E4F5]
        via-[#8CCEDF]
        to-[#5FAFC7]
      "
    >
      {/* Water texture */}
      <div
        className="
          absolute
          inset-0
          opacity-10
          bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
          bg-[length:40px_40px]
        "
      />

      {/* Ripples */}
      <div className="absolute left-[18%] top-[60%]">
        <WaterRipple />
      </div>

      <div className="absolute left-[48%] top-[72%]">
        <WaterRipple />
      </div>

      <div className="absolute right-[15%] top-[68%]">
        <WaterRipple />
      </div>

      {/* Lilypad 1 */}
      <div className="absolute left-[20%] top-[65%]">
        <Float>
          <LilyPad />
        </Float>

        <div className="absolute left-5 top-4">
          <Lily />
        </div>
      </div>

      {/* Lilypad 2 */}
      <div className="absolute right-[18%] top-[70%]">
        <Float delay={1}>
          <LilyPad />
        </Float>

        <div className="absolute left-5 top-4">
          <Lily />
        </div>
      </div>

      {/* Lilypad 3 */}
      <div className="absolute left-[48%] top-[78%]">
        <Float delay={2}>
          <LilyPad />
        </Float>

        <div className="absolute left-5 top-4">
          <Lily />
        </div>
      </div>

      {/* Small background pads */}
      <div className="absolute left-[35%] top-[58%] scale-75 opacity-70">
        <Float delay={0.5}>
          <LilyPad />
        </Float>
      </div>

      <div className="absolute right-[35%] top-[55%] scale-75 opacity-70">
        <Float delay={1.5}>
          <LilyPad />
        </Float>
      </div>

      {/* Goldfish */}
      <div className="absolute left-[18%] top-[78%] opacity-60 blur-[1px]">
        <Fish />
      </div>

      <div className="absolute right-[15%] top-[72%] scale-75 opacity-50 blur-[1px]">
        <Fish />
      </div>
    </section>
  );
}
