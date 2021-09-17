import { burgerMenuType } from "../ActionTypes";


export const burgerMenuReducer = (state = false, action) => {
  switch (action.type) {
    case burgerMenuType.SHOW_BURGER_MENU:
      return true;
    case burgerMenuType.HIDE_BURGER_MENU:
      return false;
    default:
      return state;
  }
}