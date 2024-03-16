import { Link } from "react-router-dom";
import logo from "../assets/logowhite.svg";

const Navbar = () => {
  const name = localStorage.getItem("name");

  return (
    <nav className="fixed bg-blue-900 px-5 flex w-full items-center justify-between py-2 z-50">
      <Link to={"/"}>
        <div className="flex flex-row items-center justify-center">
          <img src={logo} alt="" className="mr-3 w-10" />
          <h1 className="text-xl font-bold text-white">Dolphin</h1>
        </div>
      </Link>
      <div>
        {name !== "" ? <h1 className="text-white text-xl">{name}</h1> : <></>}
      </div>
    </nav>
  );
};

export default Navbar;
