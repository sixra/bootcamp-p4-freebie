import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollUp.scss";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <div className="scrollToTop scrollToTopHide">
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowUp size={24} />
        </div>
      )}
    </div>
  );
};
export default ScrollUp;
