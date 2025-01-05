import CompanyLogo from "@/assets/images/company-icon.svg";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const Navigation = () => {
  const navOptions = ["Services", "Book"];
  const [showMenu, setShowMenu] = useState(false);
  const routeMap: Record<string, string> = {
    Services: "our-services",
    Book: "contact-form",
  };

  return (
    <div className="h-[80px] sticky top-0 bg-[#fdf3ec] z-50">
      <div className="flex justify-between md:px-20 px-5 py-5 text-black items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <img src={CompanyLogo} className="h-6 aspct-square" />
          <h1 className="text-xl md:text-2xl font-bold">
            Ezhil Cleaning Service
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-bold">
            {navOptions.map((option) => (
              <a href={`#${routeMap[option]}`}>
                <div className="group">
                  <li className="hover:text-green-700 cursor-pointer">
                    {option}
                  </li>
                  <div className="h-[2px] w-0 bg-transparent group-hover:w-[85%] group-hover:bg-green-600 transition-all duration-500" />
                </div>
              </a>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden font-bold text-2xl border-0 outline-none"
          onClick={() => setShowMenu(true)}
        >
          <Bars3BottomLeftIcon className="h-5 aspect-square" />
        </button>
        {showMenu && (
          <div className="absolute top-0 right-0 bg-white text-black p-8 w-full h-[200px] text-right transition-all duration-500">
            <div>
              <button
                className="text-2xl border-0 outline-none"
                onClick={() => setShowMenu(false)}
              >
                ×
              </button>
            </div>
            {navOptions.map((option) => (
              <a
                href={`#${routeMap[option]}`}
                onClick={() => setShowMenu(false)}
              >
                <div className="group mb-4">
                  <div className="hover:text-green-600 cursor-pointer">
                    {option}
                  </div>
                  <div className="h-[2px] w-0 bg-transparent group-hover:w-[85%] group-hover:bg-green-500 transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
