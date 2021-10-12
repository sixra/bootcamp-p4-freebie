import React, { useEffect } from "react";
import UserNavBar from "../../UserNavBar/UserNavBar";
import PathBanner from "../../../PathBanner/PathBanner";
import "../../UserInterface.scss";
import { useSelector, useDispatch } from "react-redux";
import AdsByUser from "./AdsByUser";
import { filterPostedByUser } from "../../../../Redux/Actions/AdsAction";

const MyAds = () => {
  const dispatch = useDispatch();
  const adsByUser = useSelector((state) => state.allAds.creator);
  const ads = useSelector((state) => state.allAds.ads);
  const user = JSON.parse(localStorage.getItem("profile"));
  const userId = user.result._id;

  useEffect(() => {
    dispatch(filterPostedByUser(ads, userId));
  }, [ads, dispatch, userId]);

  return (
    <section className="userSection">
      <div className="userInterface">
        <UserNavBar />
        <main className="userSections">
          {adsByUser.map((adInfo) => (
            <AdsByUser key={adInfo._id} adInfo={adInfo} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default MyAds;
