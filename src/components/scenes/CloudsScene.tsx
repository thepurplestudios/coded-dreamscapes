"use client";

import Cloud from "@/components/objects/Cloud";
import Float from "@/components/motion/Float";

export default function CloudsScene() {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-[#DCEEFF]">
      <div className="absolute left-20 top-24">
        <Float>
          <Cloud />
        </Float>
      </div>

      <div className="absolute right-20 top-48">
        <Float delay={1}>
          <Cloud />
        </Float>
      </div>

      <div className="absolute bottom-24 left-1/4">
        <Float delay={2}>
          <Cloud />
        </Float>
      </div>
    </section>
  );
}
