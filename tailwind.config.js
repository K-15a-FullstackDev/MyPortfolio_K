/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#facc15",
        surface: "#0f0f0f",
        background: "#000000",
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
