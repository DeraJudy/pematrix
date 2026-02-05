"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCloud, FaCode, FaDatabase, FaDotCircle, FaPalette, FaShieldAlt, } from "react-icons/fa";
import { FiCheck, FiSmartphone, FiTrendingUp, FiZap, } from "react-icons/fi";

const features = [
    {
        icon: FaCode,
        title: "Web Development",
        description: "Custom web applications built with cutting-edge technologies. From responsive websites to complex enterprise solutions.",
        features: ["React & Next.js", "Node.js Backend", "API Development", "E-commerce Solutions"]
    },
    {
        icon: FaPalette,
        title: "Product Design",
        description: "User-centered design that converts. We create intuitive interfaces that delight users and drive business results.",
        features: ["UI/UX Design", "Prototyping", "Design Systems", "User Research"]
    },
    {
        icon: FaCloud,
        title: "Cloud & Scaling",
        description: "Scalable cloud infrastructure that grows with your business. We ensure your applications perform under any load.",
        features: ["AWS & Azure", "DevOps", "Microservices", "Auto-scaling"]
    },
    {
        icon: FiTrendingUp,
        title: "Digital Strategy",
        description: "Data-driven strategies that transform businesses. We help you navigate the digital landscape with confidence.",
        features: ["Digital Transformation", "Analytics", "SEO & Marketing", "Growth Consulting"]
    },
    {
        icon: FiSmartphone,
        title: "Mobile Development",
        description: "Native and cross-platform mobile apps that users love. iOS, Android, and everything in between.",
        features: ["React Native", "iOS Development", "Android Development", "App Store Optimization"]
    },
    {
        icon: FaShieldAlt,
        title: "Cybersecurity",
        description: "Protect your digital assets with enterprise-grade security solutions and best practices.",
        features: ["Security Audits", "Penetration Testing", "Compliance", "Security Training"]
    },
    {
        icon: FaDatabase,
        title: "Data Engineering",
        description: "Transform raw data into actionable insights. We build robust data pipelines and analytics platforms.",
        features: ["Data Pipelines", "Business Intelligence", "Machine Learning", "Data Warehousing"]
    },
    {
        icon: FiZap,
        title: "AI & Automation",
        description: "Leverage artificial intelligence to automate processes and unlock new possibilities for your business.",
        features: ["AI Integration", "Process Automation", "Chatbots", "Predictive Analytics"]
    },
];

// Motion helpers
const MotionDiv = motion.create("div");

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};


const page = () => {
    return (
        <main 
            style={{
                backgroundColor: "hsl(var(--secondary))",
            }}
        className="relative py-28 ">

            <div className="mx-auto max-w-6xl mt-24 pt-8">

                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold">
                        Our {" "}
                        <span
                            style={{
                                color: "hsl(var(--primary))",
                            }}>
                            Services
                        </span>
                    </h2>
                    <p
                        style={{
                            color: "hsl(var(--muted-foreground))",
                        }}
                        className="mx-auto max-w-2xl text-lg ">
                        Comprehensive digital solutions tailored to your unique business needs.
                        From concept to deployment, we've got you covered.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <MotionDiv
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {features.map((feature) => {
                        const IconComponent = feature.icon;

                        return (
                            <MotionDiv
                                key={feature.title}
                                variants={itemVariants}
                                initial={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                                whileHover={{
                                    y: -6,
                                    boxShadow: "0 20px 40px hsl(var(--primary) / 25%)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                }}
                                className="rounded-2xl border backdrop-blur-xl p-8"
                                style={{
                                    backgroundColor: "hsl(var(--card))",
                                    borderColor: "hsl(var(--border))",
                                }}
                            >

                                <motion.div
                                    style={{
                                        backgroundColor: "hsl(var(--primary) / 20%)",
                                    }}
                                    whileHover={{
                                        backgroundColor: "hsl(var(--primary) / 30%)",
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut",
                                    }}
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                >
                                    <IconComponent
                                        className="h-7 w-7"
                                        style={{ color: "hsl(var(--primary))" }}
                                    />
                                </motion.div>

                                <h3
                                    style={{
                                        color: "hsl(var(--foreground))",
                                    }}
                                    className="font-display text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>

                                <p
                                    style={{
                                        color: "hsl(var(--muted-foreground))",
                                    }}
                                    className="text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="mt-8 space-y-4">
                                    {feature.features.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-sm leading-relaxed"
                                            style={{ color: "hsl(var(--muted-foreground))" }}
                                        >
                                            <FaDotCircle
                                                className="mt-1 h-4 w-4 shrink-0"
                                                style={{ color: "hsl(var(--primary))" }}
                                            />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                            </MotionDiv>
                        );
                    })}

                </MotionDiv>

            </div>

            <div className="">
                <motion.div
                    className=" text-center py-56"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-3 text-3xl md:text-4xl lg:text-5xl font-bold">
                        Ready to Start Your Project?
                    </h2>
                    <p
                        style={{
                            color: "hsl(var(--muted-foreground))",
                        }}
                        className="mx-auto max-w-2xl text-lg mb-10 ">
                        Let's discuss how we can help transform your business with our expert services.
                    </p>
                    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-lg font-bold
                            px-6 py-3 text-sm sm:px-7 sm:text-base lg:px-8 lg:py-8
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