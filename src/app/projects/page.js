"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Development",
    description: "A comprehensive financial analytics dashboard with real-time data visualization and AI-powered insights.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Scalable e-commerce solution handling millions of transactions with seamless user experience.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    description: "HIPAA-compliant mobile application for patient management and telemedicine consultations.",
    tags: ["React Native", "Firebase", "WebRTC", "AI"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
  },
  {
    title: "Smart City Platform",
    category: "IoT & Cloud",
    description: "IoT platform managing thousands of sensors for traffic, energy, and environmental monitoring.",
    tags: ["Python", "Azure IoT", "Kafka", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
  },
  {
    title: "EdTech Learning System",
    category: "Product Design",
    description: "Interactive learning management system with gamification and personalized learning paths.",
    tags: ["Vue.js", "GraphQL", "MongoDB", "ML"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
  },
  {
    title: "Logistics Tracker",
    category: "Enterprise Solution",
    description: "Real-time fleet management and logistics optimization platform for global supply chains.",
    tags: ["Angular", "Microservices", "Kubernetes", "Maps API"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
  }
];


const categories = ["All", "Web Development", "Mobile Development", "Full Stack", "IoT & Cloud", "Product Design", "Enterprise Solution"];




const page = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter(
        (project) => project.category === activeCategory
      );

  return (
    <main
      className=" "

    >
      <div className="relative pt-56 pb-18" style={{ backgroundColor: "hsl(var(--secondary))" }}>
        <div
          className="mx-auto max-w-6xl ">
          <motion.div
            className="mb-16 text-center px-10 lg:px-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <h2
              style={{ color: "hsl(var(--foreground))" }}
              className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              Our
              <span style={{ color: "hsl(var(--primary))" }}>{" "} Project </span>
            </h2>

            <p
              style={{ color: "hsl(var(--muted-foreground))" }}
              className="mx-auto max-w-2xl text-lg mb-9"
            >
              Explore our portfolio of successful projects that have transformed businesses across various industries.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12 px-10 lg:px-0"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    backgroundColor: isActive
                      ? "hsl(var(--primary))"
                      : "hsl(var(--secondary))",
                    color: isActive
                      ? "hsl(var(--primary-foreground))"
                      : "hsl(var(--muted-foreground))",
                  }}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all hover:text-foreground"
                >
                  {category}
                </button>
              );
            })}

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 lg:px-0">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 30px 80px hsl(var(--foreground) / 0.15)",
                  backgroundColor: "hsl(var(--secondary))",
                }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                className="border-2 rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: "hsl(var(--card))",
                  borderColor: "hsl(var(--border))",
                }}
              >

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                  <div
                    className="absolute top-4 left-4">
                    <span
                      style={{
                        backgroundColor: "hsl(var(--primary) / 90%)",
                        borderColor: "hsl(var(--border))",
                        color: "hsl(var(--primary-foreground))",
                      }}
                      className="px-3 py-1 border text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    style={{
                      color: "hsl(var(--foreground))",
                    }}
                    className="font-display text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "hsl(var(--muted-foreground))",
                    }}
                    className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        style={{
                          backgroundColor: "hsl(var(--secondary))",
                          borderColor: "hsl(var(--border))",
                          color: "hsl(var(--muted-foreground))",
                        }}
                        className="px-2 py-1 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: "hsl(var(--primary))",
                      }}
                      className="flex items-center gap-2 text-sm font-medium hover:underline"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      View Project
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: "hsl(var(--muted-foreground))",
                      }}
                      className="flex items-center gap-2 text-sm font-medium hover:text-foreground"
                    >
                      <FaGithub className="w-4 h-4" />
                      Source
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div
        style={{ backgroundColor: "hsl(var(--background))" }}
        className="mx-auto max-w-6xl myheight">
        <motion.div
          className="mb-16 text-center px-10 lg:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Have a
            <span style={{ color: "hsl(var(--primary))" }}>{" "} Project {" "}</span>
            in Mind?
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl text-lg mb-9"
          >
            Let's discuss how we can bring your vision to life with our expertise.
          </p>
          <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-bold
                            px-6 py-3 text-sm sm:px-7 sm:text-base lg:px-8 lg:py-5
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