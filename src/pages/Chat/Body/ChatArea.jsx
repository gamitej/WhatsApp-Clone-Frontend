import React, { forwardRef, useEffect, useRef, useState } from "react";
import { colorShades } from "@/utils/theme";
import { useGlobal } from "@/store/global/useGlobal";

const ChatArea = ({ messageList = [] }) => {
  const { bgImgUrl } = useGlobal();
  const chatContainerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // on-scroll of chat container
  const handleScroll = () => {
    if (chatContainerRef.current) {
      const scrollTop = chatContainerRef.current.scrollTop;
      setScrollY(scrollTop);
    }
  };

  // scroll to height of chat container
  const handleScrollHeight = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    handleScrollHeight();
  }, [messageList]);

  /**
   * JX
   */
  return (
    <div
      className="CHAT__AREA flex relative m-auto w-full h-[calc(100%-8rem)] shadow-sm"
      style={{
        backgroundImage: bgImgUrl ? `url(${bgImgUrl})` : "none",
      }}
    >
      <div
        className="flex flex-col gap-y-2 p-2 w-full overflow-y-auto"
        id="scrollBar"
        ref={chatContainerRef}
        onScroll={handleScroll}
      >
        {messageList.map((items, idx) => (
          <MessageBox key={idx} {...items} username="Amitej" />
        ))}
      </div>
    </div>
  );
};

// ===================== SUB-COMP =======================

function MessageBox({ time, message, sender, username }) {
  return (
    <>
      {/* Your Message */}
      {sender === username && (
        <div className="w-full flex justify-end">
          <div className="bg-green-900 text-sm text-white px-2 py-1 rounded-md max-w-[95%]">
            <p>
              <span className="text-[11px] block capitalize">{sender}</span>
              {message}
              <span className="text-[11px] block">{time}</span>
            </p>
          </div>
        </div>
      )}
      {/* Other Message */}
      {sender !== username && (
        <div className="w-full flex justify-start">
          <div
            className="text-white text-sm px-2 py-1 rounded-md max-w-[95%]"
            style={{
              backgroundColor: colorShades.grey.input,
            }}
          >
            <p>
              <span className="text-[10px] block capitalize">{sender}</span>
              {message}
              <span className="text-[10px] block">{time}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatArea;
