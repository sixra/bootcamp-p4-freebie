import { errorType } from "../ActionTypes";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
  return {
    type: errorType.GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: errorType.CLEAR_ERRORS,
  };
};
