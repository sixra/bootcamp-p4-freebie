import { authType } from "../ActionTypes";

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case authType.AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    // case authType.AUTH_ERROR:
    //   localStorage.setItem("error", JSON.stringify({ ...action?.data }));
    //   return { ...state, authData: action?.data };
    case authType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
