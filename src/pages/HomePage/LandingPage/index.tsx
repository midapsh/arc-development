import React from 'react';

import Lottie from 'react-lottie';
import { Grid, Button, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { defaultOptions } from './constants';
import { useStyles } from './styles';

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container className={classes.mainContainer} direction="column">
      <Grid item>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Tecnology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              className={classes.buttonContainer}
              justify="center"
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnButtonHero} variant="outlined">
                  Learn More
                  <ArrowForwardIcon
                    width={30}
                    height={30}
                    style={{ color: theme.palette.primary.main }}
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
