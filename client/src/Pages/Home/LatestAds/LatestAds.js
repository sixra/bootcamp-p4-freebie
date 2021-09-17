import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../../Redux/Actions/adsAction";
import "./LatestAds.scss";
import LatestAd from "./LatestAd/LatestAd";

const LatestAds = () => {
  const ads = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  console.log(ads);

  return (
    <section>
      <div className="latestAdsTitle">
        <h2>latest ads</h2>
      </div>
      <div className="latestAdsContainer">
        <div className="latestAds">
          <LatestAd />
          <LatestAd />
          <LatestAd />
          <LatestAd />
          <LatestAd />
          <LatestAd />
        </div>
      </div>
      <div className="moreAdsButtonContainer">
        <button>more ads</button>
      </div>
    </section>
  );
};

export default LatestAds;
