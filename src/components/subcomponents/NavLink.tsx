import React from "react";

interface Props {
  name_link: string;
  key_id: number;
}

const NavLink = ({ name_link, key_id }: Props) => {
  return (
    <li key={key_id} className="mx-1">
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
