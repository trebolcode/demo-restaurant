import React from "react";
import Daily from "../components/Daily";
import SpecialMenu from "../components/SpecialMenu";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Header from "../components/Header";

function Menu() {
  return (
    <div className="w-full bg-slate-300 flex flex-col justify-center items-center">
      <Header name_header="Special Menu" />
      <SpecialMenu />
      <Daily />
      <Reviews />
      <Contact />
    </div>
  );
}

export default Menu;
