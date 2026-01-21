// "use client";

// import Spline from "@splinetool/react-spline";

// export default function Hero() {
//   return (
//     <section className="min-h-screen grid md:grid-cols-2 items-center px-10">
//       <div>
//         <h1 className="text-5xl mb-4">Engineering systems that scale.</h1>
//         <p className="opacity-70">
//           Pematrix builds secure, scalable, production-grade systems.
//         </p>
//       </div>

//       <div className="h-[500px]">
//         <Spline scene="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode" />
//       </div>
//     </section>
//   );
// }


"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LIGHT_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008735/hhemqffxvuhiwr5nrxes.jpg";

const DARK_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008754/yeiysj0jwgwrc3fusdkf.jpg";

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const heroImage = theme === "dark" ? DARK_HERO : LIGHT_HERO;

  return (
    <section
      className="relative min-h-screen flex items-center px-10"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />

      {/* Content */}
      <div className="relative max-w-3xl">
        <h1 className="text-5xl mb-4">
          Engineering systems that scale.
        </h1>

        <p className="text-muted-foreground max-w-md">
          Pematrix builds secure, scalable, production-grade systems
          with enterprise-level thinking.
        </p>
      </div>
    </section>
  );
}
