"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (

    <main>
      <Navbar />

      <div className="relative pt-56 pb-18" style={{ backgroundColor: "hsl(var(--secondary))" }}>
        <div className="mx-auto max-w-6xl "></div>
      </div>

      <div
        style={{ backgroundColor: "hsl(var(--background))" }}
        className="mx-auto max-w-6xl py-20 px-7">
        <motion.div
          style={{ 
            backgroundColor: "hsl(var(--background) /10%)",
            borderColor: "hsl(var(--border))",
          }}
          className=" text-center py-10 px-10 lg:px-0 border rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Join Our
            <span style={{ color: "hsl(var(--primary))" }}>{" "} Team {" "}</span>
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl mt-3 text-sm sm:text-lg mb-9"
          >
            We're always looking for talented individuals who share our passion for innovation. 
            Check out our open positions and become part of something great.
          </p>
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-bold
                            px-6 py-3 text-sm sm:px-8 sm:text-base lg:py-3
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

      <Footer />
    </main>
  )
}

export default page