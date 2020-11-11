import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

export default function SearchContainer(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Container maxWidth="lg">
        <div className={classes.content}>{children}</div>
      </Container>
    </Paper>
  );
}

SearchContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
