import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900 text-center">
      {/* TODO -> see react-router-dom v6.x */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam
        provident ducimus reiciendis ullam adipisci. Ea rerum ratione aperiam,
        consectetur ullam magni a laudantium veniam culpa. Voluptatum fugit
        laudantium ea.
      </p>
      <button className="rounded-lg bg-white p-2 text-black transition duration-300 ease-in-out hover:bg-slate-200">
        <Link to={"/login"}>Login</Link>
      </button>
      <button className="rounded-lg bg-white p-2 text-black transition duration-300 ease-in-out hover:bg-slate-200">
        <Link to={"/signup"}>Sign up</Link>
      </button>
    </div>
  );
}

export default App;
