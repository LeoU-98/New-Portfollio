import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

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

export default MobileNavList;
