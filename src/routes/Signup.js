import Input from "../components/Input";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Signup = () => {
  const { t } = useTranslation();

  const [emailValidation, setEmailValidation] = useState({
    isValid: true,
    message: "",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    isValid: true,
    message: "",
  });

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return { isValid: false, message: t("signup.error.password.match") };
    }

    if (password.length < 8) {
      return {
        isValid: false,
        message: t("signup.error.password.length"),
      };
    }

    const hasSymbol = /[!@#$%&*?:<>|]/.test(password);
    const hasNumber = /\d/.test(password);
    if (!hasSymbol) {
      return {
        isValid: false,
        message:
          t("signup.error.password.numsym"),
      };
    }

    if (!hasNumber) {
      return {
        isValid: false,
        message:
          t("signup.error.password.numsym"),
      };
    }

    return { isValid: true, message: "" };
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      return { isValid: false, message: t("signup.error.email") };
    }
    return { isValid: true, message: "" };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = capitalize(e.target.firstName.value);
    const lastName = capitalize(e.target.lastName.value);

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const passwordValidation = validatePassword(password, confirmPassword);

    if (!passwordValidation.isValid) {
      setPasswordValidation(passwordValidation);
      return;
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation) {
      setEmailValidation(emailValidation);
      return;
    }

    setEmailValidation({ isValid: true, message: "" });
    setPasswordValidation({ isValid: true, message: "" });

    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    }).then((res) => res.json());

    if (response.success){
      Swal.fire({
        icon: "success",
        title: t("signup.success.success"),
        text: t("signup.success.text"),
        timer: 2000,
        confirmButtonColor: "rgb(59, 130, 249)",
      }).then((value) => {
        window.location.href = "/login";
      });
    } else {
      if(response.message === "Email already in use"){
        Swal.fire({
          icon: "error",
          title: t("signup.error.error"),
          text: t("signup.error.inUse"),
          timer: 2000,
        });
        return;
      }
      Swal.fire({
        icon: "error",
        title: t("signup.error.error"),
        text: t("signup.error.text"),
        timer: 2000,
      });
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <img src={logo} alt="logo" className="w-28 " />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">{t("signup.signup")}</h1>
          <p className="text-lg text-slate-500">
            {t("signup.msg")}
          </p>
        </div>
        <form className="mx-5 flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid auto-rows-auto grid-cols-2 gap-x-4">
            <Input
              htmlFor={"firstName"}
              classNameLabel={["col-start-1", "text-left", "font-semibold"]}
              label={t("signup.firstName")}
              type="text"
              name="firstName"
              placeholder={t("signup.firstName")}
              className={[
                "col-start-1",
                "row-start-2",
                "my-2",
                "rounded-lg",
                "border-2",
                "border-slate-100",
                "px-3",
                "py-1",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-slate-400",
              ]}
              required={true}
            />
            <Input
              htmlFor={"lastName"}
              classNameLabel={["col-start-2", "text-left", "font-semibold"]}
              label={t("signup.lastName")}
              type="text"
              name="lastName"
              placeholder={t("signup.lastName")}
              required={true}
              className={[
                "col-start-2",
                "row-start-2",
                "my-2",
                "rounded-lg",
                "border-2",
                "border-slate-100",
                "px-3",
                "py-1",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-slate-400",
              ]}
            />
          </div>
          <Input
            htmlFor={"email"}
            classNameLabel={["text-left", "font-semibold"]}
            label={"Email"}
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            className={[
              "my-2",
              "rounded-lg",
              "border-2",
              "border-slate-100",
              "px-3",
              "py-1",
              "focus:outline-none",
              "focus:ring-2",
              "focus:ring-slate-400",
            ]}
            validation={emailValidation}
          />
          <div className="grid auto-rows-auto grid-cols-2 gap-x-4">
            <Input
              htmlFor={"password"}
              classNameLabel={["col-start-1", "text-left", "font-semibold"]}
              label={t("signup.password")}
              type="password"
              name="password"
              placeholder={t("signup.password")}
              required={true}
              className={[
                "col-start-1",
                "row-start-2",
                "my-2",
                "rounded-lg",
                "border-2",
                "border-slate-100",
                "px-3",
                "py-1",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-slate-400",
              ]}
              validation={passwordValidation}
            />
            <Input
              htmlFor={"confirmPassword"}
              classNameLabel={["col-start-2", "text-left", "font-semibold"]}
              label={t("signup.confirm")}
              type="password"
              name="confirmPassword"
              placeholder={t("signup.confirm")}
              required={true}
              className={[
                "col-start-2",
                "row-start-2",
                "my-2",
                "rounded-lg",
                "border-2",
                "border-slate-100",
                "px-3",
                "py-1",
                "focus:outline-none",
                "focus:ring-2",
                "focus:ring-slate-400",
              ]}
            />
          </div>
          <input
            type="submit"
            value={t("signup.signup")}
            className="my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
          />
        </form>
        <p>
          {t("signup.acc")}{" "}
          <Link to="/login" className="underline">
            {t("signup.login")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;