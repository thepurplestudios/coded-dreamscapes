import Portrait from "@/components/portrait/Portrait";
import SceneManager from "@/components/scenes/SceneManager";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <SceneManager />

      <div
        className="
    absolute
    inset-x-0
    bottom-0
    z-50
    flex
    justify-center
    pointer-events-none
  "
      >
        <Portrait />
      </div>
    </main>
  );
}
