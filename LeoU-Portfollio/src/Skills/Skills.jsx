import { useState } from "react";
import SkillDetails from "./SkillDetails.jsx";
import SkillButtons from "./SkillButtons.jsx";
import { skills } from "../utils/data.jsx";
import { motion } from "framer-motion";

function Skills() {
  const [skillsData, setSkillsData] = useState(skills[0]);

  return (
    <section className="" id="skills">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20  text-center text-4xl "
      >
        Skills{" "}
      </motion.h2>
      <div className="flex items-center gap-10 px-4 flex-col-reverse md:flex-row xl:justify-center ">
        <SkillButtons
          setSkillsData={setSkillsData}
          skillsData={skillsData}
          className={" md:basis-1/2 lg:grow-0 lg:shrink-0 lg:w-1/2"}
        />
        <SkillDetails
          details={skillsData}
          className={"md:basis-1/2 lg:grow-0 lg:shrink-0 lg:w-1/2"}
        />
      </div>
    </section>
  );
}

export default Skills;
