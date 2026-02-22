"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFile } from 'react-icons/fa';
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Pematrix website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services immediately.",
  },
  {
    title: "Services",
    content:
      "Pematrix provides digital consulting, web development, product design, cloud solutions, and related technology services. The specific scope, deliverables, and terms of any engagement will be outlined in a separate service agreement or statement of work.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including text, graphics, logos, and software, is the property of Pematrix and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.",
  },
  {
    title: "User Responsibilities",
    content:
      "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Pematrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration.",
  },
];

export default function TermsPage() {
  return (
    <div className=" relative">

      <Navbar />

      <div className="mx-auto max-w-6xl mt-40 lg:mt-56 py-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div
              style={{
                backgroundColor: "hsl(var(--primary) / 10%)",
              }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaFile
                style={{
                  color: "hsl(var(--primary))",
                }}
                className="w-8 h-8"
              />
            </div>
            <h1
              style={{
                color: "hsl(var(--foreground))",
              }}
              className="text-4xl md:text-5xl font-bold mb-4">
              Terms of {" "}
              <span
                style={{
                  color: "hsl(var(--primary))",
                }}>
                Service
              </span>
            </h1>
            <p
              style={{
                color: "hsl(var(--muted-foreground))",
              }}
            >
              Last updated: February 1, 2026
            </p>
          </motion.div>
        </div>

        <div className="space-y-6 px-10 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border p-8"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))"
              }}
            >
              <h2
                style={{
                  color: "hsl(var(--foreground))",
                }}
                className="font-display text-xl font-semibold mb-4">
                {section.title}
              </h2>
              <p
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
                className="leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}