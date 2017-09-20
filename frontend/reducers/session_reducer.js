import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return { currentUser };
    default:
      return state;
  }
};

export default sessionReducer;
