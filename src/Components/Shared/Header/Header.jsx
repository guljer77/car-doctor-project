import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";
import { BsHandbag, BsArrowRight } from "react-icons/bs";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [open, setOpen] = useState(false);
  const logOutHandle = () => {
    logOut()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <nav className="bg-white font-inter overflow-hidden shadow-lg max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="flex items-center justify-between font-medium">
        <div className="z-50 p-5 lg:w-auto w-full flex justify-between items-center">
          <Link to="/">
            <img className="w-[80px] h-auto" src={Logo} alt="" />
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl lg:hidden cursor-pointer"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-booking"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              My Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="lg:block hidden">
          <ul className="flex items-center">
            <li className="pr-5">
              <Link className="text-[32px]">
                <BsHandbag />
              </Link>
            </li>
            <li className="pr-5">
              <Link
                to="/login"
                className="border-2 inline-block border-b-[#ed563b] px-3 py-2 rounded-md text-[#ed563b] text-[16px]"
              >
                Appointment
              </Link>
            </li>
            {user ? <><li><img className="w-[40px] h-[40px] mr-3" src={user?.photoURL} alt="" /></li><li onClick={logOutHandle} className="cursor-pointer">Logout <BsArrowRight className="inline-block" /></li></> : <li><Link className="px-3 py-2 text-white bg-[#ed563b] inline-block rounded-md" to="/login">Login</Link></li>}
          </ul>
        </div>
        {/* mobile-nav */}
        <ul
          className={`lg:hidden bg-white w-full text-center h-full z-30 absolute bottom-0 py-24 pl-4 transition-all duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/instructors"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/classes"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "notActive")}
            >
              Contact
            </NavLink>
          </li>
          <div className="lg:hidden block">
            <ul>
              <li>
                <Link
                  to="/login"
                  className="border-2 inline-block border-b-[#ed563b] px-3 py-2 rounded-md text-[#ed563b] text-[16px]"
                >
                  Appointment
                </Link>
              </li>
              {user ? <li onClick={logOutHandle} className="cursor-pointer">Logout</li> : ""}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
