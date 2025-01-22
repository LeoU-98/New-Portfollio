import propTypes from "prop-types";
import { motion } from "framer-motion";
import { SKILLS } from "../constants/data.jsx";

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

function SkillDetails({ currentSkillsID, className }) {
  const currentSkillsDetails = SKILLS.find(
    (skill) => skill.id === currentSkillsID
  ).skills;

  console.log(currentSkillsDetails);

  return (
    <div className={className}>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {currentSkillsDetails.map((skill, index) => (
          <Skill key={index} data={skill} />
        ))}
      </motion.div>
    </div>
  );
}

function Skill({ data }) {
  const { icon, skillTitle, level } = data;
  return (
    <div className="flex flex-col gap-1 items-center  ">
      <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}
      >
        {icon}
      </motion.div>
      <p className="mt-3">{skillTitle}</p>
      {/* <p className="capitalize">{level}</p> */}
    </div>
  );
}
export default SkillDetails;

SkillDetails.propTypes = {
  currentSkillsID: propTypes.number,
  className: propTypes.string,
};

Skill.propTypes = {
  data: propTypes.object,
};
