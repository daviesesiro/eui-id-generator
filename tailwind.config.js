module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        card: "3.375in",
        cardd: "324px",
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.65rem",
      },
      height: {
        card: "2.125in",
        cardd: "204px",
      },
      colors: {
        variant: "#64DD17",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
