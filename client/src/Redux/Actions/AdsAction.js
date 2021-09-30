import * as api from "../../Api/Api";
import { adsType } from "../ActionTypes";

export const getAds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAds();
    dispatch({ type: adsType.FETCH_ADS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const postAd = (ad) => async (dispatch) => {
  try {
    const { data } = await api.postAd(ad);
    dispatch({ type: adsType.POST_AD, payload: data });
  } catch (error) {
    console.log("jfrru", error.message);
  }
};

export const filterAds = (ads, cat) => {

  return {
    type: adsType.FILTER_BY_CATEGORY,
    payload: { ads: cat === 'All products' ? ads : ads.filter(ad => ad.category === cat), category: cat }
  };
};

export const filterAdsSearch = (ads, title) => {

  return {
    type: adsType.FILTER_BY_SEARCH,
    payload: { ads: title === "" ? ads : ads.filter(ad => ad.title === title), title: title }
  };
};