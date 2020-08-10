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
      width: '20em',
      verticalAlign: 'bottom',
      [theme.breakpoints.down('md')]: {
        width: '21em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '15em',
      },
    },
  });
});
