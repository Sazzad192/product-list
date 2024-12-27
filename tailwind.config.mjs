/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "orange-dark-gradient": "linear-gradient(to bottom, #D66F00, #F7B166)",
        "orange-bold-gradient": "linear-gradient(to left, #FFA03B, #F27D00)",
      },
      colors: {
        primary: {
          500: "var(--color-primary-500)",
          400: "var(--color-primary-400)",
          300: "var(--color-primary-300)",
          200: "var(--color-primary-200)",
          100: "var(--color-primary-100)",
        },
        orange: {
          500: "var(--color-orange-500)",
          400: "var(--color-orange-300)",
        },
        green: {
          500: "var(--color-green-500)",
        },
        dark: {
          500: "var(--color-dark-500)",
        },
      },
    },
  },
  plugins: [],
};
