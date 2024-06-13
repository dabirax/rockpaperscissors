/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
      colors: {
        primary: "hsl(217, 16%, 45%)",
        secondary: "hsl(217, 16%, 45%)",
        tertiary: "hsl(237, 49%, 15%)",
      },
    },
  },
  plugins: [],
};
