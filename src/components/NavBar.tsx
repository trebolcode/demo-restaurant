import images from "../assets/images";
import NavLink from "./subcomponents/NavLink";

// bg-[#d44625]

const NavBar = () => {
  const name_bar_links = [
    { id: 1, name: "home", path: "/home" },
    { id: 2, name: "menu", path: "/menu" },
    { id: 3, name: "about", path: "/about" },
    { id: 4, name: "pages", path: "/pages" },
    { id: 5, name: "blog", path: "/blog" },
    { id: 6, name: "contact", path: "/contact" },
  ];

  return (
    <nav className="w-full max-h-min flex justify-between items-center p-2 bg-white rounded-b-full shadow-md font-Rubik font-medium">
      <div className="flex justify-center items-center ml-20">
        <img src={images.logo[0].img} alt={images.logo[0].alt} />
      </div>
      <ul className="flex mr-16">
        {name_bar_links.map((link) => {
          return (
            <NavLink key={link.id} name_link={link.name} path_to={link.path} />
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
