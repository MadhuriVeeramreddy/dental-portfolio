/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D8DC4",
        dark: "#333333",
        light: "#ffffff",
        gray: {
          light: "#f5f5f5",
        },
        text: "#444444",
      },
      fontFamily: {
        satoshi: ["Satoshi", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1-lg": ["56px", "1.1em"],
        "h1-md": ["52px", "1.1em"],
        "h1-sm": ["40px", "1.1em"],
      },
      letterSpacing: {
        h1: "-0.02em", // -2px equivalent
      },
      lineHeight: {
        relaxed: "2em",
      },
    },
  },
  plugins: [],
};
