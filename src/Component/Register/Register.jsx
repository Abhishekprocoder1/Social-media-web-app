import React from 'react'
import './Register.css'
const Register = () => {
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
          <input placeholder="Username" className="loginInput"></input>
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Password" className="loginInput"></input>
            <input placeholder="Password Agin" className="loginInput"></input>
            <button className="loginbutton">Sign Up</button>
          
            <button className="LoginRegistractionButton">
            Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
