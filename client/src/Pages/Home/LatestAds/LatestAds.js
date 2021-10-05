import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAds } from "../../../Redux/Actions/AdsAction";
import LatestAd from "./LatestAd/LatestAd";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import "./LatestAds.scss";

const LatestAds = () => {
  const ads = useSelector((state) => state.allAds.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  return (
    <section>
      <div className="latestAdsTitle">
        <h2>latest ads</h2>
      </div>

      {!ads.length ? (
        <LoadingSpinner />
      ) : (
        <div className="latestAdsContainer">
          <div className="latestAds">
            {ads.map((adInfo) => (
              <LatestAd key={adInfo._id} adInfo={adInfo} />
            )).slice(0, 6)}
          </div>
        </div>
      )}

      <div className="moreAdsButtonContainer">
        <Link to="/categories">more ads</Link>
      </div>
    </section>
  );
};

export default LatestAds;
