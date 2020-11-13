import { API_HOST, BASE_URL } from '../../config/skyScannerApi';
import setAlert from '../alert/actions';
import flightActionTypes from './types';

const { GET_FLIGHTS_SUCCESS, GET_FLIGHTS_FAIL } = flightActionTypes;

// Get flights based on search query
export const getFlights = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${BASE_URL}browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-11-16?inboundpartialdate=2020-11-16`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      },
    );
    const data = await response.json();

    if (data.errors) {
      throw data.errors;
    } else {
      dispatch({
        type: GET_FLIGHTS_SUCCESS,
        payload: data,
      });
    }
  } catch (errors) {
    dispatch(setAlert(errors[0], 'error'));

    dispatch({
      type: GET_FLIGHTS_FAIL,
    });
  }
};

export default getFlights;
