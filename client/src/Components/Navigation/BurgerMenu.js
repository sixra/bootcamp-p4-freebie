import React from 'react'
import { RiUserShared2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { hideBurgerMenu } from '../../Redux/Actions/BurgerMenuAction';
import { showLoginModal, showRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction"

const BurgerMenu = () => {

  const dispatch = useDispatch();

  const burger = useSelector((state) => state.BurgerMenuState)

  const openLoginModal = () => {
    dispatch(showLoginModal());
  };

  const openRegisterModal = () => {
    dispatch(showRegisterModal());
  };

  return (
    <div className="burgerMenuContainer" id={burger ? "showBurger" : "hideBurger"}>
      <div className="burgerSignInRegister">
        <button className="burgerSignInBtn">
          <div className="burgerSignInIcon">
            <RiUserShared2Fill />
          </div>
          <span onClick={openLoginModal} >Sign in</span>
        </button>
        <button onClick={openRegisterModal} className="burgerRegisterBtn" >register</button>
      </div>
      <ul className="burgerNavList">
        <li>home</li>
        <li>categories</li>
        <li>contact</li>
      </ul>
    </div>
  )
}

export default BurgerMenu
