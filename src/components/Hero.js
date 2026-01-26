"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

// Hero Images
const LIGHT_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008735/hhemqffxvuhiwr5nrxes.jpg";

const DARK_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008754/yeiysj0jwgwrc3fusdkf.jpg";

const MotionImage = motion.create(Image);
const MotionDiv = motion.create("div");
const MotionH1 = motion.create("h1");
const MotionP = motion.create("p");

// Variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const bgVariant = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-5 sm:px-8">
      {/* BACKGROUND */}
      <MotionImage
        key={resolvedTheme}
        src={isDark ? DARK_HERO : LIGHT_HERO}
        alt="Hero background"
        fill
        priority
        className="object-cover"
        variants={bgVariant}
        initial="hidden"
        animate="visible"
      />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-5 sm:px-8">
        <div className="w-full max-w-4xl mt-28 md:mt-10">

          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6"
          >
            <button
              style={{
                borderColor: "hsl(var(--ring))",
                backgroundColor: "hsl(var(--primary) / 20%)",
              }}
              className="flex items-center gap-2 rounded-full border px-4 py-2"
            >
              <FaStar size={12} style={{ color: "hsl(var(--primary))" }} />
              <span
                style={{ color: "hsl(var(--primary))" }}
                className="text-sm font-medium"
              >
                Digital Transformation Experts
              </span>
            </button>
          </MotionDiv>

          <MotionH1
            style={{ color: "hsl(var(--secondary-foreground))" }}
            className="
              font-display
              text-3xl sm:text-5xl md:text-6xl lg:text-7xl
              font-bold md:font-black
              leading-tight
              mb-6
            "
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            Build, Scale, and{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Thrive</span>
            <span className="block">
              with{" "}
              <span style={{ color: "hsl(var(--primary))" }}>
                Pematrix
              </span>
            </span>
          </MotionH1>

          <MotionP
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="max-w-2xl text-base sm:text-lg font-medium mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            We partner with ambitious companies to craft digital experiences
            that captivate users, optimize operations, and accelerate growth.
            From strategy to execution, we’re with you every step.
          </MotionP>

          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-col sm:flex-row items-start gap-7"
          >
            <a
              href="#cta"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--secondary))",
              }}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-4 font-bold transition-transform hover:scale-[1.03]"
            >
              Start Your Project
              <FaArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="font-bold px-8 py-4 border rounded-xl transition-transform hover:scale-[1.03]"
              style={{
                borderColor: "hsl(var(--primary))",
                color: "hsl(var(--secondary-foreground))",
              }}
            >
              Explore Services
            </a>
          </MotionDiv>

        </div>
      </div>
      
      {/* fade into services */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--secondary)))",
        }}
      />

    </section>
  );
}
