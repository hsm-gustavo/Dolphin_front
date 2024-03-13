import { Link } from "react-router-dom";
import logo from "./assets/logowhite.svg";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900 text-center">
      <img src={logo} alt="logo" className="w-40"/>
      <h1 className="text-7xl text-white font-semibold mb-10">Dolphin</h1>
      <h1 className="text-4xl font-semibold text-white">
        The modern way to write.
      </h1>
      <p className="text-xl text-white mb-20">
        A beautiful, distraction-free writing experience with support for rich
        formatting
      </p>
      <div>
        <button className="rounded-lg bg-white p-2 px-10 text-black transition duration-300 ease-in-out hover:bg-slate-200 mr-4">
          <Link to={"/login"} className="text-xl">Login</Link>
        </button>
        <button className="rounded-lg bg-white p-2 px-8 text-black transition duration-300 ease-in-out hover:bg-slate-200">
          <Link to={"/signup"} className="text-xl">Sign up</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
