import React from "react";
import "./Navigation.scss";
import { NavLink, Link } from "react-router-dom";
import AuthButton from "./AuthButton/AuthButton";
import logo from "./freebie-logo.png"

const Navigation = () => {


  return (
    <nav>

      <div className="navLogoAuthButton">
        <Link to="/" className="navLogo"><img src={logo} alt="" /></Link>
        <AuthButton />
      </div>

      <ul className="navList">
        <li className="navListItem">
          <NavLink activeClassName="activePage" to="/home">
            home
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink activeClassName="activePage" to="/categories">
            categories
          </NavLink>
        </li>
        <li className="navListItem">
          <NavLink activeClassName="activePage" to="/contact">
            contact
          </NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navigation;
