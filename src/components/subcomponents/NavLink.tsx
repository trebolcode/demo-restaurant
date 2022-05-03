import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name_link: string;
  path_to: string;
}

const NavLink: React.FC<Props> = ({ name_link, path_to }: Props) => {
  return (
    <li className="mx-1">
      {/* <a
        className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200"
        href=""
      >
        {name_link}
      </a> */}
      <Link
        to={path_to}
        className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200"
      >
        {name_link}
      </Link>
    </li>
  );
};

export default NavLink;
