import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';
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
  places,
  setPlace,
  setPlaces,
  show,
  loading,
  position,
}) => {
  const classes = useStyles();

  // Set place as selected when user clicks on a place in the list
  const handleClick = (name, id) => {
    setPlace({ name, id });
    setPlaces([]);
  };

  return (
    <Paper
      className={classes.box}
      style={{ top: position.top, left: position.left }}
    >
      <List component="nav">
        <PlacesListContent
          places={places}
          show={show}
          loading={loading}
          handleClick={handleClick}
        />
      </List>
    </Paper>
  );
};

PlacesList.defaultProps = {
  setPlace: null,
  position: { top: 0, left: 0 },
};

PlacesListContent.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

PlacesList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  setPlace: PropTypes.func,
  setPlaces: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  position: PropTypes.instanceOf(Object),
};

export default PlacesList;
