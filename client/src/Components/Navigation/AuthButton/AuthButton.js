import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsLayers } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiSendPlaneLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../Navigation.scss";

const AuthButton = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="authButton">
      {user?.result ? (
        <>
          <div className="userSectionDropdown">
            <Link
              className="userNameContainer"
              to="/user/profile"
              alt={user?.result?.firstName}
            >
              {/* <FaUserCircle size={25} /> */}
              <img src={user.result.avatar} alt="userPhoto" />
              <span className="userName">{user?.result?.firstName}</span>
            </Link>
            <ul className="userSectionLinks">
              <li>
                <NavLink
                  className={`listContainer ${({ isActive }) =>
                    isActive ? "activeSection" : ""}`}
                  style={(isActive) => ({
                    fontWeight: isActive ? "700" : "",
                  })}
                  to="/user/profile"
                >
                  <HiOutlineUserCircle size={20} />
                  <span> profile </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`listContainer ${({ isActive }) =>
                    isActive ? "activeSection" : ""}`}
                  to="/user/post"
                >
                  <RiSendPlaneLine size={18} />
                  <span> post an ad </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`listContainer ${({ isActive }) =>
                    isActive ? "activeSection" : ""}`}
                  to="/user/ads"
                >
                  <BsLayers size={18} />
                  <span> my ads </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`listContainer ${({ isActive }) =>
                    isActive ? "activeSection" : ""}`}
                  to="/user/favorite"
                >
                  <AiOutlineHeart size={18} />
                  <span> my favorites </span>
                </NavLink>
              </li>
              <li>
                <div className="listContainer">
                  <button className="userLogoutBtn" onClick={logout}>
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <Link to="/user/post" className="postAnAd">
            Post an Ad
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth" className="signIn">
            Sign in
          </Link>
          <Link to="/auth" className="postAnAd">
            Post an Ad
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
