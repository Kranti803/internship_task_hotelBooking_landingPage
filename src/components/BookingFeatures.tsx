import { ChevronLeft, ChevronRight } from "lucide-react";
import { bookingFeatures } from "../constants";
import { useRef } from "react";

const BookingFeatures = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  console.log(divRef.current?.scrollLeft);

  const handleScrollLeft = () => {
    if (divRef?.current) divRef.current.scrollLeft -= 450;
  };
  const handleScrollRight = () => {
    if (divRef?.current) divRef.current.scrollLeft += 450;
  };

  return (
    <section className="bg-[#F4F4F4] py-15">
      <aside className="mx-4 sm:mx-8 lg:mx-12 bg-dark rounded-lg py-15">
        <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
          Booking Features
        </div>
        <h2 className="font-marcellus text-center text-[32px] sm:text-[42px] lg:text-[52px] text-white mb-3 pb-[5px]">
          Room Management & Booking
        </h2>
        <p className="font-jost text-center text-[15px] sm:text-[17px] mb-[20px] leading-8 text-white/75 max-w-3xl mx-auto px-4">
          Almaris theme makes creating a hotel website with booking
          functionality straightforward and efficient. Its built-in room booking
          system, combined with WooCommerce payment integration, allows you to
          accept secure online payments and manage bookings seamlessly.
        </p>

        <div className="px-14 relative">
          <div
            ref={divRef}
            className="flex gap-x-6 overflow-x-scroll scrollbar_hidden scroll-smooth"
          >
            {bookingFeatures?.map((item, index) => (
              <BookingFeaturesCard
                key={index}
                title={item?.title}
                bookingFeatureImg={item?.image}
              />
            ))}
            {/* arrows for scrolling */}
          </div>
          <button
            className=" absolute left-0 top-1/2 -translate-y-1/2 outline-none border-none py-[5px] px-3 rounded-r-2xl bg-primary"
            onClick={handleScrollLeft}
          >
            <ChevronLeft size={25} color="#fff" />
          </button>
          <button
            className=" absolute right-0 top-1/2 -translate-y-1/2 outline-none border-none py-[5px] px-3 rounded-l-2xl bg-primary"
            onClick={handleScrollRight}
          >
            <ChevronRight size={25} color="#fff" />
          </button>
        </div>
      </aside>
    </section>
  );
};

export default BookingFeatures;

const BookingFeaturesCard = ({
  title,
  bookingFeatureImg,
}: {
  title: string;
  bookingFeatureImg: string;
}) => {
  return (
    <div className="flex flex-col max-w-[420px] h-96 rounded-2xl shrink-0 ">
      <img
        src={bookingFeatureImg}
        alt="features_image"
        className="mb-6 object-cover rounded-2xl h-3/4"
      />
      <h3 className="mb-[10px] text-[26px] font-marcellus text-white text-center">
        {title}
      </h3>
    </div>
  );
};
