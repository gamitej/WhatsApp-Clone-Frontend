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

const Login = ({
  onChange,
  inputForm,
  handleAuthSwitch,
  switchAuth,
  isLoading,
}) => {
  return (
    <>
      {/* login body */}
      <div className="flex flex-col items-center w-full justify-evenly gap-y-[1.5rem]">
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
      </div>
      {/* footer */}
      <div className="mb-[1rem] w-full text-center">
        <LoadingButton
          isLoading={isLoading}
          label="Login"
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

export default Login;
