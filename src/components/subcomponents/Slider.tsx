import React from "react";
import ReserButton from "./ReserButton";

export function Slide1() {
  return (
    <>
      <div className="w-full h-screen bg-slider1 bg-cover bg-center absolute"></div>
      <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>

      <div className="w-full h-screen flex justify-center items-center absolute">
        <div className="w-[1140px] h-auto px-[15px] pb-4 font-Rubik ">
          <h1 className="text-[64px] font-[500] text-colPrimary pb-[10px] leading-[120%]">
            <strong>
              Welcome To <br /> Live Dinner Restaurant
            </strong>
          </h1>
          <p className="text-[18px] text-colPrimary mb-[16px] leading-[1.8]">
            See how your users experience your website in realtime or view{" "}
            <br /> trends to see any changes in performance over time.
          </p>
          <ReserButton name_button="Reservation" />
        </div>
      </div>
    </>
  );
}

export function Slide2() {
  return (
    <>
      <div className="w-full h-screen bg-slider2 bg-cover bg-center absolute"></div>
      <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>

      <div className="w-full h-screen flex justify-center items-center absolute">
        <div className="w-[1140px] h-auto px-[15px] pb-4 font-Rubik ">
          <h1 className="text-[64px] font-[500] text-colPrimary pb-[10px] leading-[120%]">
            <strong>
              Welcome To <br /> Live Dinner Restaurant
            </strong>
          </h1>
          <p className="text-[18px] text-colPrimary mb-[16px] leading-[1.8]">
            See how your users experience your website in realtime or view{" "}
            <br /> trends to see any changes in performance over time.
          </p>
          <ReserButton name_button="Reservation" />
        </div>
      </div>
    </>
  );
}

export function Slide3() {
  return (
    <>
      <div className="w-full h-screen bg-slider3 bg-cover bg-center absolute"></div>
      <div className="w-full h-screen bg-colReserHover opacity-50 absolute"></div>

      <div className="w-full h-screen flex justify-center items-center absolute">
        <div className="w-[1140px] h-auto px-[15px] pb-4 font-Rubik ">
          <h1 className="text-[64px] font-[500] text-colPrimary pb-[10px] leading-[120%]">
            <strong>
              Welcome To
              <br /> Yamifood Restaurant
            </strong>
          </h1>
          <p className="text-[18px] text-colPrimary mb-[16px] leading-[1.8]">
            See how your users experience your website in realtime or view{" "}
            <br /> trends to see any changes in performance over time.
          </p>
          <ReserButton name_button="Reservation" />
        </div>
      </div>
    </>
  );
}
