const BASE_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/';
const API_HOST =
  'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

export const getPlaces = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.API_KEY,
          'x-rapidapi-host': API_HOST,
        },
      },
    );
    const places = await response.json();

    if (places.Places) {
      return places;
    }

    throw places;
  } catch (errors) {
    return errors;
  }
};

export const getFlights = async () => {
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
    const flights = await response.json();

    if (flights.Places) {
      return flights;
    }

    throw flights;
  } catch (errors) {
    return errors;
  }
};
