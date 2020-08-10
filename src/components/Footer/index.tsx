import React from 'react';

import footerAdornmentImage from '../../assets/Footer Adornment.svg';

import { dummy } from './types';
import { useStyles } from './styles';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        className={classes.footerAdornment}
        src={footerAdornmentImage}
        alt="Black Decorative"
      />
    </footer>
  );
};

export default Footer;
