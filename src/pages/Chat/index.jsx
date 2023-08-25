import { useEffect } from "react";
// utils
import { colorShades } from "@/utils/theme";
// comp
import ChatBody from "./Body";
import ChatLeftSide from "./Left";
import { ChatEmptyCard } from "@/components";
// services
import { getChats, getProfilePicture } from "@/services/ApiServices";
// store
import { useAuth } from "@/store/auth/useAuth";
import { useGlobal } from "@/store/global/useGlobal";

const Chat = ({ isChatBody = true }) => {
  const { userInfo } = useAuth();
  const { setProfileImageUrl } = useGlobal();

  // =========== API CALLS START ===============

  const getProfilePic = async () => {
    try {
      const profilePicResponse = await getProfilePicture(userInfo.userId);
      if (!profilePicResponse.error)
        setProfileImageUrl(profilePicResponse.imgUrl);
    } catch (error) {}
  };

  const getUserChats = async () => {
    const userChatResponse = await getChats(userInfo.userId);
  };

  useEffect(() => {
    getUserChats();
    getProfilePic();
  }, []);

  // =========== API CALLS END ===============

  /**
   * JSX
   */
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="h-[calc(100%-2.5rem)] w-[95%] sm:w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] xl:w-[calc(100%-12rem)] flex shadow-lg">
        {/* ========== Chat Left Side ====== */}
        <ChatLeftSide className="hidden sm:block sm:w-[45%] md:w-[30%] h-full" />
        {/* ========== Chat Body ========== */}
        {isChatBody ? (
          <ChatBody
            className="w-[100%] sm:w-[55%] md:w-[70%] h-full"
            style={{
              backgroundColor: colorShades.grey.main,
              borderLeft: `0.5px solid ${colorShades.grey["800"]}`,
            }}
          />
        ) : (
          <ChatEmptyCard
            className="w-[100%] sm:w-[55%] md:w-[70%] h-full flex flex-col justify-center items-center gap-y-[3rem]"
            style={{
              backgroundColor: colorShades.grey.main,
              borderLeft: `0.01rem solid ${colorShades.grey["800"]}`,
              borderBottom: `0.4rem solid ${colorShades.green["700"]}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Chat;
