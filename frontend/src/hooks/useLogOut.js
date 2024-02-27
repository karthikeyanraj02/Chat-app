import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../Axios";
import { useAuthContext } from "../context/authContex";

function useLogOut() {
  const { setAuthUser } = useAuthContext();
  const [loading, setLoding] = useState(false);
  const logout = async () => {
    setLoding(true);
    try {
      const res = await axios.get("/email/signout");
      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-app");
      setAuthUser(null);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoding(false);
    }
  };
  return { loading, logout };
}

export default useLogOut;
