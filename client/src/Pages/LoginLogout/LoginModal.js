import React from 'react'
import { useDispatch } from "react-redux";
import { hideLoginModal } from "../../Redux/Actions/ModalLoginRegisterAction"
import "./LoginModal.scss"

const LoginModal = () => {

  const dispatch = useDispatch();

  const closeLoginModal = () => {
    dispatch(hideLoginModal());
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeModal">
          <button
            onClick={() => {
              closeLoginModal()
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle">
          <h1>Login</h1>
        </div>
        <div className="modalBody">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="modalFooter">
          <button
            onClick={() => {
              closeLoginModal()
            }}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default LoginModal

