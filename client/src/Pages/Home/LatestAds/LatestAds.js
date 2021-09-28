import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAds } from "../../../Redux/Actions/AdsAction";
import "./LatestAds.scss";
import LatestAd from "./LatestAd/LatestAd";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

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
            )).slice(0, 3)}
          </div>
        </div>
      )}

      <div className="moreAdsButtonContainer">
        <button>more ads</button>
      </div>
    </section>
  );
};

export default LatestAds;
