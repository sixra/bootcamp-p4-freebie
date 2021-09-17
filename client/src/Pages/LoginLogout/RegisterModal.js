import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { register } from "../../Redux/Actions/Auth";
import { clearErrors } from "../../Redux/Actions/Error";

import { hideRegisterModal } from "../../Redux/Actions/ModalLoginRegisterAction";

import "./LoginModal.scss";

// const RegisterModal = () => {

//   const dispatch = useDispatch();

//   const closeRegisterModal = () => {
//     dispatch(hideRegisterModal());
//   };

//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="closeModal">
//           <button
//             onClick={() => {
//               closeRegisterModal();
//             }}
//           >
//             X
//           </button>
//         </div>
//         <div className="modalTitle">
//           <h1>Register</h1>
//         </div>
//         <div className="modalBody">
//           <input type="text" placeholder="Name..." />
//           <input type="email" placeholder="Email..." />
//           <input type="password" placeholder="Password..." />
//           <input type="password" placeholder="Repeat password..." />
//         </div>
//         <div className="modalFooter">
//           <button
//             onClick={() => {
//               closeRegisterModal();
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

// export default RegisterModal;

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
            X
          </button>
        </div>

        <div className="modalTitle">
          <h1> Register </h1>
          <h3> {msg ? msg : null}</h3>
          {console.log("This is msg", msg)}
        </div>

        <div className="modalBody">
          {/* {msg ? alert(msg) : null} */}
          <form onSubmit={handleOnSubmit}>
            <input
              onChange={handleChangeName}
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
                  }, 2000);
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
