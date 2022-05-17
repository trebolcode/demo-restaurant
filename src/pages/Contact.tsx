import React from "react";
import SpecialMenu from "../components/SpecialMenu";
import ContactInfo from "../components/ContactInfo";
import Header from "../components/Header";
import Reservation from "../components/Reservation";
import Map from "../components/subcomponents/Map";
import ContactForm from "../components/subcomponents/ContactForm";

function Contact() {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center">
      <Header name_header="Contact" />
      <Map />
      <ContactForm />
      <ContactInfo />
    </div>
  );
}

export default Contact;
