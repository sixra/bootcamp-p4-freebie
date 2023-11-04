import React from "react";
import "./Navigation.scss";
import { NavLink, Link } from "react-router-dom";
import AuthButton from "./AuthButton/AuthButton";
import logo from "./freebie-logo.png";

const Navigation = () => {
  return (
    <nav>
      <div className="navLogoAuthButton">
        <Link to="/" className="navLogo">
          <img src={logo} alt="" />
        </Link>
        <AuthButton />
      </div>

      <ul className="navList">
        <li className="navListItem">
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
            })}
            to="/home"
          >
            home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
            })}
            to="/freebies"
          >
            Freebies
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink
            style={({ isActive }) => ({
              fontWeight: isActive ? "700" : "",
            })}
            to="/contact"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
