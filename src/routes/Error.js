import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex h-screen  flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-lg text-slate-500">
        Sorry, an unexpected error has occurred
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="text-lg text-slate-500">{error.message}</p>
    </div>
  );
};

export default Error;
