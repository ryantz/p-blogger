import React from "react";
import "./loginPage.css";

const LoginPage = () => {
    return (
        <>
            <div className="login-page-wrapper">
                <div className="welcome-msg">
                    <h1>Welcome back!</h1>
                    <p>Please enter your credentials to login</p>
                </div>

                <div className="action-field-wrapper">
                    <div className="input-field-wrapper">
                        <label for="login">Username or Email</label>
                        <input
                            type="text"
                            className="login-input"
                            id="login-field"
                            placeholder="Enter your Email or Username here"
                        ></input>
                        <label for="pass">Password</label>
                        <input
                            type="text"
                            className="login-input"
                            id="pass-field"
                            placeholder="Enter your password here"
                        ></input>
                    </div>

                    <div className="input-page-btn-wrapper">
                        <button type="submit" className="login-btns" id="login-pg-libtn">
                            Login
                        </button>
                        <button type="submit" className="login-btns" id="login-pg-clbtn">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
