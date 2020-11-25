import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const PlacesListContent = ({
  places,
  show,
  loading,
  handleClick,
}) => {
  if (places.length > 0) {
    return places.map(({ PlaceName, PlaceId }) => (
      <ListItem
        button
        onClick={() => handleClick(PlaceName, PlaceId)}
        key={PlaceId}
      >
        <ListItemText primary={`${PlaceName} (${PlaceId})`} />
      </ListItem>
    ));
  }

  if (show) {
    return (
      <ListItem>{loading ? 'Searching...' : 'No results'}</ListItem>
    );
  }

  return null;
};

const PlacesList = ({
  order,
  places,
  setPlace,
  setPlaces,
  show,
  loading,
}) => {
  const classes = useStyles();

  // Set place as selected when user clicks on a place in the list
  const handleClick = (name, id) => {
    setPlace({ name, id });
    setPlaces([]);
  };

  return (
    <Box className={classes.box} style={{ left: `${order * 250}px` }}>
      <List component="nav">
        <PlacesListContent
          places={places}
          show={show}
          loading={loading}
          handleClick={handleClick}
        />
      </List>
    </Box>
  );
};

PlacesList.defaultProps = {
  setPlace: null,
};

PlacesListContent.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

PlacesList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  order: PropTypes.number.isRequired,
  setPlace: PropTypes.func,
  setPlaces: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PlacesList;
