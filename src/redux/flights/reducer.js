import flightsActionTypes from './types';

const { GET_FLIGHTS_SUCCESS } = flightsActionTypes;

const INITIAL_STATE = {};

const flightsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FLIGHTS_SUCCESS:
      return { ...state, flights: payload };
    default:
      return state;
  }
};

export default flightsReducer;
