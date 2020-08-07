import React, { useState, useCallback } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';

import logoIcon from '../../assets/logo.svg';

import { IRouteValueToTabPosition } from './types';
import { useStyles } from './styles';

const routeValueToTabPosition = {
  '/': 0,
  '/services': 1,
  '/revolution': 2,
  '/about-us': 3,
  '/contact-us': 4,
} as IRouteValueToTabPosition;

const Header: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [tabPositionValue, setTabPositionValue] = useState(() => {
    return routeValueToTabPosition[pathname];
  });

  const handleTabPositionChange = useCallback((newTabPositionValue: number) => {
    setTabPositionValue(newTabPositionValue);
  }, []);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              disableRipple
              component={RouterLink}
              to="/"
            >
              <img
                className={classes.logo}
                src={logoIcon}
                alt="Arc Development"
              />
            </Button>
            <Tabs
              className={classes.tabContainer}
              value={tabPositionValue}
              onChange={(event, newTabPositionValue) => {
                handleTabPositionChange(newTabPositionValue);
              }}
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
