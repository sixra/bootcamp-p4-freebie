import React from "react";
import "./Categories.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const SingleAd = ({ adInfo }) => {
  const {
    category,
    description,
    image,
    location: { city, pobox },
    title,
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
            <span>Max Sampleman</span>
          </div>
          <div className="singleAdLocation">
            <IoLocationOutline size={15} style={{ color: "#df0161" }} />
            <span>{city}</span>
            <span>{pobox}</span>
          </div>
        </div>

        <p className="singleAdNameDescription">{description}</p>
      </div>
    </div>
  );
};

export default SingleAd;