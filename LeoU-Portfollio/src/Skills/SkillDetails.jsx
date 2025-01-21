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

function SkillDetails({ details, className }) {
  const { skills } = details;

  console.log(skills);

  return (
    <div className={className}>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {skills.map((skill, index) => (
          <Skill key={index} data={skill} />
        ))}
      </motion.div>
    </div>
  );
}

function Skill({ data }) {
  return (
    <div className="flex flex-col gap-1 items-center  ">
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
  className: propTypes.string,
};

Skill.propTypes = {
  data: propTypes.object,
};
