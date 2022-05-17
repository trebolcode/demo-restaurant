import React from "react";
import ContactInfo from "../components/ContactInfo";
import Daily from "../components/Daily";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
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
      <ContactInfo />
    </div>
  );
};

export default Home;
