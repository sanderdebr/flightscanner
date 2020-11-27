import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
  },
  form: {
    position: 'inherit',
    display: 'grid',
    gridGap: theme.spacing(3),
    gridTemplateRows: 'repeat(5, 1fr)',
    padding: theme.spacing(4),

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '& > *': {
      flex: 1,
      marginRight: theme.spacing(1),
    },
    '& > :last-child': {
      marginRight: 0,
    },
  },
}));

export default useStyles;
