"use client";

import { useEffect, useState } from "react";

import CloudsScene from "./CloudsScene";
import OceanScene from "./OceanScene";

export default function SceneManager() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScene((prev) => (prev + 1) % 2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (scene === 0) {
    return <CloudsScene />;
  }

  return <OceanScene />;
}
