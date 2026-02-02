"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const values = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    description: "hello@pematrix.com",
    subDescription: "We'll respond within 24 hours"
  },
  {
    icon: FaPhone,
    title: "Call Us",
    description:
      "+1 (555) 123-4567",
    subDescription: "Mon-Fri, 9am-6pm EST"
  },
  {
    icon: FaLocationArrow,
    title: "Visit Us",
    description:
      "123 Tech Avenue, Suite 400",
    subDescription: "San Francisco, CA 94102"
  },
  {
    icon: FaClock,
    title: "Business Hours",
    description: "Monday - Friday",
    subDescription: "9:00 AM - 6:00 PM EST"
  },

];


const page = () => {
  return (
    <main
      className="relative py-28 px-6"
      style={{ backgroundColor: "hsl(var(--secondary))" }}
    >

      <div className='mx-auto max-w-6xl mt-24 pt-8'>

        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <h2
            style={{ color: "hsl(var(--foreground))" }}
            className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold"
          >
            Get in{" "}
            <span style={{ color: "hsl(var(--primary))" }}>Touch</span>
          </h2>

          <p
            style={{ color: "hsl(var(--muted-foreground))" }}
            className="mx-auto max-w-2xl text-lg"
          >
            Ready to start your next project? We'd love to hear from you.
            Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="px-6">

          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-2 rounded-2xl py-6 px-9 text-center bg-card/80 hover:shadow-lg transition"
                style={{ borderColor: "hsl(var(--border))" }}
              >
                <div
                  style={{
                    color: "hsl(var(--primary))",
                    backgroundColor: "hsl(var(--primary) / 10%)"
                  }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{value.title}</h3>
                <p
                  style={{
                    color: "hsl(var(--foreground))",
                  }}
                  className="text-sm mb-4 font-bold">
                  {value.description}
                </p>
                <p
                  style={{
                    color: "hsl(var(--muted-foreground))",
                  }}
                  className="text-sm">
                  {value.subDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <div
          style={{
            backgroundColor: "hsl(var(--secondary))"
          }}
          className="py-14 lg:py-24 px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
            
              
          </div>
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
            
              
          </div>
        </div>

    </main>
  )
}


export default page