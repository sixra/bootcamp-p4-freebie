import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAd } from "../../Redux/Actions/AdsAction";
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
  const singleAd = useSelector((state) => state.singleAd);
  const { title, image, description} = singleAd.ad;

  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(singleAd.ad);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAd(id));
  }, [id]);

  if (!singleAd) return null; 

  return (
    <>
      {!singleAd?.length ? (
        <LoadingSpinner />
      ) : (
        <section className="adDetailsSection">
          <div className="adDetailsContainer">
            <div className="singleAdCard">
              <div className="singleAdImageGallery">
                {/* <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="singleAdImageGallery"
          style={{'--swiper-navigation-color': '#E52853'}}
        >
          {image.map(({base64}) => (<SwiperSlide><img src={base64} alt="ad" /></SwiperSlide> ))}
        </Swiper> */}
              </div>
              <h1>{title}</h1>
              <div className="singleAdLocationCategory">
                <div className="singleAdLocation">
                  <IoTimeOutline size={20} style={{ color: "#df0161" }} />
                  <span>07 Jan, 10:10 am</span>
                </div>
                <div className="singleAdLocation">
                  <IoLocationOutline size={20} style={{ color: "#df0161" }} />
                  <span>Berlin, Germany</span>
                </div>
                <div className="singleAdCategory">
                  <IoAlbumsOutline size={20} style={{ color: "#df0161" }} />
                  <span>category</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
                blanditiis cupiditate esse, repellat facere incidunt, similique
                ducimus nesciunt necessitatibus error fuga explicabo id
                molestiae ex?
              </p>
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
