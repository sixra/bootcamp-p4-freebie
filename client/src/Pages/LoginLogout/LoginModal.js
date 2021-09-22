// import React from "react";
// import { useDispatch } from "react-redux";
// import { hideLoginModal } from "../../Redux/Actions/ModalLoginRegisterAction";
// import "./LoginModal.scss";

// const LoginModal = () => {
//   const dispatch = useDispatch();

//   const closeLoginModal = () => {
//     dispatch(hideLoginModal());
//   };

//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="closeModal">
//           <button
//             onClick={() => {
//               closeLoginModal();
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="modalTitle">
//           <h1>Login</h1>
//         </div>
//         <div className="modalBody">
//           <input type="email" placeholder="Enter your email" />
//           <input type="password" placeholder="Enter your password" />
//         </div>
//         <div className="modalFooter">
//           <button
//             onClick={() => {
//               closeLoginModal();
//             }}
//           >
//             Cancel
//           </button>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { login } from "../../Redux/Actions/Auth";
import { clearErrors } from "../../Redux/Actions/Error";
import { hideLoginModal } from "../../Redux/Actions/ModalLoginRegisterAction";
import "./LoginModal.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

const LoginModal = ({ isAuthenticated, error, login, clearErrors, auth }) => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [clearErrors, modal]);

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    // Attempt to login
    login(user);
  };

  useEffect(() => {
    // Check for register error
    if (error.id === "LOGIN_FAIL") {
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

  const closeLoginModal = () => {
    dispatch(hideLoginModal());
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeModal">
          <button
            onClick={() => {
              closeLoginModal();
              handleToggle();
            }}
          >
            <IoCloseCircleOutline size={24} />
          </button>
        </div>
        <div className="modalTitle">
          <h1>Sign in</h1>
        </div>
        <div>
          <form
            className={isAuthenticated ? "removeModalBody" : "modalBody"}
            onSubmit={handleOnSubmit}
          >
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
            <div className="modalFooter">
              <button
                onClick={() => {
                  closeLoginModal();
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleToggle();
                  setTimeout(() => {
                    closeLoginModal();
                  }, 10000);
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

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);
