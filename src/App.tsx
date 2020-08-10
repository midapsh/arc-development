import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyleProvider from './styles/global';
import BaseThemeProvider from './themes';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <GlobalStyleProvider>
      <BaseThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </BaseThemeProvider>
    </GlobalStyleProvider>
  );
};

export default App;
