import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAd, removeAd } from "../../Redux/Actions/AdsAction";
import { IoAlbumsOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { Swiper, SwiperSlide } from "swiper/react";
import Favorite from "./Favorite";
import moment from "moment";
import axios from "axios";
import "./AdDetails.scss";

//// Swiper Library imports ////
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import TickAnimation from "../TickAnimation/TickAnimation";
SwiperCore.use([Pagination, Navigation]);

const AdDetails = () => {
  const singleAdInfo = useSelector((state) => state.ad);
  const {
    title,
    location,
    name,
    category,
    image,
    description,
    createdAt,
    avatar,
    email,
  } = singleAdInfo;
  const [sendInquiry, setSendInquiry] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAd(id));
    dispatch(removeAd());
    // eslint-disable-next-line
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendInquiry(true);
    const { senderName, senderEmail, senderPhone, senderMessage } =
      e.target.elements;

    axios({
      method: "POST",
      // url: "http://localhost:4000/api/contact/user",
      url: "/api/contact/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        adTitle: title,
        receiverEmail: email,
        senderName: senderName.value,
        senderEmail: senderEmail.value,
        senderPhone: senderPhone.value,
        senderMessage: senderMessage.value,
      },
    });
  };

  return (
    <>
      {!Object.keys(singleAdInfo).length ? (
        <section className="adDetailsSpinner">
          <LoadingSpinner />
        </section>
      ) : (
        <section className="adDetailsSection">
          <div className="adDetailsContainer">
            <div className="adDetailsCard">
              {user?.result ? (
                <Favorite
                  singleAdInfo={singleAdInfo}
                  className="favoriteContainer"
                />
              ) : null}

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
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="userAdAvatarName">
                  {" "}
                  Posted by<span>{name}</span>
                </div>
              </div>
              <div className="userAdContactForm">
                {sendInquiry ? (
                  <div className="userAdContactSuccess">
                    <TickAnimation />
                    <h3>Inquiry sent successfully</h3>
                  </div>
                ) : (
                  <>
                    <h3>Inquire about the ad</h3>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="senderName"
                          required
                        />
                        <label>Name</label>
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="senderEmail"
                          required
                        />
                        <label>Email</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="phone"
                          id="senderPhone"
                          required
                        />
                        <label>Phone</label>
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id="senderMessage"
                          rows="5"
                          required
                        ></textarea>
                        <label>Message</label>
                      </div>
                      <button type="submit" className="adSubmitButton">
                        Send
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AdDetails;
