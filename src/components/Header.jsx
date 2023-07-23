import { HEADER_LOGO } from "../fixtures/constant";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className="header">
      <div className="logo">
        <img
          alt="app-logo"
          src={ HEADER_LOGO }
        ></img>
      </div>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <button
             className="btn"
             onClick={ () => {
              console.log(btnName);
              btnName == "Login" ? 
              setBtnName("Logout") :
              setBtnName ("Login")
            }}
            >
            {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
};
