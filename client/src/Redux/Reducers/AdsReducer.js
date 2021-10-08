import { adsType } from "../ActionTypes";

const allAds = {
  ads: [],
  filteredAds: [],
  title: "",
  category: "Select category"
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
      return { ...state, ads : [...state.ads, action.payload] };
    default:
      return state;
  }
};


export const singleAdReducer = (state = [], action) => {
  switch (action.type) {
    case adsType.FETCH_AD:
      return { ...state, ad: action.payload };
    default:
      return state;
  }
};
