import { premiumBenefits } from "../constants";

const Premium = () => {
  return (
    <section className="bg-[#F4F4F4] py-15">
      <aside className="mx-4 sm:mx-8 lg:mx-12 bg-dark rounded-lg py-15">
        <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
          Easy Hotel Booking
        </div>
        <h2 className="font-marcellus text-center text-[32px] sm:text-[42px] lg:text-[52px] text-white mb-3 pb-[5px]">
          Unlock Premium Add-ons for Free, Save $200
        </h2>
        <p className="font-jost text-center text-[15px] sm:text-[17px] mb-[20px] leading-8 text-white/75 max-w-3xl mx-auto px-4">
          Build and manage your hotel site like a pro, with high-end tools
          included at no extra cost.
        </p>

        <div className="flex flex-wrap gap-8 justify-center items-center">
          {premiumBenefits.map((item, idx) => (
            <PremiumBenefitCards
              key={idx}
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
}: {
  benefitImg: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#232323] p-8 sm:p-10 rounded-xl w-full sm:w-full md:w-[350px] lg:w-[380px] h-auto">
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
    </div>
  );
};
