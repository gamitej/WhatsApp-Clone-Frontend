import { useEffect } from "react";
// utils
import { colorShades } from "@/utils/theme";
// comp
import ChatBody from "./Body";
import ChatLeftSide from "./Left/ChatLeftSide";
// services
import { getChats } from "@/services/ApiServices";
import { useAuth } from "@/store/auth/useAuth";
import { ChatEmptyCard } from "@/components";

const Chat = ({ isChatBody = true }) => {
  const { userInfo } = useAuth();

  useEffect(() => {
    const apiCall = async () => {
      const data = await getChats(userInfo.userId);
    };
    apiCall();
  }, []);

  /**
   * JSX
   */
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="h-[calc(100%-2.5rem)] w-[95%] sm:w-[calc(100%-2rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] xl:w-[calc(100%-12rem)] flex shadow-lg">
        {/* chat left side */}
        <ChatLeftSide className="hidden sm:block sm:w-[45%] md:w-[30%] h-full" />
        {/* chat body */}
        {isChatBody && (
          <ChatBody
            className="w-[100%] sm:w-[55%] md:w-[70%] h-full"
            style={{
              backgroundColor: colorShades.grey.main,
              borderLeft: `0.5px solid ${colorShades.grey["800"]}`,
            }}
          />
        )}
        {/* chat body when no chat selected */}
        {!isChatBody && (
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
