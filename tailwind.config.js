/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        poppins: ["Poppins", "sans-serif"],
        ibm: ["IBM", "sans-serif"],
        leaguespartan: ["LeagueSpartan", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
