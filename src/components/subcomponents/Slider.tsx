import React from "react";
import ReserButton from "./ReserButton";

interface Props {
  title: string;
}

function Slider({ title }: Props) {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute">
        <div className="w-full lg:w-full h-auto px-4 md:px-10 lg:px-20 pb-32 font-Rubik ">
          <h1 className="text-[24px] md:text-[48px] lg:text-[64px] font-[500] text-colPrimary lg:pb-[10px] leading-[120%]">
            <strong>
              Welcome To <br /> {title}
            </strong>
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-colPrimary mb-[16px] leading-[1.8]">
            See how your users experience your website in realtime or view{" "}
            <br /> trends to see any changes in performance over time.
          </p>
        </div>
      </div>
    </>
  );
}

export default Slider;
