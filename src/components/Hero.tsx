import React, { useRef, useState } from "react";
import Slider from "./subcomponents/Slider";
import ReserButton from "./subcomponents/ReserButton";
import images from "../assets/images";

const Hero = () => {
  const [select, setSelect] = useState(1);
  const [styleBg, setStyleBg] = useState("bg-slider1");
  const [title, setTitle] = useState("Live Dinner Restaurant");

  // const [counter, setCounter] = useState(0);
  // const counterUp = () => {
  //   const bg_list = ["bg-slider1", "bg-slider2", "bg-slider3"];
  //   console.log(counter);
  //   if (counter < bg_list.length) {
  //     setCounter(counter);
  //   } else {
  //     setCounter(0);
  //   }
  //   console.log(bg_list.length);
  // };

  const click01 = () => {
    setStyleBg("bg-slider1");
    setTitle("Live Dinner Restaurant");
    setSelect(1);
  };
  const click02 = () => {
    setStyleBg("bg-slider2");
    setTitle("Live Dinner Restaurant");
    setSelect(2);
  };
  const click03 = () => {
    setStyleBg("bg-slider3");
    setTitle("Yamifood Restaurant");
    setSelect(3);
  };

  const previousClick = () => {
    switch (select) {
      case 1:
        setStyleBg("bg-slider3");
        setTitle("Yamifood Restaurant");
        setSelect(3);
        break;
      case 2:
        setStyleBg("bg-slider1");
        setTitle("Live Dinner Restaurant");
        setSelect(1);
        break;
      case 3:
        setStyleBg("bg-slider2");
        setTitle("Live Dinner Restaurant");
        setSelect(2);
        break;
    }
  };

  const nextClick = () => {
    switch (select) {
      case 1:
        setStyleBg("bg-slider2");
        setTitle("Live Dinner Restaurant");
        setSelect(2);
        break;
      case 2:
        setStyleBg("bg-slider3");
        setTitle("Yamifood Restaurant");
        setSelect(3);
        break;
      case 3:
        setStyleBg("bg-slider1");
        setTitle("Live Dinner Restaurant");
        setSelect(1);
        break;
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-end relative">
      <div className="w-full h-screen flex flex-row justify-center items-end flex-nowrap">
        <div className="w-full h-screen absolute">
          <div
            className={`w-full h-screen bg-cover bg-center absolute ${styleBg}`}
          ></div>

          <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>

          <Slider title={title} />
        </div>
      </div>

      <div className="w-full h-14 absolute flex space-x-1 justify-center items-center">
        <button
          onClick={click01}
          className={`w-4 h-12 bg-transparent rounded-full border-2 border-white ${
            select === 1 ? "bg-colReser" : "bg-transparent"
          }`}
        />
        <button
          onClick={click02}
          className={`w-4 h-12 bg-transparent rounded-full border-2 border-white ${
            select === 2 ? "bg-colReser" : "bg-transparent"
          }`}
        />
        <button
          onClick={click03}
          className={`w-4 h-12 bg-transparent rounded-full border-2 border-white ${
            select === 3 ? "bg-colReser" : "bg-transparent"
          }`}
        />
      </div>

      <div className="my-0 m-auto top-[54%] lg:top-[46%] w-full absolute">
        <button
          onClick={previousClick}
          className="absolute left-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={images.icon[0].img} className="h-8 w-8" />
        </button>

        <button
          onClick={nextClick}
          className="absolute right-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={images.icon[1].img} className="h-8 w-8" />
        </button>
      </div>

      <div className="top-[70%] left-[6%] lg:top-[64%] lg:left-[6%] absolute font-[600] font-Rubik">
        <ReserButton name_button="Reservation" />
      </div>
    </main>
  );
};

export default Hero;
