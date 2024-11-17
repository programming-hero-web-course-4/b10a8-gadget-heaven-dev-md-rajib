import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import saleImage from "../../assets/sale.png";
import saleAnimate from "../../assets/saleAni.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../App";
import logoMain from "../../assets/logoMain.svg";
const Navbar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const arr = pathName.split("/");

  const { wishList, cart } = useContext(DataContext);
  //   console.log(location);

  const isHome = () => {
    if (
      arr[1] === "statistics" ||
      arr[1] === "dashboard" ||
      arr[1] === "product-details" ||
      arr[1] === "mega-sale"
    ) {
      return false;
    }
    return true;
  };

  console.log(isHome());

  return (
    <div
      className={` p-2  pb-0 w-[90%] mx-auto   ${
        isHome()
          ? "rounded-t-xl border-t border-l border-r text-white"
          : "text-[#0B0B0B] bg-white"
      }`}>
      <div
        className={`navbar  px-[100px]  ${
          isHome() ? "bg-[#9538E2] rounded-t-xl" : ""
        }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
              <NavLink
                to="/"
                className={({ isActive }) => isActive && "underline"}>
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => isActive && "text-[#9538E2]"}
                to="/statistics">
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) => isActive && "text-[#9538E2]"}
                to="/dashboard">
                Dashboard
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center">
            <div className=" h-[60px] w-[60px]">
              <img
                className=" w-full h-full object-cover"
                src={logoMain}
                alt=""
              />
            </div>
            <a className="btn btn-ghost text-xl font-bold hover:bg-transparent">
              Gadget Heaven
            </a>
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex  items-center">
          <ul
            className={`menu menu-horizontal items-center px-1 flex gap-6 font-medium ${
              isHome() ? "text-white" : "text-[#0B0B0BB3]"
            }`}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "underline"}>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "text-[#9538E2]"}
              to="/statistics">
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) => isActive && "text-[#9538E2]"}
              to="/dashboard">
              Dashboard
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? " relative h-[70px] w-[70px] mt-[-0px] rounded-xl bg-yellow-300"
                  : "relative h-[70px] w-[70px] mt-[-0px]"
              }
              to="/mega-sale">
              <div
                style={{
                  animation: "scale-animation 2s infinite",
                }}
                className="w-[70px] flex flex-col gap-1 absolute top-[-12px] left-[0px] -rotate-12 hover:bg-yellow-300 rounded-xl">
                <img className="w-full h-full " src={saleImage} alt="" />
                <p className="text-red-400">Tap on Me</p>
              </div>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-4">
            {/* cart */}
            <div className="bg-white text-black rounded-full border border-gray-200 w-10 h-10 flex items-center justify-center relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="text-red-600 border absolute top-[-12px] right-[-12px] bg-white rounded-lg w-6 flex justify-center">
                {cart.length}
              </div>
            </div>
            <div className="bg-white text-black rounded-full border border-gray-200 w-10 h-10 flex items-center justify-center relative">
              <FontAwesomeIcon icon={faHeart} />

              <div className="text-red-600 border absolute top-[-12px] right-[-12px] bg-white rounded-lg w-6 flex justify-center">
                {wishList.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
