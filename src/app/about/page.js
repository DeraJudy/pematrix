"use client";
import { FaAward, FaEye } from "react-icons/fa";
import { FiHeart, FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";

const values = [
  {
    icon: FiTarget,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
  },
  {
    icon: FaEye,
    title: "Transparency",
    description:
      "Open communication and honest relationships are the foundation of our partnerships.",
  },
  {
    icon: FiHeart,
    title: "Client Success",
    description:
      "Your success is our success. We're invested in delivering results that matter.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in everything we create and deliver.",
  },
];

export default function About() {
  return (
    <section className="overflow-hidden">

      {/* About Section */}
      <div className="flex justify-center items-center py-24 md:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span style={{ color: "hsl(var(--primary))" }}>Pematrix</span>
            </h2>

            <p className="text-lg font-semibold mb-4">
              We are a team of passionate technologists, designers, and strategists
              dedicated to helping businesses thrive in the digital age.
            </p>

            <p
              style={{
                color: "hsl(var(--muted-foreground))"
              }}
              className="text-lg">
              Founded in 2016, Pematrix has grown from a small startup to a leading
              digital consulting firm. We combine deep technical expertise with
              creative thinking to deliver solutions that drive real business results.
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 px-12 py-4 border-2 rounded-2xl "
            style={{ 
              borderColor: "hsl(var(--border))",
              backgroundColor: "hsl(var(--card))",
            }}
          >
            {[
              ["150+", "Projects Delivered"],
              ["50+", "Happy Clients"],
              ["10+", "Years of Experience"],
              ["25+", "Team Members"],
            ].map(([value, label], i) => (
              <div key={i} className="px-12 py-7">
                <h4
                  style={{
                    color: "hsl(var(--primary))"
                  }}
                  className="text-4xl font-bold text-primary mb-1">{value}</h4>
                <span
                  style={{
                    color: "hsl(var(--muted-foreground))"
                  }}
                  className="text-sm font-bold">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div
        style={{
          backgroundColor: "hsl(var(--secondary))"
        }}
        className="lg:py-24 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {[{
            title: "Our Mission",
            icon: <FiTarget size={28} />,
            text:
              "To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create lasting competitive advantages.",
          },
          {
            title: "Our Vision",
            icon: <FaEye size={28} />,
            text:
              "To be the trusted partner of choice for businesses worldwide, recognized for excellence in transformative digital experiences.",
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative border-2 rounded-2xl p-8 bg-card/80 shadow-lg shadow-black/10"
              style={{ borderColor: "hsl(var(--border))" }}
            >
              <div
                style={{
                  color: "hsl(var(--primary))",
                  backgroundColor: "hsl(var(--primary) / 10%)"
                }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p
                style={{
                  color: "hsl(var(--muted-foreground))",
                }}
                className="">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Values
          </h2>
          <p
            style={{
                  color: "hsl(var(--muted-foreground))",
                }} 
            className="max-w-2xl mx-auto">
            The principles that guide everything we do at Pematrix.
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-2 rounded-2xl p-6 text-center bg-card/80 hover:shadow-lg transition"
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
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p
                style={{
                  color: "hsl(var(--muted-foreground))",
                }} 
                className="text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
