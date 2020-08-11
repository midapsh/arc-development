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
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useTheme } from '@material-ui/core/styles';

import clsx from 'clsx';

import ElevationScroll from './ElevationScroll';

import logoIcon from '../../assets/logo.svg';

import { routeNameToPath } from '../../routes/constants';

import {
  TabNames,
  routeValueToTab,
  MenuNames,
  routeValueToMenu,
  ListNames,
  routeValueToList,
} from './constants';
import { useStyles, NO_ELEVATION, MENU_STYLE } from './styles';

const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const { pathname } = useLocation();

  const [
    anchorMenuElement,
    setAnchorMenuElement,
  ] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const listPositionValue = useMemo(() => {
    let location = routeValueToList.findIndex(
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

  const isBrowser = useCallback(() => {
    const hasWindow = () => {
      return typeof window !== 'undefined';
    };

    return hasWindow();
  }, []);

  const iOS = useMemo(() => {
    return isBrowser() && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }, [isBrowser]);

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

  const NavigationTabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={tabPositionValue}
        indicatorColor="primary"
      >
        <Tab
          component={RouterLink}
          className={classes.tab}
          value={TabNames.home}
          label={routeValueToTab[TabNames.home].label}
          to={routeValueToTab[TabNames.home].urlLocation}
        />
        <Tab
          component={RouterLink}
          className={classes.tab}
          value={TabNames.services}
          aria-owns={anchorMenuElement ? 'simple-menu' : undefined}
          aria-haspopup={anchorMenuElement ? 'true' : undefined}
          label={routeValueToTab[TabNames.services].label}
          onMouseOver={(event: MouseEvent<HTMLElement | null>) => {
            handleMouseOver(event);
          }}
          to={routeValueToTab[TabNames.services].urlLocation}
        />
        <Tab
          component={RouterLink}
          className={classes.tab}
          value={TabNames.revolution}
          label={routeValueToTab[TabNames.revolution].label}
          to={routeValueToTab[TabNames.revolution].urlLocation}
        />
        <Tab
          component={RouterLink}
          className={classes.tab}
          value={TabNames.aboutUs}
          label={routeValueToTab[TabNames.aboutUs].label}
          to={routeValueToTab[TabNames.aboutUs].urlLocation}
        />
        <Tab
          component={RouterLink}
          className={classes.tab}
          value={TabNames.contactUs}
          label={routeValueToTab[TabNames.contactUs].label}
          to={routeValueToTab[TabNames.contactUs].urlLocation}
        />
      </Tabs>
      <Button className={classes.button} variant="contained" color="secondary">
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        style={MENU_STYLE}
        classes={{ paper: classes.menuPaper }}
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
    </>
  );

  const NavigationDrawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.home}
            button
            divider
            to={routeValueToList[ListNames.home].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemSelected]:
                  listPositionValue === ListNames.home,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.home].label}
            </ListItemText>
          </ListItem>
          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.services}
            button
            to={routeValueToList[ListNames.services].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemSelected]:
                  listPositionValue === ListNames.services,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.services].label}
            </ListItemText>
          </ListItem>
          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.revolution}
            button
            to={routeValueToList[ListNames.revolution].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemSelected]:
                  listPositionValue === ListNames.revolution,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.revolution].label}
            </ListItemText>
          </ListItem>
          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.aboutUs}
            button
            to={routeValueToList[ListNames.aboutUs].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemSelected]:
                  listPositionValue === ListNames.aboutUs,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.aboutUs].label}
            </ListItemText>
          </ListItem>
          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.contactUs}
            button
            divider
            to={routeValueToList[ListNames.contactUs].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemSelected]:
                  listPositionValue === ListNames.contactUs,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.contactUs].label}
            </ListItemText>
          </ListItem>

          <ListItem
            component={RouterLink}
            selected={listPositionValue === ListNames.freeEstimate}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemEstimateSelected,
            }}
            button
            to={routeValueToList[ListNames.freeEstimate].urlLocation}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText
              className={clsx(classes.drawerItemText, {
                [classes.drawerItemEstimateSelected]:
                  listPositionValue === ListNames.freeEstimate,
              })}
              disableTypography
            >
              {routeValueToList[ListNames.freeEstimate].label}
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(previousState => !previousState)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              disableRipple
              component={RouterLink}
              to={routeNameToPath.homePage.path}
            >
              <img
                className={classes.logo}
                src={logoIcon}
                alt="Arc Development"
              />
            </Button>
            {matches ? NavigationDrawer : NavigationTabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
