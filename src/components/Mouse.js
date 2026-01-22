// "use client";

// import { useEffect } from "react";

// export default function MouseGlow() {
//   useEffect(() => {
//     const trailCount = 20;
//     const trails = [];

//     for (let i = 0; i < trailCount; i++) {
//       const el = document.createElement("div");

//       Object.assign(el.style, {
//         position: "fixed",
//         width: "18px",
//         height: "18px",
//         borderRadius: "999px",
//         pointerEvents: "none",
//         background:
//           "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)",
//         filter: "blur(6px)",
//         opacity: `${1 - i / trailCount}`,
//         zIndex: "5",
//         transform: "translate(-50%, -50%)",
//       });

//       document.body.appendChild(el);
//       trails.push({ el, x: 0, y: 0 });
//     }

//     let mouseX = 0;
//     let mouseY = 0;

//     const move = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const animate = () => {
//       let x = mouseX;
//       let y = mouseY;

//       trails.forEach((trail, index) => {
//         trail.x += (x - trail.x) * 0.35;
//         trail.y += (y - trail.y) * 0.35;

//         trail.el.style.left = `${trail.x}px`;
//         trail.el.style.top = `${trail.y}px`;

//         x = trail.x;
//         y = trail.y;
//       });

//       requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", move);
//     animate();

//     return () => {
//       window.removeEventListener("mousemove", move);
//       trails.forEach((t) => document.body.removeChild(t.el));
//     };
//   }, []);

//   return null;
// }


"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    // ❌ Disable on touch-only devices (mobile-first safe)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const trailCount = 18;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
      const el = document.createElement("div");

      Object.assign(el.style, {
        position: "fixed",
        width: "16px",
        height: "16px",
        borderRadius: "999px",
        pointerEvents: "none",
        background:
          "linear-gradient(135deg, #00f5ff, #8b5cf6, #ff0080)",
        filter: "blur(8px) saturate(160%)",
        opacity: `${1 - i / trailCount}`,
        zIndex: "5",
        transform: "translate(-50%, -50%)",
        willChange: "transform",
      });

      document.body.appendChild(el);
      trails.push({ el, x: 0, y: 0 });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      let x = mouseX;
      let y = mouseY;

      trails.forEach((trail) => {
        trail.x += (x - trail.x) * 0.3;
        trail.y += (y - trail.y) * 0.3;

        trail.el.style.left = `${trail.x}px`;
        trail.el.style.top = `${trail.y}px`;

        x = trail.x;
        y = trail.y;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      trails.forEach((t) => document.body.removeChild(t.el));
    };
  }, []);

  return null;
}
