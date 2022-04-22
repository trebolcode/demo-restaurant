import React from "react";

interface Props {
  src_image: string;
}

const ImageGrid = ({ src_image }: Props) => {
  return (
    <figure className="w-full border-4 border-primary-orange hover:scale-105 hover:border-transparent hover:drop-shadow-lg duration-300 ease-in-out transition-all cursor-pointer">
      <img className="w-full" src={src_image} alt="" />
    </figure>
  );
};

export default ImageGrid;
