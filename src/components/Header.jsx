import { HEADER_LOGO } from "../fixtures/constant";

export const Header = () => (
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
          <a href="">Home</a>
        </li>
        <li className="nav-item">
          <a href="">Contact Us</a>
        </li>
        <li className="nav-item">
          <a href="">About Us</a>
        </li>
        <li className="nav-item">
          <a href="">Cart</a>
        </li>
      </ul>
    </div>
  </div>
);
