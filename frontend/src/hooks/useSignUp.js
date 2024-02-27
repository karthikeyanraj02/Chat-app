import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../Axios";
import { useAuthContext } from "../context/authContex";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ email, userName, password }) => {
    const success = inputErrorHandler({ email, userName, password });
    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/email/signup", {
        email,
        userName,
        password,
      });
      const data = res.data.newUser;

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

  return { loading, signup };
}

function inputErrorHandler({ email, userName, password }) {
  if (!email || !userName || !password) {
    toast.error("Please fill all fields");
    return false;
  }

  if (password.length < 8) {
    toast.error("Please create password with at least 8 characters");
    return false;
  }

  return true;
}
