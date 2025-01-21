import AnimeU from "../images/projects/AnimeU.png";
import Plant from "../images/projects/Plant.png";
import Crypto from "../images/projects/Crypto.png";
import Trillio from "../images/projects/Trillio.png";
import SDS from "../images/projects/SDS.png";
import { SiHtml5 } from "react-icons/si";
import { BsFiletypeJsx } from "react-icons/bs";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

/////////////////////////////////////////////
///////////  Skill Data

export const skills = [
  {
    title: "markup",
    skills: [
      {
        skillTitle: "HTML5",
        icon: <SiHtml5 className="text-7xl text-orange-500" />,
        level: "experienced",
      },
      {
        skillTitle: "JSX",
        icon: <BsFiletypeJsx className="text-7xl text-violet-500" />,
        level: "experienced",
      },
    ],
  },

  {
    title: "interactivity",
    skills: [
      {
        skillTitle: "Javascript",
        icon: <RiJavascriptFill className="text-7xl text-yellow-500" />,
        level: "experienced",
      },
      {
        skillTitle: "Typescript",
        icon: <BiLogoTypescript className="text-7xl text-[#2563eb]" />,
        level: "experienced",
      },
      {
        skillTitle: "React",
        icon: <RiReactjsLine className="text-7xl text-[#22d3ee]  " />,
        level: "experienced",
      },
      {
        skillTitle: "NextJS",
        icon: <TbBrandNextjs className="text-7xl" />,
        level: "experienced",
      },
    ],
  },
  {
    title: "styling",
    skills: [
      {
        skillTitle: "Css3",
        icon: <IoLogoCss3 className="text-7xl text-blue-800" />,
        level: "experienced",
      },
      {
        skillTitle: "Tailwind",
        icon: <RiTailwindCssFill className="text-7xl text-sky-500" />,
        level: "experienced",
      },
      {
        skillTitle: "Sass",
        icon: <IoLogoSass className="text-7xl text-pink-600" />,
        level: "experienced",
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        skillTitle: "Git",
        icon: <FaGitAlt className="text-7xl text-orange-500" />,
        level: "experienced",
      },

      {
        skillTitle: "Git Hub",
        icon: <FaSquareGithub className="text-7xl" />,
        level: "experienced",
      },
    ],
  },
];

/////////////////////////////////////////////
///////////  Projects Data

export const projectsData = [
  {
    id: 0,
    title: "AnimeU",
    imgUrl: AnimeU,
    demoLink: "https://leou-98.github.io/AnimeU/",
    repoLink: "https://github.com/LeoU-98/AnimeU",

    desc: {
      status: "Interative + 3rd Party API",
      work: "Desgin & Development",
      framework: "React",
      styling: "Vanllia CSS",
    },
  },
  {
    id: 1,
    title: "Plant",
    imgUrl: Plant,
    demoLink: "https://leou-98.github.io/LeoU-Plants/",
    repoLink: "https://github.com/LeoU-98/LeoU-Plants",
    desc: {
      status: "Interactive",
      work: "Desgin & Development",
      framework: "React",
      styling: "Vanllia CSS",
    },
  },
  {
    id: 2,
    title: "Crypto",
    imgUrl: Crypto,
    demoLink: "https://leou-98.github.io/Crypto/",
    repoLink: "https://github.com/LeoU-98/Crypto",
    desc: {
      status: "Static",
      work: "Development",
      framework: "React",
      styling: "Tailwind CSS",
    },
  },
  {
    id: 3,
    title: "Trillio",
    imgUrl: Trillio,
    demoLink: "https://leou-98.github.io/Crypto/",
    repoLink: "https://github.com/LeoU-98/Crypto",
    desc: {
      status: "Static",
      work: "Development",
      framework: "React",
      styling: "Tailwind CSS",
    },
  },
  {
    id: 4,
    title: "SDS App",
    imgUrl: SDS,
    demoLink: "https://leou-98.github.io/SDS/",
    repoLink: "https://github.com/LeoU-98/SDS-APP",
    desc: {
      status: "Interactive",
      work: "Desgin & Development",
      framework: "React",
      styling: "Tailwind CSS",
    },
  },
];

/////////////////////////////////////////////
///////////  Work Data

export const workData = [
  {
    title: "Self Taught Front-End Web Developer",
    date: {
      start: "July 2023",
      end: "Dec 2024",
    },
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript, improving user engagement by 30% across multiple platforms",
      "Implemented modern front-end frameworks such as React  streamlining the development process and reducing page load times by 15%.",
      "Collaborated with UX/UI designers to create intuitive interfaces, resulting in a 25% increase in user satisfaction ratings.",
    ],
  },
];
