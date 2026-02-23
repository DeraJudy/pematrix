"use client";
import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaCode, FaShieldAlt } from "react-icons/fa";
import { FiEye, FiEyeOff, FiCpu, FiGlobe, FiLogIn, FiLock, FiUserPlus } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Register() {

    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);


    return (
        <main
            style={{
                backgroundColor: "hsl(var(--background))",
            }}
            className="min-h-screen flex "
        >
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
                        className="w-12 h-12 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                    >
                        <FaCode
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className="w-8 h-8"
                        />
                    </div>

                    <div className="flex gap-6">
                        <div
                            style={{
                                backgroundColor: "hsl(var(--primary) /10%)",
                                borderColor: "hsl(var(--primary) /20%)",
                            }}
                            className="w-12 h-12 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                        >
                            <FiLock
                                style={{
                                    color: "hsl(var(--primary))",
                                }}
                                className="w-8 h-8"
                            />
                        </div>
                        <div
                            style={{
                                backgroundColor: "hsl(var(--primary) /10%)",
                                borderColor: "hsl(var(--primary) /20%)",
                            }}
                            className="w-12 h-12 rounded-xl border flex items-center justify-center animate-bounce [animation-duration:2s]"
                        >
                            <FiGlobe
                                style={{
                                    color: "hsl(var(--primary))",
                                }}
                                className=" w-8 h-8"
                            />
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <h2
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className="text-3xl font-bold font-display gradient-text">Join the Team</h2>
                        <p
                            style={{
                                color: "hsl(var(--muted-foreground))",
                            }}
                            className=" mt-3 max-w-sm leading-relaxed">
                            Start creating powerful content with our cutting-edge platform.
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
                        <p>$ pematrix <span className="text-primary">init</span> --user</p>
                        <p className="text-green-400">✓ Account created</p>
                        <p className="text-green-400">✓ Dashboard ready</p>
                        <p className="mt-1">$ pematrix <span className="text-primary">start</span> <span className="animate-pulse">▊</span></p>
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
            <div className="w-full lg:w-1/2 flex items-center justify-center px-12 py-12">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    // className="mb-8 rounded-2xl py-10 border w-1/2 px-6 "
                    className="mb-8 rounded-2xl py-10 border-2 w-full lg:w-1/2 px-10"
                    style={{
                        backgroundColor: "hsl(var(--secondary))",

                        borderColor: isSmallScreen
                            ? "hsl(var(--primary) / 0.25)"
                            : "hsl(var(--border))",

                        boxShadow: isSmallScreen
                            ? "0 10px 30px hsl(var(--primary) / 0.15)"
                            : "none",
                    }}
                >

                    <Link
                        href="/"
                        style={{
                            color: "hsl(var(--muted-foreground))",
                        }}
                        className="inline-flex items-center gap-1 text-sm transition-colors mb-8"
                    >
                        <FaArrowCircleLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="text-center mb-8">
                        <h1
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className="text-3xl lg:text-4xl font-bold">
                            Pematrix
                        </h1>
                        <p
                            style={{
                                color: "hsl(var(--muted-foreground))",
                            }}
                            className=" mt-2">
                            Create your account
                        </p>
                    </div>

                    <form>

                        <div className="space-y-2 mt-5">
                            <label
                                htmlFor="name"
                                style={{ color: "hsl(var(--foreground))" }}
                                className="text-sm lg:text-lg font-medium"
                            >
                                Full Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={{
                                    backgroundColor: "hsl(var(--background))",
                                    color: "hsl(var(--foreground))",
                                    border: `1px solid ${isFocused
                                        ? "hsl(var(--primary))"
                                        : "hsl(var(--border))"
                                        }`,
                                    boxShadow: isFocused
                                        ? "0 0 0 2px hsl(var(--primary) / 0.20)"
                                        : "none",
                                }}
                                className="w-full h-11 px-4 rounded-lg border outline-none transition-all
                                    focus:border-primary focus:ring-2 focus:ring-primary/20 mt-3"
                            />
                        </div>

                        <div className="space-y-2 mt-5">
                            <label
                                htmlFor="email"
                                style={{ color: "hsl(var(--foreground))" }}
                                className="text-sm lg:text-lg font-medium"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="you@email.com"
                                required
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={{
                                    backgroundColor: "hsl(var(--background))",
                                    color: "hsl(var(--foreground))",
                                    border: `1px solid ${isFocused
                                        ? "hsl(var(--primary))"
                                        : "hsl(var(--border))"
                                        }`,
                                    boxShadow: isFocused
                                        ? "0 0 0 2px hsl(var(--primary) / 0.20)"
                                        : "none",
                                }}
                                className="w-full h-11 px-4 rounded-lg border outline-none transition-all
                                    focus:border-primary focus:ring-2 focus:ring-primary/20 mt-3"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2 mt-7">
                            <label
                                htmlFor="password"
                                style={{ color: "hsl(var(--foreground))" }}
                                className="text-sm lg:text-lg font-medium"
                            >
                                Password
                            </label>

                            <div className="relative mt-3">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    style={{
                                        backgroundColor: "hsl(var(--background))",
                                        color: "hsl(var(--foreground))",
                                        border: `1px solid ${isFocused
                                            ? "hsl(var(--primary))"
                                            : "hsl(var(--border))"
                                            }`,
                                        boxShadow: isFocused
                                            ? "0 0 0 2px hsl(var(--primary) / 0.20)"
                                            : "none",
                                    }}
                                    className="w-full h-11 px-4 pr-10 rounded-lg outline-none transition-all duration-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 
                                    text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="w-4 h-4" />
                                    ) : (
                                        <FiEye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2 mt-7">
                            <label
                                htmlFor="password"
                                style={{ color: "hsl(var(--foreground))" }}
                                className="text-sm lg:text-lg font-medium"
                            >
                                Confirm Password
                            </label>

                            <div className="relative mt-3">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    style={{
                                        backgroundColor: "hsl(var(--background))",
                                        color: "hsl(var(--foreground))",
                                        border: `1px solid ${isFocused
                                            ? "hsl(var(--primary))"
                                            : "hsl(var(--border))"
                                            }`,
                                        boxShadow: isFocused
                                            ? "0 0 0 2px hsl(var(--primary) / 0.20)"
                                            : "none",
                                    }}
                                    className="w-full h-11 px-4 pr-10 rounded-lg outline-none transition-all duration-200"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 
                                    text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="w-4 h-4" />
                                    ) : (
                                        <FiEye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "hsl(var(--primary))",
                                color: "hsl(var(--primary-foreground))",
                                borderColor: "hsl(var(--border))",
                            }}
                            className="w-full h-11 mt-7 rounded-lg flex items-center justify-center border
                                gap-2 font-medium transition-all hover:opacity-90 active:scale-[0.98] shadow-md"
                        >
                            <FiUserPlus className="w-4 h-4" />
                            Sign In
                        </button>

                    </form>

                    <p
                        style={{
                            color: "hsl(var(--muted-foreground))",
                        }}
                        className="text-center text-sm text-muted-foreground mt-6">
                        Already have an account?{" "}
                        <Link href="/login"
                            style={{
                                color: "hsl(var(--primary))",
                            }}
                            className=" hover:underline font-medium">
                            Sign In
                        </Link>
                    </p>



                </motion.div>
            </div>

        </main>
    )
}