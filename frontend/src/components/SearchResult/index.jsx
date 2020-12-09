import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

moment.locale('en-gb');

const SearchResult = ({ flight }) => {
  const classes = useStyles();

  const carrier = flight.carriers.Name;
  const quote = `$ ${flight.quotes.MinPrice}`;
  const dateTime = moment(
    flight.quotes.OutboundLeg.DepartureDate,
  ).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <Grid item md={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs>
            <ButtonBase className={classes.image}>
              {carrier}
            </ButtonBase>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.box}>
              <Typography gutterBottom variant="subtitle1">
                {dateTime}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={classes.box}>
              <Typography variant="h5" gutterBottom>
                {quote}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
              >
                Select
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

SearchResult.propTypes = {
  flight: PropTypes.instanceOf(Object).isRequired,
};

export default SearchResult;
