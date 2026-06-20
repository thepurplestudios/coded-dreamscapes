"use client";

import Wave from "@/components/objects/Wave";

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
      <Wave color="#A8E0FF" opacity={0.4} />

      <div className="bottom-[-40px] absolute w-full">
        <Wave color="#74C7EC" opacity={0.6} />
      </div>

      <div className="bottom-[-80px] absolute w-full">
        <Wave color="#4DA7F3" opacity={1} />
      </div>
    </section>
  );
}
