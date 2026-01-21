"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        hover:scale-110 transition-all duration-300
        shadow-md
      "
      aria-label="Toggle theme"
    >
      {/* Sun */}
      <span
        className={`
          absolute transition-all duration-300
          ${theme === "dark"
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"}
        `}
      >
        ☀️
      </span>

      {/* Moon */}
      <span
        className={`
          absolute transition-all duration-300
          ${theme === "dark"
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-0"}
        `}
      >
        🌙
      </span>
    </button>
  );
}
