import React from "react";
import MenuModal from "@/components/Modal/MenuModal";
// mui
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { colorShades } from "@/utils/theme";

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
            <div className="w-[13rem]">
              <p className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer">
                View Profile
              </p>
              <p className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer">
                Change Background
              </p>
            </div>
          }
        >
          <Avatar className="cursor-pointer" />
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
export default ChatAreaTopBar;
