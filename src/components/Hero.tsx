import heroImg from "../assets/hero_img.webp";
import leftSS from "../assets/ssLeft.webp";
import rightSS from "../assets/ssRight.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-linear-to-r">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero_img"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex  flex-col items-center">
        <p className="font-jost text-primary uppercase font-medium text-sm tracking-widest mb-4">
          Made by Elite Author
        </p>
        <h1 className="font-marcellus text-[64px] text-white text-center mb-5">
          Luxury Hotel and Booking WordPress Theme
        </h1>
        <a
          href="#"
          className="w-fit px-5 py-2 bg-primary font-jost font-medium text-white text-sm tracking-widest cursor-pointer uppercase"
        >
          View Demo
        </a>
        <div className="hidden md:flex text-white font-jost pt-16">
          <span className="mx-6 px-6">Trusteb by 10,000+</span>
          <span className="mx-6 px-6">Made by Elite Author</span>
          <span className="mx-6 px-6">Lifetime Free Update</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-between">
        <div className="w-[600px]">
          <img src={leftSS} alt="left_ss" />
        </div>
        <div className="w-[600px]">
          <img src={rightSS} alt="right_ss" />
        </div>
      </div>

      {/* bottom gradient */}
      <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-primary-bottom opacity-80"></div>
    </section>
  );
};

export default Hero;
