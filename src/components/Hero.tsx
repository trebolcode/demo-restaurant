import React from "react";
import ReserButton from "./subcomponents/ReserButton";

const Hero = () => {
  return (
    <main className="w-full h-screen flex justify-center items-end bg-slider1 bg-cover bg-center">
      <div className="w-full h-screen flex justify-center items-center font-Rubik">
        <div className="w-[1140px] px-[15px] pb-4">
          <h1 className="text-[64px] font-[500] text-colPrimary pb-[10px] leading-[120%]">
            <strong>
              Welcome To <br /> Live Dinner Restaurant
            </strong>
          </h1>
          <p className="text-[18px] text-colPrimary mb-[16px]">
            See how your users experience your website in realtime or view{" "}
            <br /> trends to see any changes in performance over time.
          </p>
          <ReserButton name_button="Reservation" />
        </div>
      </div>
      <div className="my-0 m-auto absolute top-[46%] w-full">
        <a
          href=""
          className="absolute left-0 bg-colReser w-[50px] h-[50px] flex justify-center items-center rounded-[4px]"
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-colPrimary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </i>
        </a>
        <a
          href=""
          className="absolute right-0 bg-colReser w-[50px] h-[50px] flex justify-center items-center rounded-[4px]"
        >
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-colPrimary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </i>
        </a>
      </div>
      <nav className="w-full h-[49px] flex flex-nowrap justify-center space-x-1 absolute rounded-full">
        <a
          href=""
          className="w-[12px] h-[45px] border-colPrimary rounded-full bg-colReser "
        ></a>
        <a
          href=""
          className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full"
        ></a>
        <a
          href=""
          className="w-[12px] h-[45px] border-2 border-colPrimary rounded-full"
        ></a>
      </nav>
    </main>
  );
};

export default Hero;
