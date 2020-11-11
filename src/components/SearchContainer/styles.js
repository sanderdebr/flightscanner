import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    height: '65vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    '&:before': {
      zIndex: -1,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(38deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 100%)',
    },

    '&:after': {
      zIndex: -2,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage:
        'url(https://source.unsplash.com/1600x900/?travel)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
}));

export default useStyles;
