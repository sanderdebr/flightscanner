import { Box, Button } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './styles';

const SearchResult = ({ flight }) => {
  const classes = useStyles();

  console.log(flight);

  const carrier = flight.carriers.Name;
  const quote = `$ ${flight.quotes.MinPrice}`;

  return (
    <Grid item md={6}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {carrier}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Remove</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                style={{ height: '100%' }}
              >
                <Typography variant="h5" gutterBottom>
                  {quote}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Select
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

SearchResult.propTypes = {
  flight: PropTypes.instanceOf(Object).isRequired,
};

export default SearchResult;
