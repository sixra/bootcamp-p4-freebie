import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  IoAlbumsOutline,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getAd, removeAd } from "../../Redux/Actions/AdsAction";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import "./AdDetails.scss";
import Favorite from "./Favorite";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import TickAnimation from "../TickAnimation/TickAnimation";

const AdDetails = () => {
  const singleAdInfo = useSelector((state) => state.ad);
  const [FavoriteNumber, setFavoriteNumber] = useState(0);

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
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAd(id));
    dispatch(removeAd());
  }, [dispatch, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendInquiry(true);
    const { senderName, senderEmail, senderPhone, senderMessage } =
      e.target.elements;

    axios({
      method: "POST",
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
                  FavoriteNumber={FavoriteNumber}
                  setFavoriteNumber={setFavoriteNumber}
                  className="favoriteContainer"
                />
              ) : null}

              <Swiper
                modules={[Navigation, Pagination]}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                className="swiper"
              >
                {image.map(({ base64 }) => (
                  <SwiperSlide key={base64} className="swiperSlide">
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
                  <li className="adDetailsFavoriteNumber">
                    <AiOutlineHeart size={20} style={{ color: "#E52951" }} />
                    <span>interested: </span>
                    <span className="FavoriteNumber">{FavoriteNumber}</span>
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
