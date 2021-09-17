import { combineReducers } from "redux"
import { dropdownReducer } from "./DropdownReducer"
import { ModalLoginReducer, ModalRegisterReducer } from "./ModalLoginAndRegister"
import { burgerMenuReducer } from "./BurgerMenuReducer"

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
  LoginModalState: ModalLoginReducer,
  RegisterModalState: ModalRegisterReducer,
  BurgerMenuState: burgerMenuReducer
});

export default rootReducers;