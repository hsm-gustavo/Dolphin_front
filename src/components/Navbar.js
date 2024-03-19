import { Link } from "react-router-dom";
import logo from "../assets/logowhite.svg";

const Navbar = () => {
  return (
    <nav className="fixed bg-blue-900 px-5 flex w-full items-center justify-between py-2 z-50">
      <Link to={"/"}>
        <div className="flex flex-row items-center justify-center">
          <img src={logo} alt="" className="mr-3 w-10" />
          <h1 className="text-xl font-bold text-white">Dolphin</h1>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
