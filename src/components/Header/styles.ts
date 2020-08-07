import { makeStyles } from '@material-ui/styles';
import {
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '3em',
    },
    logoContainer: {
      padding: 0,
      minWidth: 'unset',
      '&:hover': {
        backgroungColor: 'transparent',
      },
    },
    logo: {
      height: '8em',
    },
    tabContainer: {
      marginLeft: 'auto',
    },
    tab: {
      ...theme.customTypography.tab,
      minWidth: 10,
      marginLeft: '25px',
    },
    button: {
      ...theme.customTypography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    },
    menu: {
      backgroundColor: theme.customPalette.common.blue,
      color: 'white',
      borderRadius: 0,
    },
    menuItem: {
      ...theme.customTypography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
  }),
);
