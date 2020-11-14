import setAlert from '../alert/actions';
import flightActionTypes from './types';

import * as Api from '../../utils/SkyScannerApi';

const { GET_FLIGHTS_SUCCESS, GET_FLIGHTS_FAIL } = flightActionTypes;

// Get flights based on search query
export const getFlights = () => async (dispatch) => {
  const response = await Api.getFlights();

  if (!response.errors && !response.message) {
    dispatch(setAlert('Success!', 'success'));

    dispatch({
      type: GET_FLIGHTS_SUCCESS,
      payload: response,
    });
  } else {
    dispatch(setAlert(response.errors, 'error'));

    dispatch({
      type: GET_FLIGHTS_FAIL,
    });
  }
};

export default getFlights;
