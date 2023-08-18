import React, { forwardRef, useEffect, useRef } from "react";
import { colorShades } from "@/utils/theme";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChatArea from "./ChatArea";

const ChatBody = forwardRef(({ className = "", style }, ref) => {
  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const messageList = [
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    {
      sender: "Amitej",
      time: "2:!5pm",
      message: "kaisa hai ?",
    },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
    { sender: "Amitej", time: "2:!5pm", message: "Hi anupam" },
    { sender: "Anupam", time: "2:!7pm", message: "Hi amitej" },
  ];

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messageList]);

  /**
   * JSX
   */
  return (
    <div className={`${className}`} style={style}>
      {/* top bar */}
      <div
        className="text-white h-[4rem] flex justify-between items-center px-6 shadow-lg"
        style={{
          backgroundColor: colorShades.grey.main,
          borderColor: colorShades.grey["400"],
        }}
      >
        <div className="flex justify-center items-center gap-x-4 ">
          <Avatar />
          <div>
            <p>Amitej</p>
            <p className="text-[12px]">you</p>
          </div>
        </div>

        <div>
          <MoreHorizIcon
            className="rotate-90"
            style={{
              borderColor: colorShades.grey.lightText,
            }}
          />
        </div>
      </div>
      {/* chat area */}
      <ChatArea messageList={messageList} ref={chatContainerRef} />
      {/* chat input field */}
      <div className="flex gap-x-[2rem] items-center h-[4rem] px-[2rem]">
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
          className="outline-none px-4 py-2 rounded-lg w-[90%] text-white text-md"
          style={{
            backgroundColor: colorShades.grey.input,
          }}
          placeholder="Type a message"
        />
      </div>
    </div>
  );
});

export default ChatBody;
