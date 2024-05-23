/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mydarkTurk: "#003135",
        mylightTurk: "#024950",
        mybrown: "#964734",
        myblue: "#0FA4AF",
        mylightBlue: "#AFDDE5",
      },
    },
  },
  plugins: [],
});
