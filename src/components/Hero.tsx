import React from "react";
import Slider from "./subcomponents/Slider";
import SliderLeft from "../assets/icon/chevron-left.svg";
import SliderRight from "../assets/icon/chevron-right.svg";
import "./Hero.css";

const Hero = () => {
  
  // Codigo para js para cambiar el color de los botones
  const punto = document.querySelectorAll(".punto");

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove("activo");
      });

      punto[i].classList.add("activo");
    });
  });

  return (
    <main className="w-full h-screen flex justify-center items-end relative">
      <div
        id="slide1"
        className="w-full h-screen opacity-100 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <div className="w-full h-screen bg-slider1 bg-cover bg-center absolute"></div>
        <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
        <Slider title="Live Dinner Restaurant" />
      </div>

      <div
        id="slide2"
        className="w-full h-screen opacity-0 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <div className="w-full h-screen bg-slider2 bg-cover bg-center absolute"></div>
        <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
        <Slider title="Live Dinner Restaurant" />
      </div>

      <div
        id="slide3"
        className="w-full h-screen opacity-0 target:opacity-100 absolute transition-all ease-in-out duration-500"
      >
        <div className="w-full h-screen bg-slider3 bg-cover bg-center absolute"></div>
        <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
        <Slider title="Yamifood Restaurant" />
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
        <a href="#slide1">
          <div className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full punto activo"></div>
        </a>
        <a href="#slide2">
          <div className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full punto"></div>
        </a>
        <a href="#slide3">
          <div className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full punto"></div>
        </a>
      </nav>
    </main>
  );
};

export default Hero;
