import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useGetPlaces from '../../hooks/useGetPlaces';
import PlacesList from '../PlacesList';

const PlaceAutoSuggest = ({ label, placeholder, order }) => {
  const [value, setValue] = useState('');

  const [fetchedPlaces, setFetchedPlaces] = useGetPlaces(value);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleFrom = (e) => {
    setSelectedPlace(null);
    setValue(e.target.value);
  };

  let selectedPlaceFull = selectedPlace || null;

  if (selectedPlaceFull) {
    const { name, id } = selectedPlaceFull;
    selectedPlaceFull = `${name} (${id})`;
  }

  return (
    <>
      <TextField
        id="standard-full-width"
        label={label}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedPlaceFull || value}
        onChange={handleFrom}
      />
      <PlacesList
        order={order}
        places={fetchedPlaces}
        setPlace={setSelectedPlace}
        setPlaces={setFetchedPlaces}
      />
    </>
  );
};

PlaceAutoSuggest.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default PlaceAutoSuggest;
