import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdsByUser from "./AdsByUser";
import { filterPostedByUser } from "../../../../Redux/Actions/AdsAction";
import FileBase from "react-file-base64";
import UserNavBar from "../../UserNavBar/UserNavBar";
import { updateAd } from "../../../../Redux/Actions/AdsAction";
import { IoChevronBack } from "react-icons/io5";
import TickAnimation from "../../../TickAnimation/TickAnimation";
import "../../UserInterface.scss";
import "./MyAds.scss";

const initialState = {
  title: "",
  location: "",
  categories: "",
  images: "",
  description: "",
};

const MyAds = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const [adEdited, setAdEdited] = useState(false);
  const [data, setData] = useState(initialState);
  const adsByUser = useSelector((state) => state.allAds.creator);
  const ads = useSelector((state) => state.allAds.ads);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id;
  const { title, location, categories, images, description } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBackToMyAds = () => {
    setEditForm(false);
    setAdEdited(false);
  };

  const individualAds = useSelector((state) =>
    currentId ? state.allAds.ads.find((a) => a._id === currentId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      setAdEdited(true);
      dispatch(
        updateAd(currentId, {
          ...data,
          title: title ? title : individualAds?.title,
          location: location ? location : individualAds?.location,
          categories: categories ? categories : individualAds?.categories,
          images: images ? images : individualAds?.images,
          description: description ? description : individualAds?.description,
        })
      );
    } else {
      console.log("error updating");
    }
  };

  useEffect(() => {
    dispatch(filterPostedByUser(ads, userId));
  }, [individualAds, ads, dispatch, userId]);

  console.log("test", individualAds);

  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">
          {editForm ? (
            <>
              {adEdited ? (
                <div className="adEditedSuccessContainer">
                  <TickAnimation />
                  <h3>Ad edited successfully</h3>
                  <span onClick={handleBackToMyAds}>Back to my ads</span>
                </div>
              ) : (
                <>
                  <h2>Edit Ad</h2>
                  <div className="EditAdtitleUnderline"></div>
                  <div className="backToMyAds">
                    <IoChevronBack color="#E42754" size="18" />
                    <span onClick={() => setEditForm(false)}>Back</span>
                  </div>
                  <div className="editAdFormContainer">
                    <div className="editAdImageContainer">
                      <img src={individualAds?.image[0].base64} alt="" />
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="text"
                          name="title"
                          // placeholder={individualAds?.title}
                          defaultValue={individualAds?.title}
                          onChange={handleChange}
                        />
                        <label>Title</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="location"
                          // placeholder={individualAds?.location}
                          defaultValue={individualAds?.location}
                          onChange={handleChange}
                        />
                        <label>Location</label>
                      </div>
                      <div>
                        <FileBase
                          type="file"
                          name="images"
                          multiple={true}
                          defaultValue={individualAds?.image}
                          onDone={(base64) => setData({ ...data, image: base64 })}
                          className="fileUploader"
                        />
                        <label>Image</label>
                      </div>
                      <div>
                        <textarea
                          name="description"
                          rows="5"
                          defaultValue={individualAds?.description}
                          onChange={handleChange}
                        ></textarea>
                        <label>Description</label>
                      </div>

                      <button type="submit">Update</button>
                    </form>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <h2>My Ads</h2>
              <div className="titleUnderline"></div>
              {!adsByUser.length ? (
                <span className="noAdsSpan">
                  Your ads list is empty
                </span>
              ) : (
                adsByUser.map((adInfo) => (
                  <AdsByUser
                    key={adInfo._id}
                    adInfo={adInfo}
                    setCurrentId={setCurrentId}
                    setEditForm={setEditForm}
                  />
                ))
              )}{" "}
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default MyAds;
