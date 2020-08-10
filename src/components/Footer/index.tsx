import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Grid } from '@material-ui/core';

import footerAdornmentImage from '../../assets/Footer Adornment.svg';

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
      <img
        className={classes.footerAdornment}
        src={footerAdornmentImage}
        alt="Black Decorative"
      />
    </footer>
  );
};

export default Footer;
