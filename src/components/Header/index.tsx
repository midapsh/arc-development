import React, { useState, useCallback } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@material-ui/core';

import ElevationScroll from './ElevationScroll';

import logoIcon from '../../assets/logo.svg';

import { IRouteValueToTab } from './types';
import { useStyles } from './styles';

const routeValueToTab = {
  '/': { position: 0, label: 'Home' },
  '/services': { position: 1, label: 'Services' },
  '/revolution': { position: 2, label: 'Revolution' },
  '/about-us': { position: 3, label: 'About Us' },
  '/contact-us': { position: 4, label: 'Contact Us' },
} as IRouteValueToTab;

const Header: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [tabPositionValue, setTabPositionValue] = useState(() => {
    return routeValueToTab[pathname].position;
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
              {Object.entries(routeValueToTab).map(([to, tab]) => {
                return (
                  <Tab
                    key={tab.position}
                    className={classes.tab}
                    label={tab.label}
                    component={RouterLink}
                    to={to}
                  />
                );
              })}
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
