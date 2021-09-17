import React from 'react'
import "./Navigation.scss"
import { NavLink } from 'react-router-dom'
import { RiUserShared2Fill } from 'react-icons/ri'
import { showLoginModal, showRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction"
import { useDispatch, useSelector } from "react-redux";
import { showBurgerMenu, hideBurgerMenu } from '../../Redux/Actions/BurgerMenuAction';
import BurgerMenu from './BurgerMenu'

const Navigation = () => {

  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(showLoginModal());
  };

  const openRegisterModal = () => {
    dispatch(showRegisterModal());
  };

  const burger = useSelector((state) => state.BurgerMenuState)

  const showBurger = () => {
    dispatch(showBurgerMenu());
  };

  const hideBurger = () => {
    dispatch(hideBurgerMenu());
  };


  return (
    <div>
      <div className="navContainer">
        <span className="navLogo">free</span>
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
        <div className="navSignInRegister">
          <button className="signIn">
            <div className="signInIcon">
              <RiUserShared2Fill />
            </div>
            <span onClick={openLoginModal}>Sign in</span>
          </button>
          <button onClick={openRegisterModal} className="register" >register</button>
        </div>
        <div className="openBurgerMenuIcon"
          id={burger ? "closeBurger" : "openBurger"}
          onClick={burger ? hideBurger : showBurger}
        >
          <div className="test">
            <div className="burgerTopLine topLineRotate"></div>
            <div className="burgerMiddleLine middleLineNone"></div>
            <div className="burgerBottomLine bottomLineRotate"></div>
          </div>
        </div>
      </div>
      <BurgerMenu />
    </div>
  )
}

export default Navigation
