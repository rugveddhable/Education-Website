import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/mylogo.png";
import profilePic from "../assets/lina.png";

const Navbar = () => {
  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-blue-950/90 backdrop-blur-md text-white 
                 px-6 py-3 rounded-3xl shadow-lg w-[100%] md:w-[95%] flex items-center justify-between"
    >
      {/* Left Section - Logo + Search */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="CTA Logo" className="w-12 h-12 object-contain" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search Courses"
            className="bg-white/20 pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none 
                       placeholder-gray-300 text-white w-48 sm:w-60 md:w-72"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-300" />
        </div>
      </div>

      {/* Middle - Smooth Scroll Nav Links */}
      <ul className="hidden md:flex items-center gap-16 font-medium">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="aboutcta"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            About CTA
          </Link>
        </li>
        <li>
          <Link
            to="learnwithcta"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            LWC
          </Link>
        </li>
        <li>
          <Link
            to="toolsforstudents"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            TOS
          </Link>
        </li>
        <li>
          <Link
            to="oneononesection"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            OOO
          </Link>
        </li>
        <li>
          <Link
            to="explorecoursessection"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            Explore Courses
          </Link>
          </li>
          <li>
          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-100}
            className="hover:text-yellow-300 cursor-pointer transition"
          >
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right - Profile */}
      <div className="flex items-center gap-2">
        <img
          src={profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
        />
        <span className="font-semibold hidden sm:block">User ▾</span>
      </div>
    </nav>
  );
};

export default Navbar;
