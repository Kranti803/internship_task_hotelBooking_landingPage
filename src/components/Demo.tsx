import { demos } from "../constants";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <section id="demos_section" className="bg-[#F4F4F4] px-4 md:px-12 py-15">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center"
      >
        All demo are included
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-marcellus text-center text-4xl sm:text-5xl md:text-6xl text-black mb-6 pb-[5px]"
      >
        Demo Preview
      </motion.h2>
      <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {demos.map((demo, index) => (
          <DemoCard
            demoImg={demo?.image}
            title={demo?.title}
            isNew={demo?.new}
            key={index}
          />
        ))}
      </aside>
    </section>
  );
};

export default Demo;

const DemoCard = ({
  demoImg,
  title,
  isNew,
}: {
  demoImg: string;
  title: string;
  isNew: boolean;
}) => {
  return (
    <div className="text-white">
      <div className="rounded-lg mb-3 hover:shadow-2xl overflow-hidden">
        <motion.img
          src={demoImg}
          alt="feature_img_1"
          className="rounded-lg mb-3 hover:shadow-2xl h-[85%] w-full "
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        />
      </div>

      <h5
        className={`font-marcellus text-[18px] mb-[10px] text-black text-center font-bold ${
          isNew ? "demo_title_before" : ""
        }`}
      >
        {title}
      </h5>
    </div>
  );
};
