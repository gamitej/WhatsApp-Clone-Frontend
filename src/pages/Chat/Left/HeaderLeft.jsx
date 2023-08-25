import { useRef, useState } from "react";
// comp
import { BasicModal } from "@/components";
import MenuModal from "@/components/Modal/MenuModal";
// mui
import { Avatar, Button, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// utils
import { colorShades } from "@/utils/theme";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";
// service
import { UploadProfilePic } from "@/services/ApiServices";
import { toast } from "react-hot-toast";

export default function HeaderLeft({ handleLogout }) {
  // STORE VARIABLES
  const { userInfo } = useAuth();
  const { profileImageUrl, setProfileImageUrl } = useGlobal();

  // USE-STATE
  const uploadPictureRef = useRef(null);
  const [uploadPic, setUploadPic] = useState("");
  const [isProfileUploadModalOpen, setIsProfileUploadModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ============ EVENT-HANDLERS START ==================

  const profileUploadModal = () => {
    setIsProfileUploadModalOpen((prev) => !prev);
  };

  const profileUploadModalRef = () => {
    uploadPictureRef.current.click();
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (!file?.type?.startsWith("image/")) {
      toast.error("Uploaded file is not an image.", { duration: 2500 });
    } else {
      setUploadPic(e.target.files[0]);
    }
  };

  // ============ EVENT-HANDLERS END ==================
  // ============ API CALLS START ==================

  // api for update profile picture in server
  const updateProfileInDatabase = async (src) => {
    const { token, userId } = userInfo;
    const req = { profilePicUrl: src, token, userId };
    try {
      const res = await UploadProfilePic(req);
      setProfileImageUrl(src);
      toast.success("Image uploaded Successfully", { duration: 1200 });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Unable to uploaded image", { duration: 1200 });
    }
  };

  // api call for getting profile url from cloudinary
  const callPictureUploadApi = async (data) => {
    try {
      const res = await fetch(import.meta.env.VITE_CLOUDINARY_API_URL, {
        method: "POST",
        body: data,
      });
      const responseData = await res.json();
      // api for update profile picture in server
      await updateProfileInDatabase(responseData.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitPicture = () => {
    if (uploadPic !== "") {
      setIsLoading(true);
      // cloudinary api data
      const data = new FormData();
      data.append("file", uploadPic);
      data.append("upload_preset", "whatsapp-img");
      data.append("cloud_name", "dkmwsnfpy");
      // cloudinary pic upload api call
      callPictureUploadApi(data);
    } else {
      toast.error("Please upload image", { duration: 1200 });
    }
  };

  // ============ API CALLS END ==================

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
              onClick={profileUploadModal}
              className="text-center text-white py-2 hover:bg-slate-700 cursor-pointer"
            >
              Profile Pic
            </p>
          </div>
        }
      >
        <div className="flex justify-center items-center gap-4">
          <Avatar
            className="cursor-pointer"
            src={profileImageUrl === "" ? "" : profileImageUrl}
          />
          <span className="text-sm">You</span>
        </div>
      </MenuModal>
      {/* =========== Picture Upload Model Start =========== */}
      <BasicModal
        open={isProfileUploadModalOpen}
        key="updateProfile"
        handleClose={profileUploadModal}
        onClose={profileUploadModal}
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
              onClick={profileUploadModalRef}
              color="success"
            >
              Upload{" "}
            </Button>
            <p className="text-white text-lg">
              {uploadPic ? uploadPic.name : "No file uploaded"}
              {uploadPic && (
                <button
                  onClick={() => setUploadPic("")}
                  className="text-sm bg-red-500 p-1 rounded-md font-semibold ml-4"
                >
                  clear
                </button>
              )}
            </p>
            <input
              ref={uploadPictureRef}
              type="file"
              className="hidden"
              onChange={handleProfileChange}
            />
          </div>
          <div className="w-[80%] mt-8">
            <Button
              sx={{ width: "100%" }}
              color="success"
              variant="contained"
              onClick={handleSubmitPicture}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </div>
      </BasicModal>
      {/* =========== Picture Upload Model End =========== */}
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
