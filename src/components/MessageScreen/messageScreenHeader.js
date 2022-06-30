import {FiVideo} from 'react-icons/fi';
import {IoCallOutline} from 'react-icons/io5';
import {BiSearch} from 'react-icons/bi';
import {IoIosArrowDown} from 'react-icons/io';

function MessageScreenHeader({user}) {
    return(
        <div className="sticky top-0 h-16 bg-[#182126] flex px-5 justify-between items-center">
            <div className="flex items-center">
                <img className="h-12 w-12 rounded-full" src={user.dp}></img>
                <div className="text-white pl-5">{user.name}</div>
            </div>
            <div className="flex gap-10 items-center">
                <FiVideo className="cursor-pointer text-gray-400 text-[20px]" />
                <IoCallOutline className="cursor-pointer text-gray-400 text-[20px]" />
                <BiSearch className="text-gray-400 text-[20px] cursor-pointer" />
                <IoIosArrowDown className="text-gray-400 text-[20px] cursor-pointer" />
            </div>
        </div>
    )
}

export default MessageScreenHeader;