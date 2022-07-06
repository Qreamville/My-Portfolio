/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1200px"
    },
    extend: {
      colors: {
        "tomato": "#ff6347",
        "bg-blue": "#070b25"
      },
    },
  },
  plugins: [],
}
