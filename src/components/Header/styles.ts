import { makeStyles } from '@material-ui/styles';
import {
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';

export const NO_ELEVATION = 0;
export const MENU_STYLE = { zIndex: -1 };

export const useStyles = makeStyles((theme: AugmentedTheme) => {
  MENU_STYLE.zIndex = theme.zIndex.modal + 2;
  return createStyles({
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '4em',
      [theme.breakpoints.down('md')]: {
        marginBottom: '3em',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '2em',
      },
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
      [theme.breakpoints.down('md')]: {
        height: '7em',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5.5em',
      },
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
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    menuPaper: {
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
    drawer: {
      backgroundColor: theme.customPalette.common.blue,
    },
    drawerIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerIcon: {
      height: '50px',
      width: '50px',
    },
    drawerItemText: {
      ...theme.customTypography.tab,
      color: 'white',
      opacity: 0.7,
    },
    drawerItemSelected: {
      opacity: 1,
    },
    drawerItemEstimate: {
      backgroundColor: theme.customPalette.common.orange,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.secondary.dark,
      },
      '&.Mui-selected': {
        opacity: 0.7,
        color: theme.palette.secondary.dark,
        '&:hover, &:focus': {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
    drawerItemEstimateSelected: {
      opacity: 1,
      '&.Mui-selected': {
        opacity: 0.7,
        backgroundColor: theme.customPalette.common.orange,
        '&:hover, &:focus': {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
  });
});
