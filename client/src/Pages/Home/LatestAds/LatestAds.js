import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LatestAd from "./LatestAd/LatestAd";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import "./LatestAds.scss";

const LatestAds = () => {
  const ads = useSelector((state) => state.allAds.ads);

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
            {ads
              .map((adInfo) => <LatestAd key={adInfo._id} adInfo={adInfo} />)
              .slice(0, 6)}
          </div>
        </div>
      )}

      <div className="moreAdsButtonContainer">
        <Link to="/freebies">more ads</Link>
      </div>
    </section>
  );
};

export default LatestAds;
