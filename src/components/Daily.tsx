import React from "react";
import { useState } from "react";

const Daily = () => {
  const [select, setSelect] = useState(false);
  const [styleWork, setStyleWork] = useState("bg-slider3 bg-fixed");

  const clickIn = () => {
    if (select) {
      const style_in = " w-full h-64 bg-slider1  bg-fixed";
      setStyleWork(style_in);
      setSelect(false);
    } else {
      const style_in = "w-full h-64 bg-slider2  bg-fixed";
      setStyleWork(style_in);
      setSelect(true);
    }
  };

  return (
    <section
      onClick={clickIn}
      className={`w-full h-64 flex justify-center items-center cursor-pointer ${styleWork}`}
    >
      Daily
    </section>
  );
};

export default Daily;
