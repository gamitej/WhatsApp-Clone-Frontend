import { Navigate } from "react-router-dom";
import { colorShades } from "@/utils/theme";
import {
  InputFieldPassword,
  InputTextField,
  LoadingButton,
} from "@/components";
import { useState } from "react";

const Login = ({ isLoggedIn }) => {
  const [inputForm, setInputForm] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputForm);
    setInputForm({});
  };

  // if user is logged in
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  /**
   * JSX
   */

  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
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
            onChange={handleInputChange}
            placeholder="Enter username"
            name="username"
            value={inputForm.username || ""}
          />
          <InputFieldPassword
            width="75%"
            name="password"
            placeholder="Enter password"
            value={inputForm.password || ""}
            onChange={handleInputChange}
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
    </div>
  );
};

export default Login;
