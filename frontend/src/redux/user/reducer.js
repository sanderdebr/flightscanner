import userActionTypes from './types';

const { LOAD_USER } = userActionTypes;

const INITIAL_STATE = [];

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER:
      return [...state, payload];
    default:
      return state;
  }
};

export default userReducer;
