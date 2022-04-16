module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        reservation: "url('/src/assets/img/about-bg.jpg')",
        slider1: "url('./src/assets/img/slider-01.jpg')",
      },
      colors: {
        colPrimary: "#ffffff",
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