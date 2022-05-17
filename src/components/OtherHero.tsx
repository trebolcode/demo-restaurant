import React, { useEffect, useState } from "react";
import images from "../assets/images";

const OtherHero = () => {
  const [contador, setContador] = useState(0);

  const carousel = images.bg_images.map((item) => item.name);

  const incrementar = () => {
    if (contador + 1 < carousel.length) {
      setContador(contador + 1);
    }
    if (contador + 1 === carousel.length) {
      setContador(0);
    }
  };

  const decrementar = () => {
    if (contador >= 1) {
      setContador(contador - 1);
    }
    if (contador === 0) {
      setContador(carousel.length - 1);
    }
  };

  const imageIndicator = images.bg_images.map((item, index) => (
    <div
      key={index}
      onClick={() => setContador(index)}
      className={
        contador === index
          ? `cursor-pointer w-5 h-full mx-1 rounded-full bg-red-300`
          : `cursor-pointer w-5 h-full mx-1 rounded-full bg-red-50`
      }
    ></div>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      incrementar();
    }, 2500);
    return () => clearInterval(interval);
  }, [contador]);

  return (
    <div>
      <p>{contador}</p>
      <p>{carousel[contador]}</p>
      <div
        className={`w-full h-96 bg-cover bg-center bg-${carousel[contador]} transition-all ease-in duration-100`}
      ></div>
      <div className="w-full p-2 flex justify-around">
        <button
          className="bg-red-100 p-4 rounded-md hover:bg-red-200"
          onClick={() => decrementar()}
        >
          Decrementar
        </button>
        <div className="flex justify-center items-center">{imageIndicator}</div>
        <button
          className="bg-red-100 p-4 rounded-md hover:bg-red-200"
          onClick={() => incrementar()}
        >
          Incrementar
        </button>
      </div>
    </div>
  );
};

export default OtherHero;
