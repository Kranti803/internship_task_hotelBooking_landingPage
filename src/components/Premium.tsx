import { premiumBenefits } from "../constants";
import { motion } from "motion/react";

const Premium = () => {
  return (
    <section className="bg-[#F4F4F4] py-15">
      <aside className="mx-4 sm:mx-8 lg:mx-12 bg-dark rounded-lg py-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center"
        >
          Easy Hotel Booking
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-marcellus text-center text-4xl sm:text-5xl md:text-6xl px-4 lg:px-42 text-white mb-3 pb-[5px]"
        >
          Unlock Premium Add-ons for Free, Save $200
        </motion.h2>
        <p className="font-jost text-center text-[15px] sm:text-[17px] mb-[20px] leading-8 text-white/75 max-w-3xl mx-auto px-4">
          Build and manage your hotel site like a pro, with high-end tools
          included at no extra cost.
        </p>

        <div className="flex flex-wrap gap-8 justify-center items-center px-4 md:px-0">
          {premiumBenefits.map((item, index) => (
            <PremiumBenefitCards
              key={index}
              index={index}
              benefitImg={item?.image}
              title={item?.title}
              description={item?.description}
            />
          ))}
        </div>
      </aside>
    </section>
  );
};

export default Premium;

const PremiumBenefitCards = ({
  benefitImg,
  title,
  description,
  index,
}: {
  benefitImg: string;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-[#232323] p-8 sm:p-10 rounded-xl w-full sm:w-full md:w-[350px] lg:w-[380px] h-auto"
    >
      <div className="flex justify-between mb-4">
        <span className="bg-[#f4791f] rounded-3xl text-white font-jost py-[3px] px-[10px] text-sm">
          Included
        </span>
        <span className="bg-[#1f8d8d] rounded-3xl text-white font-jost py-[3px] px-[10px] text-sm">
          Save $19
        </span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img
          src={benefitImg}
          alt="premium_benefit_img"
          className="w-20 h-20 mb-6 object-contain"
        />
        <h4 className="mb-[10px] text-[20px] sm:text-[22px] font-marcellus text-white">
          <span className="opacity-50">EBH </span>
          {title}
        </h4>
        <p className="font-jost text-white/75 text-[15px] sm:text-[16px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
