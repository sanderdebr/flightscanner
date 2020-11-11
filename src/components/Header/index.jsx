import { Container, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const Header = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button color="inherit" variant="outlined">
          Login
        </Button>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
