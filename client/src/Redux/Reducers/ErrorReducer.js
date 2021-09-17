import { errorType } from "../ActionTypes";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorType.GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };
    case errorType.CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
