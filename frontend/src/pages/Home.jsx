import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import SearchContainer from '../components/SearchContainer';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

const Home = () => {
  return (
    <>
      <SearchContainer>
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          gutterBottom
        >
          Let the journey begin
        </Typography>
        <SearchForm />
      </SearchContainer>
      <Container maxWidth="lg">
        <SearchResults />
      </Container>
    </>
  );
};

export default Home;
