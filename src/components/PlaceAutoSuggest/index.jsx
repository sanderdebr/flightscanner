import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useGetPlaces from '../../hooks/useGetPlaces';
import PlacesList from '../PlacesList';

const PlaceAutoSuggest = ({
  label,
  placeholder,
  order,
  selectedPlace,
  setSelectedPlace,
}) => {
  const [value, setValue] = useState('');

  const [fetchedPlaces, setFetchedPlaces, loading] = useGetPlaces(
    value,
  );

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
        show={value.length > 3 && !selectedPlace}
        loading={loading}
      />
    </>
  );
};

PlaceAutoSuggest.defaultProps = {
  selectedPlace: null,
  setSelectedPlace: null,
};

PlaceAutoSuggest.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  selectedPlace: PropTypes.instanceOf(Object),
  setSelectedPlace: PropTypes.func,
};

export default PlaceAutoSuggest;
