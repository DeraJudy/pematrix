// "use client";
// import React from 'react'
// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between w-full py-4 px-6 '>
//       <nav
//         style={{
//           backgroundColor: "hsl(var(--secondary))",
//           borderColor: "hsl(var(--border))",
//         }}
//         className='rounded-xl border flex items-center justify-between w-full px-8 py-4'>

//         <a href="#" className="flex items-center gap-2">
//           <span
//             style={{
//               color: "hsl(var(--primary))",
//             }}
//             className=" font-black text-2xl">
//             Pematrix
//           </span>
//         </a>

//         <div className='flex gap-6'>
//           {["Portfolio", "About", "Contact", "Services"].map((item) => (
//             <Link
//               key={item}
//               href={`/${item.toLowerCase()}`}
//               style={{
//                 color: "hsl(var(--muted-foreground))",
//               }}
              
//               className="
//                  relative text-sm font-bold
//                  transition
//                  after:absolute after:-bottom-1 after:left-0
//                  after:h-px after:w-0
//                  after:bg-current
//                  after:transition-all after:duration-300
//                  hover:after:w-full
//                "
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         <div className='flex items-center gap-4'>
//           {/* Theme Toggle */}
//           <ThemeToggle />

//           <a
//             href="#cta"
//             onClick={() => setMobileMenuOpen(false)}
//             className="gradient-button px-5 py-3 rounded-xl font-bold text-center"
//             style={{
//               backgroundColor: "hsl(var(--primary))",
//               color: "hsl(var(--secondary))",
//             }}
//           >
//             Get Started
//           </a>
//         </div>

//       </nav>

//     </div>
//   )
// }

// export default Navbar

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = ["Portfolio", "About", "Contact", "Services"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="w-full px-4 sm:px-10 lg:px-8 py-4 relative z-50">
      <div className="mx-auto max-w-7xl">
        
        {/* TOP BAR */}
        <nav
          style={{
            backgroundColor: "hsl(var(--secondary))",
            borderColor: "hsl(var(--border))",
          }}
          className="
            flex items-center justify-between
            w-full rounded-xl border
            px-6 py-4
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <span
              style={{ color: "hsl(var(--primary))" }}
              className="font-black text-2xl"
            >
              Pematrix
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ color: "hsl(var(--muted-foreground))" }}
                className="
                  relative text-sm font-bold
                  transition
                  after:absolute after:-bottom-1 after:left-0
                  after:h-px after:w-0
                  after:bg-current
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={22} />
            </button>

            {/* DESKTOP CTA */}
            <Link
              href="#cta"
              style={{
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--secondary))",
              }}
              className="
                hidden md:inline-flex
                px-5 py-3 rounded-xl
                font-bold
              "
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>

      {/* MOBILE OVERLAY + MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-40 backdrop-blur-md bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* MENU */}
            <motion.div
              className="fixed top-6 left-4 right-4 z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div
                style={{
                  backgroundColor: "hsl(var(--secondary))",
                  borderColor: "hsl(var(--border))",
                }}
                className="rounded-xl border p-6 flex flex-col gap-6"
              >
                {/* CLOSE */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <FiX size={22} />
                  </button>
                </div>

                {/* LINKS */}
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-bold"
                  >
                    {item}
                  </Link>
                ))}

                {/* CTA */}
                <Link
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--secondary))",
                  }}
                  className="
                    w-full text-center
                    px-5 py-4 rounded-xl
                    font-bold
                  "
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
