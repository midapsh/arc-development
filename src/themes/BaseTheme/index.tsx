import { CSSProperties } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: {
      common: {
        blue: CSSProperties['color'];
        orange: CSSProperties['color'];
      };
    };
    customTypography: {
      tab: {
        textTransform: CSSProperties['textTransform'];
        fontFamily: CSSProperties['fontFamily'];
        fontWeight: CSSProperties['fontWeight'];
        fontSize: CSSProperties['fontSize'];
      };
      estimate: {
        fontFamily: CSSProperties['fontFamily'];
        fontSize: CSSProperties['fontSize'];
        textTransform: CSSProperties['textTransform'];
        color: CSSProperties['color'];
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette?: {
      common?: {
        blue?: CSSProperties['color'];
        orange?: CSSProperties['color'];
      };
    };
    customTypography?: {
      tab?: {
        textTransform?: CSSProperties['textTransform'];
        fontFamily?: CSSProperties['fontFamily'];
        fontWeight?: CSSProperties['fontWeight'];
        fontSize?: CSSProperties['fontSize'];
      };
      estimate?: {
        fontFamily?: CSSProperties['fontFamily'];
        fontSize?: CSSProperties['fontSize'];
        textTransform?: CSSProperties['textTransform'];
        color?: CSSProperties['color'];
      };
    };
  }
}

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

const BaseThemeProvider = createMuiTheme({
  palette: {
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  customPalette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
  },
  customTypography: {
    tab: {
      textTransform: 'none',
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
});

export default BaseThemeProvider;
