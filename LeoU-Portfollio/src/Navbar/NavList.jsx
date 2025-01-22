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
          <span className="absolute w-1/4 h-full bg-white translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2]  [--n:1;] z-[-1]"></span>
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

export default NavList;
