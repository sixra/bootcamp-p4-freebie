import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./AuthButton.scss"

const AuthButton = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);


  return (
    <>
      {user?.result ? (
        <div >
          <Link to="/user" alt={user?.result.name}>{user?.result.name}</Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
         <div className="signInContainer">
          <Link to="/auth" >Sign In</Link>
          </div>
        </>
      )}
    </>
  );
};

export default AuthButton;
