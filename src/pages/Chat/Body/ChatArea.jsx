import { colorShades } from "@/utils/theme";
import React, { forwardRef } from "react";

const ChatArea = forwardRef(({ messageList = [] }, ref) => {
  return (
    <div className="CHAT__AREA flex m-auto w-full h-[calc(100%-8rem)] shadow-sm">
      <div
        className="flex flex-col gap-y-2 p-2 w-full overflow-y-auto"
        id="scrollBar"
        ref={ref}
      >
        {messageList.map((items, idx) => (
          <MessageBox key={idx} {...items} username="Amitej" />
        ))}
      </div>
    </div>
  );
});

function MessageBox({ time, message, sender, username }) {
  return (
    <>
      {/* Your Message */}
      {sender === username && (
        <div className="w-full flex justify-end">
          <div className="bg-green-900 text-white px-2 py-1 rounded-md max-w-[95%]">
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
            className="text-white px-2 py-1 rounded-md max-w-[95%]"
            style={{
              backgroundColor: colorShades.grey.input,
            }}
          >
            <p>
              <span className="text-[11px] block capitalize">{sender}</span>
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
