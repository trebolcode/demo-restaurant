import React, { useState } from "react";
import Cards from "./subcomponents/Cards";
import images from "../assets/images";

const SpecialMenu = () => {
  const [select, setSelect] = useState("all");

  return (
    <section className="w-full h-auto py-16 flex flex-col items-center justify-center bg-white">
      <div className="w-full h-32">
        <h2 className="w-full min-h-min pb-3 text-center text-3xl font-Rubik">
          Special Menu
        </h2>
        <p className="text-center text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>

      <div className="w-full flex px-24">
        <div className="w-[25%] flex flex-col">
          <button
            onClick={() => setSelect("all")}
            className="w-64 py-2 px-4 focus:bg-colReser hover:bg-colReser rounded-md focus:text-white hover:text-white transition-all ease-in-out duration-400 cursor-pointer flex"
          >
            <a className="font-Rubik text-xl">All</a>
          </button>
          <button
            onClick={() => setSelect("drinks")}
            className="w-64 py-2 px-4 focus:bg-colReser hover:bg-colReser rounded-md focus:text-white hover:text-white transition-all ease-in-out duration-400 cursor-pointer flex"
          >
            <a className="font-Rubik text-xl">Drinks</a>
          </button>
          <button
            onClick={() => setSelect("lunch")}
            className="w-64 py-2 px-4 focus:bg-colReser hover:bg-colReser rounded-md focus:text-white hover:text-white transition-all ease-in-out duration-400 cursor-pointer flex"
          >
            <a className="font-Rubik text-xl">Lunch</a>
          </button>
          <button
            onClick={() => setSelect("dinner")}
            className="w-64 py-2 px-4 focus:bg-colReser hover:bg-colReser rounded-md focus:text-white hover:text-white transition-all ease-in-out duration-400 cursor-pointer flex"
          >
            <a className="font-Rubik text-xl">Dinner</a>
          </button>
        </div>

        <div className="w-[75%]">
          <div className="w-full gap-y-8 grid grid-cols-3 grid-rows-1">
            {images.grid_image
              .filter((item) => item.category === select || item.all === select)
              .map((image) => (
                <Cards
                  key={image.id}
                  subtitle={image.title}
                  description={image.description}
                  price={image.price}
                  img={image.img}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
