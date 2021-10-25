import React from "react";
import "./Freebies.scss";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from "moment";

const SingleAd = ({ adInfo, gridToggle }) => {
  const {
    createdAt,
    category,
    title,
    description,
    image,
    location,
    _id
  } = adInfo;

  return (
    <Link to={`/ad/${_id}`} className={gridToggle ? "singleAdCardColumn" : "singleAdCardRow"}>
      <div className="singleAdImageContainer">
        <img src={image[0].base64} alt="ad-img" />
      </div>
      <div className="singleAdInfo">
        <span className="singleAdCategory">{category}</span>
        <h4 className="singleAdTitle">{title}</h4>
        <div className="singleAdNameLocation">
          <div className="singleAdName">
            <IoTimeOutline size={15} style={{ color: "#df0161" }} />
            <span>{moment(createdAt).format("Do MMM YYYY")}</span>
          </div>
          <div className="singleAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{location}</span>
          </div>
        </div>

        <p className="singleAdNameDescription">{description}</p>
      </div>
    </Link>
  );
};

export default SingleAd;
