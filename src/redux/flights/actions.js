import * as Api from '../../utils/SkyScannerApi';
import { setAlert } from '../alert/actions';
import saveSearch from '../search/actions';
import flightActionTypes from './types';

const {
  GET_FLIGHTS,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_FAIL,
} = flightActionTypes;

// Get flights based on search query
export const getFlights = (query) => async (dispatch) => {
  dispatch({ type: GET_FLIGHTS });

  try {
    const response = await Api.getFlights(query);

    if (response.errors) {
      throw response.errors[0];
    }

    dispatch({
      type: GET_FLIGHTS_SUCCESS,
      payload: response,
    });

    dispatch(saveSearch(query));
  } catch (err) {
    dispatch({
      type: GET_FLIGHTS_FAIL,
      payload: { msg: err, status: 'error' },
    });

    dispatch(setAlert(err, 'error'));
  }
};

export default getFlights;
