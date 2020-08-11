import React from 'react';

import Lottie from 'react-lottie';
import { Grid, Button, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { defaultOptions } from './constants';
import { useStyles } from './styles';

const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item>
            <Typography variant="h2" align="center">
              Bringing West Coast Tecnology
              <br />
              to the Midwest
            </Typography>
            <Grid container justify="center">
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More
                  <ArrowForwardIcon
                    width={30}
                    height={30}
                    style={{ color: red[500] }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie height="100%" width="100%" options={defaultOptions} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
