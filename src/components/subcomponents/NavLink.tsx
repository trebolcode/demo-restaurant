import React from "react";

interface Props {
  name_link: string;
}

const NavLink: React.FC<Props> = ({ name_link }: Props) => {
  return (
    <li className="mx-1">
      <a
        className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200"
        href=""
      >
        {name_link}
      </a>
    </li>
  );
};

export default NavLink;
