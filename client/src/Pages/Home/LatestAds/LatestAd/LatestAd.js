import React from "react";
import "./LatestAd.scss";
import { AiOutlineUser } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import 'swiper/swiper-bundle.min.css'
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const LatestAd = ({ adInfo }) => {
  const { name, category, title, image, description, location, _id } = adInfo;

  return (
    <Link className="latestAdCard" to={`/ad/${_id}`}>
      <div className="latestAdImageContainer">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper"
          style={{'--swiper-navigation-color': '#E52853'}}
        >
          {image.map(({base64}) => (<SwiperSlide><img src={base64} alt="" /></SwiperSlide> ))}
        </Swiper>
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
