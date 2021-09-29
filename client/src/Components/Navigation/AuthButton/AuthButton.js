import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
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
          <div component={Link} to="/user" alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</div>
          <div variant="h6">{user?.result.name}</div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
          <Link to="/auth" className="signInButton">Sign In</Link>
          <NavLink to="/post" className="signInButton">Post Your Ad</NavLink>
        </>
      )}
    </>
  );
};

export default AuthButton;
