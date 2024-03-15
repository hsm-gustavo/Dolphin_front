import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../components/Input";
import {useEffect, useState} from "react";

const Login = () => {
  const navigate = useNavigate();

  const [postData, setPostData] = useState({}); // Estado para os dados a serem enviados
  const [response, setResponse] = useState(null); // Estado para a resposta da requisição
  const [error, setError] = useState(null); // Estado para possíveis erros

  const postLogin = async ({ username, password }) => {
    return await fetch("http://localhost:27017/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());
    /* .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      }); */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const response = await postLogin({ username, password });
    console.log(response)

    if ("user" in response) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login successful",
        timer: 2000,
        confirmButtonColor: "rgb(59, 130, 249)",
      }).then((value) => {
        navigate("/dashboard");
      });
    } else {
       Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login failed",
          timer: 2000,
      });
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <img src={logo} alt="logo" className="w-28" />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-lg text-slate-500">
            Enter your username and password to login to your account
          </p>
        </div>
        <form
          className="grid w-full grid-flow-row px-6"
          onSubmit={(e) => handleSubmit(e)}
        >

          <Input
            classNameLabel={["text-left", "font-semibold"]}
            htmlFor={"username"}
            label={"Username"}
            type={"text"}
            name={"username"}
            placeholder={"Username"}
            required={true}
            className={[
              "my-2",
              "rounded-lg",
              "border-2",
              "border-slate-100",
              "px-3",
              "py-1",
              "col-span-2",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-slate-400"
            ]}
          />
          <Input
            classNameLabel={["mb-2", "text-left", "font-semibold"]}
            htmlFor={"password"}
            label={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            required={true}
            className={[
              "my-2",
              "rounded-lg",
              "border-2",
              "border-slate-100",
              "px-3",
              "py-1",
              "col-span-2",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-slate-400"
            ]}
          />
          {/* <Link to={123} className="col-span-2 font-medium underline">
            {"Forgot password?"}
          </Link> */}
          <input
            type="submit"
            value={"Login"}
            className="col-span-2 my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
          />
          <p className="col-span-2">
            {"Don't have an account?"}{" "}
            <Link to={"/signup"} className="underline">
              {"Sign Up"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
