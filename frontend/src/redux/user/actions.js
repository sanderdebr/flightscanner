import Api from '../../utils/Api';
import userActionTypes from './types';

const {
  LOAD_USER,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} = userActionTypes;

const loadUser = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });

  try {
    const response = await Api.loadUser();

    if (!response.errors && response.displayName) {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: response.displayName,
      });
    } else {
      throw response.errors;
    }
  } catch (err) {
    dispatch({
      type: LOAD_USER_FAIL,
    });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });

  try {
    await Api.logoutUser();

    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: LOGOUT_USER_FAIL });
  }
};

export default loadUser;
