import React from 'react';
import Lottie from 'react-lottie';

import { defaultOptions } from './constants';
import { dummy } from './types';
import { useStyles } from './styles';

const LandingPage: React.FC = () => {
  const classes = useStyles();

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LandingPage;
