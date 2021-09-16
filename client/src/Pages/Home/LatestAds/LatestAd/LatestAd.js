import React from "react";
import "./LatestAd.scss";
import Image from "./image-sample.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const LatestAd = () => {
  return (
    <div className="latestAdCard">
      <div className="latestAdImageContainer">
        <img src={Image} alt="ad-img" />
      </div>
      <div className="latestAdInfo">
        <span className="latestAdCategory">Electronics</span>
        <h4 className="latestAdTitle">Defect Iphone 11 for giveaway</h4>
        <div className="latestAdNameLocation">
          <div className="latestAdName">
            <AiOutlineUser size={15} style={{ color: "#df0161" }} />
            <span>Arty Wartanian</span>
          </div>
          <div className="latestAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>Location, NY</span>
          </div>
        </div>

        <p className="latestAdNameDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          inventore, quaerat nihil incidunt sint hic corrupti architecto maxime
          optio dolor?
        </p>
      </div>
    </div>
  );
};

export default LatestAd;
