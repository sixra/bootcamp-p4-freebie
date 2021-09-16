import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import {
  ModalLoginReducer,
  ModalRegisterReducer,
} from "./ModalLoginAndRegister";
import { adsReducer } from "./AdsReducer";

const rootReducers = combineReducers({
  ads: adsReducer,
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer,
});

export default rootReducers;
