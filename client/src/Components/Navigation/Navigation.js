import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import AuthButton from "./AuthButton/AuthButton";

const Navigation = () => {


  return (
    <div>
      <div className="navContainer">
        <span className="navLogo"> free</span>
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
    </div>
  );
};

export default Navigation;
