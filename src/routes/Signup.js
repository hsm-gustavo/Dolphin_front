const Signup = () => {
  /* TODO -> add validation */
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Signup</h1>
          <p className="text-lg text-slate-500">
            Enter your details to create an account
          </p>
        </div>
        <form className="flex flex-col">
          <div className="grid grid-cols-2 auto-rows-auto gap-x-8">
            <label className="text-left font-semibold col-start-1" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-400 col-start-1 row-start-2"
              required
            />
            <label className="text-left font-semibold col-start-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-400 col-start-2 row-start-2"
              required
            />
          </div>
          <label className="text-left font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
          />
          <label className="text-left font-semibold" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
          />
          <label className="text-left font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
