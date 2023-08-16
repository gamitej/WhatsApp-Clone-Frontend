import React from "react";
import {
  InputFieldPassword,
  InputTextField,
  LoadingButton,
} from "@/components";
import { colorShades } from "@/utils/theme";

const Login = ({ handleSubmit, onChange, inputForm }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[30rem] rounded-lg flex flex-col items-center shadow-lg"
        style={{ backgroundColor: colorShades.grey.box }}
      >
        {/* head */}
        <div className="mt-[1rem]">
          <h3 className="text-white text-2xl font-semibold flex justify-center items-center mt-3 gap-x-3">
            <img src="/assets/img-w.png" width={50} />
            WhatsApp
          </h3>
        </div>
        {/* login body */}
        <div className="flex flex-col items-center w-full h-[15rem] justify-evenly">
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
        {/* foot */}
        <div className="mb-[3rem]">
          <LoadingButton
            label="Login"
            sx={{
              backgroundColor: colorShades.green["700"],
              padding: ".5rem 4rem .5rem 4rem",
            }}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
