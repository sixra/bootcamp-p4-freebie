import React, { useState } from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import AuthButton from "./AuthButton/AuthButton";

const Navigation = () => {
  const [burger, setBurger] = useState(false)
  const buttonHandler = () => {
    setBurger(current => !current)
  }

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
        <div className="burgerSignInContainer">
          <AuthButton />
          <div
            className="openBurgerMenuIcon"
            id={burger ? "closeBurger" : "openBurger"}
            onClick={buttonHandler}
          >
            <div className="test">
              <div className="burgerTopLine topLineRotate"></div>
              <div className="burgerMiddleLine middleLineNone"></div>
              <div className="burgerBottomLine bottomLineRotate"></div>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu burger={burger} />
    </div>
  );
};

export default Navigation;
