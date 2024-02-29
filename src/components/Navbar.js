import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import i18n from "../constants/i18n";
import globe from "../assets/globe.svg";
import downarrow from "../assets/downarrow.svg";
import logo from "../assets/logowhite.svg";
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
    <nav className="fixed bg-blue-900 px-5 flex w-full items-center justify-between py-2 z-50">
      <Link to={"/"}>
        <div className="flex flex-row items-center justify-center">
          <img src={logo} alt="" className="mr-3 w-10" />
          <h1 className="text-xl font-bold text-white">Dolphin</h1>
        </div>
      </Link>
      <div className="relative">
        <button
          className="mx-10 flex w-20 flex-row items-center justify-center rounded-lg border-2 border-blue-950 bg-blue-950 py-1 shadow-lg transition duration-300 ease-in-out hover:bg-blue-900"
          ref={dropdownBtnRef}
          onClick={handleIsOpen}
        >
          <img src={globe} alt="globe" className="mr-2 w-6" />
          <img src={downarrow} alt="arrow" className="w-4" />
        </button>
        <div
          className="absolute left-12 -z-[1] my-auto hidden w-36 origin-top -translate-x-1/2 -translate-y-2 divide-y rounded-b-lg rounded-s-lg bg-blue-950"
          ref={dropdownRef}
        >
          <ul className="my-2">
            {languages.map(({ code, name, country_code }) => (
              <li
                key={country_code}
                className="px-2 py-2  font-semibold text-white hover:bg-slate-500"
                onClick={() => i18n.changeLanguage(code)}
              >
                <span className={`fi fi-${country_code} mr-2 shadow-lg`}></span>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
