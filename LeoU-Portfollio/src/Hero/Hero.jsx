import profilePic from "../assets/raviKumarProfile.webp";
import { HERO_CONTENT } from "../constants/data.jsx";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Mohamed Hamdy"
              width={650}
              height={650}
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className=" pb-2 text-4xl tracking-tighter lg:text-8xl"
            >
              Mohamed Hamdy
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl lg:text-left text-balance leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="nooperner noreferrer"
              download
              className="bg-white text-black border-white border-2 border-solid block text-sm  mb-10 rounded-full px-4 py-3 uppercase font-medium font-sans relative overflow-hidden z-[1] duration-500   hover:text-white group"
            >
              Download Resume
              <span className="absolute w-1/4 h-full bg-black translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:1;]   z-[-1]"></span>
              <span className="absolute w-1/4 h-full bg-black  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:2;] z-[-1]"></span>
              <span className="absolute w-1/4 h-full bg-black  translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]  duration-500  delay-[calc((var(--n)-1)*0.1s)] group-hover:translate-y-0 group-hover:scale-[2]  [--n:3;] z-[-1]"></span>
              <span className="absolute w-1/4 h-full bg-black translate-y-[150%] rounded-full left-[calc((var(--n)-1)*25%)]   duration-500  delay-[calc((var(--n)-1)*0.1s)]  group-hover:translate-y-0 group-hover:scale-[2] [--n:4;] z-[-1]"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
