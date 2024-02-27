import { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import { setMessages } from "../actions/conversationActions";

const useListenMessages = () => {
  const { socket } = useSocketContext();

  useEffect(() => {
    const handleNewMessage = (newMessage) => {
      // Dispatching the action to update messages with the new message
      setMessages(newMessage);
    };

    socket?.on("newMessage", handleNewMessage);

    return () => {
      socket?.off("newMessage", handleNewMessage);
    };
  }, [socket]);
};

export default useListenMessages;
