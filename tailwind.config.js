/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "b-gradient": "#F7D8FF",
        "t-gradient": "#C3E0FF",
        "lg-color": "#29233b",
      },
      fontFamily: {
        "heading-1": ["PT Serif", "serif"],
        "sub-heading": ["Roboto", "sans-serif"],
        "pera-font": ["Inter", "sans-serif"],
      },
      zIndex: {
        n1: "-1",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
    plugins: [],
  },
};
