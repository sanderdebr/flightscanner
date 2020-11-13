import { useState } from 'react';

const useGetPlaces = (initialValue = '') => {
  const [place, setPlace] = useState(initialValue);

  const getPlaces = (e) => {
    // Fetch places API here every 500ms for example after minimal 3 and maximum 200 char
    // After choosing fetched from and to address, store in state with new search reducer
    // Use stored addresses for the flights reducer
    setPlace('resultFromQuery');
  };

  return [place, getPlaces];
};

export default useGetPlaces;
