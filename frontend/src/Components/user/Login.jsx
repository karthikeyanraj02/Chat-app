import React, { useState } from "react";

import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const { login, loading } = useLogin();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const submitHandlers = async (e) => {
    e.preventDefault();
    await login(inputs);
  };
  return (
    <div className="flex justify-center  w-full mx-full">
      <div className="w-96 p-6 rounded-lg shadow-md bg-[#f0f2f5] h-full  ">
        <h1 className="text-3xl font-semibold text-center text-[#00a884]">
          Login
        </h1>

        <form onSubmit={submitHandlers}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full input  border-[#00a884] h-10"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input border-[#00a884]  h-10"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2
            inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-[#00a884] "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
