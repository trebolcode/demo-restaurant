import React from "react";
import ReserButton from "./subcomponents/ReserButton";
import imgReservation from "../assets/img/about-img.jpg";

const Reservation = () => {
  return (
    <section className="bg-reservation bg-cover bg-bottom py-[70px] w-full h-auto justify-center flex flex-col md:flex-row">
      <div className="px-[15px] pb-[30px] md:pb-0 font-Rubik w-auto xl:w-[570px] h-auto md:w-[50%] md:pl-[40px] lg:pl-[45px] xl:pl-0">
        <h2 className="font-medium text-[22px] md:text-[30px] pb-[10px] leading-[120%]">
          Welcome To{" "}
          <span className="text-colReser">Live Dinner Restaurant</span>
        </h2>
        <h4 className="font-medium text-base pb-[10px] leading-[120%]">
          Little Story
        </h4>
        <p className="leading-[1.8] text-[18px] mb-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu.
          Nullam facilisis, eros in eleifend luctus, odio ante sodales augue,
          eget lacinia lectus erat et sem.{" "}
        </p>
        <p className="leading-[1.8] text-[18px] mb-[16px]">
          Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed
          aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat
          elit in justo vestibulum, et maximus sem pulvinar.
        </p>
        <ReserButton name_button="reservation" />
      </div>
      <div className="w-auto md:w-[50%] xl:w-[540px] h-auto px-[15px] md:pr-[40px] lg:pr-[45px] xl:pr-0">
        <img
          src={imgReservation}
          alt=""
          className="xl:w-[540px] xl:h-[438.75px] shadow-shaReser"
        />
      </div>
    </section>
  );
};

export default Reservation;
