import React from "react";
import ReserButton from "./subcomponents/ReserButton";

const Hero = () => {
  return (
    <main className="w-full h-[300px]" >
      <div className="flex-col justify-center font-Rubik">
      <h1>Welcome To Live Dinner Restaurant</h1>
      <p>
        See how your users experience your website in realtime or view trends to
        see any changes in performance over time.
      </p>
      <ReserButton name_button="Reservation"/>

      </div>
    </main>
  );
};

export default Hero;
