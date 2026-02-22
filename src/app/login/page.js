"use client";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaShieldAlt } from "react-icons/fa";
import { FiEye, FiEyeOff, FiCpu, FiGlobe, FiLogIn } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";



export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main
            style={{
                backgroundColor: "hsl(var(--background))",
            }}
            className="min-h-screen flex ">

            {/* Left Side */}
            <div
                className="hidden sm:flex lg:w-1/2 relative overflow-hidden bg-linear-to-br from-blue-500/20 via-background 
                to-blue-500/10 items-center justify-center">

                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, 
                    hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }} />

                <div className="relative z-10 flex flex-col items-center gap-8 px-12">
                    <div
                        style={{
                            backgroundColor: "hsl(var(--primary) /10%)",
                            borderColor: "hsl(var(--primary) /20%)",
                        }}
                        className="w-16 h-16 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                    >
                        <FaShieldAlt
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className="w-12 h-12"
                        />
                    </div>

                    <div className="flex gap-6">
                        <div
                            style={{
                                backgroundColor: "hsl(var(--primary) /10%)",
                                borderColor: "hsl(var(--primary) /20%)",
                            }}
                            className="w-16 h-16 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                        >
                            <FiCpu
                                style={{
                                    color: "hsl(var(--primary))",
                                }}
                                className="w-12 h-12"
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "hsl(var(--primary) /10%)",
                                borderColor: "hsl(var(--primary) /20%)",
                            }}
                            className="w-16 h-16 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                        >
                            <FiGlobe
                                style={{
                                    color: "hsl(var(--primary))",
                                }}
                                className=" w-12 h-12"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <h2
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className="text-3xl font-bold font-display gradient-text">Secure Access</h2>
                        <p
                            style={{
                                color: "hsl(var(--muted-foreground))",
                            }}
                            className=" mt-3 max-w-sm leading-relaxed">
                            Enterprise-grade security. Manage your digital assets with confidence.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            color: "hsl(var(--muted-foreground))",
                            backgroundColor: "hsl(var(--card) / 50%)",
                            borderColor: "hsl(var(--primary) /20%)",
                        }}
                        className="mt-4 w-full max-w-xs rounded-xl border backdrop-blur-sm p-4 font-mono text-xs "
                    >
                        <div className="flex gap-1.5 mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        </div>
                        <p><span className="text-primary">const</span> auth = <span className="text-primary">await</span> verify();</p>
                        <p><span className="text-primary">if</span> (auth.valid) {"{"}</p>
                        <p className="pl-4">redirect(<span className="text-green-400">'/dashboard'</span>);</p>
                        <p>{"}"}</p>
                    </motion.div>

                    {/* Glowing orbs */}
                    <div
                        style={{
                            position: "absolute",
                            top: "10%",
                            left: "8%",
                            width: "16rem",
                            height: "16rem",
                            backgroundColor: "hsl(var(--primary) / 0.10)",
                            borderRadius: "9999px",
                            filter: "blur(48px)",
                            animation: "glow 4s ease-in-out infinite",
                        }}
                    />

                    <div
                        style={{
                            position: "absolute",
                            bottom: "12%",
                            right: "10%",
                            width: "12rem",
                            height: "12rem",
                            backgroundColor: "hsl(var(--primary) / 0.15)",
                            borderRadius: "9999px",
                            filter: "blur(48px)",
                            animation: "glow 4s ease-in-out infinite",
                            animationDelay: "1.5s",
                        }}
                    />

                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md"
                >
                    <div
                        style={{
                            backgroundColor: "hsl(var(--secondary))",
                            borderColor: "hsl(var(--border))",
                        }}
                        className=" mb-8 border rounded-2xl px-6 py-10"
                    >

                        <Link
                            href="/"
                            style={{
                                color: "hsl(var(--muted-foreground))",
                            }}
                            className="inline-flex items-center gap-1 text-sm transition-colors mb-6"
                        >
                            <FaArrowCircleLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <div className="text-center mb-8">
                            <h1
                                style={{
                                    color: "hsl(var(--primary))",
                                }}
                                className="text-3xl font-bold">
                                Pematrix
                            </h1>
                            <p
                                style={{
                                    color: "hsl(var(--muted-foreground))",
                                }}
                                className=" mt-2">
                                Sign in to your dashboard
                            </p>
                        </div>

                        <form>

                            <div className="space-y-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@email.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password">Password</label>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        required
                                        className="pr-10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff className="w-4 h-4" />
                                        ) : (
                                            <FiEye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full gradient-button"
                            >
                                <FiLogIn className="w-4 h-4 mr-2" />
                                Sign In
                            </button>

                        </form>
                    </div>


                </motion.div>
            </div>


        </main>
    )
}