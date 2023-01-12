/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0066a3",
        "secondary-color": "#98a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
