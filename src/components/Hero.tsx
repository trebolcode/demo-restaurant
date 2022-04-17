import React from "react";

import ReserButton from "./subcomponents/ReserButton";
import { Slide1, Slide2, Slide3 } from "./subcomponents/Slider";
import SliderLeft from "../assets/icon/chevron-left.svg";
import SliderRight from "../assets/icon/chevron-right.svg";

const Hero = () => {
  return (
    <main className="w-full h-screen flex justify-center items-end relative">
      <div
        id="slide1"
        className="w-full h-screen opacity-100 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <Slide1 />
      </div>
      <div
        id="slide2"
        className="w-full h-screen opacity-0 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <Slide2 />
      </div>
      <div
        id="slide3"
        className="w-full h-screen opacity-0 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <Slide3 />
      </div>

      <div className="my-0 m-auto absolute top-[46%] w-full">
        <a
          href="#slide1"
          className="absolute left-0 bg-colReser w-[50px] h-[50px] flex justify-center items-center rounded-[4px] hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={SliderLeft} className="h-8 w-8" />
        </a>
        <a
          href="#slide2"
          className="absolute right-0 bg-colReser w-[50px] h-[50px] flex justify-center items-center rounded-[4px] hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={SliderRight} className="h-8 w-8" />
        </a>
      </div>

      <nav className="w-full h-[49px] flex flex-nowrap justify-center space-x-1 absolute rounded-full">
        <a
          href="#slide1"
          className="w-[12px] h-[45px] border-colPrimary rounded-full bg-colReser"
        ></a>
        <a
          href="#slide2"
          className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full"
        ></a>
        <a
          href="#slide3"
          className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full"
        ></a>
      </nav>
    </main>
  );
};

export default Hero;
