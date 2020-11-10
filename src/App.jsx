import { orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Header from './Header';
import SearchContainer from './SearchContainer';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

export default function Blog() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header title="FlightScanner" />
        <SearchContainer post={mainFeaturedPost}>
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
