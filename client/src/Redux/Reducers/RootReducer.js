import { combineReducers } from "redux";
import { adsReducer, adReducer } from "./AdsReducer";
import { authReducer } from "./AuthReducer.js";

const rootReducers = combineReducers({
  allAds: adsReducer,
  ad: adReducer, 
  auth: authReducer,
});

export default rootReducers;
