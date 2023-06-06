import React, { useState } from "react";
import { FaRegEnvelope, FaRegPaperPlane, FaRegUser } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username && password) {
      alert("successfully signed up");
    } else {
      alert("Please enter missing fields");
    }
  };

  return (
    <div>
      <div className="signup-1 flex items-center relative h-screen">
        <div className="container px-4 mx-auto relative z-10">
          <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <div className="box rounded-3xl bg-white p-6 md:px-12 md:pt-12 border-t-8 border-solid border-indigo-600 drop-shadow-md shadow-md">
              <h2 className="text-3xl text-gray-800 text-center">Login</h2>

              <form className="signup-form mt-6 md:mt-12">
                <div className="border-2 border-solid rounded flex items-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <FaRegUser className="text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      className="h-10 py-1 pr-3 w-full focus-within:outline-0"
                      value={data.username}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="border-2 border-solid rounded flex items-center mb-4">
                  <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                    <BsAsterisk className="text-gray-400" />
                  </div>
                  <div className="flex-1 ">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="h-10 flex py-1 w-full focus-within:outline-0"
                      value={data.password}
                      onChange={handleOnChange}
                    />
                  </div>
                  <span
                    className="pr-2 text-xl flex text-gray-400 cursor-pointer"
                    onClick={handleShowPassword}
                    onChange={handleOnChange}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>

                <div className="text-center mt-6 md:mt-12">
                  <button
                    className="items-center inline-flex bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300"
                    onClick={handleSubmit}
                  >
                    Login
                    <span className="pl-2">
                      <FaRegPaperPlane />
                    </span>
                  </button>
                </div>
              </form>

              <div className="border-t border-solid mt-6 md:mt-12 pt-4">
                <p className="text-gray-500 text-center">
                  Don't have an account,{" "}
                  <Link
                    to={"/signup"}
                    className="text-indigo-600 hover:underline"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
