import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const { createUser, update } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        update(data.name);
        toast.success("User created successfully");
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.code, error.message);
        return;
      });

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=08dce7fbfc7b46f77e82a01c97db482a`;
  };
  return (
    <div className="text-center my-24">
      <h3 className="text-2xl font-semibold  mb-6">Register</h3>
      <p className="text-xs text-red-300 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Your name"
          className="border w-80 p-3 text-sm rounded-md mt-2 text-white bg-base-100 outline-none"
        />{" "}
        {errors.name?.type === "required" && (
          <p className="text-xs text-red-300">Name is required</p>
        )}
        <br />
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md mt-2 bg-base-100 outline-none"
        />{" "}
        {errors.email?.type === "required" && (
          <p className="text-xs text-red-300">Email is required</p>
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
          className="border w-80 p-3 text-sm rounded-md mt-2 bg-base-100 outline-none"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-300">Password is required</p>
        )}
        <br />
        <input
          type="file"
          name="image"
          {...register("image", { required: true })}
          className="border w-80 p-3 text-sm rounded-md mt-2 outline-none cursor-pointer"
        />{" "}
        {errors.image?.type === "required" && (
          <p className="text-xs text-red-300">Photo is required</p>
        )}
        <br />
        <input
          type="submit"
          value="Register"
          className="border w-80 bg-base-300 hover:bg-base-200 px-2 py-2 mt-5 rounded-md font-medium text-white cursor-pointer"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs ">OR</div>
          <div className="md:flex lg:flex md:items-center lg:items-center md:border lg:border rounded-full p-1 bg-base-300 hover:bg-base-200">
            <FaGoogle className="text-3xl mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-300  text-sm  hover:underline">
              please sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
