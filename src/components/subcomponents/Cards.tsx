import React from "react";

interface Props {
  subtitle: string;
  description: string;
  price: number;
  img: string;
}

const Cards = ({ subtitle, description, price, img }: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <article className={`w-64 h-40 bg-cover bg-center overflow-hidden group`}>
        <img className="absolute w-64 h-40" src={img} alt="photos" />
        <div className="transform-gpu w-full h-full flex flex-col group-hover:bg-colCard translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out font-Rubik text-white p-3">
          <p className="text-base font-medium mb-4">{subtitle}</p>
          <p className="text-sm pb-4 mb-4 border-b-[1px] border-dashed border-black">{description}</p>
          <p className="text-lg font-semibold">${price}</p>
        </div>
      </article>     
    </div>
  );
};

export default Cards;
