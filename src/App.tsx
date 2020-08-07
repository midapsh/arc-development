import React from 'react';

import GlobalStyleProvider from './styles/global';
import BaseThemeProvider from './themes';

import Header from './components/ui/Header';

const App: React.FC = () => {
  return (
    <GlobalStyleProvider>
      <BaseThemeProvider>
        <Header />
        Hello
      </BaseThemeProvider>
    </GlobalStyleProvider>
  );
};

export default App;
