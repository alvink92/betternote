import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const signup = newUser => dispatch => {
  return APIUtil.signup(newUser).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  );
};
