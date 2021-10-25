import { authType } from "../ActionTypes";

export const authReducer = (state = { authData: null }, action, token) => {
  switch (action.type) {
    case authType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data, token };
    case authType.USER_UPDATE:
      // console.log("Reducer UPDATE", action?.payload);
      return { ...state, authData: action?.payload};
    case authType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
