import flightsActionTypes from './types';

const INITIAL_STATE = {};

const flightsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case flightsActionTypes.SET_SEARCH:
      return { ...state, payload };
    default:
      return state;
  }
};

export default flightsReducer;
