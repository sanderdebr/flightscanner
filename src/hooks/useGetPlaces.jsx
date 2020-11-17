import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

const useGetPlaces = (from, delay = 500) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [throttle, setThrottle] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(async () => {
    if (from.length > 3 && from.length < 100 && !throttle) {
      setLoading(true);
      setThrottle(true);
      setTimeout(() => setThrottle(false), delay);

      const response = await Api.getPlaces(from);
      setLoading(false);

      if (!response.message && response.Places) {
        setPlaces(response.Places);
      } else {
        setError('Something went wrong');
      }
    } else {
      setPlaces([]);
    }
  }, [from]);

  if (error) return error;

  return [places, setPlaces, loading];
};

export default useGetPlaces;
