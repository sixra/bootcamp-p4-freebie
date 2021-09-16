import { modalLoginType } from "../ActionTypes"
import { modalRegisterType } from "../ActionTypes"

export const ModalLoginReducer = (state = false, action) => {
  switch (action.type) {
    case modalLoginType.SHOW_LOGIN_MODAL:
      return true;
    case modalLoginType.HIDE_LOGIN_MODAL:
      return false;
    default:
      return state;
  }
}

export const ModalRegisterReducer = (state = false, action) => {
  switch (action.type) {
    case modalRegisterType.SHOW_REGISTER_MODAL:
      return true;
    case modalRegisterType.HIDE_REGISTER_MODAL:
      return false;
    default:
      return state;
  }
}