import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let i = 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Click (submissão)");
    let userData = {
      username: username,
      password: password
    };
    fetch('http://localhost:5000/login/' + i, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    }).then(res => res.json).then(data => {
      console.log("Dados: " + data);
    });

    i++;
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <img src={logo} alt="logo" className="w-20" />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-lg text-slate-500">{("login.msg")}</p>
        </div>
        <form className="flex flex-col">
          <label className="text-left font-semibold" htmlFor="username">
            {("login.username")}
          </label>
          <input
            type="text"
            name="username"
            placeholder={("login.username")}
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 pr-20 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="mb-2 text-left font-semibold" htmlFor="password">
            {("login.password")}
          </label>

          <input
            type="password"
            name="password"
            placeholder={("login.password")}
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 pr-20 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={123} className="font-medium underline">
            {("login.forgot")}
          </Link>
          <input
            type="submit"
            value="Login"
            className="my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
            onClick={(e) => handleSubmit(e)}
          />
          <p>
            {("login.acc")}{" "}
            <Link to={123} className="underline">
              {("login.signup")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
