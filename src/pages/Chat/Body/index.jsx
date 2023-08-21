import React, { forwardRef, useEffect, useRef, useState } from "react";
// mui
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// comp
import ChatArea from "./ChatArea";
import ChatAreaTopBar from "./ChatAreaTopBar";
// utils & data
import { colorShades } from "@/utils/theme";
// import { messageList } from "@/data/dummyData";
import MenuModal from "@/components/Modal/MenuModal";
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";

const ChatBody = ({ className = "", style }) => {
  const { userInfo } = useAuth();
  const { socket } = useGlobal();
  const [messageList, setMessageList] = useState([]);

  const handleSentMessage = (message) => {
    const data = {
      sender: userInfo.username,
      message: message,
      time: "2:13pm",
      roomId: 1234,
    };
    setMessageList((prev) => [...prev, data]);

    socket.emit("send-chat-message", data);
  };

  useEffect(() => {
    const handleReceivedMessage = (data) => {
      setMessageList((prevMessageList) => [...prevMessageList, data]);
    };

    socket.on("received-chat-message", handleReceivedMessage);

    // Clean up the event listeners when the component unmounts
    return () => {
      socket.off("received-chat-message", handleReceivedMessage);
    };
  }, [socket]);

  useEffect(() => {
    socket.emit("join-chat", {
      roomId: 1234,
      username: userInfo.username,
    });
  }, []);

  /**
   * JSX
   */
  return (
    <div className={`${className}`} style={style}>
      <ChatAreaTopBar />
      <ChatArea messageList={messageList} username={userInfo?.username} />
      <ChatInputField handleSentMessage={handleSentMessage} />
    </div>
  );
};

// ========================== SUB-COMP ==========================

function ChatInputField({ handleSentMessage }) {
  const [inputMessage, setInputMessage] = useState("");

  // file upload
  const fileInputRef = useRef(null);
  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputMessage.trim() !== "") handleSentMessage(inputMessage.trim());
      setInputMessage("");
    }
  };

  /**
   * JSX
   */
  return (
    <div className="flex gap-x-[.8rem] items-center h-[4rem] px-[1.5rem]">
      <MoodIcon
        className="text-slate-400"
        style={{
          fontSize: "1.7rem",
        }}
      />
      <AttachFileIcon
        className="text-slate-400 rotate-45 hover:text-white cursor-pointer"
        onClick={handleSelectFile}
      />
      <input type="file" className="hidden" ref={fileInputRef} />
      {/* message field */}
      <input
        name="message"
        value={inputMessage}
        onKeyDown={handleKeyDown}
        className="outline-none px-4 py-2 rounded-lg w-[90%] text-white text-md"
        style={{
          backgroundColor: colorShades.grey.input,
        }}
        placeholder="Type a message"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default ChatBody;
