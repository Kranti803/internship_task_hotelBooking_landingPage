import backgroundImg from "../assets/bg-2.webp";
import { motion } from "motion/react";

const Purchase = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] mb-4"
        >
          Get Almaris Now
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-marcellus text-[60px] text-white mb-6 pb-[5px]"
        >
          Build stunning and powerful hotel website in no time!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-jost text-[17px] mb-[20px] text-white/75"
        >
          One time purchase only, no additional fee required!
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          href="#"
          className="py-[10px] px-[20px] text-xs font-medium tracking-widest bg-primary uppercase text-white"
        >
          $55 - Purchase Now
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-primary-bottom opacity-80"></div>
    </section>
  );
};

export default Purchase;
