import React from "react";
import images from "../assets/images";
import ImageGrid from "./subcomponents/ImageGrid";

const Gallery = () => {
  return (
    <section className="w-full pt-16 flex flex-col items-center justify-center bg-white">
      <div className="w-full h-32">
        <h2 className="w-full min-h-min pb-3 text-center text-3xl font-Rubik">
          Gallery
        </h2>
        <p className="text-center text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <div className="w-10/12 mt-16 mb-10 min-h-min grid grid-cols-3 grid-rows-2 gap-4">
        {images.gallery.map((image) => {
          return <ImageGrid src_image={image["img"]} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
