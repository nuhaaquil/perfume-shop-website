import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom'

import Logo from '../Images/logo1.png'



function SignUp() {
  return (
    <div className="Signup">
      <div className="navbar" id="navBar1">
        <NavLink to={"/#navBar1"}><a href="#">Home</a></NavLink>
        <NavLink to={"/Men#navBar1"}><a href="#">For Men</a></NavLink>
        <NavLink to={"/Women#navBar1"}><a href="#">For Women</a></NavLink>
        <NavLink to={"/Collections#navBar1"}><a href="#">Collections</a></NavLink>
        <NavLink to={"/Login"}><a href="#">Login</a></NavLink>
      </div>
      <div className="LS-mainWrapper">
        <div className="LS-mainDiv">
          <div className="LS-leftDiv">
            <img
              className="LS-logo"
              src={Logo}
              alt="Perfume Shop Logo"
            />
            <p className="logoP">AromaLane</p>
            <p className="LS-p">
              Where Every Scent
              <br /> Tells a Story
            </p>
          </div>
          <div className="LS-midDiv" />
          <div className="LS-rightDiv">
            <form className="LS-loginForm">
              <h1>Sign Up</h1>
              <br />
              <p className="LS-text">Full Name</p>
              <input className="LS-inputField" type="email" id="emailField" name="email" required=""/>
              <br />
              <br />
              <p className="LS-text">Email Address</p>
              <input className="LS-inputField" type="email" id="emailField" name="email" required=""/>
              <br />
              <br />
              <p className="LS-text">
                Password
                <input className="LS-inputField" type="password" id="password" name="password" required=""/>
                <br />
                <br />
              </p>
              <p>Already Have an Account?</p>
              <NavLink to="/Login#navBar1"><a href="#" className="LS-resisterText">Login</a></NavLink>
              <br/><br/>
                <button className="LS-loginbtn" type="submit">
                  Sign Up
                </button>
            </form>
          </div>
          <a href="./login.html" className="LS-resisterText"></a>
        </div>
        <a href="./login.html" className="LS-resisterText"></a>
      </div>
      <a href="./login.html" className="LS-resisterText"></a>
    </div>
  )
}

export default SignUp;