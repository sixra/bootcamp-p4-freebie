import React from "react";
import "./Categories.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const SingleAd = ({ adInfo }) => {
  const {
    name,
    category,
    title,
    description,
    image,
    location,
  } = adInfo;

  const gridView = useSelector((state) => state.ListGridViewState)

  return (
    <div className={gridView ? "singleAdCardRow" : "singleAdCardCol"}>
      <div className="singleAdImageContainer">
        <img src={image} alt="ad-img" />
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