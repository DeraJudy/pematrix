"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaShieldAlt } from 'react-icons/fa';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const sections = [
    {
        title: "Information We Collect",
        content:
            "We collect information you provide directly, such as your name, email address, and any messages you send through our contact forms. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, and browsing behavior.",
    },
    {
        title: "How We Use Your Information",
        content:
            "We use the information we collect to provide and improve our services, communicate with you about projects and updates, send newsletters if you've subscribed, analyze website usage to enhance user experience, and comply with legal obligations.",
    },
    {
        title: "Data Sharing and Disclosure",
        content:
            "We do not sell your personal information. We may share your data with trusted service providers who assist in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.",
    },
    {
        title: "Data Security",
        content:
            "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
    },
    {
        title: "Your Rights",
        content:
            "You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@pematrix.com.",
    },
    {
        title: "Changes to This Policy",
        content:
            "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the effective date.",
    },
];

export default function PrivacyPage() {
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
                            <FaShieldAlt
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
                            Privacy {" "}
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
    );
}