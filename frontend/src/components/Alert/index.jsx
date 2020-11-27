import { Alert as AlertMUI } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';

const Alert = ({ alerts }) => {
  const classes = useStyles();

  return alerts.map(({ message, type, id }) => {
    return (
      <AlertMUI
        className={classes.alert}
        variant="filled"
        severity={type}
        key={id}
      >
        {message}
      </AlertMUI>
    );
  });
};

Alert.propTypes = {
  alerts: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);
