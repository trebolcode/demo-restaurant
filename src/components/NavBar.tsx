import images from "../assets/images"

// bg-[#d44625]

const NavBar = () => {
  return (
    <nav className="w-full max-h-min flex justify-between items-center p-2 bg-white rounded-b-full shadow-md font-Rubik font-medium">
      <div className="flex justify-center items-center ml-20">
        <img src={images[0].img} alt={images[0].alt} />
      </div>
      <ul className="flex mr-16">
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">home</a>
        </li>
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">menu</a>
        </li>
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">about</a>
        </li>
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">pages</a>
        </li>
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">blog</a>
        </li>
        <li className="mx-1">
          <a className="uppercase px-5 py-3 rounded-md hover:bg-[#d44625] hover:text-white transition-all ease-in-out duration-200" href="">contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar