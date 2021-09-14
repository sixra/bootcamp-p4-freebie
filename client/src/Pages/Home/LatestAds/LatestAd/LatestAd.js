import React from "react";
import "./LatestAd.scss";
import Image from "./image-sample.jpg";

const LatestAd = () => {
  return (
    <div className="latestAdCard">
      <div className="latestAdImageContainer">
        <img src={Image} alt="" />
      </div>
      <div className="latestAdInfo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        inventore, quaerat nihil incidunt sint hic corrupti architecto maxime
        optio dolor?
      </div>
    </div>
  );
};

export default LatestAd;
