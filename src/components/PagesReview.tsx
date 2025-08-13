import { pageReviews } from "../constants";
import { motion } from "framer-motion";

const PagesReview = () => {
  return (
    <section className="bg-[#F4F4F4] py-15 px-12">
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
    <div className="text-white overflow-hidden rounded-2xl">
      <motion.img
        src={pageReviewImg}
        alt={title}
        className="rounded-lg mb-6 hover:shadow-2xl"
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
      />
      <h5 className="font-marcellus text-[18px] mb-[10px] text-black text-center font-bold">
        {title}
      </h5>
    </div>
  );
};
