import { combineReducers } from "redux";
import { adsReducer } from "./AdsReducer";
import { authReducer } from "./AuthReducer.js";
import { singleAdReducer } from "./AdsReducer.js"

const rootReducers = combineReducers({
  allAds: adsReducer,
  singleAd: singleAdReducer, 
  auth: authReducer,
});

export default rootReducers;
