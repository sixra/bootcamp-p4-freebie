import React from "react";
import { RiUserShared2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { hideBurgerMenu } from "../../Redux/Actions/BurgerMenuAction";

const BurgerMenu = () => {
  const dispatch = useDispatch();

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
