import React, { useRef, useState } from "react";
// mui
import { Avatar, Button, Tooltip } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// store
import { useAuth } from "@/store/auth/useAuth";
// utils
import { colorShades } from "@/utils/theme";
import MenuModal from "@/components/Modal/MenuModal";
import { BasicModal, LoadingButton } from "@/components";

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
  const uploadPictureRef = useRef(null);
  const [uploadPic, setUploadPic] = useState("");
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);

  const handleUpdateProfile = () => {
    setIsUpdateProfileModalOpen((prev) => !prev);
  };

  const handleProfilePictureUpload = () => {
    uploadPictureRef.current.click();
  };

  const handleSubmitPicture = () => {
    const data = new FormData();
    data.append("file", uploadPic);
    data.append("upload_preset", "whatsapp-img");
    data.append("cloud_name", "dkmwsnfpy");

    fetch(import.meta.env.VITE_CLOUDINARY_API_URL, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      className="text-white h-[4rem] flex justify-between items-center px-6"
      style={{
        backgroundColor: colorShades.grey.main,
        borderColor: colorShades.grey["400"],
      }}
    >
      {/* left side */}

      <MenuModal
        horizontal="left"
        component={
          <div className="w-[13rem]">
            <p
              onClick={handleUpdateProfile}
              className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer"
            >
              Profile Pic
            </p>
          </div>
        }
      >
        <Avatar className="cursor-pointer" />
      </MenuModal>
      <BasicModal
        open={isUpdateProfileModalOpen}
        key="updateProfile"
        handleClose={handleUpdateProfile}
        onClose={handleUpdateProfile}
        width="35rem"
        height="13rem"
      >
        <div className="">
          <h2 className="text-white text-xl text-center mt-5">Upload Image</h2>
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button variant="contained" onClick={handleProfilePictureUpload}>
              Upload{" "}
            </Button>
            <p className="text-white text-lg">
              {uploadPic ? uploadPic.name : "No file uploaded"}
            </p>
            <input
              ref={uploadPictureRef}
              type="file"
              className="hidden"
              onChange={(e) => setUploadPic(e.target.files[0])}
            />
          </div>
          <Button variant="contained" onClick={handleSubmitPicture}>
            Submit
          </Button>
        </div>
      </BasicModal>
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
