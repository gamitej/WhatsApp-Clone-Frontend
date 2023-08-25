import React, { useRef, useState } from "react";
import HeaderLeft from "./HeaderLeft";
// mui
import { Avatar, Button, Tooltip } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";

// store
import { useAuth } from "@/store/auth/useAuth";
// utils
import { colorShades } from "@/utils/theme";
import MenuModal from "@/components/Modal/MenuModal";
import { BasicModal, LoadingButton } from "@/components";

const ChatLeftSide = ({ className = "", style, setIsChatSelected }) => {
  const { handleLogout } = useAuth();

  const selectedUserChats = () => {
    setIsChatSelected(true);
  };

  return (
    <div className={`${className}`} style={style}>
      {/* ========= Left Top Side ========= */}
      <HeaderLeft handleLogout={handleLogout} />
      {/* ========= Left Top Body Side ========= */}
      <div className="h-[calc(100%-4.5rem)]">
        {/* Search User */}
        <div className="py-[0.5rem] px-[0.75rem] relative">
          <SearchIcon
            className="text-slate-400 absolute top-5 left-6"
            style={{ fontSize: "1.2rem" }}
          />
          <input
            className="outline-none px-[3rem] py-2 rounded-lg w-[100%] text-white"
            style={{
              backgroundColor: colorShades.grey.input,
            }}
            placeholder="search or start new chat"
          />
        </div>
        {/* Search List */}
        <div className="h-[calc(100%-3rem)] overflow-y-auto" id="scrollBar">
          {Array.from({ length: 20 }).map((item, idx) => (
            <div
              key={idx}
              onClick={selectedUserChats}
              className={`text-slate-300 flex items-center pl-[1rem] gap-x-[1rem] hover:bg-slate-700 cursor-pointer`}
            >
              <Avatar />
              <div
                className="w-full py-4"
                style={{
                  borderBottom: `0.5px solid ${colorShades.grey["800"]}`,
                }}
              >
                <p>Other</p>
                <p className="text-[12px]">message</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatLeftSide;
