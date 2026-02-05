"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main
      className="relative pt-28 px-6"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <div className="mx-auto max-w-6xl myheight">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Have a
            <span style={{ color: "hsl(var(--primary))" }}>{" "} Project {" "}</span>
            in Mind?
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl text-lg mb-9"
          >
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-bold
                            px-6 py-3 text-sm sm:px-7 sm:text-base lg:px-8 lg:py-5
                            transition duration-300 hover:bg-gray-100"
              style={{
                color: "hsl(var(--background))",
                backgroundColor: "hsl(var(--primary))",
              }}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default page