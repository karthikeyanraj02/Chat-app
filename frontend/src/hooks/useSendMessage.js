import { useState } from "react";
import toast from "react-hot-toast";
import axios from "../Axios";
import useConversation from "../zustand/useConversation";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();
  const { messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(`/sendMessage/${selectedConversation._id}`, {
        message,
      });

      const data = res.data.newMessage;

      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
}
