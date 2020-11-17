import MomentUtils from '@date-io/moment';
import { Button, Paper } from '@material-ui/core';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getFlights } from '../../redux/flights/actions';
import PlaceAutoSuggest from '../PlaceAutoSuggest';
import useStyles from './styles';

const SearchForm = ({ getFlights: getFlightsAction }) => {
  const classes = useStyles();

  const [departDate, handleDepartChange] = useState(moment());
  const [returnDate, handleReturnChange] = useState(moment());

  // After choosing fetched from and to address, store in state with new search reducer
  // Use stored addresses for the flights reducer

  return (
    <Paper className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <PlaceAutoSuggest
          label="From"
          placeholder="Amsterdam"
          order={0}
        />
        <PlaceAutoSuggest
          label="To"
          placeholder="Stockholm"
          order={1}
        />
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            label="Depart"
            value={departDate}
            onChange={handleDepartChange}
          />
          <DatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            label="Return"
            value={returnDate}
            onChange={handleReturnChange}
          />
          <Button
            onClick={() => getFlightsAction()}
            variant="contained"
            color="primary"
            size="large"
          >
            Search flights
          </Button>
        </MuiPickersUtilsProvider>
      </form>
    </Paper>
  );
};

SearchForm.propTypes = {
  getFlights: PropTypes.func.isRequired,
};

export default connect(null, { getFlights })(SearchForm);
