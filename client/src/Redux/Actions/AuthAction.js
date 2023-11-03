import axios from "axios";
import toastr from "toastr";
import * as api from "../../Api/Api";
import { authType, errorType } from "../ActionTypes";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: authType.AUTH, data });

    router.push("/");
  } catch (error) {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    if (error.message === "Request failed with status code 404") {
      toastr["error"](
        "User doesn't exist, check your email address and make sure you have been verified!",
        "No user found!"
      );
    } else if (error.message === "Request failed with status code 400") {
      toastr["error"](
        "You have not used valid credentials, please try again!",
        "Invalid Credentials!"
      );
    } else {
      console.error(JSON.stringify(error));
    }
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: authType.AUTH, data });

    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    toastr["success"](
      "Your registration is complete! Please check your email address for a verification code!",
      "Thank you!"
    );

    router.push("/auth");
  } catch (error) {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    if (error.message === "Request failed with status code 403") {
      toastr["error"]("Repeat Password has to match Password!", "No Match!");
    } else if (error.message === "Request failed with status code 409") {
      toastr["error"]("User already exists, try to login!", "User Exists!");
    } else {
      console.error(JSON.stringify(error));
    }
  }
};

export const loadUser = () => (dispatch, getState) => {
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
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(user);
    dispatch({ type: authType.USER_UPDATE, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
