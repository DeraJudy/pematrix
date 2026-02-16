"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaShieldAlt } from 'react-icons/fa';

export default function PrivacyPage() {
    return (
        <div className=" relative">
            <div className="mx-auto max-w-6xl mt-36 py-8">
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
                                color: "hsl(var(--text-foreground))",
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
                                color: "hsl(var(--text-muted-foreground))",
                            }}
                        >
                            Last updated: February 1, 2026
                        </p>
                    </motion.div>
                </div>
            </div>

            <p>
                Your privacy is important to us. We are committed to protecting your personal information and ensuring that it is used in a responsible manner. This privacy policy outlines how we collect, use, and protect your information when you use our services.
            </p>
        </div>
    );
}