import React, { useState, useCallback, MouseEvent, useMemo } from 'react';
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

import {
  TabNames,
  routeValueToTab,
  MenuNames,
  routeValueToMenu,
} from './constants';
import { useStyles, NO_ELEVATION } from './styles';

const Header: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const [
    anchorMenuElement,
    setAnchorMenuElement,
  ] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const tabPositionValue = useMemo(() => {
    let location = routeValueToTab.findIndex(
      ({ urlLocation }) => pathname === urlLocation,
    );

    if (location > -1) {
      return location;
    }

    location = routeValueToMenu.findIndex(
      ({ urlLocation }) => pathname === urlLocation,
    );

    if (location > -1) {
      return TabNames.services;
    }
    return 0;
  }, [pathname]);

  const selectedIndex = useMemo(() => {
    const location = routeValueToMenu.findIndex(
      ({ urlLocation }) => pathname === urlLocation,
    );

    return location;
  }, [pathname]);

  const handleMouseOver = useCallback(
    (event: MouseEvent<HTMLElement | null>) => {
      setAnchorMenuElement(event.currentTarget);
      setOpenMenu(true);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setAnchorMenuElement(null);
    setOpenMenu(false);
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
                aria-owns={anchorMenuElement ? 'simple-menu' : undefined}
                aria-haspopup={anchorMenuElement ? 'true' : undefined}
                label={routeValueToTab[TabNames.services].label}
                component={RouterLink}
                onMouseOver={(event: MouseEvent<HTMLElement | null>) => {
                  handleMouseOver(event);
                }}
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
            <Menu
              id="simple-menu"
              classes={{ paper: classes.menu }}
              elevation={NO_ELEVATION}
              anchorEl={anchorMenuElement}
              open={openMenu}
              onClose={() => handleClose()}
              MenuListProps={{
                onMouseLeave: () => handleClose(),
              }}
            >
              {/* TODO: Move down menu to let services free */}
              <MenuItem
                classes={{ root: classes.menuItem }}
                selected={
                  tabPositionValue === TabNames.services && selectedIndex === -1
                }
                onClick={() => handleClose()}
                component={RouterLink}
                to={routeValueToTab[TabNames.services].urlLocation}
              >
                {routeValueToTab[TabNames.services].label}
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                selected={selectedIndex === MenuNames.customSoftware}
                onClick={() => handleClose()}
                component={RouterLink}
                to={routeValueToMenu[MenuNames.customSoftware].urlLocation}
              >
                {routeValueToMenu[MenuNames.customSoftware].label}
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                selected={selectedIndex === MenuNames.mobileApps}
                onClick={() => handleClose()}
                component={RouterLink}
                to={routeValueToMenu[MenuNames.mobileApps].urlLocation}
              >
                {routeValueToMenu[MenuNames.mobileApps].label}
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                selected={selectedIndex === MenuNames.websites}
                onClick={() => handleClose()}
                component={RouterLink}
                to={routeValueToMenu[MenuNames.websites].urlLocation}
              >
                {routeValueToMenu[MenuNames.websites].label}
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
