import { searchBarDropdownType } from "..//ActionTypes";


export const dropdownReducer = (state = false, action) => {
  switch (action.type) {
    case searchBarDropdownType.SHOW_DROPDOWN:
      return true;
    case searchBarDropdownType.HIDE_DROPDOWN:
      return false;
    default:
      return state;
  }
}