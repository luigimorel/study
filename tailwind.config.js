module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {},
    },
    textColor: {
      primary: "#717CFF",
      secondary: "#7D7D7D",
      tertiary: "#2F2F2F",
      white: "#ffffff",
      minor: "#37474F",
    },
    backgroundColor: (theme) => ({
      primary: "#717CFF",
      secondary: "#ffed4a",
      forth: "#fafafa",
      feature: "#FAFAFA",
      "main-bg": "#f2f2f2",
      white: "#ffffff",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
