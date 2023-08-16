import React from "react";

const Footer = ({ handleAuthSwitch, switchAuth = true }) => {
  return (
    <div className="mb-[3rem]">
      <span className="text-white">
        {switchAuth ? "Not Registered ? " : "Registered ? "}
      </span>
      <span
        className="text-red-400 font-semibold cursor-pointer hover:text-blue-400 capitalize"
        onClick={handleAuthSwitch}
      >
        {switchAuth ? "sign up" : "login"}
      </span>{" "}
    </div>
  );
};

export default Footer;
