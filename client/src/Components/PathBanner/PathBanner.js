import React from "react";
import { useLocation } from "react-router-dom";
import "./PathBanner.scss";

const PathBanner = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname.slice(1);
  };

  return <div className="pathBanner">{usePathname()}</div>;
};

export default PathBanner;
