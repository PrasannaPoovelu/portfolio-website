import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Semantic theme tokens (CSS-variable backed) ──
        "theme-page":    "var(--bg-page)",
        "theme-surface": "var(--bg-surface)",
        "theme-card":    "var(--bg-card)",
        "theme-border":  "var(--border)",
        "theme-base":    "var(--text-base)",
        "theme-muted":   "var(--text-muted)",
        "theme-subtle":  "var(--text-subtle)",

        // ── Brand colours ──
        primary: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },

        // ── Keep legacy dark-* for backward compat ──
        dark: {
          bg:      "#0a0f1e",
          surface: "#0f172a",
          card:    "#1e293b",
          border:  "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        theme: "var(--shadow)",
      },
      animation: {
        "fade-in":       "fadeIn 0.6s ease-out forwards",
        "slide-up":      "slideUp 0.6s ease-out forwards",
        "bounce-slow":   "bounce 3s infinite",
        "pulse-slow":    "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient:        "gradient 6s ease infinite",
        "spin-slow":     "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};

export default config;
