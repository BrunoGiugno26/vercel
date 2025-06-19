/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "rgb(250, 167, 170)", // Very light primary
          200: "rgb(240, 137, 147)", // Lighter primary
          300: "rgb(230, 107, 123)", // Light primary
          400: "rgb(220, 77, 100)",  // Slightly lighter primary
          500: "rgb(210, 47, 77)",   // Your base primary color
        },
        secondary: {
          100: "rgb(225, 231, 241)", // Very light secondary
          200: "rgb(210, 219, 230)", // Lighter secondary
          300: "rgb(195, 207, 219)", // Light secondary
          400: "rgb(180, 195, 208)", // Slightly lighter secondary
          500: "rgb(165, 183, 197)", // Your base secondary color
        },
        // Puedes descomentar y usar tus otros colores si aún los necesitas:
        // accent: '#EF4444',     // Red
        // background: '#F3F4F6', // Light Gray
        // text: '#111827',       // Dark Gray
        // border: '#D1D5DB',     // Gray
      },
    },
  },
  plugins: [],
}

