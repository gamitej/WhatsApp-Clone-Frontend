import { Navigate } from "react-router-dom";

const Login = ({ isLoggedIn }) => {
  // if user is logged in
  if (isLoggedIn) {
    // if (fromLocation) return <Navigate to={fromLocation} replace />;

    return <Navigate to="/" replace />;
  }

  /**
   * JSX
   */

  return <div>Login</div>;
};

export default Login;
