import { PROJECTS } from "../constants/data.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

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

export default Projects;
