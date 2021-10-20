import React, { useEffect, useState } from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import "../../UserInterface.scss";
import { useSelector, useDispatch } from "react-redux";
import AdsByUser from "./AdsByUser";
import { filterPostedByUser } from "../../../../Redux/Actions/AdsAction";
import FileBase from "react-file-base64";
import {updateAd} from "../../../../Redux/Actions/AdsAction"

const initialState = {
  title: "",
  location: "",
  categories: "",
  images: "",
  description: ""
}

const MyAds = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)
  const adsByUser = useSelector((state) => state.allAds.creator);
  const ads = useSelector((state) => state.allAds.ads);
  const [data, setData] = useState(initialState)
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id;
  const {title, location, categories, images, description} = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const individualAds = useSelector((state) => 
  currentId ? state.allAds.ads.find((a) => a._id === currentId) : null
  );


  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updateAd(currentId, { ...data, 
          title: title ? title : individualAds?.title,
          location: location ? location : individualAds?.location,
          categories: categories ? categories : individualAds?.categories,
          images: images ? images : individualAds?.images,
          description: description ? description : individualAds?.description,
        })
      );
    } else {
      console.log("error updating")
    }
    // clear()
  };

  // const clear = () => {
  //   setCurrentId(null)
  //   setData({
  //     title: "",
  //     location: "",
  //     categories: "",
  //     images: "",
  //     description: ""
  //   })
  // }
  
  

  useEffect(() => {
    dispatch(filterPostedByUser(ads, userId));
  }, [individualAds, ads, dispatch, userId]);

  // console.log(individualAds)

  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">
          <h2>My Ads</h2>
          <div className="titleUnderline"></div>
          {adsByUser.map((adInfo) => (
            <AdsByUser key={adInfo._id} adInfo={adInfo} setCurrentId={setCurrentId} />
          ))}
          <form className="postAdForm" onSubmit={handleSubmit}>
          
            <input
              type="text"
              name="title"
              // placeholder={individualAds?.title}
              defaultValue={individualAds?.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              // placeholder={individualAds?.location}
              defaultValue={individualAds?.location}
              onChange={handleChange}
            />

            {/* <select
              name="categories"
              placeholder={individualAds?.category}
              defaultValue={individualAds?.category}
              onChange={handleChange}
            >
              <option value="select category">Select Category</option>
              <option value="vehicle parts">Vehicle Parts</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="mobiles">Mobiles</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
              <option value="jobs">Jobs</option>
              <option value="services">Services</option>
              <option value="animals">Animals</option>
              <option value="books">Books</option>
              <option value="baby products">Baby Products</option>
              <option value="matrimony">Matrimony</option>
            </select> */}

            <FileBase
              type="file"
              name="images"
              multiple={true}
              defaultValue={individualAds?.image}
              onDone={(base64) => setData({ ...data, image: base64 })}
              className="fileUploader"
            />

            <textarea
              name="description"
              placeholder="Description"
              rows="5"
              defaultValue={individualAds?.description}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="adSubmitButton">
              Update
            </button>
          </form>
        </main>
      </div>
    </section>
  );
};

export default MyAds;
