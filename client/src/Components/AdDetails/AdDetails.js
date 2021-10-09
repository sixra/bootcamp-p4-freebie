import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAd, removeAd } from "../../Redux/Actions/AdsAction";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import "./AdDetails.scss";

//// Swiper Library imports ////
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const AdDetails = () => {
  const singleAd = useSelector((state) => state.ad);
  const {title, location, category, image, description, createdAt} = singleAd; 
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(singleAd);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAd(id));
    dispatch(removeAd());
  }, [id]);

  return (
    <>
      {!Object.keys(singleAd).length ? (
        <section className="adDetailsSpinner">
        <LoadingSpinner />
        </section>
      ) : (
        <section className="adDetailsSection">
          <div className="adDetailsContainer">
            <div className="singleAdCard">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                className="swiper"
                style={{
                  "--swiper-navigation-color": "#E52853",
                  "--swiper-pagination-color": "#E52853",
                }}
              >
                {image.map(({ base64 }) => (
                  <SwiperSlide className="swiperSlide">
                    <img className="singleAdImage" src={base64} alt="ad" />
                  </SwiperSlide>
                ))}
              </Swiper>


               <div className="singleAdInfo">
              <h1>{title}</h1>

              <ul className="singleAdLocationCategory">
                <li className="singleAdLocation">
                  <IoTimeOutline size={20} style={{ color: "#df0161" }} />
                  <span>{createdAt}</span>
                </li>
                <li className="singleAdLocation">
                  <IoLocationOutline size={20} style={{ color: "#df0161" }} />
                  <span>{location}</span>
                </li>
                <li className="singleAdCategory">
                  <IoAlbumsOutline size={20} style={{ color: "#df0161" }} />
                  <span>{category}</span>
                </li>
              </ul>
              </div>
              

              <div className="singleAdDescription">
                <h3>description :</h3>
                <p>{description}</p>
              </div>
            </div>

            <div className="userAdCard">
              <div className="userAdAvatar">
                <img src="" alt="avatar" />
              </div>
              <span>User Name</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AdDetails;
