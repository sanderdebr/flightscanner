import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

const useSetPlaces = (from) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(async () => {
    if (from.length > 3 && from.length < 100 && !throttle) {
      setThrottle(true);
      setTimeout(() => setThrottle(false), 500);

      const response = await Api.getPlaces(from);

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

  return [selectedPlace, setSelectedPlace];
};

export default useSetPlaces;
