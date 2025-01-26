import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const footerIconContainerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Footer() {
  return (
    <div className="bg-[url('./footer-bg.png')] py-6 sm:py-10">
      <div className="container mx-auto flex items-center justify-center">
        <FooterLinks />
      </div>
    </div>
  );
}

export default Footer;

function FooterLinks() {
  return (
    <motion.ul
      variants={footerIconContainerVariants}
      whileInView="visible"
      initial="hidden"
      className="flex"
    >
      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://www.facebook.com/people/Mohamed-Hamdy/pfbid0Pus4tAtP6qbUeuzqxq6iaBGVwwojkiKFxzpXpWJ1otkRZWGckLiJX9dDnZALvDNul/"
          className="z-9 group relative flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#1d4ed8] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaFacebookF className="relative z-20 size-9 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="#"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-black before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaXTwitter className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="mailto:mo7amedmedo9898@gmail.com"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#dd4b39] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaGoogle className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="#"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#0077b5] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaLinkedinIn className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>
      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://github.com/LeoU-98"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-black before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaGithub className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>

      <li className="justifiy-center flex items-center">
        <a
          target="_blank"
          href="https://wa.me/00201022736402"
          className="group relative z-10 flex size-4/5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-2 text-center text-4xl leading-[80px] before:absolute before:left-0 before:top-full before:z-20 before:size-full before:bg-[#16a34a] before:duration-500 hover:before:top-0 lg:p-4"
        >
          <FaWhatsapp className="relative z-20 size-10 text-gray-950 duration-500 group-hover:rotate-[360deg] group-hover:fill-white group-hover:text-white" />
        </a>
      </li>
    </motion.ul>
  );
}
