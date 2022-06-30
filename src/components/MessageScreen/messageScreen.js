import { useState } from "react";
import MessageScreenMain from "./messageScreenMain.js";
import MessageScreenHeader from "./messageScreenHeader.js";
import MessageScreenFooter from "./messageScreenFooter.js";

function MessageScreen() {
  const [currentPerson, setCurrentPerson] = useState({
    name: "Sreenath",
    dp: "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg",
    bio: "well here I am ",
  });
  return (
    <div className="flex flex-col bg-[#0B1014] h-6/6 w-9/12">
      <MessageScreenHeader user={currentPerson} />
      <MessageScreenMain />
      <MessageScreenFooter />
    </div>
  );
}

export default MessageScreen;
