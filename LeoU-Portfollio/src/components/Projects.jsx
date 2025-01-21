import { PROJECTS } from "../utils/data.jsx";
// import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import propTypes from "prop-types";
import { useState } from "react";

function Projects() {
  const [visbleProjects, setVisbleProjects] = useState(3);

  function handleMore() {
    setVisbleProjects((e) => e + 3);
    if (result.length >= PROJECTS.length) return setVisbleProjects(3);
  }

  const result = PROJECTS.filter((e) => e.id <= visbleProjects);

  return (
    <section id="projects" className="pb-4 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20  text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {result.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center py-1">
        <button
          className="glow-on-hover flex items-center justify-center rounded-full px-3 py-2 uppercase"
          onClick={handleMore}
        >
          {PROJECTS.length === result.length ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}

function ProjectCard({ data }) {
  const { image, demoLink, repoLink, title, description, technologies } = data;

  return (
    <div className=" mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full xl:w-1/4 md:w-1/2"
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
        <p className="mb-4 text-stone-400">{description}</p>
        {technologies.map((tech, index) => (
          <span
            className="mr-2 text-sm font-medium text-stone-300 rounded bg-stone-900 p-2 "
            key={index}
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

ProjectCard.propTypes = { data: propTypes.object };

// function Projects() {
//   return (
//     <div className="pb-4">
//       <motion.h2
//         whileInView={{ opacity: 1, y: 0 }}
//         initial={{ opacity: 0, y: -100 }}
//         transition={{ duration: 0.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Projects
//       </motion.h2>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className=" mb-8 flex flex-wrap lg:justify-center">
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -100 }}
//               transition={{ duration: 1 }}
//               className="w-full lg:w-1/4"
//             >
//               <img
//                 src={project.image}
//                 width={250}
//                 height={250}
//                 alt={project.title}
//                 className="mb-6  rounded"
//               />
//             </motion.div>
//             <motion.div
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 100 }}
//               transition={{ duration: 1 }}
//               className="w-full max-w-xl lg:w-3/4 "
//             >
//               <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
//               <p className="mb-4 text-stone-400">{project.description}</p>
//               {project.technologies.map((tech, index) => (
//                 <span
//                   className="mr-2 text-sm font-medium text-stone-300 rounded bg-stone-900 p-2 "
//                   key={index}
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default Projects;
