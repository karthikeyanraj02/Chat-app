import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import MessageContainer from "./Components/message/MessageContainer";

export default function Dashboard() {
  return (
    <>
      <div className="border h-7 bg-[#00a884]"></div>
      <div className="flex justify-start">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-5/6 h-screen">
          <MessageContainer />
        </div>
      </div>
    </>
  );
}
