import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider } from '@material-ui/core/styles';

const GlobalStyleProvider: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      {children}
    </StylesProvider>
  );
};

export default GlobalStyleProvider;
