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
        slider2: "url('./src/assets/img/slider-02.jpg')",
        slider3: "url('./src/assets/img/slider-03.jpg')",
        allBg: "url('./src/assets/img/all-bg.jpg')",
      },
      colors: {
        colPrimary: "#ffffff",
        colReser: "#d65106",
        colReserHover: "#333333",
        colSliderHover: "#010101",
        "primary-orange": "#d44625",
      },
      boxShadow: {
        shaReser: "20px 20px 0px 0px rgba(214,81,6,1)",
      },
    },
  },
  plugins: [],
};