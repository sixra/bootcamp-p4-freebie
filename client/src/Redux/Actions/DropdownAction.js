
import { searchBarDropdownType } from "../ActionTypes"

export const showDropdown = () => {
  return {
    type: searchBarDropdownType.SHOW_DROPDOWN,
  };
};
export const hideDropdown = () => {
  return {
    type: searchBarDropdownType.HIDE_DROPDOWN,
  };
};