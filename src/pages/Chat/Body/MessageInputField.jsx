import { useRef, useState } from "react";
// mui
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { colorShades } from "@/utils/theme";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";

function MessageInputField({ handleSentMessage, setTyping, typing, socket }) {
  const fileInputRef = useRef(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  // file upload
  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
  };

  // calling socket for typing indication
  const handleTyping = () => {
    if (!typing) {
      setTyping(true);
      socket.emit("typing", {
        roomId: 1234,
      });
    }
    // Clear the previous timeout if exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    var timerLength = 3000;
    let lastTypingTime = new Date().getTime();
    const newTimeoutId = setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", {
          roomId: 1234,
        });
        setTyping(false);
      }
    }, timerLength);
    setTimeoutId(newTimeoutId);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMessage(e.target.value);
    // calling socket for typing indication
    handleTyping();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      socket.emit("stop typing", { roomId: 1234 });
      if (inputMessage.trim() !== "") handleSentMessage(inputMessage.trim());
      setInputMessage("");
    }
  };

  /**
   * JSX
   */
  return (
    <div className="flex gap-x-[.8rem] items-center h-[4rem] px-[1.5rem]">
      <MoodIcon
        className="text-slate-400"
        style={{
          fontSize: "1.7rem",
        }}
      />
      <AttachFileIcon
        className="text-slate-400 rotate-45 hover:text-white cursor-pointer"
        onClick={handleSelectFile}
      />
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      {/* ========== Message Field ============= */}
      <input
        name="message"
        autoComplete="off"
        value={inputMessage}
        onKeyDown={handleKeyDown}
        className="outline-none px-4 py-2 rounded-lg w-[90%] text-white text-md"
        style={{
          backgroundColor: colorShades.grey.input,
        }}
        placeholder="Type a message"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default MessageInputField;
