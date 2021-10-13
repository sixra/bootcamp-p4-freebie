import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { useHistory } from "react-router-dom";
import "./ForgotPassword.scss";

const initialState = {
  password: "",
  cf_password: "",
};

function ResetPassword(props) {
  const hash = props.match.params.hash;
  // console.log(hash)
  const [data, setData] = useState(initialState);

  const history = useHistory();

  const { password, cf_password } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async (e) => {
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

    if (password !== cf_password) {
      toastr["error"](
        "Password is not the same as Confirm Password, please try again!",
        "No Match!"
      );
    } else {
      const res = await axios.post(`/api/user/reset/${hash}`, { password });
      if (res) {
        toastr["success"](
          "Your password is now updated, You can now sign in with your new Password!",
          "Password Changed!"
        );
        history.push("/auth");
      } else {
        toastr["error"](
          "There was an issue resetting your password, please try again later!",
          "Reset not possible!"
        );
      }
    }
  };

  return (
    <section className="authorizationSection">
      <div className="authContainer right-panel-active">
        <div className="form-container sign-up-container">
          <form onSubmit={handleResetPass}>
            <h1>Create New Password</h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
              required
              onChange={handleChangeInput}
            />
            <input
              type="password"
              placeholder="Repeat Password"
              name="cf_password"
              label="Repeat Password"
              required
              onChange={handleChangeInput}
            />
            <button type="submit">Update</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
