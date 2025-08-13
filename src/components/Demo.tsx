import { demos } from "../constants";

const Demo = () => {
  return (
    <section className="bg-[#F4F4F4] px-12 py-15">
      <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] text-center">
        All demo are included
      </div>
      <h2 className="font-marcellus text-center text-[52px] text-black mb-6 pb-[5px]">
        Demo Preview
      </h2>
      <aside className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      <img
        src={demoImg}
        alt="feature_img_1"
        className="rounded-lg mb-3 hover:shadow-2xl transition-all duration-300"
      />
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
