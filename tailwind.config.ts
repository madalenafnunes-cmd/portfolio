import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F7F5FF",
        surface: "#FFFFFF",
        border: "#E8E4F5",
        primary: "#A78BFA",
        secondary: "#93C5FD",
        ink: "#1E1B2E",
        muted: "#6B6880",
        badgeBg: "#EDE9FE",
        badgeText: "#7C3AED",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #EDE9FE 0%, #DBEAFE 100%)",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
