import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/raviKumarLogo.webp";
import { useState } from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-0 relative">
      <div>
        <a href="/">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>
      </div>
      <NavList />
      <MobileNavList />
    </nav>
  );
}

export default Navbar;

function NavList() {
  return (
    <ul className="sm:flex gap-4 hidden">
      <li>
        <a
          href="#skills"
          className=" text-white block text-sm  rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
        >
          Skills
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:1;]   z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:2;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)] group-hover:translate-y-0 group-hover:scale-[2]  [--n:3;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]   duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:4;] z-[-1]"></span>
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className=" text-white block text-sm  rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
        >
          Projects
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:1;]   z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:2;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)] group-hover:translate-y-0 group-hover:scale-[2]  [--n:3;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]   duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:4;] z-[-1]"></span>
        </a>
      </li>

      <li>
        <a
          href="#experience"
          className=" block text-white text-sm  rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
        >
          Experience
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:1;]   z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:2;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)] group-hover:translate-y-0 group-hover:scale-[2]  [--n:3;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]   duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:4;] z-[-1]"></span>
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className=" block text-white text-sm  rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
        >
          Contact Me
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:1;]   z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:2;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)] group-hover:translate-y-0 group-hover:scale-[2]  [--n:3;] z-[-1]"></span>
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]   duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:4;] z-[-1]"></span>
        </a>
      </li>
    </ul>
  );
}

function MobileNavList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" sm:hidden">
      {isOpen ? (
        <RxCross1 className="text-3xl" onClick={() => setIsOpen(false)} />
      ) : (
        <RxHamburgerMenu className="text-3xl" onClick={() => setIsOpen(true)} />
      )}
      {isOpen ? (
        <ul className="flex flex-col gap-10 absolute top-full left-0 w-full h-dvh  bg-white/5 backdrop-blur-sm pt-8">
          <li onClick={() => setIsOpen(false)}>
            <a
              href="#skills"
              className="block text-white w-11/12 mx-auto bg-black/50  text-2xl rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
            >
              Skills
            </a>
          </li>

          <li onClick={() => setIsOpen(false)}>
            <a
              href="#projects"
              className="block text-white w-11/12 mx-auto bg-black/50  text-2xl rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
            >
              Projects
            </a>
          </li>

          <li onClick={() => setIsOpen(false)}>
            <a
              href="#experience"
              className=" block text-white w-11/12 mx-auto bg-black/50 text-2xl rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
            >
              Experience
            </a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a
              href="#contact"
              className=" block text-white w-11/12 mx-auto bg-black/50 text-2xl rounded-2xl px-3 py-2 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-black group"
            >
              Contact Me
            </a>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
