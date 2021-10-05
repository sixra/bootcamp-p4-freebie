import React from "react";
import "./Navigation.scss";
import { NavLink, Link } from "react-router-dom";
import AuthButton from "./AuthButton/AuthButton";
import logo from "./freebie-logo.png"

const Navigation = () => {


  return (
      <div className="navContainer">
        <Link to="/" className="navLogo"><img  src={logo} alt="" /></Link>
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
        <AuthButton />
      </div>
  );
};

export default Navigation;
