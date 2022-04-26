import images from "../assets/images";
import NavLink from "./subcomponents/NavLink";

// bg-[#d44625]

const NavBar = () => {
  const name_bar_links = [
    { id: 1045551, name: "home", path: "#home" },
    { id: 1023332, name: "menu", path: "#menu" },
    { id: 1034533, name: "about", path: "/about" },
    { id: 1033564, name: "pages", path: "/pages" },
    { id: 1023564, name: "blog", path: "/blog" },
    { id: 1073564, name: "contact", path: "/contact" },
  ];

  return (
    <nav className="w-full max-h-min flex justify-between items-center p-2 bg-white rounded-b-full shadow-md font-Rubik font-medium">
      <div className="flex justify-center items-center ml-20">
        <img src={images.logo[0].img} alt={images.logo[0].alt} />
      </div>
      <ul className="flex mr-16">
        {name_bar_links.map((name) => {
          return <NavLink key_id={name.id} name_link={name.name} />;
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
