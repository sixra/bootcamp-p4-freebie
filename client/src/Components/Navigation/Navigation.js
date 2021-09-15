import React from 'react'
import "./Navigation.scss"
import { NavLink } from 'react-router-dom'
import { RiUserShared2Fill } from 'react-icons/ri'

const Navigation = () => {
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
          <span>Sign in</span>
        </button>
        <button className="register">register</button>
      </div>
    </div>
  )
}

export default Navigation
