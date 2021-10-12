import React from "react";
import "./Categories.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const SingleAd = ({ adInfo, gridToggle }) => {
  const {
    name,
    category,
    title,
    description,
    image,
    location,
  } = adInfo;

  return (
    <div className={gridToggle ? "singleAdCardColumn" : "singleAdCardRow"}>
      <div className="singleAdImageContainer">
        <img src={image[0].base64} alt="ad-img" />
      </div>
      <div className="singleAdInfo">
        <span className="singleAdCategory">{category}</span>
        <h4 className="singleAdTitle">{title}</h4>
        <div className="singleAdNameLocation">
          <div className="singleAdName">
            <AiOutlineUser size={15} style={{ color: "#df0161" }} />
            <span>{name}</span>
          </div>
          <div className="singleAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{location}</span>
          </div>
        </div>

        <p className="singleAdNameDescription">{description}</p>
      </div>
    </div>
  );
};

export default SingleAd;