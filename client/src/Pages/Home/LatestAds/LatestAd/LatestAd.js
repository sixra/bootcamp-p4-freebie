import React from "react";
import "./LatestAd.scss";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import moment from 'moment';
import AuthForm from "../../../../Components/AuthForm/AuthForm";

const LatestAd = ({ adInfo }) => {
  const { createdAt, category, title, image, location, _id } = adInfo;

  return (
    <Link className="latestAdCard" to={`/ad/${_id}`}>
      <div className="latestAdImageContainer">
        <img src={image[0].base64} alt="" />
      </div>
      <div className="latestAdInfo">
        <span className="latestAdCategory">{category}</span>
        <h4 className="latestAdTitle">{title}</h4>
        <div className="latestAdTimeLocation">
          <div className="latestAdTime">
            <IoTimeOutline size={15} style={{ color: "#df0161" }} />
            <span>{moment(createdAt).format("Do MMM YYYY")}</span>
          </div>
          <div className="latestAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestAd;
