import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import useGetPlaces from '../../hooks/useGetPlaces';
import PlacesList from '../PlacesList';

const PlaceAutoSuggest = ({
  label,
  placeholder,
  selectedPlace,
  setSelectedPlace,
}) => {
  const [value, setValue] = useState('');

  // Get list of places from custom hook that fetches API data
  const [fetchedPlaces, setFetchedPlaces, loading] = useGetPlaces(
    value,
  );

  // When user types in field, remove any selected place
  const handleChange = (e) => {
    setSelectedPlace(null);
    setValue(e.target.value);
  };

  let selectedPlaceFull = selectedPlace || null;

  // If user has selected a place, destructure its data
  if (selectedPlaceFull) {
    const { name, id } = selectedPlaceFull;
    selectedPlaceFull = `${name} (${id})`;
  }

  // Get absolute position of element, for position results list on correct place
  const textfield = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    const { top, left } = textfield.current.getBoundingClientRect();
    setPosition({ top, left });
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <>
      <TextField
        ref={textfield}
        label={label}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedPlaceFull || value}
        onChange={handleChange}
      />
      <PlacesList
        places={fetchedPlaces}
        setPlace={setSelectedPlace}
        setPlaces={setFetchedPlaces}
        show={value.length > 3 && !selectedPlace}
        loading={loading}
        position={position}
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
  selectedPlace: PropTypes.instanceOf(Object),
  setSelectedPlace: PropTypes.func,
};

export default PlaceAutoSuggest;
