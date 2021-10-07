// import { adsType } from "../ActionTypes";

// export const adsReducer = (ads = [], action) => {
//   switch (action.type) {
//     case adsType.FETCH_ADS:
//       return action.payload;
//     case adsType.POST_AD:
//       return [...ads, action.payload];
//     default:
//       return ads;
//   }
// };

import { adsType } from "../ActionTypes";

const allAds = {
  ads: [],
  filteredAds: [],
  title: "",
  category: "Select category",
  creator: []
}

export const adsReducer = (state = allAds, action) => {

  switch (action.type) {
    case adsType.FETCH_ADS:
      return { ...state, ads: action.payload, filteredAds: action.payload };
    case adsType.FILTER_BY_CATEGORY:
      return { ...state, filteredAds: action.payload.ads, category: action.payload.category };
    case adsType.FILTER_BY_SEARCH:
      return { ...state, filteredAds: action.payload.ads, title: action.payload.title };
    case adsType.POST_AD:
      return [...action.payload.ads, action.payload];
    case adsType.FILTER_POSTED_BY_USER:
      return { ...state, creator: action.payload.creator };
    default:
      return state;
  }
};