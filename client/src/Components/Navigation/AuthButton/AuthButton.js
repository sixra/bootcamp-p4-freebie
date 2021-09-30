import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";
import "./AuthButton.scss"

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
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);


  return (
    <>
      {user?.result ? (
        <div >
          <Link to="/user" alt={user?.result.name}>{user?.result.name}</Link>
          <div className="userLinksDropdown">
            <ul className="userSectionLinks">
              <li>
                <NavLink activeClassName="activeSection" to="/user/dashboard">
                  <AiOutlineDashboard size={18} />
                  <span> dashboard </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeSection" to="/user/post">
                  <RiSendPlaneLine size={18} />
                  <span> post an ad </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeSection" to="/user/ads">
                  <BsLayers size={18} />
                  <span> my ads </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeSection" to="/user/favorite">
                  <AiOutlineHeart size={18} />
                  <span> my favorites </span>
                </NavLink>
              </li>
            </ul>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <div className="signInContainer">
            <Link to="/auth" >Sign In</Link>
          </div>
        </>
      )}
    </>
  );
};

export default AuthButton;
