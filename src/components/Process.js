"use client";
import React from 'react'
import { motion } from "framer-motion"; 

const Process = () => {
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
                        Our Process
                    </p>

                    <h2
                        style={{ color: "hsl(var(--foreground))" }}
                        className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold"
                    >
                        How We
                        <span style={{ color: "hsl(var(--primary))" }}> Work </span>
                    </h2>

                    <p
                        style={{ color: "hsl(var(--muted-foreground))" }}
                        className="mx-auto max-w-2xl text-lg"
                    >
                        A proven methodology that transforms ideas into successful digital products, every single time.
                    </p>
                </div>




            </div>
        </section>
    )
}

export default Process