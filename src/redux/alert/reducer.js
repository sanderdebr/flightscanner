import alertActionTypes from './types';

const { SET_ALERT, REMOVE_ALERT } = alertActionTypes;

const INITIAL_STATE = [];

const alertReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
