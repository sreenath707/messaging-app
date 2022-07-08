import { FiVideo } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Switch } from "@mui/material";

function MessageScreenHeader({ user, dark, setDark }) {
  return (
    <div
      className={
        dark
          ? "sticky top-0 h-16 bg-[#182126] flex px-5 justify-between items-center"
          : "sticky top-0 h-16 bg-[#ECEFF3] flex px-5 justify-between items-center"
      }
    >
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full" src={user.dp}></img>
        <div className={dark ? "text-white pl-5" : "text-black pl-5"}>
          {user.name}{" "}
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-5 items-center">
          <div className={dark ? "text-white" : ""}>dark</div>
          <Switch
            label="dark"
            checked={dark}
            onChange={() => {
              setDark((val) => !val);
            }}
          />
        </div>
        <FiVideo
          className={
            dark
              ? "cursor-pointer text-gray-400 text-[20px]"
              : "cursor-pointer text-gray-500 text-[20px]"
          }
        />
        <IoCallOutline
          className={
            dark
              ? "cursor-pointer text-gray-400 text-[20px]"
              : "cursor-pointer text-gray-500 text-[20px]"
          }
        />
        <BiSearch
          className={
            dark
              ? "cursor-pointer text-gray-400 text-[20px]"
              : "cursor-pointer text-gray-500 text-[20px]"
          }
        />
        <IoIosArrowDown
          className={
            dark
              ? "cursor-pointer text-gray-400 text-[20px]"
              : "cursor-pointer text-gray-500 text-[20px]"
          }
        />
      </div>
    </div>
  );
}

export default MessageScreenHeader;
