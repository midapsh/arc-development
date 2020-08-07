import React from 'react';

import GlobalStyleProvider from './styles/global';
import BaseThemeProvider from './themes';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <GlobalStyleProvider>
      <BaseThemeProvider>
        <Routes />
      </BaseThemeProvider>
    </GlobalStyleProvider>
  );
};

export default App;
