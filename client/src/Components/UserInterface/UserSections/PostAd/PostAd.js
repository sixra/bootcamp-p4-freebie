import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { postAd } from "../../../../Redux/Actions/AdsAction";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss"
import "./PostAd.scss";

const PostAd = () => {
  const ads = useSelector((state) => state.allAds.ads);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const [adData, setAdData] = useState({
    title: "",
    category: "",
    image: "https://live.staticflickr.com/65535/51506026332_c5054675e4_c.jpg",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAd({ ...adData, name: user?.result?.name }));
  };

  console.log(ads);

  return (
    <>
      <PathBanner />
      <section className="userInterface">
        <UserNavBar />
        <main className="userSections">
          <h2 className="postAdHeader">Ad Details</h2>
          <form className="postAdForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) =>
                setAdData({
                  ...adData,
                  title: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) =>
                setAdData({
                  ...adData,
                  location: e.target.value,
                })
              }
            />

            <select
              name="categories"
              placeholder="categories"
              onChange={(e) =>
                setAdData({
                  ...adData,
                  category: e.target.value,
                })
              }
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
            </select>

            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setAdData({ ...adData, image: base64 })}
            />

            <textarea
              name="description"
              placeholder="Description"
              cols="30"
              rows="10"
              onChange={(e) =>
                setAdData({
                  ...adData,
                  description: e.target.value,
                })
              }
            ></textarea>

            <button type="submit" className="adSubmitButton">
              Submit
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default PostAd;
