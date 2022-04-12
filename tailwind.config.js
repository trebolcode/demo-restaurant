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
        colReser: "#d65106",
        colReserHover: "#333333",
      },
      boxShadow: {
        shaReser: "20px 20px 0px 0px rgba(214,81,6,1)",
      },
    },
  },
  plugins: [],
};
