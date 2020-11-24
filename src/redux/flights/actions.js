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
    const [departFlights, returnFlights] = await Promise.all([
      Api.getFlights(query.departQuery),
      Api.getFlights(query.returnQuery),
    ]);

    if (departFlights.message) {
      throw new Error(departFlights.message);
    }

    if (returnFlights.message) {
      throw new Error(returnFlights.message);
    }

    if (departFlights.length === 0 && returnFlights.length === 0) {
      throw new Error('No flights found');
    }

    const flights = { departFlights, returnFlights };

    dispatch({
      type: GET_FLIGHTS_SUCCESS,
      payload: flights,
    });

    dispatch(saveSearch(query));
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_FLIGHTS_FAIL,
      payload: { msg: err, status: 'error' },
    });

    dispatch(setAlert(err.message, 'error'));
  }
};

export default getFlights;
