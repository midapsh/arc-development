import React from 'react';
import Lottie from 'react-lottie';

import { defaultOptions } from './constants';

const LandingPage: React.FC = () => {
  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LandingPage;
