import React, { useState } from "react";
import Menu from "@mui/material/Menu";

export default function MenuModal({
  children,
  component,
  horizontal = "right",
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div onClick={handleClick}>{children}</div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: { backgroundColor: "#202C33" }, // Set the menu's background color to black
        }}
        transformOrigin={{ horizontal: horizontal, vertical: "top" }}
        anchorOrigin={{ horizontal: horizontal, vertical: "bottom" }}
      >
        {component}
      </Menu>
    </React.Fragment>
  );
}
