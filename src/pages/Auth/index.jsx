import { useState } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const Auth = ({ isLoggedIn }) => {
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
      <Login
        onChange={handleInputChange}
        handleSubmit={handleFormSubmit}
        inputForm={inputForm}
      />
    </div>
  );
};

export default Auth;
