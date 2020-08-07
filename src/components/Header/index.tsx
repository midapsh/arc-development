import React from 'react';
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';

import logoIcon from '../../assets/logo.svg';

import { IProps } from './types';
import { useStyles } from './styles';

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

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img
              className={classes.logo}
              src={logoIcon}
              alt="Arc Development"
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
