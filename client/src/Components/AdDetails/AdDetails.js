import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAd, removeAd } from "../../Redux/Actions/AdsAction";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from 'moment';
import Avatar from "./avatar-profile.jpg";
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
  const { title, location, name, category, image, description, createdAt } = singleAd;
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
            <div className="adDetailsCard">
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
                    <img className="adDetailsImage" src={base64} alt="ad" />
                  </SwiperSlide>
                ))}
              </Swiper>


              <div className="adDetailsInfo">
                <h1>{title}</h1>

                <ul className="adDetailsLocationCategory">
                  <li className="adDetailsLocation">
                    <IoTimeOutline size={20} style={{ color: "#df0161" }} />
                    <span>{moment(createdAt).format("Do MMM YYYY")}</span>
                  </li>
                  <li className="adDetailsLocation">
                    <IoLocationOutline size={20} style={{ color: "#df0161" }} />
                    <span>{location}</span>
                  </li>
                  <li className="adDetailsCategory">
                    <IoAlbumsOutline size={20} style={{ color: "#df0161" }} />
                    <span>{category}</span>
                  </li>
                </ul>
                <h3>description :</h3>
                <p>{description}</p>
              </div>

            </div>

            <div className="userAdCard">

              <div className="userAdAvatar">
                <div className="userAdAvatarImage">
                  <img src={Avatar} alt="avatar" />
                </div>
                <div className="userAdAvatarName"> Posted by<span>{name}</span></div>
              </div>

              <div className="userAdContactForm">
                <h3>Inquire about the ad</h3>
                <form action="" >
                  <input type="text" placeholder="Your Name" name="email" required />
                  <input type="email" placeholder="Your Email" name="email" required />
                  <input type="text" placeholder="Your Phone" name="phone" required />
                  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                  <button type="submit" className="adSubmitButton">Send</button>
                </form>
              </div>

            </div>


          </div>
        </section>
      )}
    </>
  );
};

export default AdDetails;
