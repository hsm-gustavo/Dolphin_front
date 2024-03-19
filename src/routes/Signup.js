import Input from "../components/Input";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(false);

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
      return { isValid: false, message: "Passwords do not match" };
    }

    if (password.length < 8) {
      return {
        isValid: false,
        message: "Password must be at least 8 characters long",
      };
    }

    const hasSymbol = /[!@#$%&*?:<>|]/.test(password);
    const hasNumber = /\d/.test(password);
    if (!hasSymbol) {
      return {
        isValid: false,
        message:
          "Password must contain at least a symbol (!, @, #, $, %, &, *, ?) and a number (0-9)"
      };
    }

    if (!hasNumber) {
      return {
        isValid: false,
        message:
          "Password must contain at least a symbol (!, @, #, $, %, &, *, ?) and a number (0-9)"
      };
    }

    return { isValid: true, message: "" };
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      return { isValid: false, message: "Invalid Email" };
    }
    return { isValid: true, message: "" };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const firstName = capitalize(e.target.firstName.value);
    const lastName = capitalize(e.target.lastName.value);

    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const passwordValidation = validatePassword(password, confirmPassword);

    if (!passwordValidation.isValid) {
      setPasswordValidation(passwordValidation);
      setDisabled(false);
      return;
    }

    const emailValidation = validateEmail(email);
    if (!emailValidation) {
      setEmailValidation(emailValidation);
      setDisabled(false);
      return;
    }

    setEmailValidation({ isValid: true, message: "" });
    setPasswordValidation({ isValid: true, message: "" });

    const fullName = `${firstName} ${lastName}`;
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: fullName, username, password }),
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Signup successful",
        timer: 2000,
        confirmButtonColor: "rgb(59, 130, 249)"
      }).then((value) => {
        setDisabled(false);
        navigate("/login");
      });
    } else {
      if(response.status === "409"){
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Username already in use",
          timer: 2000
        }).then((value) => setDisabled(false));
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Signup failed",
        timer: 2000,
      }).then((value) => setDisabled(false));
    }
    setDisabled(false);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blue-900">
      <div className="flex h-full w-full flex-col items-center justify-center bg-white px-5 text-center shadow-2xl sm:h-5/6 md:w-6/12 md:rounded-3xl">
        <img src={logo} alt="logo" className="w-28 " />
        <div className="my-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-lg text-slate-500">
            Enter your details to create an account
          </p>
        </div>
        <form className="mx-5 flex flex-col" onSubmit={(e) => handleSubmit(e)}>
          <div className="grid auto-rows-auto grid-cols-2 gap-x-4">
            <Input
              htmlFor={"firstName"}
              classNameLabel={["col-start-1", "text-left", "font-semibold"]}
              label={"First Name"}
              type="text"
              name="firstName"
              placeholder={"First Name"}
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
                "focus:ring-slate-400"
              ]}
              required={true}
            />
            <Input
              htmlFor={"lastName"}
              classNameLabel={["col-start-2", "text-left", "font-semibold"]}
              label={"Last Name"}
              type="text"
              name="lastName"
              placeholder={"Last Name"}
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
                "focus:ring-slate-400"
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
              "focus:ring-slate-400"
            ]}
            validation={emailValidation}
          />
          <Input
            htmlFor={"username"}
            classNameLabel={["text-left", "font-semibold"]}
            label={"Username"}
            type="text"
            name="username"
            placeholder="Username"
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
              "focus:ring-slate-400"
            ]}
          />
          <div className="grid auto-rows-auto grid-cols-2 gap-x-4">
            <Input
              htmlFor={"password"}
              classNameLabel={["col-start-1", "text-left", "font-semibold"]}
              label={"Password"}
              type="password"
              name="password"
              placeholder={"Password"}
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
                "focus:ring-slate-400"
              ]}
              validation={passwordValidation}
            />
            <Input
              htmlFor={"confirmPassword"}
              classNameLabel={["col-start-2", "text-left", "font-semibold"]}
              label={"Confirm Password"}
              type="password"
              name="confirmPassword"
              placeholder={"Confirm Password"}
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
                "focus:ring-slate-400"
              ]}
            />
          </div>
          <input
            type="submit"
            value={"Sign Up"}
            className="my-10 rounded-lg bg-black py-2 text-white hover:bg-slate-900"
            disabled={disabled}
          />
        </form>
        <p>
          {"Already have an account?"}{" "}
          <Link to="/login" className="underline">
            {"Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
