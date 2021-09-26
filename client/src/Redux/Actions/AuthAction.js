import { authType } from '../ActionTypes';
import * as api from "../../Api/Api"

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: authType.AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: authType.AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
