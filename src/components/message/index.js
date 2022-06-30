
function Message({message}) {
    return (
        <div className={`flex ${message.isSender ? "justify-end" : ""}`}>
            <div 
                className={`min-h-7 py-1 my-1 max-w-[45%] rounded-md flex flex-col px-2`}
                style={{background: !message.isSender ? "#182126" : "#0A4B3A", }}
                >
                <div className="text-gray-300">{message.message}</div>
                <div className="w-full pl-2 flex justify-end text-[#7D928A] text-[12px]">{message.time}</div>
            </div>
        </div>
    )
}

export default Message;