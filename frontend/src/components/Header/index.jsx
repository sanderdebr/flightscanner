import { Box, Container, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
import { logoutUser } from '../../redux/user/actions';
import useStyles from './styles';

const Header = ({
  title,
  user,
  toggleModal: toggleModalAction,
  logoutUser: logout,
}) => {
  const classes = useStyles();
  const { isAuthenticated, loading, displayName } = user;

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="lg" className={classes.container}>
        <Box display="flex" alignItems="center">
          <FlightTakeoffIcon />
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          {loading && (
            <CircularProgress
              color="secondary"
              className={classes.loading}
            />
          )}
          {isAuthenticated && (
            <>
              <Typography
                variant="subtitle1"
                className={classes.displayName}
              >
                {displayName}
              </Typography>
              <Button
                color="inherit"
                variant="outlined"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
          {!loading && !isAuthenticated && (
            <Button
              color="inherit"
              variant="outlined"
              onClick={toggleModalAction}
            >
              Login
            </Button>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  toggleModal: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { toggleModal, logoutUser })(
  Header,
);
