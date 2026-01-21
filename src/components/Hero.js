"use client";

import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center px-10">
      <div>
        <h1 className="text-5xl mb-4">Engineering systems that scale.</h1>
        <p className="opacity-70">
          Pematrix builds secure, scalable, production-grade systems.
        </p>
      </div>

      <div className="h-[500px]">
        <Spline scene="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode" />
      </div>
    </section>
  );
}
