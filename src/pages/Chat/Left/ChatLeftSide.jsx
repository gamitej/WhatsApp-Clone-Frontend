import React from "react";
// mui
import { Avatar, Tooltip } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// store
import { useAuth } from "@/store/auth/useAuth";
// utils
import { colorShades } from "@/utils/theme";

const ChatLeftSide = ({ className = "", style }) => {
  const { handleLogout } = useAuth();

  return (
    <div className={`${className}`} style={style}>
      <ChatLeftSideTopBar handleLogout={handleLogout} />
      {/*left side body */}
      <div className="h-[calc(100%-4.5rem)]">
        {/* search user */}
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
        {/* search list */}
        <div className="h-[calc(100%-3rem)] overflow-y-auto" id="scrollBar">
          {Array.from({ length: 20 }).map((item, idx) => (
            <div
              key={idx}
              className={`text-slate-300 flex items-center pl-[1rem] gap-x-[1rem] hover:bg-slate-700 cursor-pointer`}
            >
              <Avatar />
              <div
                className="w-full py-4"
                style={{
                  borderBottom: `0.5px solid ${colorShades.grey["800"]}`,
                }}
              >
                <p>Amitej</p>
                <p className="text-[12px]">you</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ===================== SUB-COMP ===================

function ChatLeftSideTopBar({ handleLogout }) {
  return (
    <div
      className="text-white h-[4rem] flex justify-between items-center px-6"
      style={{
        backgroundColor: colorShades.grey.main,
        borderColor: colorShades.grey["400"],
      }}
    >
      {/* left side */}
      <Avatar />
      {/* right side */}
      <div className="flex gap-x-2">
        <MoreHorizIcon
          className="rotate-90"
          style={{
            borderColor: colorShades.grey.lightText,
          }}
        />
        <Tooltip
          placement="top"
          title="logout"
          className="cursor-pointer hover:text-green-600"
          onClick={handleLogout}
          arrow
        >
          <LogoutIcon />
        </Tooltip>
      </div>
    </div>
  );
}

export default ChatLeftSide;
