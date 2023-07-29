import { HEADER_LOGO } from "../fixtures/constant";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/Bi";
import { BiSolidOffer } from "react-icons/Bi";
import { IoMdHelpBuoy } from "react-icons/Io";
import { FaUser } from "react-icons/Fa";
import { LuShoppingCart } from "react-icons/Lu";
import { IoMdArrowDropdown } from "react-icons/Io";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo">
          <img alt="app-logo" src={HEADER_LOGO}></img>
        </div>
        <div className="change-location">
          <h4 className="other"> Other </h4>
          <h4 className="city"> New Delhi, India </h4>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="navbar">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/">
              <BiSearch />
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <BiSolidOffer />
              Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <IoMdHelpBuoy />
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">
              <FaUser />
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart">
              <LuShoppingCart />
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
