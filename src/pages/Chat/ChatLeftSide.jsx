import React from "react";
import { colorShades } from "@/utils/theme";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";

const ChatLeftSide = ({ className = "", style }) => {
  return (
    <div className={`${className}`} style={style}>
      {/* left side top bar */}
      <div
        className="text-white h-[4rem] flex justify-between items-center px-6"
        style={{
          backgroundColor: colorShades.grey.main,
          borderColor: colorShades.grey["400"],
        }}
      >
        <Avatar />
        <MoreHorizIcon
          className="rotate-90"
          style={{
            borderColor: colorShades.grey.lightText,
          }}
        />
      </div>
      {/*left side body */}
      <div>
        {/* search user */}
        <div className="py-2 px-3 relative">
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
        <div>
          {[1, 2, 3].map((item) => (
            <div className="text-slate-300 flex items-center pl-[2rem] gap-x-[1rem]">
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

export default ChatLeftSide;
