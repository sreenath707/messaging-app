import { ImAttachment } from "react-icons/im";
import { BsEmojiNeutral } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

function MessageScreenFooter() {
  return (
    <div className="sticky top-0 h-16 bg-[#182126] flex px-5 justify-between items-center">
      <div className="flex gap-5 items-center">
        <BsEmojiNeutral className="cursor-pointer text-gray-400 text-[20px]" />
        <ImAttachment className="cursor-pointer text-gray-400 text-[20px]" />
      </div>
      <input
        className="w-10/12 bg-[#202B33] h-4/6 rounded-md focus:outline-none text-gray-300 px-3 placeholder:"
        type="text"
        placeholder="Type a message"
      />
      <AiOutlineSend className="cursor-pointer text-gray-400 text-[24px]" />
    </div>
  );
}

export default MessageScreenFooter;
