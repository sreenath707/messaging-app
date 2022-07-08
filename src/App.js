import { useEffect, useState } from "react";
import Home from "./components/home";
import MessageScreen from "./components/MessageScreen/messageScreen";
import socket from "./service/socket";

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to socket : ", socket.id);
    });
  }, []);
  const [dark, setDark] = useState(false);
  return (
    <div className="App flex h-screen">
      <Home />
      <MessageScreen setDark={setDark} dark={dark} />
    </div>
  );
}

export default App;
