import React, { useRef } from "react";
import Slider from "./subcomponents/Slider";
import ReserButton from "./subcomponents/ReserButton";
import SliderLeft from "../assets/icon/chevron-left.svg";
import SliderRight from "../assets/icon/chevron-right.svg";

const Hero = () => {
  // Codigo para Carousel
  const slideshow: any = useRef();

  const nextSlide = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = "100ms ease-in-out all";

      const sizeSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";
        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const previousSlide = () => {
    console.log("previousSlide");
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";

      const sizeSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = "10ms ease-in-out all";
        slideshow.current.style.transform = `translateX(0)`;
      }, 0);

      const transicion = () => {
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = "translateX(0)";
        slideshow.current.insertBefore(
          lastElement,
          slideshow.current.children[0]
        );
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  return (
    <main className="w-full h-screen flex justify-center items-end relative">
      <div
        ref={slideshow}
        className="w-full h-screen flex flex-row justify-center items-end flex-nowrap"
      >
        <div id="slide1" className="w-full h-screen absolute">
          <div className="w-full h-screen bg-slider1 bg-cover bg-center absolute"></div>
          <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
          <Slider title="Live Dinner Restaurant" />
        </div>

        <div id="slide2" className="w-full h-screen absolute">
          <div className="w-full h-screen bg-slider2 bg-cover bg-center absolute"></div>
          <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
          <Slider title="Live Dinner Restaurant" />
        </div>

        <div id="slide3" className="w-full h-screen absolute">
          <div className="w-full h-screen bg-slider3 bg-cover bg-center absolute"></div>
          <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>
          <Slider title="Yamifood Restaurant" />
        </div>
      </div>

      <div className="my-0 m-auto top-[54%] lg:top-[46%] w-full absolute">
        <button
          onClick={previousSlide}
          className="absolute left-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={SliderLeft} className="h-8 w-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-colReser w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-[4px] lg:hover:bg-colSliderHover transition duration-[300ms] ease-in-out"
        >
          <img src={SliderRight} className="h-8 w-8" />
        </button>
      </div>

      <div className="top-[70%] left-[6%] lg:top-[64%] lg:left-[6%] absolute font-[600] font-Rubik">
        <ReserButton name_button="Reservation" />
      </div>
    </main>
  );
};

export default Hero;
