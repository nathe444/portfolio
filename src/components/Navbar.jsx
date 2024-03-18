import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { IoMdHome } from "react-icons/io";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const { dispatch } = useContext(Context);

  const setMenu = () => {
    setNav(!nav);
  };

 

  return (
    <div className="bg-black flex items-center justify-between w-full h-20 text-white fixed px-4 md:px-16 py-10 z-40">
      <div>
        <h1 className="font-carattere font-bold text-4xl ml-5">
          Nathe<span className="text-orange-500 ml-2">Works</span>{" "}
        </h1>
      </div>

      <ul className="hidden md:flex">
        <NavLink to="/" >

        <li className="mx-7 cursor-pointer hover:scale-110 duration-300 text-1xl " >
          Home
        </li>

        </NavLink>

        <NavLink to="/portfolio">
          <li className="mx-7 cursor-pointer hover:scale-110 duration-300 text-1xl">
            Portfolio
          </li>
        </NavLink>

        <NavLink to="/experience">
          <li className="mx-7 cursor-pointer hover:scale-110 duration-300 text-1xl">
            Experience
          </li>
        </NavLink>

        <NavLink to={"/about"}>
          <li className="mx-7 cursor-pointer hover:scale-110 duration-300 text-1xl">
            About
          </li>
        </NavLink>

        <NavLink to={"/contact"}>
          <li className="mx-7 cursor-pointer hover:scale-110 duration-300 text-1xl">
            Contact
          </li>
        </NavLink>
      </ul>

      <div className="cursor-pointer text-2xl pr-4 z-10 md:hidden">
        {nav ? (
          <FaTimes
            onClick={() => {
              dispatch({ type: "HAMBURGER_TRUE" }), setMenu();
            }}
            className="text-white z-10"
          />
        ) : (
          <FaBars
            onClick={() => {
              dispatch({ type: "HAMBURGER_FALSE" }), setMenu();
            }}
            className="text-white z-10"
          />
        )}
      </div>

      <ul
        className={`${
          nav
            ? `opacity-100 transform translate-y-0 `
            : ` opacity-0 transform translate-x-full`
        } transition-transform-all absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col items-center justify-center duration-700 `}
      >
        <NavLink to="/">
          <li className="py-6 cursor-pointer text-2xl flex items-center gap-2" onClick={() => {setMenu(), dispatch({ type: "HAMBURGER_TRUE" })}}>
            <IoMdHome size={25} />
            Home
          </li>
        </NavLink>

        <NavLink to="/portfolio">
          <li className="py-6 cursor-pointer text-2xl flex items-center gap-2" onClick={setMenu}>
            <GoProjectRoadmap size={23} />
            Portfolio
          </li>
        </NavLink>

        <NavLink to="/experience">
          <li className="py-6 cursor-pointer text-2xl flex items-center gap-2 " onClick={setMenu}>
            <BsPersonWorkspace size={22} />
            Experience
          </li>
        </NavLink>

        <NavLink to="/contact">
          <li className="py-6 cursor-pointer text-2xl flex items-center gap-2" onClick={setMenu}>
            <FaPhoneVolume size={22} />
            Contact
          </li>
        </NavLink>

        <NavLink to="/about">
          <li className="py-6 cursor-pointer text-2xl flex items-center gap-2" onClick={setMenu}>
            <FaRegUser size={22} />
            About
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
