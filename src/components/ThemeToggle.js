// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import { FiSun, FiMoon } from "react-icons/fi";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       aria-label="Toggle theme"
//       className="
//         relative flex items-center justify-center
//         w-10 h-10 rounded-full
//         bg-black/5 dark:bg-white/10
//         border border-black/10 dark:border-white/20
//         backdrop-blur
//         hover:scale-110 transition-all duration-300
//       "
//     >
//       {/* Sun */}
//       <FiSun
//         size={18}
//         className={`
//           absolute transition-all duration-300
//           text-yellow-500
//           ${theme === "dark"
//             ? "opacity-0 rotate-90 scale-0"
//             : "opacity-100 rotate-0 scale-100"}
//         `}
//       />

//       {/* Moon */}
//       <FiMoon
//         size={18}
//         className={`
//           absolute transition-all duration-300
//           text-sky-300
//           ${theme === "dark"
//             ? "opacity-100 rotate-0 scale-100"
//             : "opacity-0 -rotate-90 scale-0"}
//         `}
//       />
//     </button>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        border border-border
        transition-all duration-300
      "
    >
      {/* SHOW SUN when in DARK mode (switch to light) */}
      <FiSun
        size={18}
        className={`
          absolute transition-all duration-300
          ${isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 rotate-90 scale-0"}
        `}
      />

      {/* SHOW MOON when in LIGHT mode (switch to dark) */}
      <FiMoon
        size={18}
        className={`
          absolute transition-all duration-300
          ${isDark
            ? "opacity-0 -rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100"}
        `}
      />
    </button>
  );
}
