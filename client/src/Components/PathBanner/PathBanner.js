import React from "react";
import { useLocation } from "react-router-dom";
import "./PathBanner.scss";

const PathBanner = () => {
  
  const usePathname = () => {
    const location = useLocation();
    let pathname = location.pathname.slice(1);

    if (pathname.includes("user")) {
      pathname = location.pathname.slice(1, 5) + " / " + location.pathname.slice(6)
    }

    if (pathname.includes("auth")) {
      pathname = "Sign in / Sign up"
    }

    return pathname
  };

  return <div className="pathBanner">{usePathname()}</div>;
};

export default PathBanner;
