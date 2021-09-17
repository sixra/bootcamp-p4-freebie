import { authType } from "../ActionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authType.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case authType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case authType.LOGIN_SUCCESS:
    case authType.REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case authType.AUTH_ERROR:
    case authType.LOGIN_FAIL:
    case authType.LOGOUT_SUCCESS:
    case authType.REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
