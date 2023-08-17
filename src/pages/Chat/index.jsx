import { colorShades } from "@/utils/theme";
import ChatBody from "./ChatBody";
import ChatLeftSide from "./ChatLeftSide";
import ChatBodyEmpty from "./ChatBodyEmpty";

const Chat = ({ isChatBody = false }) => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="h-[calc(100%-2.5rem)] w-[calc(100%-15rem)] flex shadow-lg">
        {/* chat left side */}
        <ChatLeftSide className="w-[30%] h-full hidden sm:block" />
        {/* chat body */}
        {isChatBody && (
          <ChatBody
            className="w-[70%] h-full"
            style={{
              backgroundColor: colorShades.grey.main,
              borderLeft: `0.5px solid ${colorShades.grey["800"]}`,
            }}
          />
        )}
        {/* chat body when no chat selected */}
        {!isChatBody && (
          <ChatBodyEmpty
            className="w-[70%] h-full flex flex-col justify-center items-center gap-y-[3rem]"
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
