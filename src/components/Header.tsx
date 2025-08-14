import { useEffect, useState } from "react";
import Logo from "../assets/logo-white.webp";
import { Menu, Minus } from "lucide-react";
import { navLinks } from "../constants";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > window.innerHeight - 64);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full ${
        scrolled || menuOpen ? "bg-dark shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 md:px-0 h-16">
        <div>
          <img src={Logo} alt="logo_img" height={150} width={150} />
        </div>

        {/* dekstop navbar */}
        <div className="font-jost text-lg hidden md:flex items-center justify-center gap-x-6 text-white">
          {navLinks.map((item) => (
            <a key={item?.title} href={`#${item.link}`}>
              {item.title}
            </a>
          ))}
        </div>

        {/* mobile navbar */}
        {menuOpen && (
          <div className="absolute inset-0 top-16 pt-16 bg-dark w-full h-screen md:hidden text-white flex flex-col px-6 gap-y-3 ">
            {navLinks.map((item) => (
              <a
                className="border-b-[1px] py-3 border-gray-500 hover:text-primary transition-all duration-200"
                key={item?.title}
                href={`#${item.link}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-x-3">
          <button className="hidden sm:block border-[1px] border-gray-500 px-6 py-3 font-jost text-xs font-semibold tracking-widest hover:bg-primary text-white transition-all duration-300 uppercase cursor-pointer">
            Purchase Now
          </button>
          {menuOpen ? (
            <button
              onClick={() => setMenuOpen(false)}
              className="border-none outline-none"
            >
              <Minus
                className="cursor-pointer md:hidden text-white"
                size={25}
              />
            </button>
          ) : (
            <button
              onClick={() => setMenuOpen(true)}
              className="border-none outline-none"
            >
              <Menu className="cursor-pointer md:hidden text-white" size={25} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
