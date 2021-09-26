import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { burgerMenuReducer } from "./BurgerMenuReducer";
import { adsReducer } from "./AdsReducer";
import { listGridViewReducer } from "./ListGridView";
import { authReducer } from "./AuthReducer.js"; 

const rootReducers = combineReducers({
  ads: adsReducer,
  auth: authReducer, 
  DropdownState: dropdownReducer,
  BurgerMenuState: burgerMenuReducer,
  ListGridViewState: listGridViewReducer,
});

export default rootReducers;
