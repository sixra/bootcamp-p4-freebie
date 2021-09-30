import { authType } from '../ActionTypes';
import * as api from "../../Api/Api"
import axios from "axios";
import { errorType } from "../ActionTypes";
import toastr from "toastr";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: authType.AUTH, data });

    router.push('/user');
  } catch (error) {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    if(error.message === "Request failed with status code 404"){
      toastr["error"]("User doesn't exist, check your email address and make sure you have been verified!", "No user found!")
      console.log("FAILURE");
      } else if(error.message === "Request failed with status code 400"){
        toastr["error"]("You have not used valid credentials, please try again!", "Invalid Credentials!")
        console.log("FAILURE");
      }else {
        console.log(JSON.stringify(error));
      }
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: authType.AUTH, data });

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "0",
      "extendedTimeOut": "0",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    toastr["success"]("Your registration is complete! Please check your email address for a verification code!", "Thank you!")
    console.log("SUCCESS! EMAIL SENT");

    router.push('/auth');
  } catch (error) {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": false,
      "progressBar": true,
      "positionClass": "toast-top-center",
      "preventDuplicates": true,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "0",
      "extendedTimeOut": "0",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
    if(error.message === "Request failed with status code 403"){
    toastr["error"]("Repeat Password has to match Password!", "No Match!")
    console.log("FAILURE RE-PASSWORD");
    } else if(error.message === "Request failed with status code 409"){
      toastr["error"]("User already exists, try to login!", "User Exists!")
      console.log("FAILURE USER EXISTS");
    }else {
      console.log(JSON.stringify(error));
    }
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