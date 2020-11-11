import flightActionTypes from './types';

const BASE_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/';
const API_HOST =
  'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

export const getFlights = () => async (dispatch) => {
  try {
    const response = await fetch(
      `${BASE_URL}browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-11-11?inboundpartialdate=2020-11-12`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      },
    );
    const data = await response.json();

    console.log(data);

    dispatch({
      type: flightActionTypes.GET_FLIGHTS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: flightActionTypes.GET_FLIGHTS_ERROR,
    });
  }
};

export default getFlights;
