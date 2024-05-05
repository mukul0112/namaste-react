import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnText, setLoginBtnText] = useState("Login")
  const handleClick = () => {
    loginBtnText=="Login" ? setLoginBtnText("Logout") : setLoginBtnText("Login");
  }
  return(
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
      />
      <div className="navItems">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
        <li>Cart</li>
        <button className="login-btn" onClick={()=>{handleClick()}}>{loginBtnText}</button>
      </ul>
      </div>
    </div>
  )
}
  ;
  export default Header; 