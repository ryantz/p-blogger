import React, { useState } from "react";
import LoginPage from "../log-in-page/LoginPage";
import SignupPage from "../sign-up-page/SignupPage";
import "./login.css";
const Login = () => {
    const [loginClickStatus, setLoginClickStatus] = useState(false);
    const [signClickStatus, setSignClickStatus] = useState(false);

    const logClickHandler = () => {
        setLoginClickStatus((loginClickStatus) => !loginClickStatus);
    };

    const signClickHandler = () => {
        setSignClickStatus((signClickStatus) => !signClickStatus);
    };

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

                {signClickStatus ? <SignupPage /> : false}
                {loginClickStatus ? <LoginPage /> : false}
            </div>
        </>
    );
};

export default Login;
