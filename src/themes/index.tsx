import React from 'react';

import { ThemeProvider } from '@material-ui/core';

import BaseTheme from './BaseTheme';

const BaseThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={BaseTheme}>{children}</ThemeProvider>;
};

export default BaseThemeProvider;
