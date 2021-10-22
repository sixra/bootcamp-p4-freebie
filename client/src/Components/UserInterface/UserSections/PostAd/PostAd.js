import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { postAd } from "../../../../Redux/Actions/AdsAction";
import UserNavBar from "../../UserNavBar/UserNavBar";
import TickAnimation from "../../../TickAnimation/TickAnimation";
import "../../UserInterface.scss";
import "./PostAd.scss";

const PostAd = () => {
  const ads = useSelector((state) => state.allAds.ads);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const [adPosted, setAdPosted] = useState(false);
  const [adData, setAdData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdPosted(true);
    dispatch(
      postAd({
        ...adData,
        name: user?.result?.firstName,
        avatar: user?.result?.avatar,
        email: user?.result?.email,
      })
    );
  };

  const handleReturn = (e) => {
    setAdPosted(false);
  };

  console.log(adData);
  console.log(ads);

  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userPostAdSection userSections">
          {adPosted ? (
            <div className="adSuccessContainer">
              <TickAnimation />
              <h3>Ad posted successfully</h3>
              <span onClick={handleReturn}>Click here to post another ad</span>
            </div>
          ) : (
            <>
              <h2 className="postAdHeader">Post an Ad</h2>
              <div className="titleUnderline"></div>
              <form className="postAdForm" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="title"
                    required
                    onChange={(e) =>
                      setAdData({
                        ...adData,
                        title: e.target.value,
                      })
                    }
                  />
                  <label>Title</label>
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    required
                    onChange={(e) =>
                      setAdData({
                        ...adData,
                        location: e.target.value,
                      })
                    }
                  />
                  <label>Location</label>
                </div>
                <select
                  name="categories"
                  placeholder="categories"
                  required
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
                  multiple={true}
                  required
                  onDone={(base64) => setAdData({ ...adData, image: base64 })}
                  className="fileUploader"
                />

                <div>
                  <textarea
                    name="description"
                    rows="5"
                    required
                    onChange={(e) =>
                      setAdData({
                        ...adData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                  <label>Description</label>
                </div>
                <button type="submit" className="adSubmitButton">
                  Submit
                </button>
              </form>
            </>
          )}
        </main>
      </div>
    </section>
  );
};

export default PostAd;
