import { adsType } from "../ActionTypes";

export const adsReducer = (ads = [], action) => {
  switch (action.type) {
    case adsType.FETCH_ADS:
      return action.payload;
    default:
      return ads;
  }
};
