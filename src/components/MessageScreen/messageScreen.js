import { useState } from "react";
import MessageScreenMain from "./messageScreenMain.js";
import MessageScreenHeader from "./messageScreenHeader.js";
import MessageScreenFooter from "./messageScreenFooter.js";

function MessageScreen({ dark, setDark }) {
  const [currentPerson, setCurrentPerson] = useState({
    name: "Sreenath",
    dp: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    bio: "well here I am ",
  });
  return (
    <div
      className={
        dark
          ? "flex flex-col bg-[#0B1014] h-6/6 w-9/12"
          : "flex flex-col bg-[#EBE5DB] h-6/6 w-9/12"
      }
    >
      <MessageScreenHeader dark={dark} setDark={setDark} user={currentPerson} />
      <MessageScreenMain dark={dark} />
      <MessageScreenFooter dark={dark} />
    </div>
  );
}

export default MessageScreen;
