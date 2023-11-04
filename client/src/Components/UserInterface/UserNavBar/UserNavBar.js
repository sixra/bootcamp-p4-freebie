import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./UserNavBar.scss";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";

const UserNavBar = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [avatar, setAvatar] = useState(false);

  return (
    <nav className="userNavbar">
      <div className="userInfo">
        <div className="userImage-gradientBorder">
          <div className="userImage">
            <img src={avatar ? avatar : user?.result.avatar} alt="profile" />
          </div>
        </div>
        <div className="userName">
          Welcome<span>{` ${user?.result.firstName}`}</span>
        </div>
      </div>

      <ul className="userSectionLinks">
        <li>
          <NavLink
            className={`${({ isActive }) => (isActive ? "activeSection" : "")}`}
            to="/user/profile"
          >
            <HiOutlineUserCircle size={20} />
            <span> profile </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${({ isActive }) => (isActive ? "activeSection" : "")}`}
            to="/user/post"
          >
            <RiSendPlaneLine size={18} />
            <span> post an ad </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${({ isActive }) => (isActive ? "activeSection" : "")}`}
            to="/user/ads"
          >
            <BsLayers size={18} />
            <span> my ads </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${({ isActive }) => (isActive ? "activeSection" : "")}`}
            to="/user/favorite"
          >
            <AiOutlineHeart size={18} />
            <span> my favorites </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavBar;
