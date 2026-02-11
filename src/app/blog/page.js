"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendar, FaClock, FaUser } from "react-icons/fa";

const featuredPost = {
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated testing to intelligent code generation.",
    author: "Sarah Chen",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop"
};

const blogPosts = [
    {
        title: "Building Scalable Microservices with Kubernetes",
        excerpt: "A comprehensive guide to designing and deploying microservices architecture that scales efficiently.",
        author: "Marcus Johnson",
        date: "Jan 25, 2026",
        readTime: "6 min read",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop"
    },
    {
        title: "UX Design Principles for Modern Web Applications",
        excerpt: "Essential design principles that create intuitive and engaging user experiences in today's digital landscape.",
        author: "Emily Rodriguez",
        date: "Jan 22, 2026",
        readTime: "5 min read",
        category: "Design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
        title: "Securing Your Cloud Infrastructure: Best Practices",
        excerpt: "Learn the essential security measures to protect your cloud-based applications and data from threats.",
        author: "Michael Brown",
        date: "Jan 18, 2026",
        readTime: "7 min read",
        category: "Security",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
        title: "React 19: What's New and How to Migrate",
        excerpt: "A deep dive into the latest React features and a step-by-step migration guide for your existing projects.",
        author: "David Kim",
        date: "Jan 15, 2026",
        readTime: "10 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
    },
    {
        title: "Data-Driven Decision Making for Startups",
        excerpt: "How to leverage analytics and data science to make informed business decisions in your startup journey.",
        author: "Jennifer Wu",
        date: "Jan 12, 2026",
        readTime: "6 min read",
        category: "Business",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
        title: "The Complete Guide to API Design",
        excerpt: "Best practices for designing RESTful APIs that are intuitive, scalable, and developer-friendly.",
        author: "Alex Rivera",
        date: "Jan 8, 2026",
        readTime: "8 min read",
        category: "Development",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
    }
];

const categories = ["All", "Technology", "Development", "Design", "DevOps", "Security", "Business"];

const page = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredblogPosts =
        activeCategory === "All"
            ? blogPosts
            : blogPosts.filter(
                (blogPost) => blogPost.category === activeCategory
            );

    return (
        <div className="relative pt-56 " style={{ backgroundColor: "hsl(var(--secondary))" }} >
            <div
                className="mx-auto max-w-6xl pb-18"
            >
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
                        <span style={{ color: "hsl(var(--primary))" }}>{" "} Blog </span>
                    </h2>

                    <p
                        style={{ color: "hsl(var(--muted-foreground))" }}
                        className="mx-auto max-w-2xl text-lg mb-9"
                    >
                        Insights, tutorials, and thought leadership from our team of experts.
                    </p>
                </motion.div>

                {/* Featured Post */}
                <main className="px-10 lg:px-0">
                    <section
                        className=" border-2 rounded-3xl overflow-hidden "
                        style={{
                            backgroundColor: "hsl(var(--background))",
                            borderColor: "hsl(var(--border))",
                        }}
                    >
                        <motion.article
                            whileHover={!isMobile ? { y: -6 } : undefined}
                            whileTap={isMobile ? { scale: 0.98 } : undefined}

                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}


                            // transition={{ type: "spring", stiffness: 120 }}
                            className="group"
                        >
                            <Link href="#" className="block">
                                <div className="grid lg:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-64 lg:h-full overflow-hidden">
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                                        <span
                                            className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full"
                                            style={{
                                                backgroundColor: "hsl(var(--primary))",
                                                color: "hsl(var(--primary-foreground))",
                                            }}
                                        >
                                            Featured
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-between">
                                        <div>
                                            <div
                                                className="flex flex-wrap items-center gap-4 mb-4 text-sm"
                                                style={{ color: "hsl(var(--muted-foreground))" }}
                                            >
                                                <span className="px-3 py-1 rounded-full border">
                                                    {featuredPost.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaCalendar /> {featuredPost.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaClock /> {featuredPost.readTime}
                                                </span>
                                            </div>

                                            <h2
                                                className="text-2xl lg:text-3xl font-bold mb-4 transition-colors group-hover:text-primary"
                                                style={{ color: "hsl(var(--foreground))" }}
                                            >
                                                {featuredPost.title}
                                            </h2>

                                            <p
                                                className="mb-6 leading-relaxed"
                                                style={{ color: "hsl(var(--muted-foreground))" }}
                                            >
                                                {featuredPost.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="w-10 h-10 rounded-full flex items-center justify-center"
                                                    style={{
                                                        backgroundColor: "hsl(var(--primary) / 15%)",
                                                    }}
                                                >
                                                    <FaUser style={{ color: "hsl(var(--primary))" }} />
                                                </div>
                                                <span
                                                    className="font-medium"
                                                    style={{ color: "hsl(var(--foreground))" }}
                                                >
                                                    {featuredPost.author}
                                                </span>
                                            </div>

                                            <span
                                                className="flex items-center gap-2 font-semibold"
                                                style={{ color: "hsl(var(--primary))" }}
                                            >
                                                Read Article <FaArrowRight />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    </section>
                </main>


                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12 mt-10 px-10 lg:px-0"
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

                {/* Blog Posts Grid */}
                <section className="section-padding pt-0">
                    <div className="container-max">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 lg:px-0">
                            {filteredblogPosts.map((post, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-card-hover border-2 rounded-2xl group overflow-hidden"
                                    style={{
                                        backgroundColor: "hsl(var(--secondary))",
                                        borderColor: "hsl(var(--border))",
                                        color: "hsl(var(--primary-foreground))",
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span
                                                style={{
                                                    backgroundColor: "hsl(var(--background) / 90%)",
                                                    borderColor: "hsl(var(--border))",
                                                    color: "hsl(var(--foreground))",
                                                }}
                                                className="px-3 py-1 text-xs border font-medium rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div
                                            style={{
                                                color: "hsl(var(--muted-foreground))",
                                            }}
                                            className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <FaCalendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FaClock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3
                                            style={{
                                                color: "hsl(var(--foreground))",
                                            }}
                                            className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: "hsl(var(--muted-foreground))",
                                            }}
                                            className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span
                                                style={{
                                                    color: "hsl(var(--muted-foreground))",
                                                }}
                                                className="text-sm text-muted-foreground">{post.author}</span>
                                            <motion.a
                                                href="#"
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-1 text-primary text-sm font-medium"
                                                style={{
                                                    color: "hsl(var(--primary))",
                                                }}
                                            >
                                                Read <FaArrowRight className="w-3.5 h-3.5" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Load More */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mt-12"
                        >
                            <motion.button
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 border rounded-xl font-medium hover:bg-secondary transition-colors"
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 30px 80px hsl(var(--foreground) / 0.15)",
                                    backgroundColor: "hsl(var(--secondary))",
                                }}
                                style={{
                                    borderColor: "hsl(var(--border))",
                                    color: "hsl(var(--foreground))",
                                }}
                            >
                                Load More Articles
                            </motion.button>
                        </motion.div>
                    </div>
                </section>


            </div>

            {/* Newsletter CTA */}
            <section
                style={{
                    backgroundColor: "hsl(var(--background))",
                }}
                className=" py-14">
                <div className=" text-center px-10 lg:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            style={{
                                color: "hsl(var(--foreground))",
                            }}
                            className="font-display text-3xl md:text-4xl font-bold mb-4">
                            Stay Updated
                        </h2>
                        <p
                            style={{
                                color: "hsl(var(--muted-foreground))",
                            }}
                            className="mb-8 max-w-xl mx-auto">
                            Subscribe to our newsletter for the latest insights and updates delivered to your inbox.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={{
                                    color: "hsl(var(--foreground))",
                                    backgroundColor: "hsl(var(--secondary))",
                                }}
                                className="flex-1 px-4 py-3 rounded-xl border placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-blue-500"
                            />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 py-3 rounded-xl font-bold"
                                style={{
                                    color: "hsl(var(--background))",
                                    backgroundColor: "hsl(var(--primary))",
                                }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default page