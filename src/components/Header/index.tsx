import React, { useState, useCallback, MouseEvent } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';

import ElevationScroll from './ElevationScroll';

import logoIcon from '../../assets/logo.svg';

import { IRouteValueToTabItem } from './types';
import { useStyles } from './styles';

enum TabNames {
  home,
  services,
  revolution,
  aboutUs,
  contactUs,
}

const routeValueToTab = [
  { urlLocation: '/', label: 'Home' },
  { urlLocation: '/services', label: 'Services' },
  { urlLocation: '/revolution', label: 'Revolution' },
  { urlLocation: '/about-us', label: 'About Us' },
  { urlLocation: '/contact-us', label: 'Contact Us' },
] as IRouteValueToTabItem[];

const Header: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [tabPositionValue, setTabPositionValue] = useState(() => {
    const location = routeValueToTab.findIndex(
      ({ urlLocation }) => pathname === urlLocation,
    );

    if (location >= -1) {
      return location;
    }
    return 0;
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleTabPositionChange = useCallback((newTabPositionValue: number) => {
    setTabPositionValue(newTabPositionValue);
  }, []);

  const handleClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
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
                value={TabNames.home}
                label={routeValueToTab[TabNames.home].label}
                component={RouterLink}
                to={routeValueToTab[TabNames.home].urlLocation}
              />
              <Tab
                className={classes.tab}
                value={TabNames.services}
                label={routeValueToTab[TabNames.services].label}
                component={RouterLink}
                to={routeValueToTab[TabNames.services].urlLocation}
              />
              <Tab
                className={classes.tab}
                value={TabNames.revolution}
                label={routeValueToTab[TabNames.revolution].label}
                component={RouterLink}
                to={routeValueToTab[TabNames.revolution].urlLocation}
              />
              <Tab
                className={classes.tab}
                value={TabNames.aboutUs}
                label={routeValueToTab[TabNames.aboutUs].label}
                component={RouterLink}
                to={routeValueToTab[TabNames.aboutUs].urlLocation}
              />
              <Tab
                className={classes.tab}
                value={TabNames.contactUs}
                label={routeValueToTab[TabNames.contactUs].label}
                component={RouterLink}
                to={routeValueToTab[TabNames.contactUs].urlLocation}
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
