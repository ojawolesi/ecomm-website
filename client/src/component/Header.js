import React, { useState } from "react";
import logo from "../assets/OA-logo [black].png";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((show) => !show);
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/*header*/}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={logo} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"aboutus"}>About Us</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 m-0 p-0 text-base text-sm text-center rounded-full">
              0
            </div>
          </div>
          <div className="text-2xl text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer">
              <HiOutlineUserCircle />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 drop-shadow-md flex flex-col">
                <Link
                  to={"newproduct"}
                  className="whitespace-nowrap cursor-pointer"
                >
                  New product
                </Link>
                <Link to={"login"} className="whitespace-nowrap cursor-pointer">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*mobile*/}
    </header>
  );
};

export default Header;
