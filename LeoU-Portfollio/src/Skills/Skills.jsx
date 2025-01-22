import { useState } from "react";
import SkillDetails from "./SkillDetails.jsx";
import { SKILLS } from "../constants/data.jsx";
import { motion } from "framer-motion";
import SkillButton from "./SkillButton";

function Skills() {
  const [currentSkillsID, setCurrentSkillsID] = useState(1);

  return (
    <section className="" id="skills">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Skills
      </motion.h2>
      <div className="flex items-center gap-10 px-4 flex-col-reverse md:flex-row xl:justify-center ">
        <ul className="md:basis-1/2 lg:grow-0 lg:shrink-0 lg:w-1/2 grid h-fit w-8/12 min-w-72 grid-cols-2 grid-rows-2 gap-10 md:max-w-80">
          {SKILLS.map((button, index) => (
            <SkillButton
              data={button}
              currentSkillsID={currentSkillsID}
              setCurrentSkillsID={setCurrentSkillsID}
              key={index}
            />
          ))}
        </ul>

        <SkillDetails
          currentSkillsID={currentSkillsID}
          className="md:basis-1/2 lg:grow-0 lg:shrink-0 lg:w-1/2"
        />
      </div>
    </section>
  );
}

export default Skills;
