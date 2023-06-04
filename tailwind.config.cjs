/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {

      colors: {
        //white: "#8f9197",

        secondary: "#0000ff",
        primary: "#fafafa",
      },
      fontFamily: {
        sans: ["Neue Haas Grotesk Text Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },

}
