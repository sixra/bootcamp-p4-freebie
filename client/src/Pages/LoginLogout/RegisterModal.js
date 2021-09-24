import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { showLoginModal } from "../../Redux/Actions/ModalLoginRegisterAction";
import { register } from "../../Redux/Actions/Auth";
import { clearErrors } from "../../Redux/Actions/Error";
import { hideRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";

import "./LoginModal.scss";

// const auth = useSelector((state) => state.auth);
//   const ERR = useSelector((state) => state.error);
//   const { isAuthenticated } = auth;
//   const { error } = ERR;

const RegisterModal = ({
  isAuthenticated,
  error,
  register,
  clearErrors,
  auth,
}) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [msg, setMsg] = useState(null);
  const [msg, setMsg] = useState(null);
  console.log(modal);
  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const dispatch = useDispatch();

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const user = {
      name,
      email,
      password,
    };

    // Attempt to register
    register(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "REGISTER_FAIL") {
      setMsg(error.msg.msg || error.msg.error);
    } else if (error.id === null) {
      setMsg(auth.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, auth, modal]);

  const closeRegisterModal = () => {
    dispatch(hideRegisterModal());
  };

  const openLoginModal = () => {
    dispatch(showLoginModal());
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeModal">
          <button
            onClick={() => {
              closeRegisterModal();
              handleToggle();
            }}
          >
            <IoCloseCircleOutline size={24} />
          </button>
        </div>

        <div
          className={
            isAuthenticated ? "modalRegisterSuccess" : "modalRegisterError"
          }
        >
          <div className={isAuthenticated ? "modalRegisterSuccessIcon" : null}>
            {" "}
            {isAuthenticated ? <GoMailRead size={56} /> : null}{" "}
          </div>
          <div className={error.id === null ? null : "modalRegisterErrorIcon"}>
            {" "}
            {error.id === null ? null : <FaRegTimesCircle size={56} />}
          </div>
          <h1>{isAuthenticated ? "Thank You!" : null}</h1>
          <br />
          <h3> {isAuthenticated ? msg : msg}</h3>
          <br />
          {msg === "User already exists!" ? (
            <span className="errorHandleLoggin">
              You can click{" "}
              <button
                onClick={() => {
                  closeRegisterModal();
                  openLoginModal();
                }}
              >
                Sign in
              </button>{" "}
              to enter!
            </span>
          ) : null}
          {console.log("This is msg", msg)}
        </div>

        <div>
          {/* {msg ? alert(msg) : null} */}

          <form
            className={isAuthenticated ? "removeModalBody" : "modalBody"}
            onSubmit={handleOnSubmit}
          >
            <h1>Register</h1>
            <input
              onChange={handleChangeName}
              name="name"
              type="text"
              placeholder="Name..."
            />
            <input
              onChange={handleChangeEmail}
              type="email"
              placeholder="Email..."
            />
            <input
              onChange={handleChangePassword}
              type="password"
              placeholder="Password..."
            />
            <input type="password" placeholder="Repeat password..." />

            <div className="modalFooter">
              <button
                onClick={() => {
                  closeRegisterModal();
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleToggle();
                  setTimeout(() => {
                    closeRegisterModal();
                  }, 3000000);
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
);
