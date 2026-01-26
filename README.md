Pematrix Technologies – Consulting & Portfolio Website

A modern, recruiter-ready tech consulting and portfolio website built with **Next.js App Router**, designed to showcase enterprise-grade engineering, clean UI architecture, and thoughtful UX interactions.

---

✨ Features

* Next.js App Router (JavaScript)
* Tailwind CSS with CSS-variable based theming
* Dark / Light mode (next-themes)
* Responsive, mobile-first navigation
* Animated mobile menu (slide + fade)
* Backdrop blur overlay
* Theme-aware hero imagery
* Cursor effects (custom cursor + glow)
* Noise texture overlay

---

#🧠 Design Philosophy

This project is intentionally designed to feel:

* calm, not flashy
* confident, not loud
* enterprise-ready, not experimental

Animations are subtle and purposeful.
The architecture prioritizes maintainability and clarity over gimmicks.

---

🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** JavaScript (no TypeScript)
* **Styling:** Tailwind CSS + CSS Variables
* **Theming:** next-themes
* **Animations:** Framer Motion
* **Icons:** react-icons
* **Images:** next/image + Cloudinary
* **Fonts:** Geist Sans & Geist Mono

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ layout.js        # Global layout & providers
│  ├─ page.js          # Home page
│  ├─ globals.css      # CSS variables & base styles
│
├─ components/
│  ├─ Navbar.js        # Responsive navigation
│  ├─ ThemeToggle.js   # Dark / Light mode switch
│  ├─ Hero.js          # Theme-aware hero section
│  ├─ Cursor.js        # Custom cursor
│  ├─ Mouse.js         # Mouse glow effect
│  ├─ Footer.js
│
└─ public/
```

---

## 🎨 Theming System

The entire color system is driven by **CSS variables**, not hardcoded colors.

### Light & Dark themes are defined in `globals.css`

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --primary: 199 89% 48%;
  --border: 214 32% 91%;
}

.dark {
  --background: 222 47% 6%;
  --foreground: 210 40% 98%;
  --primary: 199 89% 55%;
  --border: 222 47% 20%;
}
```

UX behavior:

* When in dark mode → show **Sun icon** (switch to light)
* When in light mode → show **Moon icon** (switch to dark)

---

All animations are handled via **Framer Motion**.

---

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```
---

## 👤 Author

Chidera Ulu

---

