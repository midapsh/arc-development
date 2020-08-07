import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    customPalette: {
      common: {
        blue: string;
        orange: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    customPalette: {
      common: {
        blue: string;
        orange: string;
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
});

export default BaseThemeProvider;
