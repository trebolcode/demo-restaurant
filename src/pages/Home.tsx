import React from "react";
import Contact from "../components/Contact";
import Daily from "../components/Daily";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Reservation from "../components/Reservation";
import Reviews from "../components/Reviews";
import SpecialMenu from "../components/SpecialMenu";

const Home = () => {
  return (
    <div className="w-full bg-slate-300 flex flex-col justify-center items-center">
      <Hero />
      <Reservation />
      <Daily />
      <SpecialMenu />
      <Gallery />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;