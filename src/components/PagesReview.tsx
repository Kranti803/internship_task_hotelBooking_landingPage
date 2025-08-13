import { pageReviews } from "../constants";

const PagesReview = () => {
  return (
    <section className="bg-[#F4F4F4] py-15 px-12">
      <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
        All demo are included
      </div>
      <h2 className="font-marcellus text-center text-[52px] text-black mb-3 pb-[5px]">
        Inner Pages Preview
      </h2>
      <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {pageReviews.map((pageReview, index) => (
                <PageReviewCard
                  pageReviewImg={pageReview?.image}
                  title={pageReview?.title}
                  key={index}
                />
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
      <img
        src={pageReviewImg}
        alt="feature_img_1"
        className="rounded-lg mb-3 hover:shadow-2xl transition-all duration-300"
      />
      <h5
        className="font-marcellus text-[18px] mb-[10px] text-black text-center font-bold"
      >
        {title}
      </h5>
    </div>
  );
};
