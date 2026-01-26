"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaCode, FaLightbulb, FaPalette, FaWrench, FaNetworkWired, } from "react-icons/fa";

// Motion helpers
const MotionDiv = motion.create("div");

// Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
    description: "Expert diagnosis and repair services for all computer hardware and peripherals. Fast turnaround, reliable fixes." 
  }, 
  { 
    icon: FaNetworkWired, 
    title: "IT Consulting & Networking", 
    description: "Office networks, WiFi, LAN, security, and ongoing network management tailored to your business." 
  },
];

const Services = () => {
  return (
    <section
      className="relative py-28 px-6"
      style={{ backgroundColor: "hsl(var(--secondary))" }}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p
            style={{ color: "hsl(var(--primary))" }}
            className="mb-2 text-sm font-medium uppercase tracking-wider"
          >
            Services
          </p>

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            What We
            <span style={{ color: "hsl(var(--primary))" }}> Do Best </span>
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl text-lg"
          >
            End-to-end digital solutions designed to transform your business and
            deliver measurable results.
          </p>
        </div>

        {/* SERVICES GRID */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <MotionDiv
                key={service.title}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                    backgroundColor: "hsl(var(--primary) / 12%)",
                }}
                transition={{
                    duration: 0.25,
                    ease: "easeOut",
                }}
                style={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))"
                }}
                className="
                  rounded-2xl border backdrop-blur-xl p-8 transition hover:-translate-y-1 
                "
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "hsl(var(--primary) / 15%)" }}
                >
                  <Icon
                    className="h-7 w-7"
                    style={{ color: "hsl(var(--primary))" }}
                  />
                </div>

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
              </MotionDiv>
            );
          })}
        </MotionDiv>

      </div>
    </section>
  );
};

export default Services;