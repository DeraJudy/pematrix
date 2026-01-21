// "use client";

// import Link from "next/link";
// import ThemeToggle from "./ThemeToggle";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-40 backdrop-blur bg-black/40 px-8 py-4 flex justify-between">
//       <Link href="/" className="text-lg">Pematrix</Link>
//       <div className="flex gap-6">
//         <Link href="/portfolio">Portfolio</Link>
//         <Link href="/about">About</Link>
//         <Link href="/contact">Contact</Link>
//         <ThemeToggle />
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 w-full z-40
        backdrop-blur-md
        bg-white/70 dark:bg-black/40
        border-b border-black/5 dark:border-white/10
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex items-center justify-between
        "
      >
        {/* Brand */}
        <Link
          href="/"
          className="
            text-lg tracking-wide
            font-medium
            text-black dark:text-white
            hover:opacity-80 transition
          "
        >
          Pematrix
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          {["Portfolio", "About", "Contact", "Services"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="
                relative text-sm
                text-black/70 dark:text-white/70
                hover:text-black dark:hover:text-white
                transition
                after:absolute after:-bottom-1 after:left-0
                after:h-[1px] after:w-0
                after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
