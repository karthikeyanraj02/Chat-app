import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogOut";

export default function Logout() {
  const { loading, logout } = useLogOut();

  return (
    <>
      <div className="mt-auto">
        {loading ? (
          <span className="loading loading-spinner "></span>
        ) : (
          <BiLogOut
            className="w-6 h-6 text-black cursor-pointer"
            onClick={logout}
          />
        )}
      </div>
    </>
  );
}
