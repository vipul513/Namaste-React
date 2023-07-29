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
    <div className="header h-20 flex justify-between bg-cadetblue">
      <div className="flex justify-evenly">
        <div className="w-20 h-20  ml-20">
          <img className="rounded-full" alt="app-logo" src={HEADER_LOGO}></img>
        </div>
        <div className=" flex items-center p-10">
          <h4 className="m-1 border-b-2 border-black text-sm font-bold"> Other </h4>
          <h4 className="m-1 text-yellow-light text-sm"> New Delhi, India </h4>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center mr-12">
          <li className="mr-10">
            <Link className="flex hover:text-yellow-light items-center" to="/">
              <BiSearch />
              <span className="ml-[3px]">Search</span>
            </Link>
          </li>
          <li className="mr-10">
            <Link className="flex hover:text-yellow-light items-center"  to="/contact">
              <BiSolidOffer />
              <span className="ml-[3px]">Offers</span>
            </Link>
          </li>
          <li className="mr-10">
            <Link className="flex hover:text-yellow-light items-center" to="/about">
              <IoMdHelpBuoy />
              <span className="ml-[3px]">Help</span>
            </Link>
          </li>
          <li className="mr-10">
            <Link className="flex hover:text-yellow-light items-center"  to="/cart">
              <FaUser />
              <span className="ml-[3px]">Sign In</span>
            </Link>
          </li>
          <li className="mr-10">
            <Link className="flex hover:text-yellow-light items-center"  to="/cart">
              <LuShoppingCart />
              <span className="ml-[3px]">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
