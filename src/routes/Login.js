import { useTranslation } from "react-i18next";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../components/Input";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* login api */

  const getLogin = async ({ email, password }) => {
    return await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
    /* .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
      }); */
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await getLogin({ email, password });
    if ("user" in response) {
      Swal.fire({
        icon: "success",
        title: t("login.success.success"),
        text: t("login.success.text"),
        timer: 2000,
        confirmButtonColor: "rgb(59, 130, 249)",
      }).then((value) => {
        navigate("/home");
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
        <img src={logo} alt="logo" className="w-28" />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{t("login.login")}</h1>
          <p className="text-lg text-slate-500">{t("login.msg")}</p>
        </div>
        <form
          className="grid w-full grid-flow-row px-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            classNameLabel={["text-left", "font-semibold"]}
            htmlFor={"email"}
            label={t("login.email")}
            type={"email"}
            name={"email"}
            placeholder={t("login.email")}
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
              "focus:ring-slate-400",
            ]}
          />
          <Input
            classNameLabel={["mb-2", "text-left", "font-semibold"]}
            htmlFor={"password"}
            label={t("login.password")}
            type={"password"}
            name={"password"}
            placeholder={t("login.password")}
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
              "focus:ring-slate-400",
            ]}
          />
          <Link to={123} className="col-span-2 font-medium underline">
            {t("login.forgot")}
          </Link>
          <input
            type="submit"
            value={t("login.login")}
            className="col-span-2 my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
          />
          <p className="col-span-2">
            {t("login.acc")}{" "}
            <Link to={"/signup"} className="underline">
              {t("login.signup")}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
