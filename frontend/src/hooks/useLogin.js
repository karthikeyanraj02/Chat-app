import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContex";
import axios from "../Axios";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ email, password }) => {
    const success = inputErrorHandler(email, password);
    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/email/signin", {
        email,
        password,
      });

      const data = await res.data.user;
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-app", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
}

const inputErrorHandler = (email, password) => {
  if (!email || !password) {
    toast.error("please fill all fields");
    return false;
  }
  return true;
};
