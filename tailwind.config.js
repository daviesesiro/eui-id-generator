module.exports = {
  purge: ["./public/**/*.html", "./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      width: {
        card: "477px",
        "small-card": "3.375in ",
      },
      height: {
        card: "300px",
        "small-card": " 2.125in",
      },
      fontSize: {
        xxxs: "0.5rem",
        xxs: "0.65rem",
      },
      colors: {
        variant: "#64DD17",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "disabled"],
      cursor: ["hover", "disabled"],
    },
  },
  plugins: [],
};
