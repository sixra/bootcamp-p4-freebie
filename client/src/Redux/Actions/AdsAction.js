import * as api from "../../Api/Api";
import { adsType } from "../ActionTypes";

export const getAds = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAds();
    dispatch({ type: adsType.FETCH_ADS, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const getAd = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchAd(id);
    dispatch({ type: adsType.FETCH_AD, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const postAd = (ad) => async (dispatch) => {
  try {
    const { data } = await api.postAd(ad);
    dispatch({ type: adsType.POST_AD, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const updateAd = (id, ad) => async (dispatch) => {
  try {
    const { data } = await api.updateAd(id, ad);
    dispatch({ type: adsType.UPDATE_AD, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const removeAd = () => {
  return {
    type: adsType.REMOVE_AD,
  };
};

export const filterAds = (ads, cat) => {
  return {
    type: adsType.FILTER_BY_CATEGORY,
    payload: {
      ads:
        cat === "All products" ? ads : ads.filter((ad) => ad.category === cat),
      category: cat,
    },
  };
};

export const filterAdsSearch = (ads, title) => (dispatch) => {
  try {
    dispatch({
      type: adsType.FILTER_BY_SEARCH,
      payload: {
        ads: title === "" ? ads : ads.filter((ad) => ad.title === title),
        title: title,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const filterPostedByUser = (ads, userId) => (dispatch) => {
  try {
    dispatch({
      type: adsType.FILTER_POSTED_BY_USER,
      payload: {
        creator: ads.filter((ad) => ad.creator === userId),
      },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteAdPostedByUser = (_id) => async (dispatch) => {
  try {
    dispatch({ type: adsType.DELETE_AD_POSTED_BY_USER, payload: _id });
    await api.deleteAd(_id);
  } catch (error) {
    console.error(error.message);
  }
};
