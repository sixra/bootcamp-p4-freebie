import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../Redux/Actions/Auth.js";

export const Logout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div onClick={logoutHandler()} href="#">
      Logout
    </div>
  );
};

export default Logout;
