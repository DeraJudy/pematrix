"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPen, FaRocket, FaSearch } from "react-icons/fa";

const steps = [
  {
    icon: FaSearch,
    number: "01",
    title: "Discover",
    description:
      "We dive deep into understanding your business, users, and goals to define the perfect strategy.",
  },
  {
    icon: FaPen,
    number: "02",
    title: "Design",
    description:
      "Our designers craft beautiful, intuitive interfaces that align with your brand and delight users.",
  },
  {
    icon: FaCode,
    number: "03",
    title: "Build",
    description:
      "Our engineers bring designs to life with clean, scalable code and modern best practices.",
  },
  {
    icon: FaRocket,
    number: "04",
    title: "Scale",
    description:
      "We deploy, optimize, and iterate to ensure your product grows with your success.",
  },
];

const Process = () => {
  return (
    <section
      className="relative py-28 px-6"
      style={{ backgroundColor: "hsl(var(--secondary))" }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            style={{ color: "hsl(var(--primary))" }}
            className="mb-2 text-sm font-medium uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.p>

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            How We{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Work</span>
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl text-lg"
          >
            A proven methodology that transforms ideas into successful digital
            products, every single time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">

          {/* Horizontal line (desktop only) */}
          <div
            className="
              hidden lg:block absolute top-1/2 left-0 right-0 h-px
              bg-linear-to-r from-transparent via-border to-transparent
              -translate-y-1/2
            "
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Card */}
                  <div
                    className="
                      relative h-full rounded-2xl border-2 p-8 text-center
                      shadow-sm hover:shadow-xl transition-all duration-300
                    "
                    style={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      boxShadow:
                        "0 10px 30px hsl(var(--foreground) / 0.05)",
                    }}
                  >
                    
                    <div
                      className="absolute top-4 right-6 text-6xl font-bold"
                      style={{
                        color: "hsl(var(--primary) / 10%)",
                      }}
                    >
                      {step.number}
                    </div>

                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      style={{
                        backgroundColor:
                          "hsl(var(--primary) / 10%)",
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: "hsl(var(--primary))" }}
                      />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-3 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed relative z-10 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-20"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                        style={{
                          backgroundColor: "hsl(var(--card))",
                          borderColor: "hsl(var(--border))",
                          color: "hsl(var(--primary))",
                        }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
