import React, { useEffect, useState } from "react";
import Slider from "./subcomponents/Slider";
import ReserButton from "./subcomponents/ReserButton";
import images from "../assets/images";

const Hero = () => {
  const [contador, setContador] = useState(0);

  const carousel = images.bg_images.map((item) => item.name);

  const nextClick = () => {
    if (contador + 1 < carousel.length) {
      setContador(contador + 1);
    }
    if (contador + 1 === carousel.length) {
      setContador(0);
    }
  };

  const previousClick = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
    if (contador === 0) {
      setContador(carousel.length - 1);
    }
  };

  const imageIndicator = images.bg_images.map((item, index) => (
    <button
      key={index}
      onClick={() => setContador(index)}
      className={
        contador === index
          ? `w-4 h-12 bg-colReser rounded-full border-2 border-transparent transition-all ease-in duration-300`
          : `w-4 h-12 bg-transparent rounded-full border-2 border-white transition-all ease-in duration-300`
      }
    ></button>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      nextClick();
    }, 4000);
    return () => clearInterval(interval);
  }, [contador]);

  return (
    <main className="w-full h-screen flex justify-center items-end relative">
      <div className="w-full h-screen flex flex-row justify-center items-end flex-nowrap">
        <div className="w-full h-screen absolute">
          <div
            className={`w-full h-screen bg-cover bg-center absolute bg-${carousel[contador]} transition-all ease-in duration-300`}
          ></div>

          <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>

          <Slider title={images.bg_images[contador].title} />
        </div>
      </div>

      <div className="w-full h-14 absolute flex space-x-1 justify-center items-center">
        {imageIndicator}
      </div>

      <div className="my-0 m-auto top-[54%] lg:top-[46%] w-full absolute">
        <button
          onClick={() => previousClick()}
          className="absolute left-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-300 ease-in-out"
        >
          <img src={images.icon[0].img} className="h-8 w-8" />
        </button>

        <button
          onClick={() => nextClick()}
          className="absolute right-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-300 ease-in-out"
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
