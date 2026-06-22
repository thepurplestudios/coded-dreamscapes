export default function LilyPad() {
  return (
    <div className="relative h-24 w-24">
      <div
        className="
          h-full
          w-full
          rounded-full
          bg-[#A8D8B9]
          shadow-lg
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-0
          h-12
          w-[2px]
          -translate-x-1/2
          bg-[#88C09F]
        "
      />
    </div>
  );
}
