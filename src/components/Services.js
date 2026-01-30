"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaCode,
  FaLightbulb,
  FaPalette,
  FaWrench,
  FaNetworkWired,
} from "react-icons/fa";

/* ---------------- VARIANTS ---------------- */

const headerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    rotateY: index % 2 === 0 ? -15 : 15,
    scale: 0.92,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* ---------------- DATA ---------------- */

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. From MVPs to enterprise-grade platforms, we deliver performant, scalable solutions.",
  },
  {
    icon: FaPalette,
    title: "Product Design",
    description:
      "User-centered design that converts. We craft intuitive interfaces, design systems, and experiences that users love.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Scaling",
    description:
      "Infrastructure that grows with you. Cloud architecture, DevOps, and performance optimization for seamless scaling.",
  },
  {
    icon: FaLightbulb,
    title: "Digital Strategy",
    description:
      "Data-driven roadmaps for digital success. We align technology initiatives with business goals for maximum impact.",
  },
  {
    icon: FaWrench,
    title: "Computer & Peripheral Repair",
    description:
      "Expert diagnosis and repair services for all computer hardware and peripherals. Fast turnaround, reliable fixes.",
  },
  {
    icon: FaNetworkWired,
    title: "IT Consulting & Networking",
    description:
      "Office networks, WiFi, LAN, security, and ongoing network management tailored to your business.",
  },
];

/* ---------------- COMPONENT ---------------- */

const Services = () => {
  return (
    <section
      className="relative py-28 px-6"
      style={{ backgroundColor: "hsl(var(--secondary))" }}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER — VERY CLEAR SCROLL ANIMATION */}
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <p
            className="mb-2 text-sm font-medium uppercase tracking-wider"
            style={{ color: "hsl(var(--primary))" }}
          >
            Services
          </p>

          <h2
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: "hsl(var(--foreground))" }}
          >
            What We
            <span style={{ color: "hsl(var(--primary))" }}> Do Best </span>
          </h2>

          <p
            className="mx-auto max-w-2xl text-lg"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            End-to-end digital solutions designed to transform your business and
            deliver measurable results.
          </p>
        </motion.div>

        {/* SERVICES GRID — STRONG SCROLL MOTION */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 perspective-distant"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  rotateX: 6,
                  boxShadow:
                    "0 30px 70px hsl(var(--foreground) / 0.18)",
                }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  relative rounded-2xl border p-8
                  transform-gpu
                "
                style={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              >
                {/* ICON */}
                <motion.div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "hsl(var(--primary) / 15%)" }}
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                </motion.div>

                <h3
                  className="mb-3 text-xl font-semibold"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {service.title}
                </h3>

                <p
                  className="leading-relaxed"
                  style={{ color: "hsl(var(--muted-foreground))" }}
                >
                  {service.description}
                </p>

                {/* GLOW LAYER */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(600px circle at top left, hsl(var(--primary) / 15%), transparent 40%)",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
