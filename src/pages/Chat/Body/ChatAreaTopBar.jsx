import React, { useState } from "react";
import MenuModal from "@/components/Modal/MenuModal";
// mui
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { colorShades } from "@/utils/theme";
import { BasicModal } from "@/components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// utils
import imagesData from "@/utils/imagesData.json";
import { useGlobal } from "@/store/global/useGlobal";

function ChatAreaTopBar() {
  const { bgImgUrl, setBgImgUrl } = useGlobal();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBasicModal = () => {
    setIsOpen((prev) => !prev);
  };
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
        <TopBarModal
          isOpen={isOpen}
          bgImgUrl={bgImgUrl}
          setBgImgUrl={setBgImgUrl}
          handleOpenBasicModal={handleOpenBasicModal}
        />
        <MenuModal
          horizontal="left"
          component={
            <div className="w-[13rem]">
              <p className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer">
                View Profile
              </p>
              <p
                onClick={handleOpenBasicModal}
                className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer"
              >
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

function TopBarModal({ handleOpenBasicModal, isOpen, setBgImgUrl, bgImgUrl }) {
  return (
    <BasicModal
      open={isOpen}
      handleClose={handleOpenBasicModal}
      onClose={handleOpenBasicModal}
      height="25rem"
      width="35rem"
    >
      <div className="py-[1.5rem] px-[1rem] h-full w-full">
        <h3 className="text-white text-center text-lg">
          Select Chat Background
        </h3>
        <div className="grid grid-cols-9 h-full w-full gap-x-4 mt-3">
          {imagesData?.map(({ name, src }, idx) => (
            <div
              key={idx}
              onClick={() => setBgImgUrl(src)}
              className={`relative col-span-3 border {} ${
                bgImgUrl === src ? "border-yellow-600" : "border-slate-500"
              } h-[8.5rem] p-[.2rem] cursor-pointer hover:border-red-300 duration-200 ease-in-out`}
            >
              <img
                src={src}
                alt={name}
                className="h-[8rem] w-[10.5rem]"
                style={{ objectFit: "cover" }}
              />
              {bgImgUrl === src && (
                <div
                  className="absolute top-0 h-full w-full flex justify-center items-center"
                  key={idx}
                >
                  <CheckCircleOutlineIcon
                    className="text-yellow-900"
                    style={{ fontSize: "2rem" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </BasicModal>
  );
}
export default ChatAreaTopBar;
