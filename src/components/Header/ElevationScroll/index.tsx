import React from 'react';
import { useScrollTrigger } from '@material-ui/core';

import { IProps } from './types';

const ElevationScroll: React.FC<IProps> = (props: IProps) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here in case you use in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
