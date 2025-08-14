import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <a href="#intro_section" className="w-10 h-10 flex justify-center items-center rounded-full p-1 bg-primary cursor-pointer">
      <ChevronUp size={25} color="#fff" />
    </a>
  );
};

export default ScrollToTop;
