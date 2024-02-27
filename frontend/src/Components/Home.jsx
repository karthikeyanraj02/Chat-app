import React from "react";
import Login from "./user/Login";

export default function Home() {
  return (
    <div className="flex flex-col h-screen ">
      <div className="bg-[#00a884] h-52 flex justify-center items-center">
        <div className="text-white font-bold text-5xl flex">
          <span>
            <img src="../logo1.png" className="m-1 mx-2" />
          </span>
          ChatApp
        </div>
      </div>
      <div className="bg-[#f0f2f5] flex-grow">
        <Login />
      </div>
    </div>
  );
}
