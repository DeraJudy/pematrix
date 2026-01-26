"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaMagic, FaStar } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

// Hero Images
const LIGHT_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008735/hhemqffxvuhiwr5nrxes.jpg";

const DARK_HERO =
  "https://res.cloudinary.com/dun600ppq/image/upload/v1769008754/yeiysj0jwgwrc3fusdkf.jpg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

const bgTransition = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const MotionImage = motion(Image);

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // const heroImage = theme === "dark" ? DARK_HERO : LIGHT_HERO;
  const currentTheme = theme === "system" ? "light" : theme;

  return (
    <section className="relative min-h-screen">
  {mounted && (
    <MotionImage
      key={currentTheme}
      src={currentTheme === "dark" ? DARK_HERO : LIGHT_HERO}
      alt="Hero background"
      fill
      priority
      className="object-cover"
    />
  )}

  <div className="relative z-10 flex min-h-screen items-center justify-center px-5 sm:px-8">
    <div className="w-full max-w-4xl">

      <div className="mb-6 flex ">
        <button
          style={{
            borderColor: "hsl(var(--ring))",
            backgroundColor: "hsl(var(--primary) / 20%)",
          }}
          className="flex items-center gap-2 rounded-full border px-4 py-2"
        >
          <FaStar
            size={12}
            style={{ color: "hsl(var(--primary))" }}
          />
          <span
            style={{ color: "hsl(var(--primary))" }}
            className="text-sm font-medium"
          >
            Digital Transformation Experts
          </span>
        </button>
      </div>

      {/* HEADING */}
      <h1
        style={{ color: "hsl(var(--secondary-foreground))" }}
        className="
          font-display
          text-3xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          md:font-black
          leading-tight
          mb-6
        "
      >
        Build, Scale, and{" "}
        <span style={{ color: "hsl(var(--primary))" }}>Thrive</span>
        <span className="block">
          with{" "}
          <span style={{ color: "hsl(var(--primary))" }}>
            Pematrix
          </span>
        </span>
      </h1>

      {/* SUBTEXT */}
      <p
        style={{ color: "hsl(var(--muted-foreground))" }}
        className="mx-auto max-w-2xl text-base sm:text-lg font-medium mb-10"
      >
        We partner with ambitious companies to craft digital experiences
        that captivate users, optimize operations, and accelerate growth.
        From strategy to execution, we’re with you every step.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#cta"
          style={{
            backgroundColor: "hsl(var(--primary))",
            color: "hsl(var(--secondary))",
          }}
          className="inline-flex items-center gap-2 rounded-xl px-6 py-4 font-bold"
        >
          Start Your Project
          <FaArrowRight size={18} />
        </a>

        <a
          href="#services"
          className="font-bold underline underline-offset-4"
          style={{ color: "hsl(var(--secondary-foreground))" }}
        >
          View Services
        </a>
      </div>

    </div>
  </div>
</section>



    // <section className="relative min-h-screen w-screen flex items-center pt-32 overflow-hidden">
    //   {/* Background */}
    //   <motion.div
    //     key={theme}
    //     variants={bgTransition}
    //     initial="hidden"
    //     animate="visible"
    //     className="absolute inset-0 z-0"
    //   >
    //     <MotionImage
    //       src={heroImage}
    //       alt="Pematrix hero background"
    //       fill
    //       priority
    //       className="object-cover"
    //       animate={{ scale: [1, 1.05, 1] }}
    //       transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    //     />

    //     {/* Gradient overlay */}
    //     <div
    //       className={`absolute inset-0 ${
    //         theme === "dark"
    //           ? "bg-linear-to-r from-background/95 via-background/80 to-background/60"
    //           : "bg-linear-to-r from-background/90 via-background/70 to-background/50"
    //       }`}
    //     />
    //   </motion.div>

    //   <div className=" justify-center">
    //     <div className="">
    //       lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
    //     </div>
    //     <h2>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</h2>
    //   </div>

    //   {/* Ambient glow */}
    //   <div className="absolute inset-0 pointer-events-none z-1">
    //     <motion.div
    //       animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
    //       transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    //       className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full 
    //       blur-[128px]"
    //     />
    //   </div>

    //   {/* Content */}
    //   <div className=" justify-center">
    //     <div className="">
    //       react app layout change test
    //     </div>
    //   </div>

    //   {/* <div className="relative z-10 max-w-4xl px-10">
    //     <motion.div
    //       variants={fadeUp}
    //       initial="hidden"
    //       animate="visible"
    //       custom={0}
    //       className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 
    //       border border-primary/20 mb-8"
    //     >
    //       <FaMagic className="w-4 h-4 text-primary" />
    //       <span className="text-sm font-medium text-primary">
    //         Digital Transformation Experts
    //       </span>
    //     </motion.div>

    //     <motion.h1
    //       variants={fadeUp}
    //       initial="hidden"
    //       animate="visible"
    //       custom={0.1}
    //       className="text-4xl md:text-6xl font-bold leading-tight mb-6"
    //     >
    //       Build, Scale, and{" "}
    //       <span className="gradient-text">Thrive</span> with{" "}
    //       <span className="gradient-text">Pematrix</span>
    //     </motion.h1>

    //     <motion.p
    //       variants={fadeUp}
    //       initial="hidden"
    //       animate="visible"
    //       custom={0.2}
    //       className="text-lg text-muted-foreground max-w-2xl mb-10"
    //     >
    //       We partner with ambitious companies to craft digital experiences
    //       that captivate users, optimize operations, and accelerate growth.
    //     </motion.p>

    //     <motion.div
    //       variants={fadeUp}
    //       initial="hidden"
    //       animate="visible"
    //       custom={0.3}
    //       className="flex gap-4"
    //     >
    //       <motion.a
    //         href="#cta"
    //         whileHover={{ scale: 1.02 }}
    //         whileTap={{ scale: 0.98 }}
    //         className="gradient-button px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2"
    //       >
    //         Start Your Project
    //         <FaArrowRight size={20} />
    //       </motion.a>
    //     </motion.div>
    //   </div> */}
    // </section>
  );
}
