import propTypes from "prop-types";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { skills } from "../utils/data.jsx";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function SkillDetails({ details }) {
  const { title, skills } = details;

  console.log(skills);

  return (
    <div className="pb-24">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {skills.map((skill, index) => (
          <Skill key={index} data={skill} />
        ))}

        {/* <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-cyan-500 " />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
        >
          <DiRedis className="text-7xl text-red-700 " />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500 " />
        </motion.div> */}
      </motion.div>
    </div>
  );
}

function Skill({ data }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
      >
        {data?.icon}
      </motion.div>
      <p>{data?.skillTitle}</p>
      <p>{data?.level}</p>
    </div>
  );
}

export default SkillDetails;

SkillDetails.propTypes = {
  details: propTypes.object,
};

Skill.propTypes = {
  data: propTypes.object,
};
