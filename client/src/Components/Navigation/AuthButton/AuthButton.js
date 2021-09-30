import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsLayers } from "react-icons/bs";
import "./AuthButton.scss"
//import { RiLogoutBoxLine } from "react-icons/ri"

const AuthButton = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  console.log(user)

  return (
    <>
      {user?.result ? (
        <div className="userSectionDropdown" >
          <Link className="userSectionDropdownBtn" to="/user" alt={user?.result.firstName}>{user?.result.firstName.slice(0, 1).toUpperCase()}</Link>
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
                {/* <RiLogoutBoxLine size={18} /> */}
                <button className="userLogoutBtn" onClick={logout}>Logout</button>
              </div>
            </li>
          </ul>
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
