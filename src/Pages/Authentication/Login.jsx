import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="text-center my-24">
      <h3 className="text-2xl font-semibold  mb-6">Sign in</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md bg-base-100 outline-none"
        />{" "}
        <br />
        {errors.email?.type === "required" && (
          <small className="text-xs text-red-400">Email is required</small>
        )}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
          })}
          placeholder="Password"
          className="border w-80 p-3 text-sm rounded-md bg-base-100 outline-none"
        />{" "}
        <br />
        {errors.password?.type === "required" && (
          <small className="text-xs text-red-400">Password is required</small>
        )}
        <br />
        <p className="w-[85%] cursor-pointer  hover:underline">
          <small>Forgot password ?</small>
        </p>
        <input
          type="submit"
          value="Sign in"
          className="border w-80  px-2 py-2 mt-5 rounded-md font-medium bg-gray-300 hover:bg-white text-black cursor-pointer"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs">OR</div>
          <div
            onClick={handleGoogleSignIn}
            className="md:flex lg:flex md:items-center lg:items-center md:border lg:border rounded-full p-1 hover:bg-sky-800"
          >
            <FaGoogle className="text-3xl mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16 cursor-pointer  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            New in Laptop Cloud ? {""}
            <Link className=" text-sm  hover:underline" to="/register">
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
