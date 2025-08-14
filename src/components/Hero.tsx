import heroImg from "../assets/hero_img.webp";
import leftSS from "../assets/ssLeft.webp";
import rightSS from "../assets/ssRight.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollY } = useScroll();
  console.log(scrollY);

  const leftY = useTransform(scrollY, [0, 500], [0, 400]);
  const rightY = useTransform(scrollY, [0, 500], [0, 400]);

  return (
    <section
      id="intro_section"
      ref={sectionRef}
      className="relative min-h-screen bg-linear-to-r overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero_img"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-jost text-primary uppercase font-medium text-sm tracking-widest mb-4"
        >
          Made by Elite Author
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-marcellus text-4xl sm:text-5xl md:text-6xl text-white text-center mb-5"
        >
          Luxury Hotel and Booking WordPress Theme
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          href="#"
          className="w-fit px-5 py-2 bg-primary font-jost font-medium text-white text-sm tracking-widest cursor-pointer uppercase"
        >
          View Demo
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="hidden md:flex text-white font-jost pt-16"
        >
          <span className="mx-6 px-6">Trusted by 10,000+</span>
          <span className="mx-6 px-6">Made by Elite Author</span>
          <span className="mx-6 px-6">Lifetime Free Update</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ y: leftY }}
        className="absolute bottom-0 left-0 w-1/2 md:w-2/5 lg:w-1/3 xl:w-[600px]"
      >
        <img src={leftSS} alt="left_ss" className="w-full h-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ y: rightY }}
        className="absolute bottom-0 right-0 w-1/2 md:w-2/5 lg:w-1/3 xl:w-[600px]"
      >
        <img src={rightSS} alt="right_ss" className="w-full h-full" />
      </motion.div>

      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-primary-bottom opacity-80"></div>
    </section>
  );
};

export default Hero;
