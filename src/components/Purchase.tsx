import backgroundImg from "../assets/bg-2.webp";

const Purchase = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] flex flex-col items-center text-center">
        <div className="uppercase font-medium tracking-widest text-primary font-jost text-[13px] mb-4">
          Get Almaris Now
        </div>
        <h1 className="font-marcellus text-[60px] text-white mb-6 pb-[5px]">
          Build stunning and powerful hotel website in no time!
        </h1>
        <p className="font-jost text-[17px] mb-[20px] text-white/75">
          One time purchase only, no additional fee required!
        </p>
        <a
          href="#"
          className="py-[10px] px-[20px] text-xs font-medium tracking-widest bg-primary uppercase text-white"
        >
          $55 - Purchase Now
        </a>
      </div>

      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-primary-bottom opacity-80"></div>
    </section>
  );
};

export default Purchase;
