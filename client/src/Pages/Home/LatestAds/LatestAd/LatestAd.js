import React from "react";
import "./LatestAd.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const LatestAd = ({ adInfo }) => {
  const {
    category,
    description,
    image,
    location: { city, pobox },
    title,
  } = adInfo;

  return (
    <div className="latestAdCard">
      <div className="latestAdImageContainer">
        <img src={image} alt="ad-img" />
      </div>
      <div className="latestAdInfo">
        <span className="latestAdCategory">{category}</span>
        <h4 className="latestAdTitle">{title}</h4>
        <div className="latestAdNameLocation">
          <div className="latestAdName">
            <AiOutlineUser size={15} style={{ color: "#df0161" }} />
            <span>Max Sampleman</span>
          </div>
          <div className="latestAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{city}</span>
            <span>{pobox}</span>
          </div>
        </div>

        <p className="latestAdNameDescription">{description}</p>
      </div>
    </div>
  );
};

export default LatestAd;
