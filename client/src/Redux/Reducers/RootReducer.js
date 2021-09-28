import { combineReducers } from "redux";
import { adsReducer } from "./AdsReducer";
import { authReducer } from "./AuthReducer.js";

const rootReducers = combineReducers({
  allAds: adsReducer,
  auth: authReducer,
});

export default rootReducers;
