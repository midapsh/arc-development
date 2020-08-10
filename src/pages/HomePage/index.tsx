import React from 'react';

import { Grid } from '@material-ui/core';

import LandingPage from './LandingPage';

import { dummy } from './types';
import { useStyles } from './styles';

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ height: 685 }}>
        <LandingPage />
      </div>
    </>
  );
};

export default HomePage;
