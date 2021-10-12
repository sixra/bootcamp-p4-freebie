import React from "react";
import "./LatestAd.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LatestAd = ({ adInfo }) => {
  const { name, category, title, image, description, location, _id } = adInfo;

  return (
    <Link className="latestAdCard" to={`/ad/${_id}`}>
      <div className="latestAdImageContainer">
        <img src={image[0].base64} alt="" />
      </div>
      <div className="latestAdInfo">
        <span className="latestAdCategory">{category}</span>
        <h4 className="latestAdTitle">{title}</h4>
        <div className="latestAdNameLocation">
          <div className="latestAdName">
            <AiOutlineUser size={15} style={{ color: "#df0161" }} />
            <span>{name}</span>
          </div>
          <div className="latestAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{location}</span>
          </div>
        </div>

        <p className="latestAdNameDescription">{description}</p>
      </div>
    </Link>
  );
};

export default LatestAd;
