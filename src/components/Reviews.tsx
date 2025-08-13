import { reviews } from "../constants";
const Reviews = () => {
  return (
    <section className="bg-[#F4F4F4] px-12 py-28">
      <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
        Real Reviews
      </div>
      <h2 className="font-marcellus text-center text-[52px] text-black mb-6 pb-[5px]">
        What Our Customers Saying
      </h2>
      <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review,index) => (
          <ReviewCard
            title={review?.title}
            message={review?.message}
            personName={review?.personName}
            personImg={review?.personImg}
            starImg={review?.starImg}
            key={index}
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
}: {
  title: string;
  message: string;
  personName: string;
  personImg: string;
  starImg: string;
}) => {
  return (
    <div className="border-[1px] border-gray-300 rounded-xl p-[30px] shadow-lg">
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
    </div>
  );
};
