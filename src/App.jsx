import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

export default function Blog() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="FlightScanner" />
        <SearchContainer>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            Let the journey begin
          </Typography>
          {/* <Search /> */}
        </SearchContainer>
      </ThemeProvider>
    </>
  );
}
