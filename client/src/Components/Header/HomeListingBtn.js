import React from "react";
import "./Header.scss";
import {Link} from "react-router-dom";

const HomeListingBtn = () => {
  return (
    <div className="homeListingBtn">
      <h1>Did you say it's free?</h1>
      <p>
      Use our platform to find free stuff near you and help the community by offering some yourself.
      </p>
      <Link to="/freebies"><button className="headerBtn">start exploring</button></Link>
    </div>
  );
};

export default HomeListingBtn;
