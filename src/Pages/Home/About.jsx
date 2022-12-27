import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" bg-base-100 px-36 py-20">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src={user?.photoURL}
          alt=""
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start  "
        />
        <div className="flex flex-col text-center md:text-start">
          <h4 className="text-lg font-semibold text-center md:text-left">{user?.displayName}</h4>
          <p className="text-sm">Bangladesh Open University</p>
          <p className="text-sm">Address: Rangpur, Dhaka, Bangladesh </p>
        </div>
      </div>
      <div className="flex justify-center pt-4 space-x-4 align-center">
        <a href="/" target={"_blank"}>
          <FaGithub />
        </a>
        <a href="/" target={"_blank"}>
          <FaWeebly />
        </a>
        <a href="/" target={"_blank"}>
          <FaLinkedin />
        </a>
        <a href="/" target={"_blank"}>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default About;
