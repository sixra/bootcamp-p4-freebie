import { burgerMenuType } from "../ActionTypes"

export const showBurgerMenu = () => {
  return {
    type: burgerMenuType.SHOW_BURGER_MENU,
  };
};
export const hideBurgerMenu = () => {
  return {
    type: burgerMenuType.HIDE_BURGER_MENU,
  };
};