import userActionTypes from './types';

const {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} = userActionTypes;

const INITIAL_STATE = {
  isAuthenticated: null,
  loading: false,
  displayName: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        displayName: payload,
      };
    case LOAD_USER_FAIL:
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        loading: false,
        displayName: null,
      };
    case LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
