"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CallToAction = () => {
  return (
    <section
      className="relative overflow-hidden w-full flex items-center justify-center px-6 lg:px-0 py-10 pb-24"
      style={{ backgroundColor: "hsl(var(--secondary))" }}
    >
      <div className="mx-auto max-w-7xl w-full">

        <motion.div
          className="flex flex-col items-center rounded-2xl mt-28 md:mt-10 px-9 py-10 md:py-20"
          style={{ backgroundColor: "hsl(var(--primary))" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Badge */}
          <motion.p
            variants={itemVariants}
            className="flex items-center gap-2 rounded-full border px-4 py-2"
            style={{
              borderColor: "hsl(var(--ring))",
              backgroundColor: "hsl(var(--card) / 80%)",
              color: "hsl(var(--foreground))",
            }}
          >
            <FaEnvelope size={16} style={{ color: "hsl(var(--primary))" }} />
            Let's Talk
          </motion.p>

          {/* Text */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-7"
          >
            <h2
              className="text-3xl sm:text-5xl mx-auto max-w-xl md:max-w-lg mb-5 font-bold"
              style={{ color: "hsl(var(--background))" }}
            >
              Ready to Transform Your Digital Presence?
            </h2>

            <p
              className="text-sm md:text-lg max-w-sm md:max-w-2xl mx-auto font-semibold"
              style={{ color: "hsl(var(--background))" }}
            >
              Let's discuss your next project. Our team is ready to help you build
              something extraordinary.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4 sm:justify-center lg:max-w-4xl lg:mx-auto"
          >
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg font-bold
                px-6 py-3 text-sm sm:px-10 sm:text-base lg:px-12 lg:py-3
                transition duration-300 hover:bg-gray-100"
                style={{
                  color: "hsl(var(--foreground))",
                  backgroundColor: "hsl(var(--background))",
                }}
              >
                Get Started
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
              <Link
                href="/portfolio"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border font-bold
                px-6 py-3 text-sm sm:px-10 sm:text-base lg:px-12 lg:py-3
                transition duration-300 hover:bg-gray-100"
                style={{
                  color: "hsl(var(--foreground))",
                  borderColor: "hsl(var(--border))",
                  backgroundColor: "hsl(var(--background))",
                }}
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default CallToAction;
