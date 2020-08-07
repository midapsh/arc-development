import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useScrollTrigger,
  Button,
} from '@material-ui/core';

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
  const [tabPositionValue, setTabPositionValue] = useState(0);

  const handleTabPositionChange = useCallback(
    (
      event: React.ChangeEvent<Record<string, unknown>>,
      newTabPositionValue: number,
    ) => {
      setTabPositionValue(newTabPositionValue);
    },
    [],
  );

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
            <Tabs
              className={classes.tabContainer}
              value={tabPositionValue}
              onChange={handleTabPositionChange}
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
