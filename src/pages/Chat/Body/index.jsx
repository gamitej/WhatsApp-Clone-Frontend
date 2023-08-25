import React, { forwardRef, useEffect, useRef, useState } from "react";
// comp
import HeaderBody from "./HeaderBody";
import MessageBody from "./MessageBody";
import MessageInputField from "./MessageInputField";
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

  // ============== SOCKET EVENT HANDLER START ================

  const handleSentMessage = (message) => {
    const data = {
      sender: userInfo.username,
      message: message,
      time: "2:13pm",
      roomId: 1234,
    };
    setMessageList((prev) => [...prev, data]);

    //  sent message
    socket.emit("send-chat-message", data);
  };

  const handleReceivedMessage = (data) => {
    setMessageList((prevMessageList) => [...prevMessageList, data]);
  };

  useEffect(() => {
    socket.on("received-chat-message", handleReceivedMessage);

    // Clean up func
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

  // ============== SOCKET EVENT HANDLER END ================

  /**
   * JSX
   */
  return (
    <div className={`${className}`} style={style}>
      <HeaderBody />
      <MessageBody messageList={messageList} username={userInfo?.username} />
      <MessageInputField handleSentMessage={handleSentMessage} />
    </div>
  );
};

export default ChatBody;
