"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MotionDiv = motion.create("div");


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

const cardVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
    rotateY: index % 2 === 0 ? -15 : 15,
    scale: 0.92,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const values = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    description: "hello@pematrix.com",
    subDescription: "We'll respond within 24 hours",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    description: "+1 (555) 123-4567",
    subDescription: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: FaLocationArrow,
    title: "Visit Us",
    description: "123 Tech Avenue, Suite 400",
    subDescription: "San Francisco, CA 94102",
  },
  {
    icon: FaClock,
    title: "Business Hours",
    description: "Monday – Friday",
    subDescription: "9:00 AM – 6:00 PM EST",
  },
];

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="relative py-28 px-6 bg-secondary">

      <Navbar />

      <div className="mx-auto max-w-6xl mt-24 pt-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold">
            Get in {" "}
            <span
              style={{
                color: "hsl(var(--primary))",
              }}>
              Touch
            </span>
          </h2>
          <p
            style={{
              color: "hsl(var(--muted-foreground))",
            }}
            className="mx-auto max-w-2xl text-lg">
            Ready to start your next project? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                rotateX: 6,
                boxShadow: "0 30px 70px hsl(var(--foreground) / 0.18)",
              }}
              transition={{ type: "spring", stiffness: 180 }}
              className="relative rounded-2xl border py-6 px-9 text-center transform-gpu"
              style={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <value.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold mb-1">{value.title}</h3>
              <p className="text-sm font-bold mb-2">{value.description}</p>
              <p className="text-sm text-muted-foreground">
                {value.subDescription}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="py-18 lg:py-24 px-6 mt-4">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border-2"
            style={{
              borderColor: "hsl(var(--border))",
              backgroundColor: "hsl(var(--card))",
            }}
          >
            <h2 className="text-3xl font-bold mb-10">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }}
                    className="w-full px-4 py-3 rounded-xl  border border-border placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }}
                    className="w-full px-4 py-3 rounded-xl  border border-border placeholder:text-muted-foreground 
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }}
                    className="w-full px-4 py-3 rounded-xl  border border-border placeholder:text-muted-foreground 
                          focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+234803678901"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))"
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="product-design">Product Design</option>
                    <option value="cloud-scaling">Cloud & Scaling</option>
                    <option value="digital-strategy">Digital Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-10">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    color: "hsl(var(--foreground))"
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-border
                  placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--background))",
                }}
                className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2
                           shadow-lg shadow-primary/30 hover:shadow-xl transition-shadow"
              >
                <FiSend className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div
              className="glass-card overflow-hidden h-80 border-2"
              style={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--primary))",
              }}
            >
              <iframe
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
              />
            </div>

            {/* FAQ */}
            <MotionDiv
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
              <h3
                style={{
                  color: "hsl(var(--foreground))"
                }}
                className="text-xl font-bold mb-6">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {[
                  {
                    q: "What's your typical project timeline?",
                    a: "Most projects range from 6–16 weeks depending on scope.",
                  },
                  {
                    q: "Do you work with startups?",
                    a: "Absolutely! We love working with startups.",
                  },
                  {
                    q: "What industries do you serve?",
                    a: "Fintech, healthcare, e-commerce, SaaS, and more.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="pb-4 border-b last:border-0"
                  >
                    <h4
                      style={{
                        color: "hsl(var(--foreground))"
                      }}
                      className="font-medium mb-2">
                      {faq.q}
                    </h4>
                    <p
                      style={{
                        color: "hsl(var(--muted-foreground))"
                      }}
                      className="text-sm">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
