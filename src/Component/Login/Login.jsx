import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="Login">
      <div className="loginwrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Biharpower</h3>
          <span className="loginDsc">
            Connection with friends and the world around you on Lamascial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginbox">
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Password" className="loginInput"></input>
            <button className="loginbutton">Log In</button>
            <span className="Loginforget">Forget Password</span>
            <button className="LoginRegistractionButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
