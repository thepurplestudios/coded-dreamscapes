"use client";

import Wave from "@/components/objects/Wave";
import Horizon from "@/components/objects/Horizon";
import OceanSparkle from "@/components/objects/OceanSparkle";
import Float from "@/components/motion/Float";

export default function OceanScene() {
  return (
    <section
      className="
        relative
        h-screen
        overflow-hidden
        bg-gradient-to-b
        from-sky-200
        via-sky-100
        to-white
      "
    >
      <Horizon />

      <div className="absolute left-[20%] top-[60%]">
        <Float>
          <OceanSparkle />
        </Float>
      </div>

      <div className="absolute left-[60%] top-[68%]">
        <Float delay={1}>
          <OceanSparkle />
        </Float>
      </div>

      <Wave color="#BFE9FF" opacity={0.4} duration={18} />

      <div className="absolute bottom-[-30px] w-full">
        <Wave color="#8DD8FF" opacity={0.7} duration={14} />
      </div>

      <div className="absolute bottom-[-70px] w-full">
        <Wave color="#59B9FF" duration={10} />
      </div>
    </section>
  );
}
