/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    //Configure Screen Sizes
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      oswald: ["oswald-bold"]
    },
    extend: {
      //Add Project Colors
      colors: {
        primaryDark: "#003459",
        primaryLight: "#003566",
        AccentColor: "#F15BB5",
        hoverColor: "#F15BB5",
      }
    },
  },
  plugins: [],
}
