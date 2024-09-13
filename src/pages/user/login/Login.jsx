import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const config = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginValue)
      };
      const res = await fetch('http://httpbin.org/post', config); 
      if (res.ok) {
        toast.success("Logged in successfully!");
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred!");
    }
  };

  return (
    <>
      <div className="font-poppins w-[30rem] mx-auto p-5 bg-white shadow-md rounded-md my-20">
        <h2 className="text-2x2 font-semibold mb-4 text-center">Login</h2>
        <form className="w-full" onSubmit={handleSubmit}> {/* Corrected event binding */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 px-3 py-2.5 border border-gray-300 rounded-md w-full focus:ring-indigo-500 text-sm"
              value={loginValue.email}
              onChange={handleChange}
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
              value={loginValue.password}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button className="py-2 px-4 w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500">
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center items-center text-center gap-2">
            Don't have an account?
            <NavLink to="/gundrukreads-register">Register</NavLink>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;
