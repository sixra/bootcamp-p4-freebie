import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import {
  ModalLoginReducer,
  ModalRegisterReducer,
} from "./ModalLoginAndRegister";
import { errorReducer } from "./ErrorReducer";
import { authReducer } from "./AuthReducer";

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer,
  error: errorReducer,
  auth: authReducer,
});

export default rootReducers;
