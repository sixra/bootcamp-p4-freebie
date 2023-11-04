import React, { useState, useEffect } from "react";
import "./AuthForm.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const submitSignUp = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
    e.target.reset();
  };

  const submitSignIn = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
    e.target.reset();
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const switchHandle = () => {
    setSignIn(!signIn);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="authorizationSection">
      <div
        className={
          signIn ? "authContainer" : "authContainer right-panel-active"
        }
      >
        <div className="form-container sign-up-container">
          <form onSubmit={submitSignUp}>
            <h1>Create an Account</h1>
            <div>
              <input
                type="text"
                name="firstName"
                label="First Name"
                required
                onChange={handleChange}
              />
              <label>First name</label>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                label="Last Name"
                required
                onChange={handleChange}
              />
              <label>Last name</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                label="Email Address"
                required
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                label="Password"
                required
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                label="Repeat Password"
                required
                onChange={handleChange}
              />
              <label>Repeat password</label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <div className="userAgreement">
            By signing up I agree to the Terms and Conditions and Privacy Policy
          </div>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={submitSignIn}>
            <h1>Sign In</h1>
            <div>
              <input
                type="email"
                name="email"
                label="Email Address"
                required
                onChange={handleChange}
              />
              <label>Email</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                label="Password"
                required
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <button type="submit">Sign In</button>
            <Link className="forgotPasswordLink" to="/user/forgot">
              Forgot your password?
            </Link>
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
    </section>
  );
};

export default AuthForm;
