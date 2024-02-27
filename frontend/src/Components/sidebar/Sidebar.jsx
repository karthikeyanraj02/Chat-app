import React from "react";
import Search from "./Search";
import Conversations from "./Conversations";
import Logout from "./Logout";

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="border-r border-slate-500 p-4 flex flex-col h-screen ">
          <Search />
          <div className="divider px-3"></div>
          <Conversations />
          <Logout />
        </div>
      </div>
    </>
  );
}
