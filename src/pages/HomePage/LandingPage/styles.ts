import { makeStyles } from '@material-ui/styles';
import {
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: AugmentedTheme) => {
  return createStyles({
    animation: {
      maxWidth: '50em',
      minWidth: '21em',
      marginTop: '2em',
      marginLeft: '10%',
    },
    estimateButton: {
      ...theme.customTypography.estimate,
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 50,
      height: 45,
      width: 145,
      marginRight: 40,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
  });
});
