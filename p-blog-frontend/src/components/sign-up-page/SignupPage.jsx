import "./signupPage.css";

const SignupPage = () => {
    return (
        <>
            <div className="signup-page-wrapper">
                <div className="welcome-msg">
                    <h1>Hello Stranger!</h1>
                    <p>Please fill up the form to sign up!</p>
                </div>

                <div className="signup-action-field-wrapper">
                    <div className="signup-input-field-wrapper">
                        <label for="user-email">Please enter your Email</label>
                        <input
                            type="text"
                            className="signup-input"
                            id="signup-email-field"
                            placeholder="Enter your Email here"
                        ></input>

                        <label for="user-name">Please enter your desired username</label>
                        <input
                            type="text"
                            className="signup-input"
                            id="signup-username-field"
                            placeholder="Choose a username"
                        ></input>

                        <label for="pass">Please enter your desired Password</label>
                        <input
                            type="text"
                            className="signup-input"
                            id="signup-pass-field"
                            placeholder="Choose your password"
                        ></input>

                        <label for="user-confirm-pass">Confirm your Password</label>
                        <input
                            type="text"
                            className="signup-input"
                            id="signup-repass-field"
                            placeholder="Re-enter your password"
                        ></input>
                    </div>

                    <div className="signup-input-page-btn-wrapper">
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

export default SignupPage;
