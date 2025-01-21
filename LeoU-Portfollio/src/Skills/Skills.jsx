import { useState } from "react";
import SkillDetails from "./SkillDetails.jsx";
import SkillButtons from "./SkillButtons.jsx";
import { skills } from "../utils/data.jsx";
import { motion } from "framer-motion";

function Skills() {
  const [skillsData, setSkillsData] = useState(skills[0]);

  return (
    <section className="" id="skills">
      <div className="rounded-[40px]  lg:p-20 lg:pt-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20  text-center text-4xl "
        >
          Skills{" "}
        </motion.h2>
        <div className="flex flex-col-reverse items-center gap-10 px-4 sm:flex-row sm:gap-5 sm:px-6 lg:justify-between">
          <SkillButtons setSkillsData={setSkillsData} skillsData={skillsData} />
          <SkillDetails details={skillsData} />
        </div>
      </div>
    </section>
  );
}

export default Skills;
