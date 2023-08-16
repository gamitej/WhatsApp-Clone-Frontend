import React from "react";
// comp
import {
  InputFieldPassword,
  InputTextField,
  LoadingButton,
} from "@/components";
// utils
import { colorShades } from "@/utils/theme";
import Footer from "./Footer";
import { TextField } from "@mui/material";

const SignUp = ({ onChange, inputForm, handleAuthSwitch, switchAuth }) => {
  return (
    <>
      {/* login body */}
      <div className="flex flex-col items-center w-full  gap-y-[1rem] justify-evenly">
        <InputTextField
          width="75%"
          onChange={onChange}
          placeholder="Enter username"
          name="username"
          value={inputForm.username || ""}
        />
        <InputFieldPassword
          width="75%"
          name="password"
          placeholder="Enter password"
          value={inputForm.password || ""}
          onChange={onChange}
        />
        <InputFieldPassword
          width="75%"
          name="confirmPassword"
          placeholder="Enter password again"
          value={inputForm.confirmPassword || ""}
          onChange={onChange}
          label="Confirm Password"
        />
      </div>
      {/* footer */}
      <div className="mb-[1rem] w-full text-center">
        <LoadingButton
          label="SignUp"
          sx={{
            backgroundColor: colorShades.green["700"],
            width: "75%",
          }}
        />
      </div>
      <Footer handleAuthSwitch={handleAuthSwitch} switchAuth={switchAuth} />
    </>
  );
};

export default SignUp;
