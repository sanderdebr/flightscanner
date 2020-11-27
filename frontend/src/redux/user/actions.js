import userActionTypes from './types';

const { LOAD_USER } = userActionTypes;

const loadUser = (query) => (dispatch) => {
  dispatch({
    type: LOAD_USER,
    payload: query,
  });
};

export default loadUser;
