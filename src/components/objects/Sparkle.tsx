export default function Sparkle() {
  return (
    <div className="relative h-4 w-4">
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white/80" />

      <div className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white/80" />
    </div>
  );
}
