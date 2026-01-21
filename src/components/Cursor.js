// "use client";

// import { useEffect } from "react";

// export default function Cursor() {
//   useEffect(() => {
//     const cursor = document.createElement("div");
//     cursor.className = "fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference";
//     document.body.appendChild(cursor);

//     window.addEventListener("mousemove", (e) => {
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     });
//   }, []);

//   return null;
// }


"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");

    Object.assign(cursor.style, {
      position: "fixed",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "white",
      pointerEvents: "none",
      zIndex: "50",
      mixBlendMode: "difference",
      transform: "translate(-50%, -50%) scale(1)",
      transition: "transform 0.15s ease-out",
    });

    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
