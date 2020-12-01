import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

// Theme styling is available in all components

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: grey,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
