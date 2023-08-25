import { useRef, useState } from "react";
// comp
import { BasicModal } from "@/components";
import MenuModal from "@/components/Modal/MenuModal";
// mui
import { Avatar, Button, Tooltip } from "@mui/material";
// icons
import LogoutIcon from "@mui/icons-material/Logout";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { colorShades } from "@/utils/theme";

export default function TopBar({ handleLogout }) {
  const uploadPictureRef = useRef(null);
  const [uploadPic, setUploadPic] = useState("");
  const [isUpdateProfileModalOpen, setIsUpdateProfileModalOpen] =
    useState(false);

  // ============ EVENT-HANDLERS ==================

  const handleUpdateProfile = () => {
    setIsUpdateProfileModalOpen((prev) => !prev);
  };

  const handleProfilePictureUpload = () => {
    uploadPictureRef.current.click();
  };

  const callPictureUploadApi = async (data) => {
    try {
      const res = await fetch(import.meta.env.VITE_CLOUDINARY_API_URL, {
        method: "POST",
        body: data,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPicture = () => {
    const data = new FormData();
    data.append("file", uploadPic);
    data.append("upload_preset", "whatsapp-img");
    data.append("cloud_name", "dkmwsnfpy");
    // cloudinary pic upload api call
    callPictureUploadApi(data);
  };

  /**
   * JSX
   */
  return (
    <div
      className="text-white h-[4rem] flex justify-between items-center px-6"
      style={{
        backgroundColor: colorShades.grey.main,
        borderColor: colorShades.grey["400"],
      }}
    >
      {/*============ Top Left Side  ============*/}

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
      {/* =========== Picture Upload Model =========== */}
      <BasicModal
        open={isUpdateProfileModalOpen}
        key="updateProfile"
        handleClose={handleUpdateProfile}
        onClose={handleUpdateProfile}
        width="35rem"
        height="15rem"
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-white text-xl text-center mt-5 font-semibold underline">
            Upload Image
          </h2>
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button
              variant="contained"
              onClick={handleProfilePictureUpload}
              color="success"
            >
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
          <div className="w-[80%] mt-8">
            <Button
              sx={{ width: "100%" }}
              color="success"
              variant="contained"
              onClick={handleSubmitPicture}
            >
              Submit
            </Button>
          </div>
        </div>
      </BasicModal>
      {/* =========== Top Right Side  ============== */}
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
