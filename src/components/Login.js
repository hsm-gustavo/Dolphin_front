import logo from "../logo.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-6/12 w-full sm:h-5/6 h-full px-5 md:rounded-3xl text-center bg-white shadow-2xl">
      <img src={logo} alt="logo" className="w-20" />
      <div className="flex flex-col justify-center items-center my-10">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-lg text-slate-500">
          Enter your username and password to login to your account
        </p>
      </div>
      <form className="flex flex-col">
        <label className="font-semibold text-left" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border-2 border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-lg px-3 py-1 pr-20 my-2"
          required
        />

        <label className="font-semibold text-left mb-2" htmlFor="password">
          Password
        </label>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-lg px-3 py-1 pr-20 my-2"
          required
        />
        <Link to={123} className="font-medium underline">
          Forgot password?
        </Link>
        <input
          type="submit"
          value="Login"
          className="my-10 bg-black text-white py-2 rounded-lg hover:bg-slate-900"
        />
        <p>
          Don't have an account?{" "}
          <Link to={123} className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
