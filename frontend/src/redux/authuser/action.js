import { POST_LOGIN_LOADING } from "./actionType";

export const loginUser = (userObj, navigate) => (dispatch) => {
  return dispatch({ type: POST_LOGIN_LOADING });
};
