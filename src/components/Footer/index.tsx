import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Hidden } from '@material-ui/core';

import footerAdornmentImage from '../../assets/Footer Adornment.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';

import {
  routeValueToFirstGrid,
  routeValueToSecondGrid,
  routeValueToThirdGrid,
  routeValueToFourthGrid,
  routeValueToFifthGrid,
} from './constants';
import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();
  const columnSpacing = 2;

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
          spacing={10}
        >
          <Grid item>
            <Grid container direction="column" spacing={columnSpacing}>
              {routeValueToFirstGrid.map(({ urlLocation, label }) => {
                return (
                  <Grid
                    key={label}
                    item
                    className={classes.link}
                    component={RouterLink}
                    to={urlLocation}
                  >
                    {label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={columnSpacing}>
              {routeValueToSecondGrid.map(({ urlLocation, label }) => {
                return (
                  <Grid
                    key={label}
                    item
                    className={classes.link}
                    component={RouterLink}
                    to={urlLocation}
                  >
                    {label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={columnSpacing}>
              {routeValueToThirdGrid.map(({ urlLocation, label }) => {
                return (
                  <Grid
                    key={label}
                    item
                    className={classes.link}
                    component={RouterLink}
                    to={urlLocation}
                  >
                    {label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={columnSpacing}>
              {routeValueToFourthGrid.map(({ urlLocation, label }) => {
                return (
                  <Grid
                    key={label}
                    item
                    className={classes.link}
                    component={RouterLink}
                    to={urlLocation}
                  >
                    {label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={columnSpacing}>
              {routeValueToFifthGrid.map(({ urlLocation, label }) => {
                return (
                  <Grid
                    key={label}
                    item
                    className={classes.link}
                    component={RouterLink}
                    to={urlLocation}
                  >
                    {label}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.footerAdornment}
        src={footerAdornmentImage}
        alt="Black Decorative"
      />
      <Grid
        container
        className={classes.socialContainer}
        justify="flex-end"
        spacing={2}
      >
        <Grid
          item
          component="a"
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebookIcon} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitterIcon} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagramIcon} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
