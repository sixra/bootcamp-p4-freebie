import { authType } from '../ActionTypes';
import * as api from "../../Api/Api"
import axios from "axios";
import { errorType } from "../ActionTypes";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: authType.AUTH, data });

    router.push('/user');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: authType.AUTH, data });

    router.push('/auth');
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: authType.USER_LOADING });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: authType.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch((msg, status, id = null) => {
        return {
          type: errorType.GET_ERRORS,
          payload: { msg, status, id },
        };
      });
      dispatch({
        type: authType.AUTH_ERROR,
      });
    });
};

export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};