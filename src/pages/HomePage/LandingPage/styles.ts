import { makeStyles } from '@material-ui/styles';
import {
  createStyles,
  Theme as AugmentedTheme,
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: AugmentedTheme) => {
  return createStyles({
    mainContainer: {
      marginTop: '5em',
      [theme.breakpoints.down('md')]: {
        marginTop: '3em',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '2em',
      },
    },
    animation: {
      maxWidth: '50em',
      minWidth: '21em',
      marginTop: '2em',
      marginLeft: '10%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '30em',
      },
    },
    buttonContainer: {
      marginTop: '1em',
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
    heroTextContainer: {
      minWidth: '24em',
      marginLeft: '1em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    learnButtonHero: {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      height: 45,
      width: 145,
    },
  });
});
