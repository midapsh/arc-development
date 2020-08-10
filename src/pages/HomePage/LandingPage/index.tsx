import React from 'react';

import Lottie from 'react-lottie';
import { Grid } from '@material-ui/core';

import { defaultOptions } from './constants';
import { useStyles } from './styles';

const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <summary>
              Bringing West Coast Tecnology
              <br />
              to the Midwest
            </summary>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={400} width={400} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
