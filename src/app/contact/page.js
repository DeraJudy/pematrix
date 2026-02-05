// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

// const values = [
//   {
//     icon: FaEnvelope,
//     title: "Email Us",
//     description: "hello@pematrix.com",
//     subDescription: "We'll respond within 24 hours"
//   },
//   {
//     icon: FaPhone,
//     title: "Call Us",
//     description:
//       "+1 (555) 123-4567",
//     subDescription: "Mon-Fri, 9am-6pm EST"
//   },
//   {
//     icon: FaLocationArrow,
//     title: "Visit Us",
//     description:
//       "123 Tech Avenue, Suite 400",
//     subDescription: "San Francisco, CA 94102"
//   },
//   {
//     icon: FaClock,
//     title: "Business Hours",
//     description: "Monday - Friday",
//     subDescription: "9:00 AM - 6:00 PM EST"
//   },

// ];


// const page = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     service: "",
//     budget: "",
//     message: ""
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Handle form submission
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <main
//       className="relative py-28 px-6"
//       style={{ backgroundColor: "hsl(var(--secondary))" }}
//     >

//       <div className='mx-auto max-w-6xl mt-24 pt-8'>

//         <motion.div
//           className="mb-16 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >

//           <h2
//             style={{ color: "hsl(var(--foreground))" }}
//             className="mb-6 text-3xl md:text-4xl lg:text-6xl font-bold"
//           >
//             Get in{" "}
//             <span style={{ color: "hsl(var(--primary))" }}>Touch</span>
//           </h2>

//           <p
//             style={{ color: "hsl(var(--muted-foreground))" }}
//             className="mx-auto max-w-2xl text-lg"
//           >
//             Ready to start your next project? We'd love to hear from you.
//             Reach out and let's create something amazing together.
//           </p>
//         </motion.div>

//         <div className="px-6">

//           <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="border-2 rounded-2xl py-6 px-9 text-center bg-card/80 hover:shadow-lg transition"
//                 style={{ borderColor: "hsl(var(--border))" }}
//               >
//                 <div
//                   style={{
//                     color: "hsl(var(--primary))",
//                     backgroundColor: "hsl(var(--primary) / 10%)"
//                   }}
//                   className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                   <value.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-1">{value.title}</h3>
//                 <p
//                   style={{
//                     color: "hsl(var(--foreground))",
//                   }}
//                   className="text-sm mb-4 font-bold">
//                   {value.description}
//                 </p>
//                 <p
//                   style={{
//                     color: "hsl(var(--muted-foreground))",
//                   }}
//                   className="text-sm">
//                   {value.subDescription}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//       </div>

//       <div
//           style={{
//             backgroundColor: "hsl(var(--secondary))"
//           }}
//           className="py-14 lg:py-24 px-6">
//           <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">

//                               {/* Form */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   className="glass-card p-8"
//                 >
//                   <h2 className="font-display text-2xl font-bold text-foreground mb-6">
//                     Send Us a Message
//                   </h2>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                           placeholder="John Doe"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                           placeholder="john@company.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
//                           Company
//                         </label>
//                         <input
//                           type="text"
//                           id="company"
//                           name="company"
//                           value={formData.company}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                           placeholder="Your Company"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
//                           Service Interested In
//                         </label>
//                         <select
//                           id="service"
//                           name="service"
//                           value={formData.service}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                         >
//                           <option value="">Select a service</option>
//                           <option value="web-development">Web Development</option>
//                           <option value="mobile-development">Mobile Development</option>
//                           <option value="product-design">Product Design</option>
//                           <option value="cloud-scaling">Cloud & Scaling</option>
//                           <option value="digital-strategy">Digital Strategy</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
//                         Project Budget
//                       </label>
//                       <select
//                         id="budget"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//                       >
//                         <option value="">Select budget range</option>
//                         <option value="10k-25k">$10,000 - $25,000</option>
//                         <option value="25k-50k">$25,000 - $50,000</option>
//                         <option value="50k-100k">$50,000 - $100,000</option>
//                         <option value="100k+">$100,000+</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
//                         Project Details *
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows={5}
//                         className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                         placeholder="Tell us about your project..."
//                       />
//                     </div>

//                     <motion.button
//                       type="submit"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       className="w-full gradient-button px-6 py-4 rounded-xl flex items-center justify-center gap-2"
//                     >
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </motion.button>
//                   </form>
//                 </motion.div>

//                 {/* Map / Additional Info */}
//                 <motion.div
//                   initial={{ opacity: 0, x: 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6 }}
//                   className="space-y-8"
//                 >
//                   {/* Map Placeholder */}
//                   <div className="glass-card overflow-hidden h-80">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.08468099043!2d-122.46979654638672!3d37.77492951396627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//                     />
//                   </div>

//                   {/* FAQ */}
//                   <div className="glass-card p-8">
//                     <h3 className="font-display text-xl font-bold text-foreground mb-6">
//                       Frequently Asked Questions
//                     </h3>
//                     <div className="space-y-4">
//                       {[
//                         { q: "What's your typical project timeline?", a: "Most projects range from 6-16 weeks depending on scope and complexity." },
//                         { q: "Do you work with startups?", a: "Absolutely! We love working with startups and offer flexible engagement models." },
//                         { q: "What industries do you serve?", a: "We work across fintech, healthcare, e-commerce, SaaS, and more." }
//                       ].map((faq, index) => (
//                         <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
//                           <h4 className="font-medium text-foreground mb-2">{faq.q}</h4>
//                           <p className="text-muted-foreground text-sm">{faq.a}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>

//           </div>
//           <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">


//           </div>
//         </div>

//     </main>
//   )
// }


// export default page


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowCircleUp,
  FaClock,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
} from "react-icons/fa";

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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border rounded-2xl py-6 px-9 text-center"
              style={{ 
                backgroundColor: "hsl(var(--card))",
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
              backgroundColor:  "hsl(var(--card))",
            }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full input"
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full input"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full input resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-button py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <FaArrowCircleUp className="w-5 h-5" />
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
            {/* MAP */}
            <div className="glass-card overflow-hidden h-80">
              <iframe
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=San%20Francisco&output=embed"
              />
            </div>

            {/* FAQ */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">
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
                    <h4 className="font-medium mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
