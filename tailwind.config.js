import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // for usage with opacity value
        secondary: "var(--color-secondary)",
        carmine: "var(--color-carmine)",
        carmineAccent: "var(--color-carmine-accent)",
        sunglow: "var(--color-sunglow)",
        culturedGrey: "var(--color-cultured-grey)",
        almostWhite: "var(--color-almost-white)",
        chalk: "var(--color-chalk)",
      },
      letterSpacing: {
        tinyTighter: ".005em",
      },
      padding: {
        15: "60px",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
