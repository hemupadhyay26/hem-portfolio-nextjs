/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f56692",
          white: "#454e56",
          black: "#000000",
          grey0: "#f8f8f8",
          grey1: "#6c7983",
          grey2: "#6c7983",
          grey3: "#6c7983",
          grey4: "#454e56",
          grey5: "#f8f8f8",
          grey6: "#12181b",
        },
        dark: {
          primary: "#191d2b",
          secondary: "#27ae60",
          white: "#ffffff",
          black: "#000000",
          grey0: "#f8f8f8",
          grey1: "#dbe1e8",
          grey2: "#b2becd",
          grey3: "#6c7983",
          grey4: "#454e56",
          grey5: "#2a2e35",
          grey6: "#12181b",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
