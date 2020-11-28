import moment from 'moment';
import * as ApiConfig from '../config/api';

export default class SkyScannerApi {
  // Returns list of places based on input query
  static getPlaces = async (query) => {
    try {
      const response = await fetch(
        `${ApiConfig.API_BASE_URL}autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`,
        {
          method: 'GET',
          headers: ApiConfig.API_HEADERS,
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

  // Returns list of flights based on search query
  static getFlights = async (query) => {
    try {
      const from = query.fromPlace.id;
      const to = query.toPlace.id;
      const fromDate = moment(query.departDate).format('YYYY-MM-DD');
      const toDate = moment(query.toDate).format('YYYY-MM-DD');

      const response = await fetch(
        `${ApiConfig.API_BASE_URL}browsedates/v1.0/US/USD/en-US/${from}/${to}/${fromDate}?inboundpartialdate=${toDate}`,
        {
          method: 'GET',
          headers: ApiConfig.API_HEADERS,
        },
      );
      const data = await response.json();

      if (data.Quotes) {
        const flights = [];

        for (let i = 0; i < data.Quotes.length; i += 1) {
          flights.push({
            places: data.Places[i],
            quotes: data.Quotes[i],
            carriers: data.Carriers[i],
          });
        }

        return flights;
      }

      throw data;
    } catch (errors) {
      return errors;
    }
  };
}
