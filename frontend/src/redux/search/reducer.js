import searchActionTypes from './types';

const { SAVE_SEARCH } = searchActionTypes;

const INITIAL_STATE = [];

const searchReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SEARCH:
      return [...state, payload];
    default:
      return state;
  }
};

export default searchReducer;
