import React from "react";
import navImage from "../../assets/C002-assets/logo.png";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar  max-w-screen-2xl mx-auto p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-lg font-medium text-[#0F0F0F90]">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="text-lg font-medium text-[#0F0F0F90]">
              <NavLink to="/my-booking">My-Bookings</NavLink>
            </li>
            <li className="text-lg font-medium text-[#0F0F0F90]">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="text-lg font-medium text-[#0F0F0F90]">
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img src={navImage} alt="" />
          <span className="mulish font-extrabold text-3xl text-[#0F0F0F]">
            Law.BD
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mulish">
          <li className="text-lg font-medium text-[#0F0F0F90]">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="text-lg font-medium text-[#0F0F0F90]">
            <NavLink to="/my-booking">My-Bookings</NavLink>
          </li>
          <li className="text-lg font-medium text-[#0F0F0F90]">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="text-lg font-medium text-[#0F0F0F90]">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-[#0EA106] text-white font-medium text-xl mulish px-8 py-4 rounded-full ">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default NavBar;
