import React from "react";
import { colorShades } from "@/utils/theme";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoodIcon from "@mui/icons-material/Mood";

const ChatBody = ({ className = "", style }) => {
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
      <div className="h-[calc(100%-8rem)] bg-slate-800"></div>
      {/* chat input field */}
      <div className="flex gap-x-[2rem] items-center h-[4rem] px-[2rem]">
        <MoodIcon
          className="text-slate-400"
          style={{
            fontSize: "1.7rem",
          }}
        />
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
};

export default ChatBody;
