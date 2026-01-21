// "use client";

// import { useEffect } from "react";

// export default function MouseGlow() {
//   useEffect(() => {
//     const glow = document.createElement("div");
//     glow.style.position = "fixed";
//     glow.style.width = "400px";
//     glow.style.height = "400px";
//     glow.style.borderRadius = "50%";
//     glow.style.pointerEvents = "none";
//     glow.style.background = "radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)";
//     glow.style.transform = "translate(-50%, -50%)";
//     glow.style.zIndex = "10";
//     document.body.appendChild(glow);

//     const move = (e) => {
//       glow.style.left = `${e.clientX}px`;
//       glow.style.top = `${e.clientY}px`;
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return null;
// }


"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const trailCount = 20;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement("div");

      Object.assign(el.style, {
        position: "fixed",
        width: "18px",
        height: "18px",
        borderRadius: "999px",
        pointerEvents: "none",
        background:
          "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)",
        filter: "blur(6px)",
        opacity: `${1 - i / trailCount}`,
        zIndex: "5",
        transform: "translate(-50%, -50%)",
      });

      document.body.appendChild(el);
      trails.push({ el, x: 0, y: 0 });
    }

    let mouseX = 0;
    let mouseY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      trails.forEach((trail, index) => {
        trail.x += (x - trail.x) * 0.35;
        trail.y += (y - trail.y) * 0.35;

        trail.el.style.left = `${trail.x}px`;
        trail.el.style.top = `${trail.y}px`;

        x = trail.x;
        y = trail.y;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      trails.forEach((t) => document.body.removeChild(t.el));
    };
  }, []);

  return null;
}
