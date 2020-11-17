import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const PlacesList = ({ order, places, setPlace, setPlaces }) => {
  const classes = useStyles();

  const handleClick = (name, id) => {
    setPlace({ name, id });
    setPlaces([]);
  };

  return (
    <Box className={classes.box} style={{ left: `${order * 250}px` }}>
      <List component="nav">
        {places?.map(({ PlaceName, PlaceId }) => (
          <ListItem
            button
            onClick={() => handleClick(PlaceName, PlaceId)}
          >
            <ListItemText primary={`${PlaceName} (${PlaceId})`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

PlacesList.defaultProps = {
  setPlace: null,
};

PlacesList.propTypes = {
  places: PropTypes.instanceOf(Array).isRequired,
  order: PropTypes.number.isRequired,
  setPlace: PropTypes.func,
  setPlaces: PropTypes.func.isRequired,
};

export default PlacesList;
