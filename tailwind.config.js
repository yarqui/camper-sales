import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(var(--color-primary) / <alpha-value>)", // rgb with <alpha-value> for usage with opacity
        secondaryColor: "var(--color-secondary)",
        carmineColor: "var(--color-carmine)",
        carmineAccentColor: "var(--color-carmine-accent)",
        sunglowColor: "var(--color-sunglow)",
        culturedGreyColor: "var(--color-cultured-grey)",
        almostWhiteColor: "var(--color-almost-white)",
        chalkColor: "var(--color-chalk)",
      },
      letterSpacing: {
        tinyTighter: ".005em",
      },
      padding: {
        15: "60px",
        25: "100px",
      },
      transitionDuration: {
        250: "250ms",
      },
      screens: {
        "1.5xl": "1440px",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
