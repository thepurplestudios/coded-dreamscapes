"use client";

import { useEffect, useState } from "react";

import CloudsScene from "./CloudsScene";
import OceanScene from "./OceanScene";
import LiliesScene from "./LiliesScene";
import CoffeeScene from "./CoffeeScene";

export default function SceneManager() {
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScene((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (scene === 0) {
    return <CloudsScene />;
  }

  if (scene === 2) {
    return <LiliesScene />;
  }

  if (scene === 3) {
    return <CoffeeScene />;
  }

  return <OceanScene />;
}
