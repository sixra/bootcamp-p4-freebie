import { adsType } from "../ActionTypes";

export const adsReducer = (ads = [], action) => {
  switch (action.type) {
    case adsType.FETCH_ADS:
      return action.payload;
    case adsType.POST_AD:
      return [...ads, action.payload];
    default:
      return ads;
  }
};
