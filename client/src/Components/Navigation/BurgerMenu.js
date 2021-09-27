import React from "react";
import { RiUserShared2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
  const burger = useSelector((state) => state.BurgerMenuState);

  return (
    <div
      className="burgerMenuContainer"
      id={burger ? "showBurger" : "hideBurger"}
    >
      <div className="burgerSignInRegister">
        <button className="burgerSignInBtn">
          <div className="burgerSignInIcon">
            <RiUserShared2Fill />
          </div>
          <span>Sign in</span>
        </button>
        <button className="burgerRegisterBtn">register</button>
      </div>
      <ul className="burgerNavList">
        <li>home</li>
        <li>categories</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
