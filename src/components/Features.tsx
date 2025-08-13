import { features } from "../constants";

const Features = () => {
  return (
    <section className="bg-dark px-12 py-28">
      <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
        Powerfull Features
      </div>
      <h2 className="font-marcellus text-center text-[52px] text-white mb-6 pb-[5px]">
        Effortlessly Create a Hotel Website
      </h2>
      <aside className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            featureImg={feature?.image}
            title={feature.title}
            description={feature.description}
            key={index}
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
}: {
  featureImg: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-white">
      <img src={featureImg} alt="feature_img_1" className="rounded-lg mb-3 " />
      <h3 className="font-marcellus text-[26px] mb-[10px]">{title}</h3>
      <p className="font-jost text-gray-300">{description}</p>
    </div>
  );
};
