import { features } from "../constants";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section id="features_section" className="bg-dark  px-4 md:px-12 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center"
      >
        Powerfull Features
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-marcellus text-center text-4xl sm:text-5xl md:text-6xl text-white mb-6 pb-[5px]"
      >
        Effortlessly Create a Hotel Website
      </motion.h2>
      <aside className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            featureImg={feature?.image}
            title={feature.title}
            description={feature.description}
            key={index}
            index={index}
          />
        ))}
      </aside>
    </section>
  );
};

export default Features;

const FeatureCard = ({
  featureImg,
  title,
  description,
  index,
}: {
  featureImg: string;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="text-white flex flex-col items-center"
    >
      <img src={featureImg} alt="feature_img_1" className="rounded-lg mb-3 " />
      <h3 className="font-marcellus text-[26px] mb-[10px]">{title}</h3>
      <p className="font-jost text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};
