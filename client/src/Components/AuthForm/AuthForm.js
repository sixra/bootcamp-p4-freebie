import React, { useState } from "react";
import "./AuthForm.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../Redux/Actions/AuthAction";
import { Link } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const AuthForm = () => {
  const [signIn, setSignIn] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const submitSignUp = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
    e.target.reset();
  };

  const submitSignIn = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
    e.target.reset();
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const switchHandle = () => {
    setSignIn(!signIn);
  };

  return (
    <div className={signIn ? "authContainer" : "authContainer right-panel-active"}>

      <div className="form-container sign-up-container">
        <form onSubmit={submitSignUp}>
          <h1>Create an Account</h1>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            label="First Name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            label="Last Name"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            label="Email Address"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Repeat Password"
            name="confirmPassword"
            label="Repeat Password"
            required
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          
        </form>
        <div>
          By signing up I agree to the <span>Terms and Conditions</span> and{" "}
          <span>Private Policy</span>
        </div>
      </div>

      <div className="form-container sign-in-container">
        <form onSubmit={submitSignIn}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            label="Email Address"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            required
            onChange={handleChange}
          />
          <Link className="forgotPasswordLink" to="/user/forgot">Forgot Password?</Link>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Already registered?</h1>
            <p>
              Sign in to your account in order to browse around for more
              freebies.
            </p>
            <button onClick={switchHandle}>Sign In</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Visitor!</h1>
            <p>
              Don't have an account? Sign up and start finding freebies near
              you.
            </p>
            <button onClick={switchHandle}>Sign Up</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AuthForm;
