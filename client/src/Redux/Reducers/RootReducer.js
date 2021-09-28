import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { burgerMenuReducer } from "./BurgerMenuReducer";
import { adsReducer } from "./AdsReducer";
import { authReducer } from "./AuthReducer.js";

const rootReducers = combineReducers({
  allAds: adsReducer,
  auth: authReducer,
  DropdownState: dropdownReducer,
  BurgerMenuState: burgerMenuReducer,
});

export default rootReducers;
