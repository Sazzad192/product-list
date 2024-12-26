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
      colors: {
        primary: {
          500: "var(--color-primary-500)",
          400: "var(--color-primary-400)",
          300: "var(--color-primary-300)",
          200: "var(--color-primary-200)",
          100: "var(--color-primary-100)",
        },
        secondary: {
          500: "var(--color-secondary-500)",
          400: "var(--color-secondary-400)",
          300: "var(--color-secondary-300)",
        },
      },
    },
  },
  plugins: [],
};
