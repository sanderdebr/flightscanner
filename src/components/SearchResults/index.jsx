import { Container } from '@material-ui/core';
import React from 'react';

const Flight = () => {
  return <h2>Flight</h2>;
};

const SearchResults = () => {
  const flights = [1, 2, 3];

  return (
    <Container maxWidth="lg">
      {flights && flights.map((flight) => <Flight flight={flight} />)}
    </Container>
  );
};

export default SearchResults;
