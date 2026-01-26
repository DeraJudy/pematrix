"use client";
import React from 'react'
import { motion } from "framer-motion";
import { FaClock, FaUser, FaBullseye } from 'react-icons/fa';
import { FiZap, FiShield, FiBarChart2 } from "react-icons/fi";

const features = [
    {
        icon: FaBullseye,
        title: "Results-Driven",
        description: "Every project is measured by its impact on your business goals.",
    },
    {
        icon: FaUser,
        title: "Dedicated Teams",
        description: "Work with experienced specialists fully invested in your success.",
    },
    {
        icon: FiZap,
        title: "Rapid Delivery",
        description: "Agile methodology ensures fast iterations and quick time-to-market.",
    },
    {
        icon: FiShield,
        title: "Enterprise Security",
        description: "Bank-level security practices protect your data and users.",
    },
    {
        icon: FaClock,
        title: "24/7 Support",
        description: "Round-the-clock assistance to keep your systems running smoothly.",
    },
    {
        icon: FiBarChart2,
        title: "Data-Backed",
        description: "Decisions powered by analytics and real user insights.",
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


const WhyUs = () => {
    return (
        <section
            className="relative py-28 px-6"
            style={{ backgroundColor: "hsl(var(--secondary))" }}
        >
            <div className="mx-auto max-w-6xl">

                <div className="mb-16 text-center">
                    <p
                        style={{ color: "hsl(var(--primary))" }}
                        className="mb-2 text-sm font-medium uppercase tracking-wider"
                    >
                        Why Choose Us
                    </p>

                    <h2
                        style={{ color: "hsl(var(--foreground))" }}
                        className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
                    >
                        Why
                        <span style={{ color: "hsl(var(--primary))" }}> Pematrix? </span>
                    </h2>

                    <p
                        style={{ color: "hsl(var(--muted-foreground))" }}
                        className="mx-auto max-w-2xl text-lg"
                    >
                        We combine technical excellence with strategic thinking to deliver solutions that make a real difference.
                    </p>
                </div>


                {/* Features Grid */}
                <MotionDiv
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                                    backgroundColor: "hsl(var(--background))",
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
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                                >
                                    <IconComponent
                                        className="h-7 w-7"
                                        style={{ color: "hsl(var(--primary))" }}
                                    />
                                </motion.div>

                                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </MotionDiv>
                        );
                    })}

                </MotionDiv>

            </div>
        </section>
    )
}

export default WhyUs