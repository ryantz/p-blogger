import React, { useState } from "react";
import LoginPage from "../log-in-page/LoginPage";
import SignupPage from "../sign-up-page/SignupPage";
import "./login.css";

const Login = () => {
  const [loginClickStatus, setLoginClickStatus] = useState(false);
  const [signClickStatus, setSignClickStatus] = useState(false);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);

  const logClickHandler = () => {
    setIsLogOpen((isLogOpen) => !isLogOpen);
    setLoginClickStatus((loginClickStatus) => !loginClickStatus);
  };

  const signClickHandler = () => {
    setIsSignOpen((isSignOpen) => !isSignOpen);
    setSignClickStatus((signClickStatus) => !signClickStatus);
  };

  console.log(
    "isLogOpen: " + isLogOpen + ", loginClickStatus: " + loginClickStatus,
  );
  console.log(
    "isSignOpen: " + isSignOpen + ", signClickStatus: " + signClickStatus,
  );

  return (
    <>
      <div className="btn-wrapper">
        <button
          type="submit"
          className="btns"
          id="signup"
          onClick={signClickHandler}
        >
          Sign-up
        </button>
        <button
          type="submit"
          className="btns"
          id="login"
          onClick={logClickHandler}
        >
          Log-in
        </button>
      </div>

      {loginClickStatus ? <LoginPage /> : null}
      {signClickStatus ? <SignupPage /> : null}
    </>
  );
};

export default Login;
