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
    logo: {
      height: '7em',
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
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',

      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',

      height: '45px',
      color: 'white',
    },
  }),
);
