import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#EAE9EE",
        "ivory-dark": "#DDDCE2",
        beige: "#E8DFD0",
        "beige-dark": "#D4C8B5",
        sage: "#A3B5A0",
        "sage-dark": "#8A9F87",
        "sage-light": "#C5D4C3",
        champagne: "#D4AF6F",
        "champagne-light": "#E8D5A8",
        "champagne-dark": "#B8944D",
        taupe: "#8B7E74",
        "taupe-light": "#A89F96",
        charcoal: "#3A3330",
        "deep-brown": "#4A3F38",
        "warm-gray": "#6B6460",
      },
      fontFamily: {
        serif: [
          "var(--font-cormorant)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.5rem",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "2.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "display-sm": [
          "2rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
      },
      spacing: {
        section: "6rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(58, 51, 48, 0.08), 0 4px 6px -4px rgba(58, 51, 48, 0.04)",
        "soft-lg":
          "0 10px 40px -10px rgba(58, 51, 48, 0.12), 0 4px 6px -4px rgba(58, 51, 48, 0.04)",
        elegant: "0 20px 60px -15px rgba(58, 51, 48, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "slide-in": "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
