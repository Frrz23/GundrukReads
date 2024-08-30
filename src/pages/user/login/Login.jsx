import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="font-poppins w-[30rem] mx-auto  p-5 bg-white shadow-md rounded-md my-20 border ">
        <h2 className="text-2x2 font-semibold mb-4 text-center">Login</h2>
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700" >Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 px-3 py-2.5  border border-gray-300 rounded-md w-full focus:ring-indigo-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 px-2 py-2.5 border border-gray-300 rounded-md w-full focus:ring-indigo-500 text-sm"
            />
          </div>
          <div className="mt-4">
            <button className="py-2 px-4 w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500">
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center items-center text-center gap-2">
            Don't Have an account?
            <NavLink to="/gundrukreads-register">Register</NavLink>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;