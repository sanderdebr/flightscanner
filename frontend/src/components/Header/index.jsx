import { Container, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
import useStyles from './styles';

const Header = ({ title, toggleModal: toggleModalAction }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="lg" className={classes.container}>
        <FlightTakeoffIcon />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          onClick={toggleModalAction}
        >
          Login
        </Button>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(null, { toggleModal })(Header);
