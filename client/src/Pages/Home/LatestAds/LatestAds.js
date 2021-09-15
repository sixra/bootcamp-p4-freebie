import React from "react";
import "./LatestAds.scss";
import LatestAd from "./LatestAd/LatestAd";

const LatestAds = () => {
  return (
    <section>
      <div className="latestAdsTitle">
        <span></span>
        <h2>latest ads</h2>
        <span></span>
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
