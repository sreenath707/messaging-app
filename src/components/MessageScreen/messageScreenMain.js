import { useState } from "react";
import Message from "./mesage.js";

function MessageScreenMain() {
  const [messages, setMessages] = useState([
    { isSender: true, message: "hii", time: "11.30 pm" },
    { isSender: false, message: "hey", time: "11.30 pm" },
    { isSender: false, message: "Whatsup", time: "11.30 pm" },
    { isSender: true, message: "nothing much dude", time: "11.30 pm" },
    {
      isSender: true,
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "11.30 pm",
    },
    { isSender: true, message: "hii", time: "11.30 pm" },
    { isSender: false, message: "hey", time: "11.30 pm" },
    { isSender: false, message: "Whatsup", time: "11.30 pm" },
    { isSender: true, message: "nothing much dude", time: "11.30 pm" },
    {
      isSender: true,
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      time: "11.30 pm",
    },
    { isSender: true, message: "hii", time: "11.30 pm" },
    { isSender: false, message: "hey", time: "11.30 pm" },
    { isSender: false, message: "Whatsup", time: "11.30 pm" },
    { isSender: true, message: "nothing much dude", time: "11.30 pm" },
  ]);
  return (
    <div className="h-full overflow-y-scroll px-[5%] py-2 ">
      {messages.map((mess) => (
        <Message message={mess} />
      ))}
    </div>
  );
}

export default MessageScreenMain;
