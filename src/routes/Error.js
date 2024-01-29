import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex  flex-col items-center justify-center px-5 text-center">
        <h1 className="mb-3 text-7xl font-bold text-white">Oops!</h1>
        <p className="mb-3 text-2xl text-slate-300">
          Sorry, an unexpected error has occurred
        </p>
        <p className="mb-3 text-slate-300">
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="rounded-lg bg-white p-2 text-black transition duration-300 ease-in-out hover:bg-slate-200">
          <Link to={"/"}>Return to Homepage</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
