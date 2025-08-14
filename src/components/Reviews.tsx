import { reviews } from "../constants";
import { motion } from "framer-motion";
const Reviews = () => {
  return (
    <section className="bg-[#F4F4F4] px-12 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center"
      >
        Real Reviews
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="font-marcellus text-center text-[52px] text-black mb-6 pb-[5px]"
      >
        What Our Customers Saying
      </motion.h2>
      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard
            title={review?.title}
            message={review?.message}
            personName={review?.personName}
            personImg={review?.personImg}
            starImg={review?.starImg}
            key={index}
            index={index}
          />
        ))}
      </aside>
    </section>
  );
};

export default Reviews;

const ReviewCard = ({
  title,
  message,
  personName,
  personImg,
  starImg,
  index,
}: {
  title: string;
  message: string;
  personName: string;
  personImg: string;
  starImg: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="border-[1px] border-gray-300 rounded-xl p-[30px] shadow-lg"
    >
      <div>
        <div className="mb-6 font-jost  text-black/75">
          For <span className="font-bold text-[#262626]">{title}</span>
        </div>
        <h3 className="font-marcellus text-2xl pb-6">{message}</h3>
      </div>
      <div className="border-t-[1px] border-gray-400 pt-6 flex gap-4 items-center">
        <div>
          <img src={personImg} alt="author" />
        </div>
        <div>
          <h4 className="text-[20px] font-marcellus font-bold">{personName}</h4>
          <img src={starImg} alt="rating_image" />
        </div>
      </div>
    </motion.div>
  );
};
