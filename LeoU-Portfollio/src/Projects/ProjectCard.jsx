import propTypes from "prop-types";
import { motion } from "framer-motion";

export default function ProjectCard({ data }) {
  const { image, demoLink, repoLink, title, description, technologies } = data;

  return (
    <div className=" mb-8 flex flex-col  lg:flex-row  items-center sm:items-start md:gap-4 justify-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full xl:w-1/4 md:w-1/2 "
      >
        <div className="proj-imgbx group relative  overflow-hidden rounded-lg mb-6">
          <img
            src={image}
            className="w-full h-[200px] max-w-[320px] mx-auto md:mx-0"
          />
          <div className="absolute w-full top-[65%]  flex  gap-2 justify-center opacity-0 duration-500 ease-in-out group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
            <a
              target="_blank"
              href={demoLink}
              className="block cursor-pointer rounded-xl bg-[#121212] px-3 py-2 text-base font-medium text-white duration-300 hover:bg-white hover:text-black"
            >
              Live Demo
            </a>
            <a
              target="_blank"
              href={repoLink}
              className="block cursor-pointer rounded-xl bg-[#121212] px-3 py-2 text-base font-medium text-white duration-300 hover:bg-white hover:text-black"
            >
              Git Hub
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl xl:w-3/4 md:w-1/2 "
      >
        <h3 className="mb-2 font-semibold text-2xl">{title}</h3>
        <p className="mb-4 text-stone-400 md:text-balance ">{description}</p>

        <div className="flex flex-wrap justify-center gap-2 ">
          {technologies.map((tech, index) => (
            <span
              className=" text-sm font-medium text-stone-300 rounded bg-stone-900 p-2 "
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

ProjectCard.propTypes = { data: propTypes.object };
