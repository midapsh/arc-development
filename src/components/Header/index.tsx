import React, { useState, useCallback, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';

import logoIcon from '../../assets/logo.svg';

import { IRouteValueTotabPosition } from './types';
import { useStyles } from './styles';

const routeValueTotabPosition = {
  '/': 0,
  '/services': 1,
  '/revolution': 2,
  '/about-us': 3,
  '/contact-us': 4,
} as IRouteValueTotabPosition;

const Header: React.FC = () => {
  const classes = useStyles();
  const [tabPositionValue, setTabPositionValue] = useState(() => {
    return routeValueTotabPosition[window.location.pathname];
  });

  const handleTabPositionChange = useCallback(
    (
      event: React.ChangeEvent<Record<string, unknown>>,
      newTabPositionValue: number,
    ) => {
      setTabPositionValue(newTabPositionValue);
    },
    [],
  );

  useEffect(() => {
    setTabPositionValue(routeValueTotabPosition[window.location.pathname]);
  }, []);

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
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={RouterLink}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="Services"
                component={RouterLink}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="The Revolution"
                component={RouterLink}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={RouterLink}
                to="/about-us"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={RouterLink}
                to="/contact-us"
              />
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
