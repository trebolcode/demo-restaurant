module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        reservation: "url('/src/assets/img/about-bg.jpg')",
      },
      colors: {
        "primary-orange": "#d44625",
      },
    },
  },
  plugins: [],
};
