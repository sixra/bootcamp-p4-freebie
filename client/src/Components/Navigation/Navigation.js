import React from 'react'
import "./Navigation.scss"
import { NavLink } from 'react-router-dom'
import { RiUserShared2Fill } from 'react-icons/ri'
import { showLoginModal, showRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction"
import { useDispatch } from "react-redux";

const Navigation = () => {

  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(showLoginModal());
  };
  const openRegisterModal = () => {
    dispatch(showRegisterModal());
  };

  return (
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
    </div>
  )
}

export default Navigation
