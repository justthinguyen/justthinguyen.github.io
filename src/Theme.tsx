import { createTheme, ThemeOptions } from '@mui/material/styles';


const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#9a2351',
      contrastText: '#ffebec',
    },
    secondary: {
      main: '#ffebec',
      contrastText: '#1d2547',
    },
  },
  typography: {
    fontFamily: '"DomaineText",Georgia,serif',
  },
};

const theme = createTheme(themeOptions);

export default theme;