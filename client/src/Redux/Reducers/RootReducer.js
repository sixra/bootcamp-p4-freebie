import { combineReducers } from "redux"
import { dropdownReducer } from "./DropdownReducer"

const rootReducers = combineReducers({
  DropdownState: dropdownReducer,
});

export default rootReducers;