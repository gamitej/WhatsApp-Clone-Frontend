import React, { forwardRef, useEffect, useRef } from "react";
// mui
import { Avatar } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachFileIcon from "@mui/icons-material/AttachFile";
// comp
import ChatArea from "./ChatArea";
// utils & data
import { colorShades } from "@/utils/theme";
import { messageList } from "@/data/dummyData";
import MenuModal from "@/components/Modal/MenuModal";

const ChatBody = ({ className = "", style }) => {
  /**
   * JSX
   */
  return (
    <div className={`${className}`} style={style}>
      <ChatAreaTopBar />
      <ChatArea messageList={messageList} />
      <ChatInputField />
    </div>
  );
};

// ========================== SUB-COMP ==========================

function ChatAreaTopBar() {
  /**
   * JSX
   */
  return (
    <div
      className="text-white h-[4rem] flex justify-between items-center px-6 shadow-lg"
      style={{
        backgroundColor: colorShades.grey.main,
        borderColor: colorShades.grey["400"],
      }}
    >
      {/* left side */}
      <div className="flex justify-center items-center gap-x-4 ">
        <MenuModal
          horizontal="left"
          component={
            <div className="w-[10rem]">
              <p className="text-center py-2">hei</p>
              <p className="text-center py-2">hi</p>
            </div>
          }
        >
          <Avatar />
        </MenuModal>
        <div>
          <p>Amitej</p>
          <p className="text-[12px]">you</p>
        </div>
      </div>
      {/* right side */}
      <div>
        <MoreHorizIcon
          className="rotate-90"
          style={{
            borderColor: colorShades.grey.lightText,
          }}
        />
      </div>
    </div>
  );
}

function ChatInputField() {
  const fileInputRef = useRef(null);
  const handleSelectFile = () => {
    fileInputRef.current.click();
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
        className="outline-none px-4 py-2 rounded-lg w-[90%] text-white text-md"
        style={{
          backgroundColor: colorShades.grey.input,
        }}
        placeholder="Type a message"
      />
    </div>
  );
}

export default ChatBody;
