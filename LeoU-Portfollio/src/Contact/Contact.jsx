import { motion } from "framer-motion";
import contact from "../assets/contact.svg";
import ContactForm from "./ContactForm";

const contactImageVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1.5,
    },
  },
};

function Contact() {
  return (
    <section id="contact" className="pb-4  ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20  text-center text-4xl"
      >
        Contact Me
      </motion.h2>
      <div className="flex flex-col-reverse items-center md:flex-row gap-8 xl:px-20">
        <div className="md:basis-[45%] sm:w-[75%] w-[95%] lg:basis-1/2">
          <motion.img
            variants={contactImageVariants}
            initial="hidden"
            whileInView="visible"
            src={contact}
            className="w-full"
          />
        </div>
        <ContactForm className={"md:basis-[55%] lg:basis-1/2 "} />
      </div>
    </section>
  );
}

export default Contact;
