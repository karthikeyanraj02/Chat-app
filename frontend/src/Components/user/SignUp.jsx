import React, { useState } from "react";

import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const { loading, signup } = useSignUp();

  const submitHandeler = (e) => {
    e.preventDefault();
    signup(inputs);
  };
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="bg-[#00a884] h-52 flex justify-center items-center">
          <div className="text-white font-bold text-5xl flex">
            <span>
              <img src="../logo1.png" className="m-1 mx-2" />
            </span>
            ChatApp
          </div>
        </div>
        <div className="flex justify-center  w-full mx-full">
          <div className="w-96 p-6 rounded-lg shadow-md bg-[#f0f2f5] h-full  ">
            <h1 className="text-3xl font-semibold text-center text-[#00a884]">
              SignUp
            </h1>

            <form onSubmit={submitHandeler}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={inputs.email}
                  placeholder="Enter Email"
                  className="w-full input  border-[#00a884] h-10"
                  onChange={(e) =>
                    setInputs({ ...inputs, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  value={inputs.userName}
                  placeholder="Enter Username"
                  className="w-full input  border-[#00a884] h-10"
                  onChange={(e) =>
                    setInputs({ ...inputs, userName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={inputs.password}
                  placeholder="Enter Password"
                  className="w-full input border-[#00a884]  h-10"
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <Link
                to="/"
                className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                Already have an account?
              </Link>

              <div>
                <button
                  className="btn btn-block btn-sm mt-2 bg-[#00a884]"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner "></span>
                  ) : (
                    "SignUp"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
