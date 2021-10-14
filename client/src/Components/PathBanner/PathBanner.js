import React from "react";
import { useLocation } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import "./PathBanner.scss";

const PathBanner = () => {
  const location = useLocation();
  let pathname = location.pathname.slice(1);

  const usePathname = () => {
    if (
      pathname.includes("dashboard") ||
      pathname.includes("post") ||
      pathname.includes("ads") ||
      pathname.includes("favorite")
    ) {
      pathname =
        location.pathname.slice(1, 5) + " / " + location.pathname.slice(6);
    }

    if (pathname.includes("auth")) {
      pathname = "Sign in / Sign up";
    }

    if (pathname.includes("ad/")) {
      pathname = "Ad details";
    }

    if (pathname.includes("forgot")) {
      pathname = "Reset Password";
    }

    if (pathname.includes("reset")) {
      pathname = "New Password";
    }

    if (pathname.includes("activate")) {
      pathname = "Activation";
    }

    return pathname;
  };

  return (
    <div
      className={
        !pathname.length || pathname.includes("home")
          ? "removePathBanner"
          : "pathBannerContainer"
      }
    >
      <div className="pathBanner">
        <IoIosArrowDropright style={{ color: "#E52853", fontSize: "1.7rem" }} />
        <div>{usePathname()}</div>
      </div>
    </div>
  );
};

export default PathBanner;
