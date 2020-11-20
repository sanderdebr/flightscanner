import { Box, Button, Grid, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import SearchResult from '../SearchResult';
import useStyles from './styles';

const SearchResults = ({ search, flights, loading }) => {
  const classes = useStyles();

  let fromPlace;
  let toPlace;
  let showResults;

  if (search.length > 0) {
    showResults = true;
    fromPlace = search[search.length - 1].fromPlace.name;
    toPlace = search[search.length - 1].toPlace.name;
  }

  return showResults ? (
    <Grid container spacing={3}>
      <Grid item container>
        <Grid item xs={12} sm={10}>
          <Box display="flex" alignItems="center">
            <Typography
              component="h3"
              variant="h5"
              className={classes.placeTitle}
            >
              {loading ? <Skeleton variant="text" /> : fromPlace}
            </Typography>
            <Box mx={2}>
              <ArrowForwardIcon color="primary" />
            </Box>
            <Typography
              component="h3"
              variant="h5"
              className={classes.placeTitle}
            >
              {loading ? <Skeleton variant="text" /> : toPlace}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button variant="contained" color="primary" size="large">
              Save flights
            </Button>
          </Box>
        </Grid>
      </Grid>
      {loading ? (
        <Grid item xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
          >
            <CircularProgress color="primary" />
          </Box>
        </Grid>
      ) : (
        flights &&
        flights.map((flight) => (
          <SearchResult key={uuid()} flight={flight} />
        ))
      )}
    </Grid>
  ) : (
    ''
  );
};

SearchResults.defaultProps = {
  flights: [],
  search: [],
  loading: false,
};

SearchResults.propTypes = {
  search: PropTypes.instanceOf(Array),
  flights: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  search: state.search,
  flights: state.flights.flights,
  loading: state.flights.loading,
});

export default connect(mapStateToProps)(SearchResults);
