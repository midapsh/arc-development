import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: {
      common: {
        arcBlue: string;
        arcOrange: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette: {
      common: {
        arcBlue: string;
        arcOrange: string;
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
      arcBlue,
      arcOrange,
    },
  },
});

export default BaseThemeProvider;
