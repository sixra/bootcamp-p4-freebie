import React from 'react'
import { useDispatch } from "react-redux";
import { hideRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction"
import "./LoginModal.scss"

const RegisterModal = () => {

  const dispatch = useDispatch();

  const closeRegisterModal = () => {
    dispatch(hideRegisterModal());
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeModal">
          <button
            onClick={() => {
              closeRegisterModal()
            }}
          >
            X
          </button>
        </div>
        <div className="modalTitle">
          <h1>Register</h1>
        </div>
        <div className="modalBody">
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Repeat password..." />
        </div>
        <div className="modalFooter">
          <button
            onClick={() => {
              closeRegisterModal()
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

export default RegisterModal
