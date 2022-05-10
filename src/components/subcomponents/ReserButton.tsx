import React from "react";

interface Props {
  name_button: string;
}

function ReserButton({ name_button }: Props) {
  return (
    <button className="py-[12px] bg-colReser text-colPrimary uppercase cursor-pointer font-[600] border-colReser border-[2px] border-transparent rounded-[3px] lg:hover:bg-colReserHover transition duration-[300ms] ease-in-out">
      <a href="#" className="px-[30px] py-[12px] text-[16px]">{name_button}</a>
    </button>
  );
}

export default ReserButton;