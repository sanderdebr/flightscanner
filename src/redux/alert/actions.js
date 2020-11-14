import { v4 as uuid } from 'uuid';
import alertActionTypes from './types';

const { SET_ALERT, REMOVE_ALERT } = alertActionTypes;

const setAlert = (message, type, timeout = 2500) => (dispatch) => {
  const id = uuid();

  dispatch({
    type: SET_ALERT,
    payload: { message, type, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout,
  );
};

export default setAlert;
