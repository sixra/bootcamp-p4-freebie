import React, { useState } from "react";
import "./AuthForm.scss";

const AuthForm = () => {
const [signIn, setSignIn] = useState(true)

const switchHandle = () => {
  setSignIn((signIn) => !signIn)
}

  return (
    <div id="container" className={signIn ? "authContainer" : "authContainer right-panel-active"}>
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="First and Last Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button >Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form >
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button >Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Already registered?</h1>
            <p>Just sign in to browse around for more freebies.</p>
            <button onClick={switchHandle} className="ghost">Sign In</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello, Visitor!</h1>
            <p>Not registered yet? sign up quickly and start finding freebies near you.</p>
            <button onClick={switchHandle} className="ghost">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
