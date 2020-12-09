import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

const Spinner = ({ color = 'secondary' }) => {
  return <CircularProgress color={color} />;
};

export default Spinner;
