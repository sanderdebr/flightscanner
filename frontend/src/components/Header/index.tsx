import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/modal/actions';
import { RootState } from '../../redux/root-reducer';
import { User, LogoutUser } from '../../redux/user/types';
import Spinner from '../Spinner';
import useStyles from './styles';
import { Toggle } from '../../redux/modal/types';

interface HeaderProps {
  title: string;
  user: User;
  toggleModal: Toggle;
  logoutUser: LogoutUser;
}

const Header = ({
  title,
  user,
  toggleModal: toggleModalAction,
  logoutUser: logout,
}: HeaderProps) => {
  const classes: PropsClasses = useStyles();
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
          {loading && <Spinner />}
          {isAuthenticated && (
            <>
              <Typography variant="subtitle1" className={classes.displayName}>
                {displayName}
              </Typography>
              <Button color="inherit" variant="outlined" onClick={logout}>
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

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

export default connect(mapStateToProps, { toggleModal, logoutUser })(Header);
