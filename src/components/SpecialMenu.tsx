import React from "react";
import Cards from "./subcomponents/Cards";
import images from "../assets/images";

const SpecialMenu = () => {
  return (
    <section className="">
      <h2>Special Menu</h2>
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
      <div className="w-full flex flex-1 flex-3">
        <div>left bar</div>
        <div className="w-full h-96 grid gap-2 grid-cols-3 grid-rows-3">
          {images.grid_image.map((image) => (
            <Cards
              subtitle={image.title}
              description={image.description}
              price={image.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
