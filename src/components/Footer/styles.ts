import { makeStyles } from '@material-ui/styles';
import {
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: AugmentedTheme) => {
  return createStyles({
    footer: {
      backgroundColor: theme.customPalette.common.blue,
      width: '100%',
      zIndex: theme.zIndex.modal + 2,
      position: 'relative',
    },
    footerAdornment: {
      width: '22em',
      verticalAlign: 'bottom',
      [theme.breakpoints.down('md')]: {
        width: '18em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '14em',
      },
    },
    mainContainer: {
      position: 'absolute',
    },
    link: {
      color: 'white',
      fontFamily: 'Arial',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    socialContainer: {
      position: 'absolute',
      marginTop: '-6em',
      right: '1.5em',
      [theme.breakpoints.down('xs')]: {
        right: '0.6em',
      },
    },
    icon: {
      height: '4em',
      width: '4em',
      [theme.breakpoints.down('xs')]: {
        height: '2.5em',
        width: '2.5em',
      },
    },
  });
});
