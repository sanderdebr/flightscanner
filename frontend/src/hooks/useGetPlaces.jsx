import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

// Custom hook that returns a list of places based on search input
// Calls API on each throttled request

const useGetPlaces = (place, delay = 400) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [throttle, setThrottle] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(async () => {
    // Check if input is between 3 and 100 chars
    // Check throttle (delay)
    if (place.length > 3 && place.length < 100 && !throttle) {
      // Set loading and throttle on
      setLoading(true);
      setThrottle(true);
      // Set throttle of after set delay
      setTimeout(() => setThrottle(false), delay);

      // Wait for API places response
      const response = await Api.getPlaces(place);
      setLoading(false);

      // Check if response contains places array
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
