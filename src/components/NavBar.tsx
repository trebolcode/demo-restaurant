import images from "../assets/images";
import NavLink from "./subcomponents/NavLink";

// bg-[#d44625]

const NavBar = () => {
  return (
    <nav className="w-full max-h-min flex justify-between items-center p-2 bg-white rounded-b-full shadow-md font-Rubik font-medium">
      <div className="flex justify-center items-center ml-20">
        <img src={images.logo[0].img} alt={images.logo[0].alt} />
      </div>
      <ul className="flex mr-16">
        <NavLink name_link="home" />
        <NavLink name_link="menu" />
        <NavLink name_link="about" />
        <NavLink name_link="pages" />
        <NavLink name_link="blog" />
        <NavLink name_link="contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
