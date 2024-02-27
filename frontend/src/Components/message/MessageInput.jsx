import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput() {
  const [input, setInput] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const submitHandelers = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <>
      <form className="px-4 my-3" onSubmit={submitHandelers}>
        <div className="w-full relative">
          <input
            type="text"
            className="border text-md rounded-lg block w-full p-2.5  bg-white   border-black text-black"
            placeholder="Send a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? (
              <span className="loading loading-spinner "></span>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </form>
    </>
  );
}
