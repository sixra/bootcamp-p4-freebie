import { modalLoginType } from "../ActionTypes"
import { modalRegisterType } from "../ActionTypes"

export const showLoginModal = () => {
  return {
    type: modalLoginType.SHOW_LOGIN_MODAL,
  };
};
export const hideLoginModal = () => {
  return {
    type: modalLoginType.HIDE_LOGIN_MODAL,
  };
};

export const showRegisterModal = () => {
  return {
    type: modalRegisterType.SHOW_REGISTER_MODAL,
  };
};
export const hideRegisterModal = () => {
  return {
    type: modalRegisterType.HIDE_REGISTER_MODAL,
  };
};