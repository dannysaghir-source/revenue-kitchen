import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0e9e8e",
          light: "#12b8a5",
          dim: "rgba(14,158,142,0.10)",
        },
        ink: "#0d1f1f",
        ash: "#f4f7f7",
        mist: "#e0eaea",
        slate: "#5a7070",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        instrument: ["var(--font-instrument)", "serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
