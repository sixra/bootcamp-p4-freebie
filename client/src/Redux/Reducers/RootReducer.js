import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import {
  ModalLoginReducer,
  ModalRegisterReducer,
} from "./ModalLoginAndRegister";
import { burgerMenuReducer } from "./BurgerMenuReducer";
import { errorReducer } from "./ErrorReducer";
import { authReducer } from "./AuthReducer";
import { adsReducer } from "./AdsReducer";

const rootReducers = combineReducers({
  ads: adsReducer,
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer,
  BurgerMenuState: burgerMenuReducer,
  error: errorReducer,
  auth: authReducer,
});

export default rootReducers;
