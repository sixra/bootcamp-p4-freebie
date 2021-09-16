import { combineReducers } from "redux"
import { dropdownReducer } from "./DropdownReducer"
import { ModalLoginReducer, ModalRegisterReducer } from "./ModalLoginAndRegister"

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer
});

export default rootReducers;