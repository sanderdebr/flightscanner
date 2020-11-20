import flightsActionTypes from './types';

const {
  GET_FLIGHTS,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_FAIL,
} = flightsActionTypes;

const INITIAL_STATE = {
  flights: [],
  loading: true,
  error: {},
};

const flightsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FLIGHTS:
      return { ...state, loading: true };
    case GET_FLIGHTS_SUCCESS:
      return { ...state, flights: payload, loading: false };
    case GET_FLIGHTS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        flights: null,
      };
    default:
      return state;
  }
};

export default flightsReducer;
