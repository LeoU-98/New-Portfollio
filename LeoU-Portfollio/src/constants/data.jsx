import AnimeU from "../images/projects/AnimeU.png";
import Plant from "../images/projects/Plant.png";
import Crypto from "../images/projects/Crypto.png";
import Trillio from "../images/projects/Trillio.png";
import SDS from "../images/projects/SDS.png";
import PersonalProtfollio from "../images/projects/PersonalPortfollio.png";
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
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GiClick } from "react-icons/gi";
import { CiText } from "react-icons/ci";
import { BsDatabaseFillGear } from "react-icons/bs";

/////////////////////////////////////////////
///////////  Hero Section

export const HERO_CONTENT = `I’m a dedicated frontend developer with a passion for building modern, responsive web applications. Leveraging technologies like React.js, JavaScript, and CSS frameworks, I create intuitive user interfaces that align with the latest industry trends. I thrive on crafting clean, efficient code, integrating APIs, and delivering high-quality, user-focused solutions. `;

/////////////////////////////////////////////
///////////  Skill Data

export const SKILLS = [
  {
    id: 1,
    icon: <CiText className="size-9" />,
    title: "Markup",
    skills: [
      {
        skillTitle: "HTML",
        icon: <SiHtml5 className="text-7xl   text-orange-500" />,
      },
      {
        skillTitle: "JSX",
        icon: <BsFiletypeJsx className="text-7xl   text-violet-500" />,
      },
    ],
  },

  {
    id: 2,
    icon: <GiClick className="size-9" />,
    title: "Interactivity",
    skills: [
      {
        skillTitle: "Javascript",
        icon: <RiJavascriptFill className="text-7xl   text-yellow-500" />,
      },
      {
        skillTitle: "Typescript",
        icon: <BiLogoTypescript className="text-7xl   text-[#2563eb]" />,
      },
      {
        skillTitle: "React",
        icon: <RiReactjsLine className="text-7xl   text-[#22d3ee]  " />,
      },
      {
        skillTitle: "NextJS",
        icon: <TbBrandNextjs className="text-7xl  " />,
      },
    ],
  },
  {
    id: 3,
    icon: <HiOutlinePaintBrush className="size-9" />,
    title: "Styling",
    skills: [
      {
        skillTitle: "CSS",
        icon: <IoLogoCss3 className="text-7xl   text-blue-800" />,
      },
      {
        skillTitle: "Tailwind",
        icon: <RiTailwindCssFill className="text-7xl   text-sky-500" />,
      },
      {
        skillTitle: "Sass",
        icon: <IoLogoSass className="text-7xl   text-pink-600" />,
      },
    ],
  },
  {
    id: 4,
    icon: <BsDatabaseFillGear className="size-9" />,
    title: "Tools",
    skills: [
      {
        skillTitle: "Git",
        icon: <FaGitAlt className="text-7xl  text-orange-500" />,
      },

      {
        skillTitle: "Git Hub",
        icon: <FaSquareGithub className="text-7xl" text-4xl />,
      },
    ],
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

//////////////////////////////////////
////////     Projects Data

export const PROJECTS = [
  {
    id: 1,
    title: "AnimeU",
    image: AnimeU,
    demoLink: "https://leou-98.github.io/AnimeU/",
    repoLink: "https://github.com/LeoU-98/AnimeU",
    description:
      "AnimeU is a website that provides detailed information about anime series and movies. It fetches data from a third-party API to deliver up-to-date summaries, genres, release dates, and ratings. With a clean and intuitive interface, AnimeU makes exploring anime simple and enjoyable.",
    technologies: ["UI Design", "Vanllia CSS", "React", "3rd Party API"],
  },
  {
    id: 2,
    title: "LeoU Plants",
    image: Plant,
    demoLink: "https://leou-98.github.io/LeoU-Plants/",
    repoLink: "https://github.com/LeoU-98/LeoU-Plants",
    description:
      "LeoU Plants is a sleek single-page application (SPA) for browsing and purchasing plants. Featuring a vibrant gallery and detailed descriptions with prices, it offers an interactive shopping experience. With its cool UI and seamless navigation, LeoU Plants is perfect for plant enthusiasts.",
    technologies: ["UI Design", "SPA", "React", "Vanllia CSS"],
  },
  {
    id: 3,
    title: "Crypto",
    image: Crypto,
    demoLink: "https://leou-98.github.io/Crypto/",
    repoLink: "https://github.com/LeoU-98/Crypto",
    description:
      "Crypto is a responsive landing page designed to showcase a cryptocurrency trading platform. With a clean layout and modern design, it highlights market trends, trading features, and platform benefits. As a static site, Crypto focuses solely on presenting a professional and visually appealing web design.",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 4,
    title: "Trillio",
    image: Trillio,
    demoLink: "https://leou-98.github.io/Crypto/",
    repoLink: "https://github.com/LeoU-98/Crypto",
    description:
      "Trillio is a responsive landing page designed for a booking app. With a clean and modern layout, it highlights key features like easy booking, user-friendly interface, and service options. As a static site, Trillio focuses on showcasing a visually appealing and professional web design.",
    technologies: ["React", "Tailwind"],
  },
  {
    id: 5,
    title: "SDS",
    image: SDS,
    demoLink: "https://leou-98.github.io/SDS/",
    repoLink: "https://github.com/LeoU-98/SDS",
    description:
      'SDS is a responsive landing page for an IoT platform that monitors temperature, pressure, and detects disasters. With a clean design, it highlights key features like real-time data and alerts. To access, use the email "test@SDS.com" and password "123456".',
    technologies: ["React", "Tailwind"],
  },
  // {
  //   id: 6,
  //   title: "Personal Portfolio",
  //   image: PersonalProtfollio,
  //   demoLink: "https://leou-98.github.io/Nada-Portfolio/",
  //   repoLink: "https://github.com/LeoU-98/Nada-Portfolio",
  //   description:
  //     "Nada’s Portfolio is a responsive landing page showcasing a personal portfolio. With a clean design, it highlights key projects, skills, and achievements. The site provides an easy-to-navigate layout, presenting the individual’s work in a professional and visually appealing way.",
  //   technologies: ["React", "Tailwind"],
  // },
];

////////////////////////////////////////////////////////

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Student.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "HTML",
      "CSS",
      "Sass",
      "Tailwind",
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
    ],
  },
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];
