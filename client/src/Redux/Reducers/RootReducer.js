import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { adsReducer } from "./AdsReducer";

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  ads: adsReducer,
});

export default rootReducers;
