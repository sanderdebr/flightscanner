import Api from '../../utils/Api';
import userActionTypes from './types';

const { LOAD_USER_SUCCESS, LOAD_USER_FAIL } = userActionTypes;

const loadUser = () => async (dispatch) => {
  console.log('berend');
  try {
    const response = await Api.loadUser();
    console.log(response);

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: response,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export default loadUser;
