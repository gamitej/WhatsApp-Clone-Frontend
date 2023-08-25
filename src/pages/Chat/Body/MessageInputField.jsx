import { useRef, useState } from "react";
// mui
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { colorShades } from "@/utils/theme";

function MessageInputField({ handleSentMessage }) {
  const [inputMessage, setInputMessage] = useState("");

  // file upload
  const fileInputRef = useRef(null);
  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (inputMessage.trim() !== "") handleSentMessage(inputMessage.trim());
      setInputMessage("");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
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
