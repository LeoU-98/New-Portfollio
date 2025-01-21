import logo from "../assets/raviKumarLogo.webp";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div>
        <a href="/">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <NavList />
    </nav>
  );
}

export default Navbar;

function NavList() {
  return (
    <ul className="  bg-white/10 flex  p-3 rounded-full gap-4 ">
      {/* <li className=" ">
        <a className="size-full  duration-300 rounded-full  hover:text-black hover:bg-white text-white cursor-pointer p-2">
          Home
        </a>
      </li> */}
      <li className=" ">
        <a className="size-full  duration-300 rounded-full  hover:text-black hover:bg-white text-white cursor-pointer p-2">
          Skills
        </a>
      </li>
      <li className=" ">
        <a className="size-full  duration-300 rounded-full  hover:text-black hover:bg-white text-white cursor-pointer p-2">
          Projects
        </a>
      </li>
      <li className=" ">
        <a className="size-full  duration-300 rounded-full  hover:text-black hover:bg-white text-white cursor-pointer p-2">
          Experience
        </a>
      </li>
      <li className=" ">
        <a className="size-full  duration-300 rounded-full hover:text-black hover:bg-white text-white cursor-pointer p-2">
          Contact Me
        </a>
      </li>
    </ul>
  );
}
