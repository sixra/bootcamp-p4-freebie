import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../../Redux/Actions/adsAction";
import "./LatestAds.scss";
import LatestAd from "./LatestAd/LatestAd";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

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
        {!ads.length ? (
          <div className="LoadingSpinner">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="latestAds">
            {ads.map((adInfo) => (
              <LatestAd key={adInfo._id} adInfo={adInfo} />
            ))}
          </div>
        )}
      </div>

      <div className="moreAdsButtonContainer">
        <button>more ads</button>
      </div>
    </section>
  );
};

export default LatestAds;
