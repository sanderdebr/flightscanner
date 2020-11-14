import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

const useGetPlaces = (from) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(async () => {
    // Fetch places API here every 500ms for example after minimal 3 and maximum 200 char
    // After choosing fetched from and to address, store in state with new search reducer
    // Use stored addresses for the flights reducer

    if (from.length > 3 && from.length < 100) {
      const response = await Api.getPlaces(from);

      if (!response.message && response.Places) {
        setPlaces(response.Places);
      } else {
        setError('Nothing found');
      }
    }
  }, [from]);

  if (loading) return loading;
  if (error) return error;

  return places;
};

export default useGetPlaces;
