import React from "react";

interface Props {
  name_header: string;
}

function Header({ name_header }: Props) {
  return (
    <div className="w-full h-[445px]">
      <div className="w-full h-[445px] bg-allBg bg-cover bg-fixed absolute"></div>
      <div className="w-full h-[445px] bg-colSliderHover opacity-70 absolute"></div>

      <h1 className="w-full text-colPrimary font-Rubik text-4xl text-center mt-64 font-medium absolute">
        {name_header}
      </h1>
    </div>
  );
}

export default Header;
