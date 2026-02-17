"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCookie } from 'react-icons/fa';

const sections = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your browsing experience. Cookies can be 'persistent' (stored until deleted) or 'session' (deleted when you close your browser).",
  },
  {
    title: "How We Use Cookies",
    content:
      "We use cookies to remember your theme preferences (dark/light mode), understand how you interact with our website, improve site performance and loading times, and provide relevant content based on your interests.",
  },
  {
    title: "Types of Cookies We Use",
    items: [
      {
        name: "Essential Cookies",
        desc: "Required for the website to function properly. These cannot be disabled.",
      },
      {
        name: "Preference Cookies",
        desc: "Remember your settings like theme mode and language preferences.",
      },
      {
        name: "Analytics Cookies",
        desc: "Help us understand how visitors interact with our website to improve it.",
      },
      {
        name: "Marketing Cookies",
        desc: "Used to deliver relevant advertisements and track campaign performance.",
      },
    ],
  },
  {
    title: "Managing Cookies",
    content:
      "You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling certain cookies may affect the functionality of our website.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "Some cookies on our site are placed by third-party services we use, such as analytics providers and social media platforms. We do not control these cookies and recommend reviewing the respective privacy policies of these third parties.",
  },
  {
    title: "Updates to This Policy",
    content:
      "We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly.",
  },
];

export default function CookiesPage() {
  return (
    <div className=" relative">
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
              <FaCookie
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
              Cookie {" "}
              <span
                style={{
                  color: "hsl(var(--primary))",
                }}>
                Policy
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

        <div className="space-y-6">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-8"
                  >
                    <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <div className="space-y-3">
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex gap-3 p-3 rounded-xl bg-secondary/50"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                            <div>
                              <span className="font-medium text-foreground">
                                {item.name}:
                              </span>{" "}
                              <span className="text-muted-foreground">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
      </div>
    </div>
  )
}