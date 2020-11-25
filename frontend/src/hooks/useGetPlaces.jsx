import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

const useGetPlaces = (place, delay = 400) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [throttle, setThrottle] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(async () => {
    if (place.length > 3 && place.length < 100 && !throttle) {
      setLoading(true);
      setThrottle(true);
      setTimeout(() => setThrottle(false), delay);

      const response = await Api.getPlaces(place);
      setLoading(false);

      if (!response.message && response.Places) {
        setPlaces(response.Places);
      } else {
        setError('Something went wrong');
      }
    } else {
      setThrottle(false);
      setPlaces([]);
    }
  }, [place]);

  if (error) return error;

  return [places, setPlaces, loading];
};

export default useGetPlaces;
