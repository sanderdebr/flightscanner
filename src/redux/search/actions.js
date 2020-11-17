import searchActionTypes from './types';

const { SAVE_SEARCH } = searchActionTypes;

const saveSearch = (query) => (dispatch) => {
  dispatch({
    type: SAVE_SEARCH,
    payload: query,
  });
};

export default saveSearch;
