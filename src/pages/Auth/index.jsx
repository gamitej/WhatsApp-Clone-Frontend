import { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
// comp
import Login from "./Login";
// utils
import { colorShades } from "@/utils/theme";
import SignUp from "./SignUp";
import { useAuth } from "@/store/auth/useAuth";
import { toast } from "react-hot-toast";

const Auth = ({ isLoggedIn }) => {
  const { handleLogin, handleSignUp, isLoading } = useAuth();
  const [inputForm, setInputForm] = useState({});
  const [switchAuth, setSwitchAuth] = useState(true);

  // form event handlers

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (switchAuth) {
      handleLogin(inputForm);
    } else {
      if (inputForm?.password === inputForm.confirmPassword) {
        handleSignUp(inputForm);
      } else {
        toast.error("Password mismatch", { duration: 1500 });
      }
    }
  };

  const handleAuthSwitch = () => {
    setSwitchAuth((prev) => !prev);
  };

  useMemo(() => setInputForm({}), [isLoggedIn]);

  // if user is logged in
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  /**
   * JSX
   */

  return (
    <div className="flex w-[95%] m-auto h-[100vh] justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="w-[30rem] rounded-lg flex flex-col items-center gap-y-[1.5rem] shadow-lg "
        style={{ backgroundColor: colorShades.grey.box }}
      >
        {/* head */}
        <div className="mt-[2rem] mb-[1rem]">
          <h3 className="text-white text-2xl font-semibold flex justify-center items-center mt-3 gap-x-3">
            <img src="/assets/img-w.png" width={35} loading="lazy" />
            WhatsApp
          </h3>
        </div>

        {switchAuth ? (
          <Login
            inputForm={inputForm}
            switchAuth={switchAuth}
            onChange={handleInputChange}
            handleAuthSwitch={handleAuthSwitch}
            isLoading={isLoading}
          />
        ) : (
          <SignUp
            inputForm={inputForm}
            switchAuth={switchAuth}
            onChange={handleInputChange}
            handleAuthSwitch={handleAuthSwitch}
            isLoading={isLoading}
          />
        )}
      </form>
    </div>
  );
};

export default Auth;
