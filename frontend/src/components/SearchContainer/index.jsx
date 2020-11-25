import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const SearchContainer = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container maxWidth="lg">{children}</Container>
    </Paper>
  );
};

SearchContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContainer;
