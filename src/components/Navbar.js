import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import i18n from "../constants/i18n";
import globe from "../assets/globe.svg";
import downarrow from "../assets/downarrow.svg";
import "flag-icons/css/flag-icons.min.css";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "pt",
    name: "Português",
    country_code: "br",
  },
];

const Navbar = () => {
  const dropdownBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleIsOpen = () => {
    dropdownRef.current.classList.toggle("hidden");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        dropdownRef.current.classList.add("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownBtnRef]);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-end py-2">
      <div className="relative">
        <button
          className="mx-2 flex w-36 flex-row items-center justify-center rounded-lg border-2 border-blue-950 bg-blue-950 py-1 shadow-lg transition duration-300 ease-in-out hover:bg-blue-900"
          ref={dropdownBtnRef}
          onClick={handleIsOpen}
        >
          <img src={globe} alt="globe" className="mr-2 w-6" />
          <img src={downarrow} alt="arrow" className="w-4" />
        </button>
        <div
          className="absolute left-1/2 -z-[1] my-auto hidden w-36 origin-top -translate-x-1/2 -translate-y-2 divide-y rounded-b-lg bg-blue-950"
          ref={dropdownRef}
        >
          <ul className="my-2">
            {languages.map(({ code, name, country_code }) => (
              <li
                key={country_code}
                className="px-2 py-2  font-semibold text-white hover:bg-slate-500"
              >
                <button onClick={() => i18n.changeLanguage(code)}>
                  <span
                    className={`fi fi-${country_code} mr-2 shadow-lg`}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
