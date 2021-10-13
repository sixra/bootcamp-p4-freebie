import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import decode from "jwt-decode";

const AuthButton = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  console.log(user)

  return (
    <div className="authButton">
      {user?.result ? (
        <>
          <div className="userSectionDropdown" >
            <Link className="userNameContainer" to="/user/dashboard" alt={user?.result.firstName}>
              <FaUserCircle size={25}/>
              <span className="userName">{user?.result.firstName}</span>
            </Link>
            <ul className="userSectionLinks">
              <li>
                <NavLink className="listContainer" activeClassName="activeSection" to="/user/dashboard">
                  <AiOutlineDashboard size={18} />
                  <span> dashboard </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="listContainer" activeClassName="activeSection" to="/user/post">
                  <RiSendPlaneLine size={18} />
                  <span> post an ad </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="listContainer" activeClassName="activeSection" to="/user/ads">
                  <BsLayers size={18} />
                  <span> my ads </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="listContainer" activeClassName="activeSection" to="/user/favorite">
                  <AiOutlineHeart size={18} />
                  <span> my favorites </span>
                </NavLink>
              </li>
              <li>
                <div className="listContainer">
                  <button className="userLogoutBtn" onClick={logout}>Logout</button>
                </div>
              </li>
            </ul>
          </div>
          <Link to="/user/post" className="postAnAd">Post an Ad</Link>
        </>
      ) : (
        <>
          <Link to="/auth" className="signIn">Sign in</Link>
          <Link to="/auth" className="postAnAd">Post an Ad</Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
