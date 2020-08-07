import React from 'react';

import { CssBaseline } from '@material-ui/core';

import Header from './components/ui/Header';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      Hello
    </>
  );
};

export default App;
