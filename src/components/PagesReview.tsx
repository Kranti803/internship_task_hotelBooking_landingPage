import { pageReviews } from "../constants";
import { motion } from "framer-motion";

const PagesReview = () => {
  return (
    <section className="bg-[#F4F4F4] py-15 px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center"
      >
        All demo are included
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-marcellus text-center text-[52px] text-black mb-3 pb-[5px]"
      >
        Inner Pages Preview
      </motion.h2>
      <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pageReviews.map((pageReview, index) => (
          <motion.div key={index}>
            <PageReviewCard
              pageReviewImg={pageReview?.image}
              title={pageReview?.title}
            />
          </motion.div>
        ))}
      </aside>
    </section>
  );
};

export default PagesReview;

const PageReviewCard = ({
  pageReviewImg,
  title,
}: {
  pageReviewImg: string;
  title: string;
}) => {
  return (
    <div className="text-white">
      <div className="overflow-hidden rounded-lg hover:shadow-2xl transition-shadow duration-300 mb-3">
        <motion.img
          src={pageReviewImg}
          alt={title}
          className="w-full h-[80%]"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.4 }}
        />
      </div>
      <h5 className="font-marcellus text-[18px] mb-[10px] text-black text-center font-bold">
        {title}
      </h5>
    </div>
  );
};
