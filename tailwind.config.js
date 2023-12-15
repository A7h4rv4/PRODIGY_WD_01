/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cust_color1: "#5b53e9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
