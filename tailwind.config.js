/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3734A9",
        secondary: "#757095",
        banner: "#64607D",
        orange: "#FF7F5C",
      },

      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      boxShadow: {
        buttonShadow:
          "0px 1.241px 3.148px 0px rgba(55, 52, 169, 0.02), 0px 5.459px 6.519px 0px rgba(55, 52, 169, 0.03), 0px 13.4px 13px 0px rgba(55, 52, 169, 0.04), 0px 25.807px 25.481px 0px rgba(55, 52, 169, 0.04), 0px 43.426px 46.852px 0px rgba(55, 52, 169, 0.05), 0px 67px 80px 0px rgba(55, 52, 169, 0.07)",
      },
    },
  },
  plugins: [],
};
