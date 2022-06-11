module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "#333",
        primary: "#FFBB44",
        secondary: "#FFF7E6",
      },
      keyframes: {
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        bump: "bump 300ms ease-out",
      },
    },
  },
  plugins: [],
};
