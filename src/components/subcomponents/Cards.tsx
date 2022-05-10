import React from "react";

interface Props {
  subtitle: string;
  description: string;
  price: number;
}

const defaultProps: Props = {
  subtitle: "Special Drinks",
  description: "Sed id magna vitae eros sagittis euismod.",
  price: 7.0,
};

const Cards = ({ subtitle, description, price }: Props) => {
  return (
    <div className="w-full  flex justify-center items-center">
      <article className="w-full h-full bg-slider1 bg-cover bg-center overflow-hidden cursor-pointer rounded-xl group">
        <div className="transform-gpu w-full h-full flex flex-col justify-end items-center  border-t-2 border-t-black opacity-0 group-hover:opacity-100 group-hover:bg-red-300/80 translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out">
          <p>{subtitle}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </article>
    </div>
  );
};

Cards.defaultProps = defaultProps;

export default Cards;
