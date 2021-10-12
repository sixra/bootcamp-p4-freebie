import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import "./ForgotPassword.scss";

const initialState = {
  email: "",
};

function ForgotPassword() {
  const [data, setData] = useState(initialState);

  const { email } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    toastr.options = {
      closeButton: true,
      debug: true,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "0",
      extendedTimeOut: "0",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };

    const res = axios.post("http://localhost:4000/api/user/forgot", { email });
    e.target.reset();
    if (res) {
      toastr["success"](
        "We have sent a password recover instructions to your email!",
        "Check your email!"
      );
      console.log("Email has been sent");
    } else {
      toastr["error"](
        "There was an issue resetting your password, please try again later!",
        "Reset not possible!"
      );
      console.log("FAILURE");
    }
  };

  return (
    <div className="authContainer">
      <div className="form-container sign-in-container">
        <form onSubmit={forgotPassword}>
          <h1>Reset Password</h1>
          <span>Please enter your email address</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            label="Email Address"
            value={email}
            required
            onChange={handleChangeInput}
          />
          <button type="submit">Send Reset Email</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default ForgotPassword;
