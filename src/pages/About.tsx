import React from "react";
import SpecialMenu from "../components/SpecialMenu";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import Reservation from "../components/Reservation";

function About() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <Header name_header="About Us" />
      <Reservation />
      <SpecialMenu />
      <ContactInfo />
    </div>
  );
}

export default About;
