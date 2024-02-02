import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import dotenv from "dotenv";

dotenv.config({path: '.env'});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();
  /* const MySwal = withReactContent(Swal); */

  const url = "http://localhost:5000/login/1";
  const getLogin = async ({ username, password }) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      res.json();
      console.log("POST login");
    });
    /* .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      }); */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getLogin({ username, password });
    if ("user" in response) {
      Swal.fire({
        icon: "success",
        title: t("login.success.success"),
        text: t("login.success.text"),
        timer: 2000,
        confirmButtonColor: "rgb(59, 130, 249)",
      }).then((value) => {
        window.location.href = "/home";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: t("login.error.error"),
        text: t("login.error.text"),
        timer: 2000,
      });
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <img src={logo} alt="logo" className="w-20" />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-lg text-slate-500">{t("login.msg")}</p>
        </div>
        <form className="flex flex-col">
          <label className="text-left font-semibold" htmlFor="username">
            {t("login.username")}
          </label>
          <input
            type="text"
            name="username"
            placeholder={t("login.username")}
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 pr-20 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="mb-2 text-left font-semibold" htmlFor="password">
            {t("login.password")}
          </label>

          <input
            type="password"
            name="password"
            placeholder={t("login.password")}
            className="my-2 rounded-lg border-2 border-slate-100 px-3 py-1 pr-20 focus:outline-none focus:ring-2 focus:ring-slate-400"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={123} className="font-medium underline">
            {t("login.forgot")}
          </Link>
          <input
            type="submit"
            value="Login"
            className="my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
            onClick={(e) => handleSubmit(e)}
          />
          <p>
            {t("login.acc")}{" "}
            <Link to={123} className="underline">
              {t("login.signup")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
