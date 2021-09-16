<<<<<<< HEAD
import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { adsReducer } from "./AdsReducer";

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  ads: adsReducer,
=======
import { combineReducers } from "redux"
import { dropdownReducer } from "./DropdownReducer"
import { ModalLoginReducer, ModalRegisterReducer } from "./ModalLoginAndRegister"

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer
>>>>>>> main-feature
});

export default rootReducers;
