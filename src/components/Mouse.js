"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.width = "400px";
    glow.style.height = "400px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background = "radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.zIndex = "10";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
