import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>Arc Development</Toolbar>
    </AppBar>
  );
};

export default Header;
