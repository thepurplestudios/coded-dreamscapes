import Image from "next/image";

export default function Portrait() {
  return (
    <div
      className="
        relative
        h-[800px]
        w-[650px]
      "
    >
      <Image
        src="/images/portrait.png"
        alt="Portrait"
        fill
        priority
        className="
          object-contain
          object-bottom
          drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]
        "
      />
    </div>
  );
}
